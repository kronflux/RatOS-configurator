"use strict";exports.id=1709,exports.ids=[1709],exports.modules={61709:(e,l,t)=>{t.d(l,{j:()=>cva});let falsyToString=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,cx=function(){for(var e,l,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(l=function r(e){var l,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(l=0;l<e.length;l++)e[l]&&(t=r(e[l]))&&(n&&(n+=" "),n+=t);else for(l in e)e[l]&&(n&&(n+=" "),n+=l)}return n}(e))&&(n&&(n+=" "),n+=l);return n},cva=(e,l)=>t=>{var n;if((null==l?void 0:l.variants)==null)return cx(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:o}=l,s=Object.keys(i).map(e=>{let l=null==t?void 0:t[e],n=null==o?void 0:o[e];if(null===l)return null;let s=falsyToString(l)||falsyToString(n);return i[e][s]}),u=t&&Object.entries(t).reduce((e,l)=>{let[t,n]=l;return void 0===n||(e[t]=n),e},{}),a=null==l?void 0:null===(n=l.compoundVariants)||void 0===n?void 0:n.reduce((e,l)=>{let{class:t,className:n,...i}=l;return Object.entries(i).every(e=>{let[l,t]=e;return Array.isArray(t)?t.includes({...o,...u}[l]):({...o,...u})[l]===t})?[...e,t,n]:e},[]);return cx(e,s,a,null==t?void 0:t.class,null==t?void 0:t.className)}}};