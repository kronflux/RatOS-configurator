import { MoonrakerPrinterState, MoonrakerPrinterStateErrorEnum, parseMoonrakerHTTPResponse } from '@/zods/moonraker';

export const queryPrinterState = async (): Promise<
	Zod.output<typeof MoonrakerPrinterState>['status']['print_stats']['state']
> => {
	try {
		const moonrakerRes = await fetch('http://localhost:7125/printer/objects/query?print_stats');
		if (moonrakerRes)
			return (await parseMoonrakerHTTPResponse(moonrakerRes, MoonrakerPrinterState)).result.status.print_stats.state;
	} catch (e) {
		if (
			e instanceof Error &&
			e.cause ===
				(MoonrakerPrinterStateErrorEnum.MOONRAKER_OFFLINE ||
					e.cause === MoonrakerPrinterStateErrorEnum.MOONRAKER_INTERNAL_ERROR)
		) {
			return 'error';
		} else {
			throw e;
		}
	}
	return 'error';
};

export const klipperRestart = async (force = false) => {
	if (force || ['error', 'complete', 'canceled', 'standby'].includes(await queryPrinterState())) {
		await fetch('http://localhost:7125/printer/restart', { method: 'POST' });
		return true;
	}
	return false;
};