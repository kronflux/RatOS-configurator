exports.id=3e3,exports.ids=[3e3],exports.modules={55827:(e,t,r)=>{"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(r(59689));e.exports=(0,i.default)(function(e){var t,r=e.matchUtilities,i=e.matchVariant,n=e.theme,parseValue=function(e){var t,r;return null===(null!==(r=null===(t=e.match(/^(\d+\.\d+|\d+|\.\d+)\D+/))||void 0===t?void 0:t[1])&&void 0!==r?r:null)?null:parseFloat(e)},o=null!==(t=n("containers"))&&void 0!==t?t:{};r({"@container":function(e,t){return{"container-type":e,"container-name":t.modifier}}},{values:{DEFAULT:"inline-size",normal:"normal"},modifiers:"any"}),i("@",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1?arguments[1]:void 0).modifier;return null!==parseValue(e)?"@container ".concat(null!=t?t:""," (min-width: ").concat(e,")"):[]},{values:o,sort:function(e,t){var r,i,n=parseFloat(e.value),o=parseFloat(t.value);if(null===n||null===o)return 0;if(n-o!=0)return n-o;var a=null!==(r=e.modifier)&&void 0!==r?r:"",s=null!==(i=t.modifier)&&void 0!==i?i:"";return""===a&&""!==s?1:""!==a&&""===s?-1:a.localeCompare(s,"en",{numeric:!0})}})},{theme:{containers:{xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"}}})},56833:(e,t,r)=>{let i=r(32228),n=r(59689),o=r(86896),a=r(50982),[s,{lineHeight:l}]=o.fontSize.base,{spacing:u,borderWidth:d,borderRadius:c}=o;function resolveColor(e,t){return e.replace("<alpha-value>",`var(${t}, 1)`)}let p=n.withOptions(function(e={strategy:void 0}){return function({addBase:t,addComponents:r,theme:n}){let o=void 0===e.strategy?["base","class"]:[e.strategy],p=[{base:["[type='text']","input:where(:not([type]))","[type='email']","[type='url']","[type='password']","[type='number']","[type='date']","[type='datetime-local']","[type='month']","[type='search']","[type='tel']","[type='time']","[type='week']","[multiple]","textarea","select"],class:[".form-input",".form-textarea",".form-select",".form-multiselect"],styles:{appearance:"none","background-color":"#fff","border-color":resolveColor(n("colors.gray.500",a.gray[500]),"--tw-border-opacity"),"border-width":d.DEFAULT,"border-radius":c.none,"padding-top":u[2],"padding-right":u[3],"padding-bottom":u[2],"padding-left":u[3],"font-size":s,"line-height":l,"--tw-shadow":"0 0 #0000","&:focus":{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"0px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)","border-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-border-opacity")}}},{base:["input::placeholder","textarea::placeholder"],class:[".form-input::placeholder",".form-textarea::placeholder"],styles:{color:resolveColor(n("colors.gray.500",a.gray[500]),"--tw-text-opacity"),opacity:"1"}},{base:["::-webkit-datetime-edit-fields-wrapper"],class:[".form-input::-webkit-datetime-edit-fields-wrapper"],styles:{padding:"0"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"min-height":"1.5em"}},{base:["::-webkit-date-and-time-value"],class:[".form-input::-webkit-date-and-time-value"],styles:{"text-align":"inherit"}},{base:["::-webkit-datetime-edit"],class:[".form-input::-webkit-datetime-edit"],styles:{display:"inline-flex"}},{base:["::-webkit-datetime-edit","::-webkit-datetime-edit-year-field","::-webkit-datetime-edit-month-field","::-webkit-datetime-edit-day-field","::-webkit-datetime-edit-hour-field","::-webkit-datetime-edit-minute-field","::-webkit-datetime-edit-second-field","::-webkit-datetime-edit-millisecond-field","::-webkit-datetime-edit-meridiem-field"],class:[".form-input::-webkit-datetime-edit",".form-input::-webkit-datetime-edit-year-field",".form-input::-webkit-datetime-edit-month-field",".form-input::-webkit-datetime-edit-day-field",".form-input::-webkit-datetime-edit-hour-field",".form-input::-webkit-datetime-edit-minute-field",".form-input::-webkit-datetime-edit-second-field",".form-input::-webkit-datetime-edit-millisecond-field",".form-input::-webkit-datetime-edit-meridiem-field"],styles:{"padding-top":0,"padding-bottom":0}},{base:["select"],class:[".form-select"],styles:{"background-image":`url("${i(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${resolveColor(n("colors.gray.500",a.gray[500]),"--tw-stroke-opacity")}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,"background-position":`right ${u[2]} center`,"background-repeat":"no-repeat","background-size":"1.5em 1.5em","padding-right":u[10],"print-color-adjust":"exact"}},{base:["[multiple]",'[size]:where(select:not([size="1"]))'],class:['.form-select:where([size]:not([size="1"]))'],styles:{"background-image":"initial","background-position":"initial","background-repeat":"unset","background-size":"initial","padding-right":u[3],"print-color-adjust":"unset"}},{base:["[type='checkbox']","[type='radio']"],class:[".form-checkbox",".form-radio"],styles:{appearance:"none",padding:"0","print-color-adjust":"exact",display:"inline-block","vertical-align":"middle","background-origin":"border-box","user-select":"none","flex-shrink":"0",height:u[4],width:u[4],color:resolveColor(n("colors.blue.600",a.blue[600]),"--tw-text-opacity"),"background-color":"#fff","border-color":resolveColor(n("colors.gray.500",a.gray[500]),"--tw-border-opacity"),"border-width":d.DEFAULT,"--tw-shadow":"0 0 #0000"}},{base:["[type='checkbox']"],class:[".form-checkbox"],styles:{"border-radius":c.none}},{base:["[type='radio']"],class:[".form-radio"],styles:{"border-radius":"100%"}},{base:["[type='checkbox']:focus","[type='radio']:focus"],class:[".form-checkbox:focus",".form-radio:focus"],styles:{outline:"2px solid transparent","outline-offset":"2px","--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":"2px","--tw-ring-offset-color":"#fff","--tw-ring-color":resolveColor(n("colors.blue.600",a.blue[600]),"--tw-ring-opacity"),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)","box-shadow":"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"}},{base:["[type='checkbox']:checked","[type='radio']:checked"],class:[".form-checkbox:checked",".form-radio:checked"],styles:{"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat"}},{base:["[type='checkbox']:checked"],class:[".form-checkbox:checked"],styles:{"background-image":`url("${i('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='radio']:checked"],class:[".form-radio:checked"],styles:{"background-image":`url("${i('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`,"@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:checked:hover","[type='checkbox']:checked:focus","[type='radio']:checked:hover","[type='radio']:checked:focus"],class:[".form-checkbox:checked:hover",".form-checkbox:checked:focus",".form-radio:checked:hover",".form-radio:checked:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='checkbox']:indeterminate"],class:[".form-checkbox:indeterminate"],styles:{"background-image":`url("${i('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,"border-color":"transparent","background-color":"currentColor","background-size":"100% 100%","background-position":"center","background-repeat":"no-repeat","@media (forced-colors: active) ":{appearance:"auto"}}},{base:["[type='checkbox']:indeterminate:hover","[type='checkbox']:indeterminate:focus"],class:[".form-checkbox:indeterminate:hover",".form-checkbox:indeterminate:focus"],styles:{"border-color":"transparent","background-color":"currentColor"}},{base:["[type='file']"],class:null,styles:{background:"unset","border-color":"inherit","border-width":"0","border-radius":"0",padding:"0","font-size":"unset","line-height":"inherit"}},{base:["[type='file']:focus"],class:null,styles:{outline:["1px solid ButtonText","1px auto -webkit-focus-ring-color"]}}],getStrategyRules=e=>p.map(t=>null===t[e]?null:{[t[e]]:t.styles}).filter(Boolean);o.includes("base")&&t(getStrategyRules("base")),o.includes("class")&&r(getStrategyRules("class"))}});e.exports=p},5408:(e,t,r)=>{"use strict";var i,n,o,a,s,l,u,extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}function __awaiter(e,t,r,i){return new(r||(r=Promise))(function(n,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i.throw(e))}catch(e){o(e)}}function step(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})}function __generator(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function verb(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a}function __spreadArray(e,t,r){if(r||2==arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}(function(){function DataStorage(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}DataStorage.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},DataStorage.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},DataStorage.prototype.has=function(e){return this.data.has(e)},DataStorage.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},DataStorage.prototype.numDataIds=function(){return this.dataIdsCount}})();var d=function(){function KernelBackend(){}return KernelBackend.prototype.refCount=function(e){return notYetImplemented("refCount")},KernelBackend.prototype.incRef=function(e){return notYetImplemented("incRef")},KernelBackend.prototype.timerAvailable=function(){return!0},KernelBackend.prototype.time=function(e){return notYetImplemented("time")},KernelBackend.prototype.read=function(e){return notYetImplemented("read")},KernelBackend.prototype.readSync=function(e){return notYetImplemented("readSync")},KernelBackend.prototype.readToGPU=function(e,t){return notYetImplemented("readToGPU")},KernelBackend.prototype.numDataIds=function(){return notYetImplemented("numDataIds")},KernelBackend.prototype.disposeData=function(e,t){return notYetImplemented("disposeData")},KernelBackend.prototype.write=function(e,t,r){return notYetImplemented("write")},KernelBackend.prototype.move=function(e,t,r,i,n){return notYetImplemented("move")},KernelBackend.prototype.createTensorFromGPUData=function(e,t,r){return notYetImplemented("createTensorFromGPUData")},KernelBackend.prototype.memory=function(){return notYetImplemented("memory")},KernelBackend.prototype.floatPrecision=function(){return notYetImplemented("floatPrecision")},KernelBackend.prototype.epsilon=function(){return 32===this.floatPrecision()?1e-7:1e-4},KernelBackend.prototype.dispose=function(){return notYetImplemented("dispose")},KernelBackend}();function notYetImplemented(e){throw Error("'".concat(e,"' not yet implemented or not found in the registry. ")+"This kernel may not be supported by the tfjs backend you have chosen")}function clamp(e,t,r){return Math.max(e,Math.min(t,r))}function assert(e,t){if(!e)throw Error("string"==typeof t?t:t())}function assertNonNull(e){assert(null!=e,function(){return"The input to the tensor constructor must be a non-null value."})}function sizeFromShape(e){if(0===e.length)return 1;for(var t=e[0],r=1;r<e.length;r++)t*=e[r];return t}function arraysEqual(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function rightPad(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function parseAxisParam(e,t){var r=t.length;return assert((e=null==e?t.map(function(e,t){return t}):[].concat(e)).every(function(e){return e>=-r&&e<r}),function(){return"All values in axis param must be in range [-".concat(r,", ").concat(r,") but ")+"got axis ".concat(e)}),assert(e.every(function(e){return e%1==0}),function(){return"All values in axis param must be integers but "+"got axis ".concat(e)}),e.map(function(e){return e<0?r+e:e})}function bytesPerElement(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error("Unknown dtype ".concat(e))}function isString(e){return"string"==typeof e||e instanceof String}function inferDtype(e){if(Array.isArray(e))return inferDtype(e[0]);if(e instanceof Float32Array);else{if(e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray)return"int32";if("number"==typeof e);else{if(isString(e))return"string";if("boolean"==typeof e)return"bool"}}return"float32"}function isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}function computeStrides(e){var t=e.length;if(t<2)return[];var r=Array(t-1);r[t-2]=e[t-1];for(var i=t-3;i>=0;--i)r[i]=r[i+1]*e[i+1];return r}function toNestedArray(e,t,r){if(void 0===r&&(r=!1),0===e.length)return t[0];var i=e.reduce(function(e,t){return e*t})*(r?2:1);if(0===i)return[];if(i!==t.length)throw Error("[".concat(e,"] does not match the input size ").concat(t.length).concat(r?" for a complex tensor":"","."));return function createNestedArray(e,t,r,i){void 0===i&&(i=!1);var n=[];if(1===t.length)for(var o=t[0]*(i?2:1),a=0;a<o;a++)n[a]=r[e+a];else for(var o=t[0],s=t.slice(1),l=s.reduce(function(e,t){return e*t})*(i?2:1),a=0;a<o;a++)n[a]=createNestedArray(e+a*l,s,r,i);return n}(0,e,t,r)}function makeOnesTypedArray(e,t){for(var r=makeZerosTypedArray(e,t),i=0;i<r.length;i++)r[i]=1;return r}function makeZerosTypedArray(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error("Unknown data type ".concat(t))}function assertNonNegativeIntegerDimensions(e){e.forEach(function(t){assert(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got "+"shape [".concat(e,"].")})})}function isPromise(e){return e&&e.then&&"function"==typeof e.then}var c="tfjsflags",p=function(){function Environment(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=getQueryParams,this.populateURLFlags()}return Environment.prototype.setPlatform=function(e,t){null==this.platform||env().getBool("IS_TEST")||env().getBool("PROD")||console.warn("Platform ".concat(this.platformName," has already been set. ")+"Overwriting the platform with ".concat(e,".")),this.platformName=e,this.platform=t},Environment.prototype.registerFlag=function(e,t,r){if(this.flagRegistry[e]={evaluationFn:t,setHook:r},null!=this.urlFlags[e]){var i=this.urlFlags[e];env().getBool("IS_TEST")||env().getBool("PROD")||console.warn("Setting feature override from URL ".concat(e,": ").concat(i,".")),this.set(e,i)}},Environment.prototype.getAsync=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(i){switch(i.label){case 0:if(e in this.flags)return[2,this.flags[e]];return t=this.flags,r=e,[4,this.evaluateFlag(e)];case 1:return t[r]=i.sent(),[2,this.flags[e]]}})})},Environment.prototype.get=function(e){if(e in this.flags)return this.flags[e];var t=this.evaluateFlag(e);if(isPromise(t))throw Error("Flag ".concat(e," cannot be synchronously evaluated. ")+"Please use getAsync() instead.");return this.flags[e]=t,this.flags[e]},Environment.prototype.getNumber=function(e){return this.get(e)},Environment.prototype.getBool=function(e){return this.get(e)},Environment.prototype.getString=function(e){return this.get(e)},Environment.prototype.getFlags=function(){return this.flags},Object.defineProperty(Environment.prototype,"features",{get:function(){return this.flags},enumerable:!1,configurable:!0}),Environment.prototype.set=function(e,t){if(null==this.flagRegistry[e])throw Error("Cannot set flag ".concat(e," as it has not been registered."));this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)},Environment.prototype.evaluateFlag=function(e){if(null==this.flagRegistry[e])throw Error("Cannot evaluate flag '".concat(e,"': no evaluation function found."));return this.flagRegistry[e].evaluationFn()},Environment.prototype.setFlags=function(e){this.flags=Object.assign({},e)},Environment.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},Environment.prototype.populateURLFlags=function(){var e=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var t=this.getQueryParams(this.global.location.search);c in t&&t[c].split(",").forEach(function(t){var r,i=__read(t.split(":"),2),n=i[0],o=i[1];e.urlFlags[n]="true"===(r=o.toLowerCase())||"false"===r?"true"===r:"".concat(+r)===r?+r:o})}},Environment}();function getQueryParams(e){var t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(e){for(var r,i,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return r=n[0],i=n[1],t[decodeURIComponent(r)]=decodeURIComponent(i||""),n.join("=")}),t}function env(){return t.ViN}function getGlobalNamespace(){if(null==i){var e=void 0;if("undefined"!=typeof window)e=window;else if("undefined"!=typeof global)e=global;else if("undefined"!=typeof process)e=process;else if("undefined"!=typeof self)e=self;else throw Error("Could not find a global object");i=e}return i}function getGlobal(e,t){var r,i=(null==(r=getGlobalNamespace())._tfGlobals&&(r._tfGlobals=new Map),r._tfGlobals);if(i.has(e))return i.get(e);var n=t();return i.set(e,n),i.get(e)}t.ViN=null;var h="Cast",f="Identity",y="Tile",m="Transpose";function warn(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];env().getBool("IS_TEST")||env().getBool("PROD")||console.warn.apply(console,__spreadArray([],__read(e),!1))}var g=getGlobal("kernelRegistry",function(){return new Map}),v=getGlobal("gradRegistry",function(){return new Map});function getKernel(e,t){var r=function(e,t){return"".concat(t,"_").concat(e)}(e,t);return g.get(r)}function getKernelsForBackend(e){for(var t=g.entries(),r=[];;){var i=t.next(),n=i.done,o=i.value;if(n)break;var a=__read(o,2),s=a[0],l=a[1];__read(s.split("_"),1)[0]===e&&r.push(l)}return r}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function isTypedArrayBrowser(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},S=null;try{S=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function Long$1(e,t,r){this.low=0|e,this.high=0|t,this.unsigned=!!r}function isLong(e){return!0===(e&&e.__isLong__)}Long$1.prototype.__isLong__,Object.defineProperty(Long$1.prototype,"__isLong__",{value:!0}),Long$1.isLong=isLong;var x={},P={};function fromInt(e,t){var r,i,n;return t?(e>>>=0,(n=0<=e&&e<256)&&(i=P[e]))?i:(r=fromBits(e,(0|e)<0?-1:0,!0),n&&(P[e]=r),r):(e|=0,(n=-128<=e&&e<128)&&(i=x[e]))?i:(r=fromBits(e,e<0?-1:0,!1),n&&(x[e]=r),r)}function fromNumber(e,t){if(isNaN(e))return t?D:E;if(t){if(e<0)return D;if(e>=T)return k}else{if(e<=-_)return I;if(e+1>=_)return L}return e<0?fromNumber(-e,t).neg():fromBits(e%A|0,e/A|0,t)}function fromBits(e,t,r){return new Long$1(e,t,r)}Long$1.fromInt=fromInt,Long$1.fromNumber=fromNumber,Long$1.fromBits=fromBits;var C=Math.pow;function fromString(e,t,r){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return E;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");if((i=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===i)return fromString(e.substring(1),t,r).neg();for(var i,n=fromNumber(C(r,8)),o=E,a=0;a<e.length;a+=8){var s=Math.min(8,e.length-a),l=parseInt(e.substring(a,a+s),r);if(s<8){var u=fromNumber(C(r,s));o=o.mul(u).add(fromNumber(l))}else o=(o=o.mul(n)).add(fromNumber(l))}return o.unsigned=t,o}function fromValue(e,t){return"number"==typeof e?fromNumber(e,t):"string"==typeof e?fromString(e,t):fromBits(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}Long$1.fromString=fromString,Long$1.fromValue=fromValue;var A=4294967296,T=18446744073709552e3,_=0x7fffffffffffffff,w=fromInt(16777216),E=fromInt(0);Long$1.ZERO=E;var D=fromInt(0,!0);Long$1.UZERO=D;var O=fromInt(1);Long$1.ONE=O;var R=fromInt(1,!0);Long$1.UONE=R;var M=fromInt(-1);Long$1.NEG_ONE=M;var L=fromBits(-1,2147483647,!1);Long$1.MAX_VALUE=L;var k=fromBits(-1,-1,!0);Long$1.MAX_UNSIGNED_VALUE=k;var I=fromBits(0,-2147483648,!1);Long$1.MIN_VALUE=I;var B=Long$1.prototype;B.toInt=function(){return this.unsigned?this.low>>>0:this.low},B.toNumber=function(){return this.unsigned?(this.high>>>0)*A+(this.low>>>0):this.high*A+(this.low>>>0)},B.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(!this.eq(I))return"-"+this.neg().toString(e);var t=fromNumber(e),r=this.div(t),i=r.mul(t).sub(this);return r.toString(e)+i.toInt().toString(e)}for(var n=fromNumber(C(e,6),this.unsigned),o=this,a="";;){var s=o.div(n),l=(o.sub(s.mul(n)).toInt()>>>0).toString(e);if((o=s).isZero())return l+a;for(;l.length<6;)l="0"+l;a=""+l+a}},B.getHighBits=function(){return this.high},B.getHighBitsUnsigned=function(){return this.high>>>0},B.getLowBits=function(){return this.low},B.getLowBitsUnsigned=function(){return this.low>>>0},B.getNumBitsAbs=function(){if(this.isNegative())return this.eq(I)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return 0!=this.high?t+33:t+1},B.isZero=function(){return 0===this.high&&0===this.low},B.eqz=B.isZero,B.isNegative=function(){return!this.unsigned&&this.high<0},B.isPositive=function(){return this.unsigned||this.high>=0},B.isOdd=function(){return(1&this.low)==1},B.isEven=function(){return(1&this.low)==0},B.equals=function(e){return isLong(e)||(e=fromValue(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},B.eq=B.equals,B.notEquals=function(e){return!this.eq(e)},B.neq=B.notEquals,B.ne=B.notEquals,B.lessThan=function(e){return 0>this.comp(e)},B.lt=B.lessThan,B.lessThanOrEqual=function(e){return 0>=this.comp(e)},B.lte=B.lessThanOrEqual,B.le=B.lessThanOrEqual,B.greaterThan=function(e){return this.comp(e)>0},B.gt=B.greaterThan,B.greaterThanOrEqual=function(e){return this.comp(e)>=0},B.gte=B.greaterThanOrEqual,B.ge=B.greaterThanOrEqual,B.compare=function(e){if(isLong(e)||(e=fromValue(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},B.comp=B.compare,B.negate=function(){return!this.unsigned&&this.eq(I)?I:this.not().add(O)},B.neg=B.negate,B.add=function(e){isLong(e)||(e=fromValue(e));var t,r,i=this.high>>>16,n=65535&this.high,o=this.low>>>16,a=65535&this.low,s=e.high>>>16,l=65535&e.high,u=e.low>>>16,d=65535&e.low,c=0,p=0;return t=0+((r=0+(a+d))>>>16),r&=65535,t+=o+u,p+=t>>>16,t&=65535,p+=n+l,c+=p>>>16,p&=65535,c+=i+s,fromBits(t<<16|r,(c&=65535)<<16|p,this.unsigned)},B.subtract=function(e){return isLong(e)||(e=fromValue(e)),this.add(e.neg())},B.sub=B.subtract,B.multiply=function(e){if(this.isZero())return E;if(isLong(e)||(e=fromValue(e)),S)return fromBits(S.mul(this.low,this.high,e.low,e.high),S.get_high(),this.unsigned);if(e.isZero())return E;if(this.eq(I))return e.isOdd()?I:E;if(e.eq(I))return this.isOdd()?I:E;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(w)&&e.lt(w))return fromNumber(this.toNumber()*e.toNumber(),this.unsigned);var t,r,i=this.high>>>16,n=65535&this.high,o=this.low>>>16,a=65535&this.low,s=e.high>>>16,l=65535&e.high,u=e.low>>>16,d=65535&e.low,c=0,p=0;return t=0+((r=0+a*d)>>>16),r&=65535,t+=o*d,p+=t>>>16,t&=65535,t+=a*u,p+=t>>>16,t&=65535,p+=n*d,c+=p>>>16,p&=65535,p+=o*u,c+=p>>>16,p&=65535,p+=a*l,c+=p>>>16,p&=65535,c+=i*d+n*u+o*l+a*s,fromBits(t<<16|r,(c&=65535)<<16|p,this.unsigned)},B.mul=B.multiply,B.divide=function(e){if(isLong(e)||(e=fromValue(e)),e.isZero())throw Error("division by zero");if(S){var t,r,i;return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?fromBits((this.unsigned?S.div_u:S.div_s)(this.low,this.high,e.low,e.high),S.get_high(),this.unsigned):this}if(this.isZero())return this.unsigned?D:E;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return D;if(e.gt(this.shru(1)))return R;i=D}else{if(this.eq(I))return e.eq(O)||e.eq(M)?I:e.eq(I)?O:(t=this.shr(1).div(e).shl(1)).eq(E)?e.isNegative()?O:M:(r=this.sub(e.mul(t)),i=t.add(r.div(e)));if(e.eq(I))return this.unsigned?D:E;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=E}for(r=this;r.gte(e);){for(var n=Math.ceil(Math.log(t=Math.max(1,Math.floor(r.toNumber()/e.toNumber())))/Math.LN2),o=n<=48?1:C(2,n-48),a=fromNumber(t),s=a.mul(e);s.isNegative()||s.gt(r);)t-=o,s=(a=fromNumber(t,this.unsigned)).mul(e);a.isZero()&&(a=O),i=i.add(a),r=r.sub(s)}return i},B.div=B.divide,B.modulo=function(e){return(isLong(e)||(e=fromValue(e)),S)?fromBits((this.unsigned?S.rem_u:S.rem_s)(this.low,this.high,e.low,e.high),S.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},B.mod=B.modulo,B.rem=B.modulo,B.not=function(){return fromBits(~this.low,~this.high,this.unsigned)},B.and=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low&e.low,this.high&e.high,this.unsigned)},B.or=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low|e.low,this.high|e.high,this.unsigned)},B.xor=function(e){return isLong(e)||(e=fromValue(e)),fromBits(this.low^e.low,this.high^e.high,this.unsigned)},B.shiftLeft=function(e){return(isLong(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?fromBits(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):fromBits(0,this.low<<e-32,this.unsigned)},B.shl=B.shiftLeft,B.shiftRight=function(e){return(isLong(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?fromBits(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):fromBits(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},B.shr=B.shiftRight,B.shiftRightUnsigned=function(e){if(isLong(e)&&(e=e.toInt()),0==(e&=63))return this;var t=this.high;return e<32?fromBits(this.low>>>e|t<<32-e,t>>>e,this.unsigned):32===e?fromBits(t,0,this.unsigned):fromBits(t>>>e-32,0,this.unsigned)},B.shru=B.shiftRightUnsigned,B.shr_u=B.shiftRightUnsigned,B.toSigned=function(){return this.unsigned?fromBits(this.low,this.high,!1):this},B.toUnsigned=function(){return this.unsigned?this:fromBits(this.low,this.high,!0)},B.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},B.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},B.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},Long$1.fromBytes=function(e,t,r){return r?Long$1.fromBytesLE(e,t):Long$1.fromBytesBE(e,t)},Long$1.fromBytesLE=function(e,t){return new Long$1(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},Long$1.fromBytesBE=function(e,t){return new Long$1(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};var V=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(Long$1),F=/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){return t.forEach(function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach(function(r){if("default"!==r&&!(r in e)){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}})}),e}({__proto__:null,default:V},[Long$1]),N=V||F;function hexToLong(e){return N.fromString(e,!0,16)}hexToLong("c3a5c85c97cb3127"),hexToLong("b492b66fbe98f273"),hexToLong("9ae16a3b2f90404f");function toTypedArray(e,t){if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=flatten(e)),env().getBool("DEBUG")&&function(e,t){for(var r=0;r<e.length;r++){var i=e[r];if(isNaN(i)||!isFinite(i))throw Error("A tensor of type ".concat(t," being uploaded contains ").concat(i,"."))}}(e,t),(r=e)instanceof Float32Array&&"float32"===t||r instanceof Int32Array&&"int32"===t||r instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){for(var r,i=new Uint8Array(e.length),n=0;n<i.length;++n)0!==Math.round(e[n])&&(i[n]=1);return i}throw Error("Unknown data type ".concat(t))}function now(){return env().platform.now()}function decodeString(e,t){return void 0===t&&(t="utf-8"),t=t||"utf-8",env().platform.decode(e,t)}function isTypedArray(e){return null!=env().platform.isTypedArray?env().platform.isTypedArray(e):isTypedArrayBrowser(e)}function flatten(e,t,r){var i,n;if(void 0===t&&(t=[]),void 0===r&&(r=!1),null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||isPromise(e)||null==e||isTypedArray(e)&&r)t.push(e);else if(Array.isArray(e)||isTypedArray(e))for(var o=0;o<e.length;++o)flatten(e[o],t,r);else{var a=-1;try{for(var s=__values(Object.keys(e)),l=s.next();!l.done;l=s.next()){var u=l.value;/^([1-9]+[0-9]*|0)$/.test(u)&&(a=Math.max(a,Number(u)))}}catch(e){i={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}for(var o=0;o<=a;o++)flatten(e[o],t,r)}return t}var j=function(){function Profiler(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new H)}return Profiler.prototype.profileKernel=function(e,t,r){var i,n,o,a,holdResultWrapperFn=function(){o=r()},s=now();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(holdResultWrapperFn);else{holdResultWrapperFn();try{for(var l=__values(o),u=l.next();!u.done;u=l.next())u.value.dataSync()}catch(e){i={error:e}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}a=Promise.resolve({kernelMs:now()-s})}if(env().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(var d=0;d<o.length;d++)!function(t){var r=o[t];r.data().then(function(t){(function(e,t,r){if("float32"===t)for(var i=0;i<e.length;i++){var n=e[i];if(isNaN(n)||!isFinite(n))return console.warn("Found ".concat(n," in the result of '").concat(r,"'")),!0}})(t,r.dtype,e)})}(d);return{kernelName:e,outputs:o,inputs:t,timeMs:a.then(function(e){return e.kernelMs}),extraInfo:a.then(function(e){return null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""})}},Profiler.prototype.logKernelProfile=function(e){var t=this,r=e.kernelName,i=e.outputs,n=e.timeMs,o=e.inputs,a=e.extraInfo;i.forEach(function(e){Promise.all([e.data(),n,a]).then(function(i){t.logger.logKernelProfile(r,e,i[0],i[1],o,i[2])})})},Profiler}(),H=function(){function Logger(){}return Logger.prototype.logKernelProfile=function(e,t,r,i,n,o){var a="number"==typeof i?rightPad("".concat(i,"ms"),9):i.error,s=rightPad(e,25),l=t.rank,u=t.size,d=rightPad(t.shape.toString(),14),c="";for(var p in n){var h=n[p];if(null!=h){var f=h.shape||t.shape,y=f.length;c+="".concat(p,": ").concat(y,"D ").concat(y>0?f:""," ")}}console.log("%c".concat(s,"	%c").concat(a,"	%c").concat(l,"D ").concat(d,"	%c").concat(u,"	%c").concat(c,"	%c").concat(o),"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},Logger}();function valToString(e,t,r){return rightPad(Array.isArray(e)?"".concat(parseFloat(e[0].toFixed(7))," + ")+"".concat(parseFloat(e[1].toFixed(7)),"j"):isString(e)?"'".concat(e,"'"):"bool"===r?boolNumToString(e):parseFloat(e.toFixed(7)).toString(),t)}function boolNumToString(e){return 0===e?"false":"true"}function createComplexTuples(e){for(var t=[],r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var z=function(){function TensorBuffer(e,t,r){var i=this;if(this.dtype=t,this.shape=e.slice(),this.size=sizeFromShape(e),null!=r){var n=r.length;assert(n===this.size,function(){return"Length of values '".concat(n,"' does not match the size ")+"inferred by the shape '".concat(i.size,"'.")})}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||function(e,t){var r=null;if(null==e||"float32"===e)r=new Float32Array(t);else if("int32"===e)r=new Int32Array(t);else if("bool"===e)r=new Uint8Array(t);else if("string"===e)r=Array(t);else throw Error("Unknown data type ".concat(e));return r}(t,this.size),this.strides=computeStrides(e)}return TensorBuffer.prototype.set=function(e){for(var t=this,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];0===r.length&&(r=[0]),assert(r.length===this.rank,function(){return"The number of provided coordinates (".concat(r.length,") must ")+"match the rank (".concat(t.rank,")")});var n=this.locToIndex(r);this.values[n]=e},TensorBuffer.prototype.get=function(){for(var e,t,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];0===r.length&&(r=[0]);var n=0;try{for(var o=__values(r),a=o.next();!a.done;a=o.next()){var s=a.value;if(s<0||s>=this.shape[n]){var l="Requested out of range element at ".concat(r,". ")+"  Buffer shape=".concat(this.shape);throw Error(l)}n++}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}for(var u=r[r.length-1],d=0;d<r.length-1;++d)u+=this.strides[d]*r[d];return this.values[u]},TensorBuffer.prototype.locToIndex=function(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];for(var t=e[e.length-1],r=0;r<e.length-1;++r)t+=this.strides[r]*e[r];return t},TensorBuffer.prototype.indexToLoc=function(e){if(0===this.rank)return[];if(1===this.rank)return[e];for(var t=Array(this.shape.length),r=0;r<t.length-1;++r)t[r]=Math.floor(e/this.strides[r]),e-=t[r]*this.strides[r];return t[t.length-1]=e,t},Object.defineProperty(TensorBuffer.prototype,"rank",{get:function(){return this.shape.length},enumerable:!1,configurable:!0}),TensorBuffer.prototype.toTensor=function(){return U().makeTensor(this.values,this.shape,this.dtype)},TensorBuffer}(),U=null,G=null,X=function(){function Tensor(e,t,r,i){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=sizeFromShape(e),this.strides=computeStrides(e),this.dataId=r,this.id=i,this.rankType=this.rank<5?this.rank.toString():"higher"}return Object.defineProperty(Tensor.prototype,"rank",{get:function(){return this.shape.length},enumerable:!1,configurable:!0}),Tensor.prototype.buffer=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,G.buffer(this.shape,this.dtype,e)]}})})},Tensor.prototype.bufferSync=function(){return G.buffer(this.shape,this.dtype,this.dataSync())},Tensor.prototype.array=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,toNestedArray(this.shape,e,"complex64"===this.dtype)]}})})},Tensor.prototype.arraySync=function(){return toNestedArray(this.shape,this.dataSync(),"complex64"===this.dtype)},Tensor.prototype.data=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:if(this.throwIfDisposed(),e=U().read(this.dataId),"string"!==this.dtype)return[3,2];return[4,e];case 1:t=r.sent();try{return[2,t.map(function(e){return decodeString(e)})]}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,e]}})})},Tensor.prototype.dataToGPU=function(e){return this.throwIfDisposed(),U().readToGPU(this.dataId,e)},Tensor.prototype.dataSync=function(){this.throwIfDisposed();var e=U().readSync(this.dataId);if("string"===this.dtype)try{return e.map(function(e){return decodeString(e)})}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e},Tensor.prototype.bytes=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,U().read(this.dataId)];case 1:if(e=t.sent(),"string"===this.dtype)return[2,e];return[2,new Uint8Array(e.buffer)]}})})},Tensor.prototype.dispose=function(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),U().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(Tensor.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!1,configurable:!0}),Tensor.prototype.throwIfDisposed=function(){if(this.isDisposed)throw Error("Tensor is disposed.")},Tensor.prototype.print=function(e){return void 0===e&&(e=!1),G.print(this,e)},Tensor.prototype.clone=function(){return this.throwIfDisposed(),G.clone(this)},Tensor.prototype.toString=function(e){var t,r,i,n,o,a,s,l,u;return void 0===e&&(e=!1),t=this.dataSync(),r=this.shape,i=this.dtype,n=e,o=computeStrides(r),a=function(e,t,r,i){var n=sizeFromShape(t),o=i[i.length-1],a=Array(o).fill(0),s=t.length,l="complex64"===r?createComplexTuples(e):e;if(s>1)for(var u=0;u<n/o;u++)for(var d=u*o,c=0;c<o;c++)a[c]=Math.max(a[c],valToString(l[d+c],0,r).length);return a}(t,r,i,o),s=r.length,l=function subTensorToString(e,t,r,i,n,o){void 0===o&&(o=!0);var a="complex64"===r?2:1,s=t[0],l=t.length;if(0===l)return"complex64"===r?[valToString(createComplexTuples(e)[0],0,r)]:"bool"===r?[boolNumToString(e[0])]:[e[0].toString()];if(1===l){if(s>20){var u=3*a,d=Array.from(e.slice(0,u)),c=Array.from(e.slice((s-3)*a,s*a));return"complex64"===r&&(d=createComplexTuples(d),c=createComplexTuples(c)),["["+d.map(function(e,t){return valToString(e,n[t],r)}).join(", ")+", ..., "+c.map(function(e,t){return valToString(e,n[s-3+t],r)}).join(", ")+"]"]}return["["+("complex64"===r?createComplexTuples(e):Array.from(e)).map(function(e,t){return valToString(e,n[t],r)}).join(", ")+"]"]}var p=t.slice(1),h=i.slice(1),f=i[0]*a,y=[];if(s>20){for(var m=0;m<3;m++){var g=m*f,v=g+f;y.push.apply(y,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,n,!1)),!1))}y.push("...");for(var m=s-3;m<s;m++){var g=m*f,v=g+f;y.push.apply(y,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,n,m===s-1)),!1))}}else for(var m=0;m<s;m++){var g=m*f,v=g+f;y.push.apply(y,__spreadArray([],__read(subTensorToString(e.slice(g,v),p,r,h,n,m===s-1)),!1))}var b=2===l?",":"";y[0]="["+(s>0?y[0]+b:"");for(var m=1;m<y.length-1;m++)y[m]=" "+y[m]+b;for(var S=",\n",m=2;m<l;m++)S+="\n";return y[y.length-1]=" "+y[y.length-1]+"]"+(o?"":S),y}(t,r,i,o,a),u=["Tensor"],n&&(u.push("  dtype: ".concat(i)),u.push("  rank: ".concat(s)),u.push("  shape: [".concat(r,"]")),u.push("  values:")),u.push(l.map(function(e){return"    "+e}).join("\n")),u.join("\n")},Tensor.prototype.cast=function(e){return this.throwIfDisposed(),G.cast(this,e)},Tensor.prototype.variable=function(e,t,r){return void 0===e&&(e=!0),this.throwIfDisposed(),U().makeVariable(this,e,t,r)},Tensor}();function getGlobalTensorClass(){return getGlobal("Tensor",function(){return X})}Object.defineProperty(X,Symbol.hasInstance,{value:function(e){return!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}}),getGlobalTensorClass();var Y=function(e){function Variable(t,r,i,n){var o=e.call(this,t.shape,t.dtype,t.dataId,n)||this;return o.trainable=r,o.name=i,o}return __extends(Variable,e),Variable.prototype.assign=function(e){if(e.dtype!==this.dtype)throw Error("dtype of the new value (".concat(e.dtype,") and ")+"previous value (".concat(this.dtype,") must match"));if(!arraysEqual(e.shape,this.shape))throw Error("shape of the new value (".concat(e.shape,") and ")+"previous value (".concat(this.shape,") must match"));U().disposeTensor(this),this.dataId=e.dataId,U().incRef(this,null)},Variable.prototype.dispose=function(){U().disposeVariable(this),this.isDisposedInternal=!0},Variable}(X);Object.defineProperty(Y,Symbol.hasInstance,{value:function(e){return e instanceof X&&null!=e.assign&&e.assign instanceof Function}}),/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */t.yw1=void 0,function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(t.yw1||(t.yw1={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(n||(n={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(o||(o={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(a||(a={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(s||(s={}));var W={float32:a,int32:n,bool:o,complex64:s};function isWebGLData(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function isWebGPUData(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function makeTypesMatch(e,t){if(e.dtype===t.dtype)return[e,t];var r=function(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error("Can not upcast ".concat(e," with ").concat(t))}return W[e][t]}(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function getTensorsInContainer(e){var t=[];return function walkTensorContainer(e,t,r){if(null!=e){if(e instanceof X){t.push(e);return}if(Array.isArray(e)||"object"==typeof e)for(var i in e){var n=e[i];r.has(n)||(r.add(n),walkTensorContainer(n,t,r))}}}(e,t,new Set),t}function isRegisteredKernelInvocation(e){return null!=e.kernelName}var q=function(){function EngineState(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(function(e){return e.name})))}}}return EngineState.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},EngineState}(),$=function(){function Engine(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new q}return Engine.prototype.ready=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r;return __generator(this,function(i){switch(i.label){case 0:if(null!=this.pendingBackendInit)return[2,this.pendingBackendInit.then(function(){})];if(null!=this.backendInstance)return[2];e=this.getSortedBackends(),t=0,i.label=1;case 1:if(!(t<e.length))return[3,5];return r=e[t],[4,this.initializeBackend(r).success];case 2:if(!i.sent())return[3,4];return[4,this.setBackend(r)];case 3:return i.sent(),[2];case 4:return t++,[3,1];case 5:throw Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(Engine.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw Error("Backend '".concat(this.backendName,"' has not yet been initialized. Make ")+"sure to await tf.ready() or await tf.setBackend() before calling other methods");if(null==this.backendInstance){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw Error("The highest priority backend '".concat(t,"' has not yet been ")+"initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!1,configurable:!0}),Engine.prototype.backendNames=function(){return Object.keys(this.registryFactory)},Engine.prototype.findBackend=function(e){return e in this.registry||e in this.registryFactory&&!this.initializeBackend(e).asyncInit?this.registry[e]:null},Engine.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},Engine.prototype.registerBackend=function(e,t,r){return(void 0===r&&(r=1),e in this.registryFactory)?(warn("".concat(e," backend was already registered. ")+"Reusing existing backend factory."),!1):(this.registryFactory[e]={factory:t,priority:r},!0)},Engine.prototype.setBackend=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i;return __generator(this,function(n){switch(n.label){case 0:if(null==this.registryFactory[e])throw Error("Backend name '".concat(e,"' not found in registry"));if(this.backendName=e,null!=this.registry[e])return[3,4];if(this.backendInstance=null,r=(t=this.initializeBackend(e)).success,!t.asyncInit)return[3,2];return[4,r];case 1:return i=n.sent(),[3,3];case 2:i=r,n.label=3;case 3:if(!i)return[2,!1];n.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new j(this.backendInstance),[2,!0]}})})},Engine.prototype.setupRegisteredKernels=function(){var e=this;getKernelsForBackend(this.backendName).forEach(function(t){null!=t.setupFunc&&t.setupFunc(e.backendInstance)})},Engine.prototype.disposeRegisteredKernels=function(e){var t=this;getKernelsForBackend(e).forEach(function(r){null!=r.disposeFunc&&r.disposeFunc(t.registry[e])})},Engine.prototype.initializeBackend=function(e){var t=this,r=this.registryFactory[e];if(null==r)throw Error("Cannot initialize backend ".concat(e,", no registration found."));try{var i=r.factory();if(!i||i instanceof d||"function"!=typeof i.then)return this.registry[e]=i,{success:!0,asyncInit:!1};var n=++this.pendingBackendInitId,o=i.then(function(r){return!(n<t.pendingBackendInitId)&&(t.registry[e]=r,t.pendingBackendInit=null,!0)}).catch(function(r){return!(n<t.pendingBackendInitId)&&(t.pendingBackendInit=null,warn("Initialization of backend ".concat(e," failed")),warn(r.stack||r.message),!1)});return this.pendingBackendInit=o,{success:o,asyncInit:!0}}catch(t){return warn("Initialization of backend ".concat(e," failed")),warn(t.stack||t.message),{success:!1,asyncInit:!1}}},Engine.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw Error("".concat(e," backend not found in registry"));this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},Engine.prototype.getSortedBackends=function(){var e=this;if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(t,r){return e.registryFactory[r].priority-e.registryFactory[t].priority})},Engine.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var r=e[t],i=this.initializeBackend(r),n=i.success,o=i.asyncInit;if(o||n)return{name:r,asyncInit:o}}throw Error("Could not initialize any backends, all backend initializations failed.")},Engine.prototype.moveData=function(e,t){var r=this.state.tensorInfo.get(t),i=r.backend,n=this.readSync(t),o=i.refCount(t);i.disposeData(t,!0),r.backend=e,e.move(t,n,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},Engine.prototype.tidy=function(e,t){var r,i=this,n=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=e}return this.scopedRun(function(){return i.startScope(n)},function(){return i.endScope(r)},function(){return(r=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},Engine.prototype.scopedRun=function(e,t,r){e();try{var i=r();return t(),i}catch(e){throw t(),e}},Engine.prototype.nextTensorId=function(){return Engine.nextTensorId++},Engine.prototype.nextVariableId=function(){return Engine.nextVariableId++},Engine.prototype.clone=function(e){var t=K.runKernel(f,{x:e});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],function(e){return{x:function(){return K.runKernel(h,{x:e},{dtype:"float32"})}}},[],{}),t},Engine.prototype.runKernel=function(e,t,r){if(null==this.backendName&&this.backend,!(null!=getKernel(e,this.backendName)))throw Error("Kernel '".concat(e,"' not registered for backend '").concat(this.backendName,"'"));return this.runKernelFunc({kernelName:e,inputs:t,attrs:r})},Engine.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},Engine.prototype.checkKernelForMemLeak=function(e,t,r){var i=this.backend.numDataIds(),n=0;r.forEach(function(e){n+="complex64"===e.dtype?3:1});var o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=i-t-n-o;if(a>0)throw Error("Backend '".concat(this.backendName,"' has an internal memory leak ")+"(".concat(a," data ids) after running '").concat(e,"'"))},Engine.prototype.runKernelFunc=function(e){var t,r,i,n,o=this,a=[],s=this.isTapeOn(),l=this.state.numBytes,u=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;var d=isRegisteredKernelInvocation(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(isRegisteredKernelInvocation(e)){var c=e.kernelName,p=e.inputs,h=e.attrs;null==this.backendName&&this.backend;var f=getKernel(c,this.backendName);assert(null!=f,function(){return"Cannot find registered kernel '".concat(c,"' for backend '").concat(o.backendName,"'")}),r=function(){var e=o.backend.numDataIds(),t=Array.isArray(i=f.kernelFunc({inputs:p,attrs:h,backend:o.backend}))?i:[i];o.shouldCheckForMemLeaks()&&o.checkKernelForMemLeak(c,e,t);var r=t.map(function(e){return null!=e.rank?e:o.makeTensorFromTensorInfo(e)});if(s){var n=o.getTensorsForGradient(c,p,r);a=o.saveTensorsForBackwardMode(n)}return r}}else{var y=e.forwardFunc,saveFunc_1=function(e){s&&(a=e.map(function(e){return o.keep(o.clone(e))}))};r=function(){var e=o.backend.numDataIds(),t=Array.isArray(i=o.tidy(function(){return y(o.backend,saveFunc_1)}))?i:[i];return o.shouldCheckForMemLeaks()&&o.checkKernelForMemLeak(d,e,t),t}}var m=e.inputs,g=e.attrs,v=isRegisteredKernelInvocation(e)?null:e.backwardsFunc;return this.scopedRun(function(){return o.state.kernelDepth++},function(){return o.state.kernelDepth--},function(){o.ENV.getBool("DEBUG")||o.state.profiling?(n=o.profiler.profileKernel(d,m,function(){return r()}),o.ENV.getBool("DEBUG")&&o.profiler.logKernelProfile(n),t=n.outputs):t=r()}),s&&this.addTapeNode(d,m,t,v,a,g),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-u,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(m).map(function(e){return null!=m[e]?m[e].shape:null}),outputShapes:t.map(function(e){return e.shape}),kernelTimeMs:n.timeMs,extraInfo:n.extraInfo}),Array.isArray(i)?t:t[0]},Engine.prototype.saveTensorsForBackwardMode=function(e){var t=this;return e.map(function(e){return t.keep(t.clone(e))})},Engine.prototype.getTensorsForGradient=function(e,t,r){var i=v.get(e);if(null!=i){var n=i.inputsToSave||[],o=i.outputsToSave||[],a=void 0;i.saveAllInputs?(assert(Array.isArray(t),function(){return"saveAllInputs is true, expected inputs to be an array."}),a=Object.keys(t).map(function(e){return t[e]})):a=n.map(function(e){return t[e]});var s=r.filter(function(e,t){return o[t]});return a.concat(s)}return[]},Engine.prototype.makeTensor=function(e,t,r,i){if(null==e)throw Error("Values passed to engine.makeTensor() are null");r=r||"float32",i=i||this.backend;var n=e;"string"===r&&isString(e[0])&&(n=e.map(function(e){var t;return void 0===t&&(t="utf-8"),t=t||"utf-8",env().platform.encode(e,t)}));var o=i.write(n,t,r),a=new X(t,r,o,this.nextTensorId());if(this.trackTensor(a,i),"string"===r){var s=this.state.tensorInfo.get(o),l=function(e){if(null==e)return 0;var t=0;return e.forEach(function(e){return t+=e.length}),t}(n);this.state.numBytes+=l-s.bytes,s.bytes=l}return a},Engine.prototype.makeTensorFromDataId=function(e,t,r,i){var n={dataId:e,shape:t,dtype:r=r||"float32"};return this.makeTensorFromTensorInfo(n,i)},Engine.prototype.makeTensorFromTensorInfo=function(e,t){var r=e.dataId,i=e.shape,n=e.dtype,o=new X(i,n,r,this.nextTensorId());return this.trackTensor(o,t),o},Engine.prototype.makeVariable=function(e,t,r,i){void 0===t&&(t=!0),r=r||this.nextVariableId().toString(),null!=i&&i!==e.dtype&&(e=e.cast(i));var n=new Y(e,t,r,this.nextTensorId());if(null!=this.state.registeredVariables[n.name])throw Error("Variable with name ".concat(n.name," was already registered"));return this.state.registeredVariables[n.name]=n,this.incRef(n,this.backend),n},Engine.prototype.trackTensor=function(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;var r=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(r=e.size*bytesPerElement(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof Y||this.track(e)},Engine.prototype.incRef=function(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)},Engine.prototype.removeDataId=function(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)},Engine.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){var t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){var r=e.size*bytesPerElement(e.dtype);this.state.numBytes-=r}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}},Engine.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},Engine.prototype.disposeVariable=function(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]},Engine.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e},Engine.prototype.profile=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,o,a,s,l,u,d;return __generator(this,function(c){switch(c.label){case 0:return this.state.profiling=!0,t=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],i=this.state.activeProfile,[4,e()];case 1:i.result=c.sent(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,__spreadArray([],__read(this.state.activeProfile.kernels.map(function(e){return e.totalBytesSnapshot})),!1)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-r,c.label=2;case 2:c.trys.push([2,8,9,10]),o=(n=__values(this.state.activeProfile.kernels)).next(),c.label=3;case 3:if(o.done)return[3,7];return s=a=o.value,[4,a.kernelTimeMs];case 4:return s.kernelTimeMs=c.sent(),l=a,[4,a.extraInfo];case 5:l.extraInfo=c.sent(),c.label=6;case 6:return o=n.next(),[3,3];case 7:return[3,10];case 8:return u={error:c.sent()},[3,10];case 9:try{o&&!o.done&&(d=n.return)&&d.call(n)}finally{if(u)throw u.error}return[7];case 10:return[2,this.state.activeProfile]}})})},Engine.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},Engine.prototype.addTapeNode=function(e,t,r,i,n,o){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:r,saved:n},l=v.get(e);null!=l&&(i=l.gradFunc),null!=i&&(s.gradient=function(e){return i((e=e.map(function(e,t){if(null==e){var i=r[t],n=makeZerosTypedArray(i.size,i.dtype);return a.makeTensor(n,i.shape,i.dtype)}return e})).length>1?e:e[0],n,o)}),this.state.activeTape.push(s)},Engine.prototype.keep=function(e){return e.kept=!0,e},Engine.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++},Engine.prototype.endTape=function(){this.state.gradientDepth--},Engine.prototype.startScope=function(e){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},Engine.prototype.endScope=function(e){for(var t=this,r=getTensorsInContainer(e),i=new Set(r.map(function(e){return e.id})),n=0;n<this.state.activeScope.track.length;n++){var o=this.state.activeScope.track[n];o.kept||i.has(o.id)||o.dispose()}var a=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(e){e.kept||e.scopeId!==a.id||t.track(e)})},Engine.prototype.gradients=function(e,t,r,i){var n=this;if(void 0===i&&(i=!1),assert(t.length>0,function(){return"gradients() received an empty list of xs."}),null!=r&&"float32"!==r.dtype)throw Error("dy must have 'float32' dtype, but has '".concat(r.dtype,"'"));var o=this.scopedRun(function(){return n.startTape()},function(){return n.endTape()},function(){return n.tidy("forward",e)});assert(o instanceof X,function(){return"The result y returned by f() must be a tensor."});var a=/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){for(var i={},n={},o=0;o<t.length;o++)i[t[o].id]=!0;for(var o=0;o<e.length;o++){var a=e[o],s=a.inputs;for(var l in s){for(var u=s[l],d=!1,c=0;c<t.length;c++)if(i[u.id]){a.outputs.forEach(function(e){return i[e.id]=!0}),d=!0,n[a.id]=!0;break}if(d)break}}var p={};p[r.id]=!0;for(var h={},o=e.length-1;o>=0;o--)for(var a=e[o],s=a.inputs,c=0;c<a.outputs.length;c++)if(p[a.outputs[c].id]){for(var l in s)p[s[l].id]=!0,h[a.id]=!0;break}for(var f=[],o=0;o<e.length;o++){var a=e[o];if(n[a.id]&&h[a.id]){var y={};for(var l in a.inputs){var m=a.inputs[l];i[m.id]&&(y[l]=m)}var g=Object.assign({},a);g.inputs=y,g.outputs=a.outputs,f.push(g)}}return f}(this.state.activeTape,t,o);if(!i&&0===a.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var e,i,s={};s[o.id]=null==r?(i=makeOnesTypedArray(sizeFromShape(e=o.shape),"float32"),K.makeTensor(i,e,"float32")):r,function(e,t,r,i){for(var n=t.length-1;n>=0;n--)!function(n){var o=t[n],a=[];if(o.outputs.forEach(function(t){var r=e[t.id];null!=r?a.push(r):a.push(null)}),null==o.gradient)throw Error("Cannot compute gradient: gradient function not found "+"for ".concat(o.kernelName,"."));var s=o.gradient(a),_loop_2=function(t){if(!(t in s))throw Error("Cannot backprop through input ".concat(t,". ")+"Available gradients found: ".concat(Object.keys(s),"."));var n=r(function(){return s[t]()});if("float32"!==n.dtype)throw Error("Error in gradient for op ".concat(o.kernelName,". The gradient of input ")+"".concat(t," must have 'float32' dtype, but has '").concat(n.dtype,"'"));var a=o.inputs[t];if(!arraysEqual(n.shape,a.shape))throw Error("Error in gradient for op ".concat(o.kernelName,". The gradient of input ")+"'".concat(t,"' has shape '").concat(n.shape,"', which does not match ")+"the shape of the input '".concat(a.shape,"'"));if(null==e[a.id])e[a.id]=n;else{var l=e[a.id];e[a.id]=i(l,n),l.dispose()}};for(var l in o.inputs)_loop_2(l)}(n)}(s,a,function(e){return n.tidy(e)},add$1);var l=t.map(function(e){return s[e.id]});return 0===n.state.gradientDepth&&(n.state.activeTape.forEach(function(e){var t,r;try{for(var i=__values(e.saved),n=i.next();!n.done;n=i.next())n.value.dispose()}catch(e){t={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}}),n.state.activeTape=null),{value:o,grads:l}})},Engine.prototype.customGrad=function(e){var t=this;return assert(isFunction(e),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];assert(i.every(function(e){return e instanceof X}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var o={};return i.forEach(function(e,t){o[t]=e}),t.runKernelFunc({forwardFunc:function(t,n){return assert((r=e.apply(void 0,__spreadArray([],__read(__spreadArray(__spreadArray([],__read(i),!1),[n],!1)),!1))).value instanceof X,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),assert(isFunction(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},backwardsFunc:function(e,t){var n=r.gradFunc(e,t),o=Array.isArray(n)?n:[n];assert(o.length===i.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),assert(o.every(function(e){return e instanceof X}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var a={};return o.forEach(function(e,t){a[t]=function(){return e}}),a},inputs:o})}},Engine.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},Engine.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},Engine.prototype.readToGPU=function(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)},Engine.prototype.time=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(i){switch(i.label){case 0:return t=now(),[4,this.backend.time(e)];case 1:return(r=i.sent()).wallMs=now()-t,[2,r]}})})},Engine.prototype.track=function(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(Engine.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!1,configurable:!0}),Engine.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new q,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},Engine}();function getOrMakeEngine(){var e,r=getGlobalNamespace();if(null==r._tfengine){var i=new p(r);r._tfengine=new $(i)}return e=r._tfengine.ENV,t.ViN=e,U=function(){return r._tfengine},r._tfengine}$.nextTensorId=0,$.nextVariableId=0;var K=getOrMakeEngine();function add$1(e,t){return K.runKernel("Add",{a:e,b:t})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Z=env();/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function inferShape(e,t){var r=e;if(isTypedArray(e))return"string"===t?[]:[e.length];if(isWebGLData(e)){var i=e.channels||"RGBA";return[e.height,e.width*i.length]}if(isWebGPUData(e))return[e.buffer.size/(null==t?4:bytesPerElement(t))];if(!Array.isArray(e))return[];for(var n=[];Array.isArray(r)||isTypedArray(r)&&"string"!==t;)n.push(r.length),r=r[0];return Array.isArray(e)&&env().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function deepAssertShapeConsistency(e,t,r){if(r=r||[],!Array.isArray(e)&&!isTypedArray(e)){assert(0===t.length,function(){return"Element arr[".concat(r.join("]["),"] is a primitive, ")+"but should be an array/TypedArray of ".concat(t[0]," elements")});return}assert(t.length>0,function(){return"Element arr[".concat(r.join("]["),"] should be a primitive, ")+"but is an array of ".concat(e.length," elements")}),assert(e.length===t[0],function(){return"Element arr[".concat(r.join("]["),"] should have ").concat(t[0]," ")+"elements, but has ".concat(e.length," elements")});for(var i=t.slice(1),n=0;n<e.length;++n)deepAssertShapeConsistency(e[n],i,r.concat(n))}(e,n,[]),n}function assertDtype(e,t,r,i){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error("Argument '".concat(r,"' passed to '").concat(i,"' must ")+"be ".concat(e," tensor, but got ").concat(t," tensor"))}}function convertToTensor(e,t,r,i){if(void 0===i&&(i="numeric"),e instanceof getGlobalTensorClass())return assertDtype(i,e.dtype,t,r),e;var n=inferDtype(e);if("string"!==n&&["bool","int32","float32"].indexOf(i)>=0&&(n=i),assertDtype(i,n,t,r),null==e||!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){var o=null==e?"null":e.constructor.name;throw Error("Argument '".concat(t,"' passed to '").concat(r,"' must be a ")+"Tensor or TensorLike, but got '".concat(o,"'"))}var a=inferShape(e,n);isTypedArray(e)||Array.isArray(e)||(e=[e]);var s="string"!==n?toTypedArray(e,n):flatten(e,[],!0);return K.makeTensor(s,a,n)}function convertToTensorArray(e,t,r,i){if(void 0===i&&(i="numeric"),!Array.isArray(e))throw Error("Argument ".concat(t," passed to ").concat(r," must be a ")+"`Tensor[]` or `TensorLike[]`");return e.map(function(e,n){return convertToTensor(e,"".concat(t,"[").concat(n,"]"),r,i)})}function op(e){var t=Object.keys(e);if(1!==t.length)throw Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+"".concat(t.length," keys."));var r=t[0],i=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1));var f2=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];K.startScope(r);try{var n=i.apply(void 0,__spreadArray([],__read(e),!1));return isPromise(n)&&console.error("Cannot return a Promise inside of tidy."),K.endScope(n),n}catch(e){throw K.endScope(null),e}};return Object.defineProperty(f2,"name",{value:r+="__op",configurable:!0}),f2}Z.registerFlag("DEBUG",function(){return!1},function(e){e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),Z.registerFlag("IS_BROWSER",function(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}),Z.registerFlag("IS_NODE",function(){return"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node}),Z.registerFlag("IS_CHROME",function(){return"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Z.registerFlag("IS_SAFARI",function(){return"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)}),Z.registerFlag("PROD",function(){return!1}),Z.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Z.getBool("DEBUG")}),Z.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Z.registerFlag("IS_TEST",function(){return!1}),Z.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",function(){return Z.getBool("DEBUG")}),Z.registerFlag("WRAP_TO_IMAGEBITMAP",function(){return!1}),Z.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",function(){return!1}),Z.registerFlag("USE_SETTIMEOUTCUSTOM",function(){return!1});var J=op({complex_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r,i,n,o=convertToTensor(e,"real","complex"),a=convertToTensor(t,"imag","complex");return r=o.shape,i=a.shape,n="real and imag shapes, ".concat(o.shape," and ").concat(a.shape,", ")+"must match in call to tf.complex().",assert(arraysEqual(r,i),function(){return n+" Shapes ".concat(r," and ").concat(i," must match")}),K.runKernel("Complex",{real:o,imag:a})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function makeTensor(e,t,r,i){if(null==i)i=inferDtype(e);else if("complex64"===i)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(isWebGPUData(e)||isWebGLData(e)){if("float32"!==i&&"int32"!==i)throw Error("Creating tensor from GPU data only supports "+"'float32'|'int32' dtype, while the dtype is ".concat(i,"."));return K.backend.createTensorFromGPUData(e,t||r,i)}if(!isTypedArray(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){assertNonNegativeIntegerDimensions(t);var n=sizeFromShape(t),o=sizeFromShape(r);assert(n===o,function(){return"Based on the provided shape, [".concat(t,"], the tensor should have ")+"".concat(n," values but has ").concat(o)});for(var a=0;a<r.length;++a){var s=r[a],l=a!==r.length-1||s!==sizeFromShape(t.slice(a));assert(r[a]===t[a]||!l,function(){return"Error creating a new Tensor. Inferred shape "+"(".concat(r,") does not match the provided ")+"shape (".concat(t,"). ")})}}return isTypedArray(e)||Array.isArray(e)||(e=[e]),t=t||r,e="string"!==i?toTypedArray(e,i):flatten(e,[],!0),K.makeTensor(e,t,i)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Q=function(){function CompositeArrayBuffer(e){if(this.shards=[],this.previousShardIndex=0,null!=e&&(e instanceof Array||(e=[e]),0!==(e=e.map(function(e){return isTypedArray(e)?e.buffer:e})).length)){this.bufferUniformSize=e[0].byteLength;for(var t=0,r=0;r<e.length;r++){var i=e[r];r!==e.length-1&&i.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);var n=t+i.byteLength;this.shards.push({buffer:i,start:t,end:n}),t=n}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}}return CompositeArrayBuffer.join=function(e){return new CompositeArrayBuffer(e).slice()},CompositeArrayBuffer.prototype.slice=function(e,t){if(void 0===e&&(e=0),void 0===t&&(t=this.byteLength),0===this.shards.length||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e))return new ArrayBuffer(0);var r=this.findShardForByte(e);if(-1===r)throw Error("Could not find start shard for byte ".concat(e));for(var i=t-e,n=new ArrayBuffer(i),o=new Uint8Array(n),a=0,s=r;s<this.shards.length;s++){var l=this.shards[s],u=e+a-l.start,d=a,c=Math.min(t,l.end)-l.start,p=new Uint8Array(l.buffer,u,c-u);if(o.set(p,d),a+=p.length,t<l.end)break}return n},CompositeArrayBuffer.prototype.findShardForByte=function(e){if(0===this.shards.length||e<0||e>=this.byteLength)return -1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function check(t){return e<t.start?-1:e>=t.end?1:0}if(0===check(this.shards[this.previousShardIndex]))return this.previousShardIndex;var t=function(e,t){for(var r=0,i=e.length;r<=i;){var n=Math.floor((i-r)/2)+r,o=t(e[n]);if(0===o)return n;o<0?i=n:r=n+1}return -1}(this.shards,check);return -1===t?-1:(this.previousShardIndex=t,this.previousShardIndex)},CompositeArrayBuffer}();function tidy(e,t){return K.tidy(e,t)}function dispose(e){getTensorsInContainer(e).forEach(function(e){return e.dispose()})}var ee="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function stringByteLength(e){return ee?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function basename(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function getModelJSONForModelArtifacts(e,t){var r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),r}function getModelArtifactsForJSON(e,t){return __awaiter(this,void 0,void 0,function(){var r,i,n;return __generator(this,function(o){switch(o.label){case 0:if(!(null!=e.weightsManifest))return[3,2];return[4,t(e.weightsManifest)];case 1:r=(n=__read.apply(void 0,[o.sent(),2]))[0],i=n[1],o.label=2;case 2:return[2,function(e,t,r){var i={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(i.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw Error("modelJSON has weightsManifest but weightData is null");i.weightSpecs=t,i.weightData=r}return null!=e.signature&&(i.signature=e.signature),null!=e.userDefinedMetadata&&(i.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(i.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(i.initializerSignature=e.initializerSignature),i}(e,r,i)]}})})}function getModelArtifactsInfoForJSON(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:stringByteLength(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:stringByteLength(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new Q(e.weightData).byteLength}}function getWeightSpecs(e){var t,r,i=[];try{for(var n=__values(e),o=n.next();!o.done;o=n.next()){var a=o.value;i.push.apply(i,__spreadArray([],__read(a.weights),!1))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return i}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var et=function(){function IORouterRegistry(){this.saveRouters=[],this.loadRouters=[]}return IORouterRegistry.getInstance=function(){return null==IORouterRegistry.instance&&(IORouterRegistry.instance=new IORouterRegistry),IORouterRegistry.instance},IORouterRegistry.registerSaveRouter=function(e){IORouterRegistry.getInstance().saveRouters.push(e)},IORouterRegistry.registerLoadRouter=function(e){IORouterRegistry.getInstance().loadRouters.push(e)},IORouterRegistry.getSaveHandlers=function(e){return IORouterRegistry.getHandlers(e,"save")},IORouterRegistry.getLoadHandlers=function(e,t){return IORouterRegistry.getHandlers(e,"load",t)},IORouterRegistry.getHandlers=function(e,t,r){var i=[];return("load"===t?IORouterRegistry.getInstance().loadRouters:IORouterRegistry.getInstance().saveRouters).forEach(function(t){var n=t(e,r);null!==n&&i.push(n)}),i},IORouterRegistry}(),er="tensorflowjs",ei="models_store",en="model_info_store";function getIndexedDBFactory(){if(!env().getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function setUpDatabase(e){var t=e.result;t.createObjectStore(ei,{keyPath:"modelPath"}),t.createObjectStore(en,{keyPath:"modelPath"})}var eo=function(){function BrowserIndexedDB(e){if(this.indexedDB=getIndexedDBFactory(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}return BrowserIndexedDB.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,e)]})})},BrowserIndexedDB.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},BrowserIndexedDB.prototype.databaseAction=function(e,t){var r=this;return new Promise(function(e,i){var n=r.indexedDB.open(er,1);n.onupgradeneeded=function(){return setUpDatabase(n)},n.onsuccess=function(){var o=n.result;if(null==t){var a=o.transaction(ei,"readonly"),s=a.objectStore(ei).get(r.modelPath);s.onsuccess=function(){if(null==s.result)return o.close(),i(Error("Cannot find model with path '".concat(r.modelPath,"' ")+"in IndexedDB."));e(s.result.modelArtifacts)},s.onerror=function(e){return o.close(),i(s.error)},a.oncomplete=function(){return o.close()}}else{t.weightData=Q.join(t.weightData);var l,u,d=getModelArtifactsInfoForJSON(t),c=o.transaction(en,"readwrite"),p=c.objectStore(en);try{l=p.put({modelPath:r.modelPath,modelArtifactsInfo:d})}catch(e){return i(e)}l.onsuccess=function(){var n,a=(u=o.transaction(ei,"readwrite")).objectStore(ei);try{n=a.put({modelPath:r.modelPath,modelArtifacts:t,modelArtifactsInfo:d})}catch(e){return i(e)}n.onsuccess=function(){return e({modelArtifactsInfo:d})},n.onerror=function(e){var t=(p=c.objectStore(en)).delete(r.modelPath);t.onsuccess=function(){return o.close(),i(n.error)},t.onerror=function(e){return o.close(),i(n.error)}}},l.onerror=function(e){return o.close(),i(l.error)},c.oncomplete=function(){null==u?o.close():u.oncomplete=function(){return o.close()}}}},n.onerror=function(e){return i(n.error)}})},BrowserIndexedDB}();eo.URL_SCHEME="indexeddb://";var indexedDBRouter=function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(eo.URL_SCHEME)?(t=e.slice(eo.URL_SCHEME.length),new eo(t)):null};et.registerSaveRouter(indexedDBRouter),et.registerLoadRouter(indexedDBRouter);var ea=function(){function BrowserIndexedDBManager(){this.indexedDB=getIndexedDBFactory()}return BrowserIndexedDBManager.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,r){var i=e.indexedDB.open(er,1);i.onupgradeneeded=function(){return setUpDatabase(i)},i.onsuccess=function(){var e=i.result,n=e.transaction(en,"readonly"),o=n.objectStore(en).getAll();o.onsuccess=function(){var e,r,i={};try{for(var n=__values(o.result),a=n.next();!a.done;a=n.next()){var s=a.value;i[s.modelPath]=s.modelArtifactsInfo}}catch(t){e={error:t}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}t(i)},o.onerror=function(t){return e.close(),r(o.error)},n.oncomplete=function(){return e.close()}},i.onerror=function(e){return r(i.error)}})]})})},BrowserIndexedDBManager.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(r){return e=e.startsWith(eo.URL_SCHEME)?e.slice(eo.URL_SCHEME.length):e,[2,new Promise(function(r,i){var n=t.indexedDB.open(er,1);n.onupgradeneeded=function(){return setUpDatabase(n)},n.onsuccess=function(){var t,o=n.result,a=o.transaction(en,"readwrite"),s=a.objectStore(en),l=s.get(e);l.onsuccess=function(){if(null==l.result)return o.close(),i(Error("Cannot find model with path '".concat(e,"' ")+"in IndexedDB."));var n=s.delete(e),deleteModelData_1=function(){var n=(t=o.transaction(ei,"readwrite")).objectStore(ei).delete(e);n.onsuccess=function(){return r(l.result.modelArtifactsInfo)},n.onerror=function(e){return i(l.error)}};n.onsuccess=deleteModelData_1,n.onerror=function(e){return deleteModelData_1(),o.close(),i(l.error)}},l.onerror=function(e){return o.close(),i(l.error)},a.oncomplete=function(){null==t?o.close():t.oncomplete=function(){return o.close()}}},n.onerror=function(e){return i(n.error)}})]})})},BrowserIndexedDBManager}(),es="tensorflowjs_models",el="info";function getModelKeys(e){return{info:[es,e,el].join("/"),topology:[es,e,"model_topology"].join("/"),weightSpecs:[es,e,"weight_specs"].join("/"),weightData:[es,e,"weight_data"].join("/"),modelMetadata:[es,e,"model_metadata"].join("/")}}function removeItems(e){var t,r;try{for(var i=__values(Object.values(e)),n=i.next();!n.done;n=i.next()){var o=n.value;window.localStorage.removeItem(o)}}catch(e){t={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}}var eu=function(){function BrowserLocalStorage(e){if(!env().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=getModelKeys(this.modelPath)}return BrowserLocalStorage.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,o;return __generator(this,function(a){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),i=getModelArtifactsInfoForJSON(e),n=Q.join(e.weightData);try{return this.LS.setItem(this.keys.info,JSON.stringify(i)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(e){if(ee)return Buffer.from(e).toString("base64");for(var t=new Uint8Array(e),r="",i=0,n=t.length;i<n;i++)r+=String.fromCharCode(t[i]);return btoa(r)}(n)),o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0},this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),[2,{modelArtifactsInfo:i}]}catch(e){throw removeItems(this.keys),Error("Failed to save model '".concat(this.modelPath,"' to local storage: ")+"size quota being exceeded is a possible cause of this failure: "+"modelTopologyBytes=".concat(i.modelTopologyBytes,", ")+"weightSpecsBytes=".concat(i.weightSpecsBytes,", ")+"weightDataBytes=".concat(i.weightDataBytes,"."))}return[2]})})},BrowserLocalStorage.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,i,n,o,a;return __generator(this,function(s){if(null==(e=JSON.parse(this.LS.getItem(this.keys.info))))throw Error("In local storage, there is no model with name '".concat(this.modelPath,"'"));if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},null==(r=JSON.parse(this.LS.getItem(this.keys.topology))))throw Error("In local storage, the topology of model '".concat(this.modelPath,"' ")+"is missing.");if(t.modelTopology=r,null==(i=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw Error("In local storage, the weight specs of model '".concat(this.modelPath,"' ")+"are missing.");if(t.weightSpecs=i,null!=(n=this.LS.getItem(this.keys.modelMetadata))&&(o=JSON.parse(n),t.format=o.format,t.generatedBy=o.generatedBy,t.convertedBy=o.convertedBy,null!=o.signature&&(t.signature=o.signature),null!=o.userDefinedMetadata&&(t.userDefinedMetadata=o.userDefinedMetadata),null!=o.modelInitializer&&(t.modelInitializer=o.modelInitializer),null!=o.initializerSignature&&(t.initializerSignature=o.initializerSignature),null!=o.trainingConfig&&(t.trainingConfig=o.trainingConfig)),null==(a=this.LS.getItem(this.keys.weightData)))throw Error("In local storage, the binary weight values of model "+"'".concat(this.modelPath,"' are missing."));return t.weightData=function(e){if(ee){var t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}for(var r=atob(e),i=new Uint8Array(r.length),n=0;n<r.length;++n)i.set([r.charCodeAt(n)],n);return i.buffer}(a),[2,t]})})},BrowserLocalStorage}();eu.URL_SCHEME="localstorage://";var localStorageRouter=function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(eu.URL_SCHEME)?(t=e.slice(eu.URL_SCHEME.length),new eu(t)):null};et.registerSaveRouter(localStorageRouter),et.registerLoadRouter(localStorageRouter);var ed=function(){function BrowserLocalStorageManager(){assert(env().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),assert("undefined"==typeof window||void 0!==window.localStorage,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return BrowserLocalStorageManager.prototype.listModels=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,i,n;return __generator(this,function(o){for(i=0,e={},t=es+"/",r="/"+el;i<this.LS.length;++i)(n=this.LS.key(i)).startsWith(t)&&n.endsWith(r)&&(e[function(e){var t=e.split("/");if(t.length<3)throw Error("Invalid key format: ".concat(e));return t.slice(1,t.length-1).join("/")}(n)]=JSON.parse(this.LS.getItem(n)));return[2,e]})})},BrowserLocalStorageManager.prototype.removeModel=function(e){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(i){if(t=getModelKeys(e=e.startsWith(eu.URL_SCHEME)?e.slice(eu.URL_SCHEME.length):e),null==this.LS.getItem(t.info))throw Error("Cannot find model at path '".concat(e,"'"));return r=JSON.parse(this.LS.getItem(t.info)),removeItems(t),[2,r]})})},BrowserLocalStorageManager}(),ec=function(){function ModelStoreManagerRegistry(){this.managers={}}return ModelStoreManagerRegistry.getInstance=function(){return null==ModelStoreManagerRegistry.instance&&(ModelStoreManagerRegistry.instance=new ModelStoreManagerRegistry),ModelStoreManagerRegistry.instance},ModelStoreManagerRegistry.registerManager=function(e,t){assert(null!=e,function(){return"scheme must not be undefined or null."}),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),assert(e.length>0,function(){return"scheme must not be an empty string."});var r=ModelStoreManagerRegistry.getInstance();assert(null==r.managers[e],function(){return"A model store manager is already registered for scheme '".concat(e,"'.")}),r.managers[e]=t},ModelStoreManagerRegistry.getManager=function(e){var t=ModelStoreManagerRegistry.getInstance().managers[e];if(null==t)throw Error("Cannot find model manager for scheme '".concat(e,"'"));return t},ModelStoreManagerRegistry.getSchemes=function(){return Object.keys(ModelStoreManagerRegistry.getInstance().managers)},ModelStoreManagerRegistry}(),ep=function(){function PlatformBrowser(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}return PlatformBrowser.prototype.fetch=function(e,t){return fetch(e,t)},PlatformBrowser.prototype.now=function(){return performance.now()},PlatformBrowser.prototype.encode=function(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error("Browser's encoder only supports utf-8, but got ".concat(t));return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)},PlatformBrowser.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},PlatformBrowser.prototype.setTimeoutCustom=function(e,t){var r=this;if("undefined"==typeof window||!env().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(function(){window.postMessage({name:r.messageName,index:r.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",function(e){e.source===window&&e.data.name===r.messageName&&(e.stopPropagation(),(0,r.functionRefs[e.data.index])(),r.handledMessageCount++,r.handledMessageCount===r.functionRefs.length&&(r.functionRefs=[],r.handledMessageCount=0))},!0))},PlatformBrowser.prototype.isTypedArray=function(e){return isTypedArrayBrowser(e)},PlatformBrowser}();if(env().get("IS_BROWSER")){env().setPlatform("browser",new ep);try{ec.registerManager(eu.URL_SCHEME,new ed)}catch(e){}try{ec.registerManager(eo.URL_SCHEME,new ea)}catch(e){}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eh={importFetch:function(){return r(81285)}},ef=function(){function PlatformNode(){this.util=r(73837),this.textEncoder=new this.util.TextEncoder}return PlatformNode.prototype.fetch=function(e,t){return null!=env().global.fetch?env().global.fetch(e,t):(null==l&&(l=eh.importFetch()),l(e,t))},PlatformNode.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},PlatformNode.prototype.encode=function(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error("Node built-in encoder only supports utf-8, but got ".concat(t));return this.textEncoder.encode(e)},PlatformNode.prototype.decode=function(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)},PlatformNode.prototype.isTypedArray=function(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)},PlatformNode}();/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function buffer(e,t,r){return void 0===t&&(t="float32"),t=t||"float32",assertNonNegativeIntegerDimensions(e),new z(e,t,r)}env().get("IS_NODE")&&!env().get("IS_BROWSER")&&env().setPlatform("node",new ef);var ey=op({cast_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","cast");if(!("bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t))throw Error("Failed to cast to unknown dtype ".concat(t));if("string"===t&&"string"!==r.dtype||"string"!==t&&"string"===r.dtype)throw Error("Only strings can be casted to strings");return K.runKernel(h,{x:r},{dtype:t})}}),em=op({clone_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","clone","string_or_numeric");return K.runKernel(f,{x:t})}});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */getOrMakeEngine(),G={buffer:buffer,cast:ey,clone:em,print:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=!1),console.log(e.toString(t))}};var eg=op({add_:function(e,t){var r,i=convertToTensor(e,"a","add"),n=convertToTensor(t,"b","add"),o={a:i=(r=__read(makeTypesMatch(i,n),2))[0],b:n=r[1]};return K.runKernel("Add",o)}}),ev=op({floorDiv_:function(e,t){var r,i=convertToTensor(e,"a","floorDiv"),n=convertToTensor(t,"b","floorDiv"),o={a:i=(r=__read(makeTypesMatch(i,n),2))[0],b:n=r[1]};return K.runKernel("FloorDiv",o)}}),eb=op({div_:function(e,t){var r,i=convertToTensor(e,"a","div"),n=convertToTensor(t,"b","div");if(i=(r=__read(makeTypesMatch(i,n),2))[0],n=r[1],"int32"===i.dtype&&"int32"===n.dtype)return ev(i,n);var o={a:i,b:n};return K.runKernel("RealDiv",o,{})}}),eS=op({mul_:function(e,t){var r,i=convertToTensor(e,"a","mul"),n=convertToTensor(t,"b","mul"),o={a:i=(r=__read(makeTypesMatch(i,n),2))[0],b:n=r[1]};return K.runKernel("Multiply",o)}}),ex=op({abs_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","abs");if("complex64"===t.dtype){var r={x:t};return K.runKernel("ComplexAbs",r)}var r={x:t};return K.runKernel("Abs",r)}}),eP=op({addN_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){assert(Array.isArray(e),function(){return"The argument passed to tf.addN() must be a list of tensors"}),assert(e.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+"".concat(e.length)});var t=e.map(function(e,t){return convertToTensor(e,"tensors".concat(t),"addN")}),r=t[0];return t.forEach(function(e){if(e.dtype!==r.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(e){if(!arraysEqual(e.shape,r.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),K.runKernel("AddN",t)}});function parseTupleParam(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function getEffectiveFilterSize(e,t){return t<=1?e:e+(e-1)*(t-1)}function round$1(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error("Unknown roundingMode ".concat(t))}}function tupleValuesAreOne(e){var t=__read(parseTupleParam(e),3),r=t[0],i=t[1],n=t[2];return 1===r&&1===i&&1===n}function eitherStridesOrDilationsAreOne(e,t){return tupleValuesAreOne(e)||tupleValuesAreOne(t)}function stridesOrDilationsArePositive(e){return parseTupleParam(e).every(function(e){return e>0})}function checkPadOnDimRoundingMode(e,t,r){if(null!=r){if("string"==typeof t)throw Error("Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,"."));if("number"==typeof t)assert(t%1==0,function(){return"Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,".")});else if("object"==typeof t)t.forEach(function(t){t.forEach(function(t){assert(t%1==0,function(){return"Error in ".concat(e,": pad must be an integer when using ")+"dimRoundingMode ".concat(r," but got pad ").concat(t,".")})})});else throw Error("Error in ".concat(e,": Unknown padding parameter: ").concat(t))}}var eC=op({reshape_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","reshape","string_or_numeric");return K.runKernel("Reshape",{x:r},{shape:t})}}),eA=op({concat_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0),assert(e.length>=1,function(){return"Pass at least one tensor to concat"});var r=convertToTensorArray(e,"tensors","concat","string_or_numeric");if("complex64"===r[0].dtype&&r.forEach(function(e){if("complex64"!==e.dtype)throw Error("Cannot concatenate complex64 tensors with a tensor\n          with dtype ".concat(e.dtype,". "))}),1===r.length)return em(r[0]);var i={axis:t};return K.runKernel("Concat",r,i)}}),eT=op({matMul_:function(e,t,r,i){void 0===r&&(r=!1),void 0===i&&(i=!1);var n,o=convertToTensor(e,"a","matMul"),a=convertToTensor(t,"b","matMul"),s={a:o=(n=__read(makeTypesMatch(o,a),2))[0],b:a=n[1]},l={transposeA:r,transposeB:i};return K.runKernel("BatchMatMul",s,l)}}),e_=op({sigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sigmoid","float32");return K.runKernel("Sigmoid",{x:t})}}),ew=op({slice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var i=convertToTensor(e,"x","slice","string_or_numeric");if(0===i.rank)throw Error("Slicing scalar is not possible");return K.runKernel("Slice",{x:i},{begin:t,size:r})}}),eE=op({broadcastTo_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"broadcastTo","x"),i=r.shape;if(assertNonNegativeIntegerDimensions(t),t.length<r.rank)throw Error("broadcastTo(): shape.length=".concat(t.length," < input.rank=").concat(r.rank,"."));if(t.length>r.rank){for(var n=r.shape.slice();n.length<t.length;)n.unshift(1);r=eC(r,n)}for(var o=r.shape,a=Array.from(t),s=t.length-1;s>=0;s--)if(o[s]===t[s])a[s]=1;else if(1!==r.shape[s])throw Error("broadcastTo(): [".concat(i,"] cannot be broadcast to [").concat(t,"]."));if(0===a.map(function(e,t){return e>1?t:-1}).filter(function(e){return e>=0}).length)return em(r);var l={x:r};return K.runKernel(y,l,{reps:a})}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fill(e,t,r){assertNonNegativeIntegerDimensions(e),r=r||inferDtype(t);var i={shape:e,value:t,dtype:r};return K.runKernel("Fill",{},i)}var eD=op({concat2d_:function(e,t){return eA(e,t)}});function assertAndGetBroadcastShape(e,t){for(var r=Math.max(e.length,t.length),i=Array(r),n=0;n<r;n++){var o=e[e.length-n-1];null==o&&(o=1);var a=t[t.length-n-1];if(null==a&&(a=1),1===o)i[r-n-1]=a;else if(1===a)i[r-n-1]=o;else if(o!==a)throw Error("Operands could not be broadcast together with shapes "+"".concat(e," and ").concat(t,"."));else i[r-n-1]=o}return i}var eO=op({where_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var i=convertToTensor(t,"a","where"),n=convertToTensor(r,"b","where"),o=convertToTensor(e,"condition","where","bool"),a=assertAndGetBroadcastShape(assertAndGetBroadcastShape(o.shape,i.shape),n.shape),s=eE(o,a),l=eE(i,a),u=eE(n,a);return K.runKernel("Select",{condition:s,t:l,e:u})}}),eR=op({zerosLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","zerosLike");return K.runKernel("ZerosLike",{x:t})}}),eM=op({elu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","elu","float32");return K.runKernel("Elu",{x:t})}});function expandShapeToKeepDim(e,t){return function(e,t,r){for(var i=e.length+t.length,n=[],o=0,a=0,s=0;s<i;s++)-1===r.indexOf(s)?n.push(e[o++]):n.push(t[a++]);return n}(e,t.map(function(e){return 1}),t)}var eL=op({max_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var i=convertToTensor(e,"x","max"),n={reductionIndices:t,keepDims:r};return K.runKernel("Max",{x:i},n)}}),ek=op({min_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var i=convertToTensor(e,"x","min"),n={axis:t,keepDims:r};return K.runKernel("Min",{x:i},n)}}),eI=op({pow_:function(e,t){var r,i=convertToTensor(e,"base","pow"),n=convertToTensor(t,"exp","pow"),o={a:i=(r=__read(makeTypesMatch(i,n),2))[0],b:n=r[1]};return K.runKernel("Pow",o)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function scalar(e,t){if((isTypedArray(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&isTypedArray(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return makeTensor(e,[],[],t)}var eB=op({sqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","sqrt","float32");return K.runKernel("Sqrt",{x:t})}}),eV=op({square_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","square");return K.runKernel("Square",{x:t},{})}}),eF=op({sum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var i=convertToTensor(e,"x","sum");"bool"===i.dtype&&(i=ey(i,"int32"));var n={x:i},o={axis:t,keepDims:r};return K.runKernel("Sum",n,o)}}),eN=op({norm_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i){void 0===t&&(t="euclidean"),void 0===r&&(r=null),void 0===i&&(i=!1);var n=function normImpl(e,t,r){if(void 0===r&&(r=null),0===e.rank)return ex(e);if(1!==e.rank&&null===r)return normImpl(eC(e,[-1]),t,r);if(1===e.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===t)return eF(ex(e),r);if(t===1/0)return eL(ex(e),r);if(t===-1/0)return ek(ex(e),r);if("euclidean"===t||2===t)return eB(eF(eI(ex(e),scalar(2,"int32")),r));throw Error("Error in norm: invalid ord value: ".concat(t))}if(Array.isArray(r)&&2===r.length){if(1===t)return eL(eF(ex(e),r[0]),r[1]-1);if(t===1/0)return eL(eF(ex(e),r[1]),r[0]);if(t===-1/0)return ek(eF(ex(e),r[1]),r[0]);if("fro"===t||"euclidean"===t)return eB(eF(eV(e),r));throw Error("Error in norm: invalid ord value: ".concat(t))}throw Error("Error in norm: invalid axis: ".concat(r))}(e=convertToTensor(e,"x","norm"),t,r),o=n.shape;if(i){var a=parseAxisParam(r,e.shape);o=expandShapeToKeepDim(n.shape,a)}return eC(n,o)}}),ej=op({exp_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","exp");return K.runKernel("Exp",{x:t})}}),eH=op({expandDims_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","expandDims","string_or_numeric");assert(t<=r.rank,function(){return"Axis must be <= rank of the tensor"});var i={dim:t};return K.runKernel("ExpandDims",{input:r},i)}}),ez=op({tile_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","tile","string_or_numeric");return assert(r.rank===t.length,function(){return"Error in transpose: rank of input ".concat(r.rank," ")+"must match length of reps ".concat(t,".")}),K.runKernel(y,{x:r},{reps:t})}}),eU=op({eye_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i){void 0===i&&(i="float32"),null==t&&(t=e);for(var n=buffer([e,t],i),o=e<=t?e:t,a=0;a<o;++a)n.set(1,a,a);var s=eC(n.toTensor(),[e,t]);if(null==r)return s;if(1===r.length)return ez(eH(s,0),[r[0],1,1]);if(2===r.length)return ez(eH(eH(s,0),0),[r[0],r[1],1,1]);if(3===r.length)return ez(eH(eH(eH(s,0),0),0),[r[0],r[1],r[2],1,1]);throw Error("eye() currently supports only 1D and 2D "+"batchShapes, but received ".concat(r.length,"D."))}}),eG=op({gather_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var n=convertToTensor(e,"x","gather"),o=convertToTensor(t,"indices","gather","int32"),a={axis:r,batchDims:i};return K.runKernel("GatherV2",{x:n,indices:o},a)}}),eX=op({greater_:function(e,t){var r,i=convertToTensor(e,"a","greater","string_or_numeric"),n=convertToTensor(t,"b","greater","string_or_numeric");i=(r=__read(makeTypesMatch(i,n),2))[0],n=r[1],assertAndGetBroadcastShape(i.shape,n.shape);var o={a:i,b:n};return K.runKernel("Greater",o)}}),eY=op({imag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"input","imag");return K.runKernel("Imag",{input:t})}}),eW=op({leakyRelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=.2);var r=convertToTensor(e,"x","leakyRelu"),i={alpha:t};return K.runKernel("LeakyRelu",{x:r},i)}}),eq=op({log_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","log","float32");return K.runKernel("Log",{x:t})}}),e$=op({neg_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","neg");return K.runKernel("Neg",{x:t})}}),eK=op({sub_:function(e,t){var r,i=convertToTensor(e,"a","sub"),n=convertToTensor(t,"b","sub"),o={a:i=(r=__read(makeTypesMatch(i,n),2))[0],b:n=r[1]};return K.runKernel("Sub",o)}}),eZ=op({maximum_:function(e,t){var r,i=convertToTensor(e,"a","maximum"),n=convertToTensor(t,"b","maximum");i=(r=__read(makeTypesMatch(i,n),2))[0],n=r[1],"bool"===i.dtype&&(i=ey(i,"int32"),n=ey(n,"int32")),assertAndGetBroadcastShape(i.shape,n.shape);var o={a:i,b:n};return K.runKernel("Maximum",o)}}),eJ=op({mean_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===t&&(t=null),void 0===r&&(r=!1);var i=convertToTensor(e,"x","mean"),n={axis:t,keepDims:r};return K.runKernel("Mean",{x:i},n)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zeros(e,t){if(void 0===t&&(t="float32"),assertNonNegativeIntegerDimensions(e),"complex64"===t)return J(zeros(e,"float32"),zeros(e,"float32"));var r=makeZerosTypedArray(sizeFromShape(e),t);return K.makeTensor(r,e,t)}var eQ=op({notEqual_:function(e,t){var r,i=convertToTensor(e,"a","notEqual","string_or_numeric"),n=convertToTensor(t,"b","notEqual","string_or_numeric");i=(r=__read(makeTypesMatch(i,n),2))[0],n=r[1],assertAndGetBroadcastShape(i.shape,n.shape);var o={a:i,b:n};return K.runKernel("NotEqual",o)}}),e1=op({prelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){var r=convertToTensor(e,"x","prelu"),i=convertToTensor(t,"alpha","prelu");return K.runKernel("Prelu",{x:r,alpha:i})}}),e0={exports:{}};!function(e,t,r){function Alea(e){var t,r=this,i=(t=4022871197,function(e){e=String(e);for(var r=0;r<e.length;r++){var i=.02519603282416938*(t+=e.charCodeAt(r));t=i>>>0,i-=t,i*=t,t=i>>>0,i-=t,t+=4294967296*i}return(t>>>0)*23283064365386963e-26});r.next=function(){var e=2091639*r.s0+23283064365386963e-26*r.c;return r.s0=r.s1,r.s1=r.s2,r.s2=e-(r.c=0|e)},r.c=1,r.s0=i(" "),r.s1=i(" "),r.s2=i(" "),r.s0-=i(e),r.s0<0&&(r.s0+=1),r.s1-=i(e),r.s1<0&&(r.s1+=1),r.s2-=i(e),r.s2<0&&(r.s2+=1)}function copy(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function impl(e,t){var r=new Alea(e),i=t&&t.state,n=r.next;return n.int32=function(){return 4294967296*r.next()|0},n.double=function(){return n()+(2097152*n()|0)*11102230246251565e-32},n.quick=n,i&&("object"==typeof i&&copy(i,r),n.state=function(){return copy(r,{})}),n}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.alea=impl}(0,e0,!1);var e2=e0.exports,e4={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:r+=e;for(var i=0;i<r.length+64;i++)t.x^=0|r.charCodeAt(i),t.next()}function copy(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function impl(e,t){var r=new XorGen(e),i=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,i&&("object"==typeof i&&copy(i,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xor128=impl}(0,e4,!1);var e6=e4.exports,e3={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:r+=e;for(var i=0;i<r.length+64;i++)t.x^=0|r.charCodeAt(i),i==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function copy(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function impl(e,t){var r=new XorGen(e),i=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,i&&("object"==typeof i&&copy(i,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xorwow=impl}(0,e3,!1);var e8=e3.exports,e5={exports:{}};!function(e,t,r){function XorGen(e){var t=this;t.next=function(){var e,r,i=t.x,n=t.i;return e=i[n],e^=e>>>7,r=e^e<<24^((e=i[n+1&7])^e>>>10)^((e=i[n+3&7])^e>>>3)^((e=i[n+4&7])^e<<7),e=i[n+7&7],e^=e<<13,r^=e^e<<9,i[n]=r,t.i=n+1&7,r},function(e,t){var r,i=[];if(t===(0|t))i[0]=t;else for(r=0,t=""+t;r<t.length;++r)i[7&r]=i[7&r]<<15^t.charCodeAt(r)+i[r+1&7]<<13;for(;i.length<8;)i.push(0);for(r=0;r<8&&0===i[r];++r);for(8==r?i[7]=-1:i[r],e.x=i,e.i=0,r=256;r>0;--r)e.next()}(t,e)}function copy(e,t){return t.x=e.x.slice(),t.i=e.i,t}function impl(e,t){null==e&&(e=+new Date);var r=new XorGen(e),i=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,i&&(i.x&&copy(i,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xorshift7=impl}(0,e5,!1);var e9=e5.exports,e7={exports:{}};!function(e,t,r){function XorGen(e){var t=this;t.next=function(){var e,r,i=t.w,n=t.X,o=t.i;return t.w=i=i+1640531527|0,r=n[o+34&127],e=n[o=o+1&127],r^=r<<13,e^=e<<17,r^=r>>>15,e^=e>>>12,r=n[o]=r^e,t.i=o,r+(i^i>>>16)|0},function(e,t){var r,i,n,o,a,s=[],l=128;for(t===(0|t)?(i=t,t=null):(t+="\x00",i=0,l=Math.max(l,t.length)),n=0,o=-32;o<l;++o)t&&(i^=t.charCodeAt((o+32)%t.length)),0===o&&(a=i),i^=i<<10,i^=i>>>15,i^=i<<4,i^=i>>>13,o>=0&&(a=a+1640531527|0,n=0==(r=s[127&o]^=i+a)?n+1:0);for(n>=128&&(s[127&(t&&t.length||0)]=-1),n=127,o=512;o>0;--o)i=s[n+34&127],r=s[n=n+1&127],i^=i<<13,r^=r<<17,i^=i>>>15,r^=r>>>12,s[n]=i^r;e.w=a,e.X=s,e.i=n}(t,e)}function copy(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function impl(e,t){null==e&&(e=+new Date);var r=new XorGen(e),i=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,i&&(i.X&&copy(i,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.xor4096=impl}(0,e7,!1);var te=e7.exports,tt={exports:{}};!function(e,t,r){function XorGen(e){var t=this,r="";t.next=function(){var e=t.b,r=t.c,i=t.d,n=t.a;return e=e<<25^e>>>7^r,r=r-i|0,i=i<<24^i>>>8^n,n=n-e|0,t.b=e=e<<20^e>>>12^r,t.c=r=r-i|0,t.d=i<<16^r>>>16^n,t.a=n-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):r+=e;for(var i=0;i<r.length+20;i++)t.b^=0|r.charCodeAt(i),t.next()}function copy(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function impl(e,t){var r=new XorGen(e),i=t&&t.state,prng=function(){return(r.next()>>>0)/4294967296};return prng.double=function(){do var e=((r.next()>>>11)+(r.next()>>>0)/4294967296)/2097152;while(0===e);return e},prng.int32=r.next,prng.quick=prng,i&&("object"==typeof i&&copy(i,r),prng.state=function(){return copy(r,{})}),prng}t&&t.exports?t.exports=impl:r&&r.amd?r(function(){return impl}):this.tychei=impl}(0,tt,!1);var tr=tt.exports,ti={exports:{}};!function(e){!function(t,i,n){var o,a="random",s=n.pow(256,6),l=n.pow(2,52),u=2*l;function seedrandom(e,r,d){var c=[],p=mixkey(function flatten(e,t){var r,i=[],n=typeof e;if(t&&"object"==n)for(r in e)try{i.push(flatten(e[r],t-1))}catch(e){}return i.length?i:"string"==n?e:e+"\x00"}((r=!0==r?{entropy:!0}:r||{}).entropy?[e,tostring(i)]:null==e?function(){try{var e;return o&&(e=o.randomBytes)?e=e(256):(e=new Uint8Array(256),(t.crypto||t.msCrypto).getRandomValues(e)),tostring(e)}catch(e){var r=t.navigator,n=r&&r.plugins;return[+new Date,t,n,t.screen,tostring(i)]}}():e,3),c),h=new ARC4(c),prng=function(){for(var e=h.g(6),t=s,r=0;e<l;)e=(e+r)*256,t*=256,r=h.g(1);for(;e>=u;)e/=2,t/=2,r>>>=1;return(e+r)/t};return prng.int32=function(){return 0|h.g(4)},prng.quick=function(){return h.g(4)/4294967296},prng.double=prng,mixkey(tostring(h.S),i),(r.pass||d||function(e,t,r,i){return(i&&(i.S&&copy(i,h),e.state=function(){return copy(h,{})}),r)?(n[a]=e,t):e})(prng,p,"global"in r?r.global:this==n,r.state)}function ARC4(e){var t,r=e.length,i=this,n=0,o=i.i=i.j=0,a=i.S=[];for(r||(e=[r++]);n<256;)a[n]=n++;for(n=0;n<256;n++)a[n]=a[o=255&o+e[n%r]+(t=a[n])],a[o]=t;(i.g=function(e){for(var t,r=0,n=i.i,o=i.j,a=i.S;e--;)t=a[n=255&n+1],r=256*r+a[255&(a[n]=a[o=255&o+t])+(a[o]=t)];return i.i=n,i.j=o,r})(256)}function copy(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function mixkey(e,t){for(var r,i=e+"",n=0;n<i.length;)t[255&n]=255&(r^=19*t[255&n])+i.charCodeAt(n++);return tostring(t)}function tostring(e){return String.fromCharCode.apply(0,e)}if(mixkey(n.random(),i),e.exports){e.exports=seedrandom;try{o=r(6113)}catch(e){}}else n["seed"+a]=seedrandom}("undefined"!=typeof self?self:b,[],Math)}(ti);var tn=ti.exports;tn.alea=e2,tn.xor128=e6,tn.xorwow=e8,tn.xorshift7=e9,tn.xor4096=te,tn.tychei=tr;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var to=function(){function MPRandGauss(e,t,r,i,n){this.mean=e,this.stdDev=t,this.dtype=r,this.nextVal=NaN,this.truncated=i,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var o=n||Math.random();this.random=tn.alea(o.toString())}return MPRandGauss.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e,t,r=this.nextVal;return this.nextVal=NaN,r}for(var i=!1;!i;){var n=void 0,o=void 0,a=void 0;do a=(n=2*this.random()-1)*n+(o=2*this.random()-1)*o;while(a>=1||0===a);var s=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*n*s,t=this.mean+this.stdDev*o*s,(!this.truncated||this.isValidTruncated(e))&&(i=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)},MPRandGauss.prototype.convertValue=function(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)},MPRandGauss.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},MPRandGauss}(),ta=(function(){function RandGamma(e,t,r,i){this.alpha=e,this.beta=1/t,this.dtype=r;var n=i||Math.random();this.randu=tn.alea(n.toString()),this.randn=new to(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}RandGamma.prototype.nextValue=function(){for(var e,t,r,i,n,o;;){do i=this.randn.nextValue(),o=1+this.c*i;while(o<=0);if(o*=o*o,t=1-.331*(e=i*i)*e,r=.5*e+this.d*(1-o+Math.log(o)),(n=this.randu())<t||Math.log(n)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)},RandGamma.prototype.convertValue=function(e){return"float32"===this.dtype?e:Math.round(e)}}(),function(){function UniformRandom(e,t,r,i){void 0===e&&(e=0),void 0===t&&(t=1);var n=this;if(this.canReturnFloat=function(){return null==n.dtype||"float32"===n.dtype},this.min=e,this.range=t-e,this.dtype=r,null==i&&(i=Math.random()),"number"==typeof i&&(i=i.toString()),!this.canReturnFloat()&&this.range<=1)throw Error("The difference between ".concat(e," - ").concat(t," <= 1 and dtype is not float"));this.random=tn.alea(i)}return UniformRandom.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},UniformRandom.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},UniformRandom}()),ts=op({real_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"input","real");return K.runKernel("Real",{input:t})}}),tl=op({relu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","relu");return K.runKernel("Relu",{x:t})}}),tu=op({relu6_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){var t=convertToTensor(e,"x","relu6");return K.runKernel("Relu6",{x:t})}}),td=op({fft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return assert("complex64"===e.dtype,function(){return"The dtype for tf.spectral.fft() must be complex64 "+"but got ".concat(e.dtype,".")}),K.runKernel("FFT",{input:e})}}),tc=op({split_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){void 0===r&&(r=0);var i=convertToTensor(e,"x","split"),n={numOrSizeSplits:t,axis:r};return K.runKernel("SplitV",{x:i},n)}}),tp=op({rfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){assert("float32"===e.dtype,function(){return"The dtype for rfft() must be real value but got ".concat(e.dtype)});var r,i=e.shape[e.shape.length-1],n=e.size/i;if(null!=t&&t<i){var o=e.shape.map(function(e){return 0}),a=e.shape.map(function(e){return e});a[e.shape.length-1]=t,r=ew(e,o,a),i=t}else if(null!=t&&t>i){var s=e.shape.map(function(e){return e});s[e.shape.length-1]=t-i,r=eA([e,zeros(s)],e.shape.length-1),i=t}else r=e;var l=eR(r),u=td(eC(J(r,l),[n,i])),d=Math.floor(i/2)+1,c=ts(u),p=eY(u),h=tc(c,[d,i-d],c.shape.length-1),f=tc(p,[d,i-d],p.shape.length-1),y=r.shape.slice();return y[r.shape.length-1]=d,eC(J(h[0],f[0]),y)}}),th=op({step_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){void 0===t&&(t=0);var r=convertToTensor(e,"x","step"),i={alpha:t};return K.runKernel("Step",{x:r},i)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor1d(e,t){assertNonNull(e);var r=inferShape(e,t);if(1!==r.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return makeTensor(e,null,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tensor2d(e,t,r){if(assertNonNull(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");var i=inferShape(e,r);if(2!==i.length&&1!==i.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===i.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return makeTensor(e,t,i,r)}op({tensorScatterUpdate_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var i=convertToTensor(e,"tensor","tensorScatterupdate"),n=convertToTensor(t,"indices","tensorScatterupdate","int32"),o=convertToTensor(r,"updates","tensorScatterupdate");if(function(e,t,r){if(t.rank<1)throw Error("tf.scatterND() expects the indices to be rank 1 or higher,"+" but the rank was ".concat(t.rank,"."));if(e.rank<1)throw Error("tf.scatterND() expects the updates to be rank 1 or higher,"+" but the rank was ".concat(e.rank,"."));if("int32"!==t.dtype)throw Error("The dtype of 'indices' should be int32, but got dtype: ".concat(t.dtype));if(r.length<1)throw Error("Output rank must be greater or equal to 1, but got shape: ".concat(r));if(0===r.length){if(0===t.size)throw Error("Indices specified for empty output. indices shape: ".concat(t.shape));if(0===e.size)throw Error("Updates specified for empty output. updates shape: ".concat(e.shape))}(function(e,t,r){var i=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,o="Must have updates.shape = indices.shape[:batchDim] + "+"shape[sliceDim:], got updates.shape: ".concat(r.shape)+", indices.shape: ".concat(t.shape,", shape: ").concat(e)+", sliceDim: ".concat(i,", and batchDim: ").concat(n,".");if(r.rank<n)throw Error(o+" update.rank < ".concat(n,". "));if(e.length<i+(r.rank-n))throw Error(o+" Output shape length < ".concat(i+(r.rank-n)));if(r.rank!==n+e.length-i)throw Error(o+" update.rank != ".concat(n+e.length-i));for(var a=0;a<n;++a)if(r.shape[a]!==t.shape[a])throw Error(o+" updates.shape[".concat(a,"] (").concat(r.shape[a],") != indices.shape[").concat(a,"] (").concat(t.shape[a],")."));for(var a=0;a<r.rank-n;++a)if(r.shape[a+n]!==e[a+i])throw Error(o+" updates.shape[".concat(a+n,"] (").concat(r.shape[a+n],") != shape[").concat(a+n,"] (").concat(e[a+n],")"))})(r,t,e)}(o,n,i.shape),i.dtype!==o.dtype)throw Error("tensor and updates must have the same dtype, instead they are ".concat(i.dtype," and ").concat(o.dtype,"."));return K.runKernel("TensorScatterUpdate",{tensor:i,indices:n,updates:o},{})}});var tf=op({transpose_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r){var i=convertToTensor(e,"x","transpose");if(null==t&&(t=i.shape.map(function(e,t){return t}).reverse()),assert(i.rank===t.length,function(){return"Error in transpose: rank of input ".concat(i.rank," ")+"must match length of perm ".concat(t,".")}),t.forEach(function(e){assert(e>=0&&e<i.rank,function(){return"All entries in 'perm' must be between 0 and ".concat(i.rank-1)+" but got ".concat(t)})}),i.rank<=1)return i.clone();var n={perm:t};return"complex64"===i.dtype?tidy(function(){var e=ts(i),t=eY(i);return e=K.runKernel(m,{x:e},n),t=K.runKernel(m,{x:t},n),r&&(t=e$(t)),J(e,t)}):K.runKernel(m,{x:i},n)}});function cosineWindow(e,t,r){for(var i=1-e%2,n=new Float32Array(e),o=0;o<e;++o){var a=2*Math.PI*o/(e+i-1);n[o]=t-r*Math.cos(a)}return tensor1d(n,"float32")}op({depthwiseConv2dNativeBackpropFilter_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i,n,o,a){void 0===o&&(o=[1,1]);var s=e;3===e.rank&&(s=eC(e,[1,e.shape[0],e.shape[1],e.shape[2]]));var l=t;3===l.rank&&(l=eC(t,[1,t.shape[0],t.shape[1],t.shape[2]]));var u={x:s,dy:l},d={strides:i,pad:n,dimRoundingMode:a,dilations:o,filterShape:r};return K.runKernel("DepthwiseConv2dNativeBackpropFilter",u,d)}}),op({depthwiseConv2dNativeBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i,n,o,a){void 0===o&&(o=[1,1]);var s=t,l=!1;3===t.rank&&(l=!0,s=eC(t,[1,t.shape[0],t.shape[1],t.shape[2]]));var u={dy:s,filter:r},d={strides:i,pad:n,dimRoundingMode:a,dilations:o,inputShape:e},c=K.runKernel("DepthwiseConv2dNativeBackpropInput",u,d);return l?eC(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});var ty=op({hammingWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return cosineWindow(e,.54,.46)}}),tm=op({hannWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return cosineWindow(e,.5,.5)}}),tg=op({frame_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i,n){void 0===i&&(i=!1),void 0===n&&(n=0);for(var o=0,a=[];o+t<=e.size;)a.push(ew(e,o,t)),o+=r;if(i)for(;o<e.size;){var s=o+t-e.size,l=eA([ew(e,o,t-s),fill([s],n)]);a.push(l),o+=r}return 0===a.length?tensor2d([],[0,t]):eC(eA(a),[a.length,t])}}),tv=op({stft_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,r,i,n){return void 0===n&&(n=tm),null==i&&(i=Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))),tp(eS(tg(e,t,r),n(t)),i)}});function defaultComparator(e,t){return e>t?1:e<t?-1:0}function ascendingComparator(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */t.IH3=void 0,function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(t.IH3||(t.IH3={}));var tb=new Map,tS=new Map,tx=function(){function Serializable(){}return Serializable.prototype.getClassName=function(){return this.constructor.className},Serializable.fromConfig=function(e,t){return new e(t)},Serializable}(),tP=function(){function SerializationMap(){this.classNameMap={}}return SerializationMap.getMap=function(){return null==SerializationMap.instance&&(SerializationMap.instance=new SerializationMap),SerializationMap.instance},SerializationMap.register=function(e){SerializationMap.getMap().classNameMap[e.className]=[e,e.fromConfig]},SerializationMap}(),tC=function(e){function Optimizer(){return null!==e&&e.apply(this,arguments)||this}return __extends(Optimizer,e),Optimizer.prototype.minimize=function(e,t,r){void 0===t&&(t=!1);var i=this.computeGradients(e,r),n=i.value,o=i.grads;if(null!=r){var a=r.map(function(e){return{name:e.name,tensor:o[e.name]}});this.applyGradients(a)}else this.applyGradients(o);return(dispose(o),t)?n:(n.dispose(),null)},Object.defineProperty(Optimizer.prototype,"iterations",{get:function(){return null==this.iterations_&&(this.iterations_=0),this.iterations_},enumerable:!1,configurable:!0}),Optimizer.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},Optimizer.prototype.computeGradients=function(e,t){return function(e,t){assert(isFunction(e),function(){return"The f passed in variableGrads(f) must be a function"}),assert(null==t||Array.isArray(t)&&t.every(function(e){return e instanceof Y}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var r=null!=t;if(!r)for(var i in t=[],K.registeredVariables)t.push(K.registeredVariables[i]);var n=r?t.filter(function(e){return!e.trainable}):null,o=t.length;assert((t=t.filter(function(e){return e.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to "+"be trainable, but none of the ".concat(o," variables is ")+"trainable."});var a=K.gradients(e,t,null,!0),s=a.value,l=a.grads;assert(l.some(function(e){return null!=e}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),assert(0===s.rank,function(){return"The f passed in variableGrads(f) must return a scalar, but it "+"returned a rank-".concat(s.rank," tensor")});var u={};return t.forEach(function(e,t){null!=l[t]&&(u[e.name]=l[t])}),null!=n&&n.forEach(function(e){return u[e.name]=null}),{value:s,grads:u}}(e,t)},Optimizer.prototype.dispose=function(){null!=this.iterations_&&dispose(this.iterations_)},Optimizer.prototype.saveIterations=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return null==this.iterations_&&(this.iterations_=0),[2,{name:"iter",tensor:scalar(this.iterations_,"int32")}]})})},Optimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("getWeights() is not implemented for this optimizer yet.")})})},Optimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("setWeights() is not implemented for this optimizer class "+"".concat(this.getClassName()))})})},Optimizer.prototype.extractIterations=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=r.sent()[0],[2,e.slice(1)]}})})},Optimizer}(tx);Object.defineProperty(tC,Symbol.hasInstance,{value:function(e){return null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients}});var tA=function(e){function AdadeltaOptimizer(t,r,i){void 0===i&&(i=null);var n=e.call(this)||this;return n.learningRate=t,n.rho=r,n.epsilon=i,n.accumulatedGrads=[],n.accumulatedUpdates=[],null==i&&(n.epsilon=K.backend.epsilon()),n}return __extends(AdadeltaOptimizer,e),Object.defineProperty(AdadeltaOptimizer,"className",{get:function(){return"Adadelta"},enumerable:!1,configurable:!0}),AdadeltaOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,i){var n=K.registeredVariables[r];null==t.accumulatedGrads[i]&&(t.accumulatedGrads[i]={originalName:"".concat(r,"/accum_grad"),variable:tidy(function(){return eR(n).variable(!1)})}),null==t.accumulatedUpdates[i]&&(t.accumulatedUpdates[i]={originalName:"".concat(r,"/accum_var"),variable:tidy(function(){return eR(n).variable(!1)})});var o=Array.isArray(e)?e[i].tensor:e[r];if(null!=o){var a=t.accumulatedGrads[i].variable,s=t.accumulatedUpdates[i].variable;tidy(function(){var e=eg(eS(a,t.rho),eS(eV(o),1-t.rho)),r=eS(eb(eB(eg(s,t.epsilon)),eB(eg(a,t.epsilon))),o),i=eg(eS(s,t.rho),eS(eV(r),1-t.rho));a.assign(e),s.assign(i);var l=eg(eS(r,-t.learningRate),n);n.assign(l)})}}),this.incrementIterations()},AdadeltaOptimizer.prototype.dispose=function(){null!=this.accumulatedUpdates&&(dispose(this.accumulatedGrads.map(function(e){return e.variable})),dispose(this.accumulatedUpdates.map(function(e){return e.variable})))},AdadeltaOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedGrads),!1),__read(this.accumulatedUpdates),!1),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdadeltaOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return t=(e=r.sent()).length/2,this.accumulatedGrads=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdadeltaOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},AdadeltaOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},AdadeltaOptimizer}(tC),tT=function(e){function AdagradOptimizer(t,r){void 0===r&&(r=.1);var i=e.call(this)||this;return i.learningRate=t,i.initialAccumulatorValue=r,i.accumulatedGrads=[],i}return __extends(AdagradOptimizer,e),Object.defineProperty(AdagradOptimizer,"className",{get:function(){return"Adagrad"},enumerable:!1,configurable:!0}),AdagradOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,i){var n=K.registeredVariables[r];null==t.accumulatedGrads[i]&&(t.accumulatedGrads[i]={originalName:"".concat(r,"/accumulator"),variable:tidy(function(){return fill(n.shape,t.initialAccumulatorValue).variable(!1)})});var o=Array.isArray(e)?e[i].tensor:e[r];if(null!=o){var a=t.accumulatedGrads[i].variable;tidy(function(){var e=eg(a,eV(o));a.assign(e);var r=eg(eS(eb(o,eB(eg(e,K.backend.epsilon()))),-t.learningRate),n);n.assign(r)})}}),this.incrementIterations()},AdagradOptimizer.prototype.dispose=function(){null!=this.accumulatedGrads&&dispose(this.accumulatedGrads.map(function(e){return e.variable}))},AdagradOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdagradOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdagradOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},AdagradOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},AdagradOptimizer}(tC),t_=function(e){function AdamOptimizer(t,r,i,n){void 0===n&&(n=null);var o=e.call(this)||this;return o.learningRate=t,o.beta1=r,o.beta2=i,o.epsilon=n,o.accumulatedFirstMoment=[],o.accumulatedSecondMoment=[],tidy(function(){o.accBeta1=scalar(r).variable(),o.accBeta2=scalar(i).variable()}),null==n&&(o.epsilon=K.backend.epsilon()),o}return __extends(AdamOptimizer,e),Object.defineProperty(AdamOptimizer,"className",{get:function(){return"Adam"},enumerable:!1,configurable:!0}),AdamOptimizer.prototype.applyGradients=function(e){var t=this,r=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);tidy(function(){var i=eK(1,t.accBeta1),n=eK(1,t.accBeta2);r.forEach(function(r,o){var a=K.registeredVariables[r];null==t.accumulatedFirstMoment[o]&&(t.accumulatedFirstMoment[o]={originalName:"".concat(r,"/m"),variable:tidy(function(){return eR(a).variable(!1)})}),null==t.accumulatedSecondMoment[o]&&(t.accumulatedSecondMoment[o]={originalName:"".concat(r,"/v"),variable:tidy(function(){return eR(a).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[r];if(null!=s){var l=t.accumulatedFirstMoment[o].variable,u=t.accumulatedSecondMoment[o].variable,d=eg(eS(l,t.beta1),eS(s,1-t.beta1)),c=eg(eS(u,t.beta2),eS(eV(s),1-t.beta2)),p=eb(d,i),h=eb(c,n);l.assign(d),u.assign(c);var f=eg(eS(eb(p,eg(eB(h),t.epsilon)),-t.learningRate),a);a.assign(f)}}),t.accBeta1.assign(eS(t.accBeta1,t.beta1)),t.accBeta2.assign(eS(t.accBeta2,t.beta2))}),this.incrementIterations()},AdamOptimizer.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(function(e){return e.variable})),null!=this.accumulatedSecondMoment&&dispose(this.accumulatedSecondMoment.map(function(e){return e.variable}))},AdamOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedFirstMoment),!1),__read(this.accumulatedSecondMoment),!1),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},AdamOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t,r=this;return __generator(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),tidy(function(){r.accBeta1.assign(eI(r.beta1,r.iterations_+1)),r.accBeta2.assign(eI(r.beta2,r.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},AdamOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},AdamOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},AdamOptimizer}(tC),tw=function(e){function AdamaxOptimizer(t,r,i,n,o){void 0===n&&(n=null),void 0===o&&(o=0);var a=e.call(this)||this;return a.learningRate=t,a.beta1=r,a.beta2=i,a.epsilon=n,a.decay=o,a.accumulatedFirstMoment=[],a.accumulatedWeightedInfNorm=[],tidy(function(){a.iteration=scalar(0).variable(),a.accBeta1=scalar(r).variable()}),null==n&&(a.epsilon=K.backend.epsilon()),a}return __extends(AdamaxOptimizer,e),Object.defineProperty(AdamaxOptimizer,"className",{get:function(){return"Adamax"},enumerable:!1,configurable:!0}),AdamaxOptimizer.prototype.applyGradients=function(e){var t=this,r=Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e);tidy(function(){var i=eK(1,t.accBeta1),n=eb(-t.learningRate,eg(eS(t.iteration,t.decay),1));r.forEach(function(r,o){var a=K.registeredVariables[r];null==t.accumulatedFirstMoment[o]&&(t.accumulatedFirstMoment[o]={originalName:"".concat(r,"/m"),variable:eR(a).variable(!1)}),null==t.accumulatedWeightedInfNorm[o]&&(t.accumulatedWeightedInfNorm[o]={originalName:"".concat(r,"/v"),variable:eR(a).variable(!1)});var s=Array.isArray(e)?e[o].tensor:e[r];if(null!=s){var l=t.accumulatedFirstMoment[o].variable,u=t.accumulatedWeightedInfNorm[o].variable,d=eg(eS(l,t.beta1),eS(s,1-t.beta1)),c=eZ(eS(u,t.beta2),ex(s));l.assign(d),u.assign(c);var p=eg(eS(eb(n,i),eb(d,eg(c,t.epsilon))),a);a.assign(p)}}),t.iteration.assign(eg(t.iteration,1)),t.accBeta1.assign(eS(t.accBeta1,t.beta1))}),this.incrementIterations()},AdamaxOptimizer.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&dispose(this.accumulatedFirstMoment.map(function(e){return e.variable})),null!=this.accumulatedWeightedInfNorm&&dispose(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},AdamaxOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("getWeights() is not implemented for Adamax yet.")})})},AdamaxOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){throw Error("setWeights() is not implemented for Adamax yet.")})})},AdamaxOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},AdamaxOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},AdamaxOptimizer}(tC),tE=function(e){function SGDOptimizer(t){var r=e.call(this)||this;return r.learningRate=t,r.setLearningRate(t),r}return __extends(SGDOptimizer,e),Object.defineProperty(SGDOptimizer,"className",{get:function(){return"SGD"},enumerable:!1,configurable:!0}),SGDOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,i){var n=Array.isArray(e)?e[i].tensor:e[r];if(null!=n){var o=K.registeredVariables[r];tidy(function(){var e=eg(eS(t.c,n),o);o.assign(e)})}}),this.incrementIterations()},SGDOptimizer.prototype.setLearningRate=function(e){var t;this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=(t=scalar(-e),K.keep(t))},SGDOptimizer.prototype.dispose=function(){this.c.dispose()},SGDOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},SGDOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if(0!==(e=t.sent()).length)throw Error("SGD optimizer does not have settable weights.");return[2]}})})},SGDOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate}},SGDOptimizer.fromConfig=function(e,t){return new e(t.learningRate)},SGDOptimizer}(tC),tD=function(e){function MomentumOptimizer(t,r,i){void 0===i&&(i=!1);var n=e.call(this,t)||this;return n.learningRate=t,n.momentum=r,n.useNesterov=i,n.accumulations=[],n.m=scalar(n.momentum),n}return __extends(MomentumOptimizer,e),Object.defineProperty(MomentumOptimizer,"className",{get:function(){return"Momentum"},enumerable:!1,configurable:!0}),MomentumOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,i){var n=K.registeredVariables[r];null==t.accumulations[i]&&(t.accumulations[i]={originalName:"".concat(r,"/momentum"),variable:tidy(function(){return eR(n).variable(!1)})});var o=t.accumulations[i].variable,a=Array.isArray(e)?e[i].tensor:e[r];null!=a&&tidy(function(){var e,r=eg(eS(t.m,o),a);e=t.useNesterov?eg(eS(t.c,eg(a,eS(r,t.m))),n):eg(eS(t.c,r),n),o.assign(r),n.assign(e)})}),this.incrementIterations()},MomentumOptimizer.prototype.dispose=function(){this.m.dispose(),null!=this.accumulations&&dispose(this.accumulations.map(function(e){return e.variable}))},MomentumOptimizer.prototype.setMomentum=function(e){this.momentum=e},MomentumOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},MomentumOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),[2]}})})},MomentumOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},MomentumOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},MomentumOptimizer}(tE),tO=function(e){function RMSPropOptimizer(t,r,i,n,o){void 0===r&&(r=.9),void 0===i&&(i=0),void 0===n&&(n=null),void 0===o&&(o=!1);var a=e.call(this)||this;if(a.learningRate=t,a.decay=r,a.momentum=i,a.epsilon=n,a.accumulatedMeanSquares=[],a.accumulatedMoments=[],a.accumulatedMeanGrads=[],a.centered=o,null==n&&(a.epsilon=K.backend.epsilon()),null==t)throw Error("learningRate for RMSPropOptimizer must be defined.");return a}return __extends(RMSPropOptimizer,e),Object.defineProperty(RMSPropOptimizer,"className",{get:function(){return"RMSProp"},enumerable:!1,configurable:!0}),RMSPropOptimizer.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(e){return e.name}):Object.keys(e)).forEach(function(r,i){var n=K.registeredVariables[r];null==t.accumulatedMeanSquares[i]&&(t.accumulatedMeanSquares[i]={originalName:"".concat(r,"/rms"),variable:tidy(function(){return eR(n).variable(!1)})}),null==t.accumulatedMoments[i]&&(t.accumulatedMoments[i]={originalName:"".concat(r,"/momentum"),variable:tidy(function(){return eR(n).variable(!1)})}),null==t.accumulatedMeanGrads[i]&&t.centered&&(t.accumulatedMeanGrads[i]={originalName:"".concat(r,"/mg"),variable:tidy(function(){return eR(n).variable(!1)})});var o=Array.isArray(e)?e[i].tensor:e[r];if(null!=o){var a=t.accumulatedMeanSquares[i].variable,s=t.accumulatedMoments[i].variable;tidy(function(){var e=eg(eS(a,t.decay),eS(eV(o),1-t.decay));if(t.centered){var r=t.accumulatedMeanGrads[i].variable,l=eg(eS(r,t.decay),eS(o,1-t.decay)),u=eb(eS(o,t.learningRate),eB(eK(e,eg(eV(l),t.epsilon)))),d=eg(eS(s,t.momentum),u);a.assign(e),r.assign(l),s.assign(d);var c=eK(n,d);n.assign(c)}else{var p=eg(eS(a,t.decay),eS(eV(o),1-t.decay)),d=eg(eS(s,t.momentum),eb(eS(o,t.learningRate),eB(eg(p,t.epsilon))));a.assign(p),s.assign(d);var c=eK(n,d);n.assign(c)}})}}),this.incrementIterations()},RMSPropOptimizer.prototype.dispose=function(){null!=this.accumulatedMeanSquares&&dispose(this.accumulatedMeanSquares.map(function(e){return e.variable})),null!=this.accumulatedMeanGrads&&this.centered&&dispose(this.accumulatedMeanGrads.map(function(e){return e.variable})),null!=this.accumulatedMoments&&dispose(this.accumulatedMoments.map(function(e){return e.variable}))},RMSPropOptimizer.prototype.getWeights=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=__spreadArray(__spreadArray([],__read(this.accumulatedMeanSquares),!1),__read(this.accumulatedMoments),!1),this.centered&&e.push.apply(e,__spreadArray([],__read(this.accumulatedMeanGrads),!1)),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},RMSPropOptimizer.prototype.setWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(e){return{originalName:e.name,variable:e.tensor.variable(!1)}})),[2]}})})},RMSPropOptimizer.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},RMSPropOptimizer.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},RMSPropOptimizer}(tC),tR=[tA,tT,t_,tw,tD,tO,tE];function defer(e){return new Promise(function(e){return setTimeout(e)}).then(e)}var tM=function(){function BrowserDownloads(e){if(!env().getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(BrowserDownloads.URL_SCHEME)&&(e=e.slice(BrowserDownloads.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}return BrowserDownloads.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,o,a,s;return __generator(this,function(l){switch(l.label){case 0:if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");if(t=Q.join(e.weightData),r=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return i=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],n=getModelJSONForModelArtifacts(e,i),o=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),(a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor).download=this.modelJsonFileName,a.href=o,[4,defer(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:if(l.sent(),!(null!=e.weightData))return[3,4];return(s=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=r,[4,defer(function(){return s.dispatchEvent(new MouseEvent("click"))})];case 3:l.sent(),l.label=4;case 4:return[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e)}]}})})},BrowserDownloads}();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function monitorPromisesProgress(e,t,r,i){assert(null!=e&&Array.isArray(e)&&e.length>0,function(){return"promises must be a none empty array"}),n=r=null==r?0:r,o=i=null==i?1:i,assert(n>=0&&n<=1,function(){return"Progress fraction must be in range [0, 1], but "+"got startFraction ".concat(n)}),assert(o>=0&&o<=1,function(){return"Progress fraction must be in range [0, 1], but "+"got endFraction ".concat(o)}),assert(o>=n,function(){return"startFraction must be no more than endFraction, but "+"got startFraction ".concat(n," and endFraction ")+"".concat(o)});var n,o,a=0;return Promise.all(e.map(function(n){return n.then(function(n){return t(r+ ++a/e.length*(i-r)),n}),n}))}tM.URL_SCHEME="downloads://",function(){function BrowserFiles(e){if(null==e||e.length<1)throw Error("When calling browserFiles, at least 1 file is required, "+"but received ".concat(e));this.jsonFile=e[0],this.weightsFiles=e.slice(1)}BrowserFiles.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,r){var i=new FileReader;i.onload=function(i){var n=JSON.parse(i.target.result),o=n.modelTopology;if(null==o){r(Error("modelTopology field is missing from file ".concat(e.jsonFile.name)));return}if(null==n.weightsManifest){r(Error("weightManifest field is missing from file ".concat(e.jsonFile.name)));return}if(0===e.weightsFiles.length){t({modelTopology:o});return}t(getModelArtifactsForJSON(n,function(t){return e.loadWeights(t)}))},i.onerror=function(t){return r("Failed to read model topology and weights manifest JSON "+"from file '".concat(e.jsonFile.name,"'. BrowserFiles supports loading ")+"Keras-style tf.Model artifacts only.")},i.readAsText(e.jsonFile)})]})})},BrowserFiles.prototype.loadWeights=function(e){var t,r,i=this,n=[],o=[];try{for(var a=__values(e),s=a.next();!s.done;s=a.next()){var l=s.value;n.push.apply(n,__spreadArray([],__read(l.weights),!1)),o.push.apply(o,__spreadArray([],__read(l.paths),!1))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}var u=this.checkManifestAndWeightFiles(e);return Promise.all(o.map(function(e){return i.loadWeightsFile(e,u[e])})).then(function(e){return[n,e]})},BrowserFiles.prototype.loadWeightsFile=function(e,t){return new Promise(function(r,i){var n=new FileReader;n.onload=function(e){r(e.target.result)},n.onerror=function(t){return i("Failed to weights data from file of path '".concat(e,"'."))},n.readAsArrayBuffer(t)})},BrowserFiles.prototype.checkManifestAndWeightFiles=function(e){var t,r,i=this,n=[],o=this.weightsFiles.map(function(e){return basename(e.name)}),a={};try{for(var s=__values(e),l=s.next();!l.done;l=s.next())l.value.paths.forEach(function(e){var t=basename(e);if(-1!==n.indexOf(t))throw Error("Duplicate file basename found in weights manifest: "+"'".concat(t,"'"));if(n.push(t),-1===o.indexOf(t))throw Error("Weight file with basename '".concat(t,"' is not provided."));a[e]=i.weightsFiles[o.indexOf(t)]})}catch(e){t={error:e}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}if(n.length!==this.weightsFiles.length)throw Error("Mismatch in the number of files in weights manifest "+"(".concat(n.length,") and the number of weight files provided ")+"(".concat(this.weightsFiles.length,")."));return a}}(),et.registerSaveRouter(function(e){var t;return env().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(tM.URL_SCHEME)?(void 0===(t=e.slice(tM.URL_SCHEME.length))&&(t="model"),new tM(t)):null});var tL=function(){function HTTPRequest(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(assert("function"==typeof t.fetchFunc,function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc):this.fetch=env().platform.fetch,assert(null!=e&&e.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(e)&&assert(2===e.length,function(){return"URL paths for http must have a length of 2, "+"(actual length is ".concat(e.length,").")}),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}return HTTPRequest.prototype.save=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,o;return __generator(this,function(a){switch(a.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],i=getModelJSONForModelArtifacts(e,r),t.body.append("model.json",new Blob([JSON.stringify(i)],{type:"application/json"}),"model.json"),null!=e.weightData&&(n=Q.join(e.weightData),t.body.append("model.weights.bin",new Blob([n],{type:"application/octet-stream"}),"model.weights.bin")),[4,this.fetch(this.path,t)];case 1:if((o=a.sent()).ok)return[2,{modelArtifactsInfo:getModelArtifactsInfoForJSON(e),responses:[o]}];throw Error("BrowserHTTPRequest.save() failed due to HTTP response status "+"".concat(o.status,"."))}})})},HTTPRequest.prototype.loadModelJSON=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,i,n;return __generator(this,function(o){switch(o.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=o.sent()).ok)throw Error("Request to ".concat(this.path," failed with status code ")+"".concat(e.status,". Please verify this URL points to ")+"the model JSON of the model to load.");o.label=2;case 2:return o.trys.push([2,4,,5]),[4,e.json()];case 3:return t=o.sent(),[3,5];case 4:throw o.sent(),r="Failed to parse model JSON of response from ".concat(this.path,"."),this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",Error(r);case 5:if(i=t.modelTopology,n=t.weightsManifest,null==i&&null==n)throw Error("The JSON from HTTP path ".concat(this.path," contains neither model ")+"topology or manifest for weights.");return[2,t]}})})},HTTPRequest.prototype.load=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:if(this.loadOptions.streamWeights)return[2,this.loadStream()];return[4,this.loadModelJSON()];case 1:return[2,getModelArtifactsForJSON(t.sent(),function(t){return e.loadWeights(t)})]}})})},HTTPRequest.prototype.loadStream=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r,i,n=this;return __generator(this,function(o){switch(o.label){case 0:return[4,this.loadModelJSON()];case 1:return e=o.sent(),[4,this.getWeightUrls(e.weightsManifest)];case 2:return t=o.sent(),r=getWeightSpecs(e.weightsManifest),i=function(){return function(e,t){var r,i,n=this,o=null==t.fetchFunc?env().platform.fetch:t.fetchFunc,a=0;return null===(r=t.onProgress)||void 0===r||r.call(t,0),new ReadableStream({pull:function(r){return __awaiter(n,void 0,void 0,function(){var n,s,l,u;return __generator(this,function(d){switch(d.label){case 0:if(!(a<e.length))return[3,4];if(i)return[3,2];return[4,o(e[a],t.requestInit,{isBinary:!0})];case 1:i=d.sent().body.getReader(),d.label=2;case 2:return[4,i.read()];case 3:if(l=(s=d.sent()).done,u=s.value,l)return a++,i=void 0,null===(n=t.onProgress)||void 0===n||n.call(t,a/e.length),[3,0];return r.enqueue(u),[2];case 4:return r.close(),[2]}})})}})}(t,n.loadOptions)},[2,Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:i})]}})})},HTTPRequest.prototype.getWeightUrls=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i,n,o,a,s,l,u,d,c,p,h,f,y,m,g,v,b,S;return __generator(this,function(x){switch(x.label){case 0:var P,C,A;r=(t=__read((C=(P=Array.isArray(this.path)?this.path[1]:this.path).lastIndexOf("/"),A=P.lastIndexOf("?"),[P.substring(0,C)+"/",A>C?P.substring(A):""]),2))[0],i=t[1],n=this.weightPathPrefix||r,o=[],a=[];try{for(l=(s=__values(e)).next();!l.done;l=s.next()){u=l.value;try{for(b=void 0,c=(d=__values(u.paths)).next();!c.done;c=d.next())p=c.value,null!=this.weightUrlConverter?a.push(this.weightUrlConverter(p)):o.push(n+p+i)}catch(e){b={error:e}}finally{try{c&&!c.done&&(S=d.return)&&S.call(d)}finally{if(b)throw b.error}}}}catch(e){g={error:e}}finally{try{l&&!l.done&&(v=s.return)&&v.call(s)}finally{if(g)throw g.error}}if(!this.weightUrlConverter)return[3,2];return f=(h=o.push).apply,y=[o],m=[[]],[4,Promise.all(a)];case 1:f.apply(h,y.concat([__spreadArray.apply(void 0,m.concat([__read.apply(void 0,[x.sent()]),!1]))])),x.label=2;case 2:return[2,o]}})})},HTTPRequest.prototype.loadWeights=function(e){return __awaiter(this,void 0,void 0,function(){var t,r,i;return __generator(this,function(n){switch(n.label){case 0:return[4,this.getWeightUrls(e)];case 1:return t=n.sent(),r=getWeightSpecs(e),[4,function(e,t){return __awaiter(this,void 0,void 0,function(){var r,i,n,o,a,s,l,u,d;return __generator(this,function(c){switch(c.label){case 0:if(null==t&&(t={}),r=null==t.fetchFunc?env().platform.fetch:t.fetchFunc,i=e.map(function(e){return r(e,t.requestInit,{isBinary:!0})}),n=0,o=.5,null!=t.onProgress)return[3,2];return[4,Promise.all(i)];case 1:return a=c.sent(),[3,4];case 2:return[4,monitorPromisesProgress(i,t.onProgress,n,o)];case 3:a=c.sent(),c.label=4;case 4:if(s=a.map(function(e){return e.arrayBuffer()}),l=.5,u=1,null!=t.onProgress)return[3,6];return[4,Promise.all(s)];case 5:return d=c.sent(),[3,8];case 6:return[4,monitorPromisesProgress(s,t.onProgress,l,u)];case 7:d=c.sent(),c.label=8;case 8:return[2,d]}})})}(t,this.loadOptions)];case 2:return i=n.sent(),[2,[r,i]]}})})},HTTPRequest}();function isHTTPScheme(e){return null!=e.match(tL.URL_SCHEME_REGEX)}tL.URL_SCHEME_REGEX=/^https?:\/\//;var httpRouter=function(e,t){if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(function(e){return isHTTPScheme(e)}):isHTTPScheme(e)){var r,i;return r=e,i=t,new tL(r,i)}return null};et.registerSaveRouter(httpRouter),et.registerLoadRouter(httpRouter),function(){function PassthroughLoader(e){this.modelArtifacts=e}PassthroughLoader.prototype.load=function(){return this.modelArtifacts}}(),(function(e){this.saveHandler=e}).prototype.save=function(e){return this.saveHandler(e)};function getElidedAxes(e,t){for(var r=[],i=0;i<e;i++)r.push(t+i);return r}(function(){function OptimizerConstructors(){}OptimizerConstructors.sgd=function(e){return new tE(e)},OptimizerConstructors.momentum=function(e,t,r){return void 0===r&&(r=!1),new tD(e,t,r)},OptimizerConstructors.rmsprop=function(e,t,r,i,n){return void 0===t&&(t=.9),void 0===r&&(r=0),void 0===i&&(i=null),void 0===n&&(n=!1),new tO(e,t,r,i,n)},OptimizerConstructors.adam=function(e,t,r,i){return void 0===e&&(e=.001),void 0===t&&(t=.9),void 0===r&&(r=.999),void 0===i&&(i=null),new t_(e,t,r,i)},OptimizerConstructors.adadelta=function(e,t,r){return void 0===e&&(e=.001),void 0===t&&(t=.95),void 0===r&&(r=null),new tA(e,t,r)},OptimizerConstructors.adamax=function(e,t,r,i,n){return void 0===e&&(e=.002),void 0===t&&(t=.9),void 0===r&&(r=.999),void 0===i&&(i=null),void 0===n&&(n=0),new tw(e,t,r,i,n)},OptimizerConstructors.adagrad=function(e,t){return void 0===t&&(t=.1),new tT(e,t)}})(),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate&&setImmediate,function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"}(u||(u={})),/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================