(()=>{var e={};e.id=189,e.ids=[189],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},38316:e=>{"use strict";e.exports=require("zod")},39491:e=>{"use strict";e.exports=require("assert")},50852:e=>{"use strict";e.exports=require("async_hooks")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},73292:e=>{"use strict";e.exports=require("fs/promises")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},98188:e=>{"use strict";e.exports=require("module")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},14521:e=>{"use strict";e.exports=require("readline")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},26144:e=>{"use strict";e.exports=require("vm")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},35690:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>l,routeModule:()=>x,tree:()=>c});var s=t(46855),o=t(12875),i=t(7611),a=t.n(i),n=t(32600),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);t.d(r,u);let c=["",{children:["analysis",{children:["macros",{children:["[id]",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,23850)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/edit/page.tsx"]}]},{loading:[()=>Promise.resolve().then(t.bind(t,59428)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/edit/loading.tsx"]}]},{}]},{loading:[()=>Promise.resolve().then(t.bind(t,87350)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,29073)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,50131)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,43751)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/layout.tsx"],template:[()=>Promise.resolve().then(t.bind(t,22709)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/template.tsx"],error:[()=>Promise.resolve().then(t.bind(t,62090)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/error.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,44859)),"/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,28626,23)),"next/dist/client/components/not-found-error"]}],l=["/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/edit/page.tsx"],d="/analysis/macros/[id]/edit/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/analysis/macros/[id]/edit/page",pathname:"/analysis/macros/[id]/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},28176:(e,r,t)=>{Promise.resolve().then(t.bind(t,26526)),Promise.resolve().then(t.bind(t,68425))},26526:(e,r,t)=>{"use strict";t.r(r),t.d(r,{EditMacro:()=>EditMacro});var s=t(28793),o=t(82206),i=t(38143),a=t(16779),n=t(7781),u=t(68567),c=t(3966),l=t(49488),d=t(68455),p=t(18835),x=t(30015);let EditMacro=({id:e})=>{let[r,t]=(0,c.useState)(!1),[m,h]=(0,c.useState)(!1),[g]=a.SX.analysis.findMacro.useSuspenseQuery({id:e}),f=(0,u.cI)({defaultValues:g,resolver:(0,o.F)(i.Xz)}),y=a.SX.analysis.updateMacro.useMutation(),q=f.handleSubmit(async e=>{let r=await y.mutateAsync(e);if(null==r.result)return(0,p.j)().error("Failed to save macro",e),d.A.error("Failed to save macro",{description:"An unknown error occurred and the macro seem to have disappeared from the database. This shouldn't happen. Please contact support."}),!1;d.A.success("Macro updated!",{description:"The changes to the macro was succesfully saved."}),f.reset(r.result)});return(0,s.jsxs)(x.l0,{...f,children:[s.jsx(n.v,{form:f,submit:m?q:async()=>t(!0)}),s.jsx(l.aR,{open:r,children:(0,s.jsxs)(l._T,{children:[(0,s.jsxs)(l.fY,{children:[s.jsx(l.f$,{children:"Are you sure?"}),s.jsx(l.yT,{children:"This action cannot be undone. This will permanently delete your previous recordings for this macro."})]}),(0,s.jsxs)(l.xo,{children:[s.jsx(l.le,{onClick:()=>t(!1),children:"Cancel"}),s.jsx(l.OL,{variant:"danger",onClick:()=>{h(!0),t(!1),q()},children:"Continue"})]})]})})]})}},23850:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>Page});var s=t(86700);t(93215);var o=t(64702),i=t(23646);let a=(0,i.createProxy)(String.raw`/home/runner/work/RatOS-configurator/RatOS-configurator/src/app/analysis/macros/[id]/edit/edit.tsx`),{__esModule:n,$$typeof:u}=a;a.default;let c=a.EditMacro;var l=t(59428);function Page({params:e}){return s.jsx("div",{className:"h-full @container",children:s.jsx(o.r,{fallback:s.jsx(l.default,{}),children:s.jsx(c,{id:e.id})})})}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[7795,7682,233,6760,3e3,5885,5995,2808,6636,1034,4854,3135,8425,2505,6262,453,901,4241,3762,162,7781,9488,9428],()=>__webpack_exec__(35690));module.exports=t})();