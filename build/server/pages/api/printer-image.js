"use strict";(()=>{var e={};e.id=378,e.ids=[378,2888],e.modules={18910:e=>{e.exports=require("@tanstack/react-query")},85337:e=>{e.exports=require("@trpc/client")},4129:e=>{e.exports=require("@trpc/next")},56368:e=>{e.exports=require("@trpc/server")},41169:e=>{e.exports=require("class-variance-authority")},68103:e=>{e.exports=require("clsx")},56988:e=>{e.exports=require("deep-equal")},54230:e=>{e.exports=require("glob")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},24580:e=>{e.exports=require("node-cache")},71569:e=>{e.exports=require("object-hash")},58545:e=>{e.exports=require("pino")},80666:e=>{e.exports=require("pino-pretty-browser")},16689:e=>{e.exports=require("react")},7636:e=>{e.exports=require("react-use-websocket")},20997:e=>{e.exports=require("react/jsx-runtime")},29755:e=>{e.exports=require("recoil")},44101:e=>{e.exports=require("recoil-sync")},5873:e=>{e.exports=require("tailwind-merge")},53489:e=>{e.exports=require("ts-deepmerge")},38316:e=>{e.exports=require("zod")},15140:e=>{e.exports=require("zod-refine")},34475:e=>{e.exports=import("file-type")},32081:e=>{e.exports=require("child_process")},57147:e=>{e.exports=require("fs")},73292:e=>{e.exports=require("fs/promises")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},14521:e=>{e.exports=require("readline")},73837:e=>{e.exports=require("util")},62652:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>n,routeModule:()=>l});var i=t(2573),a=t(29444),o=t(11089),u=t(8041),p=e([u]);u=(p.then?(await p)():p)[0];let n=(0,o.l)(u,"default"),d=(0,o.l)(u,"config"),l=new i.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/printer-image",pathname:"/api/printer-image",bundlePath:"",filename:""},userland:u});s()}catch(e){s(e)}})},8041:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>handler});var i=t(57147),a=t.n(i),o=t(73837),u=t(71017),p=t.n(u),n=t(34475),d=t(43323),l=e([n]);async function handler(e,r){if("GET"===e.method){if(null==e.query.printerId)return r.status(405).json({result:"error",data:{message:"printerId parameter missing"}});let t=await (0,d.VZ)(),s=t.find(r=>r.id===e.query.printerId);if(null==s)return r.status(405).json({result:"error",data:{message:"No supported printer exist with id "+e.query.printerId}});let i=p().join(s.path,s.image);try{let e=await (0,o.promisify)(a().readFile)(i),t=await (0,n.fileTypeFromBuffer)(e);if(null==t)return r.status(500).json({result:"error",data:{message:"File is not a valid image."}});return r.setHeader("Content-Type",t.mime),r.status(200).send(e)}catch(e){return r.status(200).json({result:"error",data:{message:"Image file does not exist."}})}}return r.status(405).json({result:"error",data:{message:"Method not allowed"}})}n=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})}};var r=require("../../webpack-api-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[1022,9953,1406],()=>__webpack_exec__(62652));module.exports=t})();