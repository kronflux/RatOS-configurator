exports.id=3452,exports.ids=[3452],exports.modules={48283:()=>{},61739:(e,r,t)=>{"use strict";t.d(r,{o:()=>TextInput});var a=t(28793),n=t(88590),l=t(64249),s=t(53640),i=t(52032),d=t.n(i),c=t(3966),o=t(57748);let TextInput=e=>{let r=(0,c.useRef)(d()(e)),{onChange:t}=e,[i,u]=(0,c.useState)(!1);(0,o.d)("h-5 w-5",(e.error,"text-red-500"));let x=e.error?a.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",children:a.jsx(s,{className:"h-5 w-5 text-red-500","aria-hidden":"true"})}):null,m=(0,o.d)(e.error?"ring-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 dark:ring-red-500 dark:text-red-400 dark:placeholder-red-700":"ring-zinc-300 text-zinc-900 placeholder-zinc-300 focus:ring-brand-600 dark:ring-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-700 dark:focus:ring-brand-400 ","block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-leftshadow-sm ring-1 ring-inset focus:outline-none dark:bg-zinc-800 sm:text-sm sm:leading-6 border-0"),h=e.error?a.jsx("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400",id:r.current+"-error",children:e.error}):null,p=e.help?a.jsx("p",{className:"mt-2 text-sm text-zinc-500",id:"email-description",children:e.help}):null,b=(0,c.useCallback)(r=>{t?.("number"===e.type?parseFloat(r.currentTarget.value):r.currentTarget.value)},[t,e.type]),f=(0,c.useCallback)(()=>{u(e=>!e)},[]),g="password"===e.type?a.jsx("div",{onClick:f,className:`absolute inset-y-0 ${null!=x?"right-6":"right-0"} flex cursor-pointer items-center pr-3`,children:i?a.jsx(n,{className:"h-5 w-5 text-zinc-400"}):a.jsx(l,{className:"h-5 w-5 text-zinc-400"})}):null;return(0,a.jsxs)("div",{children:[a.jsx("label",{className:"block text-sm font-semibold leading-6 text-zinc-700 dark:text-zinc-300",children:e.label}),(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[a.jsx("input",{...e,type:i?"text":e.type,className:m,placeholder:e.placeholder,defaultValue:e.defaultValue,value:e.value,onChange:b,"aria-invalid":!!e.error,"aria-describedby":e.error?r.current+"-error":void 0}),x,g]}),h??p]})}},21410:(e,r,t)=>{"use strict";t.d(r,{Z:()=>Toggle});var a=t(28793),n=t(30354);t(3966);var l=t(23681),s=t(57748);let Toggle=e=>(0,a.jsxs)(n.r.Group,{as:"div",className:"flex items-center justify-between gap-x-2",children:[(0,a.jsxs)("span",{className:"flex flex-grow flex-col",children:[a.jsx(n.r.Label,{as:"span",className:(0,l.m)("text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300",e.onLabel&&e.value&&"opacity-70",e.onLabel&&!e.value&&"text-brand-700 dark:text-brand-500"),passive:!0,children:e.label}),e.description&&a.jsx(n.r.Description,{as:"span",className:"text-sm text-zinc-500 dark:text-zinc-400",children:e.description})]}),a.jsx(n.r,{checked:e.value,onChange:e.onChange,className:(0,s.d)(e.value&&null==e.onLabel?"bg-brand-600":"bg-zinc-200 dark:bg-zinc-950/50","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"),children:a.jsx("span",{"aria-hidden":"true",className:(0,s.d)(e.value?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md shadow-black/20 ring-0 transition duration-200 ease-in-out dark:border-t dark:border-zinc-600 dark:bg-zinc-700 dark:shadow-black/100 ")})}),e.onLabel&&a.jsx("span",{className:"flex flex-grow flex-col",children:a.jsx(n.r.Label,{as:"span",className:(0,l.m)("text-sm font-medium leading-6 text-zinc-700 dark:text-zinc-300",e.onLabel&&!e.value&&"opacity-70",e.onLabel&&e.value&&"text-brand-700 dark:text-brand-500"),passive:!0,children:e.onLabel})})]})},24607:(e,r,t)=>{"use strict";t.d(r,{S:()=>useChangeEffect});var a=t(3966);let useChangeEffect=(e,r,t=!1)=>{let[n,l]=(0,a.useState)(0),s=(0,a.useRef)([...e]);(0,a.useEffect)(()=>{let r=!1;s.current.forEach((t,a)=>{t!==e[a]&&(r=!0)}),r&&l(e=>t?e+1:1),s.current=[...e]},[...e]);let i=(0,a.useCallback)(()=>{l(0)},[]);return(0,a.useEffect)(()=>{if(null!=r&&n>0){let e=setTimeout(()=>{l(0)},r);return()=>{clearTimeout(e)}}},[r,n]),[n>0,i]}}};