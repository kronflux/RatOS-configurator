(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6032],{35088:function(e,n,r){let a=r(49738),o=a.forwardRef(function({title:e,titleId:n,...r},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},r),e?a.createElement("title",{id:n},e):null,a.createElement("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"}))});e.exports=o},1173:function(e,n,r){"use strict";r.d(n,{v:function(){return V}});var a,o,u,l,c=r(49738),d=r(33808),f=r(1042),p=r(30008),m=r(67792),v=r(11169),g=r(67234),b=r(1924),I=r(14278),R=((a=R||{})[a.First=0]="First",a[a.Previous=1]="Previous",a[a.Next=2]="Next",a[a.Last=3]="Last",a[a.Specific=4]="Specific",a[a.Nothing=5]="Nothing",a),y=r(7385),E=r(6213),h=r(15111),x=r(42398),D=r(38010),M=r(788),N=r(54463),S=r(93570);function t(e){return[e.screenX,e.screenY]}var T=((o=T||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),$=((u=$||{})[u.Pointer=0]="Pointer",u[u.Other=1]="Other",u),w=((l=w||{})[l.OpenMenu=0]="OpenMenu",l[l.CloseMenu=1]="CloseMenu",l[l.GoToItem=2]="GoToItem",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterItem=5]="RegisterItem",l[l.UnregisterItem=6]="UnregisterItem",l);function U(e,n=e=>e){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,a=(0,E.z2)(n(e.items.slice()),e=>e.dataRef.current.domRef.current),o=r?a.indexOf(r):null;return -1===o&&(o=null),{items:a,activeItemIndex:o}}let P={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,n)=>{var r;let a=U(e),o=function(e,n){let r=n.resolveItems();if(r.length<=0)return null;let a=n.resolveActiveIndex(),o=null!=a?a:-1,u=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,a)=>(-1===o||!(a.length-r-1>=o))&&!n.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=o)&&!n.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!n.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>n.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===u?a:u}(n,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeItemIndex:o,activationTrigger:null!=(r=n.trigger)?r:1}},3:(e,n)=>{let r=""!==e.searchQuery?0:1,a=e.searchQuery+n.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(e=>{var n;return(null==(n=e.dataRef.current.textValue)?void 0:n.startsWith(a))&&!e.dataRef.current.disabled}),u=o?e.items.indexOf(o):-1;return -1===u||u===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:u,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,n)=>{let r=U(e,e=>[...e,{id:n.id,dataRef:n.dataRef}]);return{...e,...r}},6:(e,n)=>{let r=U(e,e=>{let r=e.findIndex(e=>e.id===n.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}}},A=(0,c.createContext)(null);function O(e){let n=(0,c.useContext)(A);if(null===n){let n=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,O),n}return n}function Te(e,n){return(0,d.E)(n.type,P,e,n)}A.displayName="MenuContext";let C=c.Fragment,_=(0,f.yV)(function(e,n){let r=(0,c.useReducer)(Te,{menuState:1,buttonRef:(0,c.createRef)(),itemsRef:(0,c.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:o,buttonRef:u},l]=r,p=(0,g.T)(n);(0,h.O)([u,o],(e,n)=>{var r;l({type:1}),(0,E.sP)(n,E.tJ.Loose)||(e.preventDefault(),null==(r=u.current)||r.focus())},0===a);let m=(0,S.z)(()=>{l({type:1})}),v=(0,c.useMemo)(()=>({open:0===a,close:m}),[a,m]);return c.createElement(A.Provider,{value:r},c.createElement(D.up,{value:(0,d.E)(a,{0:D.ZM.Open,1:D.ZM.Closed})},(0,f.sY)({ourProps:{ref:p},theirProps:e,slot:v,defaultTag:C,name:"Menu"})))}),k=(0,f.yV)(function(e,n){var r;let a=(0,b.M)(),{id:o=`headlessui-menu-button-${a}`,...u}=e,[l,d]=O("Menu.Button"),p=(0,g.T)(l.buttonRef,n),v=(0,m.G)(),E=(0,S.z)(e=>{switch(e.key){case I.R.Space:case I.R.Enter:case I.R.ArrowDown:e.preventDefault(),e.stopPropagation(),d({type:0}),v.nextFrame(()=>d({type:2,focus:R.First}));break;case I.R.ArrowUp:e.preventDefault(),e.stopPropagation(),d({type:0}),v.nextFrame(()=>d({type:2,focus:R.Last}))}}),h=(0,S.z)(e=>{e.key===I.R.Space&&e.preventDefault()}),x=(0,S.z)(n=>{if((0,y.P)(n.currentTarget))return n.preventDefault();e.disabled||(0===l.menuState?(d({type:1}),v.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(n.preventDefault(),d({type:0})))}),D=(0,c.useMemo)(()=>({open:0===l.menuState}),[l]),N={ref:p,id:o,type:(0,M.f)(e,l.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=l.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===l.menuState,onKeyDown:E,onKeyUp:h,onClick:x};return(0,f.sY)({ourProps:N,theirProps:u,slot:D,defaultTag:"button",name:"Menu.Button"})}),L=f.AN.RenderStrategy|f.AN.Static,z=(0,f.yV)(function(e,n){var r,a;let o=(0,b.M)(),{id:u=`headlessui-menu-items-${o}`,...l}=e,[d,v]=O("Menu.Items"),y=(0,g.T)(d.itemsRef,n),h=(0,N.i)(d.itemsRef),M=(0,m.G)(),T=(0,D.oJ)(),$=null!==T?T===D.ZM.Open:0===d.menuState;(0,c.useEffect)(()=>{let e=d.itemsRef.current;e&&0===d.menuState&&e!==(null==h?void 0:h.activeElement)&&e.focus({preventScroll:!0})},[d.menuState,d.itemsRef,h]),(0,x.B)({container:d.itemsRef.current,enabled:0===d.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let w=(0,S.z)(e=>{var n,r;switch(M.dispose(),e.key){case I.R.Space:if(""!==d.searchQuery)return e.preventDefault(),e.stopPropagation(),v({type:3,value:e.key});case I.R.Enter:if(e.preventDefault(),e.stopPropagation(),v({type:1}),null!==d.activeItemIndex){let{dataRef:e}=d.items[d.activeItemIndex];null==(r=null==(n=e.current)?void 0:n.domRef.current)||r.click()}(0,E.wI)(d.buttonRef.current);break;case I.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:R.Next});case I.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:R.Previous});case I.R.Home:case I.R.PageUp:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:R.First});case I.R.End:case I.R.PageDown:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:R.Last});case I.R.Escape:e.preventDefault(),e.stopPropagation(),v({type:1}),(0,p.k)().nextFrame(()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case I.R.Tab:e.preventDefault(),e.stopPropagation(),v({type:1}),(0,p.k)().nextFrame(()=>{(0,E.EO)(d.buttonRef.current,e.shiftKey?E.TO.Previous:E.TO.Next)});break;default:1===e.key.length&&(v({type:3,value:e.key}),M.setTimeout(()=>v({type:4}),350))}}),P=(0,S.z)(e=>{e.key===I.R.Space&&e.preventDefault()}),A=(0,c.useMemo)(()=>({open:0===d.menuState}),[d]),C={"aria-activedescendant":null===d.activeItemIndex||null==(r=d.items[d.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(a=d.buttonRef.current)?void 0:a.id,id:u,onKeyDown:w,onKeyUp:P,role:"menu",tabIndex:0,ref:y};return(0,f.sY)({ourProps:C,theirProps:l,slot:A,defaultTag:"div",features:L,visible:$,name:"Menu.Items"})}),Z=c.Fragment,V=Object.assign(_,{Button:k,Items:z,Item:(0,f.yV)(function(e,n){let r,a=(0,b.M)(),{id:o=`headlessui-menu-item-${a}`,disabled:u=!1,...l}=e,[d,m]=O("Menu.Item"),I=null!==d.activeItemIndex&&d.items[d.activeItemIndex].id===o,y=(0,c.useRef)(null),h=(0,g.T)(n,y);(0,v.e)(()=>{if(0!==d.menuState||!I||0===d.activationTrigger)return;let e=(0,p.k)();return e.requestAnimationFrame(()=>{var e,n;null==(n=null==(e=y.current)?void 0:e.scrollIntoView)||n.call(e,{block:"nearest"})}),e.dispose},[y,I,d.menuState,d.activationTrigger,d.activeItemIndex]);let x=(0,c.useRef)({disabled:u,domRef:y});(0,v.e)(()=>{x.current.disabled=u},[x,u]),(0,v.e)(()=>{var e,n;x.current.textValue=null==(n=null==(e=y.current)?void 0:e.textContent)?void 0:n.toLowerCase()},[x,y]),(0,v.e)(()=>(m({type:5,id:o,dataRef:x}),()=>m({type:6,id:o})),[x,o]);let D=(0,S.z)(()=>{m({type:1})}),M=(0,S.z)(e=>{if(u)return e.preventDefault();m({type:1}),(0,E.wI)(d.buttonRef.current)}),N=(0,S.z)(()=>{if(u)return m({type:2,focus:R.Nothing});m({type:2,focus:R.Specific,id:o})}),T=(r=(0,c.useRef)([-1,-1]),{wasMoved(e){let n=t(e);return(r.current[0]!==n[0]||r.current[1]!==n[1])&&(r.current=n,!0)},update(e){r.current=t(e)}}),$=(0,S.z)(e=>T.update(e)),w=(0,S.z)(e=>{!T.wasMoved(e)||u||I||m({type:2,focus:R.Specific,id:o,trigger:0})}),P=(0,S.z)(e=>{T.wasMoved(e)&&!u&&I&&m({type:2,focus:R.Nothing})}),A=(0,c.useMemo)(()=>({active:I,disabled:u,close:D}),[I,u,D]);return(0,f.sY)({ourProps:{id:o,ref:h,role:"menuitem",tabIndex:!0===u?void 0:-1,"aria-disabled":!0===u||void 0,disabled:void 0,onClick:M,onFocus:N,onPointerEnter:$,onMouseEnter:$,onPointerMove:w,onMouseMove:w,onPointerLeave:P,onMouseLeave:P},theirProps:l,slot:A,defaultTag:Z,name:"Menu.Item"})})})},788:function(e,n,r){"use strict";r.d(n,{f:function(){return s}});var a=r(49738),o=r(11169);function i(e){var n;if(e.type)return e.type;let r=null!=(n=e.as)?n:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function s(e,n){let[r,u]=(0,a.useState)(()=>i(e));return(0,o.e)(()=>{u(i(e))},[e.type,e.as]),(0,o.e)(()=>{r||!n.current||n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&u("button")},[r,n]),r}},42398:function(e,n,r){"use strict";r.d(n,{B:function(){return F}});var a=r(49738),o=r(11169),u=r(88884);function F({container:e,accept:n,walk:r,enabled:l=!0}){let c=(0,a.useRef)(n),d=(0,a.useRef)(r);(0,a.useEffect)(()=>{c.current=n,d.current=r},[n,r]),(0,o.e)(()=>{if(!e||!l)return;let n=(0,u.r)(e);if(!n)return;let r=c.current,a=d.current,o=Object.assign(e=>r(e),{acceptNode:r}),f=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;f.nextNode();)a(f.currentNode)},[e,l,c,d])}},23546:function(e,n,r){"use strict";r.d(n,{Dx:function(){return J},VY:function(){return H},aV:function(){return G},dk:function(){return X},fC:function(){return $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9},h_:function(){return $5d3850c4d0b4e6c7$export$602eac185826482c},jm:function(){return K},p8:function(){return D},x8:function(){return q},xz:function(){return j}});var a=r(36577),o=r(49738),u=r(91036),l=r(50320),c=r(74706),d=r(29392),f=r(34952),p=r(971),m=r(61969),v=r(49149),g=r(14099),b=r(10716),I=r(58127),R=r(98371),y=r(90679),E=r(21137);let h="Dialog",[x,D]=(0,c.b)(h),[M,N]=x(h),S=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,...c}=e,d=N("DialogTrigger",r),f=(0,l.e)(n,d.triggerRef);return(0,o.createElement)(b.WV.button,(0,a.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":d.open,"aria-controls":d.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(d.open)},c,{ref:f,onClick:(0,u.M)(e.onClick,d.onOpenToggle)}))}),T="DialogPortal",[$,w]=x(T,{forceMount:void 0}),P="DialogOverlay",A=(0,o.forwardRef)((e,n)=>{let r=w(P,e.__scopeDialog),{forceMount:u=r.forceMount,...l}=e,c=N(P,e.__scopeDialog);return c.modal?(0,o.createElement)(g.z,{present:u||c.open},(0,o.createElement)(C,(0,a.Z)({},l,{ref:n}))):null}),C=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,...u}=e,l=N(P,r);return(0,o.createElement)(R.Z,{as:E.g7,allowPinchZoom:!0,shards:[l.contentRef]},(0,o.createElement)(b.WV.div,(0,a.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(l.open)},u,{ref:n,style:{pointerEvents:"auto",...u.style}})))}),_="DialogContent",k=(0,o.forwardRef)((e,n)=>{let r=w(_,e.__scopeDialog),{forceMount:u=r.forceMount,...l}=e,c=N(_,e.__scopeDialog);return(0,o.createElement)(g.z,{present:u||c.open},c.modal?(0,o.createElement)(L,(0,a.Z)({},l,{ref:n})):(0,o.createElement)(z,(0,a.Z)({},l,{ref:n})))}),L=(0,o.forwardRef)((e,n)=>{let r=N(_,e.__scopeDialog),c=(0,o.useRef)(null),d=(0,l.e)(n,r.contentRef,c);return(0,o.useEffect)(()=>{let e=c.current;if(e)return(0,y.Ry)(e)},[]),(0,o.createElement)(Z,(0,a.Z)({},e,{ref:d,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var n;e.preventDefault(),null===(n=r.triggerRef.current)||void 0===n||n.focus()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{let n=e.detail.originalEvent,r=0===n.button&&!0===n.ctrlKey,a=2===n.button||r;a&&e.preventDefault()}),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault())}))}),z=(0,o.forwardRef)((e,n)=>{let r=N(_,e.__scopeDialog),u=(0,o.useRef)(!1),l=(0,o.useRef)(!1);return(0,o.createElement)(Z,(0,a.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var a,o;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,n),n.defaultPrevented||(u.current||null===(o=r.triggerRef.current)||void 0===o||o.focus(),n.preventDefault()),u.current=!1,l.current=!1},onInteractOutside:n=>{var a,o;null===(a=e.onInteractOutside)||void 0===a||a.call(e,n),n.defaultPrevented||(u.current=!0,"pointerdown"!==n.detail.originalEvent.type||(l.current=!0));let c=n.target,d=null===(o=r.triggerRef.current)||void 0===o?void 0:o.contains(c);d&&n.preventDefault(),"focusin"===n.detail.originalEvent.type&&l.current&&n.preventDefault()}}))}),Z=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,trapFocus:u,onOpenAutoFocus:c,onCloseAutoFocus:d,...f}=e,v=N(_,r),g=(0,o.useRef)(null),b=(0,l.e)(n,g);return(0,I.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(m.M,{asChild:!0,loop:!0,trapped:u,onMountAutoFocus:c,onUnmountAutoFocus:d},(0,o.createElement)(p.XB,(0,a.Z)({role:"dialog",id:v.contentId,"aria-describedby":v.descriptionId,"aria-labelledby":v.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(v.open)},f,{ref:b,onDismiss:()=>v.onOpenChange(!1)}))),!1)}),V="DialogTitle",W=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,...u}=e,l=N(V,r);return(0,o.createElement)(b.WV.h2,(0,a.Z)({id:l.titleId},u,{ref:n}))}),Q=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,...u}=e,l=N("DialogDescription",r);return(0,o.createElement)(b.WV.p,(0,a.Z)({id:l.descriptionId},u,{ref:n}))}),B=(0,o.forwardRef)((e,n)=>{let{__scopeDialog:r,...l}=e,c=N("DialogClose",r);return(0,o.createElement)(b.WV.button,(0,a.Z)({type:"button"},l,{ref:n,onClick:(0,u.M)(e.onClick,()=>c.onOpenChange(!1))}))});function $5d3850c4d0b4e6c7$var$getState(e){return e?"open":"closed"}let[K,Y]=(0,c.k)("DialogTitleWarning",{contentName:_,titleName:V,docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=e=>{let{__scopeDialog:n,children:r,open:a,defaultOpen:u,onOpenChange:l,modal:c=!0}=e,p=(0,o.useRef)(null),m=(0,o.useRef)(null),[v=!1,g]=(0,f.T)({prop:a,defaultProp:u,onChange:l});return(0,o.createElement)(M,{scope:n,triggerRef:p,contentRef:m,contentId:(0,d.M)(),titleId:(0,d.M)(),descriptionId:(0,d.M)(),open:v,onOpenChange:g,onOpenToggle:(0,o.useCallback)(()=>g(e=>!e),[g]),modal:c},r)},j=S,$5d3850c4d0b4e6c7$export$602eac185826482c=e=>{let{__scopeDialog:n,forceMount:r,children:a,container:u}=e,l=N(T,n);return(0,o.createElement)($,{scope:n,forceMount:r},o.Children.map(a,e=>(0,o.createElement)(g.z,{present:r||l.open},(0,o.createElement)(v.h,{asChild:!0,container:u},e))))},G=A,H=k,J=W,X=Q,q=B},14099:function(e,n,r){"use strict";r.d(n,{z:function(){return $921a889cee6df7e8$export$99c2b779aa4e8b8b}});var a=r(49738),o=r(213),u=r(50320),l=r(34842);let $921a889cee6df7e8$export$99c2b779aa4e8b8b=e=>{let{present:n,children:r}=e,c=function(e){var n;let[r,u]=(0,a.useState)(),c=(0,a.useRef)({}),d=(0,a.useRef)(e),f=(0,a.useRef)("none"),p=e?"mounted":"unmounted",[m,v]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,a.useReducer)((e,r)=>{let a=n[e][r];return null!=a?a:e},p));return(0,a.useEffect)(()=>{let e=$921a889cee6df7e8$var$getAnimationName(c.current);f.current="mounted"===m?e:"none"},[m]),(0,l.b)(()=>{let n=c.current,r=d.current,a=r!==e;if(a){let a=f.current,o=$921a889cee6df7e8$var$getAnimationName(n);e?v("MOUNT"):"none"===o||(null==n?void 0:n.display)==="none"?v("UNMOUNT"):r&&a!==o?v("ANIMATION_OUT"):v("UNMOUNT"),d.current=e}},[e,v]),(0,l.b)(()=>{if(r){let handleAnimationEnd=e=>{let n=$921a889cee6df7e8$var$getAnimationName(c.current),a=n.includes(e.animationName);e.target===r&&a&&(0,o.flushSync)(()=>v("ANIMATION_END"))},handleAnimationStart=e=>{e.target===r&&(f.current=$921a889cee6df7e8$var$getAnimationName(c.current))};return r.addEventListener("animationstart",handleAnimationStart),r.addEventListener("animationcancel",handleAnimationEnd),r.addEventListener("animationend",handleAnimationEnd),()=>{r.removeEventListener("animationstart",handleAnimationStart),r.removeEventListener("animationcancel",handleAnimationEnd),r.removeEventListener("animationend",handleAnimationEnd)}}v("ANIMATION_END")},[r,v]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:(0,a.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),u(e)},[])}}(n),d="function"==typeof r?r({present:c.isPresent}):a.Children.only(r),f=(0,u.e)(c.ref,d.ref),p="function"==typeof r;return p||c.isPresent?(0,a.cloneElement)(d,{ref:f}):null};function $921a889cee6df7e8$var$getAnimationName(e){return(null==e?void 0:e.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"}}]);
//# sourceMappingURL=6032-3151f4f432ef07f3.js.map