"use strict";(()=>{var e={};e.id=1455,e.ids=[1455],e.modules={54230:e=>{e.exports=require("glob")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},38316:e=>{e.exports=require("zod")},73292:e=>{e.exports=require("fs/promises")},71017:e=>{e.exports=require("path")},88657:(e,r,a)=>{a.r(r),a.d(r,{config:()=>_,default:()=>c,routeModule:()=>m});var t={};a.r(t),a.d(t,{default:()=>handler});var i=a(2573),o=a(29444),n=a(11089),s=a(71017),l=a.n(s),d=a(71689),u=a(54230);let f=require("jszip");var p=a.n(f),g=a(73292);async function handler(e,r){if("GET"===e.method){if(null==process.env.RATOS_CONFIGURATION_PATH)return r.status(500).json({result:"error",data:{message:"RATOS_CONFIGURATION_PATH environment variable not set"}});let e=d.Rz.parse(process.env),a=await (0,u.glob)([`${e.RATOS_DATA_DIR}/*.+(cfg|json)`]);a=a.filter((e,r)=>a.indexOf(e)===r);let t=await (0,u.glob)([`${e.KLIPPER_CONFIG_PATH}/../logs/*.log`,`${e.LOG_FILE}`]);t=t.filter((e,r)=>t.indexOf(e)===r);let i=await (0,u.glob)([`${e.KLIPPER_CONFIG_PATH}/+([a-z|A-Z]|-)+(+([0-9])*(_|-)*([0-9])).cfg`]),o=(await (0,u.glob)([`${e.KLIPPER_CONFIG_PATH}/*.cfg`])).filter(e=>!i.includes(e));o=o.filter((e,r)=>o.indexOf(e)===r);let n=await (0,u.glob)(["/var/log/ratos-configurator.log"]);console.log(a);let s=new(p());a.forEach(e=>{s.file(l().join("RatOS",l().basename(e)),(0,g.readFile)(e))}),t.forEach(e=>{s.file(l().join("logs",l().basename(e)),(0,g.readFile)(e))}),o.forEach(e=>{s.file(l().join("configs",l().basename(e)),(0,g.readFile)(e))}),n.forEach(e=>{s.file(l().join("var/log",l().basename(e)),(0,g.readFile)(e))});try{let e=s.generateNodeStream({type:"nodebuffer",streamFiles:!0});return r.setHeader("Content-Type","application/x-zip"),r.setHeader("Content-Disposition","attachment; filename=ratos-debug.zip"),r.status(200).send(e)}catch(e){return r.status(200).json({result:"error",data:{message:"Something went wrong, the irony.."}})}}}let c=(0,n.l)(t,"default"),_=(0,n.l)(t,"config"),m=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/debug-zip",pathname:"/api/debug-zip",bundlePath:"",filename:""},userland:t})}};var r=require("../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[1022,1689],()=>__webpack_exec__(88657));module.exports=a})();