'use client';
import React, { useCallback, useState } from 'react';
import {
	PrinterConfigurationState,
	XEndstopState,
	serializePartialPrinterConfiguration,
	serializePrinterConfiguration,
	usePrinterConfiguration,
} from '../../hooks/usePrinterConfiguration';
import { StepScreen, StepScreenProps, useSteps } from '../../hooks/useSteps';
import { StepNavButtons } from '../step-nav-buttons';
import { ErrorMessage } from '../error-message';
import { trpc } from '../../helpers/trpc';
import { Badge } from '../common/badge';
import { InfoMessage } from '../info-message';
import { WarningMessage } from '../warning-message';
import { Button } from '../button';
import { useRecoilCallback } from 'recoil';
import { xEndstopOptions } from '../../data/endstops';
import { PrinterConfiguration } from '../../zods/printer-configuration';
import { PrinterAxis } from '../../zods/motion';

const CompletionSteps: StepScreen[] = [
	{
		id: '01',
		name: 'Confirm configuration',
		description: 'Confirm your printer configuration',
		href: '#',
		renderScreen: (screenProps) => <ConfirmConfig {...screenProps} key={screenProps.key} />,
	},
	{
		id: '02',
		name: 'Setup complete',
		description: "You've completed the initial setup, congratulations!",
		href: '#',
		renderScreen: (screenProps) => <ProceedToMainsail {...screenProps} key={screenProps.key} />,
	},
];

export const ConfirmConfig: React.FC<StepScreenProps> = (props) => {
	const { parsedPrinterConfiguration, partialPrinterConfiguration, queryErrors } = usePrinterConfiguration();
	const [ignoreEndstopWarning, setIgnoreEndstopWarning] = useState(false);

	const setToolboardEndstop = useRecoilCallback(
		({ snapshot, set }) =>
			async () => {
				const printerConfig = await snapshot.getPromise(PrinterConfigurationState);
				if (printerConfig == null) {
					return;
				}
				const toolboardEndstop = xEndstopOptions(serializePartialPrinterConfiguration(printerConfig)).find(
					(x) => x.id === 'endstop-toolboard',
				);
				if (toolboardEndstop != null) {
					set(XEndstopState, toolboardEndstop);
				}
			},
		[],
	);

	const errors: React.ReactNode[] = queryErrors.slice();

	const controlboardDetected = trpc.mcu.detect.useQuery(
		{ boardPath: partialPrinterConfiguration != null ? partialPrinterConfiguration.controlboard?.path ?? '' : '' },
		{
			enabled: partialPrinterConfiguration?.controlboard != null,
		},
	);
	const toolboardDetected = trpc.mcu.detect.useQuery(
		{ boardPath: partialPrinterConfiguration != null ? partialPrinterConfiguration.toolboard?.path ?? '' : '' },
		{
			enabled: partialPrinterConfiguration != null && partialPrinterConfiguration.toolboard != null,
		},
	);
	const saveConfigurationMutation = trpc.printer.saveConfiguration.useMutation();
	const saveConfiguration = useCallback(async () => {
		if (parsedPrinterConfiguration.success) {
			saveConfigurationMutation.mutate(
				{ config: serializePrinterConfiguration(parsedPrinterConfiguration.data) },
				{
					onSuccess: props.nextScreen,
					onError: (error) => window.scrollTo(0, 0),
				},
			);
		}
	}, [parsedPrinterConfiguration, saveConfigurationMutation, props.nextScreen]);

	if (saveConfigurationMutation.error) {
		errors.push(saveConfigurationMutation.error.message);
	}
	if (parsedPrinterConfiguration.success === false) {
		// console.error(parsedPrinterConfiguration.error);
		const formErrors = parsedPrinterConfiguration.error.flatten().formErrors;
		const fieldErrors = parsedPrinterConfiguration.error.flatten().fieldErrors;
		if (formErrors.length) {
			formErrors.forEach((message) => {
				errors.push(message);
			});
		} else {
			for (const field in fieldErrors) {
				errors.push(
					<>
						<span className="capitalize">{field}</span>: {fieldErrors[field as keyof PrinterConfiguration]?.[0]}
					</>,
				);
			}
		}
	}

	return (
		<>
			<div className="p-8">
				{' '}
				<div className="mb-5 border-b border-zinc-200 pb-5 dark:border-zinc-700">
					<h3 className="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100">{props.name}</h3>
					<p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">{props.description}</p>
				</div>
				<div className="space-y-4 text-zinc-700 dark:text-zinc-300">
					{parsedPrinterConfiguration.success && (
						<div>
							<div className="">
								<h3 className="text-base font-medium leading-7 text-zinc-900 dark:text-zinc-100">
									The following setup will be written to the klipper config
								</h3>
							</div>
							{errors.length > 0 && (
								<div className="mt-2">
									<ErrorMessage>
										{errors.map((e, i) => (
											<div className="mt-2" key={i}>
												{e}
											</div>
										))}
									</ErrorMessage>
								</div>
							)}
							<div className="mt-4">
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4 border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-2">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Printer</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.printer != null
												? `${parsedPrinterConfiguration.data.printer.manufacturer} ${parsedPrinterConfiguration.data.printer.name} ${parsedPrinterConfiguration.data.size}`
												: 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="space-x-2 text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
											<span>Controlboard</span>
											{parsedPrinterConfiguration.data.controlboard && (
												<Badge color={controlboardDetected.data === true ? 'green' : 'red'}>
													{controlboardDetected.data === true ? 'Detected' : 'Not detected'}
												</Badge>
											)}
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.controlboard != null
												? `${parsedPrinterConfiguration.data.controlboard.manufacturer} ${parsedPrinterConfiguration.data.controlboard.name}`
												: 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="space-x-2 text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
											<span>Toolboard</span>{' '}
											{parsedPrinterConfiguration.data.toolboard && (
												<Badge color={toolboardDetected.data === true ? 'green' : 'red'}>
													{toolboardDetected.data === true ? 'Detected' : 'Not detected'}
												</Badge>
											)}
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.toolboard == null
												? 'None selected'
												: `${parsedPrinterConfiguration.data.toolboard?.manufacturer} ${parsedPrinterConfiguration.data.toolboard?.name}`}
										</dd>
									</div>
									{((parsedPrinterConfiguration.data.toolboard != null && !toolboardDetected.data) ||
										(parsedPrinterConfiguration.data.controlboard != null && !controlboardDetected.data)) && (
										<div className="sm:col-span-2">
											<WarningMessage>
												<div className="space-y-2">
													{parsedPrinterConfiguration.data.toolboard != null && !toolboardDetected.data && (
														<div>
															The toolboard you have selected does not seem to be connected, you can still save the
															config and proceed to mainsail, but you will get an 'mcu' connection error.
														</div>
													)}
													{parsedPrinterConfiguration.data.controlboard != null && !controlboardDetected.data && (
														<div>
															The controlboard you have selected does not seem to be connected, you can still save the
															config and proceed to mainsail, but you will get an 'mcu' connection error.
														</div>
													)}
												</div>
											</WarningMessage>
										</div>
									)}
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4 border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Hotend</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.hotend?.title ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Thermistor</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.thermistor ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Extruder</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.extruder?.title ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Probe</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.probe?.title ?? 'None selected'}
										</dd>
									</div>
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4  border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">X Endstop</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.xEndstop?.title ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Y Endstop</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.yEndstop?.title ?? 'None selected'}
										</dd>
									</div>
									{parsedPrinterConfiguration.data.toolboard != null &&
										parsedPrinterConfiguration.data.xEndstop?.id === 'endstop' &&
										!ignoreEndstopWarning && (
											<div className="sm:col-span-2">
												<WarningMessage>
													The current configuration assumes the X endstop is connected to your controlboard, do you want
													to use an endstop connected to the toolboard instead?
													<div className="mt-4 flex justify-end space-x-2">
														<Button onClick={setToolboardEndstop} color="warning">
															Yes, use the toolboard connection
														</Button>
														<Button onClick={() => setIgnoreEndstopWarning(true)} color="plain">
															No, use the controlboard connection
														</Button>
													</div>
												</WarningMessage>
											</div>
										)}
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4  border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Part cooling fan</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.partFan?.title ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
											Hotend cooling fan
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.hotendFan?.title ?? 'None selected'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
											Controller cooling fan
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.controllerFan?.title ?? 'None selected'}
										</dd>
									</div>
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4  border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">X Accelerometer</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.xAccelerometer?.title ?? 'None'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Y Accelerometer</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.yAccelerometer?.title ?? 'None'}
										</dd>
									</div>
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4  border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Performance mode</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.performanceMode ? 'Enabled' : 'Disabled'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">Stealtchop</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.stealthchop ? 'Enabled' : 'Disabled'}
										</dd>
									</div>
									<div className="sm:col-span-1">
										<dt className="text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-100">
											Standstill Stealth
										</dt>
										<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
											{parsedPrinterConfiguration.data.standstillStealth ? 'Enabled' : 'Disabled'}
										</dd>
									</div>
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4  border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									{parsedPrinterConfiguration.data.rails?.map((rail, i) => (
										<div className="sm:col-span-1" key={i}>
											<dt className="text-sm font-medium capitalize leading-6 text-zinc-900 dark:text-zinc-100">
												{rail.axis === PrinterAxis.extruder ? rail.axis : rail.axis.toLocaleUpperCase()} Motion
												Configuration
											</dt>
											<dd className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300 sm:mt-2">
												<div className="font-medium">
													{rail.driver.title} @ {rail.voltage}V
												</div>
												<div className="font-medium">
													{rail.stepper.title} @ {rail.current}A RMS
												</div>
												<div className="font-medium">{rail.microstepping} microsteps</div>
											</dd>
										</div>
									))}
								</dl>
								<dl className="grid grid-cols-1 gap-x-4 gap-y-4 border-t border-zinc-100 py-4 dark:border-zinc-700 sm:grid-cols-2">
									<div className=" dark:border-zinc-700 sm:col-span-2">
										<InfoMessage>
											If the above information is correct, go ahead and save the configuration. If not, go back and
											change the configuration by clicking the steps in the "Setup Progress" panel.
										</InfoMessage>
									</div>
								</dl>
							</div>
						</div>
					)}
				</div>
			</div>
			<StepNavButtons
				left={{ onClick: props.previousScreen }}
				right={{
					onClick: saveConfiguration,
					disabled: !parsedPrinterConfiguration.success,
					isLoading: saveConfigurationMutation.isLoading,
					label: 'Confirm and save',
				}}
			/>
		</>
	);
};

export const ProceedToMainsail: React.FC<StepScreenProps> = (props) => {
	const openMainsail = () => {
		window.location.href = 'http://' + window.location.hostname;
	};
	return (
		<>
			<div className="p-8">
				{' '}
				<div className="mb-5 border-b border-zinc-200 pb-5 dark:border-zinc-700">
					<h3 className="text-lg font-medium leading-6 text-zinc-900 dark:text-zinc-100">{props.name}</h3>
					<p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">{props.description}</p>
				</div>
				<div className="space-y-4 text-zinc-700 dark:text-zinc-300">
					Now that the base configuration has been saved, you can connect to your printer via Mainsail and start
					calibrating your printer.
					<div className="mt-5">
						You can now continue to{' '}
						<a
							href="https://os.ratrig.com/docs/configuration#initial-configuration"
							target="_blank"
							rel="noreferrer"
							className="cursor-pointer text-brand-700 hover:text-brand-600"
						>
							the next step in the documentation.
						</a>
					</div>
				</div>
			</div>
			<StepNavButtons
				left={{ onClick: props.previousScreen }}
				right={{
					onClick: openMainsail,
					label: 'Open Mainsail',
				}}
			/>
		</>
	);
};

export const WizardComplete: React.FC<StepScreenProps> = (props) => {
	const { currentStep, screenProps } = useSteps({
		steps: CompletionSteps,
		parentScreenProps: props,
	});

	return currentStep.renderScreen({
		...screenProps,
	});
};