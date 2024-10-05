function cd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cu={exports:{}},Io={},Eu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),dd=Symbol.for("react.portal"),pd=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),wd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),na=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var Nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_u=Object.assign,ju={};function Nn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Nu}Nn.prototype.isReactComponent={};Nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pu(){}Pu.prototype=Nn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Nu}var Zi=Ki.prototype=new Pu;Zi.constructor=Ki;_u(Zi,Nn.prototype);Zi.isPureReactComponent=!0;var ra=Array.isArray,zu=Object.prototype.hasOwnProperty,Ji={current:null},Tu={key:!0,ref:!0,__self:!0,__source:!0};function Lu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)zu.call(t,r)&&!Tu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:wr,type:e,key:l,ref:i,props:o,_owner:Ji.current}}function Cd(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function Ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ed(""+e.key):t.toString(36)}function Xr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wr:case dd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Cl(i,0):r,ra(o)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),Xr(o,t,n,"",function(c){return c})):o!=null&&(qi(o)&&(o=Cd(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(oa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ra(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Cl(l,s);i+=Xr(l,t,n,a,o)}else if(a=kd(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Cl(l,s++),i+=Xr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pr(e,t,n){if(e==null)return e;var r=[],o=0;return Xr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Kr={transition:null},_d={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:Ji};function Ru(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Pr,forEach:function(e,t,n){Pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pr(e,function(){t++}),t},toArray:function(e){return Pr(e,function(t){return t})||[]},only:function(e){if(!qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Nn;R.Fragment=pd;R.Profiler=hd;R.PureComponent=Ki;R.StrictMode=md;R.Suspense=xd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d;R.act=Ru;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_u({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ji.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)zu.call(t,a)&&!Tu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:wr,type:e.type,key:o,ref:l,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gd,_context:e},e.Consumer=e};R.createElement=Lu;R.createFactory=function(e){var t=Lu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:vd,render:e}};R.isValidElement=qi;R.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Nd}};R.memo=function(e,t){return{$$typeof:wd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};R.unstable_act=Ru;R.useCallback=function(e,t){return ve.current.useCallback(e,t)};R.useContext=function(e){return ve.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};R.useEffect=function(e,t){return ve.current.useEffect(e,t)};R.useId=function(){return ve.current.useId()};R.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ve.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};R.useRef=function(e){return ve.current.useRef(e)};R.useState=function(e){return ve.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ve.current.useTransition()};R.version="18.3.1";Eu.exports=R;var D=Eu.exports;const jd=fd(D),la=cd({__proto__:null,default:jd},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=D,zd=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,Rd=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ld.call(t,r)&&!Od.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:zd,type:e,key:l,ref:i,props:o,_owner:Rd.current}}Io.Fragment=Td;Io.jsx=Ou;Io.jsxs=Ou;Cu.exports=Io;var p=Cu.exports,$u={exports:{}},Le={},Iu={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var L=j.length;j.push(T);e:for(;0<L;){var Z=L-1>>>1,ne=j[Z];if(0<o(ne,T))j[Z]=T,j[L]=ne,L=Z;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],L=j.pop();if(L!==T){j[0]=L;e:for(var Z=0,ne=j.length,_r=ne>>>1;Z<_r;){var $t=2*(Z+1)-1,kl=j[$t],It=$t+1,jr=j[It];if(0>o(kl,L))It<ne&&0>o(jr,kl)?(j[Z]=jr,j[It]=L,Z=It):(j[Z]=kl,j[$t]=L,Z=$t);else if(It<ne&&0>o(jr,L))j[Z]=jr,j[It]=L,Z=It;else break e}}return T}function o(j,T){var L=j.sortIndex-T.sortIndex;return L!==0?L:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],h=1,m=null,g=3,w=!1,x=!1,y=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(j){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=j)r(c),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(c)}}function v(j){if(y=!1,d(j),!x)if(n(a)!==null)x=!0,wl(E);else{var T=n(c);T!==null&&Sl(v,T.startTime-j)}}function E(j,T){x=!1,y&&(y=!1,f(P),P=-1),w=!0;var L=g;try{for(d(T),m=n(a);m!==null&&(!(m.expirationTime>T)||j&&!Ue());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,g=m.priorityLevel;var ne=Z(m.expirationTime<=T);T=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(T)}else r(a);m=n(a)}if(m!==null)var _r=!0;else{var $t=n(c);$t!==null&&Sl(v,$t.startTime-T),_r=!1}return _r}finally{m=null,g=L,w=!1}}var N=!1,C=null,P=-1,K=5,O=-1;function Ue(){return!(e.unstable_now()-O<K)}function zn(){if(C!==null){var j=e.unstable_now();O=j;var T=!0;try{T=C(!0,j)}finally{T?Tn():(N=!1,C=null)}}else N=!1}var Tn;if(typeof u=="function")Tn=function(){u(zn)};else if(typeof MessageChannel<"u"){var ta=new MessageChannel,ud=ta.port2;ta.port1.onmessage=zn,Tn=function(){ud.postMessage(null)}}else Tn=function(){z(zn,0)};function wl(j){C=j,N||(N=!0,Tn())}function Sl(j,T){P=z(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,wl(E))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var L=g;g=T;try{return j()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=g;g=j;try{return T()}finally{g=L}},e.unstable_scheduleCallback=function(j,T,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,j){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,j={id:h++,callback:T,priorityLevel:j,startTime:L,expirationTime:ne,sortIndex:-1},L>Z?(j.sortIndex=L,t(c,j),n(a)===null&&j===n(c)&&(y?(f(P),P=-1):y=!0,Sl(v,L-Z))):(j.sortIndex=ne,t(a,j),x||w||(x=!0,wl(E))),j},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(j){var T=g;return function(){var L=g;g=T;try{return j.apply(this,arguments)}finally{g=L}}}})(Mu);Iu.exports=Mu;var $d=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=D,Te=$d;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Du=new Set,bn={};function Xt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(bn[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,Md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},sa={};function Dd(e){return Jl.call(sa,e)?!0:Jl.call(ia,e)?!1:Md.test(e)?sa[e]=!0:(ia[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bi=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bi,es);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bi,es);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bi,es);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,o,r)&&(n=null),r||o===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),Fu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),os=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),aa=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=aa&&e[aa]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,El;function Vn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Nl=!1;function _l(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function Vd(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Jt:return"Portal";case ql:return"Profiler";case ns:return"StrictMode";case bl:return"Suspense";case ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case Fu:return(e._context.displayName||"Context")+".Provider";case rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case os:return t=e.displayName||null,t!==null?t:ti(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return ti(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ti(t);case 8:return t===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e){var t=Uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=Bd(e))}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wu(e,t){t=t.checked,t!=null&&ts(e,"checked",t,!1)}function ri(e,t){Wu(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Un(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Hu(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function Yu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function Xu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Hd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,fn=null,dn=null;function pa(e){if(e=Cr(e)){if(typeof ci!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Vo(t),ci(e.stateNode,e.type,t))}}function Ku(e){fn?dn?dn.push(e):dn=[e]:fn=e}function Zu(){if(fn){var e=fn,t=dn;if(dn=fn=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function Ju(e,t){return e(t)}function qu(){}var jl=!1;function bu(e,t,n){if(jl)return e(t,n);jl=!0;try{return Ju(e,t,n)}finally{jl=!1,(fn!==null||dn!==null)&&(qu(),Zu())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var fi=!1;if(ut)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{fi=!1}function Qd(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Qn=!1,co=null,fo=!1,di=null,Gd={onError:function(e){Qn=!0,co=e}};function Yd(e,t,n,r,o,l,i,s,a){Qn=!1,co=null,Qd.apply(Gd,arguments)}function Xd(e,t,n,r,o,l,i,s,a){if(Yd.apply(this,arguments),Qn){if(Qn){var c=co;Qn=!1,co=null}else throw Error(S(198));fo||(fo=!0,di=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ec(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ma(e){if(Kt(e)!==e)throw Error(S(188))}function Kd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ma(o),e;if(l===r)return ma(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function tc(e){return e=Kd(e),e!==null?nc(e):null}function nc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nc(e);if(t!==null)return t;e=e.sibling}return null}var rc=Te.unstable_scheduleCallback,ha=Te.unstable_cancelCallback,Zd=Te.unstable_shouldYield,Jd=Te.unstable_requestPaint,J=Te.unstable_now,qd=Te.unstable_getCurrentPriorityLevel,is=Te.unstable_ImmediatePriority,oc=Te.unstable_UserBlockingPriority,po=Te.unstable_NormalPriority,bd=Te.unstable_LowPriority,lc=Te.unstable_IdlePriority,Mo=null,et=null;function e0(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var Rr=64,Or=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Bn(s):(l&=i,l!==0&&(r=Bn(l)))}else i=n&~o,i!==0?r=Bn(i):l!==0&&(r=Bn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),o=1<<n,r|=e[n],t&=~o;return r}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ge(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=o0(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ic(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function i0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ge(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ac,as,uc,cc,fc,mi=!1,$r=[],St=null,kt=null,Ct=null,nr=new Map,rr=new Map,yt=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function On(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Cr(t),t!==null&&as(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function a0(e,t,n,r,o){switch(t){case"focusin":return St=On(St,e,t,n,r,o),!0;case"dragenter":return kt=On(kt,e,t,n,r,o),!0;case"mouseover":return Ct=On(Ct,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,On(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,On(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function dc(e){var t=Ft(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=ec(n),t!==null){e.blockedOn=t,fc(e.priority,function(){uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ui=r,n.target.dispatchEvent(r),ui=null}else return t=Cr(n),t!==null&&as(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){Zr(e)&&n.delete(t)}function u0(){mi=!1,St!==null&&Zr(St)&&(St=null),kt!==null&&Zr(kt)&&(kt=null),Ct!==null&&Zr(Ct)&&(Ct=null),nr.forEach(ya),rr.forEach(ya)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,u0)))}function or(e){function t(o){return $n(o,e)}if(0<$r.length){$n($r[0],e);for(var n=1;n<$r.length;n++){var r=$r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&$n(St,e),kt!==null&&$n(kt,e),Ct!==null&&$n(Ct,e),nr.forEach(t),rr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)dc(n),n.blockedOn===null&&yt.shift()}var pn=pt.ReactCurrentBatchConfig,ho=!0;function c0(e,t,n,r){var o=F,l=pn.transition;pn.transition=null;try{F=1,us(e,t,n,r)}finally{F=o,pn.transition=l}}function f0(e,t,n,r){var o=F,l=pn.transition;pn.transition=null;try{F=4,us(e,t,n,r)}finally{F=o,pn.transition=l}}function us(e,t,n,r){if(ho){var o=hi(e,t,n,r);if(o===null)Fl(e,t,r,go,n),ga(e,r);else if(a0(o,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<s0.indexOf(e)){for(;o!==null;){var l=Cr(o);if(l!==null&&ac(l),l=hi(e,t,n,r),l===null&&Fl(e,t,r,go,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var go=null;function hi(e,t,n,r){if(go=null,e=ls(r),e=Ft(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ec(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qd()){case is:return 1;case oc:return 4;case po:case bd:return 16;case lc:return 536870912;default:return 16}default:return 16}}var xt=null,cs=null,Jr=null;function mc(){if(Jr)return Jr;var e,t=cs,n=t.length,r,o="value"in xt?xt.value:xt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Jr=o.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function va(){return!1}function Re(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ir:va,this.isPropagationStopped=va,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=Re(_n),kr=Y({},_n,{view:0,detail:0}),d0=Re(kr),zl,Tl,In,Do=Y({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(zl=e.screenX-In.screenX,Tl=e.screenY-In.screenY):Tl=zl=0,In=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),xa=Re(Do),p0=Y({},Do,{dataTransfer:0}),m0=Re(p0),h0=Y({},kr,{relatedTarget:0}),Ll=Re(h0),g0=Y({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Re(g0),v0=Y({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=Re(v0),w0=Y({},_n,{data:0}),wa=Re(w0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C0[e])?!!t[e]:!1}function ds(){return E0}var N0=Y({},kr,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=Re(N0),j0=Y({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sa=Re(j0),P0=Y({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),z0=Re(P0),T0=Y({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=Re(T0),R0=Y({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=Re(R0),$0=[9,13,27,32],ps=ut&&"CompositionEvent"in window,Gn=null;ut&&"documentMode"in document&&(Gn=document.documentMode);var I0=ut&&"TextEvent"in window&&!Gn,hc=ut&&(!ps||Gn&&8<Gn&&11>=Gn),ka=" ",Ca=!1;function gc(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function M0(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(Ca=!0,ka);case"textInput":return e=t.data,e===ka&&Ca?null:e;default:return null}}function D0(e,t){if(bt)return e==="compositionend"||!ps&&gc(e,t)?(e=mc(),Jr=cs=xt=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function vc(e,t,n,r){Ku(r),t=yo(t,"onChange"),0<t.length&&(n=new fs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,lr=null;function A0(e){zc(e,0)}function Fo(e){var t=nn(e);if(Bu(t))return e}function V0(e,t){if(e==="change")return t}var xc=!1;if(ut){var Rl;if(ut){var Ol="oninput"in document;if(!Ol){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),Ol=typeof Na.oninput=="function"}Rl=Ol}else Rl=!1;xc=Rl&&(!document.documentMode||9<document.documentMode)}function _a(){Yn&&(Yn.detachEvent("onpropertychange",wc),lr=Yn=null)}function wc(e){if(e.propertyName==="value"&&Fo(lr)){var t=[];vc(t,lr,e,ls(e)),bu(A0,t)}}function U0(e,t,n){e==="focusin"?(_a(),Yn=t,lr=n,Yn.attachEvent("onpropertychange",wc)):e==="focusout"&&_a()}function B0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(lr)}function W0(e,t){if(e==="click")return Fo(t)}function H0(e,t){if(e==="input"||e==="change")return Fo(t)}function Q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Q0;function ir(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Jl.call(t,o)||!Xe(e[o],t[o]))return!1}return!0}function ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ja(n)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function G0(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sc(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Pa(n,l);var i=Pa(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y0=ut&&"documentMode"in document&&11>=document.documentMode,en=null,gi=null,Xn=null,yi=!1;function za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yi||en==null||en!==uo(r)||(r=en,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&ir(Xn,r)||(Xn=r,r=yo(gi,"onSelect"),0<r.length&&(t=new fs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},$l={},Cc={};ut&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ao(e){if($l[e])return $l[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cc)return $l[e]=t[n];return e}var Ec=Ao("animationend"),Nc=Ao("animationiteration"),_c=Ao("animationstart"),jc=Ao("transitionend"),Pc=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Pc.set(e,t),Xt(t,[e])}for(var Il=0;Il<Ta.length;Il++){var Ml=Ta[Il],X0=Ml.toLowerCase(),K0=Ml[0].toUpperCase()+Ml.slice(1);Lt(X0,"on"+K0)}Lt(Ec,"onAnimationEnd");Lt(Nc,"onAnimationIteration");Lt(_c,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(jc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;La(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;La(o,s,c),l=a}}}if(fo)throw e=di,fo=!1,di=null,e}function B(e,t){var n=t[ki];n===void 0&&(n=t[ki]=new Set);var r=e+"__bubble";n.has(r)||(Tc(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Tc(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Dr]){e[Dr]=!0,Du.forEach(function(n){n!=="selectionchange"&&(Z0.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,Dl("selectionchange",!1,t))}}function Tc(e,t,n,r){switch(pc(t)){case 1:var o=c0;break;case 4:o=f0;break;default:o=us}n=o.bind(null,t,n,e),o=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Ft(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}bu(function(){var c=l,h=ls(n),m=[];e:{var g=Pc.get(e);if(g!==void 0){var w=fs,x=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":w=_0;break;case"focusin":x="focus",w=Ll;break;case"focusout":x="blur",w=Ll;break;case"beforeblur":case"afterblur":w=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=z0;break;case Ec:case Nc:case _c:w=y0;break;case jc:w=L0;break;case"scroll":w=d0;break;case"wheel":w=O0;break;case"copy":case"cut":case"paste":w=x0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Sa}var y=(t&4)!==0,z=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=tr(u,f),v!=null&&y.push(ar(u,v,d)))),z)break;u=u.return}0<y.length&&(g=new w(g,x,null,n,h),m.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==ui&&(x=n.relatedTarget||n.fromElement)&&(Ft(x)||x[ct]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Ft(x):null,x!==null&&(z=Kt(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(y=xa,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Sa,v="onPointerLeave",f="onPointerEnter",u="pointer"),z=w==null?g:nn(w),d=x==null?g:nn(x),g=new y(v,u+"leave",w,n,h),g.target=z,g.relatedTarget=d,v=null,Ft(h)===c&&(y=new y(f,u+"enter",x,n,h),y.target=d,y.relatedTarget=z,v=y),z=v,w&&x)t:{for(y=w,f=x,u=0,d=y;d;d=Zt(d))u++;for(d=0,v=f;v;v=Zt(v))d++;for(;0<u-d;)y=Zt(y),u--;for(;0<d-u;)f=Zt(f),d--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Zt(y),f=Zt(f)}y=null}else y=null;w!==null&&Ra(m,g,w,y,!1),x!==null&&z!==null&&Ra(m,z,x,y,!0)}}e:{if(g=c?nn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var E=V0;else if(Ea(g))if(xc)E=H0;else{E=B0;var N=U0}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=W0);if(E&&(E=E(e,c))){vc(m,E,n,h);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&oi(g,"number",g.value)}switch(N=c?nn(c):window,e){case"focusin":(Ea(N)||N.contentEditable==="true")&&(en=N,gi=c,Xn=null);break;case"focusout":Xn=gi=en=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,za(m,n,h);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":za(m,n,h)}var C;if(ps)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else bt?gc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hc&&n.locale!=="ko"&&(bt||P!=="onCompositionStart"?P==="onCompositionEnd"&&bt&&(C=mc()):(xt=h,cs="value"in xt?xt.value:xt.textContent,bt=!0)),N=yo(c,P),0<N.length&&(P=new wa(P,e,null,n,h),m.push({event:P,listeners:N}),C?P.data=C:(C=yc(n),C!==null&&(P.data=C)))),(C=I0?M0(e,n):D0(e,n))&&(c=yo(c,"onBeforeInput"),0<c.length&&(h=new wa("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=C))}zc(m,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=tr(e,n),l!=null&&r.unshift(ar(e,l,o)),l=tr(e,t),l!=null&&r.push(ar(e,l,o))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=tr(n,l),a!=null&&i.unshift(ar(n,a,s))):o||(a=tr(n,l),a!=null&&i.push(ar(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var J0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Oa(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(q0,"")}function Fr(e,t,n){if(t=Oa(t),Oa(e)!==t&&n)throw Error(S(425))}function vo(){}var vi=null,xi=null;function wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,$a=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof $a<"u"?function(e){return $a.resolve(null).then(e).catch(tp)}:Si;function tp(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);or(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),be="__reactFiber$"+jn,ur="__reactProps$"+jn,ct="__reactContainer$"+jn,ki="__reactEvents$"+jn,np="__reactListeners$"+jn,rp="__reactHandles$"+jn;function Ft(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ia(e);e!==null;){if(n=e[be])return n;e=Ia(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[be]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vo(e){return e[ur]||null}var Ci=[],rn=-1;function Rt(e){return{current:e}}function W(e){0>rn||(e.current=Ci[rn],Ci[rn]=null,rn--)}function U(e,t){rn++,Ci[rn]=e.current,e.current=t}var Tt={},he=Rt(Tt),ke=Rt(!1),Wt=Tt;function vn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function xo(){W(ke),W(he)}function Ma(e,t,n){if(he.current!==Tt)throw Error(S(168));U(he,t),U(ke,n)}function Lc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Ud(e)||"Unknown",o));return Y({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Wt=he.current,U(he,e),U(ke,ke.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Lc(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,W(ke),W(he),U(he,e)):W(ke),U(ke,n)}var lt=null,Uo=!1,Vl=!1;function Rc(e){lt===null?lt=[e]:lt.push(e)}function op(e){Uo=!0,Rc(e)}function Ot(){if(!Vl&&lt!==null){Vl=!0;var e=0,t=F;try{var n=lt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Uo=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),rc(is,Ot),o}finally{F=t,Vl=!1}}return null}var on=[],ln=0,So=null,ko=0,$e=[],Ie=0,Ht=null,it=1,st="";function Mt(e,t){on[ln++]=ko,on[ln++]=So,So=e,ko=t}function Oc(e,t,n){$e[Ie++]=it,$e[Ie++]=st,$e[Ie++]=Ht,Ht=e;var r=it;e=st;var o=32-Ge(r)-1;r&=~(1<<o),n+=1;var l=32-Ge(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,it=1<<32-Ge(t)+o|n<<o|r,st=l+e}else it=1<<l|n<<o|r,st=e}function hs(e){e.return!==null&&(Mt(e,1),Oc(e,1,0))}function gs(e){for(;e===So;)So=on[--ln],on[ln]=null,ko=on[--ln],on[ln]=null;for(;e===Ht;)Ht=$e[--Ie],$e[Ie]=null,st=$e[--Ie],$e[Ie]=null,it=$e[--Ie],$e[Ie]=null}var Pe=null,je=null,H=!1,Qe=null;function $c(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,je=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,je=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if(H){var t=je;if(t){var n=t;if(!Fa(e,t)){if(Ei(e))throw Error(S(418));t=Et(n.nextSibling);var r=Pe;t&&Fa(e,t)?$c(r,n):(e.flags=e.flags&-4097|2,H=!1,Pe=e)}}else{if(Ei(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Pe=e}}}function Aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Ar(e){if(e!==Pe)return!1;if(!H)return Aa(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wi(e.type,e.memoizedProps)),t&&(t=je)){if(Ei(e))throw Ic(),Error(S(418));for(;t;)$c(e,t),t=Et(t.nextSibling)}if(Aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Pe?Et(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=je;e;)e=Et(e.nextSibling)}function xn(){je=Pe=null,H=!1}function ys(e){Qe===null?Qe=[e]:Qe.push(e)}var lp=pt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Va(e){var t=e._init;return t(e._payload)}function Mc(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Pt(f,u),f.index=0,f.sibling=null,f}function l(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,v){return u===null||u.tag!==6?(u=Yl(d,f.mode,v),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,v){var E=d.type;return E===qt?h(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Va(E)===u.type)?(v=o(u,d.props),v.ref=Mn(f,u,d),v.return=f,v):(v=lo(d.type,d.key,d.props,null,f.mode,v),v.ref=Mn(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Xl(d,f.mode,v),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,v,E){return u===null||u.tag!==7?(u=Bt(d,f.mode,v,E),u.return=f,u):(u=o(u,d),u.return=f,u)}function m(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Yl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zr:return d=lo(u.type,u.key,u.props,null,f.mode,d),d.ref=Mn(f,null,u),d.return=f,d;case Jt:return u=Xl(u,f.mode,d),u.return=f,u;case ht:var v=u._init;return m(f,v(u._payload),d)}if(Un(u)||Ln(u))return u=Bt(u,f.mode,d,null),u.return=f,u;Vr(f,u)}return null}function g(f,u,d,v){var E=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:s(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:return d.key===E?a(f,u,d,v):null;case Jt:return d.key===E?c(f,u,d,v):null;case ht:return E=d._init,g(f,u,E(d._payload),v)}if(Un(d)||Ln(d))return E!==null?null:h(f,u,d,v,null);Vr(f,d)}return null}function w(f,u,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,s(u,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zr:return f=f.get(v.key===null?d:v.key)||null,a(u,f,v,E);case Jt:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,E);case ht:var N=v._init;return w(f,u,d,N(v._payload),E)}if(Un(v)||Ln(v))return f=f.get(d)||null,h(u,f,v,E,null);Vr(u,v)}return null}function x(f,u,d,v){for(var E=null,N=null,C=u,P=u=0,K=null;C!==null&&P<d.length;P++){C.index>P?(K=C,C=null):K=C.sibling;var O=g(f,C,d[P],v);if(O===null){C===null&&(C=K);break}e&&C&&O.alternate===null&&t(f,C),u=l(O,u,P),N===null?E=O:N.sibling=O,N=O,C=K}if(P===d.length)return n(f,C),H&&Mt(f,P),E;if(C===null){for(;P<d.length;P++)C=m(f,d[P],v),C!==null&&(u=l(C,u,P),N===null?E=C:N.sibling=C,N=C);return H&&Mt(f,P),E}for(C=r(f,C);P<d.length;P++)K=w(C,f,P,d[P],v),K!==null&&(e&&K.alternate!==null&&C.delete(K.key===null?P:K.key),u=l(K,u,P),N===null?E=K:N.sibling=K,N=K);return e&&C.forEach(function(Ue){return t(f,Ue)}),H&&Mt(f,P),E}function y(f,u,d,v){var E=Ln(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var N=E=null,C=u,P=u=0,K=null,O=d.next();C!==null&&!O.done;P++,O=d.next()){C.index>P?(K=C,C=null):K=C.sibling;var Ue=g(f,C,O.value,v);if(Ue===null){C===null&&(C=K);break}e&&C&&Ue.alternate===null&&t(f,C),u=l(Ue,u,P),N===null?E=Ue:N.sibling=Ue,N=Ue,C=K}if(O.done)return n(f,C),H&&Mt(f,P),E;if(C===null){for(;!O.done;P++,O=d.next())O=m(f,O.value,v),O!==null&&(u=l(O,u,P),N===null?E=O:N.sibling=O,N=O);return H&&Mt(f,P),E}for(C=r(f,C);!O.done;P++,O=d.next())O=w(C,f,P,O.value,v),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),u=l(O,u,P),N===null?E=O:N.sibling=O,N=O);return e&&C.forEach(function(zn){return t(f,zn)}),H&&Mt(f,P),E}function z(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case zr:e:{for(var E=d.key,N=u;N!==null;){if(N.key===E){if(E=d.type,E===qt){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Va(E)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=Mn(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===qt?(u=Bt(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=lo(d.type,d.key,d.props,null,f.mode,v),v.ref=Mn(f,u,d),v.return=f,f=v)}return i(f);case Jt:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Xl(d,f.mode,v),u.return=f,f=u}return i(f);case ht:return N=d._init,z(f,u,N(d._payload),v)}if(Un(d))return x(f,u,d,v);if(Ln(d))return y(f,u,d,v);Vr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Yl(d,f.mode,v),u.return=f,f=u),i(f)):n(f,u)}return z}var wn=Mc(!0),Dc=Mc(!1),Co=Rt(null),Eo=null,sn=null,vs=null;function xs(){vs=sn=Eo=null}function ws(e){var t=Co.current;W(Co),e._currentValue=t}function _i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){Eo=e,vs=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(Eo===null)throw Error(S(308));sn=e,Eo.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var At=null;function Ss(e){At===null?At=[e]:At.push(e)}function Fc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ss(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Ss(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,r){var o=e.updateQueue;gt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,h=c=a=null,s=l;do{var g=s.lane,w=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(g=t,w=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(w,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,g=typeof x=="function"?x.call(w,m,g):x,g==null)break e;m=Y({},m,g);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,a=m):h=h.next=w,i|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Gt|=i,e.lanes=i,e.memoizedState=m}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Er={},tt=Rt(Er),cr=Rt(Er),fr=Rt(Er);function Vt(e){if(e===Er)throw Error(S(174));return e}function Cs(e,t){switch(U(fr,t),U(cr,e),U(tt,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}W(tt),U(tt,t)}function Sn(){W(tt),W(cr),W(fr)}function Vc(e){Vt(fr.current);var t=Vt(tt.current),n=ii(t,e.type);t!==n&&(U(cr,e),U(tt,n))}function Es(e){cr.current===e&&(W(tt),W(cr))}var Q=Rt(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Ns(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var eo=pt.ReactCurrentDispatcher,Bl=pt.ReactCurrentBatchConfig,Qt=0,G=null,ee=null,oe=null,jo=!1,Kn=!1,dr=0,ip=0;function fe(){throw Error(S(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function js(e,t,n,r,o,l){if(Qt=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?cp:fp,e=n(r,o),Kn){l=0;do{if(Kn=!1,dr=0,25<=l)throw Error(S(301));l+=1,oe=ee=null,t.updateQueue=null,eo.current=dp,e=n(r,o)}while(Kn)}if(eo.current=Po,t=ee!==null&&ee.next!==null,Qt=0,oe=ee=G=null,jo=!1,t)throw Error(S(300));return e}function Ps(){var e=dr!==0;return dr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?G.memoizedState=oe=e:oe=oe.next=e,oe}function Ae(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=oe===null?G.memoizedState:oe.next;if(t!==null)oe=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},oe===null?G.memoizedState=oe=e:oe=oe.next=e}return oe}function pr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var h=c.lane;if((Qt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,G.lanes|=h,Gt|=h}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,Xe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,Gt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Xe(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Uc(){}function Bc(e,t){var n=G,r=Ae(),o=t(),l=!Xe(r.memoizedState,o);if(l&&(r.memoizedState=o,Se=!0),r=r.queue,zs(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,mr(9,Hc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(S(349));Qt&30||Wc(n,t,o)}return o}function Wc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,r){t.value=n,t.getSnapshot=r,Gc(t)&&Yc(e)}function Qc(e,t,n){return n(function(){Gc(t)&&Yc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Yc(e){var t=ft(e,1);t!==null&&Ye(t,e,1,-1)}function Wa(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,G,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xc(){return Ae().memoizedState}function to(e,t,n,r){var o=Ze();G.flags|=e,o.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var o=Ae();r=r===void 0?null:r;var l=void 0;if(ee!==null){var i=ee.memoizedState;if(l=i.destroy,r!==null&&_s(r,i.deps)){o.memoizedState=mr(t,n,l,r);return}}G.flags|=e,o.memoizedState=mr(1|t,n,l,r)}function Ha(e,t){return to(8390656,8,e,t)}function zs(e,t){return Bo(2048,8,e,t)}function Kc(e,t){return Bo(4,2,e,t)}function Zc(e,t){return Bo(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,Jc.bind(null,t,e),n)}function Ts(){}function bc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return Qt&21?(Xe(n,t)||(n=ic(),G.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function sp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{F=n,Bl.transition=r}}function nf(){return Ae().memoizedState}function ap(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))of(t,n);else if(n=Fc(e,t,n,r),n!==null){var o=ye();Ye(n,e,r,o),lf(n,t,r)}}function up(e,t,n){var r=jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))of(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Xe(s,i)){var a=t.interleaved;a===null?(o.next=o,Ss(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Fc(e,t,o,r),n!==null&&(o=ye(),Ye(n,e,r,o),lf(n,t,r))}}function rf(e){var t=e.alternate;return e===G||t!==null&&t===G}function of(e,t){Kn=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var Po={readContext:Fe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},cp={readContext:Fe,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ap.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:Ts,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=sp.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Ze();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Qt&30||Wc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ha(Qc.bind(null,r,l,e),[e]),r.flags|=2048,mr(9,Hc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ze(),t=le.identifierPrefix;if(H){var n=st,r=it;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ip++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fp={readContext:Fe,useCallback:bc,useContext:Fe,useEffect:zs,useImperativeHandle:qc,useInsertionEffect:Kc,useLayoutEffect:Zc,useMemo:ef,useReducer:Wl,useRef:Xc,useState:function(){return Wl(pr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ae();return tf(t,ee.memoizedState,e)},useTransition:function(){var e=Wl(pr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Bc,useId:nf,unstable_isNewReconciler:!1},dp={readContext:Fe,useCallback:bc,useContext:Fe,useEffect:zs,useImperativeHandle:qc,useInsertionEffect:Kc,useLayoutEffect:Zc,useMemo:ef,useReducer:Hl,useRef:Xc,useState:function(){return Hl(pr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ae();return ee===null?t.memoizedState=e:tf(t,ee.memoizedState,e)},useTransition:function(){var e=Hl(pr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Bc,useId:nf,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=jt(e),l=at(r,o);l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ye(t,e,o,r),br(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=jt(e),l=at(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Nt(e,l,o),t!==null&&(Ye(t,e,o,r),br(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=jt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Ye(t,e,r,n),br(t,e,r))}};function Qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(o,l):!0}function sf(e,t,n){var r=!1,o=Tt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(o=Ce(t)?Wt:he.current,r=t.contextTypes,l=(r=r!=null)?vn(e,o):Tt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Pi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ks(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Fe(l):(l=Ce(t)?Wt:he.current,o.context=vn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ji(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wo.enqueueReplaceState(o,o.state,null),No(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Vd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,Ai=r),zi(e,t)},n}function uf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){zi(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jp.bind(null,e,t,n),t.then(e,e))}function Xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ka(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var mp=pt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Dc(t,null,n,r):wn(t,e.child,n,r)}function Za(e,t,n,r,o){n=n.render;var l=t.ref;return mn(t,o),r=js(e,t,n,r,l,o),n=Ps(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(H&&n&&hs(t),t.flags|=1,ge(e,t,r,o),t.child)}function Ja(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Fs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cf(e,t,l,r,o)):(e=lo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(i,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Pt(l,r),e.ref=t.ref,e.return=t,t.child=e}function cf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ir(l,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,dt(e,t,o)}return Ti(e,t,n,r,o)}function ff(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(un,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(un,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(un,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(un,_e),_e|=r;return ge(e,t,o,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,o){var l=Ce(n)?Wt:he.current;return l=vn(t,l),mn(t,o),n=js(e,t,n,r,l,o),r=Ps(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(H&&r&&hs(t),t.flags|=1,ge(e,t,n,o),t.child)}function qa(e,t,n,r,o){if(Ce(n)){var l=!0;wo(t)}else l=!1;if(mn(t,o),t.stateNode===null)no(e,t),sf(t,n,r),Pi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Ce(n)?Wt:he.current,c=vn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ga(t,i,r,c),gt=!1;var g=t.memoizedState;i.state=g,No(t,r,i,o),a=t.memoizedState,s!==r||g!==a||ke.current||gt?(typeof h=="function"&&(ji(t,n,h,r),a=t.memoizedState),(s=gt||Qa(t,n,s,r,g,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ac(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),i.props=c,m=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=Ce(n)?Wt:he.current,a=vn(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||g!==a)&&Ga(t,i,r,a),gt=!1,g=t.memoizedState,i.state=g,No(t,r,i,o);var x=t.memoizedState;s!==m||g!==x||ke.current||gt?(typeof w=="function"&&(ji(t,n,w,r),x=t.memoizedState),(c=gt||Qa(t,n,c,r,g,x,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,l,o)}function Li(e,t,n,r,o,l){df(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Da(t,n,!1),dt(e,t,l);r=t.stateNode,mp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=wn(t,e.child,null,l),t.child=wn(t,null,s,l)):ge(e,t,s,l),t.memoizedState=r.state,o&&Da(t,n,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Cs(e,t.containerInfo)}function ba(e,t,n,r,o){return xn(),ys(o),t.flags|=256,ge(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function mf(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Q,o&1),e===null)return Ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Go(i,r,0,null),e=Bt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Oi(n),t.memoizedState=Ri,e):Ls(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return hp(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Pt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Pt(s,l):(l=Bt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return l=e.child,e=l.sibling,r=Pt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ls(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&ys(r),wn(t,e.child,null,n),e=Ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(S(422))),Ur(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Go({mode:"visible",children:r.children},o,0,null),l=Bt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&wn(t,e.child,null,i),t.child.memoizedState=Oi(i),t.memoizedState=Ri,l);if(!(t.mode&1))return Ur(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=Ql(l,r,void 0),Ur(e,t,i,r)}if(s=(i&e.childLanes)!==0,Se||s){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ft(e,o),Ye(r,e,o,-1))}return Ds(),r=Ql(Error(S(421))),Ur(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,je=Et(o.nextSibling),Pe=t,H=!0,Qe=null,e!==null&&($e[Ie++]=it,$e[Ie++]=st,$e[Ie++]=Ht,it=e.id,st=e.overflow,Ht=t),t=Ls(t,r.children),t.flags|=4096,t)}function eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_i(e.return,t,n)}function Gl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function hf(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,n,t);else if(e.tag===19)eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Gl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Gl(t,!0,n,null,l);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gp(e,t,n){switch(t.tag){case 3:pf(t),xn();break;case 5:Vc(t);break;case 1:Ce(t.type)&&wo(t);break;case 4:Cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Co,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?mf(e,t,n):(U(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,ff(e,t,n)}return dt(e,t,n)}var gf,$i,yf,vf;gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$i=function(){};yf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(tt.current);var l=null;switch(n){case"input":o=ni(e,o),r=ni(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=li(e,o),r=li(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vo)}si(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yp(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ce(t.type)&&xo(),de(t),null;case 3:return r=t.stateNode,Sn(),W(ke),W(he),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Bi(Qe),Qe=null))),$i(e,t),de(t),null;case 5:Es(t);var o=Vt(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)yf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Vt(tt.current),Ar(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[be]=t,r[ur]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ua(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":fa(r,l),B("invalid",r)}si(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Fr(r.textContent,s,e),o=["children",""+s]):bn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Tr(r),ca(r,l,!0);break;case"textarea":Tr(r),da(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[be]=t,e[ur]=r,gf(e,t,!1,!1),t.stateNode=e;e:{switch(i=ai(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ua(e,r),o=ni(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":fa(e,r),o=li(e,r),B("invalid",e);break;default:o=r}si(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Xu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&er(e,a):typeof a=="number"&&er(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(bn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&ts(e,l,a,i))}switch(n){case"input":Tr(e),ca(e,r,!1);break;case"textarea":Tr(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cn(e,!!r.multiple,l,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Vt(fr.current),Vt(tt.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return de(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&je!==null&&t.mode&1&&!(t.flags&128))Ic(),xn(),t.flags|=98560,l=!1;else if(l=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[be]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else Qe!==null&&(Bi(Qe),Qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Ds())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Sn(),$i(e,t),e===null&&sr(t.stateNode.containerInfo),de(t),null;case 10:return ws(t.type._context),de(t),null;case 17:return Ce(t.type)&&xo(),de(t),null;case 19:if(W(Q),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Dn(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=_o(e),i!==null){for(t.flags|=128,Dn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>Cn&&(t.flags|=128,r=!0,Dn(l,!1),t.lanes=4194304)}else{if(!r)if(e=_o(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!H)return de(t),null}else 2*J()-l.renderingStartTime>Cn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Ms(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vp(e,t){switch(gs(t),t.tag){case 1:return Ce(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(),W(ke),W(he),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Es(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return Sn(),null;case 10:return ws(t.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var Br=!1,me=!1,xp=typeof WeakSet=="function"?WeakSet:Set,_=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ii(e,t,n){try{n()}catch(r){X(e,t,r)}}var tu=!1;function wp(e,t){if(vi=ho,e=kc(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===o&&(s=i),g===l&&++h===r&&(a=i),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},ho=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,z=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:We(t.type,y),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=tu,tu=!1,x}function Zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ii(t,n,l)}o=o.next}while(o!==r)}}function Ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[ur],delete t[ki],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vo));else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}var se=null,He=!1;function mt(e,t,n){for(n=n.child;n!==null;)Sf(e,t,n),n=n.sibling}function Sf(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:me||an(n,t);case 6:var r=se,o=He;se=null,mt(e,t,n),se=r,He=o,se!==null&&(He?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(He?(e=se,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),or(e)):Al(se,n.stateNode));break;case 4:r=se,o=He,se=n.stateNode.containerInfo,He=!0,mt(e,t,n),se=r,He=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ii(n,t,i),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!me&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,mt(e,t,n),me=r):mt(e,t,n);break;default:mt(e,t,n)}}function ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xp),t.forEach(function(r){var o=zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,He=!1;break e;case 3:se=s.stateNode.containerInfo,He=!0;break e;case 4:se=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(se===null)throw Error(S(160));Sf(l,i,o),se=null,He=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kf(t,e),t=t.sibling}function kf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{Zn(3,e,e.return),Ho(3,e)}catch(y){X(e,e.return,y)}try{Zn(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(y){X(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Wu(o,l),ai(s,i);var c=ai(s,l);for(i=0;i<a.length;i+=2){var h=a[i],m=a[i+1];h==="style"?Xu(o,m):h==="dangerouslySetInnerHTML"?Gu(o,m):h==="children"?er(o,m):ts(o,h,m,c)}switch(s){case"input":ri(o,l);break;case"textarea":Hu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?cn(o,!!l.multiple,w,!1):g!==!!l.multiple&&(l.defaultValue!=null?cn(o,!!l.multiple,l.defaultValue,!0):cn(o,!!l.multiple,l.multiple?[]:"",!1))}o[ur]=l}catch(y){X(e,e.return,y)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){X(e,e.return,y)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{or(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||($s=J())),r&4&&ru(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Be(t,e),me=c):Be(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(g=_,w=g.child,g.tag){case 0:case 11:case 14:case 15:Zn(4,g,g.return);break;case 1:an(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:an(g,g.return);break;case 22:if(g.memoizedState!==null){lu(m);continue}}w!==null?(w.return=g,_=w):lu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Yu("display",i))}catch(y){X(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){X(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&ru(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=nu(e);Fi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=nu(e);Di(e,s,i);break;default:throw Error(S(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){_=e,Cf(e)}function Cf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Br;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=Br;var c=me;if(Br=i,(me=a)&&!c)for(_=o;_!==null;)i=_,a=i.child,i.tag===22&&i.memoizedState!==null?iu(o):a!==null?(a.return=i,_=a):iu(o);for(;l!==null;)_=l,Cf(l),l=l.sibling;_=o,Br=s,me=c}ou(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):ou(e)}}function ou(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ba(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&or(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&Mi(t)}catch(g){X(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function lu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function iu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ho(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){X(t,o,a)}}var l=t.return;try{Mi(t)}catch(a){X(t,l,a)}break;case 5:var i=t.return;try{Mi(t)}catch(a){X(t,i,a)}}}catch(a){X(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var kp=Math.ceil,zo=pt.ReactCurrentDispatcher,Rs=pt.ReactCurrentOwner,De=pt.ReactCurrentBatchConfig,$=0,le=null,b=null,ue=0,_e=0,un=Rt(0),te=0,hr=null,Gt=0,Qo=0,Os=0,Jn=null,we=null,$s=0,Cn=1/0,ot=null,To=!1,Ai=null,_t=null,Wr=!1,wt=null,Lo=0,qn=0,Vi=null,ro=-1,oo=0;function ye(){return $&6?J():ro!==-1?ro:ro=J()}function jt(e){return e.mode&1?$&2&&ue!==0?ue&-ue:lp.transition!==null?(oo===0&&(oo=ic()),oo):(e=F,e!==0||(e=window.event,e=e===void 0?16:pc(e.type)),e):1}function Ye(e,t,n,r){if(50<qn)throw qn=0,Vi=null,Error(S(185));Sr(e,n,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(Qo|=n),te===4&&vt(e,ue)),Ee(e,r),n===1&&$===0&&!(t.mode&1)&&(Cn=J()+500,Uo&&Ot()))}function Ee(e,t){var n=e.callbackNode;l0(e,t);var r=mo(e,e===le?ue:0);if(r===0)n!==null&&ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ha(n),t===1)e.tag===0?op(su.bind(null,e)):Rc(su.bind(null,e)),ep(function(){!($&6)&&Ot()}),n=null;else{switch(sc(r)){case 1:n=is;break;case 4:n=oc;break;case 16:n=po;break;case 536870912:n=lc;break;default:n=po}n=Lf(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(ro=-1,oo=0,$&6)throw Error(S(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=mo(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=$;$|=2;var l=_f();(le!==e||ue!==t)&&(ot=null,Cn=J()+500,Ut(e,t));do try{Np();break}catch(s){Nf(e,s)}while(!0);xs(),zo.current=l,$=o,b!==null?t=0:(le=null,ue=0,t=te)}if(t!==0){if(t===2&&(o=pi(e),o!==0&&(r=o,t=Ui(e,o))),t===1)throw n=hr,Ut(e,0),vt(e,r),Ee(e,J()),n;if(t===6)vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cp(o)&&(t=Ro(e,r),t===2&&(l=pi(e),l!==0&&(r=l,t=Ui(e,l))),t===1))throw n=hr,Ut(e,0),vt(e,r),Ee(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Dt(e,we,ot);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=$s+500-J(),10<t)){if(mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Si(Dt.bind(null,e,we,ot),t);break}Dt(e,we,ot);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ge(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=Si(Dt.bind(null,e,we,ot),r);break}Dt(e,we,ot);break;case 5:Dt(e,we,ot);break;default:throw Error(S(329))}}}return Ee(e,J()),e.callbackNode===n?Ef.bind(null,e):null}function Ui(e,t){var n=Jn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=we,we=n,t!==null&&Bi(t)),e}function Bi(e){we===null?we=e:we.push.apply(we,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Xe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Os,t&=~Qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if($&6)throw Error(S(327));hn();var t=mo(e,0);if(!(t&1))return Ee(e,J()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=hr,Ut(e,0),vt(e,t),Ee(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,we,ot),Ee(e,J()),null}function Is(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Cn=J()+500,Uo&&Ot())}}function Yt(e){wt!==null&&wt.tag===0&&!($&6)&&hn();var t=$;$|=1;var n=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=n,$=t,!($&6)&&Ot()}}function Ms(){_e=un.current,W(un)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b0(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:Sn(),W(ke),W(he),Ns();break;case 5:Es(r);break;case 4:Sn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:ws(r.type._context);break;case 22:case 23:Ms()}n=n.return}if(le=e,b=e=Pt(e.current,null),ue=_e=t,te=0,hr=null,Os=Qo=Gt=0,we=Jn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}At=null}return e}function Nf(e,t){do{var n=b;try{if(xs(),eo.current=Po,jo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jo=!1}if(Qt=0,oe=ee=G=null,Kn=!1,dr=0,Rs.current=null,n===null||n.return===null){te=1,hr=t,b=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Xa(i);if(w!==null){w.flags&=-257,Ka(w,i,s,l,t),w.mode&1&&Ya(l,c,t),t=w,a=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(a),t.updateQueue=y}else x.add(a);break e}else{if(!(t&1)){Ya(l,c,t),Ds();break e}a=Error(S(426))}}else if(H&&s.mode&1){var z=Xa(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Ka(z,i,s,l,t),ys(kn(a,s));break e}}l=a=kn(a,s),te!==4&&(te=2),Jn===null?Jn=[l]:Jn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=af(l,a,t);Ua(l,f);break e;case 1:s=a;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(_t===null||!_t.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=uf(l,s,t);Ua(l,v);break e}}l=l.return}while(l!==null)}Pf(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function _f(){var e=zo.current;return zo.current=Po,e===null?Po:e}function Ds(){(te===0||te===3||te===2)&&(te=4),le===null||!(Gt&268435455)&&!(Qo&268435455)||vt(le,ue)}function Ro(e,t){var n=$;$|=2;var r=_f();(le!==e||ue!==t)&&(ot=null,Ut(e,t));do try{Ep();break}catch(o){Nf(e,o)}while(!0);if(xs(),$=n,zo.current=r,b!==null)throw Error(S(261));return le=null,ue=0,te}function Ep(){for(;b!==null;)jf(b)}function Np(){for(;b!==null&&!Zd();)jf(b)}function jf(e){var t=Tf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Pf(e):b=t,Rs.current=null}function Pf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vp(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,b=null;return}}else if(n=yp(n,t,_e),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);te===0&&(te=5)}function Dt(e,t,n){var r=F,o=De.transition;try{De.transition=null,F=1,_p(e,t,n,r)}finally{De.transition=o,F=r}return null}function _p(e,t,n,r){do hn();while(wt!==null);if($&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(i0(e,l),e===le&&(b=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wr||(Wr=!0,Lf(po,function(){return hn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=F;F=1;var s=$;$|=4,Rs.current=null,wp(e,n),kf(n,e),G0(xi),ho=!!vi,xi=vi=null,e.current=n,Sp(n),Jd(),$=s,F=i,De.transition=l}else e.current=n;if(Wr&&(Wr=!1,wt=e,Lo=o),l=e.pendingLanes,l===0&&(_t=null),e0(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(To)throw To=!1,e=Ai,Ai=null,e;return Lo&1&&e.tag!==0&&hn(),l=e.pendingLanes,l&1?e===Vi?qn++:(qn=0,Vi=e):qn=0,Ot(),null}function hn(){if(wt!==null){var e=sc(Lo),t=De.transition,n=F;try{if(De.transition=null,F=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Lo=0,$&6)throw Error(S(331));var o=$;for($|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Zn(8,h,l)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var g=h.sibling,w=h.return;if(xf(h),h===c){_=null;break}if(g!==null){g.return=w,_=g;break}_=w}}}var x=l.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var z=y.sibling;y.sibling=null,y=z}while(y!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Zn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,_=f;break e}_=l.return}}var u=e.current;for(_=u;_!==null;){i=_;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,_=d;else e:for(i=u;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ho(9,s)}}catch(E){X(s,s.return,E)}if(s===i){_=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,_=v;break e}_=s.return}}if($=o,Ot(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{F=n,De.transition=t}}return!1}function au(e,t,n){t=kn(n,t),t=af(e,t,1),e=Nt(e,t,1),t=ye(),e!==null&&(Sr(e,1,t),Ee(e,t))}function X(e,t,n){if(e.tag===3)au(e,e,n);else for(;t!==null;){if(t.tag===3){au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=kn(n,e),e=uf(t,e,1),t=Nt(t,e,1),e=ye(),t!==null&&(Sr(t,1,e),Ee(t,e));break}}t=t.return}}function jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>J()-$s?Ut(e,0):Os|=n),Ee(e,t)}function zf(e,t){t===0&&(e.mode&1?(t=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(Sr(e,t,n),Ee(e,n))}function Pp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zf(e,n)}function zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),zf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,gp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,H&&t.flags&1048576&&Oc(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var o=vn(t,he.current);mn(t,n),o=js(null,t,r,e,o,n);var l=Ps();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,wo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ks(t),o.updater=Wo,t.stateNode=o,o._reactInternals=t,Pi(t,r,e,n),t=Li(null,t,r,!0,l,n)):(t.tag=0,H&&l&&hs(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Lp(r),e=We(r,e),o){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=qa(null,t,r,e,n);break e;case 11:t=Za(null,t,r,e,n);break e;case 14:t=Ja(null,t,r,We(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Ti(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),qa(e,t,r,o,n);case 3:e:{if(pf(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ac(e,t),No(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=kn(Error(S(423)),t),t=ba(e,t,r,n,o);break e}else if(r!==o){o=kn(Error(S(424)),t),t=ba(e,t,r,n,o);break e}else for(je=Et(t.stateNode.containerInfo.firstChild),Pe=t,H=!0,Qe=null,n=Dc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===o){t=dt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Vc(t),e===null&&Ni(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,wi(r,o)?i=null:l!==null&&wi(r,l)&&(t.flags|=32),df(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&Ni(t),null;case 13:return mf(e,t,n);case 4:return Cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Za(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(Co,r._currentValue),r._currentValue=i,l!==null)if(Xe(l.value,i)){if(l.children===o.children&&!ke.current){t=dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=at(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_i(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),_i(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,mn(t,n),o=Fe(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),Ja(e,t,r,o,n);case 15:return cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),no(e,t),t.tag=1,Ce(r)?(e=!0,wo(t)):e=!1,mn(t,n),sf(t,r,o),Pi(t,r,o,n),Li(null,t,r,!0,e,n);case 19:return hf(e,t,n);case 22:return ff(e,t,n)}throw Error(S(156,t.tag))};function Lf(e,t){return rc(e,t)}function Tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Tp(e,t,n,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===os)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Fs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case qt:return Bt(n.children,o,l,t);case ns:i=8,o|=8;break;case ql:return e=Me(12,n,t,o|2),e.elementType=ql,e.lanes=l,e;case bl:return e=Me(13,n,t,o),e.elementType=bl,e.lanes=l,e;case ei:return e=Me(19,n,t,o),e.elementType=ei,e.lanes=l,e;case Vu:return Go(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fu:i=10;break e;case Au:i=9;break e;case rs:i=11;break e;case os:i=14;break e;case ht:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Me(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Bt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function As(e,t,n,r,o,l,i,s,a){return e=new Rp(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Me(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ks(l),e}function Op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rf(e){if(!e)return Tt;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Lc(e,n,t)}return t}function Of(e,t,n,r,o,l,i,s,a){return e=As(n,r,!0,e,o,l,i,s,a),e.context=Rf(null),n=e.current,r=ye(),o=jt(n),l=at(r,o),l.callback=t??null,Nt(n,l,o),e.current.lanes=o,Sr(e,o,r),Ee(e,r),e}function Yo(e,t,n,r){var o=t.current,l=ye(),i=jt(o);return n=Rf(n),t.context===null?t.context=n:t.pendingContext=n,t=at(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,i),e!==null&&(Ye(e,o,i,l),br(e,o,i)),i}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vs(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function $p(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}Xo.prototype.render=Us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Yo(e,t,null,null)};Xo.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){Yo(null,e,null,null)}),t[ct]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&dc(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function Ip(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Oo(i);l.call(c)}}var i=Of(t,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=i,e[ct]=i.current,sr(e.nodeType===8?e.parentNode:e),Yt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Oo(a);s.call(c)}}var a=As(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=a,e[ct]=a.current,sr(e.nodeType===8?e.parentNode:e),Yt(function(){Yo(t,a,n,r)}),a}function Zo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Oo(i);s.call(a)}}Yo(t,i,e,o)}else i=Ip(n,t,e,o,r);return Oo(i)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(ss(t,n|1),Ee(t,J()),!($&6)&&(Cn=J()+500,Ot()))}break;case 13:Yt(function(){var r=ft(e,1);if(r!==null){var o=ye();Ye(r,e,1,o)}}),Vs(e,1)}};as=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}Vs(e,134217728)}};uc=function(e){if(e.tag===13){var t=jt(e),n=ft(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}Vs(e,t)}};cc=function(){return F};fc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ci=function(e,t,n){switch(t){case"input":if(ri(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vo(r);if(!o)throw Error(S(90));Bu(r),ri(r,o)}}}break;case"textarea":Hu(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};Ju=Is;qu=Yt;var Mp={usingClientEntryPoint:!1,Events:[Cr,nn,Vo,Ku,Zu,Is]},Fn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||$p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Mo=Hr.inject(Dp),et=Hr}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(S(200));return Op(e,t,null,n)};Le.createRoot=function(e,t){if(!Bs(e))throw Error(S(299));var n=!1,r="",o=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=As(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,sr(e.nodeType===8?e.parentNode:e),new Us(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=tc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Yt(e)};Le.hydrate=function(e,t,n){if(!Ko(t))throw Error(S(200));return Zo(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=$f;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Of(t,null,e,1,n??null,o,!1,l,i),e[ct]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Xo(t)};Le.render=function(e,t,n){if(!Ko(t))throw Error(S(200));return Zo(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(S(40));return e._reactRootContainer?(Yt(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Le.unstable_batchedUpdates=Is;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ko(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Zo(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(e){console.error(e)}}If(),$u.exports=Le;var Fp=$u.exports,Mf,fu=Fp;Mf=fu.createRoot,fu.hydrateRoot;const Ap="/betgenius-landing/assets/logo-C5A6mzFV.png",Vp=()=>{const[e,t]=D.useState(!1),n=()=>{t(!e)},r={display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px gray",backgroundColor:"#101624",boxSizing:"border-box"},o={height:"40px"},l={textDecoration:"none",color:"#FFF",padding:"15px 15px",borderRadius:"5px",fontWeight:"600",fontSize:"16px",transition:"background-color 0.3s ease, color 0.3s ease"};return p.jsxs("header",{style:r,className:" max-w-6xl mx-auto  py-[10px] px-4 sm:px-0 w-full bg-[#101624] z-50",children:[p.jsx("div",{onClick:n,className:e?"h-screen inset-0 z-10 bg-opacity-70 backdrop-sm w-full fixed bg-gray-900 md:hidden":"hidden "}),p.jsx("div",{className:"z-50",children:p.jsx("a",{href:"/",children:p.jsx("img",{src:Ap,alt:"Logo",style:o})})}),p.jsx("div",{className:"md:hidden z-20",children:p.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white focus:outline-none",children:e?p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-6 h-6",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),p.jsxs("nav",{className:`md:flex flex flex-col  md:flex-row md:items-center space-y-24 md:space-y-0 md:space-x-6 absolute z-20 md:relative top-16 left-0 w-full md:w-auto bg-[#101624] pb-4 md:bg-transparent md:top-auto md:left-auto ${e?"block":"hidden"}`,children:[p.jsxs("div",{className:"flex flex-col  md:flex-row md:items-center whitespace-nowrap",children:[p.jsx("a",{style:l,onClick:n,href:"#home",children:"Home"}),p.jsx("a",{style:l,onClick:n,href:"#about",children:"About Us"}),p.jsx("a",{style:l,onClick:n,href:"#features",children:"Features"})]}),p.jsxs("div",{className:"w-full flex justify-center flex-col md:flex-row items-center gap-2 ",children:[p.jsx("a",{onClick:n,href:"#download",className:"w-11/12 md:w-full mx-auto",children:p.jsx("button",{className:"md:bg-[#2AFD84]  bg-white text-[#101624] text-sm font-semibold whitespace-nowrap transition-colors duration-300 ease-linear px-5 py-2.5 rounded w-full",children:"Download App"})}),p.jsx("a",{onClick:n,href:"#",className:"w-11/12 mx-auto md:hidden",children:p.jsx("button",{className:"bg-[#2AFD84] h text-[#101624] px-6 py-2 rounded w-full",children:"Join Our Telegram"})})]})]})]})},Up="/betgenius-landing/assets/free-games-2-BqzFCjS1.png",Bp="/betgenius-landing/assets/free-games-1-BTN050dC.png",Wp="/betgenius-landing/assets/booking-code-v_9ap117.png",Hp="/betgenius-landing/assets/instant-updates-BNQyaIq4.png",Qp="/betgenius-landing/assets/sport-news-B2sJOYjh.png",Gp="/betgenius-landing/assets/sportup2-CIz6zjUc.png",Yp="/betgenius-landing/assets/win-together-DC7t8tGS.png",du="/betgenius-landing/assets/applestore-DrN_CZQ0.png",pu="/betgenius-landing/assets/googlestore-Czye0jvT.png",Xp="/betgenius-landing/assets/wintog2-CCoHRbyh.png";var Kp=!1;function Zp(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Jp(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var qp=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!Kp:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Jp(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Zp(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",$o="-moz-",I="-webkit-",Df="comm",Ws="rule",Hs="decl",bp="@import",Ff="@keyframes",em="@layer",tm=Math.abs,Jo=String.fromCharCode,nm=Object.assign;function rm(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function Af(e){return e.trim()}function om(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Wi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Qs(e){return e.length}function Qr(e,t){return t.push(e),e}function lm(e,t){return e.map(t).join("")}var qo=1,En=1,Vf=0,Ne=0,q=0,Pn="";function bo(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:qo,column:En,length:i,return:""}}function An(e,t){return nm(bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function im(){return q}function sm(){return q=Ne>0?ae(Pn,--Ne):0,En--,q===10&&(En=1,qo--),q}function ze(){return q=Ne<Vf?ae(Pn,Ne++):0,En++,q===10&&(En=1,qo++),q}function nt(){return ae(Pn,Ne)}function io(){return Ne}function Nr(e,t){return gr(Pn,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uf(e){return qo=En=1,Vf=Je(Pn=e),Ne=0,[]}function Bf(e){return Pn="",e}function so(e){return Af(Nr(Ne-1,Hi(e===91?e+2:e===40?e+1:e)))}function am(e){for(;(q=nt())&&q<33;)ze();return yr(e)>2||yr(q)>3?"":" "}function um(e,t){for(;--t&&ze()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Nr(e,io()+(t<6&&nt()==32&&ze()==32))}function Hi(e){for(;ze();)switch(q){case e:return Ne;case 34:case 39:e!==34&&e!==39&&Hi(q);break;case 40:e===41&&Hi(e);break;case 92:ze();break}return Ne}function cm(e,t){for(;ze()&&e+q!==57;)if(e+q===84&&nt()===47)break;return"/*"+Nr(t,Ne-1)+"*"+Jo(e===47?e:ze())}function fm(e){for(;!yr(nt());)ze();return Nr(e,Ne)}function dm(e){return Bf(ao("",null,null,null,[""],e=Uf(e),0,[0],e))}function ao(e,t,n,r,o,l,i,s,a){for(var c=0,h=0,m=i,g=0,w=0,x=0,y=1,z=1,f=1,u=0,d="",v=o,E=l,N=r,C=d;z;)switch(x=u,u=ze()){case 40:if(x!=108&&ae(C,m-1)==58){Wi(C+=M(so(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=so(u);break;case 9:case 10:case 13:case 32:C+=am(x);break;case 92:C+=um(io()-1,7);continue;case 47:switch(nt()){case 42:case 47:Qr(pm(cm(ze(),io()),t,n),a);break;default:C+="/"}break;case 123*y:s[c++]=Je(C)*f;case 125*y:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+h:f==-1&&(C=M(C,/\f/g,"")),w>0&&Je(C)-m&&Qr(w>32?hu(C+";",r,n,m-1):hu(M(C," ","")+";",r,n,m-2),a);break;case 59:C+=";";default:if(Qr(N=mu(C,t,n,c,h,o,s,d,v=[],E=[],m),l),u===123)if(h===0)ao(C,t,N,N,v,l,m,s,E);else switch(g===99&&ae(C,3)===110?100:g){case 100:case 108:case 109:case 115:ao(e,N,N,r&&Qr(mu(e,N,N,0,0,o,s,d,o,v=[],m),E),o,E,m,s,r?v:E);break;default:ao(C,N,N,N,[""],E,0,s,E)}}c=h=w=0,y=f=1,d=C="",m=i;break;case 58:m=1+Je(C),w=x;default:if(y<1){if(u==123)--y;else if(u==125&&y++==0&&sm()==125)continue}switch(C+=Jo(u),u*y){case 38:f=h>0?1:(C+="\f",-1);break;case 44:s[c++]=(Je(C)-1)*f,f=1;break;case 64:nt()===45&&(C+=so(ze())),g=nt(),h=m=Je(d=C+=fm(io())),u++;break;case 45:x===45&&Je(C)==2&&(y=0)}}return l}function mu(e,t,n,r,o,l,i,s,a,c,h){for(var m=o-1,g=o===0?l:[""],w=Qs(g),x=0,y=0,z=0;x<r;++x)for(var f=0,u=gr(e,m+1,m=tm(y=i[x])),d=e;f<w;++f)(d=Af(y>0?g[f]+" "+u:M(u,/&\f/g,g[f])))&&(a[z++]=d);return bo(e,t,n,o===0?Ws:s,a,c,h)}function pm(e,t,n){return bo(e,t,n,Df,Jo(im()),gr(e,2,-2),0)}function hu(e,t,n,r){return bo(e,t,n,Hs,gr(e,0,r),gr(e,r+1,-1),r)}function gn(e,t){for(var n="",r=Qs(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function mm(e,t,n,r){switch(e.type){case em:if(e.children.length)break;case bp:case Hs:return e.return=e.return||e.value;case Df:return"";case Ff:return e.return=e.value+"{"+gn(e.children,r)+"}";case Ws:e.value=e.props.join(",")}return Je(n=gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function hm(e){var t=Qs(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function gm(e){return function(t){t.root||(t=t.return)&&e(t)}}function ym(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vm=function(t,n,r){for(var o=0,l=0;o=l,l=nt(),o===38&&l===12&&(n[r]=1),!yr(l);)ze();return Nr(t,Ne)},xm=function(t,n){var r=-1,o=44;do switch(yr(o)){case 0:o===38&&nt()===12&&(n[r]=1),t[r]+=vm(Ne-1,n,r);break;case 2:t[r]+=so(o);break;case 4:if(o===44){t[++r]=nt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Jo(o)}while(o=ze());return t},wm=function(t,n){return Bf(xm(Uf(t),n))},gu=new WeakMap,Sm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!gu.get(r))&&!o){gu.set(t,!0);for(var l=[],i=wm(n,l),s=r.props,a=0,c=0;a<i.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=l[a]?i[a].replace(/&\f/g,s[h]):s[h]+" "+i[a]}}},km=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wf(e,t){switch(rm(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+$o+e+pe+e+e;case 6828:case 4268:return I+e+pe+e+e;case 6165:return I+e+pe+"flex-"+e+e;case 5187:return I+e+M(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return I+e+pe+"flex-item-"+M(e,/flex-|-self/,"")+e;case 4675:return I+e+pe+"flex-line-pack"+M(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+pe+M(e,"shrink","negative")+e;case 5292:return I+e+pe+M(e,"basis","preferred-size")+e;case 6060:return I+"box-"+M(e,"-grow","")+I+e+pe+M(e,"grow","positive")+e;case 4554:return I+M(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+$o+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wi(e,"stretch")?Wf(M(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,Je(e)-3-(~Wi(e,"!important")&&10))){case 107:return M(e,":",":"+I)+e;case 101:return M(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(ae(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return I+e+pe+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+pe+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+pe+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+pe+e+e}return e}var Cm=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Hs:t.return=Wf(t.value,t.length);break;case Ff:return gn([An(t,{value:M(t.value,"@","@"+I)})],o);case Ws:if(t.length)return lm(t.props,function(l){switch(om(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gn([An(t,{props:[M(l,/:(read-\w+)/,":"+$o+"$1")]})],o);case"::placeholder":return gn([An(t,{props:[M(l,/:(plac\w+)/,":"+I+"input-$1")]}),An(t,{props:[M(l,/:(plac\w+)/,":"+$o+"$1")]}),An(t,{props:[M(l,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},Em=[Cm],Nm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var z=y.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||Em,l={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var z=y.getAttribute("data-emotion").split(" "),f=1;f<z.length;f++)l[z[f]]=!0;s.push(y)});var a,c=[Sm,km];{var h,m=[mm,gm(function(y){h.insert(y)})],g=hm(c.concat(o,m)),w=function(z){return gn(dm(z),g)};a=function(z,f,u,d){h=u,w(z?z+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new qp({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return x.sheet.hydrate(s),x},Hf={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,Gs=ie?Symbol.for("react.element"):60103,Ys=ie?Symbol.for("react.portal"):60106,el=ie?Symbol.for("react.fragment"):60107,tl=ie?Symbol.for("react.strict_mode"):60108,nl=ie?Symbol.for("react.profiler"):60114,rl=ie?Symbol.for("react.provider"):60109,ol=ie?Symbol.for("react.context"):60110,Xs=ie?Symbol.for("react.async_mode"):60111,ll=ie?Symbol.for("react.concurrent_mode"):60111,il=ie?Symbol.for("react.forward_ref"):60112,sl=ie?Symbol.for("react.suspense"):60113,_m=ie?Symbol.for("react.suspense_list"):60120,al=ie?Symbol.for("react.memo"):60115,ul=ie?Symbol.for("react.lazy"):60116,jm=ie?Symbol.for("react.block"):60121,Pm=ie?Symbol.for("react.fundamental"):60117,zm=ie?Symbol.for("react.responder"):60118,Tm=ie?Symbol.for("react.scope"):60119;function Oe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gs:switch(e=e.type,e){case Xs:case ll:case el:case nl:case tl:case sl:return e;default:switch(e=e&&e.$$typeof,e){case ol:case il:case ul:case al:case rl:return e;default:return t}}case Ys:return t}}}function Qf(e){return Oe(e)===ll}A.AsyncMode=Xs;A.ConcurrentMode=ll;A.ContextConsumer=ol;A.ContextProvider=rl;A.Element=Gs;A.ForwardRef=il;A.Fragment=el;A.Lazy=ul;A.Memo=al;A.Portal=Ys;A.Profiler=nl;A.StrictMode=tl;A.Suspense=sl;A.isAsyncMode=function(e){return Qf(e)||Oe(e)===Xs};A.isConcurrentMode=Qf;A.isContextConsumer=function(e){return Oe(e)===ol};A.isContextProvider=function(e){return Oe(e)===rl};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gs};A.isForwardRef=function(e){return Oe(e)===il};A.isFragment=function(e){return Oe(e)===el};A.isLazy=function(e){return Oe(e)===ul};A.isMemo=function(e){return Oe(e)===al};A.isPortal=function(e){return Oe(e)===Ys};A.isProfiler=function(e){return Oe(e)===nl};A.isStrictMode=function(e){return Oe(e)===tl};A.isSuspense=function(e){return Oe(e)===sl};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===el||e===ll||e===nl||e===tl||e===sl||e===_m||typeof e=="object"&&e!==null&&(e.$$typeof===ul||e.$$typeof===al||e.$$typeof===rl||e.$$typeof===ol||e.$$typeof===il||e.$$typeof===Pm||e.$$typeof===zm||e.$$typeof===Tm||e.$$typeof===jm)};A.typeOf=Oe;Hf.exports=A;var Lm=Hf.exports,Gf=Lm,Rm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yf={};Yf[Gf.ForwardRef]=Rm;Yf[Gf.Memo]=Om;var $m=!0;function Xf(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var Ks=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||$m===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Kf=function(t,n,r){Ks(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Im(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Mm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dm=!1,Fm=/[A-Z]|^ms/g,Am=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zf=function(t){return t.charCodeAt(1)===45},yu=function(t){return t!=null&&typeof t!="boolean"},Kl=ym(function(e){return Zf(e)?e:e.replace(Fm,"-$&").toLowerCase()}),vu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Am,function(r,o,l){return qe={name:o,styles:l,next:qe},o})}return Mm[t]!==1&&!Zf(t)&&typeof n=="number"&&n!==0?n+"px":n},Vm="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function vr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return qe={name:o.name,styles:o.styles,next:qe},o.name;var l=n;if(l.styles!==void 0){var i=l.next;if(i!==void 0)for(;i!==void 0;)qe={name:i.name,styles:i.styles,next:qe},i=i.next;var s=l.styles+";";return s}return Um(e,t,n)}case"function":{if(e!==void 0){var a=qe,c=n(e);return qe=a,vr(e,t,c)}break}}var h=n;if(t==null)return h;var m=t[h];return m!==void 0?m:h}function Um(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=vr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=l+"{"+t[s]+"}":yu(s)&&(r+=Kl(l)+":"+vu(l,s)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&Dm)throw new Error(Vm);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)yu(i[a])&&(r+=Kl(l)+":"+vu(l,i[a])+";");else{var c=vr(e,t,i);switch(l){case"animation":case"animationName":{r+=Kl(l)+":"+c+";";break}default:r+=l+"{"+c+"}"}}}}return r}var xu=/label:\s*([^\s;{]+)\s*(;|$)/g,qe;function Zs(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";qe=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,o+=vr(n,t,l);else{var i=l;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=vr(n,t,e[s]),r){var a=l;o+=a[s]}xu.lastIndex=0;for(var c="",h;(h=xu.exec(o))!==null;)c+="-"+h[1];var m=Im(o)+c;return{name:m,styles:o,next:qe}}var Bm=function(t){return t()},Wm=la.useInsertionEffect?la.useInsertionEffect:!1,Jf=Wm||Bm,Qi=!1,qf=D.createContext(typeof HTMLElement<"u"?Nm({key:"css"}):null);qf.Provider;var bf=function(t){return D.forwardRef(function(n,r){var o=D.useContext(qf);return t(n,o,r)})},ed=D.createContext({}),Js={}.hasOwnProperty,Gi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Hm=function(t,n){var r={};for(var o in n)Js.call(n,o)&&(r[o]=n[o]);return r[Gi]=t,r},Qm=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ks(n,r,o),Jf(function(){return Kf(n,r,o)}),null},Gm=bf(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Gi],l=[r],i="";typeof e.className=="string"?i=Xf(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var s=Zs(l,void 0,D.useContext(ed));i+=t.key+"-"+s.name;var a={};for(var c in e)Js.call(e,c)&&c!=="css"&&c!==Gi&&!Qi&&(a[c]=e[c]);return a.className=i,n&&(a.ref=n),D.createElement(D.Fragment,null,D.createElement(Qm,{cache:t,serialized:s,isStringTag:typeof o=="string"}),D.createElement(o,a))}),Ym=Gm,Xm=p.Fragment;function re(e,t,n){return Js.call(t,"css")?p.jsx(Ym,Hm(e,t),n):p.jsx(e,t,n)}function td(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zs(t)}var k=function(){var t=td.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Km=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var s in l)l[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function Zm(e,t,n){var r=[],o=Xf(e,r,n);return r.length<2?n:o+t(r)}var Jm=function(t){var n=t.cache,r=t.serializedArr;return Jf(function(){for(var o=0;o<r.length;o++)Kf(n,r[o],!1)}),null},Zl=bf(function(e,t){var n=!1,r=[],o=function(){if(n&&Qi)throw new Error("css can only be used during render");for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];var g=Zs(h,t.registered);return r.push(g),Ks(t,g,!1),t.key+"-"+g.name},l=function(){if(n&&Qi)throw new Error("cx can only be used during render");for(var c=arguments.length,h=new Array(c),m=0;m<c;m++)h[m]=arguments[m];return Zm(t.registered,o,Km(h))},i={css:o,cx:l,theme:D.useContext(ed)},s=e.children(i);return n=!0,D.createElement(D.Fragment,null,D.createElement(Jm,{cache:t,serializedArr:r}),s)}),qm=Object.defineProperty,bm=(e,t,n)=>t in e?qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gr=(e,t,n)=>bm(e,typeof t!="symbol"?t+"":t,n),Yi=new Map,Yr=new WeakMap,wu=0,e1=void 0;function t1(e){return e?(Yr.has(e)||(wu+=1,Yr.set(e,wu.toString())),Yr.get(e)):"0"}function n1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?t1(e.root):e[t]}`).toString()}function r1(e){const t=n1(e);let n=Yi.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(s=>{var a;const c=s.isIntersecting&&o.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Yi.set(t,n)}return n}function nd(e,t,n={},r=e1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:l,elements:i}=r1(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),l.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),Yi.delete(o))}}function o1(e){return typeof e.children!="function"}var Su=class extends D.Component{constructor(e){super(e),Gr(this,"node",null),Gr(this,"_unobserveCb",null),Gr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Gr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),o1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=nd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:x}=this.state;return e({inView:w,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:m,...g}=this.props;return D.createElement(t||"div",{ref:this.handleNode,...g},e)}};function rd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[m,g]=D.useState(null),w=D.useRef(),[x,y]=D.useState({inView:!!s,entry:void 0});w.current=c,D.useEffect(()=>{if(i||!m)return;let d;return d=nd(m,(v,E)=>{y({inView:v,entry:E}),w.current&&w.current(v,E),E.isIntersecting&&l&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,a,t]);const z=(h=x.entry)==null?void 0:h.target,f=D.useRef();!m&&z&&!l&&!i&&f.current!==z&&(f.current=z,y({inView:!!s,entry:void 0}));const u=[g,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var od={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),bs=Symbol.for("react.portal"),cl=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),pl=Symbol.for("react.provider"),ml=Symbol.for("react.context"),l1=Symbol.for("react.server_context"),hl=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),xl=Symbol.for("react.lazy"),i1=Symbol.for("react.offscreen"),ld;ld=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qs:switch(e=e.type,e){case cl:case dl:case fl:case gl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case l1:case ml:case hl:case xl:case vl:case pl:return e;default:return t}}case bs:return t}}}V.ContextConsumer=ml;V.ContextProvider=pl;V.Element=qs;V.ForwardRef=hl;V.Fragment=cl;V.Lazy=xl;V.Memo=vl;V.Portal=bs;V.Profiler=dl;V.StrictMode=fl;V.Suspense=gl;V.SuspenseList=yl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ve(e)===ml};V.isContextProvider=function(e){return Ve(e)===pl};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs};V.isForwardRef=function(e){return Ve(e)===hl};V.isFragment=function(e){return Ve(e)===cl};V.isLazy=function(e){return Ve(e)===xl};V.isMemo=function(e){return Ve(e)===vl};V.isPortal=function(e){return Ve(e)===bs};V.isProfiler=function(e){return Ve(e)===dl};V.isStrictMode=function(e){return Ve(e)===fl};V.isSuspense=function(e){return Ve(e)===gl};V.isSuspenseList=function(e){return Ve(e)===yl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cl||e===dl||e===fl||e===gl||e===yl||e===i1||typeof e=="object"&&e!==null&&(e.$$typeof===xl||e.$$typeof===vl||e.$$typeof===pl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===ld||e.getModuleId!==void 0)};V.typeOf=Ve;od.exports=V;var s1=od.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const a1=k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,u1=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,c1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,f1=k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,d1=k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ea=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,p1=k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,m1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,h1=k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,g1=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,y1=k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,v1=k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,x1=k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function w1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=ea,iterationCount:o=1}){return td`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function S1(e){return e==null}function k1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function id(e,t){return n=>n?e():t()}function xr(e){return id(e,()=>null)}function Xi(e){return xr(()=>({opacity:0}))(e)}const sd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=ea,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:m,children:g,onVisibilityChange:w}=e,x=D.useMemo(()=>w1({keyframes:i,duration:o}),[o,i]);return S1(g)?null:k1(g)?re(E1,{...e,animationStyles:x,children:String(g)}):s1.isFragment(g)?re(ad,{...e,animationStyles:x}):re(Xm,{children:D.Children.map(g,(y,z)=>{if(!D.isValidElement(y))return null;const f=r+(t?z*o*n:0);switch(y.type){case"ol":case"ul":return re(Zl,{children:({cx:u})=>re(y.type,{...y.props,className:u(a,y.props.className),style:Object.assign({},c,y.props.style),children:re(sd,{...e,children:y.props.children})})});case"li":return re(Su,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re(Zl,{children:({cx:v})=>re(y.type,{...y.props,ref:d,className:v(h,y.props.className),css:xr(()=>x)(u),style:Object.assign({},m,y.props.style,Xi(!u),{animationDelay:f+"ms"})})})});default:return re(Su,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:d})=>re("div",{ref:d,className:a,css:xr(()=>x)(u),style:Object.assign({},c,Xi(!u),{animationDelay:f+"ms"}),children:re(Zl,{children:({cx:v})=>re(y.type,{...y.props,className:v(h,y.props.className),style:Object.assign({},m,y.props.style)})})})})}})})},C1={display:"inline-block",whiteSpace:"pre"},E1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:m}=e,{ref:g,inView:w}=rd({triggerOnce:s,threshold:i,onChange:m});return id(()=>re("div",{ref:g,className:a,style:Object.assign({},c,C1),children:h.split("").map((x,y)=>re("span",{css:xr(()=>t)(w),style:{animationDelay:o+y*l*r+"ms"},children:x},y))}),()=>re(ad,{...e,children:h}))(n)},ad=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:s}=e,{ref:a,inView:c}=rd({triggerOnce:r,threshold:n,onChange:s});return re("div",{ref:a,className:o,css:xr(()=>t)(c),style:Object.assign({},l,Xi(!c)),children:i})};k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const N1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,_1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,j1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,P1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,z1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,T1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,L1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,R1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,O1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,$1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,I1=k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,M1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,D1=k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function F1(e,t,n){switch(n){case"bottom-left":return t?_1:u1;case"bottom-right":return t?j1:c1;case"down":return e?t?z1:d1:t?P1:f1;case"left":return e?t?L1:p1:t?T1:ea;case"right":return e?t?O1:h1:t?R1:m1;case"top-left":return t?$1:g1;case"top-right":return t?I1:y1;case"up":return e?t?D1:x1:t?M1:v1;default:return t?N1:a1}}const rt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=D.useMemo(()=>F1(t,r,n),[t,n,r]);return re(sd,{keyframes:l,...o})};k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const A1="/betgenius-landing/assets/hero-image-Bp36rF-6.png";function V1(){return p.jsxs("div",{className:"flex flex-col space-y-20 sm:space-y-32",children:[p.jsxs("section",{id:"home",className:"min-h-screen px-2 sm:px-0 pt-5 max-w-6xl mx-auto flex flex-col  md:flex-row items-start w-full justify-between   text-white",children:[p.jsx("div",{className:" flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ",children:p.jsxs(rt,{triggerOnce:!0,direction:"up",duration:2e3,children:[p.jsxs("h1",{className:"md:text-5xl text-3xl leading-relaxed md:text-wrap font-bold md:mb-4 mb-2 ",children:["Making money has never been ",p.jsx("br",{className:"hidden sm:block"})," ","this simple."," ",p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"text-[#2AFD84] md:inline-block hidden ",children:"BetGenius"}),p.jsx("span",{className:"text-[#2AFD84] w-full mt-1 md:hidden",children:"BetGenius"})]})]}),p.jsxs("p",{className:"text-sm md:text-[17px]    text-wrap  md:mb-6 mb-4 text-[#E6E7EB] leading-8 ",children:["With BetGenius, your path to success is just a bet away. Revolutionize your football ",p.jsx("br",{className:"hidden sm:block"})," ","betting experience with our accurate predictions and tips for"," ",p.jsx("span",{className:"text-[#2AFD84]",children:"FREE"}),"."]}),p.jsxs("div",{className:"flex flex-col space-y-5",children:[p.jsx("a",{href:"",children:p.jsxs("button",{className:"bg-[#2AFD84] text-[#101624] h-[46px] sm:h-[53px] flex items-center justify-center rounded w-[228px] sm:w-[262px] text-center text-sm  font-semibold transition duration-300 hover:bg-[#24d06f]",children:[p.jsx("span",{children:"Join Our Telegram Channel"}),p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",className:"w-5 h-5",children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}),p.jsx("line",{x1:"2",y1:"12",x2:"16",y2:"12",stroke:"currentColor",strokeWidth:"2"})]})]})}),p.jsx("p",{className:"text-[#E6E7EB]",children:"Or Use"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{children:p.jsx("img",{src:du,alt:"",className:"h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "})}),p.jsx("button",{children:p.jsx("img",{src:pu,alt:"",className:"h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] "})})]}),p.jsxs("div",{className:"flex gap-8 mt-4 w-11/12 md:w-full",children:[p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsx("p",{className:"text-[#E6E7EB]",children:"320K +"}),p.jsx("h1",{className:"md:text-2xl text-xl font-semibold",children:"Active Users"})]}),p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsx("p",{className:"text-[#E6E7EB]",children:"85%"}),p.jsx("h1",{className:"md:text-2xl text-xl font-semibold",children:"Winning Rate"})]})]})]})]})}),p.jsx("div",{className:"md:w-1/3 w-full flex md:justify-center md:items-center ",children:p.jsx(rt,{triggerOnce:!0,direction:"up",duration:2e3,fraction:.01,children:p.jsx("img",{src:A1,alt:"Hero Image",className:"w-full   md:max-h-[750px]  md:object-contain"})})})]}),p.jsx("section",{id:"about",className:"min-h-screen  w-full px-2 sm:px-0  max-w-6xl mx-auto   text-white ",children:p.jsxs("div",{className:"flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2  ",children:[p.jsxs(rt,{triggerOnce:!0,direction:"up",duration:1500,fraction:.01,children:[p.jsxs("h1",{className:"md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4 md:w-3/5",children:["Free Games Only. No VIP. No ",p.jsx("br",{className:"hidden sm:block"})," Pay After Win."]}),p.jsxs("p",{className:"text-sm leading-loose  text-wrap  md:mb-6  text-[#E6E7EB]",children:["No VIP tiers. No hidden fees. No payments after wins—just pure betting excitement with ",p.jsx("br",{className:"hidden sm:block"}),"BetGenius!"]})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6  w-full my-5",children:[p.jsx("img",{src:Up,alt:"",className:"object-contain h-full md:h-auto md:object-contain"}),p.jsx("img",{src:Bp,alt:"",className:"object-contain h-full md:h-auto  md:object-contain"})]})]})}),p.jsxs("section",{id:"features",className:"min-h-screen  max-w-6xl mx-auto  px-2 sm:px-0 grid grid-cols-1 gap-y-2 sm:gap-y-4  sm:grid-cols-2 text-white ",children:[p.jsx("div",{className:" flex flex-col  justify-center space-y-3 sm:space-y-4",children:p.jsxs(rt,{triggerOnce:!0,direction:"up",duration:1500,fraction:.01,children:[p.jsx("h1",{className:"md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold ",children:"Get Free Booking Codes"}),p.jsxs("p",{className:"text-sm leading-loose  text-wrap  text-[#E6E7EB]",children:["Easily access the best booking codes from the top bookies you trust with ",p.jsx("br",{className:"hidden sm:block"}),"BetGenius."]}),p.jsx("a",{href:"#download",children:p.jsxs("button",{className:"bg-[#2AFD84] text-[#101624] h-[47px] w-[193px] sm:h-[53px] sm:w-[222px] flex items-center justify-center rounded  space-x-1 text-center text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]",children:[p.jsx("span",{children:"Download App Now"}),p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",className:" h-5 m-0 p-0",children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}),p.jsx("line",{x1:"2",y1:"12",x2:"16",y2:"12",strokeWidth:"2"})]})]})})]})}),p.jsx("div",{className:"",children:p.jsx(rt,{triggerOnce:!0,direction:"up",duration:1500,fraction:.01,children:p.jsx("img",{src:Wp,alt:"Hero Image",className:"   !object-cover  lg:h-auto"})})})]}),p.jsxs("section",{className:"min-h-screen  max-w-6xl mx-auto   px-2 md:px-0  flex flex-col  w-full justify-between text-white ",children:[p.jsx("div",{className:"flex-1 mb-8 md:mb-0 md:mr-8 flex flex-col gap-2 md:w-2/3 ",children:p.jsxs(rt,{triggerOnce:!0,direction:"up",duration:1500,fraction:.01,children:[p.jsx("h1",{className:"md:text-5xl text-3xl md:leading-relaxed text-wrap font-bold mb-4",children:"Instant Sports Updates at Your Fingertips"}),p.jsx("p",{className:"text-sm md:text-sm leading-loose w-11/12 text-wrap md:w-2/3 md:mb-6 mb-4 text-[#E6E7EB]",children:"Stay updated with live scores, real-time results, and detailed match statistics from all your favorite sports, all in one place."})]})}),p.jsx("div",{className:"items-center justify-center w-full  hidden sm:flex ",children:p.jsx("img",{src:Hp,alt:"Hero Image",loading:"lazy",className:"!object-cover  "})}),p.jsx("div",{className:"items-center justify-center w-full flex   sm:hidden",children:p.jsx("img",{src:Gp,alt:"Hero Image",loading:"lazy",className:"!object-cover  "})})]}),p.jsxs("section",{className:"min-h-screen  hidden sm:grid grid-cols-1 sm:grid-cols-2 justify-between px-2 md:px-0 md:pl-8  text-white  ",children:[p.jsx("div",{className:"flex flex-col space-y-5",children:p.jsxs(rt,{triggerOnce:!0,direction:"up",duration:1500,fraction:.01,children:[p.jsx("h1",{className:"md:text-5xl text-3xl leading-normal text-wrap font-bold mb-4",children:"Your Source for Accurate Sports News"}),p.jsxs("span",{className:" text-sm leading-loose  text-[#E6E7EB]",children:["Get up-to-date and precise news, live updates, and in-depth analysis with the",p.jsx("br",{className:"hidden sm:block"})," BetGenius App – your ultimate companion for staying informed."]}),p.jsx("a",{href:"#download",children:p.jsxs("button",{className:"bg-[#2AFD84] text-[#101624] h-[53px] w-[222px] flex items-center justify-center rounded  text-sm  font-semibold transition duration-300 md:hover:bg-[#24d06f]",children:[p.jsx("span",{children:"Download App Now"}),p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",className:"w-5 h-5",children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}),p.jsx("line",{x1:"2",y1:"12",x2:"16",y2:"12",stroke:"currentColor",strokeWidth:"2"})]})]})})]})}),p.jsx("div",{className:" flex justify-en",children:p.jsx("img",{src:Qp,alt:"Hero Image",className:"object-cover"})})]}),p.jsxs("section",{id:"download",className:"min-h-screen  px-2 sm:px-0 flex flex-col justify-center items-center space-y-5  w-full pb-20",children:[p.jsx(rt,{triggerOnce:!0,direction:"up",duration:1e3,fraction:.01,children:p.jsx("h1",{className:"md:text-5xl text-3xl leading-relaxed text-wrap font-bold  text-white",children:"Let's Win Together"})}),p.jsxs("div",{className:"   ",children:[p.jsx("img",{src:Yp,alt:"Hero Image",loading:"lazy",className:"hidden sm:block md:object-cover "}),p.jsx("img",{src:Xp,alt:"Hero Image",className:"  sm:hidden md:object-cover "})]}),p.jsx(rt,{triggerOnce:!0,direction:"up",duration:500,fraction:.01,children:p.jsxs("div",{className:"flex space-x-4 sm:space-x-8 px-1 pt-16",children:[p.jsx("a",{href:"#download",className:"h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] ",children:p.jsx("img",{src:du,alt:"",className:"  h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"})}),p.jsx("a",{href:"#download",className:"h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px] ",children:p.jsx("img",{src:pu,alt:"",className:" h-[55px] w-[143px]  sm:w-[169px] sm:h-[65px]"})})]})})]})]})}const ku="/betgenius-landing/assets/logo-DDgHiyZC.svg",U1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eyoutube-filled%3c/title%3e%3cg%20id='Page-1'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='icon'%20fill='%23ffffff'%20transform='translate(42.666738,%20106.667236)'%3e%3cpath%20d='M214.304705,0.000543068834%20C226.424729,0.0216871426%20348.414862,0.444568619%20380.010595,8.90219814%20C398.378595,13.7775234%20412.821262,28.1915286%20417.749262,46.6329765%20C426.309902,78.5811951%20426.652328,143.739282%20426.666025,148.900811%20L426.666025,149.553735%20C426.652328,154.730893%20426.309902,220.084332%20417.749262,252.032551%20C412.821262,270.473998%20398.378595,284.888004%20380.010595,289.763329%20C347.417102,298.488042%20218.629945,298.662536%20213.491496,298.666026%20L213.175003,298.666026%20C208.035726,298.662536%2079.2276622,298.488042%2046.6132622,289.763329%20C28.2665955,284.888004%2013.8025955,270.473998%208.89592883,252.032551%20C0.355768832,220.084332%200.014162432,154.730893%200.000498176,149.553735%20L0.000498176,148.900811%20C0.014162432,143.739282%200.355768832,78.5811951%208.89592883,46.6329765%20C13.8025955,28.1915286%2028.2665955,13.7775234%2046.6132622,8.90219814%20C78.2292622,0.444568619%20200.239662,0.0216871426%20212.361662,0.000543068834%20Z%20M169.685262,86.2714908%20L169.685262,212.394036%20L281.215929,149.226778%20L169.685262,86.2714908%20Z'%20id='Shape'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",B1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-0.5%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.5%205H9.5C7.29086%205%205.5%206.79086%205.5%209V15C5.5%2017.2091%207.29086%2019%209.5%2019H15.5C17.7091%2019%2019.5%2017.2091%2019.5%2015V9C19.5%206.79086%2017.7091%205%2015.5%205Z'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.5%2015C10.8431%2015%209.5%2013.6569%209.5%2012C9.5%2010.3431%2010.8431%209%2012.5%209C14.1569%209%2015.5%2010.3431%2015.5%2012C15.5%2012.7956%2015.1839%2013.5587%2014.6213%2014.1213C14.0587%2014.6839%2013.2956%2015%2012.5%2015Z'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3crect%20x='15.5'%20y='9'%20width='2'%20height='2'%20rx='1'%20transform='rotate(-90%2015.5%209)'%20fill='%23ffffff'/%3e%3crect%20x='16'%20y='8.5'%20width='1'%20height='1'%20rx='0.5'%20transform='rotate(-90%2016%208.5)'%20stroke='%23ffffff'%20stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e",W1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20width='800px'%20height='800px'%20viewBox='0%200%201920%201920'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23ffffff'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M1920%20311.856c-70.701%2033.769-146.598%2056.47-226.221%2066.86%2081.317-52.517%20143.774-135.529%20173.252-234.691-76.236%2048.678-160.716%2084.028-250.391%20103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75%200-394.165%20189.966-394.165%20424.206%200%2033.318%203.614%2065.619%2010.165%2096.678C617.9%20616.119%20327.304%20447.385%20133.045%20190.67c-33.77%2062.57-53.309%20135.53-53.309%20213.233%200%20147.162%2091.031%20276.818%20196.744%20353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0%20205.327%20114.41%20376.658%20294.55%20415.849-32.978%209.487-78.38%2014.795-114.409%2014.795-25.412%200-55.454-2.71-79.624-7.793%2050.26%20168.509%20193.13%20291.163%20365.478%20294.777-134.852%20113.506-306.07%20181.383-490.616%20181.383-31.85%200-64.038-2.033-94.758-5.873%20174.494%20120.17%20381.176%20190.532%20603.67%20190.532%20724.97%200%201121.055-646.136%201121.055-1206.55%200-18.41-.452-36.932-1.356-55.116%2077.026-59.746%20143.887-134.4%20196.631-219.444'%20fill-rule='evenodd'/%3e%3c/g%3e%3c/svg%3e",H1="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23ffffff'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%20id='7935ec95c421cee6d86eb22ecd11b7e3'%3e%3cpath%20style='display:%20inline;'%20d='M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379%20c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302%20c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263%20l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Q1=()=>p.jsx("footer",{className:" text-white   ",children:p.jsxs("div",{className:" flex flex-col justify-center ",children:[p.jsx("div",{className:"bg-[#0e0c1a] p-4 ",children:p.jsxs("div",{className:"max-w-6xl mx-auto   py-10 px-1 md:flex-row grid grid-cols-1 sm:grid-cols-5 gap-y-10     w-full",children:[p.jsxs("div",{className:"flex flex-col gap-4 justify-between items-start  col-span-2",children:[p.jsx("p",{className:"md:block hidden font-bold text-lg",children:"BetGenius"}),p.jsx("img",{src:ku,alt:"Logo",className:"h-[65px] sm:h-[40px] md:hidden object-contain"}),p.jsx("p",{className:" text-sm leading-loose",children:"Your path to success is just one bet away – with the right insights and strategies, you can turn every wager into an opportunity for victory."}),p.jsxs("div",{className:"flex items-center justify-between space-x-6",children:[p.jsx("a",{href:"#",className:"",children:p.jsx("img",{src:H1,alt:"",className:"w-6 h-6"})}),p.jsx("a",{href:"#",className:"",children:p.jsx("img",{src:W1,alt:"",className:"w-6 h-6"})}),p.jsx("a",{href:"#",className:"",children:p.jsx("img",{src:B1,alt:"",className:"w-8 h-8"})}),p.jsx("a",{href:"#",className:"",children:p.jsx("img",{src:U1,alt:"",className:"w-8 h-8"})})]})]}),p.jsx("div",{className:"col-span-3",children:p.jsxs("ul",{className:" flex flex-col sm:justify-end sm:space-x-10 space-y-4 md:space-y-0 md:flex-row  md:items-center ",children:[p.jsx("li",{children:p.jsx("a",{href:"#home",className:"text-white hover:text-[#2AFD84]",children:"Home"})}),p.jsx("li",{children:p.jsx("a",{href:"#about",className:"text-white hover:text-[#2AFD84]",children:"About Us"})}),p.jsx("li",{children:p.jsx("a",{href:"#features",className:"text-white hover:text-[#2AFD84]",children:"Features"})})]})})]})}),p.jsx("div",{className:"bg-[#181823] hidden md:block    border-t border-[#101624] ",children:p.jsxs("div",{className:"max-w-6xl mx-auto py-4 text-center text-gray-500 hidden md:flex justify-between items-center ",children:[p.jsx("img",{src:ku,alt:"Logo",className:"h-[40px]"}),p.jsxs("span",{className:"text-sm",children:["© ",new Date().getFullYear()," ",p.jsx("span",{className:"text-[#2AFD84] font-bold",children:"BetGenius"}),". All Rights Reserved."]})]})})]})});function G1(){const e={backgroundColor:"#101624",height:"100vh",width:"100vw",overflowY:"scroll",backgroundImage:'url("bg.svg")',backgroundSize:"cover",backgroundPosition:"center top"};return p.jsxs("div",{className:"font-inter   !scroll-smooth relative",style:e,children:[p.jsx(Vp,{}),p.jsx(V1,{}),p.jsx(Q1,{})]})}Mf(document.getElementById("root")).render(p.jsx(D.StrictMode,{children:p.jsx(G1,{})}));
