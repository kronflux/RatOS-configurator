"use strict";exports.id=2251,exports.ids=[2251],exports.modules={48722:(o,e,t)=>{t.d(e,{Jt:()=>l,uo:()=>xEndstopOptions});var r=t(30819);let xEndstopOptions=(o,e)=>{let t=[];return e?.toolboard!=null&&t.push({id:"endstop-toolboard",title:"Physical Endstop",badge:[{color:"sky",children:`${e.toolboard.name}${null!=e.toolNumber&&` T${e.toolNumber}`}`}]}),e?.axis===r.po.x&&(t.push({id:"endstop",title:"Physical Endstop",badge:[{color:"purple",children:o?.controlboard?.name??"Control Board"}]}),t.push({id:"sensorless",title:"Sensorless Homing",badge:[{color:"purple",children:o?.controlboard?.name??"Control Board"}]})),t},l={id:"endstop",title:"Physical Endstop",badge:[{color:"purple",children:"Control Board"}]}},82251:(o,e,t)=>{t.d(e,{YC:()=>useToolheads,yk:()=>useToolheadConfiguration});var r=t(45041),l=t(79030),n=t(36986),d=t(51495),i=t(86053),s=t(86128),a=t(93073),u=t(48722),h=t(89909);let useToolheads=()=>{let o=(0,n.useRecoilValue)(s.$T),e=(0,d.useMemo)(()=>o?.filter(Boolean).map(o=>new r.D(o)),[o]);return e},useToolheadConfiguration=(o,e=!0)=>{let t=(0,n.useRecoilValue)(s.wm),p=(0,d.useRef)(t);p.current!==t&&t.length>0&&(p.current=t.slice());let c=(0,d.useMemo)(()=>{let t=p.current?.filter(Boolean).map(o=>new r.D(o)),l=t?.find(e=>e.getTool()===o||e.getMotionAxis()===o||e.getExtruderAxis()===o);if(null==l&&e)throw Error(`Toolhead with number or axis ${o} not found`);return l??null},[e,o,p.current]),[m,b]=(0,d.useState)(!1),f=(0,n.useRecoilCallback)(({set:o,snapshot:e})=>async t=>{let n=new r.D(t),d=await e.getPromise((0,s.AF)(n.getTool()));if(null==d)throw Error(`Toolhead ${n.getToolCommand()} not found`);let p=new r.D(d);if(t.extruder.id!=p.getExtruder().id&&null!=t.extruder.stepper){let e=(0,l.WZ)(t.extruder.stepper);null!=e&&o((0,i.ew)(n.getExtruderAxis()),o=>null==o?null:{...o,stepper:e.id,current:t.extruder.current??.71*e.maxPeakCurrent})}if(t.toolboard?.id!==p.getToolboard()?.id){if(null==t.toolboard&&"endstop-toolboard"===t.xEndstop.id&&(t.xEndstop=u.Jt),t.partFan?.id.endsWith("-toolboard")){let o=(0,h.gL)(null,t).shift();if(null==o)throw Error(`No part fan options available for current T${t.toolNumber} configuration`);t.partFan=o}if(t.hotendFan?.id.endsWith("-toolboard")){let o=(0,h.Yo)(null,t).shift();if(null==o)throw Error(`No hotend fan options available for current T${t.toolNumber} configuration`);t.hotendFan=o}}t.thermistor!==p.getThermistor()&&t.thermistor!==t.hotend.thermistor?b(!0):t.hotend.id==p.getHotend().id||m||(t.thermistor=t.hotend.thermistor);let c=a.PY.extend({toolNumber:a.Qr}).nullable().safeParse({...t,toolNumber:p.getTool()});return c.success&&o((0,s.AF)(p.getTool()),c.data),c},[m]);return{toolhead:c,setToolhead:f}}}};