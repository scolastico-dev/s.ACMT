const __vite__fileDeps=["./Dp0saXin.js","./DD_Tb0Z6.js","./error-404.EzKNKnTL.css","./DR0xNzfj.js","./error-500.BOCRP2Ph.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/**
* @vue/shared v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rl(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const ee={},rr=[],Je=()=>{},Lp=()=>!1,ns=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Cl=n=>n.startsWith("onUpdate:"),be=Object.assign,Pl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Ip=Object.prototype.hasOwnProperty,Yt=(n,t)=>Ip.call(n,t),Lt=Array.isArray,sr=n=>is(n)==="[object Map]",Lo=n=>is(n)==="[object Set]",gc=n=>is(n)==="[object Date]",Ut=n=>typeof n=="function",le=n=>typeof n=="string",In=n=>typeof n=="symbol",Qt=n=>n!==null&&typeof n=="object",Ll=n=>(Qt(n)||Ut(n))&&Ut(n.then)&&Ut(n.catch),th=Object.prototype.toString,is=n=>th.call(n),Dp=n=>is(n).slice(8,-1),eh=n=>is(n)==="[object Object]",Il=n=>le(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,or=Rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Up=/-(\w)/g,xn=Io(n=>n.replace(Up,(t,e)=>e?e.toUpperCase():"")),Np=/\B([A-Z])/g,Tr=Io(n=>n.replace(Np,"-$1").toLowerCase()),Do=Io(n=>n.charAt(0).toUpperCase()+n.slice(1)),ea=Io(n=>n?`on${Do(n)}`:""),ri=(n,t)=>!Object.is(n,t),Qs=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},nh=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},$a=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Op=n=>{const t=le(n)?Number(n):NaN;return isNaN(t)?n:t};let _c;const ih=()=>_c||(_c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uo(n){if(Lt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=le(i)?zp(i):Uo(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(le(n)||Qt(n))return n}const Fp=/;(?![^(]*\))/g,kp=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function zp(n){const t={};return n.replace(Bp,"").split(Fp).forEach(e=>{if(e){const i=e.split(kp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function No(n){let t="";if(le(n))t=n;else if(Lt(n))for(let e=0;e<n.length;e++){const i=No(n[e]);i&&(t+=i+" ")}else if(Qt(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function Hp(n){if(!n)return null;let{class:t,style:e}=n;return t&&!le(t)&&(n.class=No(t)),e&&(n.style=Uo(e)),n}const Vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gp=Rl(Vp);function rh(n){return!!n||n===""}function Wp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Oo(n[i],t[i]);return e}function Oo(n,t){if(n===t)return!0;let e=gc(n),i=gc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=In(n),i=In(t),e||i)return n===t;if(e=Lt(n),i=Lt(t),e||i)return e&&i?Wp(n,t):!1;if(e=Qt(n),i=Qt(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Oo(n[a],t[a]))return!1}}return String(n)===String(t)}function sh(n,t){return n.findIndex(e=>Oo(e,t))}const jp=n=>le(n)?n:n==null?"":Lt(n)||Qt(n)&&(n.toString===th||!Ut(n.toString))?JSON.stringify(n,oh,2):String(n),oh=(n,t)=>t&&t.__v_isRef?oh(n,t.value):sr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[na(i,s)+" =>"]=r,e),{})}:Lo(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>na(e))}:In(t)?na(t):Qt(t)&&!Lt(t)&&!eh(t)?String(t):t,na=(n,t="")=>{var e;return In(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class ah{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!t&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=sn;try{return sn=this,t()}finally{sn=e}}}on(){sn=this}off(){sn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Xp(n){return new ah(n)}function qp(n,t=sn){t&&t.active&&t.effects.push(n)}function Yp(){return sn}let Ci;class Dl{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qp(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,li();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&($p(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ci()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Qn,e=Ci;try{return Qn=!0,Ci=this,this._runnings++,vc(this),this.fn()}finally{xc(this),this._runnings--,Ci=e,Qn=t}}stop(){var t;this.active&&(vc(this),xc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function $p(n){return n.value}function vc(n){n._trackId++,n._depsLength=0}function xc(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)lh(n.deps[t],n);n.deps.length=n._depsLength}}function lh(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let Qn=!0,Ka=0;const ch=[];function li(){ch.push(Qn),Qn=!1}function ci(){const n=ch.pop();Qn=n===void 0?!0:n}function Ul(){Ka++}function Nl(){for(Ka--;!Ka&&Za.length;)Za.shift()()}function uh(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&lh(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const Za=[];function fh(n,t,e){Ul();for(const i of n.keys()){let r;i._dirtyLevel<t&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Za.push(i.scheduler)))}Nl()}const hh=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},lo=new WeakMap,Pi=Symbol(""),Ja=Symbol("");function ke(n,t,e){if(Qn&&Ci){let i=lo.get(n);i||lo.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=hh(()=>i.delete(e))),uh(Ci,r)}}function Ln(n,t,e,i,r,s){const a=lo.get(n);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Lt(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||!In(u)&&u>=l)&&o.push(c)})}else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Lt(n)?Il(e)&&o.push(a.get("length")):(o.push(a.get(Pi)),sr(n)&&o.push(a.get(Ja)));break;case"delete":Lt(n)||(o.push(a.get(Pi)),sr(n)&&o.push(a.get(Ja)));break;case"set":sr(n)&&o.push(a.get(Pi));break}Ul();for(const l of o)l&&fh(l,4);Nl()}function Kp(n,t){var e;return(e=lo.get(n))==null?void 0:e.get(t)}const Zp=Rl("__proto__,__v_isRef,__isVue"),dh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In)),yc=Jp();function Jp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=$t(this);for(let s=0,a=this.length;s<a;s++)ke(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map($t)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){li(),Ul();const i=$t(this)[t].apply(this,e);return Nl(),ci(),i}}),n}function Qp(n){In(n)||(n=String(n));const t=$t(this);return ke(t,"has",n),t.hasOwnProperty(n)}class ph{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?hm:vh:s?_h:gh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Lt(t);if(!r){if(a&&Yt(yc,e))return Reflect.get(yc,e,i);if(e==="hasOwnProperty")return Qp}const o=Reflect.get(t,e,i);return(In(e)?dh.has(e):Zp(e))||(r||ke(t,"get",e),s)?o:Ee(o)?a&&Il(e)?o:o.value:Qt(o)?r?yh(o):si(o):o}}class mh extends ph{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=vr(s);if(!co(i)&&!vr(i)&&(s=$t(s),i=$t(i)),!Lt(t)&&Ee(s)&&!Ee(i))return l?!1:(s.value=i,!0)}const a=Lt(t)&&Il(e)?Number(e)<t.length:Yt(t,e),o=Reflect.set(t,e,i,r);return t===$t(r)&&(a?ri(i,s)&&Ln(t,"set",e,i):Ln(t,"add",e,i)),o}deleteProperty(t,e){const i=Yt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Ln(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!In(e)||!dh.has(e))&&ke(t,"has",e),i}ownKeys(t){return ke(t,"iterate",Lt(t)?"length":Pi),Reflect.ownKeys(t)}}class tm extends ph{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const em=new mh,nm=new tm,im=new mh(!0);const Ol=n=>n,Fo=n=>Reflect.getPrototypeOf(n);function fs(n,t,e=!1,i=!1){n=n.__v_raw;const r=$t(n),s=$t(t);e||(ri(t,s)&&ke(r,"get",t),ke(r,"get",s));const{has:a}=Fo(r),o=i?Ol:e?Bl:Yr;if(a.call(r,t))return o(n.get(t));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(t)}function hs(n,t=!1){const e=this.__v_raw,i=$t(e),r=$t(n);return t||(ri(n,r)&&ke(i,"has",n),ke(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function ds(n,t=!1){return n=n.__v_raw,!t&&ke($t(n),"iterate",Pi),Reflect.get(n,"size",n)}function bc(n){n=$t(n);const t=$t(this);return Fo(t).has.call(t,n)||(t.add(n),Ln(t,"add",n,n)),this}function Sc(n,t){t=$t(t);const e=$t(this),{has:i,get:r}=Fo(e);let s=i.call(e,n);s||(n=$t(n),s=i.call(e,n));const a=r.call(e,n);return e.set(n,t),s?ri(t,a)&&Ln(e,"set",n,t):Ln(e,"add",n,t),this}function Mc(n){const t=$t(this),{has:e,get:i}=Fo(t);let r=e.call(t,n);r||(n=$t(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Ln(t,"delete",n,void 0),s}function Ec(){const n=$t(this),t=n.size!==0,e=n.clear();return t&&Ln(n,"clear",void 0,void 0),e}function ps(n,t){return function(i,r){const s=this,a=s.__v_raw,o=$t(a),l=t?Ol:n?Bl:Yr;return!n&&ke(o,"iterate",Pi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ms(n,t,e){return function(...i){const r=this.__v_raw,s=$t(r),a=sr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=e?Ol:t?Bl:Yr;return!t&&ke(s,"iterate",l?Ja:Pi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function rm(){const n={get(s){return fs(this,s)},get size(){return ds(this)},has:hs,add:bc,set:Sc,delete:Mc,clear:Ec,forEach:ps(!1,!1)},t={get(s){return fs(this,s,!1,!0)},get size(){return ds(this)},has:hs,add:bc,set:Sc,delete:Mc,clear:Ec,forEach:ps(!1,!0)},e={get(s){return fs(this,s,!0)},get size(){return ds(this,!0)},has(s){return hs.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ps(!0,!1)},i={get(s){return fs(this,s,!0,!0)},get size(){return ds(this,!0)},has(s){return hs.call(this,s,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:ps(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ms(s,!1,!1),e[s]=ms(s,!0,!1),t[s]=ms(s,!1,!0),i[s]=ms(s,!0,!0)}),[n,e,t,i]}const[sm,om,am,lm]=rm();function Fl(n,t){const e=t?n?lm:am:n?om:sm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Yt(e,r)&&r in i?e:i,r,s)}const cm={get:Fl(!1,!1)},um={get:Fl(!1,!0)},fm={get:Fl(!0,!1)};const gh=new WeakMap,_h=new WeakMap,vh=new WeakMap,hm=new WeakMap;function dm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pm(n){return n.__v_skip||!Object.isExtensible(n)?0:dm(Dp(n))}function si(n){return vr(n)?n:kl(n,!1,em,cm,gh)}function xh(n){return kl(n,!1,im,um,_h)}function yh(n){return kl(n,!0,nm,fm,vh)}function kl(n,t,e,i,r){if(!Qt(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=pm(n);if(a===0)return n;const o=new Proxy(n,a===2?i:e);return r.set(n,o),o}function Hr(n){return vr(n)?Hr(n.__v_raw):!!(n&&n.__v_isReactive)}function vr(n){return!!(n&&n.__v_isReadonly)}function co(n){return!!(n&&n.__v_isShallow)}function bh(n){return n?!!n.__v_raw:!1}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function mm(n){return Object.isExtensible(n)&&nh(n,"__v_skip",!0),n}const Yr=n=>Qt(n)?si(n):n,Bl=n=>Qt(n)?yh(n):n;class Sh{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Dl(()=>t(this._value),()=>to(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=$t(this);return(!t._cacheable||t.effect.dirty)&&ri(t._value,t._value=t.effect.run())&&to(t,4),Mh(t),t.effect._dirtyLevel>=2&&to(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function gm(n,t,e=!1){let i,r;const s=Ut(n);return s?(i=n,r=Je):(i=n.get,r=n.set),new Sh(i,r,s||!r,e)}function Mh(n){var t;Qn&&Ci&&(n=$t(n),uh(Ci,(t=n.dep)!=null?t:n.dep=hh(()=>n.dep=void 0,n instanceof Sh?n:void 0)))}function to(n,t=4,e){n=$t(n);const i=n.dep;i&&fh(i,t)}function Ee(n){return!!(n&&n.__v_isRef===!0)}function ln(n){return Eh(n,!1)}function wc(n){return Eh(n,!0)}function Eh(n,t){return Ee(n)?n:new _m(n,t)}class _m{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:$t(t),this._value=e?t:Yr(t)}get value(){return Mh(this),this._value}set value(t){const e=this.__v_isShallow||co(t)||vr(t);t=e?t:$t(t),ri(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Yr(t),to(this,4))}}function Kt(n){return Ee(n)?n.value:n}const vm={get:(n,t,e)=>Kt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Ee(r)&&!Ee(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function wh(n){return Hr(n)?n:new Proxy(n,vm)}class xm{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Kp($t(this._object),this._key)}}class ym{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function bm(n,t,e){return Ee(n)?n:Ut(n)?new ym(n):Qt(n)&&arguments.length>1?Sm(n,t,e):ln(n)}function Sm(n,t,e){const i=n[t];return Ee(i)?i:new xm(n,t,e)}/**
* @vue/runtime-core v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ti(n,t,e,i){try{return i?n(...i):n()}catch(r){Ar(r,t,e)}}function cn(n,t,e,i){if(Ut(n)){const r=ti(n,t,e,i);return r&&Ll(r)&&r.catch(s=>{Ar(s,t,e)}),r}if(Lt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(cn(n[s],t,e,i));return r}}function Ar(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){li(),ti(l,null,10,[n,a,o]),ci();return}}Mm(n,e,r,i)}function Mm(n,t,e,i=!0){console.error(n)}let $r=!1,Qa=!1;const Ce=[];let pn=0;const ar=[];let Xn=null,Si=0;const Th=Promise.resolve();let zl=null;function Hl(n){const t=zl||Th;return n?t.then(this?n.bind(this):n):t}function Em(n){let t=pn+1,e=Ce.length;for(;t<e;){const i=t+e>>>1,r=Ce[i],s=Kr(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function ko(n){(!Ce.length||!Ce.includes(n,$r&&n.allowRecurse?pn+1:pn))&&(n.id==null?Ce.push(n):Ce.splice(Em(n.id),0,n),Ah())}function Ah(){!$r&&!Qa&&(Qa=!0,zl=Th.then(Rh))}function wm(n){const t=Ce.indexOf(n);t>pn&&Ce.splice(t,1)}function tl(n){Lt(n)?ar.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?Si+1:Si))&&ar.push(n),Ah()}function Tc(n,t,e=$r?pn+1:0){for(;e<Ce.length;e++){const i=Ce[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Ce.splice(e,1),e--,i()}}}function uo(n){if(ar.length){const t=[...new Set(ar)].sort((e,i)=>Kr(e)-Kr(i));if(ar.length=0,Xn){Xn.push(...t);return}for(Xn=t,Si=0;Si<Xn.length;Si++)Xn[Si]();Xn=null,Si=0}}const Kr=n=>n.id==null?1/0:n.id,Tm=(n,t)=>{const e=Kr(n)-Kr(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Rh(n){Qa=!1,$r=!0,Ce.sort(Tm);try{for(pn=0;pn<Ce.length;pn++){const t=Ce[pn];t&&t.active!==!1&&ti(t,null,14)}}finally{pn=0,Ce.length=0,uo(),$r=!1,zl=null,(Ce.length||ar.length)&&Rh()}}function Am(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ee;let r=e;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||ee;h&&(r=e.map(d=>le(d)?d.trim():d)),f&&(r=e.map($a))}let o,l=i[o=ea(t)]||i[o=ea(xn(t))];!l&&s&&(l=i[o=ea(Tr(t))]),l&&cn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,cn(c,n,6,r)}}function Ch(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ut(n)){const l=c=>{const u=Ch(c,t,!0);u&&(o=!0,be(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Qt(n)&&i.set(n,null),null):(Lt(s)?s.forEach(l=>a[l]=null):be(a,s),Qt(n)&&i.set(n,a),a)}function Bo(n,t){return!n||!ns(t)?!1:(t=t.slice(2).replace(/Once$/,""),Yt(n,t[0].toLowerCase()+t.slice(1))||Yt(n,Tr(t))||Yt(n,t))}let he=null,zo=null;function fo(n){const t=he;return he=n,zo=n&&n.type.__scopeId||null,t}function uT(n){zo=n}function fT(){zo=null}function Vr(n,t=he,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Bc(-1);const s=fo(t);let a;try{a=n(...r)}finally{fo(s),i._d&&Bc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ia(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:g}=n,m=fo(n);let p,S;try{if(e.shapeFlag&4){const E=r||i,C=E;p=Ke(c.call(C,E,u,f,d,h,v)),S=o}else{const E=t;p=Ke(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),S=t.props?o:Cm(o)}}catch(E){Wr.length=0,Ar(E,n,1),p=re(un)}let y=p;if(S&&g!==!1){const E=Object.keys(S),{shapeFlag:C}=y;E.length&&C&7&&(s&&E.some(Cl)&&(S=Pm(S,s)),y=br(y,S))}return e.dirs&&(y=br(y),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),p=y,fo(m),p}function Rm(n,t=!0){let e;for(let i=0;i<n.length;i++){const r=n[i];if(Qr(r)){if(r.type!==un||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Cm=n=>{let t;for(const e in n)(e==="class"||e==="style"||ns(e))&&((t||(t={}))[e]=n[e]);return t},Pm=(n,t)=>{const e={};for(const i in n)(!Cl(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Lm(n,t,e){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ac(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Bo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Ac(i,a,c):!0:!!a;return!1}function Ac(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!Bo(e,s))return!0}return!1}function Vl({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Ph="components";function hT(n,t){return Ih(Ph,n,!0,t)||n}const Lh=Symbol.for("v-ndc");function Im(n){return le(n)?Ih(Ph,n,!1)||n:n||Lh}function Ih(n,t,e=!0,i=!1){const r=he||me;if(r){const s=r.type;{const o=Pg(s,!1);if(o&&(o===t||o===xn(t)||o===Do(xn(t))))return s}const a=Rc(r[n]||s[n],t)||Rc(r.appContext[n],t);return!a&&i?s:a}}function Rc(n,t){return n&&(n[t]||n[xn(t)]||n[Do(xn(t))])}const Dm=n=>n.__isSuspense;let el=0;const Um={name:"Suspense",__isSuspense:!0,process(n,t,e,i,r,s,a,o,l,c){if(n==null)Om(t,e,i,r,s,a,o,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){t.suspense=n.suspense,t.suspense.vnode=t,t.el=n.el;return}Fm(n,t,e,i,r,a,o,l,c)}},hydrate:km,create:Gl,normalize:Bm},Nm=Um;function Zr(n,t){const e=n.props&&n.props[t];Ut(e)&&e()}function Om(n,t,e,i,r,s,a,o,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=Gl(n,r,i,t,f,e,s,a,o,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,s,a),h.deps>0?(Zr(n,"onPending"),Zr(n,"onFallback"),c(null,n.ssFallback,t,e,i,null,s,a),lr(h,n.ssFallback)):h.resolve(!1,!0)}function Fm(n,t,e,i,r,s,a,o,{p:l,um:c,o:{createElement:u}}){const f=t.suspense=n.suspense;f.vnode=t,t.el=n.el;const h=t.ssContent,d=t.ssFallback,{activeBranch:v,pendingBranch:g,isInFallback:m,isHydrating:p}=f;if(g)f.pendingBranch=h,Kn(h,g)?(l(g,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():m&&(p||(l(v,d,e,i,r,null,s,a,o),lr(f,d)))):(f.pendingId=el++,p?(f.isHydrating=!1,f.activeBranch=g):c(g,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():(l(v,d,e,i,r,null,s,a,o),lr(f,d))):v&&Kn(h,v)?(l(v,h,e,i,r,f,s,a,o),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0&&f.resolve()));else if(v&&Kn(h,v))l(v,h,e,i,r,f,s,a,o),lr(f,h);else if(Zr(t,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=el++,l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0)f.resolve();else{const{timeout:S,pendingId:y}=f;S>0?setTimeout(()=>{f.pendingId===y&&f.fallback(d)},S):S===0&&f.fallback(d)}}function Gl(n,t,e,i,r,s,a,o,l,c,u=!1){const{p:f,m:h,um:d,n:v,o:{parentNode:g,remove:m}}=c;let p;const S=zm(n);S&&t!=null&&t.pendingBranch&&(p=t.pendingId,t.deps++);const y=n.props?Op(n.props.timeout):void 0,E=s,C={vnode:n,parent:t,parentComponent:e,namespace:a,container:i,hiddenContainer:r,deps:0,pendingId:el++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,L=!1){const{vnode:z,activeBranch:A,pendingBranch:w,pendingId:G,effects:I,parentComponent:U,container:M}=C;let V=!1;C.isHydrating?C.isHydrating=!1:R||(V=A&&w.transition&&w.transition.mode==="out-in",V&&(A.transition.afterLeave=()=>{G===C.pendingId&&(h(w,M,s===E?v(A):s,0),tl(I))}),A&&(g(A.el)!==C.hiddenContainer&&(s=v(A)),d(A,U,C,!0)),V||h(w,M,s,0)),lr(C,w),C.pendingBranch=null,C.isInFallback=!1;let $=C.parent,X=!1;for(;$;){if($.pendingBranch){$.effects.push(...I),X=!0;break}$=$.parent}!X&&!V&&tl(I),C.effects=[],S&&t&&t.pendingBranch&&p===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),Zr(z,"onResolve")},fallback(R){if(!C.pendingBranch)return;const{vnode:L,activeBranch:z,parentComponent:A,container:w,namespace:G}=C;Zr(L,"onFallback");const I=v(z),U=()=>{C.isInFallback&&(f(null,R,w,I,A,null,G,o,l),lr(C,R))},M=R.transition&&R.transition.mode==="out-in";M&&(z.transition.afterLeave=U),C.isInFallback=!0,d(z,A,null,!0),M||U()},move(R,L,z){C.activeBranch&&h(C.activeBranch,R,L,z),C.container=R},next(){return C.activeBranch&&v(C.activeBranch)},registerDep(R,L){const z=!!C.pendingBranch;z&&C.deps++;const A=R.vnode.el;R.asyncDep.catch(w=>{Ar(w,R,0)}).then(w=>{if(R.isUnmounted||C.isUnmounted||C.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:G}=R;ll(R,w,!1),A&&(G.el=A);const I=!A&&R.subTree.el;L(R,G,g(A||R.subTree.el),A?null:v(R.subTree),C,a,l),I&&m(I),Vl(R,G.el),z&&--C.deps===0&&C.resolve()})},unmount(R,L){C.isUnmounted=!0,C.activeBranch&&d(C.activeBranch,e,R,L),C.pendingBranch&&d(C.pendingBranch,e,R,L)}};return C}function km(n,t,e,i,r,s,a,o,l){const c=t.suspense=Gl(t,i,e,n.parentNode,document.createElement("div"),null,r,s,a,o,!0),u=l(n,c.pendingBranch=t.ssContent,e,c,s,a);return c.deps===0&&c.resolve(!1,!0),u}function Bm(n){const{shapeFlag:t,children:e}=n,i=t&32;n.ssContent=Cc(i?e.default:e),n.ssFallback=i?Cc(e.fallback):re(un)}function Cc(n){let t;if(Ut(n)){const e=yr&&n._c;e&&(n._d=!1,Pe()),n=n(),e&&(n._d=!0,t=Qe,nd())}return Lt(n)&&(n=Rm(n)),n=Ke(n),t&&!n.dynamicChildren&&(n.dynamicChildren=t.filter(e=>e!==n)),n}function Dh(n,t){t&&t.pendingBranch?Lt(n)?t.effects.push(...n):t.effects.push(n):tl(n)}function lr(n,t){n.activeBranch=t;const{vnode:e,parentComponent:i}=n;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;e.el=r,i&&i.subTree===e&&(i.vnode.el=r,Vl(i,r))}function zm(n){var t;return((t=n.props)==null?void 0:t.suspensible)!=null&&n.props.suspensible!==!1}const Hm=Symbol.for("v-scx"),Vm=()=>hr(Hm);function dT(n,t){return Wl(n,null,t)}const gs={};function cr(n,t,e){return Wl(n,t,e)}function Wl(n,t,{immediate:e,deep:i,flush:r,once:s,onTrack:a,onTrigger:o}=ee){if(t&&s){const R=t;t=(...L)=>{R(...L),C()}}const l=me,c=R=>i===!0?R:Ti(R,i===!1?1:void 0);let u,f=!1,h=!1;if(Ee(n)?(u=()=>n.value,f=co(n)):Hr(n)?(u=()=>c(n),f=!0):Lt(n)?(h=!0,f=n.some(R=>Hr(R)||co(R)),u=()=>n.map(R=>{if(Ee(R))return R.value;if(Hr(R))return c(R);if(Ut(R))return ti(R,l,2)})):Ut(n)?t?u=()=>ti(n,l,2):u=()=>(d&&d(),cn(n,l,3,[v])):u=Je,t&&i){const R=u;u=()=>Ti(R())}let d,v=R=>{d=y.onStop=()=>{ti(R,l,4),d=y.onStop=void 0}},g;if(rs)if(v=Je,t?e&&cn(t,l,3,[u(),h?[]:void 0,v]):u(),r==="sync"){const R=Vm();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Je;let m=h?new Array(n.length).fill(gs):gs;const p=()=>{if(!(!y.active||!y.dirty))if(t){const R=y.run();(i||f||(h?R.some((L,z)=>ri(L,m[z])):ri(R,m)))&&(d&&d(),cn(t,l,3,[R,m===gs?void 0:h&&m[0]===gs?[]:m,v]),m=R)}else y.run()};p.allowRecurse=!!t;let S;r==="sync"?S=p:r==="post"?S=()=>Ne(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>ko(p));const y=new Dl(u,Je,S),E=Yp(),C=()=>{y.stop(),E&&Pl(E.effects,y)};return t?e?p():m=y.run():r==="post"?Ne(y.run.bind(y),l&&l.suspense):y.run(),g&&g.push(C),C}function Gm(n,t,e){const i=this.proxy,r=le(n)?n.includes(".")?Uh(i,n):()=>i[n]:n.bind(i,i);let s;Ut(t)?s=t:(s=t.handler,e=t);const a=Li(this),o=Wl(r,s.bind(i),e);return a(),o}function Uh(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Ti(n,t,e=0,i){if(!Qt(n)||n.__v_skip)return n;if(t&&t>0){if(e>=t)return n;e++}if(i=i||new Set,i.has(n))return n;if(i.add(n),Ee(n))Ti(n.value,t,e,i);else if(Lt(n))for(let r=0;r<n.length;r++)Ti(n[r],t,e,i);else if(Lo(n)||sr(n))n.forEach(r=>{Ti(r,t,e,i)});else if(eh(n))for(const r in n)Ti(n[r],t,e,i);return n}function _s(n,t){if(he===null)return n;const e=Vo(he)||he.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,a,o,l=ee]=t[r];s&&(Ut(s)&&(s={mounted:s,updated:s}),s.deep&&Ti(a),i.push({dir:s,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function fn(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(li(),cn(l,e,8,[n.el,o,n,t]),ci())}}/*! #__NO_SIDE_EFFECTS__ */function Rr(n,t){return Ut(n)?be({name:n.name},t,{setup:n}):n}const ur=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Pc(n){Ut(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:i,delay:r=200,timeout:s,suspensible:a=!0,onError:o}=n;let l=null,c,u=0;const f=()=>(u++,l=null,h()),h=()=>{let d;return l||(d=l=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),o)return new Promise((g,m)=>{o(v,()=>g(f()),()=>m(v),u+1)});throw v}).then(v=>d!==l&&l?l:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return Rr({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=me;if(c)return()=>ra(c,d);const v=S=>{l=null,Ar(S,d,13,!i)};if(a&&d.suspense||rs)return h().then(S=>()=>ra(S,d)).catch(S=>(v(S),()=>i?re(i,{error:S}):null));const g=ln(!1),m=ln(),p=ln(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!g.value&&!m.value){const S=new Error(`Async component timed out after ${s}ms.`);v(S),m.value=S}},s),h().then(()=>{g.value=!0,d.parent&&jl(d.parent.vnode)&&(d.parent.effect.dirty=!0,ko(d.parent.update))}).catch(S=>{v(S),m.value=S}),()=>{if(g.value&&c)return ra(c,d);if(m.value&&i)return re(i,{error:m.value});if(e&&!p.value)return re(e)}}})}function ra(n,t){const{ref:e,props:i,children:r,ce:s}=t.vnode,a=re(n,i,r);return a.ref=e,a.ce=s,delete t.vnode.ce,a}const jl=n=>n.type.__isKeepAlive;function Wm(n,t){Nh(n,"a",t)}function jm(n,t){Nh(n,"da",t)}function Nh(n,t,e=me){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ho(t,i,e),e){let r=e.parent;for(;r&&r.parent;)jl(r.parent.vnode)&&Xm(i,t,e,r),r=r.parent}}function Xm(n,t,e,i){const r=Ho(t,n,i,!0);Xl(()=>{Pl(i[t],r)},e)}function Ho(n,t,e=me,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;li();const o=Li(e),l=cn(t,e,n,a);return o(),ci(),l});return i?r.unshift(s):r.push(s),s}}const Un=n=>(t,e=me)=>(!rs||n==="sp")&&Ho(n,(...i)=>t(...i),e),qm=Un("bm"),Oh=Un("m"),Ym=Un("bu"),$m=Un("u"),Km=Un("bum"),Xl=Un("um"),Zm=Un("sp"),Jm=Un("rtg"),Qm=Un("rtc");function Fh(n,t=me){Ho("ec",n,t)}function kh(n,t,e={},i,r){if(he.isCE||he.parent&&ur(he.parent)&&he.parent.isCE)return re("slot",e,i);let s=n[t];s&&s._c&&(s._d=!1),Pe();const a=s&&Bh(s(e)),o=mn(Ge,{key:e.key||a&&a.key||`_${t}`},a||[],a&&n._===1?64:-2);return o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function Bh(n){return n.some(t=>Qr(t)?!(t.type===un||t.type===Ge&&!Bh(t.children)):!0)?n:null}const nl=n=>n?cd(n)?Vo(n)||n.proxy:nl(n.parent):null,Gr=be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nl(n.parent),$root:n=>nl(n.root),$emit:n=>n.emit,$options:n=>ql(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,ko(n.update)}),$nextTick:n=>n.n||(n.n=Hl.bind(n.proxy)),$watch:n=>Gm.bind(n)}),sa=(n,t)=>n!==ee&&!n.__isScriptSetup&&Yt(n,t),tg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(sa(i,t))return a[t]=1,i[t];if(r!==ee&&Yt(r,t))return a[t]=2,r[t];if((c=n.propsOptions[0])&&Yt(c,t))return a[t]=3,s[t];if(e!==ee&&Yt(e,t))return a[t]=4,e[t];il&&(a[t]=0)}}const u=Gr[t];let f,h;if(u)return t==="$attrs"&&ke(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[t]))return f;if(e!==ee&&Yt(e,t))return a[t]=4,e[t];if(h=l.config.globalProperties,Yt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return sa(r,t)?(r[t]=e,!0):i!==ee&&Yt(i,t)?(i[t]=e,!0):Yt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!e[a]||n!==ee&&Yt(n,a)||sa(t,a)||(o=s[0])&&Yt(o,a)||Yt(i,a)||Yt(Gr,a)||Yt(r.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Yt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Lc(n){return Lt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}function eg(n){const t=ld();let e=n();return al(),Ll(e)&&(e=e.catch(i=>{throw Li(t),i})),[e,()=>Li(t)]}let il=!0;function ng(n){const t=ql(n),e=n.proxy,i=n.ctx;il=!1,t.beforeCreate&&Ic(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:E,render:C,renderTracked:R,renderTriggered:L,errorCaptured:z,serverPrefetch:A,expose:w,inheritAttrs:G,components:I,directives:U,filters:M}=t;if(c&&ig(c,i,null),a)for(const X in a){const W=a[X];Ut(W)&&(i[X]=W.bind(e))}if(r){const X=r.call(e,e);Qt(X)&&(n.data=si(X))}if(il=!0,s)for(const X in s){const W=s[X],Q=Ut(W)?W.bind(e,e):Ut(W.get)?W.get.bind(e,e):Je,lt=!Ut(W)&&Ut(W.set)?W.set.bind(e):Je,Y=Kl({get:Q,set:lt});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Y.value,set:Z=>Y.value=Z})}if(o)for(const X in o)zh(o[X],i,e,X);if(l){const X=Ut(l)?l.call(e):l;Reflect.ownKeys(X).forEach(W=>{Vh(W,X[W])})}u&&Ic(u,n,"c");function $(X,W){Lt(W)?W.forEach(Q=>X(Q.bind(e))):W&&X(W.bind(e))}if($(qm,f),$(Oh,h),$(Ym,d),$($m,v),$(Wm,g),$(jm,m),$(Fh,z),$(Qm,R),$(Jm,L),$(Km,S),$(Xl,E),$(Zm,A),Lt(w))if(w.length){const X=n.exposed||(n.exposed={});w.forEach(W=>{Object.defineProperty(X,W,{get:()=>e[W],set:Q=>e[W]=Q})})}else n.exposed||(n.exposed={});C&&n.render===Je&&(n.render=C),G!=null&&(n.inheritAttrs=G),I&&(n.components=I),U&&(n.directives=U)}function ig(n,t,e=Je){Lt(n)&&(n=rl(n));for(const i in n){const r=n[i];let s;Qt(r)?"default"in r?s=hr(r.from||i,r.default,!0):s=hr(r.from||i):s=hr(r),Ee(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function Ic(n,t,e){cn(Lt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function zh(n,t,e,i){const r=i.includes(".")?Uh(e,i):()=>e[i];if(le(n)){const s=t[n];Ut(s)&&cr(r,s)}else if(Ut(n))cr(r,n.bind(e));else if(Qt(n))if(Lt(n))n.forEach(s=>zh(s,t,e,i));else{const s=Ut(n.handler)?n.handler.bind(e):t[n.handler];Ut(s)&&cr(r,s,n)}}function ql(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>ho(l,c,a,!0)),ho(l,t,a)),Qt(t)&&s.set(t,l),l}function ho(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&ho(n,s,e,!0),r&&r.forEach(a=>ho(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=rg[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const rg={data:Dc,props:Uc,emits:Uc,methods:Fr,computed:Fr,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Fr,directives:Fr,watch:og,provide:Dc,inject:sg};function Dc(n,t){return t?n?function(){return be(Ut(n)?n.call(this,this):n,Ut(t)?t.call(this,this):t)}:t:n}function sg(n,t){return Fr(rl(n),rl(t))}function rl(n){if(Lt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ie(n,t){return n?[...new Set([].concat(n,t))]:t}function Fr(n,t){return n?be(Object.create(null),n,t):t}function Uc(n,t){return n?Lt(n)&&Lt(t)?[...new Set([...n,...t])]:be(Object.create(null),Lc(n),Lc(t??{})):t}function og(n,t){if(!n)return t;if(!t)return n;const e=be(Object.create(null),n);for(const i in t)e[i]=Ie(n[i],t[i]);return e}function Hh(){return{app:null,config:{isNativeTag:Lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ag=0;function lg(n,t){return function(i,r=null){Ut(i)||(i=be({},i)),r!=null&&!Qt(r)&&(r=null);const s=Hh(),a=new WeakSet;let o=!1;const l=s.app={_uid:ag++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:fd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ut(c.install)?(a.add(c),c.install(l,...u)):Ut(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=re(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Vo(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=fr;fr=l;try{return c()}finally{fr=u}}};return l}}let fr=null;function Vh(n,t){if(me){let e=me.provides;const i=me.parent&&me.parent.provides;i===e&&(e=me.provides=Object.create(i)),e[n]=t}}function hr(n,t,e=!1){const i=me||he;if(i||fr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:fr._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ut(t)?t.call(i&&i.proxy):t}}function Gh(){return!!(me||he||fr)}const Wh=Object.create(null),jh=()=>Object.create(Wh),Xh=n=>Object.getPrototypeOf(n)===Wh;function cg(n,t,e,i=!1){const r={},s=jh();n.propsDefaults=Object.create(null),qh(n,t,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);e?n.props=i?r:xh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function ug(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$t(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Bo(n.emitsOptions,h))continue;const d=t[h];if(l)if(Yt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=xn(h);r[v]=sl(l,o,v,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{qh(n,t,r,s)&&(c=!0);let u;for(const f in o)(!t||!Yt(t,f)&&((u=Tr(f))===f||!Yt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=sl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!t||!Yt(t,f))&&(delete s[f],c=!0)}c&&Ln(n.attrs,"set","")}function qh(n,t,e,i){const[r,s]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(or(l))continue;const c=t[l];let u;r&&Yt(r,u=xn(l))?!s||!s.includes(u)?e[u]=c:(o||(o={}))[u]=c:Bo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$t(e),c=o||ee;for(let u=0;u<s.length;u++){const f=s[u];e[f]=sl(r,l,f,c[f],n,!Yt(c,f))}}return a}function sl(n,t,e,i,r,s){const a=n[e];if(a!=null){const o=Yt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ut(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=Li(r);i=c[e]=l.call(null,t),u()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Tr(e))&&(i=!0))}return i}function Yh(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ut(n)){const u=f=>{l=!0;const[h,d]=Yh(f,t,!0);be(a,h),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Qt(n)&&i.set(n,rr),rr;if(Lt(s))for(let u=0;u<s.length;u++){const f=xn(s[u]);Nc(f)&&(a[f]=ee)}else if(s)for(const u in s){const f=xn(u);if(Nc(f)){const h=s[u],d=a[f]=Lt(h)||Ut(h)?{type:h}:be({},h);if(d){const v=kc(Boolean,d.type),g=kc(String,d.type);d[0]=v>-1,d[1]=g<0||v<g,(v>-1||Yt(d,"default"))&&o.push(f)}}}const c=[a,o];return Qt(n)&&i.set(n,c),c}function Nc(n){return n[0]!=="$"&&!or(n)}function Oc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Fc(n,t){return Oc(n)===Oc(t)}function kc(n,t){return Lt(t)?t.findIndex(e=>Fc(e,n)):Ut(t)&&Fc(t,n)?0:-1}const $h=n=>n[0]==="_"||n==="$stable",Yl=n=>Lt(n)?n.map(Ke):[Ke(n)],fg=(n,t,e)=>{if(t._n)return t;const i=Vr((...r)=>Yl(t(...r)),e);return i._c=!1,i},Kh=(n,t,e)=>{const i=n._ctx;for(const r in n){if($h(r))continue;const s=n[r];if(Ut(s))t[r]=fg(r,s,i);else if(s!=null){const a=Yl(s);t[r]=()=>a}}},Zh=(n,t)=>{const e=Yl(t);n.slots.default=()=>e},hg=(n,t)=>{const e=n.slots=jh();if(n.vnode.shapeFlag&32){const i=t._;i?(be(e,t),nh(e,"_",i)):Kh(t,e)}else t&&Zh(n,t)},dg=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,a=ee;if(i.shapeFlag&32){const o=t._;o?e&&o===1?s=!1:(be(r,t),!e&&o===1&&delete r._):(s=!t.$stable,Kh(t,r)),a=t}else t&&(Zh(n,t),a={default:1});if(s)for(const o in r)!$h(o)&&a[o]==null&&delete r[o]};function po(n,t,e,i,r=!1){if(Lt(n)){n.forEach((h,d)=>po(h,t&&(Lt(t)?t[d]:t),e,i,r));return}if(ur(i)&&!r)return;const s=i.shapeFlag&4?Vo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=t&&t.r,u=o.refs===ee?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(le(c)?(u[c]=null,Yt(f,c)&&(f[c]=null)):Ee(c)&&(c.value=null)),Ut(l))ti(l,o,12,[a,u]);else{const h=le(l),d=Ee(l);if(h||d){const v=()=>{if(n.f){const g=h?Yt(f,l)?f[l]:u[l]:l.value;r?Lt(g)&&Pl(g,s):Lt(g)?g.includes(s)||g.push(s):h?(u[l]=[s],Yt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Yt(f,l)&&(f[l]=a)):d&&(l.value=a,n.k&&(u[n.k]=a))};a?(v.id=-1,Ne(v,e)):v()}}}let kn=!1;const pg=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",mg=n=>n.namespaceURI.includes("MathML"),vs=n=>{if(pg(n))return"svg";if(mg(n))return"mathml"},xs=n=>n.nodeType===8;function gg(n){const{mt:t,p:e,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:c}}=n,u=(y,E)=>{if(!E.hasChildNodes()){e(null,y,E),uo(),E._vnode=y;return}kn=!1,f(E.firstChild,y,null,null,null),uo(),E._vnode=y,kn&&console.error("Hydration completed but contains mismatches.")},f=(y,E,C,R,L,z=!1)=>{z=z||!!E.dynamicChildren;const A=xs(y)&&y.data==="[",w=()=>g(y,E,C,R,L,A),{type:G,ref:I,shapeFlag:U,patchFlag:M}=E;let V=y.nodeType;E.el=y,M===-2&&(z=!1,E.dynamicChildren=null);let $=null;switch(G){case xr:V!==3?E.children===""?(l(E.el=r(""),a(y),y),$=y):$=w():(y.data!==E.children&&(kn=!0,y.data=E.children),$=s(y));break;case un:S(y)?($=s(y),p(E.el=y.content.firstChild,y,C)):V!==8||A?$=w():$=s(y);break;case eo:if(A&&(y=s(y),V=y.nodeType),V===1||V===3){$=y;const X=!E.children.length;for(let W=0;W<E.staticCount;W++)X&&(E.children+=$.nodeType===1?$.outerHTML:$.data),W===E.staticCount-1&&(E.anchor=$),$=s($);return A?s($):$}else w();break;case Ge:A?$=v(y,E,C,R,L,z):$=w();break;default:if(U&1)(V!==1||E.type.toLowerCase()!==y.tagName.toLowerCase())&&!S(y)?$=w():$=h(y,E,C,R,L,z);else if(U&6){E.slotScopeIds=L;const X=a(y);if(A?$=m(y):xs(y)&&y.data==="teleport start"?$=m(y,y.data,"teleport end"):$=s(y),t(E,X,null,C,R,vs(X),z),ur(E)){let W;A?(W=re(Ge),W.anchor=$?$.previousSibling:X.lastChild):W=y.nodeType===3?od(""):re("div"),W.el=y,E.component.subTree=W}}else U&64?V!==8?$=w():$=E.type.hydrate(y,E,C,R,L,z,n,d):U&128&&($=E.type.hydrate(y,E,C,R,vs(a(y)),L,z,n,f))}return I!=null&&po(I,null,R,E),$},h=(y,E,C,R,L,z)=>{z=z||!!E.dynamicChildren;const{type:A,props:w,patchFlag:G,shapeFlag:I,dirs:U,transition:M}=E,V=A==="input"||A==="option";if(V||G!==-1){U&&fn(E,null,C,"created");let $=!1;if(S(y)){$=Qh(R,M)&&C&&C.vnode.props&&C.vnode.props.appear;const W=y.content.firstChild;$&&M.beforeEnter(W),p(W,y,C),E.el=y=W}if(I&16&&!(w&&(w.innerHTML||w.textContent))){let W=d(y.firstChild,E,y,C,R,L,z);for(;W;){kn=!0;const Q=W;W=W.nextSibling,o(Q)}}else I&8&&y.textContent!==E.children&&(kn=!0,y.textContent=E.children);if(w)if(V||!z||G&48)for(const W in w)(V&&(W.endsWith("value")||W==="indeterminate")||ns(W)&&!or(W)||W[0]===".")&&i(y,W,null,w[W],void 0,void 0,C);else w.onClick&&i(y,"onClick",null,w.onClick,void 0,void 0,C);let X;(X=w&&w.onVnodeBeforeMount)&&$e(X,C,E),U&&fn(E,null,C,"beforeMount"),((X=w&&w.onVnodeMounted)||U||$)&&Dh(()=>{X&&$e(X,C,E),$&&M.enter(y),U&&fn(E,null,C,"mounted")},R)}return y.nextSibling},d=(y,E,C,R,L,z,A)=>{A=A||!!E.dynamicChildren;const w=E.children,G=w.length;for(let I=0;I<G;I++){const U=A?w[I]:w[I]=Ke(w[I]);if(y)y=f(y,U,R,L,z,A);else{if(U.type===xr&&!U.children)continue;kn=!0,e(null,U,C,null,R,L,vs(C),z)}}return y},v=(y,E,C,R,L,z)=>{const{slotScopeIds:A}=E;A&&(L=L?L.concat(A):A);const w=a(y),G=d(s(y),E,w,C,R,L,z);return G&&xs(G)&&G.data==="]"?s(E.anchor=G):(kn=!0,l(E.anchor=c("]"),w,G),G)},g=(y,E,C,R,L,z)=>{if(kn=!0,E.el=null,z){const G=m(y);for(;;){const I=s(y);if(I&&I!==G)o(I);else break}}const A=s(y),w=a(y);return o(y),e(null,E,w,A,C,R,vs(w),L),A},m=(y,E="[",C="]")=>{let R=0;for(;y;)if(y=s(y),y&&xs(y)&&(y.data===E&&R++,y.data===C)){if(R===0)return s(y);R--}return y},p=(y,E,C)=>{const R=E.parentNode;R&&R.replaceChild(y,E);let L=C;for(;L;)L.vnode.el===E&&(L.vnode.el=L.subTree.el=y),L=L.parent},S=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[u,f]}const Ne=Dh;function _g(n){return Jh(n)}function vg(n){return Jh(n,gg)}function Jh(n,t){const e=ih();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Je,insertStaticContent:v}=n,g=(k,x,F,H=null,b=null,_=null,P=void 0,N=null,B=!!x.dynamicChildren)=>{if(k===x)return;k&&!Kn(k,x)&&(H=pt(k),Z(k,b,_,!0),k=null),x.patchFlag===-2&&(B=!1,x.dynamicChildren=null);const{type:D,ref:q,shapeFlag:j}=x;switch(D){case xr:m(k,x,F,H);break;case un:p(k,x,F,H);break;case eo:k==null&&S(x,F,H,P);break;case Ge:I(k,x,F,H,b,_,P,N,B);break;default:j&1?C(k,x,F,H,b,_,P,N,B):j&6?U(k,x,F,H,b,_,P,N,B):(j&64||j&128)&&D.process(k,x,F,H,b,_,P,N,B,Tt)}q!=null&&b&&po(q,k&&k.ref,_,x||k,!x)},m=(k,x,F,H)=>{if(k==null)i(x.el=o(x.children),F,H);else{const b=x.el=k.el;x.children!==k.children&&c(b,x.children)}},p=(k,x,F,H)=>{k==null?i(x.el=l(x.children||""),F,H):x.el=k.el},S=(k,x,F,H)=>{[k.el,k.anchor]=v(k.children,x,F,H,k.el,k.anchor)},y=({el:k,anchor:x},F,H)=>{let b;for(;k&&k!==x;)b=h(k),i(k,F,H),k=b;i(x,F,H)},E=({el:k,anchor:x})=>{let F;for(;k&&k!==x;)F=h(k),r(k),k=F;r(x)},C=(k,x,F,H,b,_,P,N,B)=>{x.type==="svg"?P="svg":x.type==="math"&&(P="mathml"),k==null?R(x,F,H,b,_,P,N,B):A(k,x,b,_,P,N,B)},R=(k,x,F,H,b,_,P,N)=>{let B,D;const{props:q,shapeFlag:j,transition:K,dirs:rt}=k;if(B=k.el=a(k.type,_,q&&q.is,q),j&8?u(B,k.children):j&16&&z(k.children,B,null,H,b,oa(k,_),P,N),rt&&fn(k,null,H,"created"),L(B,k,k.scopeId,P,H),q){for(const ft in q)ft!=="value"&&!or(ft)&&s(B,ft,null,q[ft],_,k.children,H,b,dt);"value"in q&&s(B,"value",null,q.value,_),(D=q.onVnodeBeforeMount)&&$e(D,H,k)}rt&&fn(k,null,H,"beforeMount");const ot=Qh(b,K);ot&&K.beforeEnter(B),i(B,x,F),((D=q&&q.onVnodeMounted)||ot||rt)&&Ne(()=>{D&&$e(D,H,k),ot&&K.enter(B),rt&&fn(k,null,H,"mounted")},b)},L=(k,x,F,H,b)=>{if(F&&d(k,F),H)for(let _=0;_<H.length;_++)d(k,H[_]);if(b){let _=b.subTree;if(x===_){const P=b.vnode;L(k,P,P.scopeId,P.slotScopeIds,b.parent)}}},z=(k,x,F,H,b,_,P,N,B=0)=>{for(let D=B;D<k.length;D++){const q=k[D]=N?qn(k[D]):Ke(k[D]);g(null,q,x,F,H,b,_,P,N)}},A=(k,x,F,H,b,_,P)=>{const N=x.el=k.el;let{patchFlag:B,dynamicChildren:D,dirs:q}=x;B|=k.patchFlag&16;const j=k.props||ee,K=x.props||ee;let rt;if(F&&di(F,!1),(rt=K.onVnodeBeforeUpdate)&&$e(rt,F,x,k),q&&fn(x,k,F,"beforeUpdate"),F&&di(F,!0),D?w(k.dynamicChildren,D,N,F,H,oa(x,b),_):P||W(k,x,N,null,F,H,oa(x,b),_,!1),B>0){if(B&16)G(N,x,j,K,F,H,b);else if(B&2&&j.class!==K.class&&s(N,"class",null,K.class,b),B&4&&s(N,"style",j.style,K.style,b),B&8){const ot=x.dynamicProps;for(let ft=0;ft<ot.length;ft++){const _t=ot[ft],mt=j[_t],xt=K[_t];(xt!==mt||_t==="value")&&s(N,_t,mt,xt,b,k.children,F,H,dt)}}B&1&&k.children!==x.children&&u(N,x.children)}else!P&&D==null&&G(N,x,j,K,F,H,b);((rt=K.onVnodeUpdated)||q)&&Ne(()=>{rt&&$e(rt,F,x,k),q&&fn(x,k,F,"updated")},H)},w=(k,x,F,H,b,_,P)=>{for(let N=0;N<x.length;N++){const B=k[N],D=x[N],q=B.el&&(B.type===Ge||!Kn(B,D)||B.shapeFlag&70)?f(B.el):F;g(B,D,q,null,H,b,_,P,!0)}},G=(k,x,F,H,b,_,P)=>{if(F!==H){if(F!==ee)for(const N in F)!or(N)&&!(N in H)&&s(k,N,F[N],null,P,x.children,b,_,dt);for(const N in H){if(or(N))continue;const B=H[N],D=F[N];B!==D&&N!=="value"&&s(k,N,D,B,P,x.children,b,_,dt)}"value"in H&&s(k,"value",F.value,H.value,P)}},I=(k,x,F,H,b,_,P,N,B)=>{const D=x.el=k?k.el:o(""),q=x.anchor=k?k.anchor:o("");let{patchFlag:j,dynamicChildren:K,slotScopeIds:rt}=x;rt&&(N=N?N.concat(rt):rt),k==null?(i(D,F,H),i(q,F,H),z(x.children||[],F,q,b,_,P,N,B)):j>0&&j&64&&K&&k.dynamicChildren?(w(k.dynamicChildren,K,F,b,_,P,N),(x.key!=null||b&&x===b.subTree)&&td(k,x,!0)):W(k,x,F,q,b,_,P,N,B)},U=(k,x,F,H,b,_,P,N,B)=>{x.slotScopeIds=N,k==null?x.shapeFlag&512?b.ctx.activate(x,F,H,P,B):M(x,F,H,b,_,P,B):V(k,x,B)},M=(k,x,F,H,b,_,P)=>{const N=k.component=wg(k,H,b);if(jl(k)&&(N.ctx.renderer=Tt),Tg(N),N.asyncDep){if(b&&b.registerDep(N,$),!k.el){const B=N.subTree=re(un);p(null,B,x,F)}}else $(N,k,x,F,b,_,P)},V=(k,x,F)=>{const H=x.component=k.component;if(Lm(k,x,F))if(H.asyncDep&&!H.asyncResolved){X(H,x,F);return}else H.next=x,wm(H.update),H.effect.dirty=!0,H.update();else x.el=k.el,H.vnode=x},$=(k,x,F,H,b,_,P)=>{const N=()=>{if(k.isMounted){let{next:q,bu:j,u:K,parent:rt,vnode:ot}=k;{const It=ed(k);if(It){q&&(q.el=ot.el,X(k,q,P)),It.asyncDep.then(()=>{k.isUnmounted||N()});return}}let ft=q,_t;di(k,!1),q?(q.el=ot.el,X(k,q,P)):q=ot,j&&Qs(j),(_t=q.props&&q.props.onVnodeBeforeUpdate)&&$e(_t,rt,q,ot),di(k,!0);const mt=ia(k),xt=k.subTree;k.subTree=mt,g(xt,mt,f(xt.el),pt(xt),k,b,_),q.el=mt.el,ft===null&&Vl(k,mt.el),K&&Ne(K,b),(_t=q.props&&q.props.onVnodeUpdated)&&Ne(()=>$e(_t,rt,q,ot),b)}else{let q;const{el:j,props:K}=x,{bm:rt,m:ot,parent:ft}=k,_t=ur(x);if(di(k,!1),rt&&Qs(rt),!_t&&(q=K&&K.onVnodeBeforeMount)&&$e(q,ft,x),di(k,!0),j&&Pt){const mt=()=>{k.subTree=ia(k),Pt(j,k.subTree,k,b,null)};_t?x.type.__asyncLoader().then(()=>!k.isUnmounted&&mt()):mt()}else{const mt=k.subTree=ia(k);g(null,mt,F,H,k,b,_),x.el=mt.el}if(ot&&Ne(ot,b),!_t&&(q=K&&K.onVnodeMounted)){const mt=x;Ne(()=>$e(q,ft,mt),b)}(x.shapeFlag&256||ft&&ur(ft.vnode)&&ft.vnode.shapeFlag&256)&&k.a&&Ne(k.a,b),k.isMounted=!0,x=F=H=null}},B=k.effect=new Dl(N,Je,()=>ko(D),k.scope),D=k.update=()=>{B.dirty&&B.run()};D.id=k.uid,di(k,!0),D()},X=(k,x,F)=>{x.component=k;const H=k.vnode.props;k.vnode=x,k.next=null,ug(k,x.props,H,F),dg(k,x.children,F),li(),Tc(k),ci()},W=(k,x,F,H,b,_,P,N,B=!1)=>{const D=k&&k.children,q=k?k.shapeFlag:0,j=x.children,{patchFlag:K,shapeFlag:rt}=x;if(K>0){if(K&128){lt(D,j,F,H,b,_,P,N,B);return}else if(K&256){Q(D,j,F,H,b,_,P,N,B);return}}rt&8?(q&16&&dt(D,b,_),j!==D&&u(F,j)):q&16?rt&16?lt(D,j,F,H,b,_,P,N,B):dt(D,b,_,!0):(q&8&&u(F,""),rt&16&&z(j,F,H,b,_,P,N,B))},Q=(k,x,F,H,b,_,P,N,B)=>{k=k||rr,x=x||rr;const D=k.length,q=x.length,j=Math.min(D,q);let K;for(K=0;K<j;K++){const rt=x[K]=B?qn(x[K]):Ke(x[K]);g(k[K],rt,F,null,b,_,P,N,B)}D>q?dt(k,b,_,!0,!1,j):z(x,F,H,b,_,P,N,B,j)},lt=(k,x,F,H,b,_,P,N,B)=>{let D=0;const q=x.length;let j=k.length-1,K=q-1;for(;D<=j&&D<=K;){const rt=k[D],ot=x[D]=B?qn(x[D]):Ke(x[D]);if(Kn(rt,ot))g(rt,ot,F,null,b,_,P,N,B);else break;D++}for(;D<=j&&D<=K;){const rt=k[j],ot=x[K]=B?qn(x[K]):Ke(x[K]);if(Kn(rt,ot))g(rt,ot,F,null,b,_,P,N,B);else break;j--,K--}if(D>j){if(D<=K){const rt=K+1,ot=rt<q?x[rt].el:H;for(;D<=K;)g(null,x[D]=B?qn(x[D]):Ke(x[D]),F,ot,b,_,P,N,B),D++}}else if(D>K)for(;D<=j;)Z(k[D],b,_,!0),D++;else{const rt=D,ot=D,ft=new Map;for(D=ot;D<=K;D++){const Rt=x[D]=B?qn(x[D]):Ke(x[D]);Rt.key!=null&&ft.set(Rt.key,D)}let _t,mt=0;const xt=K-ot+1;let It=!1,At=0;const Ft=new Array(xt);for(D=0;D<xt;D++)Ft[D]=0;for(D=rt;D<=j;D++){const Rt=k[D];if(mt>=xt){Z(Rt,b,_,!0);continue}let wt;if(Rt.key!=null)wt=ft.get(Rt.key);else for(_t=ot;_t<=K;_t++)if(Ft[_t-ot]===0&&Kn(Rt,x[_t])){wt=_t;break}wt===void 0?Z(Rt,b,_,!0):(Ft[wt-ot]=D+1,wt>=At?At=wt:It=!0,g(Rt,x[wt],F,null,b,_,P,N,B),mt++)}const Ht=It?xg(Ft):rr;for(_t=Ht.length-1,D=xt-1;D>=0;D--){const Rt=ot+D,wt=x[Rt],T=Rt+1<q?x[Rt+1].el:H;Ft[D]===0?g(null,wt,F,T,b,_,P,N,B):It&&(_t<0||D!==Ht[_t]?Y(wt,F,T,2):_t--)}}},Y=(k,x,F,H,b=null)=>{const{el:_,type:P,transition:N,children:B,shapeFlag:D}=k;if(D&6){Y(k.component.subTree,x,F,H);return}if(D&128){k.suspense.move(x,F,H);return}if(D&64){P.move(k,x,F,Tt);return}if(P===Ge){i(_,x,F);for(let j=0;j<B.length;j++)Y(B[j],x,F,H);i(k.anchor,x,F);return}if(P===eo){y(k,x,F);return}if(H!==2&&D&1&&N)if(H===0)N.beforeEnter(_),i(_,x,F),Ne(()=>N.enter(_),b);else{const{leave:j,delayLeave:K,afterLeave:rt}=N,ot=()=>i(_,x,F),ft=()=>{j(_,()=>{ot(),rt&&rt()})};K?K(_,ot,ft):ft()}else i(_,x,F)},Z=(k,x,F,H=!1,b=!1)=>{const{type:_,props:P,ref:N,children:B,dynamicChildren:D,shapeFlag:q,patchFlag:j,dirs:K}=k;if(N!=null&&po(N,null,F,k,!0),q&256){x.ctx.deactivate(k);return}const rt=q&1&&K,ot=!ur(k);let ft;if(ot&&(ft=P&&P.onVnodeBeforeUnmount)&&$e(ft,x,k),q&6)it(k.component,F,H);else{if(q&128){k.suspense.unmount(F,H);return}rt&&fn(k,null,x,"beforeUnmount"),q&64?k.type.remove(k,x,F,b,Tt,H):D&&(_!==Ge||j>0&&j&64)?dt(D,x,F,!1,!0):(_===Ge&&j&384||!b&&q&16)&&dt(B,x,F),H&&gt(k)}(ot&&(ft=P&&P.onVnodeUnmounted)||rt)&&Ne(()=>{ft&&$e(ft,x,k),rt&&fn(k,null,x,"unmounted")},F)},gt=k=>{const{type:x,el:F,anchor:H,transition:b}=k;if(x===Ge){J(F,H);return}if(x===eo){E(k);return}const _=()=>{r(F),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(k.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:N}=b,B=()=>P(F,_);N?N(k.el,_,B):B()}else _()},J=(k,x)=>{let F;for(;k!==x;)F=h(k),r(k),k=F;r(x)},it=(k,x,F)=>{const{bum:H,scope:b,update:_,subTree:P,um:N}=k;H&&Qs(H),b.stop(),_&&(_.active=!1,Z(P,k,x,F)),N&&Ne(N,x),Ne(()=>{k.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},dt=(k,x,F,H=!1,b=!1,_=0)=>{for(let P=_;P<k.length;P++)Z(k[P],x,F,H,b)},pt=k=>k.shapeFlag&6?pt(k.component.subTree):k.shapeFlag&128?k.suspense.next():h(k.anchor||k.el);let yt=!1;const bt=(k,x,F)=>{k==null?x._vnode&&Z(x._vnode,null,null,!0):g(x._vnode||null,k,x,null,null,null,F),yt||(yt=!0,Tc(),uo(),yt=!1),x._vnode=k},Tt={p:g,um:Z,m:Y,r:gt,mt:M,mc:z,pc:W,pbc:w,n:pt,o:n};let tt,Pt;return t&&([tt,Pt]=t(Tt)),{render:bt,hydrate:tt,createApp:lg(bt,tt)}}function oa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function di({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Qh(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function td(n,t,e=!1){const i=n.children,r=t.children;if(Lt(i)&&Lt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=qn(r[s]),o.el=a.el),e||td(a,o)),o.type===xr&&(o.el=a.el)}}function xg(n){const t=n.slice(),e=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,a=e.length-1;s<a;)o=s+a>>1,n[e[o]]<c?s=o+1:a=o;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,a=e[s-1];s-- >0;)e[s]=a,a=t[a];return e}function ed(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ed(t)}const yg=n=>n.__isTeleport,Ge=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),Wr=[];let Qe=null;function Pe(n=!1){Wr.push(Qe=n?null:[])}function nd(){Wr.pop(),Qe=Wr[Wr.length-1]||null}let yr=1;function Bc(n){yr+=n}function id(n){return n.dynamicChildren=yr>0?Qe||rr:null,nd(),yr>0&&Qe&&Qe.push(n),n}function Jr(n,t,e,i,r,s){return id(de(n,t,e,i,r,s,!0))}function mn(n,t,e,i,r){return id(re(n,t,e,i,r,!0))}function Qr(n){return n?n.__v_isVNode===!0:!1}function Kn(n,t){return n.type===t.type&&n.key===t.key}const rd=({key:n})=>n??null,no=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?le(n)||Ee(n)||Ut(n)?{i:he,r:n,k:t,f:!!e}:n:null);function de(n,t=null,e=null,i=0,r=null,s=n===Ge?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&rd(t),ref:t&&no(t),scopeId:zo,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:he};return o?($l(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=le(e)?8:16),yr>0&&!a&&Qe&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qe.push(l),l}const re=bg;function bg(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Lh)&&(n=un),Qr(n)){const o=br(n,t,!0);return e&&$l(o,e),yr>0&&!s&&Qe&&(o.shapeFlag&6?Qe[Qe.indexOf(n)]=o:Qe.push(o)),o.patchFlag|=-2,o}if(Lg(n)&&(n=n.__vccOpts),t){t=sd(t);let{class:o,style:l}=t;o&&!le(o)&&(t.class=No(o)),Qt(l)&&(bh(l)&&!Lt(l)&&(l=be({},l)),t.style=Uo(l))}const a=le(n)?1:Dm(n)?128:yg(n)?64:Qt(n)?4:Ut(n)?2:0;return de(n,t,e,i,r,a,s,!0)}function sd(n){return n?bh(n)||Xh(n)?be({},n):n:null}function br(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=t?Sg(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&rd(o),ref:t&&t.ref?e&&r?Lt(r)?r.concat(no(t)):[r,no(t)]:no(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ge?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&br(n.ssContent),ssFallback:n.ssFallback&&br(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function od(n=" ",t=0){return re(xr,null,n,t)}function ad(n="",t=!1){return t?(Pe(),mn(un,null,n)):re(un,null,n)}function Ke(n){return n==null||typeof n=="boolean"?re(un):Lt(n)?re(Ge,null,n.slice()):typeof n=="object"?qn(n):re(xr,null,String(n))}function qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:br(n)}function $l(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Lt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),$l(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Xh(t)?t._ctx=he:r===3&&he&&(he.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ut(t)?(t={default:t,_ctx:he},e=32):(t=String(t),i&64?(e=16,t=[od(t)]):e=8);n.children=t,n.shapeFlag|=e}function Sg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=No([t.class,i.class]));else if(r==="style")t.style=Uo([t.style,i.style]);else if(ns(r)){const s=t[r],a=i[r];a&&s!==a&&!(Lt(s)&&s.includes(a))&&(t[r]=s?[].concat(s,a):a)}else r!==""&&(t[r]=i[r])}return t}function $e(n,t,e,i=null){cn(n,t,7,[e,i])}const Mg=Hh();let Eg=0;function wg(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Mg,s={uid:Eg++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yh(i,r),emitsOptions:Ch(i,r),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:i.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Am.bind(null,s),n.ce&&n.ce(s),s}let me=null;const ld=()=>me||he;let mo,ol;{const n=ih(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};mo=t("__VUE_INSTANCE_SETTERS__",e=>me=e),ol=t("__VUE_SSR_SETTERS__",e=>rs=e)}const Li=n=>{const t=me;return mo(n),n.scope.on(),()=>{n.scope.off(),mo(t)}},al=()=>{me&&me.scope.off(),mo(null)};function cd(n){return n.vnode.shapeFlag&4}let rs=!1;function Tg(n,t=!1){t&&ol(t);const{props:e,children:i}=n.vnode,r=cd(n);cg(n,e,r,t),hg(n,i);const s=r?Ag(n,t):void 0;return t&&ol(!1),s}function Ag(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,tg);const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?Cg(n):null,s=Li(n);li();const a=ti(i,n,0,[n.props,r]);if(ci(),s(),Ll(a)){if(a.then(al,al),t)return a.then(o=>{ll(n,o,t)}).catch(o=>{Ar(o,n,0)});n.asyncDep=a}else ll(n,a,t)}else ud(n,t)}function ll(n,t,e){Ut(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Qt(t)&&(n.setupState=wh(t)),ud(n,e)}let zc;function ud(n,t,e){const i=n.type;if(!n.render){if(!t&&zc&&!i.render){const r=i.template||ql(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=be(be({isCustomElement:s,delimiters:o},a),l);i.render=zc(r,c)}}n.render=i.render||Je}{const r=Li(n);li();try{ng(n)}finally{ci(),r()}}}const Rg={get(n,t){return ke(n,"get",""),n[t]}};function Cg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Rg),slots:n.slots,emit:n.emit,expose:t}}function Vo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(wh(mm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Gr)return Gr[e](n)},has(t,e){return e in t||e in Gr}}))}function Pg(n,t=!0){return Ut(n)?n.displayName||n.name:n.name||t&&n.__name}function Lg(n){return Ut(n)&&"__vccOpts"in n}const Kl=(n,t)=>gm(n,t,rs);function Ig(n,t,e){const i=arguments.length;return i===2?Qt(t)&&!Lt(t)?Qr(t)?re(n,null,[t]):re(n,t):re(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Qr(e)&&(e=[e]),re(n,t,e))}const fd="3.4.24";/**
* @vue/runtime-dom v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dg="http://www.w3.org/2000/svg",Ug="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Hc=Yn&&Yn.createElement("template"),Ng={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Yn.createElementNS(Dg,n):t==="mathml"?Yn.createElementNS(Ug,n):Yn.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const a=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Hc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const o=Hc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Og=Symbol("_vtc");function Fg(n,t,e){const i=n[Og];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Vc=Symbol("_vod"),kg=Symbol("_vsh"),Bg=Symbol(""),zg=/(^|;)\s*display\s*:/;function Hg(n,t,e){const i=n.style,r=le(e);let s=!1;if(e&&!r){if(t)if(le(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&io(i,o,"")}else for(const a in t)e[a]==null&&io(i,a,"");for(const a in e)a==="display"&&(s=!0),io(i,a,e[a])}else if(r){if(t!==e){const a=i[Bg];a&&(e+=";"+a),i.cssText=e,s=zg.test(e)}}else t&&n.removeAttribute("style");Vc in n&&(n[Vc]=s?i.display:"",n[kg]&&(i.display="none"))}const Gc=/\s*!important$/;function io(n,t,e){if(Lt(e))e.forEach(i=>io(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Vg(n,t);Gc.test(e)?n.setProperty(Tr(i),e.replace(Gc,""),"important"):n[i]=e}}const Wc=["Webkit","Moz","ms"],aa={};function Vg(n,t){const e=aa[t];if(e)return e;let i=xn(t);if(i!=="filter"&&i in n)return aa[t]=i;i=Do(i);for(let r=0;r<Wc.length;r++){const s=Wc[r]+i;if(s in n)return aa[t]=s}return t}const jc="http://www.w3.org/1999/xlink";function Gg(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(jc,t.slice(6,t.length)):n.setAttributeNS(jc,t,e);else{const s=Gp(t);e==null||s&&!rh(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function Wg(n,t,e,i,r,s,a){if(t==="innerHTML"||t==="textContent"){i&&a(i,r,s),n[t]=e??"";return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?n.getAttribute("value")||"":n.value,u=e??"";(c!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=rh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function Mi(n,t,e,i){n.addEventListener(t,e,i)}function jg(n,t,e,i){n.removeEventListener(t,e,i)}const Xc=Symbol("_vei");function Xg(n,t,e,i,r=null){const s=n[Xc]||(n[Xc]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=qg(t);if(i){const c=s[t]=Kg(i,r);Mi(n,o,c,l)}else a&&(jg(n,o,a,l),s[t]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function qg(n){let t;if(qc.test(n)){t={};let i;for(;i=n.match(qc);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Tr(n.slice(2)),t]}let la=0;const Yg=Promise.resolve(),$g=()=>la||(Yg.then(()=>la=0),la=Date.now());function Kg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;cn(Zg(i,e.value),t,5,[i])};return e.value=n,e.attached=$g(),e}function Zg(n,t){if(Lt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Yc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jg=(n,t,e,i,r,s,a,o,l)=>{const c=r==="svg";t==="class"?Fg(n,i,c):t==="style"?Hg(n,e,i):ns(t)?Cl(t)||Xg(n,t,e,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qg(n,t,i,c))?Wg(n,t,i,s,a,o,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Gg(n,t,i,c))};function Qg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Yc(t)&&Ut(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yc(t)&&le(e)?!1:t in n}const go=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Lt(t)?e=>Qs(t,e):t};function t_(n){n.target.composing=!0}function $c(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dr=Symbol("_assign"),ca={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[dr]=go(r);const s=i||r.props&&r.props.type==="number";Mi(n,t?"change":"input",a=>{if(a.target.composing)return;let o=n.value;e&&(o=o.trim()),s&&(o=$a(o)),n[dr](o)}),e&&Mi(n,"change",()=>{n.value=n.value.trim()}),t||(Mi(n,"compositionstart",t_),Mi(n,"compositionend",$c),Mi(n,"change",$c))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:r}},s){if(n[dr]=go(s),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?$a(n.value):n.value,o=t??"";a!==o&&(document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===o)||(n.value=o))}},e_={deep:!0,created(n,t,e){n[dr]=go(e),Mi(n,"change",()=>{const i=n._modelValue,r=n_(n),s=n.checked,a=n[dr];if(Lt(i)){const o=sh(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Lo(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(hd(n,s))})},mounted:Kc,beforeUpdate(n,t,e){n[dr]=go(e),Kc(n,t,e)}};function Kc(n,{value:t,oldValue:e},i){n._modelValue=t,Lt(t)?n.checked=sh(t,i.props.value)>-1:Lo(t)?n.checked=t.has(i.props.value):t!==e&&(n.checked=Oo(t,hd(n,!0)))}function n_(n){return"_value"in n?n._value:n.value}function hd(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const dd=be({patchProp:Jg},Ng);let jr,Zc=!1;function i_(){return jr||(jr=_g(dd))}function r_(){return jr=Zc?jr:vg(dd),Zc=!0,jr}const s_=(...n)=>{const t=i_().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=md(i);if(!r)return;const s=t._component;!Ut(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=e(r,!1,pd(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t},o_=(...n)=>{const t=r_().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=md(i);if(r)return e(r,!0,pd(r))},t};function pd(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function md(n){return le(n)?document.querySelector(n):n}const a_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,l_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,c_=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function u_(n,t){if(n==="__proto__"||n==="constructor"&&t&&typeof t=="object"&&"prototype"in t){f_(n);return}return t}function f_(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function _o(n,t={}){if(typeof n!="string")return n;const e=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return e.slice(1,-1);if(e.length<=9){const i=e.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!c_.test(n)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(a_.test(n)||l_.test(n)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,u_)}return JSON.parse(n)}catch(i){if(t.strict)throw i;return n}}const h_=/#/g,d_=/&/g,p_=/\//g,m_=/=/g,Zl=/\+/g,g_=/%5e/gi,__=/%60/gi,v_=/%7c/gi,x_=/%20/gi;function y_(n){return encodeURI(""+n).replace(v_,"|")}function cl(n){return y_(typeof n=="string"?n:JSON.stringify(n)).replace(Zl,"%2B").replace(x_,"+").replace(h_,"%23").replace(d_,"%26").replace(__,"`").replace(g_,"^").replace(p_,"%2F")}function ua(n){return cl(n).replace(m_,"%3D")}function vo(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function b_(n){return vo(n.replace(Zl," "))}function S_(n){return vo(n.replace(Zl," "))}function gd(n=""){const t={};n[0]==="?"&&(n=n.slice(1));for(const e of n.split("&")){const i=e.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=b_(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=S_(i[2]||"");t[r]===void 0?t[r]=s:Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]}return t}function M_(n,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(e=>`${ua(n)}=${cl(e)}`).join("&"):`${ua(n)}=${cl(t)}`:ua(n)}function _d(n){return Object.keys(n).filter(t=>n[t]!==void 0).map(t=>M_(t,n[t])).filter(Boolean).join("&")}const E_=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,w_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,T_=/^([/\\]\s*){2,}[^/\\]/,A_=/^[\s\0]*(blob|data|javascript|vbscript):$/i,R_=/\/$|\/\?|\/#/,C_=/^\.?\//;function Cr(n,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?E_.test(n):w_.test(n)||(t.acceptRelative?T_.test(n):!1)}function P_(n){return!!n&&A_.test(n)}function ul(n="",t){return t?R_.test(n):n.endsWith("/")}function Jl(n="",t){if(!t)return(ul(n)?n.slice(0,-1):n)||"/";if(!ul(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");r>=0&&(e=n.slice(0,r),i=n.slice(r));const[s,...a]=e.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(a.length>0?`?${a.join("?")}`:"")+i}function fl(n="",t){if(!t)return n.endsWith("/")?n:n+"/";if(ul(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");if(r>=0&&(e=n.slice(0,r),i=n.slice(r),!e))return i;const[s,...a]=e.split("?");return s+"/"+(a.length>0?`?${a.join("?")}`:"")+i}function L_(n=""){return n.startsWith("/")}function Jc(n=""){return L_(n)?n:"/"+n}function I_(n,t){if(xd(t)||Cr(n))return n;const e=Jl(t);return n.startsWith(e)?n:Go(e,n)}function D_(n,t){if(xd(t))return n;const e=Jl(t);if(!n.startsWith(e))return n;const i=n.slice(e.length);return i[0]==="/"?i:"/"+i}function vd(n,t){const e=Wo(n),i={...gd(e.search),...t};return e.search=_d(i),Sd(e)}function xd(n){return!n||n==="/"}function U_(n){return n&&n!=="/"}function Go(n,...t){let e=n||"";for(const i of t.filter(r=>U_(r)))if(e){const r=i.replace(C_,"");e=fl(e)+r}else e=i;return e}function yd(...n){var a,o,l,c;const t=/\/(?!\/)/,e=n.filter(Boolean),i=[];let r=0;for(const u of e)if(!(!u||u==="/")){for(const[f,h]of u.split(t).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&Cr(i[0]))continue;i.pop(),r--;continue}if(f===1&&((a=i[i.length-1])!=null&&a.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(o=e[0])!=null&&o.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=e[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(c=e[e.length-1])!=null&&c.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function N_(n,t,e={}){return e.trailingSlash||(n=fl(n),t=fl(t)),e.leadingSlash||(n=Jc(n),t=Jc(t)),e.encoding||(n=vo(n),t=vo(t)),n===t}const bd=Symbol.for("ufo:protocolRelative");function Wo(n="",t){const e=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(e){const[,f,h=""]=e;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!Cr(n,{acceptRelative:!0}))return Qc(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,a="",o=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Qc(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:a,pathname:l,search:c,hash:u,[bd]:!i}}function Qc(n=""){const[t="",e="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:e,hash:i}}function Sd(n){const t=n.pathname||"",e=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[bd]?(n.protocol||"")+"//":"")+r+s+t+e+i}class O_ extends Error{constructor(t,e){super(t,e),this.name="FetchError",e!=null&&e.cause&&!this.cause&&(this.cause=e.cause)}}function F_(n){var l,c,u,f,h;const t=((l=n.error)==null?void 0:l.message)||((c=n.error)==null?void 0:c.toString())||"",e=((u=n.request)==null?void 0:u.method)||((f=n.options)==null?void 0:f.method)||"GET",i=((h=n.request)==null?void 0:h.url)||String(n.request)||"/",r=`[${e}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",a=`${r}: ${s}${t?` ${t}`:""}`,o=new O_(a,n.error?{cause:n.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(o,d,{get(){return n[d]}});for(const[d,v]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(o,d,{get(){return n.response&&n.response[v]}});return o}const k_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function tu(n="GET"){return k_.has(n.toUpperCase())}function B_(n){if(n===void 0)return!1;const t=typeof n;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const z_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),H_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function V_(n=""){if(!n)return"json";const t=n.split(";").shift()||"";return H_.test(t)?"json":z_.has(t)||t.startsWith("text/")?"text":"blob"}function G_(n,t,e=globalThis.Headers){const i={...t,...n};if(t!=null&&t.params&&(n!=null&&n.params)&&(i.params={...t==null?void 0:t.params,...n==null?void 0:n.params}),t!=null&&t.query&&(n!=null&&n.query)&&(i.query={...t==null?void 0:t.query,...n==null?void 0:n.query}),t!=null&&t.headers&&(n!=null&&n.headers)){i.headers=new e((t==null?void 0:t.headers)||{});for(const[r,s]of new e((n==null?void 0:n.headers)||{}))i.headers.set(r,s)}return i}const W_=new Set([408,409,425,429,500,502,503,504]),j_=new Set([101,204,205,304]);function Md(n={}){const{fetch:t=globalThis.fetch,Headers:e=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(o){const l=o.error&&o.error.name==="AbortError"&&!o.options.timeout||!1;if(o.options.retry!==!1&&!l){let u;typeof o.options.retry=="number"?u=o.options.retry:u=tu(o.options.method)?0:1;const f=o.response&&o.response.status||500;if(u>0&&(Array.isArray(o.options.retryStatusCodes)?o.options.retryStatusCodes.includes(f):W_.has(f))){const h=o.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(o.request,{...o.options,retry:u-1})}}const c=F_(o);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){var d;const u={request:l,options:G_(c,n.defaults,e),response:void 0,error:void 0};u.options.method=(d=u.options.method)==null?void 0:d.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=I_(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=vd(u.request,{...u.options.params,...u.options.query}))),u.options.body&&tu(u.options.method)&&(B_(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new e(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const v=new i;f=setTimeout(()=>v.abort(),u.options.timeout),u.options.signal=v.signal}try{u.response=await t(u.request,u.options)}catch(v){return u.error=v,u.options.onRequestError&&await u.options.onRequestError(u),await r(u)}finally{f&&clearTimeout(f)}if(u.response.body&&!j_.has(u.response.status)&&u.options.method!=="HEAD"){const v=(u.options.parseResponse?"json":u.options.responseType)||V_(u.response.headers.get("content-type")||"");switch(v){case"json":{const g=await u.response.text(),m=u.options.parseResponse||_o;u.response._data=m(g);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[v]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await r(u)):u.response},a=async function(l,c){return(await s(l,c))._data};return a.raw=s,a.native=(...o)=>t(...o),a.create=(o={})=>Md({...n,defaults:{...n.defaults,...o}}),a}const Ql=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),X_=Ql.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),q_=Ql.Headers,Y_=Ql.AbortController,$_=Md({fetch:X_,Headers:q_,AbortController:Y_}),K_=$_,Z_=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},xo=Z_().app,J_=()=>xo.baseURL,Q_=()=>xo.buildAssetsDir,tc=(...n)=>yd(Ed(),Q_(),...n),Ed=(...n)=>{const t=xo.cdnURL||xo.baseURL;return n.length?yd(t,...n):t};globalThis.__buildAssetsURL=tc,globalThis.__publicAssetsURL=Ed;globalThis.$fetch||(globalThis.$fetch=K_.create({baseURL:J_()}));function hl(n,t={},e){for(const i in n){const r=n[i],s=e?`${e}:${i}`:i;typeof r=="object"&&r!==null?hl(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const t0={run:n=>n()},e0=()=>t0,wd=typeof console.createTask<"u"?console.createTask:e0;function n0(n,t){const e=t.shift(),i=wd(e);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...t))),Promise.resolve())}function i0(n,t){const e=t.shift(),i=wd(e);return Promise.all(n.map(r=>i.run(()=>r(...t))))}function fa(n,t){for(const e of[...n])e(t)}class r0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,i={}){if(!t||typeof e!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!i.allowDeprecated){let a=s.message;a||(a=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,e(...s));return i=this.hook(t,r),i}removeHook(t,e){if(this._hooks[t]){const i=this._hooks[t].indexOf(e);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const i=this._hooks[t]||[];delete this._hooks[t];for(const r of i)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=hl(t),i=Object.keys(e).map(r=>this.hook(r,e[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(t){const e=hl(t);for(const i in e)this.removeHook(i,e[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(n0,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(i0,t,...e)}callHookWith(t,e,...i){const r=this._before||this._after?{name:e,args:i,context:{}}:void 0;this._before&&fa(this._before,r);const s=t(e in this._hooks?[...this._hooks[e]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&fa(this._after,r)}):(this._after&&r&&fa(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}}function Td(){return new r0}function s0(n={}){let t,e=!1;const i=a=>{if(t&&t!==a)throw new Error("Context conflict")};let r;if(n.asyncContext){const a=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?r=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&t===void 0){const a=r.getStore();if(a!==void 0)return a}return t};return{use:()=>{const a=s();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>s(),set:(a,o)=>{o||i(a),t=a,e=!0},unset:()=>{t=void 0,e=!1},call:(a,o)=>{i(a),t=a;try{return r?r.run(a,o):o()}finally{e||(t=void 0)}},async callAsync(a,o){t=a;const l=()=>{t=a},c=()=>t===a?l:void 0;dl.add(c);try{const u=r?r.run(a,o):o();return e||(t=void 0),await u}finally{dl.delete(c)}}}}function o0(n={}){const t={};return{get(e,i={}){return t[e]||(t[e]=s0({...n,...i})),t[e],t[e]}}}const yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},eu="__unctx__",a0=yo[eu]||(yo[eu]=o0()),l0=(n,t={})=>a0.get(n,t),nu="__unctx_async_handlers__",dl=yo[nu]||(yo[nu]=new Set);function Ad(n){const t=[];for(const r of dl){const s=r();s&&t.push(s)}const e=()=>{for(const r of t)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw e(),r})),[i,e]}const Rd=l0("nuxt-app",{asyncContext:!1}),c0="__nuxt_plugin";function u0(n){let t=0;const e={_scope:Xp(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return e.vueApp.version}},payload:si({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>e._scope.run(()=>d0(e,r)),isHydrating:!0,deferHydration(){if(!e.isHydrating)return()=>{};t++;let r=!1;return()=>{if(!r&&(r=!0,t--,t===0))return e.isHydrating=!1,e.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...n};e.hooks=Td(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,s)=>{const a="$"+r;ys(e,a,s),ys(e.vueApp.config.globalProperties,a,s)},ys(e.vueApp,"$nuxt",e),ys(e.vueApp.config.globalProperties,"$nuxt",e);{window.addEventListener("nuxt.preloadError",s=>{e.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||Se;const r=e.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});e.hook("app:mounted",r)}const i=e.payload.config;return e.provide("config",i),e}async function f0(n,t){if(t.hooks&&n.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:e}=await n.runWithContext(()=>t(n))||{};if(e&&typeof e=="object")for(const i in e)n.provide(i,e[i])}}async function h0(n,t){const e=[],i=[],r=[],s=[];let a=0;async function o(l){var u;const c=((u=l.dependsOn)==null?void 0:u.filter(f=>t.some(h=>h._name===f)&&!e.includes(f)))??[];if(c.length>0)i.push([new Set(c),l]);else{const f=f0(n,l).then(async()=>{l._name&&(e.push(l._name),await Promise.all(i.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(a++,await o(d)))})))});l.parallel?r.push(f.catch(h=>s.push(h))):await f}}for(const l of t)await o(l);if(await Promise.all(r),a)for(let l=0;l<a;l++)await Promise.all(r);if(s.length)throw s[0]}function Ui(n){if(typeof n=="function")return n;const t=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[c0]:!0,_name:t})}function d0(n,t,e){const i=()=>t();return Rd.set(n),n.vueApp.runWithContext(i)}function p0(){var t;let n;return Gh()&&(n=(t=ld())==null?void 0:t.appContext.app.$nuxt),n=n||Rd.tryUse(),n||null}function Se(){const n=p0();if(!n)throw new Error("[nuxt] instance unavailable");return n}function bo(n){return Se().$config}function ys(n,t,e){Object.defineProperty(n,t,{get:()=>e})}function m0(n,t){return{ctx:{table:n},matchAll:e=>Pd(e,n)}}function Cd(n){const t={};for(const e in n)t[e]=e==="dynamic"?new Map(Object.entries(n[e]).map(([i,r])=>[i,Cd(r)])):new Map(Object.entries(n[e]));return t}function g0(n){return m0(Cd(n))}function Pd(n,t,e){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,a]of iu(t.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(a);for(const[s,a]of iu(t.dynamic))if(n.startsWith(s+"/")){const o="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...Pd(o,a))}const r=t.static.get(n);return r&&i.push(r),i.filter(Boolean)}function iu(n){return[...n.entries()].sort((t,e)=>t[0].length-e[0].length)}function ha(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function pl(n,t,e=".",i){if(!ha(t))return pl(n,{},e,i);const r=Object.assign({},t);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const a=n[s];a!=null&&(i&&i(r,s,a,e)||(Array.isArray(a)&&Array.isArray(r[s])?r[s]=[...a,...r[s]]:ha(a)&&ha(r[s])?r[s]=pl(a,r[s],(e?`${e}.`:"")+s.toString(),i):r[s]=a))}return r}function Ld(n){return(...t)=>t.reduce((e,i)=>pl(e,i,"",n),{})}const _0=Ld(),v0=Ld((n,t,e)=>{if(n[t]!==void 0&&typeof e=="function")return n[t]=e(n[t]),!0});function x0(n,t){try{return t in n}catch{return!1}}var y0=Object.defineProperty,b0=(n,t,e)=>t in n?y0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,yi=(n,t,e)=>(b0(n,typeof t!="symbol"?t+"":t,e),e);class ml extends Error{constructor(t,e={}){super(t,e),yi(this,"statusCode",500),yi(this,"fatal",!1),yi(this,"unhandled",!1),yi(this,"statusMessage"),yi(this,"data"),yi(this,"cause"),e.cause&&!this.cause&&(this.cause=e.cause)}toJSON(){const t={message:this.message,statusCode:gl(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Id(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}yi(ml,"__h3_error__",!0);function S0(n){if(typeof n=="string")return new ml(n);if(M0(n))return n;const t=new ml(n.message??n.statusMessage??"",{cause:n.cause||n});if(x0(n,"stack"))try{Object.defineProperty(t,"stack",{get(){return n.stack}})}catch{try{t.stack=n.stack}catch{}}if(n.data&&(t.data=n.data),n.statusCode?t.statusCode=gl(n.statusCode,t.statusCode):n.status&&(t.statusCode=gl(n.status,t.statusCode)),n.statusMessage?t.statusMessage=n.statusMessage:n.statusText&&(t.statusMessage=n.statusText),t.statusMessage){const e=t.statusMessage;Id(t.statusMessage)!==e&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(t.fatal=n.fatal),n.unhandled!==void 0&&(t.unhandled=n.unhandled),t}function M0(n){var t;return((t=n==null?void 0:n.constructor)==null?void 0:t.__h3_error__)===!0}const E0=/[^\u0009\u0020-\u007E]/g;function Id(n=""){return n.replace(E0,"")}function gl(n,t=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?t:n}const Dd=Symbol("route"),ss=()=>{var n;return(n=Se())==null?void 0:n.$router},Ud=()=>Gh()?hr(Dd,Se()._route):Se()._route;const w0=()=>{try{if(Se()._processingMiddleware)return!0}catch{return!1}return!1},T0=(n,t)=>{n||(n="/");const e=typeof n=="string"?n:vd(n.path||"/",n.query||{})+(n.hash||"");if(t!=null&&t.open){const{target:o="_blank",windowFeatures:l={}}=t.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");return open(e,o,c),Promise.resolve()}const i=(t==null?void 0:t.external)||Cr(e,{acceptRelative:!0});if(i){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const o=Wo(e).protocol;if(o&&P_(o))throw new Error(`Cannot navigate to a URL with '${o}' protocol.`)}const r=w0();if(!i&&r)return n;const s=ss(),a=Se();return i?(a._scope.stop(),t!=null&&t.replace?location.replace(e):location.href=e,r?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?s.replace(n):s.push(n)},Nd="__nuxt_error",ec=()=>bm(Se().payload,"error"),A0=n=>{const t=nc(n);try{const e=Se(),i=ec();e.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},R0=async(n={})=>{const t=Se(),e=ec();t.callHook("app:error:cleared",n),n.redirect&&await ss().replace(n.redirect),e.value=null},C0=n=>!!n&&typeof n=="object"&&Nd in n,nc=n=>{const t=S0(n);return Object.defineProperty(t,Nd,{value:!0,configurable:!1,writable:!1}),t},P0="modulepreload",L0=function(n,t){return n[0]==="."?new URL(n,t).href:n},ru={},I0=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(o=>{if(o=L0(o,i),o in ru)return;ru[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":P0,l||(u.as="script",u.crossOrigin=""),u.href=o,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},su=(...n)=>I0(...n).catch(t=>{const e=new Event("nuxt.preloadError");throw e.payload=t,window.dispatchEvent(e),t}),D0=-1,U0=-2,N0=-3,O0=-4,F0=-5,k0=-6;function B0(n,t){return z0(JSON.parse(n),t)}function z0(n,t){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,i=Array(e.length);function r(s,a=!1){if(s===D0)return;if(s===N0)return NaN;if(s===O0)return 1/0;if(s===F0)return-1/0;if(s===k0)return-0;if(a)throw new Error("Invalid input");if(s in i)return i[s];const o=e[s];if(!o||typeof o!="object")i[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const l=o[0],c=t==null?void 0:t[l];if(c)return i[s]=c(r(o[1]));switch(l){case"Date":i[s]=new Date(o[1]);break;case"Set":const u=new Set;i[s]=u;for(let d=1;d<o.length;d+=1)u.add(r(o[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<o.length;d+=2)f.set(r(o[d]),r(o[d+1]));break;case"RegExp":i[s]=new RegExp(o[1],o[2]);break;case"Object":i[s]=Object(o[1]);break;case"BigInt":i[s]=BigInt(o[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<o.length;d+=2)h[o[d]]=r(o[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(o.length);i[s]=l;for(let c=0;c<o.length;c+=1){const u=o[c];u!==U0&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in o){const u=o[c];l[c]=r(u)}}return i[s]}return r(0)}function H0(n){return Array.isArray(n)?n:[n]}const V0=["title","titleTemplate","script","style","noscript"],ro=["base","meta","link","style","script","noscript"],G0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],W0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Od=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],j0=typeof window<"u";function ic(n){let t=9;for(let e=0;e<n.length;)t=Math.imul(t^n.charCodeAt(e++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ou(n){return n._h||ic(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,e])=>`${t}:${String(e)}`).join(",")}`)}function Fd(n,t){const{props:e,tag:i}=n;if(W0.includes(i))return i;if(i==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof e[s]<"u"){const a=String(e[s]);return`${i}:${s}:${a}`}return!1}function au(n,t){return n==null?t||null:typeof n=="function"?n(t):n}async function X0(n,t,e){const i={tag:n,props:await kd(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(n))};return Od.forEach(r=>{const s=typeof i.props[r]<"u"?i.props[r]:e[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||V0.includes(i.tag))&&(i[r==="children"?"innerHTML":r]=s),delete i.props[r])}),i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function q0(n,t){var i;const e=n==="class"?" ":";";return typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,r])=>r).map(([r,s])=>n==="style"?`${r}:${s}`:r)),(i=Array.isArray(t)?t.join(e):t)==null?void 0:i.split(e).filter(r=>r.trim()).filter(Boolean).join(e)}async function kd(n,t){for(const e of Object.keys(n)){if(["class","style"].includes(e)){n[e]=q0(e,n[e]);continue}if(n[e]instanceof Promise&&(n[e]=await n[e]),!t&&!Od.includes(e)){const i=String(n[e]),r=e.startsWith("data-");i==="true"||i===""?n[e]=r?"true":!0:n[e]||(r&&i==="false"?n[e]="false":delete n[e])}}return n}const Y0=10;async function $0(n){const t=[];return Object.entries(n.resolvedInput).filter(([e,i])=>typeof i<"u"&&G0.includes(e)).forEach(([e,i])=>{const r=H0(i);t.push(...r.map(s=>X0(e,s,n)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((e,i)=>(e._e=n._i,n.mode&&(e._m=n.mode),e._p=(n._i<<Y0)+i,e))}const lu={base:-10,title:10},cu={critical:-80,high:-10,low:20};function So(n){let t=100;const e=n.tagPriority;return typeof e=="number"?e:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(t=-30),n.props.charset&&(t=-20),n.props.name==="viewport"&&(t=-15)):n.tag==="link"&&n.props.rel==="preconnect"?t=20:n.tag in lu&&(t=lu[n.tag]),typeof e=="string"&&e in cu?t+cu[e]:t)}const K0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],uu=["onload","onerror","onabort","onprogress","onloadstart"],Bn="%separator";function so(n,t,e){if(typeof n!="string"||!n.includes("%"))return n;function i(a){let o;return["s","pageTitle"].includes(a)?o=t.pageTitle:a.includes(".")?o=a.split(".").reduce((l,c)=>l&&l[c]||void 0,t):o=t[a],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const o=i(a.slice(1));typeof o=="string"&&(n=n.replace(new RegExp(`\\${a}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),n.includes(Bn)&&(n.endsWith(Bn)&&(n=n.slice(0,-Bn.length).trim()),n.startsWith(Bn)&&(n=n.slice(Bn.length).trim()),n=n.replace(new RegExp(`\\${Bn}\\s*\\${Bn}`,"g"),Bn),n=so(n,{separator:e},e)),n}async function Bd(n,t={}){var u;const e=t.document||n.resolvedOptions.document;if(!e||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const r=(await n.resolveTags()).map(f=>({tag:f,id:ro.includes(f.tag)?ou(f):f.tag,shouldRender:!0}));let s=n._dom;if(!s){s={elMap:{htmlAttrs:e.documentElement,bodyAttrs:e.body}};for(const f of["body","head"]){const h=(u=e[f])==null?void 0:u.children,d=[];for(const v of[...h].filter(g=>ro.includes(g.tagName.toLowerCase()))){const g={tag:v.tagName.toLowerCase(),props:await kd(v.getAttributeNames().reduce((S,y)=>({...S,[y]:v.getAttribute(y)}),{})),innerHTML:v.innerHTML};let m=1,p=Fd(g);for(;p&&d.find(S=>S._d===p);)p=`${p}:${m++}`;g._d=p||void 0,d.push(g),s.elMap[v.getAttribute("data-hid")||ou(g)]=v}}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function a(f,h,d){const v=`${f}:${h}`;s.sideEffects[v]=d,delete s.pendingSideEffects[v]}function o({id:f,$el:h,tag:d}){const v=d.tag.endsWith("Attrs");s.elMap[f]=h,v||(["textContent","innerHTML"].forEach(g=>{d[g]&&d[g]!==h[g]&&(h[g]=d[g])}),a(f,"el",()=>{var g;(g=s.elMap[f])==null||g.remove(),delete s.elMap[f]}));for(const[g,m]of Object.entries(d._eventHandlers||{}))h.getAttribute(`data-${g}`)!==""&&((d.tag==="bodyAttrs"?e.defaultView:h).addEventListener(g.replace("on",""),m.bind(h)),h.setAttribute(`data-${g}`,""));Object.entries(d.props).forEach(([g,m])=>{const p=`attr:${g}`;if(g==="class")for(const S of(m||"").split(" ").filter(Boolean))v&&a(f,`${p}:${S}`,()=>h.classList.remove(S)),!h.classList.contains(S)&&h.classList.add(S);else if(g==="style")for(const S of(m||"").split(";").filter(Boolean)){const[y,...E]=S.split(":").map(C=>C.trim());a(f,`${p}:${S}:${y}`,()=>{h.style.removeProperty(y)}),h.style.setProperty(y,E.join(":"))}else h.getAttribute(g)!==m&&h.setAttribute(g,m===!0?"":String(m)),v&&a(f,p,()=>h.removeAttribute(g))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:h,shouldRender:d,id:v}=f;if(d){if(h.tag==="title"){e.title=h.textContent;continue}f.$el=f.$el||s.elMap[v],f.$el?o(f):ro.includes(h.tag)&&l.push(f)}}for(const f of l){const h=f.tag.tagPosition||"head";f.$el=e.createElement(f.tag.tag),o(f),c[h]=c[h]||e.createDocumentFragment(),c[h].appendChild(f.$el)}for(const f of r)await n.hooks.callHook("dom:renderTag",f,e,a);c.head&&e.head.appendChild(c.head),c.bodyOpen&&e.body.insertBefore(c.bodyOpen,e.body.firstChild),c.bodyClose&&e.body.appendChild(c.bodyClose),Object.values(s.pendingSideEffects).forEach(f=>f()),n._dom=s,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function Z0(n,t={}){const e=t.delayFn||(i=>setTimeout(i,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(i=>e(async()=>{await Bd(n,t),delete n._domUpdatePromise,i()}))}function J0(n){return t=>{var i,r;const e=((r=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return e&&t.push(JSON.parse(e)),{mode:"client",hooks:{"entries:updated":function(s){Z0(s,n)}}}}}const Q0=["templateParams","htmlAttrs","bodyAttrs"],tv={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const e=Fd(n)||(n.key?`${n.tag}:${n.key}`:!1);e&&(n._d=e)},"tags:resolve":function(n){const t={};n.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=t[r];if(s){let o=i==null?void 0:i.tagDuplicateStrategy;if(!o&&Q0.includes(i.tag)&&(o="merge"),o==="merge"){const l=s.props;["class","style"].forEach(c=>{l[c]&&(i.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`):i.props[c]=l[c])}),t[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(So(i)>So(s))return}const a=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(ro.includes(i.tag)&&a===0){delete t[r];return}t[r]=i});const e=[];Object.values(t).forEach(i=>{const r=i._duped;delete i._duped,e.push(i),r&&e.push(...r)}),n.tags=e,n.tags=n.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},ev={mode:"server",hooks:{"tags:resolve":function(n){const t={};n.tags.filter(e=>["titleTemplate","templateParams","title"].includes(e.tag)&&e._m==="server").forEach(e=>{t[e.tag]=e.tag.startsWith("title")?e.textContent:e.props}),Object.keys(t).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},nv=["script","link","bodyAttrs"],iv=n=>({hooks:{"tags:resolve":function(t){for(const e of t.tags.filter(i=>nv.includes(i.tag)))Object.entries(e.props).forEach(([i,r])=>{i.startsWith("on")&&typeof r=="function"&&(n.ssr&&uu.includes(i)?e.props[i]=`this.dataset.${i}fired = true`:delete e.props[i],e._eventHandlers=e._eventHandlers||{},e._eventHandlers[i]=r)}),n.ssr&&e._eventHandlers&&(e.props.src||e.props.href)&&(e.key=e.key||ic(e.props.src||e.props.href))},"dom:renderTag":function({$el:t,tag:e}){var i,r;for(const s of Object.keys((t==null?void 0:t.dataset)||{}).filter(a=>uu.some(o=>`${o}fired`===a))){const a=s.replace("fired","");(r=(i=e._eventHandlers)==null?void 0:i[a])==null||r.call(t,new Event(a.replace("on","")))}}}}),rv=["link","style","script","noscript"],sv={hooks:{"tag:normalise":({tag:n})=>{n.key&&rv.includes(n.tag)&&(n.props["data-hid"]=n._h=ic(n.key))}}},ov={hooks:{"tags:resolve":n=>{const t=e=>{var i;return(i=n.tags.find(r=>r._d===e))==null?void 0:i._p};for(const{prefix:e,offset:i}of K0)for(const r of n.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(e))){const s=t(r.tagPriority.replace(e,""));typeof s<"u"&&(r._p=s+i)}n.tags.sort((e,i)=>e._p-i._p).sort((e,i)=>So(e)-So(i))}}},av={meta:"content",link:"href",htmlAttrs:"lang"},lv=n=>({hooks:{"tags:resolve":t=>{var o;const{tags:e}=t,i=(o=e.find(l=>l.tag==="title"))==null?void 0:o.textContent,r=e.findIndex(l=>l.tag==="templateParams"),s=r!==-1?e[r].props:{},a=s.separator||"|";delete s.separator,s.pageTitle=so(s.pageTitle||i||"",s,a);for(const l of e.filter(c=>c.processTemplateParams!==!1)){const c=av[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=so(l.props[c],s,a):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=so(l[u],s,a))})}n._templateParams=s,n._separator=a,t.tags=e.filter(l=>l.tag!=="templateParams")}}}),cv={hooks:{"tags:resolve":n=>{const{tags:t}=n;let e=t.findIndex(r=>r.tag==="titleTemplate");const i=t.findIndex(r=>r.tag==="title");if(i!==-1&&e!==-1){const r=au(t[e].textContent,t[i].textContent);r!==null?t[i].textContent=r||t[i].textContent:delete t[i]}else if(e!==-1){const r=au(t[e].textContent);r!==null&&(t[e].textContent=r,t[e].tag="title",e=-1)}e!==-1&&delete t[e],n.tags=t.filter(Boolean)}}},uv={hooks:{"tags:afterResolve":function(n){for(const t of n.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let zd;function fv(n={}){const t=hv(n);return t.use(J0()),zd=t}function fu(n,t){return!n||n==="server"&&t||n==="client"&&!t}function hv(n={}){const t=Td();t.addHooks(n.hooks||{}),n.document=n.document||(j0?document:void 0);const e=!n.document,i=()=>{o.dirty=!0,t.callHook("entries:updated",o)};let r=0,s=[];const a=[],o={plugins:a,dirty:!1,resolvedOptions:n,hooks:t,headEntries(){return s},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!a.some(u=>u.key===c.key))&&(a.push(c),fu(c.mode,e)&&t.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return fu(u.mode,e)&&(s.push(u),i()),{dispose(){s=s.filter(f=>f._i!==u._i),t.callHook("entries:updated",o),i()},patch(f){s=s.map(h=>(h._i===u._i&&(h.input=u.input=f),h)),i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await t.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await $0(c)){const h={tag:f,entry:c,resolvedOptions:o.resolvedOptions};await t.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:e};return[tv,ev,iv,sv,ov,lv,cv,uv,...(n==null?void 0:n.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function dv(){return zd}const pv=fd.startsWith("3");function mv(n){return typeof n=="function"?n():Kt(n)}function _l(n,t=""){if(n instanceof Promise)return n;const e=mv(n);return!n||!e?e:Array.isArray(e)?e.map(i=>_l(i,t)):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,Kt(r)]:[i,_l(r,i)])):e}const gv={hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=_l(t.input)}}},Hd="usehead";function _v(n){return{install(e){pv&&(e.config.globalProperties.$unhead=n,e.config.globalProperties.$head=n,e.provide(Hd,n))}}.install}function vv(n={}){n.domDelayFn=n.domDelayFn||(e=>Hl(()=>setTimeout(()=>e(),0)));const t=fv(n);return t.use(gv),t.install=_v(t),t}const vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xl="__unhead_injection_handler__";function xv(n){vl[xl]=n}function pT(){if(xl in vl)return vl[xl]();const n=hr(Hd);return n||dv()}const yv={nuxt:{buildId:"a0dc1c24-1568-4326-a209-7a814caf0096"}},bv=v0(yv);function Vd(){const n=Se();return n._appConfig||(n._appConfig=si(bv)),n._appConfig}const mT={componentName:"NuxtLink"},Sv="#__nuxt";let oo,Gd;function Mv(){var t;const n=(t=Vd().nuxt)==null?void 0:t.buildId;return oo=$fetch(tc(`builds/meta/${n}.json`)),oo.then(e=>{Gd=g0(e.matcher)}),oo}function jo(){return oo||Mv()}async function rc(n){return await jo(),_0({},...Gd.matchAll(n).reverse())}function hu(n,t={}){const e=wv(n,t),i=Se(),r=i._payloadCache=i._payloadCache||{};return e in r||(r[e]=Tv(n).then(s=>s?Wd(e).then(a=>a||(delete r[e],null)):(r[e]=null,null))),r[e]}const Ev="_payload.json";function wv(n,t={}){var r;const e=new URL(n,"http://localhost");if(e.host!=="localhost"||Cr(e.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=t.hash||(t.fresh?Date.now():(r=Vd().nuxt)==null?void 0:r.buildId);return Go(bo().app.baseURL,e.pathname,Ev+(i?`?${i}`:""))}async function Wd(n){const t=fetch(n).then(e=>e.text().then(jd));try{return await t}catch(e){console.warn("[nuxt] Cannot load payload ",n,e)}return null}async function Tv(n=Ud().path){if(n=Jl(n),(await jo()).prerendered.includes(n))return!0;const e=await rc(n);return!!e.prerender&&!e.redirect}let bs=null;async function Av(){if(bs)return bs;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const t=await jd(n.textContent||""),e=n.dataset.src?await Wd(n.dataset.src):void 0;return bs={...t,...e,...window.__NUXT__},bs}async function jd(n){return await B0(n,Se()._payloadRevivers)}function Rv(n,t){Se()._payloadRevivers[n]=t}const du={NuxtError:n=>nc(n),EmptyShallowRef:n=>wc(n==="_"?void 0:n==="0n"?BigInt(0):_o(n)),EmptyRef:n=>ln(n==="_"?void 0:n==="0n"?BigInt(0):_o(n)),ShallowRef:n=>wc(n),ShallowReactive:n=>xh(n),Ref:n=>ln(n),Reactive:n=>si(n)},Cv=Ui({name:"nuxt:revive-payload:client",order:-30,async setup(n){let t,e;for(const i in du)Rv(i,du[i]);Object.assign(n.payload,([t,e]=Ad(()=>n.runWithContext(Av)),t=await t,e(),t)),window.__NUXT__=n.payload}}),Pv=[],Lv=Ui({name:"nuxt:head",enforce:"pre",setup(n){const t=vv({plugins:Pv});xv(()=>Se().vueApp._context.provides.usehead),n.vueApp.use(t);{let e=!0;const i=async()=>{e=!1,await Bd(t)};t.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!e}),n.hooks.hook("page:start",()=>{e=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}}),Iv=async n=>{let t,e;const i=([t,e]=Ad(()=>rc(n.path)),t=await t,e(),t);if(i.redirect)return Cr(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},Dv=[Iv];function da(n){typeof n=="object"&&(n=Sd({pathname:n.path||"",search:_d(n.query||{}),hash:n.hash||""}));const t=Wo(n.toString());return{path:t.pathname,fullPath:n,query:gd(t.search),hash:t.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}}const Uv=Ui({name:"nuxt:router",enforce:"pre",setup(n){const t=D_(window.location.pathname,bo().app.baseURL)+window.location.search+window.location.hash,e=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(f,h)=>(i[f].push(h),()=>i[f].splice(i[f].indexOf(h),1)),s=bo().app.baseURL,a=si(da(t));async function o(f,h){try{const d=da(f);for(const v of i["navigate:before"]){const g=await v(d,a);if(g===!1||g instanceof Error)return;if(typeof g=="string"&&g.length)return o(g,!0)}for(const v of i["resolve:before"])await v(d,a);Object.assign(a,d),window.history[h?"replaceState":"pushState"]({},"",Go(s,d.fullPath)),n.isHydrating||await n.runWithContext(R0);for(const v of i["navigate:after"])await v(d,a)}catch(d){for(const v of i.error)await v(d)}}const c={currentRoute:Kl(()=>a),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:f=>o(f,!1),replace:f=>o(f,!0),back:()=>window.history.go(-1),go:f=>window.history.go(f),forward:()=>window.history.go(1),beforeResolve:f=>r("resolve:before",f),beforeEach:f=>r("navigate:before",f),afterEach:f=>r("navigate:after",f),onError:f=>r("error",f),resolve:da,addRoute:(f,h)=>{e.push(h)},getRoutes:()=>e,hasRoute:f=>e.some(h=>h.name===f),removeRoute:f=>{const h=e.findIndex(d=>d.name===f);h!==-1&&e.splice(h,1)}};n.vueApp.component("RouterLink",Rr({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(f,{slots:h})=>{const d=()=>o(f.to,f.replace);return()=>{var g;const v=c.resolve(f.to);return f.custom?(g=h.default)==null?void 0:g.call(h,{href:f.to,navigate:d,route:v}):Ig("a",{href:f.to,onClick:m=>(m.preventDefault(),d())},h)}}})),window.addEventListener("popstate",f=>{const h=f.target.location;c.replace(h.href.replace(h.origin,""))}),n._route=a,n._middleware=n._middleware||{global:[],named:{}};const u=n.payload.state._layout;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(f,h)=>{f.meta=si(f.meta||{}),n.isHydrating&&u&&!vr(f.meta.layout)&&(f.meta.layout=u),n._processingMiddleware=!0;{const d=new Set([...Dv,...n._middleware.global]);{const v=await n.runWithContext(()=>rc(f.path));if(v.appMiddleware)for(const g in v.appMiddleware){const m=n._middleware.named[g];if(!m)return;v.appMiddleware[g]?d.add(m):d.delete(m)}}for(const v of d){const g=await n.runWithContext(()=>v(f,h));if(g!==!0&&(g||g===!1))return g}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(t),N_(a.fullPath,t)||await n.runWithContext(()=>T0(a.fullPath))}),{provide:{route:a,router:c}}}}),pu=globalThis.requestIdleCallback||(n=>{const t=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{n(e)},1)}),gT=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),Xd=n=>{const t=Se();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{pu(n)}):pu(n)},Nv=Ui({name:"nuxt:payload",setup(n){ss().beforeResolve(async(t,e)=>{if(t.path===e.path)return;const i=await hu(t.path);i&&Object.assign(n.static.data,i.data)}),Xd(()=>{var t;n.hooks.hook("link:prefetch",async e=>{Wo(e).protocol||await hu(e)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(jo,1e3)})}}),Ov=Ui(n=>{let t;async function e(){const i=await jo();t&&clearTimeout(t),t=setTimeout(e,1e3*60*60);try{const r=await $fetch(tc("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}Xd(()=>{t=setTimeout(e,1e3*60*60)})}),Fv=Ui({name:"nuxt:global-components"});function kv(n={}){const t=n.path||window.location.pathname;let e={};try{e=_o(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||(e==null?void 0:e.path)!==t||(e==null?void 0:e.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Se().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Bv=Ui({name:"nuxt:chunk-reload",setup(n){const t=ss(),e=bo(),i=new Set;t.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o="href"in s&&s.href[0]==="#"?e.app.baseURL+s.href:Go(e.app.baseURL,s.fullPath);kv({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{t.beforeResolve(r)}),t.onError((s,a)=>{i.has(s)&&r(a)})}}),zv=[Cv,Lv,Uv,Nv,Ov,Fv,Bv];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="163",Fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hv=0,mu=1,Vv=2,qd=1,Gv=2,Rn=3,oi=0,Oe=1,Cn=2,ei=0,pr=1,gu=2,_u=3,vu=4,Wv=5,Ei=100,jv=101,Xv=102,qv=103,Yv=104,$v=200,Kv=201,Zv=202,Jv=203,yl=204,bl=205,Qv=206,tx=207,ex=208,nx=209,ix=210,rx=211,sx=212,ox=213,ax=214,lx=0,cx=1,ux=2,Mo=3,fx=4,hx=5,dx=6,px=7,oc=0,mx=1,gx=2,ni=0,_x=1,vx=2,xx=3,yx=4,bx=5,Sx=6,Mx=7,Yd=300,Sr=301,Mr=302,Sl=303,Ml=304,Xo=306,El=1e3,Ai=1001,wl=1002,tn=1003,Ex=1004,Ss=1005,on=1006,pa=1007,Ri=1008,ii=1009,wx=1010,Tx=1011,$d=1012,Kd=1013,Er=1014,Jn=1015,Eo=1016,Zd=1017,Jd=1018,os=1020,Ax=35902,Rx=1021,Cx=1022,_n=1023,Px=1024,Lx=1025,mr=1026,ts=1027,Ix=1028,Qd=1029,Dx=1030,tp=1031,ep=1033,ma=33776,ga=33777,_a=33778,va=33779,xu=35840,yu=35841,bu=35842,Su=35843,np=36196,Mu=37492,Eu=37496,wu=37808,Tu=37809,Au=37810,Ru=37811,Cu=37812,Pu=37813,Lu=37814,Iu=37815,Du=37816,Uu=37817,Nu=37818,Ou=37819,Fu=37820,ku=37821,xa=36492,Bu=36494,zu=36495,Ux=36283,Hu=36284,Vu=36285,Gu=36286,Nx=3200,Ox=3201,ip=0,Fx=1,Zn="",hn="srgb",ui="srgb-linear",ac="display-p3",qo="display-p3-linear",wo="linear",te="srgb",To="rec709",Ao="p3",Bi=7680,Wu=519,kx=512,Bx=513,zx=514,rp=515,Hx=516,Vx=517,Gx=518,Wx=519,ju=35044,Xu="300 es",Pn=2e3,Ro=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Xr=Math.PI/180,es=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Re(n,t,e){return Math.max(t,Math.min(e,n))}function lc(n,t){return(n%t+t)%t}function jx(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Xx(n,t,e){return n!==t?(e-n)/(t-n):0}function qr(n,t,e){return(1-e)*n+e*t}function qx(n,t,e,i){return qr(n,t,1-Math.exp(-e*i))}function Yx(n,t=1){return t-Math.abs(lc(n,t*2)-t)}function $x(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kx(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Zx(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Jx(n,t){return n+Math.random()*(t-n)}function Qx(n){return n*(.5-Math.random())}function ty(n){n!==void 0&&(qu=n);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ey(n){return n*Xr}function ny(n){return n*es}function iy(n){return(n&n-1)===0&&n!==0}function ry(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function sy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oy(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),h=a((t-i)/2),d=s((i-t)/2),v=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function nr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ay={DEG2RAD:Xr,RAD2DEG:es,generateUUID:Pr,clamp:Re,euclideanModulo:lc,mapLinear:jx,inverseLerp:Xx,lerp:qr,damp:qx,pingpong:Yx,smoothstep:$x,smootherstep:Kx,randInt:Zx,randFloat:Jx,randFloatSpread:Qx,seededRandom:ty,degToRad:ey,radToDeg:ny,isPowerOfTwo:iy,ceilPowerOfTwo:ry,floorPowerOfTwo:sy,setQuaternionFromProperEuler:oy,normalize:De,denormalize:nr};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,r,s,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],g=r[0],m=r[3],p=r[6],S=r[1],y=r[4],E=r[7],C=r[2],R=r[5],L=r[8];return s[0]=a*g+o*S+l*C,s[3]=a*m+o*y+l*R,s[6]=a*p+o*E+l*L,s[1]=c*g+u*S+f*C,s[4]=c*m+u*y+f*R,s[7]=c*p+u*E+f*L,s[2]=h*g+d*S+v*C,s[5]=h*m+d*y+v*R,s[8]=h*p+d*E+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,v=e*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*c-u*i)*g,t[2]=(o*i-r*a)*g,t[3]=h*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new jt;function sp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ly(){const n=Co("canvas");return n.style.display="block",n}const Yu={};function cy(n){n in Yu||(Yu[n]=!0,console.warn(n))}const $u=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ms={[ui]:{transfer:wo,primaries:To,toReference:n=>n,fromReference:n=>n},[hn]:{transfer:te,primaries:To,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qo]:{transfer:wo,primaries:Ao,toReference:n=>n.applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u)},[ac]:{transfer:te,primaries:Ao,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u).convertLinearToSRGB()}},uy=new Set([ui,qo]),Jt={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!uy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ms[t].toReference,r=Ms[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ms[n].primaries},getTransfer:function(n){return n===Zn?wo:Ms[n].transfer}};function gr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ba(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class fy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Co("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(gr(e[i]/255)*255):e[i]=gr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hy=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Pr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sa(r[a].image)):s.push(Sa(r[a]))}else s=Sa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dy=0;class Fe extends Ni{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,i=Ai,r=Ai,s=on,a=Ri,o=_n,l=ii,c=Fe.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Pr(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Yd;Fe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(d+1)/2,C=(p+1)/2,R=(u+h)/4,L=(f+g)/4,z=(v+m)/4;return y>E&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=L/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=z/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Fe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new op(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends py{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ap extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class my extends Fe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],v=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==v){let m=1-o;const p=l*h+c*d+u*v+f*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),R=Math.atan2(C,p*S);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const E=o*S;if(l=l*m+h*E,c=c*m+d*E,u=u*m+v*E,f=f*m+g*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],v=s[a+3];return t[e]=o*v+u*f+l*d-c*h,t[e+1]=l*v+u*h+c*f-o*d,t[e+2]=c*v+u*d+o*h-l*f,t[e+3]=u*v-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,i=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new et,Zu=new Di;class as{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),ws.subVectors(this.max,Dr),Hi.subVectors(t.a,Dr),Vi.subVectors(t.b,Dr),Gi.subVectors(t.c,Dr),zn.subVectors(Vi,Hi),Hn.subVectors(Gi,Vi),pi.subVectors(Hi,Gi);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-pi.z,pi.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,pi.z,0,-pi.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-pi.y,pi.x,0];return!Ea(e,Hi,Vi,Gi,ws)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Hi,Vi,Gi,ws))?!1:(Ts.crossVectors(zn,Hn),e=[Ts.x,Ts.y,Ts.z],Ea(e,Hi,Vi,Gi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new et,new et,new et,new et,new et,new et,new et,new et],en=new et,Es=new as,Hi=new et,Vi=new et,Gi=new et,zn=new et,Hn=new et,pi=new et,Dr=new et,ws=new et,Ts=new et,mi=new et;function Ea(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){mi.fromArray(n,s);const o=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const gy=new as,Ur=new et,wa=new et;class ls{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gy.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(wa)),this.expandByPoint(Ur.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new et,Ta=new et,As=new et,Vn=new et,Aa=new et,Rs=new et,Ra=new et;class Yo{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ta.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Vn.dot(this.direction),l=-Vn.dot(As),c=Vn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ta).addScaledVector(As,h),d}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,i,r,s){Aa.subVectors(e,t),Rs.subVectors(i,t),Ra.crossVectors(Aa,Rs);let a=this.direction.dot(Ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);const l=o*this.direction.dot(Rs.crossVectors(Vn,Rs));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(Vn));if(c<0||l+c>a)return null;const u=-o*Vn.dot(Ra);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,r,s,a,o,l,c,u,f,h,d,v,g,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,h,d,v,g,m)}set(t,e,i,r,s,a,o,l,c,u,f,h,d,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,v=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+v*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,v=c*u,g=c*f;e[0]=h+g*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,v=c*u,g=c*f;e[0]=h-g*o,e[4]=-a*f,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,v=o*u,g=o*f;e[0]=l*u,e[4]=v*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=g-h*f,e[8]=v*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+v,e[10]=h-g*f}else if(t.order==="XZY"){const h=a*l,d=a*c,v=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=a*u,e[9]=d*f-v,e[2]=v*f-d,e[6]=o*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_y,t,vy)}lookAt(t,e,i){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Gn.crossVectors(i,He),Gn.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Gn.crossVectors(i,He)),Gn.normalize(),Cs.crossVectors(He,Gn),r[0]=Gn.x,r[4]=Cs.x,r[8]=He.x,r[1]=Gn.y,r[5]=Cs.y,r[9]=He.y,r[2]=Gn.z,r[6]=Cs.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],E=i[11],C=i[15],R=r[0],L=r[4],z=r[8],A=r[12],w=r[1],G=r[5],I=r[9],U=r[13],M=r[2],V=r[6],$=r[10],X=r[14],W=r[3],Q=r[7],lt=r[11],Y=r[15];return s[0]=a*R+o*w+l*M+c*W,s[4]=a*L+o*G+l*V+c*Q,s[8]=a*z+o*I+l*$+c*lt,s[12]=a*A+o*U+l*X+c*Y,s[1]=u*R+f*w+h*M+d*W,s[5]=u*L+f*G+h*V+d*Q,s[9]=u*z+f*I+h*$+d*lt,s[13]=u*A+f*U+h*X+d*Y,s[2]=v*R+g*w+m*M+p*W,s[6]=v*L+g*G+m*V+p*Q,s[10]=v*z+g*I+m*$+p*lt,s[14]=v*A+g*U+m*X+p*Y,s[3]=S*R+y*w+E*M+C*W,s[7]=S*L+y*G+E*V+C*Q,s[11]=S*z+y*I+E*$+C*lt,s[15]=S*A+y*U+E*X+C*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+g*(+e*l*d-e*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+e*c*f-e*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-e*l*f+e*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],v=t[12],g=t[13],m=t[14],p=t[15],S=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,y=v*h*c-u*m*c-v*l*d+a*m*d+u*l*p-a*h*p,E=u*g*c-v*f*c+v*o*d-a*g*d-u*o*p+a*f*p,C=v*f*l-u*g*l-v*o*h+a*g*h+u*o*m-a*f*m,R=e*S+i*y+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=S*L,t[1]=(g*h*s-f*m*s-g*r*d+i*m*d+f*r*p-i*h*p)*L,t[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*L,t[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*L,t[4]=y*L,t[5]=(u*m*s-v*h*s+v*r*d-e*m*d-u*r*p+e*h*p)*L,t[6]=(v*l*s-a*m*s-v*r*c+e*m*c+a*r*p-e*l*p)*L,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*d+e*l*d)*L,t[8]=E*L,t[9]=(v*f*s-u*g*s-v*i*d+e*g*d+u*i*p-e*f*p)*L,t[10]=(a*g*s-v*o*s+v*i*c-e*g*c-a*i*p+e*o*p)*L,t[11]=(u*o*s-a*f*s-u*i*c+e*f*c+a*i*d-e*o*d)*L,t[12]=C*L,t[13]=(u*g*r-v*f*r+v*i*h-e*g*h-u*i*m+e*f*m)*L,t[14]=(v*o*r-a*g*r-v*i*l+e*g*l+a*i*m-e*o*m)*L,t[15]=(a*f*r-u*o*r+u*i*l-e*f*l-a*i*h+e*o*h)*L,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,v=s*f,g=a*u,m=a*f,p=o*f,S=l*c,y=l*u,E=l*f,C=i.x,R=i.y,L=i.z;return r[0]=(1-(g+p))*C,r[1]=(d+E)*C,r[2]=(v-y)*C,r[3]=0,r[4]=(d-E)*R,r[5]=(1-(h+p))*R,r[6]=(m+S)*R,r[7]=0,r[8]=(v+y)*L,r[9]=(m-S)*L,r[10]=(1-(h+g))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const a=Wi.set(r[4],r[5],r[6]).length(),o=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Pn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,v;if(o===Pn)d=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ro)d=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Pn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(a-s),h=(e+t)*c,d=(i+r)*u;let v,g;if(o===Pn)v=(a+s)*f,g=-2*f;else if(o===Ro)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new et,nn=new ae,_y=new et(0,0,0),vy=new et(1,1,1),Gn=new et,Cs=new et,He=new et,Ju=new ae,Qu=new Di;class yn{constructor(t=0,e=0,i=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class lp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xy=0;const tf=new et,ji=new Di,En=new ae,Ps=new et,Nr=new et,yy=new et,by=new Di,ef=new et(1,0,0),nf=new et(0,1,0),rf=new et(0,0,1),sf={type:"added"},Sy={type:"removed"},Xi={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Le extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new et,e=new yn,i=new Di,r=new et(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new jt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(ef,t)}rotateY(t){return this.rotateOnAxis(nf,t)}rotateZ(t){return this.rotateOnAxis(rf,t)}translateOnAxis(t,e){return tf.copy(t).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ef,t)}translateY(t){return this.translateOnAxis(nf,t)}translateZ(t){return this.translateOnAxis(rf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Nr,Ps,this.up):En.lookAt(Ps,Nr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(En),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sy),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,by,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new et(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new et,wn=new et,Pa=new et,Tn=new et,qi=new et,Yi=new et,of=new et,La=new et,Ia=new et,Da=new et;class gn{constructor(t=new et,e=new et,i=new et){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){rn.subVectors(r,e),wn.subVectors(i,e),Pa.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(Pa),c=wn.dot(wn),u=wn.dot(Pa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-d-v,v,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(t,e,i,r){return rn.subVectors(i,e),wn.subVectors(t,e),rn.cross(wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return gn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),Yi.subVectors(s,i),La.subVectors(t,i);const l=qi.dot(La),c=Yi.dot(La);if(l<=0&&c<=0)return e.copy(i);Ia.subVectors(t,r);const u=qi.dot(Ia),f=Yi.dot(Ia);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(qi,a);Da.subVectors(t,s);const d=qi.dot(Da),v=Yi.dot(Da);if(v>=0&&d<=v)return e.copy(s);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(i).addScaledVector(Yi,o);const m=u*v-d*f;if(m<=0&&f-u>=0&&d-v>=0)return of.subVectors(s,r),o=(f-u)/(f-u+(d-v)),e.copy(r).addScaledVector(of,o);const p=1/(m+g+h);return a=g*p,o=h*p,e.copy(i).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=lc(t,1),e=Re(e,0,1),i=Re(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ua(a,s,t+1/3),this.g=Ua(a,s,t),this.b=Ua(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const i=cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Re(Ae.r*255,0,255))*65536+Math.round(Re(Ae.g*255,0,255))*256+Math.round(Re(Ae.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,r=Ae.g,s=Ae.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=hn){Jt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,r=Ae.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ls);const i=qr(Wn.h,Ls.h,e),r=qr(Wn.s,Ls.s,e),s=qr(Wn.l,Ls.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Xt;Xt.NAMES=cp;let My=0;class Dn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=pr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=bl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class up extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new et,Is=new Ot;class vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ju,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ju&&(t.usage=this.usage),t}}class fp extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hp extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pe extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ey=0;const qe=new ae,Na=new Le,$i=new et,Ve=new as,Or=new as,ye=new et;class We extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sp(t)?hp:fp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Ve.min,Or.min),Ve.expandByPoint(ye),ye.addVectors(Ve.max,Or.max),Ve.expandByPoint(ye)):(Ve.expandByPoint(Or.min),Ve.expandByPoint(Or.max))}Ve.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(t,c),ye.add($i)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new et,l[z]=new et;const c=new et,u=new et,f=new et,h=new Ot,d=new Ot,v=new Ot,g=new et,m=new et;function p(z,A,w){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,z),d.fromBufferAttribute(s,A),v.fromBufferAttribute(s,w),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const G=1/(d.x*v.y-v.x*d.y);isFinite(G)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar(G),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(G),o[z].add(g),o[A].add(g),o[w].add(g),l[z].add(m),l[A].add(m),l[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let z=0,A=S.length;z<A;++z){const w=S[z],G=w.start,I=w.count;for(let U=G,M=G+I;U<M;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new et,E=new et,C=new et,R=new et;function L(z){C.fromBufferAttribute(r,z),R.copy(C);const A=o[z];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),E.crossVectors(R,A);const G=E.dot(l[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,G)}for(let z=0,A=S.length;z<A;++z){const w=S[z],G=w.start,I=w.count;for(let U=G,M=G+I;U<M;U+=3)L(t.getX(U+0)),L(t.getX(U+1)),L(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new et,s=new et,a=new et,o=new et,l=new et,c=new et,u=new et,f=new et;if(t)for(let h=0,d=t.count;h<d;h+=3){const v=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[v++]=c[d++]}return new vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new ae,gi=new Yo,Ds=new ls,lf=new et,Ki=new et,Zi=new et,Ji=new et,Oa=new et,Us=new et,Ns=new Ot,Os=new Ot,Fs=new Ot,cf=new et,uf=new et,ff=new et,ks=new et,Bs=new et;class an extends Le{constructor(t=new We,e=new up){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Oa.fromBufferAttribute(f,t),a?Us.addScaledVector(Oa,u):Us.addScaledVector(Oa.sub(e),u))}e.add(Us)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),gi.copy(t.ray).recast(t.near),!(Ds.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ds,lf)===null||gi.origin.distanceToSquared(lf)>(t.far-t.near)**2))&&(af.copy(s).invert(),gi.copy(t.ray).applyMatrix4(af),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const m=h[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,C=y;E<C;E+=3){const R=o.getX(E),L=o.getX(E+1),z=o.getX(E+2);r=zs(this,p,t,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);r=zs(this,a,t,i,c,u,f,S,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const m=h[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,C=y;E<C;E+=3){const R=E,L=E+1,z=E+2;r=zs(this,p,t,i,c,u,f,R,L,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=m,y=m+1,E=m+2;r=zs(this,a,t,i,c,u,f,S,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function wy(n,t,e,i,r,s,a,o){let l;if(t.side===Oe?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===oi,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:n}}function zs(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ki),n.getVertexPosition(l,Zi),n.getVertexPosition(c,Ji);const u=wy(n,t,e,i,Ki,Zi,Ji,ks);if(u){r&&(Ns.fromBufferAttribute(r,o),Os.fromBufferAttribute(r,l),Fs.fromBufferAttribute(r,c),u.uv=gn.getInterpolation(ks,Ki,Zi,Ji,Ns,Os,Fs,new Ot)),s&&(Ns.fromBufferAttribute(s,o),Os.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,c),u.uv1=gn.getInterpolation(ks,Ki,Zi,Ji,Ns,Os,Fs,new Ot)),a&&(cf.fromBufferAttribute(a,o),uf.fromBufferAttribute(a,l),ff.fromBufferAttribute(a,c),u.normal=gn.getInterpolation(ks,Ki,Zi,Ji,cf,uf,ff,new et),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new et,materialIndex:0};gn.getNormal(Ki,Zi,Ji,f.normal),u.face=f}return u}class cs extends We{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,e,t,a,s,0),v("z","y","x",1,-1,i,e,-t,a,s,1),v("x","z","y",1,1,t,i,e,r,a,2),v("x","z","y",1,-1,t,i,-e,r,a,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function v(g,m,p,S,y,E,C,R,L,z,A){const w=E/L,G=C/z,I=E/2,U=C/2,M=R/2,V=L+1,$=z+1;let X=0,W=0;const Q=new et;for(let lt=0;lt<$;lt++){const Y=lt*G-U;for(let Z=0;Z<V;Z++){const gt=Z*w-I;Q[g]=gt*S,Q[m]=Y*y,Q[p]=M,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(Z/L),f.push(1-lt/z),X+=1}}for(let lt=0;lt<z;lt++)for(let Y=0;Y<L;Y++){const Z=h+Y+V*lt,gt=h+Y+V*(lt+1),J=h+(Y+1)+V*(lt+1),it=h+(Y+1)+V*lt;l.push(Z,gt,it),l.push(gt,J,it),W+=6}o.addGroup(d,W,A),d+=W,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=wr(n[e]);for(const r in i)t[r]=i[r]}return t}function Ty(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Ay={clone:wr,merge:Ue};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=Ty(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pp extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new et,hf=new Ot,df=new Ot;class Ze extends pp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,hf,df),e.subVectors(df,hf)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,tr=1;class Py extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ze(Qi,tr,t,e);r.layers=this.layers,this.add(r);const s=new Ze(Qi,tr,t,e);s.layers=this.layers,this.add(s);const a=new Ze(Qi,tr,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Qi,tr,t,e);o.layers=this.layers,this.add(o);const l=new Ze(Qi,tr,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Qi,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class mp extends Fe{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ly extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new mp(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cs(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:ei});s.uniforms.tEquirect.value=e;const a=new an(r,s),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=on),new Py(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Fa=new et,Iy=new et,Dy=new jt;class $n{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Fa.subVectors(i,e).cross(Iy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Dy.getNormalMatrix(t),r=this.coplanarPoint(Fa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ls,Hs=new et;class gp{constructor(t=new $n,e=new $n,i=new $n,r=new $n,s=new $n,a=new $n){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],v=r[9],g=r[10],m=r[11],p=r[12],S=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+a,h+u,m+v,E+S).normalize(),i[3].setComponents(l-a,h-u,m-v,E-S).normalize(),i[4].setComponents(l-o,h-f,m-g,E-y).normalize(),e===Pn)i[5].setComponents(l+o,h+f,m+g,E+y).normalize();else if(e===Ro)i[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Hs.x=r.normal.x>0?t.max.x:t.min.x,Hs.y=r.normal.y>0?t.max.y:t.min.y,Hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Uy(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,v=h.length;d<v;d++){const g=h[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class $o extends We{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let y=0;y<c;y++){const E=y*f-s;v.push(E,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,E=S+c*(p+1),C=S+1+c*(p+1),R=S+1+c*p;d.push(y,E,R),d.push(E,C,R)}this.setIndex(d),this.setAttribute("position",new pe(v,3)),this.setAttribute("normal",new pe(g,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ub=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ES=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,US=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Ny,alphahash_pars_fragment:Oy,alphamap_fragment:Fy,alphamap_pars_fragment:ky,alphatest_fragment:By,alphatest_pars_fragment:zy,aomap_fragment:Hy,aomap_pars_fragment:Vy,batching_pars_vertex:Gy,batching_vertex:Wy,begin_vertex:jy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:$y,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Qy,color_fragment:tb,color_pars_fragment:eb,color_pars_vertex:nb,color_vertex:ib,common:rb,cube_uv_reflection_fragment:sb,defaultnormal_vertex:ob,displacementmap_pars_vertex:ab,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:ub,colorspace_fragment:fb,colorspace_pars_fragment:hb,envmap_fragment:db,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Rb,envmap_vertex:_b,fog_vertex:vb,fog_pars_vertex:xb,fog_fragment:yb,fog_pars_fragment:bb,gradientmap_pars_fragment:Sb,lightmap_fragment:Mb,lightmap_pars_fragment:Eb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Tb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:Pb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Db,lights_physical_pars_fragment:Ub,lights_fragment_begin:Nb,lights_fragment_maps:Ob,lights_fragment_end:Fb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:zb,logdepthbuf_vertex:Hb,map_fragment:Vb,map_pars_fragment:Gb,map_particle_fragment:Wb,map_particle_pars_fragment:jb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Yb,morphcolor_vertex:$b,morphnormal_vertex:Kb,morphtarget_pars_vertex:Zb,morphtarget_vertex:Jb,normal_fragment_begin:Qb,normal_fragment_maps:tS,normal_pars_fragment:eS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,opaque_fragment:cS,packing:uS,premultiplied_alpha_fragment:fS,project_vertex:hS,dithering_fragment:dS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:vS,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:bS,skinning_pars_vertex:SS,skinning_vertex:MS,skinnormal_vertex:ES,specularmap_fragment:wS,specularmap_pars_fragment:TS,tonemapping_fragment:AS,tonemapping_pars_fragment:RS,transmission_fragment:CS,transmission_pars_fragment:PS,uv_pars_fragment:LS,uv_pars_vertex:IS,uv_vertex:DS,worldpos_vertex:US,background_vert:NS,background_frag:OS,backgroundCube_vert:FS,backgroundCube_frag:kS,cube_vert:BS,cube_frag:zS,depth_vert:HS,depth_frag:VS,distanceRGBA_vert:GS,distanceRGBA_frag:WS,equirect_vert:jS,equirect_frag:XS,linedashed_vert:qS,linedashed_frag:YS,meshbasic_vert:$S,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:JS,meshmatcap_vert:QS,meshmatcap_frag:tM,meshnormal_vert:eM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:fM,shadow_frag:hM,sprite_vert:dM,sprite_frag:pM},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},dn={basic:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([St.points,St.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([St.common,St.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([St.sprite,St.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([St.common,St.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};dn.physical={uniforms:Ue([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Vs={r:0,b:0,g:0},vi=new yn,mM=new ae;function gM(n,t,e,i,r,s,a){const o=new Xt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(m,p){let S=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Xo)?(u===void 0&&(u=new an(new cs(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:wr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(p.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(vi)),u.material.toneMapped=Jt.getTransfer(y.colorSpace)!==te,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new an(new $o(2,2),new ai({name:"BackgroundMaterial",uniforms:wr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Vs,dp(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function _M(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,G,I,U,M){let V=!1;const $=f(U,I,G);s!==$&&(s=$,c(s.object)),V=d(w,U,I,M),V&&v(w,U,I,M),M!==null&&t.update(M,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(w,G,I,U),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function f(w,G,I){const U=I.wireframe===!0;let M=i[w.id];M===void 0&&(M={},i[w.id]=M);let V=M[G.id];V===void 0&&(V={},M[G.id]=V);let $=V[U];return $===void 0&&($=h(l()),V[U]=$),$}function h(w){const G=[],I=[],U=[];for(let M=0;M<e;M++)G[M]=0,I[M]=0,U[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:I,attributeDivisors:U,object:w,attributes:{},index:null}}function d(w,G,I,U){const M=s.attributes,V=G.attributes;let $=0;const X=I.getAttributes();for(const W in X)if(X[W].location>=0){const lt=M[W];let Y=V[W];if(Y===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),lt===void 0||lt.attribute!==Y||Y&&lt.data!==Y.data)return!0;$++}return s.attributesNum!==$||s.index!==U}function v(w,G,I,U){const M={},V=G.attributes;let $=0;const X=I.getAttributes();for(const W in X)if(X[W].location>=0){let lt=V[W];lt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor));const Y={};Y.attribute=lt,lt&&lt.data&&(Y.data=lt.data),M[W]=Y,$++}s.attributes=M,s.attributesNum=$,s.index=U}function g(){const w=s.newAttributes;for(let G=0,I=w.length;G<I;G++)w[G]=0}function m(w){p(w,0)}function p(w,G){const I=s.newAttributes,U=s.enabledAttributes,M=s.attributeDivisors;I[w]=1,U[w]===0&&(n.enableVertexAttribArray(w),U[w]=1),M[w]!==G&&(n.vertexAttribDivisor(w,G),M[w]=G)}function S(){const w=s.newAttributes,G=s.enabledAttributes;for(let I=0,U=G.length;I<U;I++)G[I]!==w[I]&&(n.disableVertexAttribArray(I),G[I]=0)}function y(w,G,I,U,M,V,$){$===!0?n.vertexAttribIPointer(w,G,I,M,V):n.vertexAttribPointer(w,G,I,U,M,V)}function E(w,G,I,U){g();const M=U.attributes,V=I.getAttributes(),$=G.defaultAttributeValues;for(const X in V){const W=V[X];if(W.location>=0){let Q=M[X];if(Q===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const lt=Q.normalized,Y=Q.itemSize,Z=t.get(Q);if(Z===void 0)continue;const gt=Z.buffer,J=Z.type,it=Z.bytesPerElement,dt=J===n.INT||J===n.UNSIGNED_INT||Q.gpuType===Kd;if(Q.isInterleavedBufferAttribute){const pt=Q.data,yt=pt.stride,bt=Q.offset;if(pt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)p(W.location+Tt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Tt=0;Tt<W.locationSize;Tt++)y(W.location+Tt,Y/W.locationSize,J,lt,yt*it,(bt+Y/W.locationSize*Tt)*it,dt)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,Y/W.locationSize,J,lt,Y*it,Y/W.locationSize*pt*it,dt)}}else if($!==void 0){const lt=$[X];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(W.location,lt);break;case 3:n.vertexAttrib3fv(W.location,lt);break;case 4:n.vertexAttrib4fv(W.location,lt);break;default:n.vertexAttrib1fv(W.location,lt)}}}}S()}function C(){z();for(const w in i){const G=i[w];for(const I in G){const U=G[I];for(const M in U)u(U[M].object),delete U[M];delete G[I]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const G=i[w.id];for(const I in G){const U=G[I];for(const M in U)u(U[M].object),delete U[M];delete G[I]}delete i[w.id]}function L(w){for(const G in i){const I=i[G];if(I[w.id]===void 0)continue;const U=I[w.id];for(const M in U)u(U[M].object),delete U[M];delete I[w.id]}}function z(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function vM(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{f.multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xM(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:p,maxSamples:S}}function yM(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new $n,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,y=S*4;let E=p.clippingState||null;l.value=E,E=u(v,h,y,d);for(let C=0;C!==y;++C)E[C]=e[C];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=d;y!==g;++y,E+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function bM(n){let t=new WeakMap;function e(a,o){return o===Sl?a.mapping=Sr:o===Ml&&(a.mapping=Mr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sl||o===Ml)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ly(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class SM extends pp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,pf=[.125,.215,.35,.446,.526,.582],wi=20,ka=new SM,mf=new Xt;let Ba=null,za=0,Ha=0,Va=!1;const bi=(1+Math.sqrt(5))/2,er=1/bi,gf=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,bi,er),new et(0,bi,-er),new et(er,0,bi),new et(-er,0,bi),new et(bi,er,0),new et(-bi,er,0)];class _f{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Eo,format:_n,colorSpace:ui,depthBuffer:!1},r=vf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(s)),this._blurMaterial=EM(s,t,e)}return r}_compileMaterial(t){const e=new an(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,i,r){const o=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(mf),u.toneMapping=ni,u.autoClear=!1;const d=new up({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),v=new an(new cs,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(mf),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Gs(r,S*y,p>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Sr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ka)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gf[(r-1)%gf.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new an(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let S=0;for(let L=0;L<wi;++L){const z=L/g,A=Math.exp(-z*z/2);p.push(A),L===0?S+=A:L<m&&(S+=2*A)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const E=this._sizeLods[r],C=3*E*(r>y-ir?r-y+ir:0),R=4*(this._cubeSize-E);Gs(e,C,R,3*E,2*E),l.setRenderTarget(e),l.render(f,ka)}}function MM(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+pf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ir?l=pf[a-n+ir-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,g=3,m=2,p=1,S=new Float32Array(g*v*d),y=new Float32Array(m*v*d),E=new Float32Array(p*v*d);for(let R=0;R<d;R++){const L=R%3*2/3-1,z=R>2?0:-1,A=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];S.set(A,g*v*R),y.set(h,m*v*R);const w=[R,R,R,R,R,R];E.set(w,p*v*R)}const C=new We;C.setAttribute("position",new vn(S,g)),C.setAttribute("uv",new vn(y,m)),C.setAttribute("faceIndex",new vn(E,p)),t.push(C),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vf(n,t,e){const i=new Ii(n,t,e);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function EM(n,t,e){const i=new Float32Array(wi),r=new et(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function xf(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yf(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wM(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sl||l===Ml,u=l===Sr||l===Mr;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new _f(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new _f(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function TM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AM(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const v in h.attributes)t.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)t.update(h[v],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,E=S.length;y<E;y+=3){const C=S[y+0],R=S[y+1],L=S[y+2];h.push(C,R,R,L,L,C)}}else if(v!==void 0){const S=v.array;g=v.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const C=y+0,R=y+1,L=y+2;h.push(C,R,R,L,L,C)}}else return;const m=new(sp(h)?hp:fp)(h,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function RM(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),e.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<d;g++)this.render(f[g]/a,h[g]);else{v.multiDrawElementsWEBGL(i,h,0,s,f,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function CM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function PM(n,t,e){const i=new WeakMap,r=new Me;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let A=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*C*4*f),L=new ap(R,E,C,f);L.type=Jn,L.needsUpdate=!0;const z=y*4;for(let w=0;w<f;w++){const G=m[w],I=p[w],U=S[w],M=E*C*4*w;for(let V=0;V<G.count;V++){const $=V*z;d===!0&&(r.fromBufferAttribute(G,V),R[M+$+0]=r.x,R[M+$+1]=r.y,R[M+$+2]=r.z,R[M+$+3]=0),v===!0&&(r.fromBufferAttribute(I,V),R[M+$+4]=r.x,R[M+$+5]=r.y,R[M+$+6]=r.z,R[M+$+7]=0),g===!0&&(r.fromBufferAttribute(U,V),R[M+$+8]=r.x,R[M+$+9]=r.y,R[M+$+10]=r.z,R[M+$+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new Ot(E,C)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function LM(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class vp extends Fe{constructor(t,e,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:mr,u!==mr&&u!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mr&&(i=Er),i===void 0&&u===ts&&(i=os),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xp=new Fe,yp=new vp(1,1);yp.compareFunction=rp;const bp=new ap,Sp=new my,Mp=new mp,bf=[],Sf=[],Mf=new Float32Array(16),Ef=new Float32Array(9),wf=new Float32Array(4);function Lr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ko(n,t){let e=Sf[t];e===void 0&&(e=new Int32Array(t),Sf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function IM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function DM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),_e(e,t)}}function UM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),_e(e,t)}}function NM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),_e(e,t)}}function OM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;wf.set(i),n.uniformMatrix2fv(this.addr,!1,wf),_e(e,i)}}function FM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),_e(e,i)}}function kM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Mf.set(i),n.uniformMatrix4fv(this.addr,!1,Mf),_e(e,i)}}function BM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),_e(e,t)}}function HM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),_e(e,t)}}function VM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),_e(e,t)}}function GM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),_e(e,t)}}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),_e(e,t)}}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),_e(e,t)}}function qM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?yp:xp;e.setTexture2D(t||s,r)}function YM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Sp,r)}function $M(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Mp,r)}function KM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||bp,r)}function ZM(n){switch(n){case 5126:return IM;case 35664:return DM;case 35665:return UM;case 35666:return NM;case 35674:return OM;case 35675:return FM;case 35676:return kM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return jM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}function JM(n,t){n.uniform1fv(this.addr,t)}function QM(n,t){const e=Lr(t,this.size,2);n.uniform2fv(this.addr,e)}function tE(n,t){const e=Lr(t,this.size,3);n.uniform3fv(this.addr,e)}function eE(n,t){const e=Lr(t,this.size,4);n.uniform4fv(this.addr,e)}function nE(n,t){const e=Lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function iE(n,t){const e=Lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function rE(n,t){const e=Lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sE(n,t){n.uniform1iv(this.addr,t)}function oE(n,t){n.uniform2iv(this.addr,t)}function aE(n,t){n.uniform3iv(this.addr,t)}function lE(n,t){n.uniform4iv(this.addr,t)}function cE(n,t){n.uniform1uiv(this.addr,t)}function uE(n,t){n.uniform2uiv(this.addr,t)}function fE(n,t){n.uniform3uiv(this.addr,t)}function hE(n,t){n.uniform4uiv(this.addr,t)}function dE(n,t,e){const i=this.cache,r=t.length,s=Ko(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||xp,s[a])}function pE(n,t,e){const i=this.cache,r=t.length,s=Ko(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Sp,s[a])}function mE(n,t,e){const i=this.cache,r=t.length,s=Ko(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Mp,s[a])}function gE(n,t,e){const i=this.cache,r=t.length,s=Ko(e,r);ge(i,s)||(n.uniform1iv(this.addr,s),_e(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||bp,s[a])}function _E(n){switch(n){case 5126:return JM;case 35664:return QM;case 35665:return tE;case 35666:return eE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return aE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}class vE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ZM(e.type)}}class xE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_E(e.type)}}class yE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Tf(n,t){n.seq.push(t),n.map[t.id]=t}function bE(n,t,e){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Tf(e,c===void 0?new vE(o,n,t):new xE(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new yE(o),Tf(e,f)),e=f}}}class ao{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);bE(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Af(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const SE=37297;let ME=0;function EE(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function wE(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Ao&&e===To?i="LinearDisplayP3ToLinearSRGB":t===To&&e===Ao&&(i="LinearSRGBToLinearDisplayP3"),n){case ui:case qo:return[i,"LinearTransferOETF"];case hn:case ac:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+EE(n.getShaderSource(t),a)}else return r}function TE(n,t){const e=wE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function AE(n,t){let e;switch(t){case _x:e="Linear";break;case vx:e="Reinhard";break;case xx:e="OptimizedCineon";break;case yx:e="ACESFilmic";break;case Sx:e="AgX";break;case Mx:e="Neutral";break;case bx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function RE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function CE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function PE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function kr(n){return n!==""}function Cf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(n){return n.replace(LE,DE)}const IE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DE(n,t){let e=Wt[t];if(e===void 0){const i=IE.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}const UE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(n){return n.replace(UE,NE)}function NE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function If(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function OE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function FE(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function BE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case mx:t="ENVMAP_BLENDING_MIX";break;case gx:t="ENVMAP_BLENDING_ADD";break}return t}function zE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function HE(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=OE(e),c=FE(e),u=kE(e),f=BE(e),h=zE(e),d=RE(e),v=CE(s),g=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?AE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,TE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Tl(a),a=Cf(a,e),a=Pf(a,e),o=Tl(o),o=Cf(o,e),o=Pf(o,e),a=Lf(a),o=Lf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,E=S+p+o,C=Af(r,r.VERTEX_SHADER,y),R=Af(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,R),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(G){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(C).trim(),M=r.getShaderInfoLog(R).trim();let V=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,R);else{const X=Rf(r,C,"vertex"),W=Rf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+I+`
`+X+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||M==="")&&($=!1);$&&(G.diagnostics={runnable:V,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:M,prefix:p}})}r.deleteShader(C),r.deleteShader(R),z=new ao(r,g),A=PE(r,g)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,SE)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ME++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let VE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new WE(t),e.set(t,i)),i}}class WE{constructor(t){this.id=VE++,this.code=t,this.usedTimes=0}}function jE(n,t,e,i,r,s,a){const o=new lp,l=new GE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,w,G,I,U){const M=I.fog,V=U.geometry,$=A.isMeshStandardMaterial?I.environment:null,X=(A.isMeshStandardMaterial?e:t).get(A.envMap||$),W=X&&X.mapping===Xo?X.image.height:null,Q=v[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=lt!==void 0?lt.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let gt,J,it,dt;if(Q){const ve=dn[Q];gt=ve.vertexShader,J=ve.fragmentShader}else gt=A.vertexShader,J=A.fragmentShader,l.update(A),it=l.getVertexShaderID(A),dt=l.getFragmentShaderID(A);const pt=n.getRenderTarget(),yt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Tt=!!A.map,tt=!!A.matcap,Pt=!!X,k=!!A.aoMap,x=!!A.lightMap,F=!!A.bumpMap,H=!!A.normalMap,b=!!A.displacementMap,_=!!A.emissiveMap,P=!!A.metalnessMap,N=!!A.roughnessMap,B=A.anisotropy>0,D=A.clearcoat>0,q=A.iridescence>0,j=A.sheen>0,K=A.transmission>0,rt=B&&!!A.anisotropyMap,ot=D&&!!A.clearcoatMap,ft=D&&!!A.clearcoatNormalMap,_t=D&&!!A.clearcoatRoughnessMap,mt=q&&!!A.iridescenceMap,xt=q&&!!A.iridescenceThicknessMap,It=j&&!!A.sheenColorMap,At=j&&!!A.sheenRoughnessMap,Ft=!!A.specularMap,Ht=!!A.specularColorMap,Rt=!!A.specularIntensityMap,wt=K&&!!A.transmissionMap,T=K&&!!A.thicknessMap,st=!!A.gradientMap,ht=!!A.alphaMap,vt=A.alphaTest>0,Mt=!!A.alphaHash,Vt=!!A.extensions;let qt=ni;A.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(qt=n.toneMapping);const ne={shaderID:Q,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:J,defines:A.defines,customVertexShaderID:it,customFragmentShaderID:dt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:bt,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ui,alphaToCoverage:!!A.alphaToCoverage,map:Tt,matcap:tt,envMap:Pt,envMapMode:Pt&&X.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:x,bumpMap:F,normalMap:H,displacementMap:h&&b,emissiveMap:_,normalMapObjectSpace:H&&A.normalMapType===Fx,normalMapTangentSpace:H&&A.normalMapType===ip,metalnessMap:P,roughnessMap:N,anisotropy:B,anisotropyMap:rt,clearcoat:D,clearcoatMap:ot,clearcoatNormalMap:ft,clearcoatRoughnessMap:_t,iridescence:q,iridescenceMap:mt,iridescenceThicknessMap:xt,sheen:j,sheenColorMap:It,sheenRoughnessMap:At,specularMap:Ft,specularColorMap:Ht,specularIntensityMap:Rt,transmission:K,transmissionMap:wt,thicknessMap:T,gradientMap:st,opaque:A.transparent===!1&&A.blending===pr&&A.alphaToCoverage===!1,alphaMap:ht,alphaTest:vt,alphaHash:Mt,combine:A.combine,mapUv:Tt&&g(A.map.channel),aoMapUv:k&&g(A.aoMap.channel),lightMapUv:x&&g(A.lightMap.channel),bumpMapUv:F&&g(A.bumpMap.channel),normalMapUv:H&&g(A.normalMap.channel),displacementMapUv:b&&g(A.displacementMap.channel),emissiveMapUv:_&&g(A.emissiveMap.channel),metalnessMapUv:P&&g(A.metalnessMap.channel),roughnessMapUv:N&&g(A.roughnessMap.channel),anisotropyMapUv:rt&&g(A.anisotropyMap.channel),clearcoatMapUv:ot&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(A.sheenRoughnessMap.channel),specularMapUv:Ft&&g(A.specularMap.channel),specularColorMapUv:Ht&&g(A.specularColorMap.channel),specularIntensityMapUv:Rt&&g(A.specularIntensityMap.channel),transmissionMapUv:wt&&g(A.transmissionMap.channel),thicknessMapUv:T&&g(A.thicknessMap.channel),alphaMapUv:ht&&g(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||B),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Tt||ht),fog:!!M,useFog:A.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Tt&&A.map.isVideoTexture===!0&&Jt.getTransfer(A.map.colorSpace)===te,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Cn,flipSided:A.side===Oe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Vt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function p(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)w.push(G),w.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(S(w,A),y(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function S(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function y(A,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),A.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),A.push(o.mask)}function E(A){const w=v[A.type];let G;if(w){const I=dn[w];G=Ay.clone(I.uniforms)}else G=A.uniforms;return G}function C(A,w){let G;for(let I=0,U=u.length;I<U;I++){const M=u[I];if(M.cacheKey===w){G=M,++G.usedTimes;break}}return G===void 0&&(G=new HE(n,w,A,s),u.push(G)),G}function R(A){if(--A.usedTimes===0){const w=u.indexOf(A);u[w]=u[u.length-1],u.pop(),A.destroy()}}function L(A){l.remove(A)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:z}}function XE(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function qE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Df(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uf(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,h,d,v,g,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function o(f,h,d,v,g,m){const p=a(f,h,d,v,g,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,v,g,m){const p=a(f,h,d,v,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||qE),i.length>1&&i.sort(h||Df),r.length>1&&r.sort(h||Df)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function YE(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Uf,n.set(i,[a])):r>=s.length?(a=new Uf,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function $E(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new Xt};break;case"SpotLight":e={position:new et,direction:new et,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new et,halfWidth:new et,halfHeight:new et};break}return n[t.id]=e,e}}}function KE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ZE=0;function JE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function QE(n){const t=new $E,e=KE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new et);const r=new et,s=new ae,a=new ae;function o(c,u){let f=0,h=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,g=0,m=0,p=0,S=0,y=0,E=0,C=0,R=0,L=0,z=0;c.sort(JE);const A=u===!0?Math.PI:1;for(let G=0,I=c.length;G<I;G++){const U=c[G],M=U.color,V=U.intensity,$=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=M.r*V*A,h+=M.g*V*A,d+=M.b*V*A;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],V);z++}else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const Q=U.shadow,lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,i.directionalShadow[v]=lt,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=U.shadow.matrix,y++}i.directional[v]=W,v++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(M).multiplyScalar(V*A),W.distance=$,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[m]=W;const Q=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,Q.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[m]=Q.matrix,U.castShadow){const lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,i.spotShadow[m]=lt,i.spotShadowMap[m]=X,C++}m++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(M).multiplyScalar(V),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=W,p++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*A),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Q=U.shadow,lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,lt.shadowCameraNear=Q.camera.near,lt.shadowCameraFar=Q.camera.far,i.pointShadow[g]=lt,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=W,g++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(V*A),W.groundColor.copy(U.groundColor).multiplyScalar(V*A),i.hemi[S]=W,S++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const w=i.hash;(w.directionalLength!==v||w.pointLength!==g||w.spotLength!==m||w.rectAreaLength!==p||w.hemiLength!==S||w.numDirectionalShadows!==y||w.numPointShadows!==E||w.numSpotShadows!==C||w.numSpotMaps!==R||w.numLightProbes!==z)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=z,w.directionalLength=v,w.pointLength=g,w.spotLength=m,w.rectAreaLength=p,w.hemiLength=S,w.numDirectionalShadows=y,w.numPointShadows=E,w.numSpotShadows=C,w.numSpotMaps=R,w.numLightProbes=z,i.version=ZE++)}function l(c,u){let f=0,h=0,d=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(y.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Nf(n){const t=new QE(n),e=[],i=[];function r(){e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:r,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function tw(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Nf(n),t.set(r,[o])):s>=a.length?(o=new Nf(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class ew extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nw extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sw(n,t,e){let i=new gp;const r=new Ot,s=new Ot,a=new Me,o=new ew({depthPacking:Ox}),l=new nw,c={},u=e.maxTextureSize,f={[oi]:Oe,[Oe]:oi,[Cn]:Cn},h=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:iw,fragmentShader:rw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new We;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new an(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let p=this.type;this.render=function(R,L,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const A=n.getRenderTarget(),w=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ei),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Rn&&this.type===Rn,M=p===Rn&&this.type!==Rn;for(let V=0,$=R.length;V<$;V++){const X=R[V],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const Q=W.getFrameExtents();if(r.multiply(Q),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||U===!0||M===!0){const Y=this.type!==Rn?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Ii(r.x,r.y,Y),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const lt=W.getViewportCount();for(let Y=0;Y<lt;Y++){const Z=W.getViewport(Y);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(a),W.updateMatrices(X,Y),i=W.getFrustum(),E(L,z,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Rn&&S(W,z),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,w,G)};function S(R,L){const z=t.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,z,h,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,z,d,g,null)}function y(R,L,z,A){let w=null;const G=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)w=G;else if(w=z.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const I=w.uuid,U=L.uuid;let M=c[I];M===void 0&&(M={},c[I]=M);let V=M[U];V===void 0&&(V=w.clone(),M[U]=V,L.addEventListener("dispose",C)),w=V}if(w.visible=L.visible,w.wireframe=L.wireframe,A===Rn?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=n.properties.get(w);I.light=z}return w}function E(R,L,z,A,w){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Rn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const U=t.update(R),M=R.material;if(Array.isArray(M)){const V=U.groups;for(let $=0,X=V.length;$<X;$++){const W=V[$],Q=M[W.materialIndex];if(Q&&Q.visible){const lt=y(R,Q,A,w);R.onBeforeShadow(n,R,L,z,U,lt,W),n.renderBufferDirect(z,null,U,lt,R,W),R.onAfterShadow(n,R,L,z,U,lt,W)}}}else if(M.visible){const V=y(R,M,A,w);R.onBeforeShadow(n,R,L,z,U,V,null),n.renderBufferDirect(z,null,U,V,R,null),R.onAfterShadow(n,R,L,z,U,V,null)}}const I=R.children;for(let U=0,M=I.length;U<M;U++)E(I[U],L,z,A,w)}function C(R){R.target.removeEventListener("dispose",C);for(const z in c){const A=c[z],w=R.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function ow(n){function t(){let T=!1;const st=new Me;let ht=null;const vt=new Me(0,0,0,0);return{setMask:function(Mt){ht!==Mt&&!T&&(n.colorMask(Mt,Mt,Mt,Mt),ht=Mt)},setLocked:function(Mt){T=Mt},setClear:function(Mt,Vt,qt,ne,ve){ve===!0&&(Mt*=ne,Vt*=ne,qt*=ne),st.set(Mt,Vt,qt,ne),vt.equals(st)===!1&&(n.clearColor(Mt,Vt,qt,ne),vt.copy(st))},reset:function(){T=!1,ht=null,vt.set(-1,0,0,0)}}}function e(){let T=!1,st=null,ht=null,vt=null;return{setTest:function(Mt){Mt?dt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!T&&(n.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(ht!==Mt){switch(Mt){case lx:n.depthFunc(n.NEVER);break;case cx:n.depthFunc(n.ALWAYS);break;case ux:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case fx:n.depthFunc(n.EQUAL);break;case hx:n.depthFunc(n.GEQUAL);break;case dx:n.depthFunc(n.GREATER);break;case px:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=Mt}},setLocked:function(Mt){T=Mt},setClear:function(Mt){vt!==Mt&&(n.clearDepth(Mt),vt=Mt)},reset:function(){T=!1,st=null,ht=null,vt=null}}}function i(){let T=!1,st=null,ht=null,vt=null,Mt=null,Vt=null,qt=null,ne=null,ve=null;return{setTest:function(Zt){T||(Zt?dt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!T&&(n.stencilMask(Zt),st=Zt)},setFunc:function(Zt,ce,ue){(ht!==Zt||vt!==ce||Mt!==ue)&&(n.stencilFunc(Zt,ce,ue),ht=Zt,vt=ce,Mt=ue)},setOp:function(Zt,ce,ue){(Vt!==Zt||qt!==ce||ne!==ue)&&(n.stencilOp(Zt,ce,ue),Vt=Zt,qt=ce,ne=ue)},setLocked:function(Zt){T=Zt},setClear:function(Zt){ve!==Zt&&(n.clearStencil(Zt),ve=Zt)},reset:function(){T=!1,st=null,ht=null,vt=null,Mt=null,Vt=null,qt=null,ne=null,ve=null}}}const r=new t,s=new e,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,v=!1,g=null,m=null,p=null,S=null,y=null,E=null,C=null,R=new Xt(0,0,0),L=0,z=!1,A=null,w=null,G=null,I=null,U=null;const M=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=$>=2);let W=null,Q={};const lt=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),Z=new Me().fromArray(lt),gt=new Me().fromArray(Y);function J(T,st,ht,vt){const Mt=new Uint8Array(4),Vt=n.createTexture();n.bindTexture(T,Vt),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<ht;qt++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(st+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return Vt}const it={};it[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),s.setFunc(Mo),F(!1),H(mu),dt(n.CULL_FACE),k(ei);function dt(T){c[T]!==!0&&(n.enable(T),c[T]=!0)}function pt(T){c[T]!==!1&&(n.disable(T),c[T]=!1)}function yt(T,st){return u[T]!==st?(n.bindFramebuffer(T,st),u[T]=st,T===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=st),T===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(T,st){let ht=h,vt=!1;if(T){ht=f.get(st),ht===void 0&&(ht=[],f.set(st,ht));const Mt=T.textures;if(ht.length!==Mt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Vt=0,qt=Mt.length;Vt<qt;Vt++)ht[Vt]=n.COLOR_ATTACHMENT0+Vt;ht.length=Mt.length,vt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ht)}function Tt(T){return d!==T?(n.useProgram(T),d=T,!0):!1}const tt={[Ei]:n.FUNC_ADD,[jv]:n.FUNC_SUBTRACT,[Xv]:n.FUNC_REVERSE_SUBTRACT};tt[qv]=n.MIN,tt[Yv]=n.MAX;const Pt={[$v]:n.ZERO,[Kv]:n.ONE,[Zv]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[ix]:n.SRC_ALPHA_SATURATE,[ex]:n.DST_COLOR,[Qv]:n.DST_ALPHA,[Jv]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[nx]:n.ONE_MINUS_DST_COLOR,[tx]:n.ONE_MINUS_DST_ALPHA,[rx]:n.CONSTANT_COLOR,[sx]:n.ONE_MINUS_CONSTANT_COLOR,[ox]:n.CONSTANT_ALPHA,[ax]:n.ONE_MINUS_CONSTANT_ALPHA};function k(T,st,ht,vt,Mt,Vt,qt,ne,ve,Zt){if(T===ei){v===!0&&(pt(n.BLEND),v=!1);return}if(v===!1&&(dt(n.BLEND),v=!0),T!==Wv){if(T!==g||Zt!==z){if((m!==Ei||y!==Ei)&&(n.blendEquation(n.FUNC_ADD),m=Ei,y=Ei),Zt)switch(T){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gu:n.blendFunc(n.ONE,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}p=null,S=null,E=null,C=null,R.set(0,0,0),L=0,g=T,z=Zt}return}Mt=Mt||st,Vt=Vt||ht,qt=qt||vt,(st!==m||Mt!==y)&&(n.blendEquationSeparate(tt[st],tt[Mt]),m=st,y=Mt),(ht!==p||vt!==S||Vt!==E||qt!==C)&&(n.blendFuncSeparate(Pt[ht],Pt[vt],Pt[Vt],Pt[qt]),p=ht,S=vt,E=Vt,C=qt),(ne.equals(R)===!1||ve!==L)&&(n.blendColor(ne.r,ne.g,ne.b,ve),R.copy(ne),L=ve),g=T,z=!1}function x(T,st){T.side===Cn?pt(n.CULL_FACE):dt(n.CULL_FACE);let ht=T.side===Oe;st&&(ht=!ht),F(ht),T.blending===pr&&T.transparent===!1?k(ei):k(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const vt=T.stencilWrite;a.setTest(vt),vt&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),_(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(T){A!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),A=T)}function H(T){T!==Hv?(dt(n.CULL_FACE),T!==w&&(T===mu?n.cullFace(n.BACK):T===Vv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),w=T}function b(T){T!==G&&(V&&n.lineWidth(T),G=T)}function _(T,st,ht){T?(dt(n.POLYGON_OFFSET_FILL),(I!==st||U!==ht)&&(n.polygonOffset(st,ht),I=st,U=ht)):pt(n.POLYGON_OFFSET_FILL)}function P(T){T?dt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function N(T){T===void 0&&(T=n.TEXTURE0+M-1),W!==T&&(n.activeTexture(T),W=T)}function B(T,st,ht){ht===void 0&&(W===null?ht=n.TEXTURE0+M-1:ht=W);let vt=Q[ht];vt===void 0&&(vt={type:void 0,texture:void 0},Q[ht]=vt),(vt.type!==T||vt.texture!==st)&&(W!==ht&&(n.activeTexture(ht),W=ht),n.bindTexture(T,st||it[T]),vt.type=T,vt.texture=st)}function D(){const T=Q[W];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _t(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function At(T){Z.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),Z.copy(T))}function Ft(T){gt.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),gt.copy(T))}function Ht(T,st){let ht=l.get(st);ht===void 0&&(ht=new WeakMap,l.set(st,ht));let vt=ht.get(T);vt===void 0&&(vt=n.getUniformBlockIndex(st,T.name),ht.set(T,vt))}function Rt(T,st){const vt=l.get(st).get(T);o.get(st)!==vt&&(n.uniformBlockBinding(st,vt,T.__bindingPointIndex),o.set(st,vt))}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,Q={},u={},f=new WeakMap,h=[],d=null,v=!1,g=null,m=null,p=null,S=null,y=null,E=null,C=null,R=new Xt(0,0,0),L=0,z=!1,A=null,w=null,G=null,I=null,U=null,Z.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:dt,disable:pt,bindFramebuffer:yt,drawBuffers:bt,useProgram:Tt,setBlending:k,setMaterial:x,setFlipSided:F,setCullFace:H,setLineWidth:b,setPolygonOffset:_,setScissorTest:P,activeTexture:N,bindTexture:B,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:xt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Rt,texStorage2D:_t,texStorage3D:mt,texSubImage2D:K,texSubImage3D:rt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:At,viewport:Ft,reset:wt}}function aw(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,_){return d?new OffscreenCanvas(b,_):Co("canvas")}function g(b,_,P){let N=1;const B=H(b);if((B.width>P||B.height>P)&&(N=P/Math.max(B.width,B.height)),N<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const D=Math.floor(N*B.width),q=Math.floor(N*B.height);f===void 0&&(f=v(D,q));const j=_?v(D,q):f;return j.width=D,j.height=q,j.getContext("2d").drawImage(b,0,0,D,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+D+"x"+q+")."),j}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==tn&&b.minFilter!==on}function p(b){n.generateMipmap(b)}function S(b,_,P,N,B=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let D=_;if(_===n.RED&&(P===n.FLOAT&&(D=n.R32F),P===n.HALF_FLOAT&&(D=n.R16F),P===n.UNSIGNED_BYTE&&(D=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(D=n.R8UI),P===n.UNSIGNED_SHORT&&(D=n.R16UI),P===n.UNSIGNED_INT&&(D=n.R32UI),P===n.BYTE&&(D=n.R8I),P===n.SHORT&&(D=n.R16I),P===n.INT&&(D=n.R32I)),_===n.RG&&(P===n.FLOAT&&(D=n.RG32F),P===n.HALF_FLOAT&&(D=n.RG16F),P===n.UNSIGNED_BYTE&&(D=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(D=n.RG8UI),P===n.UNSIGNED_SHORT&&(D=n.RG16UI),P===n.UNSIGNED_INT&&(D=n.RG32UI),P===n.BYTE&&(D=n.RG8I),P===n.SHORT&&(D=n.RG16I),P===n.INT&&(D=n.RG32I)),_===n.RGB&&P===n.UNSIGNED_INT_5_9_9_9_REV&&(D=n.RGB9_E5),_===n.RGBA){const q=B?wo:Jt.getTransfer(N);P===n.FLOAT&&(D=n.RGBA32F),P===n.HALF_FLOAT&&(D=n.RGBA16F),P===n.UNSIGNED_BYTE&&(D=q===te?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(D=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(D=n.RGB5_A1)}return(D===n.R16F||D===n.R32F||D===n.RG16F||D===n.RG32F||D===n.RGBA16F||D===n.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function y(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function E(b){const _=b.target;_.removeEventListener("dispose",E),R(_),_.isVideoTexture&&u.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),z(_)}function R(b){const _=i.get(b);if(_.__webglInit===void 0)return;const P=b.source,N=h.get(P);if(N){const B=N[_.__cacheKey];B.usedTimes--,B.usedTimes===0&&L(b),Object.keys(N).length===0&&h.delete(P)}i.remove(b)}function L(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const P=b.source,N=h.get(P);delete N[_.__cacheKey],a.memory.textures--}function z(b){const _=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(_.__webglFramebuffer[N]))for(let B=0;B<_.__webglFramebuffer[N].length;B++)n.deleteFramebuffer(_.__webglFramebuffer[N][B]);else n.deleteFramebuffer(_.__webglFramebuffer[N]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[N])}else{if(Array.isArray(_.__webglFramebuffer))for(let N=0;N<_.__webglFramebuffer.length;N++)n.deleteFramebuffer(_.__webglFramebuffer[N]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let N=0;N<_.__webglColorRenderbuffer.length;N++)_.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[N]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=b.textures;for(let N=0,B=P.length;N<B;N++){const D=i.get(P[N]);D.__webglTexture&&(n.deleteTexture(D.__webglTexture),a.memory.textures--),i.remove(P[N])}i.remove(b)}let A=0;function w(){A=0}function G(){const b=A;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),A+=1,b}function I(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function U(b,_){const P=i.get(b);if(b.isVideoTexture&&x(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const N=b.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(P,b,_);return}}e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function M(b,_){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Z(P,b,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function V(b,_){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Z(P,b,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function $(b,_){const P=i.get(b);if(b.version>0&&P.__version!==b.version){gt(P,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const X={[El]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[wl]:n.MIRRORED_REPEAT},W={[tn]:n.NEAREST,[Ex]:n.NEAREST_MIPMAP_NEAREST,[Ss]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Q={[kx]:n.NEVER,[Wx]:n.ALWAYS,[Bx]:n.LESS,[rp]:n.LEQUAL,[zx]:n.EQUAL,[Gx]:n.GEQUAL,[Hx]:n.GREATER,[Vx]:n.NOTEQUAL};function lt(b,_){if(_.type===Jn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===pa||_.magFilter===Ss||_.magFilter===Ri||_.minFilter===on||_.minFilter===pa||_.minFilter===Ss||_.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,X[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,X[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,X[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,W[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,W[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==Ss&&_.minFilter!==Ri||_.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Y(b,_){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",E));const N=_.source;let B=h.get(N);B===void 0&&(B={},h.set(N,B));const D=I(_);if(D!==b.__cacheKey){B[D]===void 0&&(B[D]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),B[D].usedTimes++;const q=B[b.__cacheKey];q!==void 0&&(B[b.__cacheKey].usedTimes--,q.usedTimes===0&&L(_)),b.__cacheKey=D,b.__webglTexture=B[D].texture}return P}function Z(b,_,P){let N=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(N=n.TEXTURE_3D);const B=Y(b,_),D=_.source;e.bindTexture(N,b.__webglTexture,n.TEXTURE0+P);const q=i.get(D);if(D.version!==q.__version||B===!0){e.activeTexture(n.TEXTURE0+P);const j=Jt.getPrimaries(Jt.workingColorSpace),K=_.colorSpace===Zn?null:Jt.getPrimaries(_.colorSpace),rt=_.colorSpace===Zn||j===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ot=g(_.image,!1,r.maxTextureSize);ot=F(_,ot);const ft=s.convert(_.format,_.colorSpace),_t=s.convert(_.type);let mt=S(_.internalFormat,ft,_t,_.colorSpace,_.isVideoTexture);lt(N,_);let xt;const It=_.mipmaps,At=_.isVideoTexture!==!0&&mt!==np,Ft=q.__version===void 0||B===!0,Ht=D.dataReady,Rt=y(_,ot);if(_.isDepthTexture)mt=n.DEPTH_COMPONENT16,_.type===Jn?mt=n.DEPTH_COMPONENT32F:_.type===Er?mt=n.DEPTH_COMPONENT24:_.type===os&&(mt=n.DEPTH24_STENCIL8),Ft&&(At?e.texStorage2D(n.TEXTURE_2D,1,mt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,mt,ot.width,ot.height,0,ft,_t,null));else if(_.isDataTexture)if(It.length>0){At&&Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,It[0].width,It[0].height);for(let wt=0,T=It.length;wt<T;wt++)xt=It[wt],At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,_t,xt.data):e.texImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,ft,_t,xt.data);_.generateMipmaps=!1}else At?(Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,ot.width,ot.height),Ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,ft,_t,ot.data)):e.texImage2D(n.TEXTURE_2D,0,mt,ot.width,ot.height,0,ft,_t,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){At&&Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,mt,It[0].width,It[0].height,ot.depth);for(let wt=0,T=It.length;wt<T;wt++)xt=It[wt],_.format!==_n?ft!==null?At?Ht&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,ot.depth,ft,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,wt,mt,xt.width,xt.height,ot.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?Ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,ot.depth,ft,_t,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,wt,mt,xt.width,xt.height,ot.depth,0,ft,_t,xt.data)}else{At&&Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,It[0].width,It[0].height);for(let wt=0,T=It.length;wt<T;wt++)xt=It[wt],_.format!==_n?ft!==null?At?Ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,_t,xt.data):e.texImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,ft,_t,xt.data)}else if(_.isDataArrayTexture)At?(Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,mt,ot.width,ot.height,ot.depth),Ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ft,_t,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,ot.width,ot.height,ot.depth,0,ft,_t,ot.data);else if(_.isData3DTexture)At?(Ft&&e.texStorage3D(n.TEXTURE_3D,Rt,mt,ot.width,ot.height,ot.depth),Ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ft,_t,ot.data)):e.texImage3D(n.TEXTURE_3D,0,mt,ot.width,ot.height,ot.depth,0,ft,_t,ot.data);else if(_.isFramebufferTexture){if(Ft)if(At)e.texStorage2D(n.TEXTURE_2D,Rt,mt,ot.width,ot.height);else{let wt=ot.width,T=ot.height;for(let st=0;st<Rt;st++)e.texImage2D(n.TEXTURE_2D,st,mt,wt,T,0,ft,_t,null),wt>>=1,T>>=1}}else if(It.length>0){if(At&&Ft){const wt=H(It[0]);e.texStorage2D(n.TEXTURE_2D,Rt,mt,wt.width,wt.height)}for(let wt=0,T=It.length;wt<T;wt++)xt=It[wt],At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,ft,_t,xt):e.texImage2D(n.TEXTURE_2D,wt,mt,ft,_t,xt);_.generateMipmaps=!1}else if(At){if(Ft){const wt=H(ot);e.texStorage2D(n.TEXTURE_2D,Rt,mt,wt.width,wt.height)}Ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,_t,ot)}else e.texImage2D(n.TEXTURE_2D,0,mt,ft,_t,ot);m(_)&&p(N),q.__version=D.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function gt(b,_,P){if(_.image.length!==6)return;const N=Y(b,_),B=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+P);const D=i.get(B);if(B.version!==D.__version||N===!0){e.activeTexture(n.TEXTURE0+P);const q=Jt.getPrimaries(Jt.workingColorSpace),j=_.colorSpace===Zn?null:Jt.getPrimaries(_.colorSpace),K=_.colorSpace===Zn||q===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const rt=_.isCompressedTexture||_.image[0].isCompressedTexture,ot=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let T=0;T<6;T++)!rt&&!ot?ft[T]=g(_.image[T],!0,r.maxCubemapSize):ft[T]=ot?_.image[T].image:_.image[T],ft[T]=F(_,ft[T]);const _t=ft[0],mt=s.convert(_.format,_.colorSpace),xt=s.convert(_.type),It=S(_.internalFormat,mt,xt,_.colorSpace),At=_.isVideoTexture!==!0,Ft=D.__version===void 0||N===!0,Ht=B.dataReady;let Rt=y(_,_t);lt(n.TEXTURE_CUBE_MAP,_);let wt;if(rt){At&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,_t.width,_t.height);for(let T=0;T<6;T++){wt=ft[T].mipmaps;for(let st=0;st<wt.length;st++){const ht=wt[st];_.format!==_n?mt!==null?At?Ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st,It,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st,0,0,ht.width,ht.height,mt,xt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st,It,ht.width,ht.height,0,mt,xt,ht.data)}}}else{if(wt=_.mipmaps,At&&Ft){wt.length>0&&Rt++;const T=H(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,T.width,T.height)}for(let T=0;T<6;T++)if(ot){At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,ft[T].width,ft[T].height,mt,xt,ft[T].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,It,ft[T].width,ft[T].height,0,mt,xt,ft[T].data);for(let st=0;st<wt.length;st++){const vt=wt[st].image[T].image;At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st+1,0,0,vt.width,vt.height,mt,xt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st+1,It,vt.width,vt.height,0,mt,xt,vt.data)}}else{At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,mt,xt,ft[T]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,It,mt,xt,ft[T]);for(let st=0;st<wt.length;st++){const ht=wt[st];At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st+1,0,0,mt,xt,ht.image[T]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+T,st+1,It,mt,xt,ht.image[T])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),D.__version=B.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function J(b,_,P,N,B,D){const q=s.convert(P.format,P.colorSpace),j=s.convert(P.type),K=S(P.internalFormat,q,j,P.colorSpace);if(!i.get(_).__hasExternalTextures){const ot=Math.max(1,_.width>>D),ft=Math.max(1,_.height>>D);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?e.texImage3D(B,D,K,ot,ft,_.depth,0,q,j,null):e.texImage2D(B,D,K,ot,ft,0,q,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),k(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,B,i.get(P).__webglTexture,0,Pt(_)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,B,i.get(P).__webglTexture,D),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer&&!_.stencilBuffer){let N=n.DEPTH_COMPONENT24;if(P||k(_)){const B=_.depthTexture;B&&B.isDepthTexture&&(B.type===Jn?N=n.DEPTH_COMPONENT32F:B.type===Er&&(N=n.DEPTH_COMPONENT24));const D=Pt(_);k(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,N,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,D,N,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(_.depthBuffer&&_.stencilBuffer){const N=Pt(_);P&&k(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,_.width,_.height):k(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const N=_.textures;for(let B=0;B<N.length;B++){const D=N[B],q=s.convert(D.format,D.colorSpace),j=s.convert(D.type),K=S(D.internalFormat,q,j,D.colorSpace),rt=Pt(_);P&&k(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,K,_.width,_.height):k(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,K,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,K,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U(_.depthTexture,0);const N=i.get(_.depthTexture).__webglTexture,B=Pt(_);if(_.depthTexture.format===mr)k(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(_.depthTexture.format===ts)k(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function pt(b){const _=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");dt(_.__webglFramebuffer,b)}else if(P){_.__webglDepthbuffer=[];for(let N=0;N<6;N++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[N]),_.__webglDepthbuffer[N]=n.createRenderbuffer(),it(_.__webglDepthbuffer[N],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),it(_.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(b,_,P){const N=i.get(b);_!==void 0&&J(N.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&pt(b)}function bt(b){const _=b.texture,P=i.get(b),N=i.get(_);b.addEventListener("dispose",C);const B=b.textures,D=b.isWebGLCubeRenderTarget===!0,q=B.length>1;if(q||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=_.version,a.memory.textures++),D){P.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[j]=[];for(let K=0;K<_.mipmaps.length;K++)P.__webglFramebuffer[j][K]=n.createFramebuffer()}else P.__webglFramebuffer[j]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)P.__webglFramebuffer[j]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(q)for(let j=0,K=B.length;j<K;j++){const rt=i.get(B[j]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&k(b)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let j=0;j<B.length;j++){const K=B[j];P.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[j]);const rt=s.convert(K.format,K.colorSpace),ot=s.convert(K.type),ft=S(K.internalFormat,rt,ot,K.colorSpace,b.isXRRenderTarget===!0),_t=Pt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,ft,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,P.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),it(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(D){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),lt(n.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)J(P.__webglFramebuffer[j][K],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else J(P.__webglFramebuffer[j],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let j=0,K=B.length;j<K;j++){const rt=B[j],ot=i.get(rt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),lt(n.TEXTURE_2D,rt),J(P.__webglFramebuffer,b,rt,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),m(rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),lt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)J(P.__webglFramebuffer[K],b,_,n.COLOR_ATTACHMENT0,j,K);else J(P.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,j,0);m(_)&&p(j),e.unbindTexture()}b.depthBuffer&&pt(b)}function Tt(b){const _=b.textures;for(let P=0,N=_.length;P<N;P++){const B=_[P];if(m(B)){const D=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,q=i.get(B).__webglTexture;e.bindTexture(D,q),p(D),e.unbindTexture()}}}function tt(b){if(b.samples>0&&k(b)===!1){const _=b.textures,P=b.width,N=b.height;let B=n.COLOR_BUFFER_BIT;const D=[],q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(b),K=_.length>1;if(K)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){D.push(n.COLOR_ATTACHMENT0+rt),b.depthBuffer&&D.push(q);const ot=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(ot===!1&&(b.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&j.__isTransmissionRenderTarget!==!0&&(B|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[rt]),ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[q]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[q])),K){const ft=i.get(_[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,P,N,0,0,P,N,B,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,j.__webglColorRenderbuffer[rt]);const ot=i.get(_[rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Pt(b){return Math.min(r.maxSamples,b.samples)}function k(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function x(b){const _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function F(b,_){const P=b.colorSpace,N=b.format,B=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==ui&&P!==Zn&&(Jt.getTransfer(P)===te?(N!==_n||B!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function H(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=U,this.setTexture2DArray=M,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=yt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=k}function lw(n,t){function e(i,r=Zn){let s;const a=Jt.getTransfer(r);if(i===ii)return n.UNSIGNED_BYTE;if(i===Zd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ax)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wx)return n.BYTE;if(i===Tx)return n.SHORT;if(i===$d)return n.UNSIGNED_SHORT;if(i===Kd)return n.INT;if(i===Er)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Eo)return n.HALF_FLOAT;if(i===Rx)return n.ALPHA;if(i===Cx)return n.RGB;if(i===_n)return n.RGBA;if(i===Px)return n.LUMINANCE;if(i===Lx)return n.LUMINANCE_ALPHA;if(i===mr)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===Ix)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===Dx)return n.RG;if(i===tp)return n.RG_INTEGER;if(i===ep)return n.RGBA_INTEGER;if(i===ma||i===ga||i===_a||i===va)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xu||i===yu||i===bu||i===Su)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===np)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Mu||i===Eu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mu)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wu||i===Tu||i===Au||i===Ru||i===Cu||i===Pu||i===Lu||i===Iu||i===Du||i===Uu||i===Nu||i===Ou||i===Fu||i===ku)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Au)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ru)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Iu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Du)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ou)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fu)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ku)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===Bu||i===zu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===xa)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ux||i===Hu||i===Vu||i===Gu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class cw extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Br extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uw={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Br;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Fe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ai({vertexShader:fw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new $o(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class pw extends Ni{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const g=new dw,m=e.getContextAttributes();let p=null,S=null;const y=[],E=[],C=new Ot;let R=null;const L=new Ze;L.layers.enable(1),L.viewport=new Me;const z=new Ze;z.layers.enable(2),z.viewport=new Me;const A=[L,z],w=new cw;w.layers.enable(1),w.layers.enable(2);let G=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=y[J];return it===void 0&&(it=new Wa,y[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=y[J];return it===void 0&&(it=new Wa,y[J]=it),it.getGripSpace()},this.getHand=function(J){let it=y[J];return it===void 0&&(it=new Wa,y[J]=it),it.getHandSpace()};function U(J){const it=E.indexOf(J.inputSource);if(it===-1)return;const dt=y[it];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||a),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function M(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",V);for(let J=0;J<y.length;J++){const it=E[J];it!==null&&(E[J]=null,y[J].disconnect(it))}G=null,I=null,g.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,S=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",M),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ii(d.framebufferWidth,d.framebufferHeight,{format:_n,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,dt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?ts:mr,dt=m.stencil?os:Er);const yt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(yt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Ii(h.textureWidth,h.textureHeight,{format:_n,type:ii,depthTexture:new vp(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const bt=t.properties.get(S);bt.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),gt.setContext(r),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(J){for(let it=0;it<J.removed.length;it++){const dt=J.removed[it],pt=E.indexOf(dt);pt>=0&&(E[pt]=null,y[pt].disconnect(dt))}for(let it=0;it<J.added.length;it++){const dt=J.added[it];let pt=E.indexOf(dt);if(pt===-1){for(let bt=0;bt<y.length;bt++)if(bt>=E.length){E.push(dt),pt=bt;break}else if(E[bt]===null){E[bt]=dt,pt=bt;break}if(pt===-1)break}const yt=y[pt];yt&&yt.connect(dt)}}const $=new et,X=new et;function W(J,it,dt){$.setFromMatrixPosition(it.matrixWorld),X.setFromMatrixPosition(dt.matrixWorld);const pt=$.distanceTo(X),yt=it.projectionMatrix.elements,bt=dt.projectionMatrix.elements,Tt=yt[14]/(yt[10]-1),tt=yt[14]/(yt[10]+1),Pt=(yt[9]+1)/yt[5],k=(yt[9]-1)/yt[5],x=(yt[8]-1)/yt[0],F=(bt[8]+1)/bt[0],H=Tt*x,b=Tt*F,_=pt/(-x+F),P=_*-x;it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(P),J.translateZ(_),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const N=Tt+_,B=tt+_,D=H-P,q=b+(pt-P),j=Pt*tt/B*N,K=k*tt/B*N;J.projectionMatrix.makePerspective(D,q,j,K,N,B),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Q(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),w.near=z.near=L.near=J.near,w.far=z.far=L.far=J.far,(G!==w.near||I!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,I=w.far,L.near=G,L.far=I,z.near=G,z.far=I,L.updateProjectionMatrix(),z.updateProjectionMatrix(),J.updateProjectionMatrix());const it=J.parent,dt=w.cameras;Q(w,it);for(let pt=0;pt<dt.length;pt++)Q(dt[pt],it);dt.length===2?W(w,L,z):w.projectionMatrix.copy(L.projectionMatrix),lt(J,w,it)};function lt(J,it,dt){dt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=es*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null};let Y=null;function Z(J,it){if(u=it.getViewerPose(c||a),v=it,u!==null){const dt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let pt=!1;dt.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let bt=0;bt<dt.length;bt++){const Tt=dt[bt];let tt=null;if(d!==null)tt=d.getViewport(Tt);else{const k=f.getViewSubImage(h,Tt);tt=k.viewport,bt===0&&(t.setRenderTargetTextures(S,k.colorTexture,h.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(S))}let Pt=A[bt];Pt===void 0&&(Pt=new Ze,Pt.layers.enable(bt),Pt.viewport=new Me,A[bt]=Pt),Pt.matrix.fromArray(Tt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Tt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(tt.x,tt.y,tt.width,tt.height),bt===0&&(w.matrix.copy(Pt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(Pt)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const bt=f.getDepthInformation(dt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,r.renderState)}}for(let dt=0;dt<y.length;dt++){const pt=E[dt],yt=y[dt];pt!==null&&yt!==void 0&&yt.update(pt,it,c||a)}g.render(t,w),Y&&Y(J,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),v=null}const gt=new _p;gt.setAnimationLoop(Z),this.setAnimationLoop=function(J){Y=J},this.dispose=function(){}}}const xi=new yn,mw=new ae;function gw(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,E=S.envMapRotation;if(y&&(m.envMap.value=y,xi.copy(E),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(mw.makeRotationFromEuler(xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*C,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _w(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(v(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(S,C);const R=t.render.frame;s[S.id]!==R&&(h(S),s[S.id]=R)}function u(S){const y=f();S.__bindingPointIndex=y;const E=n.createBuffer(),C=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=r[S.id],E=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,L=E.length;R<L;R++){const z=Array.isArray(E[R])?E[R]:[E[R]];for(let A=0,w=z.length;A<w;A++){const G=z[A];if(d(G,R,A,C)===!0){const I=G.__offset,U=Array.isArray(G.value)?G.value:[G.value];let M=0;for(let V=0;V<U.length;V++){const $=U[V],X=g($);typeof $=="number"||typeof $=="boolean"?(G.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,I+M,G.__data)):$.isMatrix3?(G.__data[0]=$.elements[0],G.__data[1]=$.elements[1],G.__data[2]=$.elements[2],G.__data[3]=0,G.__data[4]=$.elements[3],G.__data[5]=$.elements[4],G.__data[6]=$.elements[5],G.__data[7]=0,G.__data[8]=$.elements[6],G.__data[9]=$.elements[7],G.__data[10]=$.elements[8],G.__data[11]=0):($.toArray(G.__data,M),M+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,E,C){const R=S.value,L=y+"_"+E;if(C[L]===void 0)return typeof R=="number"||typeof R=="boolean"?C[L]=R:C[L]=R.clone(),!0;{const z=C[L];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[L]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function v(S){const y=S.uniforms;let E=0;const C=16;for(let L=0,z=y.length;L<z;L++){const A=Array.isArray(y[L])?y[L]:[y[L]];for(let w=0,G=A.length;w<G;w++){const I=A[w],U=Array.isArray(I.value)?I.value:[I.value];for(let M=0,V=U.length;M<V;M++){const $=U[M],X=g($),W=E%C;W!==0&&C-W<X.boundary&&(E+=C-W),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=X.storage}}}const R=E%C;return R>0&&(E+=C-R),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class vw{constructor(t={}){const{canvas:e=ly(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const y=this;let E=!1,C=0,R=0,L=null,z=-1,A=null;const w=new Me,G=new Me;let I=null;const U=new Xt(0);let M=0,V=e.width,$=e.height,X=1,W=null,Q=null;const lt=new Me(0,0,V,$),Y=new Me(0,0,V,$);let Z=!1;const gt=new gp;let J=!1,it=!1;const dt=new ae,pt=new Ot,yt=new et,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return L===null?X:1}let tt=i;function Pt(O,nt){const ct=e.getContext(O,nt);return ct!==null?ct:null}try{const O={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",vt,!1),tt===null){const nt="webgl2";if(tt=Pt(nt,O),tt===null)throw Pt(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let k,x,F,H,b,_,P,N,B,D,q,j,K,rt,ot,ft,_t,mt,xt,It,At,Ft,Ht,Rt;function wt(){k=new TM(tt),k.init(),x=new xM(tt,k,t),Ft=new lw(tt,k),F=new ow(tt),H=new CM(tt),b=new XE,_=new aw(tt,k,F,b,x,Ft,H),P=new bM(y),N=new wM(y),B=new Uy(tt),Ht=new _M(tt,B),D=new AM(tt,B,H,Ht),q=new LM(tt,D,B,H),xt=new PM(tt,x,_),ft=new yM(b),j=new jE(y,P,N,k,x,Ht,ft),K=new gw(y,b),rt=new YE,ot=new tw(k),mt=new gM(y,P,N,F,q,h,l),_t=new sw(y,q,x),Rt=new _w(tt,H,x,F),It=new vM(tt,k,H),At=new RM(tt,k,H),H.programs=j.programs,y.capabilities=x,y.extensions=k,y.properties=b,y.renderLists=rt,y.shadowMap=_t,y.state=F,y.info=H}wt();const T=new pw(y,tt);this.xr=T,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){const O=k.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=k.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(O){O!==void 0&&(X=O,this.setSize(V,$,!1))},this.getSize=function(O){return O.set(V,$)},this.setSize=function(O,nt,ct=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=O,$=nt,e.width=Math.floor(O*X),e.height=Math.floor(nt*X),ct===!0&&(e.style.width=O+"px",e.style.height=nt+"px"),this.setViewport(0,0,O,nt)},this.getDrawingBufferSize=function(O){return O.set(V*X,$*X).floor()},this.setDrawingBufferSize=function(O,nt,ct){V=O,$=nt,X=ct,e.width=Math.floor(O*ct),e.height=Math.floor(nt*ct),this.setViewport(0,0,O,nt)},this.getCurrentViewport=function(O){return O.copy(w)},this.getViewport=function(O){return O.copy(lt)},this.setViewport=function(O,nt,ct,ut){O.isVector4?lt.set(O.x,O.y,O.z,O.w):lt.set(O,nt,ct,ut),F.viewport(w.copy(lt).multiplyScalar(X).round())},this.getScissor=function(O){return O.copy(Y)},this.setScissor=function(O,nt,ct,ut){O.isVector4?Y.set(O.x,O.y,O.z,O.w):Y.set(O,nt,ct,ut),F.scissor(G.copy(Y).multiplyScalar(X).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(O){F.setScissorTest(Z=O)},this.setOpaqueSort=function(O){W=O},this.setTransparentSort=function(O){Q=O},this.getClearColor=function(O){return O.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(O=!0,nt=!0,ct=!0){let ut=0;if(O){let at=!1;if(L!==null){const Et=L.texture.format;at=Et===ep||Et===tp||Et===Qd}if(at){const Et=L.texture.type,Ct=Et===ii||Et===Er||Et===$d||Et===os||Et===Zd||Et===Jd,Dt=mt.getClearColor(),Nt=mt.getClearAlpha(),Bt=Dt.r,kt=Dt.g,zt=Dt.b;Ct?(d[0]=Bt,d[1]=kt,d[2]=zt,d[3]=Nt,tt.clearBufferuiv(tt.COLOR,0,d)):(v[0]=Bt,v[1]=kt,v[2]=zt,v[3]=Nt,tt.clearBufferiv(tt.COLOR,0,v))}else ut|=tt.COLOR_BUFFER_BIT}nt&&(ut|=tt.DEPTH_BUFFER_BIT),ct&&(ut|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),rt.dispose(),ot.dispose(),b.dispose(),P.dispose(),N.dispose(),q.dispose(),Ht.dispose(),Rt.dispose(),j.dispose(),T.dispose(),T.removeEventListener("sessionstart",ce),T.removeEventListener("sessionend",ue),Be.stop()};function st(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const O=H.autoReset,nt=_t.enabled,ct=_t.autoUpdate,ut=_t.needsUpdate,at=_t.type;wt(),H.autoReset=O,_t.enabled=nt,_t.autoUpdate=ct,_t.needsUpdate=ut,_t.type=at}function vt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Mt(O){const nt=O.target;nt.removeEventListener("dispose",Mt),Vt(nt)}function Vt(O){qt(O),b.remove(O)}function qt(O){const nt=b.get(O).programs;nt!==void 0&&(nt.forEach(function(ct){j.releaseProgram(ct)}),O.isShaderMaterial&&j.releaseShaderCache(O))}this.renderBufferDirect=function(O,nt,ct,ut,at,Et){nt===null&&(nt=bt);const Ct=at.isMesh&&at.matrixWorld.determinant()<0,Dt=Ap(O,nt,ct,ut,at);F.setMaterial(ut,Ct);let Nt=ct.index,Bt=1;if(ut.wireframe===!0){if(Nt=D.getWireframeAttribute(ct),Nt===void 0)return;Bt=2}const kt=ct.drawRange,zt=ct.attributes.position;let oe=kt.start*Bt,ze=(kt.start+kt.count)*Bt;Et!==null&&(oe=Math.max(oe,Et.start*Bt),ze=Math.min(ze,(Et.start+Et.count)*Bt)),Nt!==null?(oe=Math.max(oe,0),ze=Math.min(ze,Nt.count)):zt!=null&&(oe=Math.max(oe,0),ze=Math.min(ze,zt.count));const xe=ze-oe;if(xe<0||xe===1/0)return;Ht.setup(at,ut,Dt,ct,Nt);let bn,se=It;if(Nt!==null&&(bn=B.get(Nt),se=At,se.setIndex(bn)),at.isMesh)ut.wireframe===!0?(F.setLineWidth(ut.wireframeLinewidth*Tt()),se.setMode(tt.LINES)):se.setMode(tt.TRIANGLES);else if(at.isLine){let Gt=ut.linewidth;Gt===void 0&&(Gt=1),F.setLineWidth(Gt*Tt()),at.isLineSegments?se.setMode(tt.LINES):at.isLineLoop?se.setMode(tt.LINE_LOOP):se.setMode(tt.LINE_STRIP)}else at.isPoints?se.setMode(tt.POINTS):at.isSprite&&se.setMode(tt.TRIANGLES);if(at.isBatchedMesh)se.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)se.renderInstances(oe,xe,at.count);else if(ct.isInstancedBufferGeometry){const Gt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Zo=Math.min(ct.instanceCount,Gt);se.renderInstances(oe,xe,Zo)}else se.render(oe,xe)};function ne(O,nt,ct){O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=Oe,O.needsUpdate=!0,us(O,nt,ct),O.side=oi,O.needsUpdate=!0,us(O,nt,ct),O.side=Cn):us(O,nt,ct)}this.compile=function(O,nt,ct=null){ct===null&&(ct=O),m=ot.get(ct),m.init(),S.push(m),ct.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(m.pushLight(at),at.castShadow&&m.pushShadow(at))}),O!==ct&&O.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(m.pushLight(at),at.castShadow&&m.pushShadow(at))}),m.setupLights(y._useLegacyLights);const ut=new Set;return O.traverse(function(at){const Et=at.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];ne(Dt,ct,at),ut.add(Dt)}else ne(Et,ct,at),ut.add(Et)}),S.pop(),m=null,ut},this.compileAsync=function(O,nt,ct=null){const ut=this.compile(O,nt,ct);return new Promise(at=>{function Et(){if(ut.forEach(function(Ct){b.get(Ct).currentProgram.isReady()&&ut.delete(Ct)}),ut.size===0){at(O);return}setTimeout(Et,10)}k.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ve=null;function Zt(O){ve&&ve(O)}function ce(){Be.stop()}function ue(){Be.start()}const Be=new _p;Be.setAnimationLoop(Zt),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(O){ve=O,T.setAnimationLoop(O),O===null?Be.stop():Be.start()},T.addEventListener("sessionstart",ce),T.addEventListener("sessionend",ue),this.render=function(O,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(nt),nt=T.getCamera()),O.isScene===!0&&O.onBeforeRender(y,O,nt,L),m=ot.get(O,S.length),m.init(),S.push(m),dt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),gt.setFromProjectionMatrix(dt),it=this.localClippingEnabled,J=ft.init(this.clippingPlanes,it),g=rt.get(O,p.length),g.init(),p.push(g),je(O,nt,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,Q),this.info.render.frame++,J===!0&&ft.beginShadows();const ct=m.state.shadowsArray;if(_t.render(ct,O,nt),J===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1)&&mt.render(g,O),m.setupLights(y._useLegacyLights),nt.isArrayCamera){const ut=nt.cameras;for(let at=0,Et=ut.length;at<Et;at++){const Ct=ut[at];Nn(g,O,Ct,Ct.viewport)}}else Nn(g,O,nt);L!==null&&(_.updateMultisampleRenderTarget(L),_.updateRenderTargetMipmap(L)),O.isScene===!0&&O.onAfterRender(y,O,nt),Ht.resetDefaultState(),z=-1,A=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function je(O,nt,ct,ut){if(O.visible===!1)return;if(O.layers.test(nt.layers)){if(O.isGroup)ct=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(nt);else if(O.isLight)m.pushLight(O),O.castShadow&&m.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||gt.intersectsSprite(O)){ut&&yt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(dt);const Ct=q.update(O),Dt=O.material;Dt.visible&&g.push(O,Ct,Dt,ct,yt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||gt.intersectsObject(O))){const Ct=q.update(O),Dt=O.material;if(ut&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),yt.copy(O.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),yt.copy(Ct.boundingSphere.center)),yt.applyMatrix4(O.matrixWorld).applyMatrix4(dt)),Array.isArray(Dt)){const Nt=Ct.groups;for(let Bt=0,kt=Nt.length;Bt<kt;Bt++){const zt=Nt[Bt],oe=Dt[zt.materialIndex];oe&&oe.visible&&g.push(O,Ct,oe,ct,yt.z,zt)}}else Dt.visible&&g.push(O,Ct,Dt,ct,yt.z,null)}}const Et=O.children;for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++)je(Et[Ct],nt,ct,ut)}function Nn(O,nt,ct,ut){const at=O.opaque,Et=O.transmissive,Ct=O.transparent;m.setupLightsView(ct),J===!0&&ft.setGlobalState(y.clippingPlanes,ct),Et.length>0&&Oi(at,Et,nt,ct),ut&&F.viewport(w.copy(ut)),at.length>0&&fi(at,nt,ct),Et.length>0&&fi(Et,nt,ct),Ct.length>0&&fi(Ct,nt,ct),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Oi(O,nt,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Ii(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Eo:ii,minFilter:Ri,samples:4,stencilBuffer:s});const Bt=b.get(m.state.transmissionRenderTarget);Bt.__isTransmissionRenderTarget=!0}const Et=m.state.transmissionRenderTarget;y.getDrawingBufferSize(pt),Et.setSize(pt.x,pt.y);const Ct=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(U),M=y.getClearAlpha(),M<1&&y.setClearColor(16777215,.5),y.clear();const Dt=y.toneMapping;y.toneMapping=ni,fi(O,ct,ut),_.updateMultisampleRenderTarget(Et),_.updateRenderTargetMipmap(Et);let Nt=!1;for(let Bt=0,kt=nt.length;Bt<kt;Bt++){const zt=nt[Bt],oe=zt.object,ze=zt.geometry,xe=zt.material,bn=zt.group;if(xe.side===Cn&&oe.layers.test(ut.layers)){const se=xe.side;xe.side=Oe,xe.needsUpdate=!0,fc(oe,ct,ut,ze,xe,bn),xe.side=se,xe.needsUpdate=!0,Nt=!0}}Nt===!0&&(_.updateMultisampleRenderTarget(Et),_.updateRenderTargetMipmap(Et)),y.setRenderTarget(Ct),y.setClearColor(U,M),y.toneMapping=Dt}function fi(O,nt,ct){const ut=nt.isScene===!0?nt.overrideMaterial:null;for(let at=0,Et=O.length;at<Et;at++){const Ct=O[at],Dt=Ct.object,Nt=Ct.geometry,Bt=ut===null?Ct.material:ut,kt=Ct.group;Dt.layers.test(ct.layers)&&fc(Dt,nt,ct,Nt,Bt,kt)}}function fc(O,nt,ct,ut,at,Et){O.onBeforeRender(y,nt,ct,ut,at,Et),O.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),at.onBeforeRender(y,nt,ct,ut,O,Et),at.transparent===!0&&at.side===Cn&&at.forceSinglePass===!1?(at.side=Oe,at.needsUpdate=!0,y.renderBufferDirect(ct,nt,ut,at,O,Et),at.side=oi,at.needsUpdate=!0,y.renderBufferDirect(ct,nt,ut,at,O,Et),at.side=Cn):y.renderBufferDirect(ct,nt,ut,at,O,Et),O.onAfterRender(y,nt,ct,ut,at,Et)}function us(O,nt,ct){nt.isScene!==!0&&(nt=bt);const ut=b.get(O),at=m.state.lights,Et=m.state.shadowsArray,Ct=at.state.version,Dt=j.getParameters(O,at.state,Et,nt,ct),Nt=j.getProgramCacheKey(Dt);let Bt=ut.programs;ut.environment=O.isMeshStandardMaterial?nt.environment:null,ut.fog=nt.fog,ut.envMap=(O.isMeshStandardMaterial?N:P).get(O.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&O.envMap===null?nt.environmentRotation:O.envMapRotation,Bt===void 0&&(O.addEventListener("dispose",Mt),Bt=new Map,ut.programs=Bt);let kt=Bt.get(Nt);if(kt!==void 0){if(ut.currentProgram===kt&&ut.lightsStateVersion===Ct)return dc(O,Dt),kt}else Dt.uniforms=j.getUniforms(O),O.onBuild(ct,Dt,y),O.onBeforeCompile(Dt,y),kt=j.acquireProgram(Dt,Nt),Bt.set(Nt,kt),ut.uniforms=Dt.uniforms;const zt=ut.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(zt.clippingPlanes=ft.uniform),dc(O,Dt),ut.needsLights=Cp(O),ut.lightsStateVersion=Ct,ut.needsLights&&(zt.ambientLightColor.value=at.state.ambient,zt.lightProbe.value=at.state.probe,zt.directionalLights.value=at.state.directional,zt.directionalLightShadows.value=at.state.directionalShadow,zt.spotLights.value=at.state.spot,zt.spotLightShadows.value=at.state.spotShadow,zt.rectAreaLights.value=at.state.rectArea,zt.ltc_1.value=at.state.rectAreaLTC1,zt.ltc_2.value=at.state.rectAreaLTC2,zt.pointLights.value=at.state.point,zt.pointLightShadows.value=at.state.pointShadow,zt.hemisphereLights.value=at.state.hemi,zt.directionalShadowMap.value=at.state.directionalShadowMap,zt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,zt.spotShadowMap.value=at.state.spotShadowMap,zt.spotLightMatrix.value=at.state.spotLightMatrix,zt.spotLightMap.value=at.state.spotLightMap,zt.pointShadowMap.value=at.state.pointShadowMap,zt.pointShadowMatrix.value=at.state.pointShadowMatrix),ut.currentProgram=kt,ut.uniformsList=null,kt}function hc(O){if(O.uniformsList===null){const nt=O.currentProgram.getUniforms();O.uniformsList=ao.seqWithValue(nt.seq,O.uniforms)}return O.uniformsList}function dc(O,nt){const ct=b.get(O);ct.outputColorSpace=nt.outputColorSpace,ct.batching=nt.batching,ct.instancing=nt.instancing,ct.instancingColor=nt.instancingColor,ct.instancingMorph=nt.instancingMorph,ct.skinning=nt.skinning,ct.morphTargets=nt.morphTargets,ct.morphNormals=nt.morphNormals,ct.morphColors=nt.morphColors,ct.morphTargetsCount=nt.morphTargetsCount,ct.numClippingPlanes=nt.numClippingPlanes,ct.numIntersection=nt.numClipIntersection,ct.vertexAlphas=nt.vertexAlphas,ct.vertexTangents=nt.vertexTangents,ct.toneMapping=nt.toneMapping}function Ap(O,nt,ct,ut,at){nt.isScene!==!0&&(nt=bt),_.resetTextureUnits();const Et=nt.fog,Ct=ut.isMeshStandardMaterial?nt.environment:null,Dt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ui,Nt=(ut.isMeshStandardMaterial?N:P).get(ut.envMap||Ct),Bt=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,kt=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),zt=!!ct.morphAttributes.position,oe=!!ct.morphAttributes.normal,ze=!!ct.morphAttributes.color;let xe=ni;ut.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=y.toneMapping);const bn=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,se=bn!==void 0?bn.length:0,Gt=b.get(ut),Zo=m.state.lights;if(J===!0&&(it===!0||O!==A)){const Xe=O===A&&ut.id===z;ft.setState(ut,O,Xe)}let ie=!1;ut.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Zo.state.version||Gt.outputColorSpace!==Dt||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==Nt||ut.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ft.numPlanes||Gt.numIntersection!==ft.numIntersection)||Gt.vertexAlphas!==Bt||Gt.vertexTangents!==kt||Gt.morphTargets!==zt||Gt.morphNormals!==oe||Gt.morphColors!==ze||Gt.toneMapping!==xe||Gt.morphTargetsCount!==se)&&(ie=!0):(ie=!0,Gt.__version=ut.version);let hi=Gt.currentProgram;ie===!0&&(hi=us(ut,nt,at));let pc=!1,Ir=!1,Jo=!1;const we=hi.getUniforms(),On=Gt.uniforms;if(F.useProgram(hi.program)&&(pc=!0,Ir=!0,Jo=!0),ut.id!==z&&(z=ut.id,Ir=!0),pc||A!==O){we.setValue(tt,"projectionMatrix",O.projectionMatrix),we.setValue(tt,"viewMatrix",O.matrixWorldInverse);const Xe=we.map.cameraPosition;Xe!==void 0&&Xe.setValue(tt,yt.setFromMatrixPosition(O.matrixWorld)),x.logarithmicDepthBuffer&&we.setValue(tt,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&we.setValue(tt,"isOrthographic",O.isOrthographicCamera===!0),A!==O&&(A=O,Ir=!0,Jo=!0)}if(at.isSkinnedMesh){we.setOptional(tt,at,"bindMatrix"),we.setOptional(tt,at,"bindMatrixInverse");const Xe=at.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),we.setValue(tt,"boneTexture",Xe.boneTexture,_))}at.isBatchedMesh&&(we.setOptional(tt,at,"batchingTexture"),we.setValue(tt,"batchingTexture",at._matricesTexture,_));const Qo=ct.morphAttributes;if((Qo.position!==void 0||Qo.normal!==void 0||Qo.color!==void 0)&&xt.update(at,ct,hi),(Ir||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,we.setValue(tt,"receiveShadow",at.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(On.envMap.value=Nt,On.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&nt.environment!==null&&(On.envMapIntensity.value=nt.environmentIntensity),Ir&&(we.setValue(tt,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Rp(On,Jo),Et&&ut.fog===!0&&K.refreshFogUniforms(On,Et),K.refreshMaterialUniforms(On,ut,X,$,m.state.transmissionRenderTarget),ao.upload(tt,hc(Gt),On,_)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(ao.upload(tt,hc(Gt),On,_),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&we.setValue(tt,"center",at.center),we.setValue(tt,"modelViewMatrix",at.modelViewMatrix),we.setValue(tt,"normalMatrix",at.normalMatrix),we.setValue(tt,"modelMatrix",at.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Xe=ut.uniformsGroups;for(let ta=0,Pp=Xe.length;ta<Pp;ta++){const mc=Xe[ta];Rt.update(mc,hi),Rt.bind(mc,hi)}}return hi}function Rp(O,nt){O.ambientLightColor.needsUpdate=nt,O.lightProbe.needsUpdate=nt,O.directionalLights.needsUpdate=nt,O.directionalLightShadows.needsUpdate=nt,O.pointLights.needsUpdate=nt,O.pointLightShadows.needsUpdate=nt,O.spotLights.needsUpdate=nt,O.spotLightShadows.needsUpdate=nt,O.rectAreaLights.needsUpdate=nt,O.hemisphereLights.needsUpdate=nt}function Cp(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(O,nt,ct){b.get(O.texture).__webglTexture=nt,b.get(O.depthTexture).__webglTexture=ct;const ut=b.get(O);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ct===void 0,ut.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,nt){const ct=b.get(O);ct.__webglFramebuffer=nt,ct.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(O,nt=0,ct=0){L=O,C=nt,R=ct;let ut=!0,at=null,Et=!1,Ct=!1;if(O){const Nt=b.get(O);Nt.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(tt.FRAMEBUFFER,null),ut=!1):Nt.__webglFramebuffer===void 0?_.setupRenderTarget(O):Nt.__hasExternalTextures&&_.rebindTextures(O,b.get(O.texture).__webglTexture,b.get(O.depthTexture).__webglTexture);const Bt=O.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);const kt=b.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(kt[nt])?at=kt[nt][ct]:at=kt[nt],Et=!0):O.samples>0&&_.useMultisampledRTT(O)===!1?at=b.get(O).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[ct]:at=kt,w.copy(O.viewport),G.copy(O.scissor),I=O.scissorTest}else w.copy(lt).multiplyScalar(X).floor(),G.copy(Y).multiplyScalar(X).floor(),I=Z;if(F.bindFramebuffer(tt.FRAMEBUFFER,at)&&ut&&F.drawBuffers(O,at),F.viewport(w),F.scissor(G),F.setScissorTest(I),Et){const Nt=b.get(O.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt.__webglTexture,ct)}else if(Ct){const Nt=b.get(O.texture),Bt=nt||0;tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,Nt.__webglTexture,ct||0,Bt)}z=-1},this.readRenderTargetPixels=function(O,nt,ct,ut,at,Et,Ct){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=b.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){F.bindFramebuffer(tt.FRAMEBUFFER,Dt);try{const Nt=O.texture,Bt=Nt.format,kt=Nt.type;if(Bt!==_n&&Ft.convert(Bt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=kt===Eo&&(k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float"));if(kt!==ii&&Ft.convert(kt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE)&&kt!==Jn&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=O.width-ut&&ct>=0&&ct<=O.height-at&&tt.readPixels(nt,ct,ut,at,Ft.convert(Bt),Ft.convert(kt),Et)}finally{const Nt=L!==null?b.get(L).__webglFramebuffer:null;F.bindFramebuffer(tt.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(O,nt,ct=0){const ut=Math.pow(2,-ct),at=Math.floor(nt.image.width*ut),Et=Math.floor(nt.image.height*ut);_.setTexture2D(nt,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,ct,0,0,O.x,O.y,at,Et),F.unbindTexture()},this.copyTextureToTexture=function(O,nt,ct,ut=0){const at=nt.image.width,Et=nt.image.height,Ct=Ft.convert(ct.format),Dt=Ft.convert(ct.type);_.setTexture2D(ct,0),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,ct.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,ct.unpackAlignment),nt.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,at,Et,Ct,Dt,nt.image.data):nt.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,nt.mipmaps[0].width,nt.mipmaps[0].height,Ct,nt.mipmaps[0].data):tt.texSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,Ct,Dt,nt.image),ut===0&&ct.generateMipmaps&&tt.generateMipmap(tt.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(O,nt,ct,ut,at=0){const Et=Math.round(O.max.x-O.min.x),Ct=Math.round(O.max.y-O.min.y),Dt=O.max.z-O.min.z+1,Nt=Ft.convert(ut.format),Bt=Ft.convert(ut.type);let kt;if(ut.isData3DTexture)_.setTexture3D(ut,0),kt=tt.TEXTURE_3D;else if(ut.isDataArrayTexture||ut.isCompressedArrayTexture)_.setTexture2DArray(ut,0),kt=tt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,ut.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,ut.unpackAlignment);const zt=tt.getParameter(tt.UNPACK_ROW_LENGTH),oe=tt.getParameter(tt.UNPACK_IMAGE_HEIGHT),ze=tt.getParameter(tt.UNPACK_SKIP_PIXELS),xe=tt.getParameter(tt.UNPACK_SKIP_ROWS),bn=tt.getParameter(tt.UNPACK_SKIP_IMAGES),se=ct.isCompressedTexture?ct.mipmaps[at]:ct.image;tt.pixelStorei(tt.UNPACK_ROW_LENGTH,se.width),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,se.height),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,O.min.x),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,O.min.y),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,O.min.z),ct.isDataTexture||ct.isData3DTexture?tt.texSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,Bt,se.data):ut.isCompressedArrayTexture?tt.compressedTexSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,se.data):tt.texSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,Bt,se),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,zt),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,oe),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,ze),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,xe),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,bn),at===0&&ut.generateMipmaps&&tt.generateMipmap(kt),F.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?_.setTextureCube(O,0):O.isData3DTexture?_.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?_.setTexture2DArray(O,0):_.setTexture2D(O,0),F.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,F.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ac?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===qo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xw extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _r extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Of=new et,Ff=new et,kf=new ae,ja=new Yo,Ws=new ls;class yw extends Le{constructor(t=new We,e=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Of.fromBufferAttribute(e,r-1),Ff.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Of.distanceTo(Ff);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,t.ray.intersectsSphere(Ws)===!1)return;kf.copy(r).invert(),ja.copy(t.ray).applyMatrix4(kf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new et,u=new et,f=new et,h=new et,d=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const p=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let y=p,E=S-1;y<E;y+=d){const C=v.getX(y),R=v.getX(y+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,R),ja.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(h);z<t.near||z>t.far||e.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let y=p,E=S-1;y<E;y+=d){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),ja.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Bf=new et,zf=new et;class Po extends yw{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Bf.fromBufferAttribute(e,r),zf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bf.distanceTo(zf);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zr extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hf=new ae,Al=new Yo,js=new ls,Xs=new et;class Xa extends Le{constructor(t=new We,e=new zr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;Hf.copy(r).invert(),Al.copy(t.ray).applyMatrix4(Hf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=h,g=d;v<g;v++){const m=c.getX(v);Xs.fromBufferAttribute(f,m),Vf(Xs,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let v=h,g=d;v<g;v++)Xs.fromBufferAttribute(f,v),Vf(Xs,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vf(n,t,e,i,r,s,a){const o=Al.distanceSqToPoint(n);if(o<e){const l=new et;Al.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class bw extends Dn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Gf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Sw{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const Mw=new Sw;class uc{constructor(t){this.manager=t!==void 0?t:Mw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}uc.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Ew extends Error{constructor(t,e){super(t),this.response=e}}class ww extends uc{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Gf.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:i,onError:r});return}An[t]=[],An[t].push({onLoad:e,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[t],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,v=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:y,value:E})=>{if(y)p.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let R=0,L=u.length;R<L;R++){const z=u[R];z.onProgress&&z.onProgress(C)}p.enqueue(E),S()}})}}});return new Response(m)}else throw new Ew(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{Gf.add(t,c);const u=An[t];delete An[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=An[t];if(u===void 0)throw this.manager.itemError(t),c;delete An[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Tw extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Aw extends Tw{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rw extends Po{constructor(t=10,e=10,i=4473924,r=8947848){i=new Xt(i),r=new Xt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,d=0,v=-o;h<=e;h++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const g=h===s?i:r;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new We;u.setAttribute("position",new pe(l,3)),u.setAttribute("color",new pe(c,3));const f=new _r({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Cw extends Po{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new We;r.setAttribute("position",new pe(e,3)),r.setAttribute("color",new pe(i,3));const s=new _r({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new Xt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);const Pw=/^[og]\s*(.+)?/,Lw=/^mtllib /,Iw=/^usemtl /,Dw=/^usemap /,jf=/\s+/,Xf=new et,qa=new et,qf=new et,Yf=new et,Ye=new et,qs=new Xt;function Uw(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(t,e,i){const r=this.vertices,s=this.object.geometry.normals;Xf.fromArray(r,t),qa.fromArray(r,e),qf.fromArray(r,i),Ye.subVectors(qf,qa),Yf.subVectors(Xf,qa),Ye.cross(Yf),Ye.normalize(),s.push(Ye.x,Ye.y,Ye.z),s.push(Ye.x,Ye.y,Ye.z),s.push(Ye.x,Ye.y,Ye.z)},addColor:function(t,e,i){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(t,e,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,r,s,a,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),o!==void 0&&o!==""){const v=this.normals.length;f=this.parseNormalIndex(o,v),h=this.parseNormalIndex(l,v),d=this.parseNormalIndex(c,v),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(r!==void 0&&r!==""){const v=this.uvs.length;f=this.parseUVIndex(r,v),h=this.parseUVIndex(s,v),d=this.parseUVIndex(a,v),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,r=t.length;i<r;i++){const s=this.parseVertexIndex(t[i],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return n.startObject("",!1),n}class Nw extends uc{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,a=new ww(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Uw;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let r=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(jf);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(qs.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),e.colors.push(qs.r,qs.g,qs.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(jf),d=[];for(let g=0,m=h.length;g<m;g++){const p=h[g];if(p.length>0){const S=p.split("/");d.push(S)}}const v=d[0];for(let g=1,m=d.length-1;g<m;g++){const p=d[g],S=d[g+1];e.addFace(v[0],p[0],S[0],v[1],p[1],S[1],v[2],p[2],S[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=f;else for(let v=0,g=f.length;v<g;v++){const m=f[v].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(h,d)}else if(u==="p"){const h=c.slice(1).trim().split(" ");e.addPointGeometry(h)}else if((r=Pw.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);e.startObject(f)}else if(Iw.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(Lw.test(c))e.materialLibraries.push(c.substring(7).trim());else if(Dw.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const h=r[1].trim().toLowerCase();e.object.smooth=h!=="0"&&h!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Br;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],u=c.geometry,f=c.materials,h=u.type==="Line",d=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const g=new We;g.setAttribute("position",new pe(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new pe(u.normals,3)),u.colors.length>0&&(v=!0,g.setAttribute("color",new pe(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new pe(u.uvs,2));const m=[];for(let S=0,y=f.length;S<y;S++){const E=f[S],C=E.name+"_"+E.smooth+"_"+v;let R=e.materials[C];if(this.materials!==null){if(R=this.materials.create(E.name),h&&R&&!(R instanceof _r)){const L=new _r;Dn.prototype.copy.call(L,R),L.color.copy(R.color),R=L}else if(d&&R&&!(R instanceof zr)){const L=new zr({size:10,sizeAttenuation:!1});Dn.prototype.copy.call(L,R),L.color.copy(R.color),L.map=R.map,R=L}}R===void 0&&(h?R=new _r:d?R=new zr({size:1,sizeAttenuation:!1}):R=new bw,R.name=E.name,R.flatShading=!E.smooth,R.vertexColors=v,e.materials[C]=R),m.push(R)}let p;if(m.length>1){for(let S=0,y=f.length;S<y;S++){const E=f[S];g.addGroup(E.groupStart,E.groupCount,S)}h?p=new Po(g,m):d?p=new Xa(g,m):p=new an(g,m)}else h?p=new Po(g,m[0]):d?p=new Xa(g,m[0]):p=new an(g,m[0]);p.name=c.name,s.add(p)}else if(e.vertices.length>0){const o=new zr({size:1,sizeAttenuation:!1}),l=new We;l.setAttribute("position",new pe(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new pe(e.colors,3)),o.vertexColors=!0);const c=new Xa(l,o);s.add(c)}return s}}const $f={type:"change"},Ya={type:"start"},Kf={type:"end"},Ys=new Yo,Zf=new $n,Ow=Math.cos(70*ay.DEG2RAD);class Fw extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ft),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent($f),i.update(),s=r.NONE},this.update=function(){const T=new et,st=new Di().setFromUnitVectors(t.up,new et(0,1,0)),ht=st.clone().invert(),vt=new et,Mt=new Di,Vt=new et,qt=2*Math.PI;return function(ve=null){const Zt=i.object.position;T.copy(Zt).sub(i.target),T.applyQuaternion(st),o.setFromVector3(T),i.autoRotate&&s===r.NONE&&I(w(ve)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ce=i.minAzimuthAngle,ue=i.maxAzimuthAngle;isFinite(ce)&&isFinite(ue)&&(ce<-Math.PI?ce+=qt:ce>Math.PI&&(ce-=qt),ue<-Math.PI?ue+=qt:ue>Math.PI&&(ue-=qt),ce<=ue?o.theta=Math.max(ce,Math.min(ue,o.theta)):o.theta=o.theta>(ce+ue)/2?Math.max(ce,o.theta):Math.min(ue,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Be=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=lt(o.radius);else{const je=o.radius;o.radius=lt(o.radius*c),Be=je!=o.radius}if(T.setFromSpherical(o),T.applyQuaternion(ht),Zt.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let je=null;if(i.object.isPerspectiveCamera){const Nn=T.length();je=lt(Nn*c);const Oi=Nn-je;i.object.position.addScaledVector(E,Oi),i.object.updateMatrixWorld(),Be=!!Oi}else if(i.object.isOrthographicCamera){const Nn=new et(C.x,C.y,0);Nn.unproject(i.object);const Oi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Be=Oi!==i.object.zoom;const fi=new et(C.x,C.y,0);fi.unproject(i.object),i.object.position.sub(fi).add(Nn),i.object.updateMatrixWorld(),je=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;je!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(je).add(i.object.position):(Ys.origin.copy(i.object.position),Ys.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ys.direction))<Ow?t.lookAt(i.target):(Zf.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ys.intersectPlane(Zf,i.target))))}else if(i.object.isOrthographicCamera){const je=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),je!==i.object.zoom&&(i.object.updateProjectionMatrix(),Be=!0)}return c=1,R=!1,Be||vt.distanceToSquared(i.object.position)>a||8*(1-Mt.dot(i.object.quaternion))>a||Vt.distanceToSquared(i.target)>a?(i.dispatchEvent($f),vt.copy(i.object.position),Mt.copy(i.object.quaternion),Vt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",xt),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",j),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",B),i.domElement.getRootNode().removeEventListener("keydown",rt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ft),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Wf,l=new Wf;let c=1;const u=new et,f=new Ot,h=new Ot,d=new Ot,v=new Ot,g=new Ot,m=new Ot,p=new Ot,S=new Ot,y=new Ot,E=new et,C=new Ot;let R=!1;const L=[],z={};let A=!1;function w(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function G(T){const st=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*st)}function I(T){l.theta-=T}function U(T){l.phi-=T}const M=function(){const T=new et;return function(ht,vt){T.setFromMatrixColumn(vt,0),T.multiplyScalar(-ht),u.add(T)}}(),V=function(){const T=new et;return function(ht,vt){i.screenSpacePanning===!0?T.setFromMatrixColumn(vt,1):(T.setFromMatrixColumn(vt,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(ht),u.add(T)}}(),$=function(){const T=new et;return function(ht,vt){const Mt=i.domElement;if(i.object.isPerspectiveCamera){const Vt=i.object.position;T.copy(Vt).sub(i.target);let qt=T.length();qt*=Math.tan(i.object.fov/2*Math.PI/180),M(2*ht*qt/Mt.clientHeight,i.object.matrix),V(2*vt*qt/Mt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(M(ht*(i.object.right-i.object.left)/i.object.zoom/Mt.clientWidth,i.object.matrix),V(vt*(i.object.top-i.object.bottom)/i.object.zoom/Mt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(T,st){if(!i.zoomToCursor)return;R=!0;const ht=i.domElement.getBoundingClientRect(),vt=T-ht.left,Mt=st-ht.top,Vt=ht.width,qt=ht.height;C.x=vt/Vt*2-1,C.y=-(Mt/qt)*2+1,E.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function lt(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function Y(T){f.set(T.clientX,T.clientY)}function Z(T){Q(T.clientX,T.clientX),p.set(T.clientX,T.clientY)}function gt(T){v.set(T.clientX,T.clientY)}function J(T){h.set(T.clientX,T.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const st=i.domElement;I(2*Math.PI*d.x/st.clientHeight),U(2*Math.PI*d.y/st.clientHeight),f.copy(h),i.update()}function it(T){S.set(T.clientX,T.clientY),y.subVectors(S,p),y.y>0?X(G(y.y)):y.y<0&&W(G(y.y)),p.copy(S),i.update()}function dt(T){g.set(T.clientX,T.clientY),m.subVectors(g,v).multiplyScalar(i.panSpeed),$(m.x,m.y),v.copy(g),i.update()}function pt(T){Q(T.clientX,T.clientY),T.deltaY<0?W(G(T.deltaY)):T.deltaY>0&&X(G(T.deltaY)),i.update()}function yt(T){let st=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),st=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),st=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),st=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),st=!0;break}st&&(T.preventDefault(),i.update())}function bt(T){if(L.length===1)f.set(T.pageX,T.pageY);else{const st=Rt(T),ht=.5*(T.pageX+st.x),vt=.5*(T.pageY+st.y);f.set(ht,vt)}}function Tt(T){if(L.length===1)v.set(T.pageX,T.pageY);else{const st=Rt(T),ht=.5*(T.pageX+st.x),vt=.5*(T.pageY+st.y);v.set(ht,vt)}}function tt(T){const st=Rt(T),ht=T.pageX-st.x,vt=T.pageY-st.y,Mt=Math.sqrt(ht*ht+vt*vt);p.set(0,Mt)}function Pt(T){i.enableZoom&&tt(T),i.enablePan&&Tt(T)}function k(T){i.enableZoom&&tt(T),i.enableRotate&&bt(T)}function x(T){if(L.length==1)h.set(T.pageX,T.pageY);else{const ht=Rt(T),vt=.5*(T.pageX+ht.x),Mt=.5*(T.pageY+ht.y);h.set(vt,Mt)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const st=i.domElement;I(2*Math.PI*d.x/st.clientHeight),U(2*Math.PI*d.y/st.clientHeight),f.copy(h)}function F(T){if(L.length===1)g.set(T.pageX,T.pageY);else{const st=Rt(T),ht=.5*(T.pageX+st.x),vt=.5*(T.pageY+st.y);g.set(ht,vt)}m.subVectors(g,v).multiplyScalar(i.panSpeed),$(m.x,m.y),v.copy(g)}function H(T){const st=Rt(T),ht=T.pageX-st.x,vt=T.pageY-st.y,Mt=Math.sqrt(ht*ht+vt*vt);S.set(0,Mt),y.set(0,Math.pow(S.y/p.y,i.zoomSpeed)),X(y.y),p.copy(S);const Vt=(T.pageX+st.x)*.5,qt=(T.pageY+st.y)*.5;Q(Vt,qt)}function b(T){i.enableZoom&&H(T),i.enablePan&&F(T)}function _(T){i.enableZoom&&H(T),i.enableRotate&&x(T)}function P(T){i.enabled!==!1&&(L.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",N),i.domElement.addEventListener("pointerup",B)),!Ft(T)&&(It(T),T.pointerType==="touch"?_t(T):D(T)))}function N(T){i.enabled!==!1&&(T.pointerType==="touch"?mt(T):q(T))}function B(T){switch(At(T),L.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",B),i.dispatchEvent(Kf),s=r.NONE;break;case 1:const st=L[0],ht=z[st];_t({pointerId:st,pageX:ht.x,pageY:ht.y});break}}function D(T){let st;switch(T.button){case 0:st=i.mouseButtons.LEFT;break;case 1:st=i.mouseButtons.MIDDLE;break;case 2:st=i.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Fi.DOLLY:if(i.enableZoom===!1)return;Z(T),s=r.DOLLY;break;case Fi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;gt(T),s=r.PAN}else{if(i.enableRotate===!1)return;Y(T),s=r.ROTATE}break;case Fi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;Y(T),s=r.ROTATE}else{if(i.enablePan===!1)return;gt(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ya)}function q(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;J(T);break;case r.DOLLY:if(i.enableZoom===!1)return;it(T);break;case r.PAN:if(i.enablePan===!1)return;dt(T);break}}function j(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Ya),pt(K(T)),i.dispatchEvent(Kf))}function K(T){const st=T.deltaMode,ht={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(st){case 1:ht.deltaY*=16;break;case 2:ht.deltaY*=100;break}return T.ctrlKey&&!A&&(ht.deltaY*=10),ht}function rt(T){T.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(T){T.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function ft(T){i.enabled===!1||i.enablePan===!1||yt(T)}function _t(T){switch(Ht(T),L.length){case 1:switch(i.touches.ONE){case ki.ROTATE:if(i.enableRotate===!1)return;bt(T),s=r.TOUCH_ROTATE;break;case ki.PAN:if(i.enablePan===!1)return;Tt(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ki.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pt(T),s=r.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ya)}function mt(T){switch(Ht(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;x(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;F(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_(T),i.update();break;default:s=r.NONE}}function xt(T){i.enabled!==!1&&T.preventDefault()}function It(T){L.push(T.pointerId)}function At(T){delete z[T.pointerId];for(let st=0;st<L.length;st++)if(L[st]==T.pointerId){L.splice(st,1);return}}function Ft(T){for(let st=0;st<L.length;st++)if(L[st]==T.pointerId)return!0;return!1}function Ht(T){let st=z[T.pointerId];st===void 0&&(st=new Ot,z[T.pointerId]=st),st.set(T.pageX,T.pageY)}function Rt(T){const st=T.pointerId===L[0]?L[1]:L[0];return z[st]}i.domElement.addEventListener("contextmenu",xt),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",j,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",rt,{passive:!0,capture:!0}),this.update()}}const kw=Rr({__name:"preview",props:{obj:{}},setup(n){const t=ln(),e=n;let i,r,s,a,o,l;const c=()=>{i=new xw,i.background=new Xt(16777215),r=new Ze(75,t.value.clientWidth/t.value.clientHeight,.1,1e3),r.position.set(0,5,100),s=new vw({antialias:!0}),s.setSize(t.value.clientWidth,t.value.clientHeight),t.value.appendChild(s.domElement),a=new Fw(r,s.domElement),a.update();const d=new Aw(4210752);i.add(d),o=new Cw(.1),o.position.set(10,0,10),i.add(o);const v=new Rw(1e3,1e3);i.add(v),window.addEventListener("resize",u,!1),f()},u=()=>{r.aspect=t.value.clientWidth/t.value.clientHeight,r.updateProjectionMatrix(),s.setSize(t.value.clientWidth,t.value.clientHeight)},f=()=>{requestAnimationFrame(f),a.update();const d=.6,v=-.6,g=-1,m=new et(1,0,0).applyQuaternion(r.quaternion).multiplyScalar(d),p=new et(0,1,0).applyQuaternion(r.quaternion).multiplyScalar(v),S=new et(0,0,1).applyQuaternion(r.quaternion).multiplyScalar(g),y=m.add(p).add(S).add(r.position);o.position.copy(y),s.render(i,r)},h=d=>{l=new Nw().parse(d),i.add(l),l.position.set(0,0,0)};return Oh(()=>{c(),h(e.obj)}),Xl(()=>{window.removeEventListener("resize",u),s.dispose()}),cr(()=>e.obj,(d,v)=>{d!==v&&(l&&(i.remove(l),l=null),h(d))}),(d,v)=>(Pe(),Jr("div",{ref_key:"container",ref:t,class:"preview-container"},null,512))}}),Bw={class:"base-panel"},zw={key:0,class:"font-bold text-3xl"},Hw=Rr({__name:"panel",props:{title:{}},setup(n){return(t,e)=>(Pe(),Jr("div",Bw,[t.title?(Pe(),Jr("h1",zw,jp(t.title),1)):ad("",!0),kh(t.$slots,"default")]))}}),Vw=de("h2",{class:"text-xl mb-2"},"Rotation",-1),Gw={class:"form-grid"},Ww=de("label",{for:"rotate-x"},"X:",-1),jw=de("label",{for:"rotate-y"},"Y:",-1),Xw=de("label",{for:"rotate-z"},"Z:",-1),qw=de("div",{class:"border-t-2 border-black/20 w-full my-4"},null,-1),Yw={class:"form-grid"},$w=de("label",{for:"preview"},"Show Preview:",-1),Kw=Rr({__name:"config",props:{modelValue:{}},emits:["load-obj","click-dl","update:modelValue"],setup(n,{emit:t}){const e=ln("fileInput"),i=t,r=n,s=Kl({get:()=>r.modelValue,set:l=>i("update:modelValue",l)}),a=()=>{e.value.click()},o=()=>{var u;const l=(u=e.value.files)==null?void 0:u[0];if(!l)return;const c=new FileReader;c.onload=()=>{var f;i("load-obj",(f=c.result)==null?void 0:f.toString())},c.readAsText(l)};return(l,c)=>(Pe(),Jr("div",null,[Vw,de("div",Gw,[Ww,_s(de("input",{id:"rotate-x",type:"number","onUpdate:modelValue":c[0]||(c[0]=u=>Kt(s).rotate.x=u),min:"-180",max:"180",step:"1"},null,512),[[ca,Kt(s).rotate.x,void 0,{number:!0}]]),jw,_s(de("input",{id:"rotate-y",type:"number","onUpdate:modelValue":c[1]||(c[1]=u=>Kt(s).rotate.y=u),min:"-180",max:"180",step:"1"},null,512),[[ca,Kt(s).rotate.y,void 0,{number:!0}]]),Xw,_s(de("input",{id:"rotate-z",type:"number","onUpdate:modelValue":c[2]||(c[2]=u=>Kt(s).rotate.z=u),min:"-180",max:"180",step:"1"},null,512),[[ca,Kt(s).rotate.z,void 0,{number:!0}]])]),qw,de("div",Yw,[$w,_s(de("input",{id:"preview",type:"checkbox","onUpdate:modelValue":c[3]||(c[3]=u=>Kt(s).preview=u)},null,512),[[e_,Kt(s).preview]])]),de("input",{ref_key:"fileInput",ref:e,type:"file",accept:".obj",onChange:o,class:"hidden"},null,544),de("button",{class:"form-button",onClick:a},"Load OBJ"),de("button",{class:"form-button",onClick:c[4]||(c[4]=u=>i("click-dl",!1))},"Download OBJ"),de("button",{class:"form-button",onClick:c[5]||(c[5]=u=>i("click-dl",!0))},"Download ZIP")]))}}),Zw=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},Jw={},Qw={class:"base-layout"},tT=de("h1",{class:"absolute top-4 left-4 text-3xl font-bold text-white"}," Wavefront OBJ - Auto Centering Multi Tool ",-1);function eT(n,t){return Pe(),Jr("div",Qw,[tT,kh(n.$slots,"default")])}const nT=Zw(Jw,[["render",eT]]);var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ks(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ep={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function a(c,u){if(!r[c]){if(!i[c]){var f=typeof Ks=="function"&&Ks;if(!u&&f)return f(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var d=r[c]={exports:{}};i[c][0].call(d.exports,function(v){var g=i[c][1][v];return a(g||v)},d,d.exports,e,i,r,s)}return r[c].exports}for(var o=typeof Ks=="function"&&Ks,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(e,i,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,f,h,d,v,g,m=[],p=0,S=l.length,y=S,E=s.getTypeOf(l)!=="string";p<l.length;)y=S-p,f=E?(c=l[p++],u=p<S?l[p++]:0,p<S?l[p++]:0):(c=l.charCodeAt(p++),u=p<S?l.charCodeAt(p++):0,p<S?l.charCodeAt(p++):0),h=c>>2,d=(3&c)<<4|u>>4,v=1<y?(15&u)<<2|f>>6:64,g=2<y?63&f:64,m.push(o.charAt(h)+o.charAt(d)+o.charAt(v)+o.charAt(g));return m.join("")},r.decode=function(l){var c,u,f,h,d,v,g=0,m=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&y--,l.charAt(l.length-2)===o.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=a.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(h=o.indexOf(l.charAt(g++)))>>4,u=(15&h)<<4|(d=o.indexOf(l.charAt(g++)))>>2,f=(3&d)<<6|(v=o.indexOf(l.charAt(g++))),S[m++]=c,d!==64&&(S[m++]=u),v!==64&&(S[m++]=f);return S}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(u,f,h,d,v){this.compressedSize=u,this.uncompressedSize=f,this.crc32=h,this.compression=d,this.compressedContent=v}c.prototype={getContentWorker:function(){var u=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return u.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,f,h){return u.pipe(new o).pipe(new l("uncompressedSize")).pipe(f.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,u,f,h){var d=a,v=h+f;c^=-1;for(var g=h;g<v;g++)c=c>>>8^d[255&(c^u[g])];return-1^c}(0|l,o,o.length,0):function(c,u,f,h){var d=a,v=h+f;c^=-1;for(var g=h;g<v;g++)c=c>>>8^d[255&(c^u.charCodeAt(g))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function u(f,h){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=h,this.meta={}}r.magic="\b\0",o.inherits(u,l),u.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,f.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(h){f.push({data:h,meta:f.meta})}},r.compressWorker=function(f){return new u("Deflate",f)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(d,v){var g,m="";for(g=0;g<v;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function a(d,v,g,m,p,S){var y,E,C=d.file,R=d.compression,L=S!==c.utf8encode,z=o.transformTo("string",S(C.name)),A=o.transformTo("string",c.utf8encode(C.name)),w=C.comment,G=o.transformTo("string",S(w)),I=o.transformTo("string",c.utf8encode(w)),U=A.length!==C.name.length,M=I.length!==w.length,V="",$="",X="",W=C.dir,Q=C.date,lt={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(lt.crc32=d.crc32,lt.compressedSize=d.compressedSize,lt.uncompressedSize=d.uncompressedSize);var Y=0;v&&(Y|=8),L||!U&&!M||(Y|=2048);var Z=0,gt=0;W&&(Z|=16),p==="UNIX"?(gt=798,Z|=function(it,dt){var pt=it;return it||(pt=dt?16893:33204),(65535&pt)<<16}(C.unixPermissions,W)):(gt=20,Z|=function(it){return 63&(it||0)}(C.dosPermissions)),y=Q.getUTCHours(),y<<=6,y|=Q.getUTCMinutes(),y<<=5,y|=Q.getUTCSeconds()/2,E=Q.getUTCFullYear()-1980,E<<=4,E|=Q.getUTCMonth()+1,E<<=5,E|=Q.getUTCDate(),U&&($=s(1,1)+s(u(z),4)+A,V+="up"+s($.length,2)+$),M&&(X=s(1,1)+s(u(G),4)+I,V+="uc"+s(X.length,2)+X);var J="";return J+=`
\0`,J+=s(Y,2),J+=R.magic,J+=s(y,2),J+=s(E,2),J+=s(lt.crc32,4),J+=s(lt.compressedSize,4),J+=s(lt.uncompressedSize,4),J+=s(z.length,2),J+=s(V.length,2),{fileRecord:f.LOCAL_FILE_HEADER+J+z+V,dirRecord:f.CENTRAL_FILE_HEADER+s(gt,2)+J+s(G.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+z+V+G}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),u=e("../crc32"),f=e("../signature");function h(d,v,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(d){var v=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-m-1))/g:100}}))},h.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var v=this.streamFiles&&!d.file.dir;if(v){var g=a(d,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(d){this.accumulate=!1;var v=this.streamFiles&&!d.file.dir,g=a(d,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var d=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-d,m=function(p,S,y,E,C){var R=o.transformTo("string",C(E));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(p,2)+s(p,2)+s(S,4)+s(y,4)+s(R.length,2)+R}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(d){this._sources.push(d);var v=this;return d.on("data",function(g){v.processChunk(g)}),d.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),d.on("error",function(g){v.error(g)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(d){var v=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<v.length;g++)try{v[g].error(d)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,v=0;v<d.length;v++)d[v].lock()},i.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var u=new a(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{o.forEach(function(h,d){f++;var v=function(S,y){var E=S||y,C=s[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,p=d.date;d._compressWorker(v,g).withStreamInfo("file",{name:h,dir:m,date:p,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=f}catch(h){u.error(h)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function f(h){return new a.Promise(function(d,v){var g=h.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){v(m)}).on("end",function(){g.streamInfo.crc32!==h.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(h,d){var v=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",h,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],p=g.files;if(d.checkCRC32)for(var S=0;S<p.length;S++)m.push(f(p[S]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),p=m.files,S=0;S<p.length;S++){var y=p[S],E=y.fileNameStr,C=s.resolve(y.fileNameStr);v.file(C,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:d.createFolders}),y.dir||(v.file(C).unsafeOriginalName=E)}return m.zipComment.length&&(v.comment=m.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var u=this;o.on("data",function(f,h){u.push(f)||u._helper.pause(),c&&c(h)}).on("error",function(f){u.emit("error",f)}).on("end",function(){u.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(C,R,L){var z,A=o.getTypeOf(R),w=o.extend(L||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=p(C)),w.createFolders&&(z=m(C))&&S.call(this,z,!0);var G=A==="string"&&w.binary===!1&&w.base64===!1;L&&L.binary!==void 0||(w.binary=!G),(R instanceof f&&R.uncompressedSize===0||w.dir||!R||R.length===0)&&(w.base64=!1,w.binary=!0,R="",w.compression="STORE",A="string");var I=null;I=R instanceof f||R instanceof l?R:v.isNode&&v.isStream(R)?new g(C,R):o.prepareContent(C,R,w.binary,w.optimizedBinaryString,w.base64);var U=new h(C,I,w);this.files[C]=U}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),u=e("./defaults"),f=e("./compressedObject"),h=e("./zipObject"),d=e("./generate"),v=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var R=C.lastIndexOf("/");return 0<R?C.substring(0,R):""},p=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},S=function(C,R){return R=R!==void 0?R:u.createFolders,C=p(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:R}),this.files[C]};function y(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var R,L,z;for(R in this.files)z=this.files[R],(L=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&C(L,z)},filter:function(C){var R=[];return this.forEach(function(L,z){C(L,z)&&R.push(z)}),R},file:function(C,R,L){if(arguments.length!==1)return C=this.root+C,s.call(this,C,R,L),this;if(y(C)){var z=C;return this.filter(function(w,G){return!G.dir&&z.test(w)})}var A=this.files[this.root+C];return A&&!A.dir?A:null},folder:function(C){if(!C)return this;if(y(C))return this.filter(function(A,w){return w.dir&&C.test(A)});var R=this.root+C,L=S.call(this,R),z=this.clone();return z.root=L.name,z},remove:function(C){C=this.root+C;var R=this.files[C];if(R||(C.slice(-1)!=="/"&&(C+="/"),R=this.files[C]),R&&!R.dir)delete this.files[C];else for(var L=this.filter(function(A,w){return w.name.slice(0,C.length)===C}),z=0;z<L.length;z++)delete this.files[L[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var R,L={};try{if((L=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var z=L.comment||this.comment||"";R=d.generateWorker(this,L,z)}catch(A){(R=new l("error")).error(A)}return new c(R,L.type||"string",L.mimeType)},generateAsync:function(C,R){return this.generateInternalStream(C).accumulate(R)},generateNodeStream:function(C,R){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(R)}};i.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===u&&this.data[h+3]===f)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&u===h[2]&&f===h[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");i.exports=function(f){var h=s.getTypeOf(f);return s.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new c(f):a.uint8array?new u(s.transformTo("uint8array",f)):new o(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),u=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(v,g){return new u.Promise(function(m,p){var S=[],y=v._internalType,E=v._outputType,C=v._mimeType;v.on("data",function(R,L){S.push(R),g&&g(L)}).on("error",function(R){S=[],p(R)}).on("end",function(){try{var R=function(L,z,A){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",z),A);case"base64":return l.encode(z);default:return s.transformTo(L,z)}}(E,function(L,z){var A,w=0,G=null,I=0;for(A=0;A<z.length;A++)I+=z[A].length;switch(L){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(G=new Uint8Array(I),A=0;A<z.length;A++)G.set(z[A],w),w+=z[A].length;return G;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+L+"'")}}(y,S),C);m(R)}catch(L){p(L)}S=[]}).resume()})}function d(v,g,m){var p=g;switch(g){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=g,this._mimeType=m,s.checkSupport(p),this._worker=v.pipe(new a(p)),v.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}d.prototype={accumulate:function(v){return h(this,v)},on:function(v,g){var m=this;return v==="data"?this._worker.on(v,function(p){g.call(m,p.data,p.meta)}):this._worker.on(v,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return a.nodebuffer?o.newBufferFrom(d,"utf-8"):function(v){var g,m,p,S,y,E=v.length,C=0;for(S=0;S<E;S++)(64512&(m=v.charCodeAt(S)))==55296&&S+1<E&&(64512&(p=v.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),S++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(C):new Array(C),S=y=0;y<C;S++)(64512&(m=v.charCodeAt(S)))==55296&&S+1<E&&(64512&(p=v.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),S++),m<128?g[y++]=m:(m<2048?g[y++]=192|m>>>6:(m<65536?g[y++]=224|m>>>12:(g[y++]=240|m>>>18,g[y++]=128|m>>>12&63),g[y++]=128|m>>>6&63),g[y++]=128|63&m);return g}(d)},r.utf8decode=function(d){return a.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(v){var g,m,p,S,y=v.length,E=new Array(2*y);for(g=m=0;g<y;)if((p=v[g++])<128)E[m++]=p;else if(4<(S=c[p]))E[m++]=65533,g+=S-1;else{for(p&=S===2?31:S===3?15:7;1<S&&g<y;)p=p<<6|63&v[g++],S--;1<S?E[m++]=65533:p<65536?E[m++]=p:(p-=65536,E[m++]=55296|p>>10&1023,E[m++]=56320|1023&p)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),s.applyFromCharCode(E)}(d=s.transformTo(a.uint8array?"uint8array":"array",d))},s.inherits(f,l),f.prototype.processChunk=function(d){var v=s.transformTo(a.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var m=function(S,y){var E;for((y=y||S.length)>S.length&&(y=S.length),E=y-1;0<=E&&(192&S[E])==128;)E--;return E<0||E===0?y:E+c[S[E]]>y?E:y}(v),p=v;m!==v.length&&(a.uint8array?(p=v.subarray(0,m),this.leftOver=v.subarray(m,v.length)):(p=v.slice(0,m),this.leftOver=v.slice(m,v.length))),this.push({data:r.utf8decode(p),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(h,l),h.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(g){return g}function u(g,m){for(var p=0;p<g.length;++p)m[p]=255&g.charCodeAt(p);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(g),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,p){var S=[],y=0,E=g.length;if(E<=p)return String.fromCharCode.apply(null,g);for(;y<E;)m==="array"||m==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+p,E)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+p,E)))),y+=p;return S.join("")},stringifyByChar:function(g){for(var m="",p=0;p<g.length;p++)m+=String.fromCharCode(g[p]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function h(g){var m=65536,p=r.getTypeOf(g),S=!0;if(p==="uint8array"?S=f.applyCanBeUsed.uint8array:p==="nodebuffer"&&(S=f.applyCanBeUsed.nodebuffer),S)for(;1<m;)try{return f.stringifyByChunk(g,p,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function d(g,m){for(var p=0;p<g.length;p++)m[p]=g[p];return m}r.applyFromCharCode=h;var v={};v.string={string:c,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,o.allocBuffer(g.length))}},v.array={string:h,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},v.arraybuffer={string:function(g){return h(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:h,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},v.nodebuffer={string:h,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var p=r.getTypeOf(m);return v[p][g](m)},r.resolve=function(g){for(var m=g.split("/"),p=[],S=0;S<m.length;S++){var y=m[S];y==="."||y===""&&S!==0&&S!==m.length-1||(y===".."?p.pop():p.push(y))}return p.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,p,S="";for(p=0;p<(g||"").length;p++)S+="\\x"+((m=g.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return S},r.delay=function(g,m,p){setImmediate(function(){g.apply(p||null,m||[])})},r.inherits=function(g,m){function p(){}p.prototype=m.prototype,g.prototype=new p},r.extend=function(){var g,m,p={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&p[m]===void 0&&(p[m]=arguments[g][m]);return p},r.prepareContent=function(g,m,p,S,y){return l.Promise.resolve(m).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,R){var L=new FileReader;L.onload=function(z){C(z.target.result)},L.onerror=function(z){R(z.target.error)},L.readAsArrayBuffer(E)}):E}).then(function(E){var C=r.getTypeOf(E);return C?(C==="arraybuffer"?E=r.transformTo("uint8array",E):C==="string"&&(y?E=a.decode(E):p&&S!==!0&&(E=function(R){return u(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function u(f){this.files=[],this.loadOptions=f}u.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(f)+")")}},isSignature:function(f,h){var d=this.reader.index;this.reader.setIndex(f);var v=this.reader.readString(4)===h;return this.reader.setIndex(d),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",d=a.transformTo(h,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,h,d,v=this.zip64EndOfCentralSize-44;0<v;)f=this.reader.readInt(2),h=this.reader.readInt(4),d=this.reader.readData(h),this.zip64ExtensibleData[f]={id:f,length:h,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,h;for(f=0;f<this.files.length;f++)h=this.files[f],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var h=f;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var v=h-d;if(0<v)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),u=e("./compressions"),f=e("./support");function h(d,v){this.options=d,this.loadOptions=v}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var v,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(m){for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)&&u[p].magic===m)return u[p];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,v,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var v=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(v),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var v,g,m,p=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<p;)v=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[v]={id:v,length:g,value:m};d.setIndex(p)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=a.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=a.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var v=s(d.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(d.length-5))}return null}},i.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(v,g,m){this.name=v,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),u=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,m="string";try{if(!v)throw new Error("No output type specified.");var p=(m=v.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!p&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&p&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new u("error")).error(y)}return new a(g,m,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,v,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)s.prototype[f[d]]=h;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(v),f=s.document.createTextNode("");u.observe(f,{characterData:!0}),a=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var h=new s.MessageChannel;h.port1.onmessage=v,a=function(){h.port2.postMessage(0)}}var d=[];function v(){var g,m;o=!0;for(var p=d.length;p;){for(m=d,d=[],g=-1;++g<p;)m[g]();p=d.length}o=!1}i.exports=function(g){d.push(g)!==1||o||a()}}).call(this,typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function f(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,p!==a&&g(this,p)}function h(p,S,y){this.promise=p,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function d(p,S,y){s(function(){var E;try{E=S(y)}catch(C){return o.reject(p,C)}E===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,E)})}function v(p){var S=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof S=="function")return function(){S.apply(p,arguments)}}function g(p,S){var y=!1;function E(L){y||(y=!0,o.reject(p,L))}function C(L){y||(y=!0,o.resolve(p,L))}var R=m(function(){S(C,E)});R.status==="error"&&E(R.value)}function m(p,S){var y={};try{y.value=p(S),y.status="success"}catch(E){y.status="error",y.value=E}return y}(i.exports=f).prototype.finally=function(p){if(typeof p!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(p()).then(function(){return y})},function(y){return S.resolve(p()).then(function(){throw y})})},f.prototype.catch=function(p){return this.then(null,p)},f.prototype.then=function(p,S){if(typeof p!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(a);return this.state!==u?d(y,this.state===c?p:S,this.outcome):this.queue.push(new h(y,p,S)),y},h.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},h.prototype.otherCallFulfilled=function(p){d(this.promise,this.onFulfilled,p)},h.prototype.callRejected=function(p){o.reject(this.promise,p)},h.prototype.otherCallRejected=function(p){d(this.promise,this.onRejected,p)},o.resolve=function(p,S){var y=m(v,S);if(y.status==="error")return o.reject(p,y.value);var E=y.value;if(E)g(p,E);else{p.state=c,p.outcome=S;for(var C=-1,R=p.queue.length;++C<R;)p.queue[C].callFulfilled(S)}return p},o.reject=function(p,S){p.state=l,p.outcome=S;for(var y=-1,E=p.queue.length;++y<E;)p.queue[y].callRejected(S);return p},f.resolve=function(p){return p instanceof this?p:o.resolve(new this(a),p)},f.reject=function(p){var S=new this(a);return o.reject(S,p)},f.all=function(p){var S=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,E=!1;if(!y)return this.resolve([]);for(var C=new Array(y),R=0,L=-1,z=new this(a);++L<y;)A(p[L],L);return z;function A(w,G){S.resolve(w).then(function(I){C[G]=I,++R!==y||E||(E=!0,o.resolve(z,C))},function(I){E||(E=!0,o.reject(z,I))})}},f.race=function(p){var S=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,E=!1;if(!y)return this.resolve([]);for(var C=-1,R=new this(a);++C<y;)L=p[C],S.resolve(L).then(function(z){E||(E=!0,o.resolve(R,z))},function(z){E||(E=!0,o.reject(R,z))});var L;return R}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),u=Object.prototype.toString,f=0,h=-1,d=0,v=8;function g(p){if(!(this instanceof g))return new g(p);this.options=a.assign({level:h,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},p||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==f)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var E;if(E=typeof S.dictionary=="string"?o.string2buf(S.dictionary):u.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,E))!==f)throw new Error(l[y]);this._dict_set=!0}}function m(p,S){var y=new g(S);if(y.push(p,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(p,S){var y,E,C=this.strm,R=this.options.chunkSize;if(this.ended)return!1;E=S===~~S?S:S===!0?4:0,typeof p=="string"?C.input=o.string2buf(p):u.call(p)==="[object ArrayBuffer]"?C.input=new Uint8Array(p):C.input=p,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(R),C.next_out=0,C.avail_out=R),(y=s.deflate(C,E))!==1&&y!==f)return this.onEnd(y),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&y!==1);return E===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===f):E!==2||(this.onEnd(f),!(C.avail_out=0))},g.prototype.onData=function(p){this.chunks.push(p)},g.prototype.onEnd=function(p){p===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(p,S){return(S=S||{}).raw=!0,m(p,S)},r.gzip=function(p,S){return(S=S||{}).gzip=!0,m(p,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),u=e("./zlib/zstream"),f=e("./zlib/gzheader"),h=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var p=s.inflateInit2(this.strm,m.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function v(g,m){var p=new d(m);if(p.push(g,!0),p.err)throw p.msg||c[p.err];return p.result}d.prototype.push=function(g,m){var p,S,y,E,C,R,L=this.strm,z=this.options.chunkSize,A=this.options.dictionary,w=!1;if(this.ended)return!1;S=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?L.input=o.binstring2buf(g):h.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(z),L.next_out=0,L.avail_out=z),(p=s.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(R=typeof A=="string"?o.string2buf(A):h.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,p=s.inflateSetDictionary(this.strm,R)),p===l.Z_BUF_ERROR&&w===!0&&(p=l.Z_OK,w=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&p!==l.Z_STREAM_END&&(L.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=o.utf8border(L.output,L.next_out),E=L.next_out-y,C=o.buf2string(L.output,y),L.next_out=E,L.avail_out=z-E,E&&a.arraySet(L.output,L.output,y,E,0),this.onData(C)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(w=!0)}while((0<L.avail_in||L.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(p=s.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=v,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,v(g,m)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var f in u)u.hasOwnProperty(f)&&(l[f]=u[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,u,f,h){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+f),h);else for(var d=0;d<f;d++)l[h+d]=c[u+d]},flattenChunks:function(l){var c,u,f,h,d,v;for(c=f=0,u=l.length;c<u;c++)f+=l[c].length;for(v=new Uint8Array(f),c=h=0,u=l.length;c<u;c++)d=l[c],v.set(d,h),h+=d.length;return v}},o={arraySet:function(l,c,u,f,h){for(var d=0;d<f;d++)l[h+d]=c[u+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(f,h){if(h<65537&&(f.subarray&&o||!f.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(f,h));for(var d="",v=0;v<h;v++)d+=String.fromCharCode(f[v]);return d}l[254]=l[254]=1,r.string2buf=function(f){var h,d,v,g,m,p=f.length,S=0;for(g=0;g<p;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<p&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),S+=d<128?1:d<2048?2:d<65536?3:4;for(h=new s.Buf8(S),g=m=0;m<S;g++)(64512&(d=f.charCodeAt(g)))==55296&&g+1<p&&(64512&(v=f.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(v-56320),g++),d<128?h[m++]=d:(d<2048?h[m++]=192|d>>>6:(d<65536?h[m++]=224|d>>>12:(h[m++]=240|d>>>18,h[m++]=128|d>>>12&63),h[m++]=128|d>>>6&63),h[m++]=128|63&d);return h},r.buf2binstring=function(f){return u(f,f.length)},r.binstring2buf=function(f){for(var h=new s.Buf8(f.length),d=0,v=h.length;d<v;d++)h[d]=f.charCodeAt(d);return h},r.buf2string=function(f,h){var d,v,g,m,p=h||f.length,S=new Array(2*p);for(d=v=0;d<p;)if((g=f[d++])<128)S[v++]=g;else if(4<(m=l[g]))S[v++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<p;)g=g<<6|63&f[d++],m--;1<m?S[v++]=65533:g<65536?S[v++]=g:(g-=65536,S[v++]=55296|g>>10&1023,S[v++]=56320|1023&g)}return u(S,v)},r.utf8border=function(f,h){var d;for((h=h||f.length)>f.length&&(h=f.length),d=h-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?h:d+l[f[d]]>h?d:h}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,u=s>>>16&65535|0,f=0;o!==0;){for(o-=f=2e3<o?2e3:o;u=u+(c=c+a[l++]|0)|0,--f;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();i.exports=function(a,o,l,c){var u=s,f=c+l;a^=-1;for(var h=c;h<f;h++)a=a>>>8^u[255&(a^o[h])];return-1^a}},{}],46:[function(e,i,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),u=e("./messages"),f=0,h=4,d=0,v=-2,g=-1,m=4,p=2,S=8,y=9,E=286,C=30,R=19,L=2*E+1,z=15,A=3,w=258,G=w+A+1,I=42,U=113,M=1,V=2,$=3,X=4;function W(x,F){return x.msg=u[F],F}function Q(x){return(x<<1)-(4<x?9:0)}function lt(x){for(var F=x.length;0<=--F;)x[F]=0}function Y(x){var F=x.state,H=F.pending;H>x.avail_out&&(H=x.avail_out),H!==0&&(a.arraySet(x.output,F.pending_buf,F.pending_out,H,x.next_out),x.next_out+=H,F.pending_out+=H,x.total_out+=H,x.avail_out-=H,F.pending-=H,F.pending===0&&(F.pending_out=0))}function Z(x,F){o._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,F),x.block_start=x.strstart,Y(x.strm)}function gt(x,F){x.pending_buf[x.pending++]=F}function J(x,F){x.pending_buf[x.pending++]=F>>>8&255,x.pending_buf[x.pending++]=255&F}function it(x,F){var H,b,_=x.max_chain_length,P=x.strstart,N=x.prev_length,B=x.nice_match,D=x.strstart>x.w_size-G?x.strstart-(x.w_size-G):0,q=x.window,j=x.w_mask,K=x.prev,rt=x.strstart+w,ot=q[P+N-1],ft=q[P+N];x.prev_length>=x.good_match&&(_>>=2),B>x.lookahead&&(B=x.lookahead);do if(q[(H=F)+N]===ft&&q[H+N-1]===ot&&q[H]===q[P]&&q[++H]===q[P+1]){P+=2,H++;do;while(q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&q[++P]===q[++H]&&P<rt);if(b=w-(rt-P),P=rt-w,N<b){if(x.match_start=F,B<=(N=b))break;ot=q[P+N-1],ft=q[P+N]}}while((F=K[F&j])>D&&--_!=0);return N<=x.lookahead?N:x.lookahead}function dt(x){var F,H,b,_,P,N,B,D,q,j,K=x.w_size;do{if(_=x.window_size-x.lookahead-x.strstart,x.strstart>=K+(K-G)){for(a.arraySet(x.window,x.window,K,K,0),x.match_start-=K,x.strstart-=K,x.block_start-=K,F=H=x.hash_size;b=x.head[--F],x.head[F]=K<=b?b-K:0,--H;);for(F=H=K;b=x.prev[--F],x.prev[F]=K<=b?b-K:0,--H;);_+=K}if(x.strm.avail_in===0)break;if(N=x.strm,B=x.window,D=x.strstart+x.lookahead,q=_,j=void 0,j=N.avail_in,q<j&&(j=q),H=j===0?0:(N.avail_in-=j,a.arraySet(B,N.input,N.next_in,j,D),N.state.wrap===1?N.adler=l(N.adler,B,j,D):N.state.wrap===2&&(N.adler=c(N.adler,B,j,D)),N.next_in+=j,N.total_in+=j,j),x.lookahead+=H,x.lookahead+x.insert>=A)for(P=x.strstart-x.insert,x.ins_h=x.window[P],x.ins_h=(x.ins_h<<x.hash_shift^x.window[P+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[P+A-1])&x.hash_mask,x.prev[P&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=P,P++,x.insert--,!(x.lookahead+x.insert<A)););}while(x.lookahead<G&&x.strm.avail_in!==0)}function pt(x,F){for(var H,b;;){if(x.lookahead<G){if(dt(x),x.lookahead<G&&F===f)return M;if(x.lookahead===0)break}if(H=0,x.lookahead>=A&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+A-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),H!==0&&x.strstart-H<=x.w_size-G&&(x.match_length=it(x,H)),x.match_length>=A)if(b=o._tr_tally(x,x.strstart-x.match_start,x.match_length-A),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=A){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+A-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else b=o._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(b&&(Z(x,!1),x.strm.avail_out===0))return M}return x.insert=x.strstart<A-1?x.strstart:A-1,F===h?(Z(x,!0),x.strm.avail_out===0?$:X):x.last_lit&&(Z(x,!1),x.strm.avail_out===0)?M:V}function yt(x,F){for(var H,b,_;;){if(x.lookahead<G){if(dt(x),x.lookahead<G&&F===f)return M;if(x.lookahead===0)break}if(H=0,x.lookahead>=A&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+A-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=A-1,H!==0&&x.prev_length<x.max_lazy_match&&x.strstart-H<=x.w_size-G&&(x.match_length=it(x,H),x.match_length<=5&&(x.strategy===1||x.match_length===A&&4096<x.strstart-x.match_start)&&(x.match_length=A-1)),x.prev_length>=A&&x.match_length<=x.prev_length){for(_=x.strstart+x.lookahead-A,b=o._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-A),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=_&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+A-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=A-1,x.strstart++,b&&(Z(x,!1),x.strm.avail_out===0))return M}else if(x.match_available){if((b=o._tr_tally(x,0,x.window[x.strstart-1]))&&Z(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return M}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(b=o._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<A-1?x.strstart:A-1,F===h?(Z(x,!0),x.strm.avail_out===0?$:X):x.last_lit&&(Z(x,!1),x.strm.avail_out===0)?M:V}function bt(x,F,H,b,_){this.good_length=x,this.max_lazy=F,this.nice_length=H,this.max_chain=b,this.func=_}function Tt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*R+1)),lt(this.dyn_ltree),lt(this.dyn_dtree),lt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(z+1),this.heap=new a.Buf16(2*E+1),lt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),lt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function tt(x){var F;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=p,(F=x.state).pending=0,F.pending_out=0,F.wrap<0&&(F.wrap=-F.wrap),F.status=F.wrap?I:U,x.adler=F.wrap===2?0:1,F.last_flush=f,o._tr_init(F),d):W(x,v)}function Pt(x){var F=tt(x);return F===d&&function(H){H.window_size=2*H.w_size,lt(H.head),H.max_lazy_match=s[H.level].max_lazy,H.good_match=s[H.level].good_length,H.nice_match=s[H.level].nice_length,H.max_chain_length=s[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=A-1,H.match_available=0,H.ins_h=0}(x.state),F}function k(x,F,H,b,_,P){if(!x)return v;var N=1;if(F===g&&(F=6),b<0?(N=0,b=-b):15<b&&(N=2,b-=16),_<1||y<_||H!==S||b<8||15<b||F<0||9<F||P<0||m<P)return W(x,v);b===8&&(b=9);var B=new Tt;return(x.state=B).strm=x,B.wrap=N,B.gzhead=null,B.w_bits=b,B.w_size=1<<B.w_bits,B.w_mask=B.w_size-1,B.hash_bits=_+7,B.hash_size=1<<B.hash_bits,B.hash_mask=B.hash_size-1,B.hash_shift=~~((B.hash_bits+A-1)/A),B.window=new a.Buf8(2*B.w_size),B.head=new a.Buf16(B.hash_size),B.prev=new a.Buf16(B.w_size),B.lit_bufsize=1<<_+6,B.pending_buf_size=4*B.lit_bufsize,B.pending_buf=new a.Buf8(B.pending_buf_size),B.d_buf=1*B.lit_bufsize,B.l_buf=3*B.lit_bufsize,B.level=F,B.strategy=P,B.method=H,Pt(x)}s=[new bt(0,0,0,0,function(x,F){var H=65535;for(H>x.pending_buf_size-5&&(H=x.pending_buf_size-5);;){if(x.lookahead<=1){if(dt(x),x.lookahead===0&&F===f)return M;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var b=x.block_start+H;if((x.strstart===0||x.strstart>=b)&&(x.lookahead=x.strstart-b,x.strstart=b,Z(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-G&&(Z(x,!1),x.strm.avail_out===0))return M}return x.insert=0,F===h?(Z(x,!0),x.strm.avail_out===0?$:X):(x.strstart>x.block_start&&(Z(x,!1),x.strm.avail_out),M)}),new bt(4,4,8,4,pt),new bt(4,5,16,8,pt),new bt(4,6,32,32,pt),new bt(4,4,16,16,yt),new bt(8,16,32,32,yt),new bt(8,16,128,128,yt),new bt(8,32,128,256,yt),new bt(32,128,258,1024,yt),new bt(32,258,258,4096,yt)],r.deflateInit=function(x,F){return k(x,F,S,15,8,0)},r.deflateInit2=k,r.deflateReset=Pt,r.deflateResetKeep=tt,r.deflateSetHeader=function(x,F){return x&&x.state?x.state.wrap!==2?v:(x.state.gzhead=F,d):v},r.deflate=function(x,F){var H,b,_,P;if(!x||!x.state||5<F||F<0)return x?W(x,v):v;if(b=x.state,!x.output||!x.input&&x.avail_in!==0||b.status===666&&F!==h)return W(x,x.avail_out===0?-5:v);if(b.strm=x,H=b.last_flush,b.last_flush=F,b.status===I)if(b.wrap===2)x.adler=0,gt(b,31),gt(b,139),gt(b,8),b.gzhead?(gt(b,(b.gzhead.text?1:0)+(b.gzhead.hcrc?2:0)+(b.gzhead.extra?4:0)+(b.gzhead.name?8:0)+(b.gzhead.comment?16:0)),gt(b,255&b.gzhead.time),gt(b,b.gzhead.time>>8&255),gt(b,b.gzhead.time>>16&255),gt(b,b.gzhead.time>>24&255),gt(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),gt(b,255&b.gzhead.os),b.gzhead.extra&&b.gzhead.extra.length&&(gt(b,255&b.gzhead.extra.length),gt(b,b.gzhead.extra.length>>8&255)),b.gzhead.hcrc&&(x.adler=c(x.adler,b.pending_buf,b.pending,0)),b.gzindex=0,b.status=69):(gt(b,0),gt(b,0),gt(b,0),gt(b,0),gt(b,0),gt(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),gt(b,3),b.status=U);else{var N=S+(b.w_bits-8<<4)<<8;N|=(2<=b.strategy||b.level<2?0:b.level<6?1:b.level===6?2:3)<<6,b.strstart!==0&&(N|=32),N+=31-N%31,b.status=U,J(b,N),b.strstart!==0&&(J(b,x.adler>>>16),J(b,65535&x.adler)),x.adler=1}if(b.status===69)if(b.gzhead.extra){for(_=b.pending;b.gzindex<(65535&b.gzhead.extra.length)&&(b.pending!==b.pending_buf_size||(b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),Y(x),_=b.pending,b.pending!==b.pending_buf_size));)gt(b,255&b.gzhead.extra[b.gzindex]),b.gzindex++;b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),b.gzindex===b.gzhead.extra.length&&(b.gzindex=0,b.status=73)}else b.status=73;if(b.status===73)if(b.gzhead.name){_=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),Y(x),_=b.pending,b.pending===b.pending_buf_size)){P=1;break}P=b.gzindex<b.gzhead.name.length?255&b.gzhead.name.charCodeAt(b.gzindex++):0,gt(b,P)}while(P!==0);b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),P===0&&(b.gzindex=0,b.status=91)}else b.status=91;if(b.status===91)if(b.gzhead.comment){_=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),Y(x),_=b.pending,b.pending===b.pending_buf_size)){P=1;break}P=b.gzindex<b.gzhead.comment.length?255&b.gzhead.comment.charCodeAt(b.gzindex++):0,gt(b,P)}while(P!==0);b.gzhead.hcrc&&b.pending>_&&(x.adler=c(x.adler,b.pending_buf,b.pending-_,_)),P===0&&(b.status=103)}else b.status=103;if(b.status===103&&(b.gzhead.hcrc?(b.pending+2>b.pending_buf_size&&Y(x),b.pending+2<=b.pending_buf_size&&(gt(b,255&x.adler),gt(b,x.adler>>8&255),x.adler=0,b.status=U)):b.status=U),b.pending!==0){if(Y(x),x.avail_out===0)return b.last_flush=-1,d}else if(x.avail_in===0&&Q(F)<=Q(H)&&F!==h)return W(x,-5);if(b.status===666&&x.avail_in!==0)return W(x,-5);if(x.avail_in!==0||b.lookahead!==0||F!==f&&b.status!==666){var B=b.strategy===2?function(D,q){for(var j;;){if(D.lookahead===0&&(dt(D),D.lookahead===0)){if(q===f)return M;break}if(D.match_length=0,j=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++,j&&(Z(D,!1),D.strm.avail_out===0))return M}return D.insert=0,q===h?(Z(D,!0),D.strm.avail_out===0?$:X):D.last_lit&&(Z(D,!1),D.strm.avail_out===0)?M:V}(b,F):b.strategy===3?function(D,q){for(var j,K,rt,ot,ft=D.window;;){if(D.lookahead<=w){if(dt(D),D.lookahead<=w&&q===f)return M;if(D.lookahead===0)break}if(D.match_length=0,D.lookahead>=A&&0<D.strstart&&(K=ft[rt=D.strstart-1])===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]){ot=D.strstart+w;do;while(K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&rt<ot);D.match_length=w-(ot-rt),D.match_length>D.lookahead&&(D.match_length=D.lookahead)}if(D.match_length>=A?(j=o._tr_tally(D,1,D.match_length-A),D.lookahead-=D.match_length,D.strstart+=D.match_length,D.match_length=0):(j=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++),j&&(Z(D,!1),D.strm.avail_out===0))return M}return D.insert=0,q===h?(Z(D,!0),D.strm.avail_out===0?$:X):D.last_lit&&(Z(D,!1),D.strm.avail_out===0)?M:V}(b,F):s[b.level].func(b,F);if(B!==$&&B!==X||(b.status=666),B===M||B===$)return x.avail_out===0&&(b.last_flush=-1),d;if(B===V&&(F===1?o._tr_align(b):F!==5&&(o._tr_stored_block(b,0,0,!1),F===3&&(lt(b.head),b.lookahead===0&&(b.strstart=0,b.block_start=0,b.insert=0))),Y(x),x.avail_out===0))return b.last_flush=-1,d}return F!==h?d:b.wrap<=0?1:(b.wrap===2?(gt(b,255&x.adler),gt(b,x.adler>>8&255),gt(b,x.adler>>16&255),gt(b,x.adler>>24&255),gt(b,255&x.total_in),gt(b,x.total_in>>8&255),gt(b,x.total_in>>16&255),gt(b,x.total_in>>24&255)):(J(b,x.adler>>>16),J(b,65535&x.adler)),Y(x),0<b.wrap&&(b.wrap=-b.wrap),b.pending!==0?d:1)},r.deflateEnd=function(x){var F;return x&&x.state?(F=x.state.status)!==I&&F!==69&&F!==73&&F!==91&&F!==103&&F!==U&&F!==666?W(x,v):(x.state=null,F===U?W(x,-3):d):v},r.deflateSetDictionary=function(x,F){var H,b,_,P,N,B,D,q,j=F.length;if(!x||!x.state||(P=(H=x.state).wrap)===2||P===1&&H.status!==I||H.lookahead)return v;for(P===1&&(x.adler=l(x.adler,F,j,0)),H.wrap=0,j>=H.w_size&&(P===0&&(lt(H.head),H.strstart=0,H.block_start=0,H.insert=0),q=new a.Buf8(H.w_size),a.arraySet(q,F,j-H.w_size,H.w_size,0),F=q,j=H.w_size),N=x.avail_in,B=x.next_in,D=x.input,x.avail_in=j,x.next_in=0,x.input=F,dt(H);H.lookahead>=A;){for(b=H.strstart,_=H.lookahead-(A-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[b+A-1])&H.hash_mask,H.prev[b&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=b,b++,--_;);H.strstart=b,H.lookahead=A-1,dt(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=A-1,H.match_available=0,x.next_in=B,x.input=D,x.avail_in=N,H.wrap=P,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,a){var o,l,c,u,f,h,d,v,g,m,p,S,y,E,C,R,L,z,A,w,G,I,U,M,V;o=s.state,l=s.next_in,M=s.input,c=l+(s.avail_in-5),u=s.next_out,V=s.output,f=u-(a-s.avail_out),h=u+(s.avail_out-257),d=o.dmax,v=o.wsize,g=o.whave,m=o.wnext,p=o.window,S=o.hold,y=o.bits,E=o.lencode,C=o.distcode,R=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;t:do{y<15&&(S+=M[l++]<<y,y+=8,S+=M[l++]<<y,y+=8),z=E[S&R];e:for(;;){if(S>>>=A=z>>>24,y-=A,(A=z>>>16&255)===0)V[u++]=65535&z;else{if(!(16&A)){if(!(64&A)){z=E[(65535&z)+(S&(1<<A)-1)];continue e}if(32&A){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}w=65535&z,(A&=15)&&(y<A&&(S+=M[l++]<<y,y+=8),w+=S&(1<<A)-1,S>>>=A,y-=A),y<15&&(S+=M[l++]<<y,y+=8,S+=M[l++]<<y,y+=8),z=C[S&L];n:for(;;){if(S>>>=A=z>>>24,y-=A,!(16&(A=z>>>16&255))){if(!(64&A)){z=C[(65535&z)+(S&(1<<A)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(G=65535&z,y<(A&=15)&&(S+=M[l++]<<y,(y+=8)<A&&(S+=M[l++]<<y,y+=8)),d<(G+=S&(1<<A)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(S>>>=A,y-=A,(A=u-f)<G){if(g<(A=G-A)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(U=p,(I=0)===m){if(I+=v-A,A<w){for(w-=A;V[u++]=p[I++],--A;);I=u-G,U=V}}else if(m<A){if(I+=v+m-A,(A-=m)<w){for(w-=A;V[u++]=p[I++],--A;);if(I=0,m<w){for(w-=A=m;V[u++]=p[I++],--A;);I=u-G,U=V}}}else if(I+=m-A,A<w){for(w-=A;V[u++]=p[I++],--A;);I=u-G,U=V}for(;2<w;)V[u++]=U[I++],V[u++]=U[I++],V[u++]=U[I++],w-=3;w&&(V[u++]=U[I++],1<w&&(V[u++]=U[I++]))}else{for(I=u-G;V[u++]=V[I++],V[u++]=V[I++],V[u++]=V[I++],2<(w-=3););w&&(V[u++]=V[I++],1<w&&(V[u++]=V[I++]))}break}}break}}while(l<c&&u<h);l-=w=y>>3,S&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<h?h-u+257:257-(u-h),o.hold=S,o.bits=y}},{}],49:[function(e,i,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),u=1,f=2,h=0,d=-2,v=1,g=852,m=592;function p(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(I){var U;return I&&I.state?(U=I.state,I.total_in=I.total_out=U.total=0,I.msg="",U.wrap&&(I.adler=1&U.wrap),U.mode=v,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(g),U.distcode=U.distdyn=new s.Buf32(m),U.sane=1,U.back=-1,h):d}function E(I){var U;return I&&I.state?((U=I.state).wsize=0,U.whave=0,U.wnext=0,y(I)):d}function C(I,U){var M,V;return I&&I.state?(V=I.state,U<0?(M=0,U=-U):(M=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?d:(V.window!==null&&V.wbits!==U&&(V.window=null),V.wrap=M,V.wbits=U,E(I))):d}function R(I,U){var M,V;return I?(V=new S,(I.state=V).window=null,(M=C(I,U))!==h&&(I.state=null),M):d}var L,z,A=!0;function w(I){if(A){var U;for(L=new s.Buf32(512),z=new s.Buf32(32),U=0;U<144;)I.lens[U++]=8;for(;U<256;)I.lens[U++]=9;for(;U<280;)I.lens[U++]=7;for(;U<288;)I.lens[U++]=8;for(c(u,I.lens,0,288,L,0,I.work,{bits:9}),U=0;U<32;)I.lens[U++]=5;c(f,I.lens,0,32,z,0,I.work,{bits:5}),A=!1}I.lencode=L,I.lenbits=9,I.distcode=z,I.distbits=5}function G(I,U,M,V){var $,X=I.state;return X.window===null&&(X.wsize=1<<X.wbits,X.wnext=0,X.whave=0,X.window=new s.Buf8(X.wsize)),V>=X.wsize?(s.arraySet(X.window,U,M-X.wsize,X.wsize,0),X.wnext=0,X.whave=X.wsize):(V<($=X.wsize-X.wnext)&&($=V),s.arraySet(X.window,U,M-V,$,X.wnext),(V-=$)?(s.arraySet(X.window,U,M-V,V,0),X.wnext=V,X.whave=X.wsize):(X.wnext+=$,X.wnext===X.wsize&&(X.wnext=0),X.whave<X.wsize&&(X.whave+=$))),0}r.inflateReset=E,r.inflateReset2=C,r.inflateResetKeep=y,r.inflateInit=function(I){return R(I,15)},r.inflateInit2=R,r.inflate=function(I,U){var M,V,$,X,W,Q,lt,Y,Z,gt,J,it,dt,pt,yt,bt,Tt,tt,Pt,k,x,F,H,b,_=0,P=new s.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return d;(M=I.state).mode===12&&(M.mode=13),W=I.next_out,$=I.output,lt=I.avail_out,X=I.next_in,V=I.input,Q=I.avail_in,Y=M.hold,Z=M.bits,gt=Q,J=lt,F=h;t:for(;;)switch(M.mode){case v:if(M.wrap===0){M.mode=13;break}for(;Z<16;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(2&M.wrap&&Y===35615){P[M.check=0]=255&Y,P[1]=Y>>>8&255,M.check=o(M.check,P,2,0),Z=Y=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&Y)<<8)+(Y>>8))%31){I.msg="incorrect header check",M.mode=30;break}if((15&Y)!=8){I.msg="unknown compression method",M.mode=30;break}if(Z-=4,x=8+(15&(Y>>>=4)),M.wbits===0)M.wbits=x;else if(x>M.wbits){I.msg="invalid window size",M.mode=30;break}M.dmax=1<<x,I.adler=M.check=1,M.mode=512&Y?10:12,Z=Y=0;break;case 2:for(;Z<16;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(M.flags=Y,(255&M.flags)!=8){I.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){I.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=Y>>8&1),512&M.flags&&(P[0]=255&Y,P[1]=Y>>>8&255,M.check=o(M.check,P,2,0)),Z=Y=0,M.mode=3;case 3:for(;Z<32;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.head&&(M.head.time=Y),512&M.flags&&(P[0]=255&Y,P[1]=Y>>>8&255,P[2]=Y>>>16&255,P[3]=Y>>>24&255,M.check=o(M.check,P,4,0)),Z=Y=0,M.mode=4;case 4:for(;Z<16;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.head&&(M.head.xflags=255&Y,M.head.os=Y>>8),512&M.flags&&(P[0]=255&Y,P[1]=Y>>>8&255,M.check=o(M.check,P,2,0)),Z=Y=0,M.mode=5;case 5:if(1024&M.flags){for(;Z<16;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.length=Y,M.head&&(M.head.extra_len=Y),512&M.flags&&(P[0]=255&Y,P[1]=Y>>>8&255,M.check=o(M.check,P,2,0)),Z=Y=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(Q<(it=M.length)&&(it=Q),it&&(M.head&&(x=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,V,X,it,x)),512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,M.length-=it),M.length))break t;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(Q===0)break t;for(it=0;x=V[X+it++],M.head&&x&&M.length<65536&&(M.head.name+=String.fromCharCode(x)),x&&it<Q;);if(512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,x)break t}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(Q===0)break t;for(it=0;x=V[X+it++],M.head&&x&&M.length<65536&&(M.head.comment+=String.fromCharCode(x)),x&&it<Q;);if(512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,x)break t}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;Z<16;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(Y!==(65535&M.check)){I.msg="header crc mismatch",M.mode=30;break}Z=Y=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),I.adler=M.check=0,M.mode=12;break;case 10:for(;Z<32;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}I.adler=M.check=p(Y),Z=Y=0,M.mode=11;case 11:if(M.havedict===0)return I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=Y,M.bits=Z,2;I.adler=M.check=1,M.mode=12;case 12:if(U===5||U===6)break t;case 13:if(M.last){Y>>>=7&Z,Z-=7&Z,M.mode=27;break}for(;Z<3;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}switch(M.last=1&Y,Z-=1,3&(Y>>>=1)){case 0:M.mode=14;break;case 1:if(w(M),M.mode=20,U!==6)break;Y>>>=2,Z-=2;break t;case 2:M.mode=17;break;case 3:I.msg="invalid block type",M.mode=30}Y>>>=2,Z-=2;break;case 14:for(Y>>>=7&Z,Z-=7&Z;Z<32;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if((65535&Y)!=(Y>>>16^65535)){I.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&Y,Z=Y=0,M.mode=15,U===6)break t;case 15:M.mode=16;case 16:if(it=M.length){if(Q<it&&(it=Q),lt<it&&(it=lt),it===0)break t;s.arraySet($,V,X,it,W),Q-=it,X+=it,lt-=it,W+=it,M.length-=it;break}M.mode=12;break;case 17:for(;Z<14;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(M.nlen=257+(31&Y),Y>>>=5,Z-=5,M.ndist=1+(31&Y),Y>>>=5,Z-=5,M.ncode=4+(15&Y),Y>>>=4,Z-=4,286<M.nlen||30<M.ndist){I.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;Z<3;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.lens[N[M.have++]]=7&Y,Y>>>=3,Z-=3}for(;M.have<19;)M.lens[N[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,H={bits:M.lenbits},F=c(0,M.lens,0,19,M.lencode,0,M.work,H),M.lenbits=H.bits,F){I.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;bt=(_=M.lencode[Y&(1<<M.lenbits)-1])>>>16&255,Tt=65535&_,!((yt=_>>>24)<=Z);){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(Tt<16)Y>>>=yt,Z-=yt,M.lens[M.have++]=Tt;else{if(Tt===16){for(b=yt+2;Z<b;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(Y>>>=yt,Z-=yt,M.have===0){I.msg="invalid bit length repeat",M.mode=30;break}x=M.lens[M.have-1],it=3+(3&Y),Y>>>=2,Z-=2}else if(Tt===17){for(b=yt+3;Z<b;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}Z-=yt,x=0,it=3+(7&(Y>>>=yt)),Y>>>=3,Z-=3}else{for(b=yt+7;Z<b;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}Z-=yt,x=0,it=11+(127&(Y>>>=yt)),Y>>>=7,Z-=7}if(M.have+it>M.nlen+M.ndist){I.msg="invalid bit length repeat",M.mode=30;break}for(;it--;)M.lens[M.have++]=x}}if(M.mode===30)break;if(M.lens[256]===0){I.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,H={bits:M.lenbits},F=c(u,M.lens,0,M.nlen,M.lencode,0,M.work,H),M.lenbits=H.bits,F){I.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,H={bits:M.distbits},F=c(f,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,H),M.distbits=H.bits,F){I.msg="invalid distances set",M.mode=30;break}if(M.mode=20,U===6)break t;case 20:M.mode=21;case 21:if(6<=Q&&258<=lt){I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=Y,M.bits=Z,l(I,J),W=I.next_out,$=I.output,lt=I.avail_out,X=I.next_in,V=I.input,Q=I.avail_in,Y=M.hold,Z=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;bt=(_=M.lencode[Y&(1<<M.lenbits)-1])>>>16&255,Tt=65535&_,!((yt=_>>>24)<=Z);){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(bt&&!(240&bt)){for(tt=yt,Pt=bt,k=Tt;bt=(_=M.lencode[k+((Y&(1<<tt+Pt)-1)>>tt)])>>>16&255,Tt=65535&_,!(tt+(yt=_>>>24)<=Z);){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}Y>>>=tt,Z-=tt,M.back+=tt}if(Y>>>=yt,Z-=yt,M.back+=yt,M.length=Tt,bt===0){M.mode=26;break}if(32&bt){M.back=-1,M.mode=12;break}if(64&bt){I.msg="invalid literal/length code",M.mode=30;break}M.extra=15&bt,M.mode=22;case 22:if(M.extra){for(b=M.extra;Z<b;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.length+=Y&(1<<M.extra)-1,Y>>>=M.extra,Z-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;bt=(_=M.distcode[Y&(1<<M.distbits)-1])>>>16&255,Tt=65535&_,!((yt=_>>>24)<=Z);){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(!(240&bt)){for(tt=yt,Pt=bt,k=Tt;bt=(_=M.distcode[k+((Y&(1<<tt+Pt)-1)>>tt)])>>>16&255,Tt=65535&_,!(tt+(yt=_>>>24)<=Z);){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}Y>>>=tt,Z-=tt,M.back+=tt}if(Y>>>=yt,Z-=yt,M.back+=yt,64&bt){I.msg="invalid distance code",M.mode=30;break}M.offset=Tt,M.extra=15&bt,M.mode=24;case 24:if(M.extra){for(b=M.extra;Z<b;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}M.offset+=Y&(1<<M.extra)-1,Y>>>=M.extra,Z-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){I.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(lt===0)break t;if(it=J-lt,M.offset>it){if((it=M.offset-it)>M.whave&&M.sane){I.msg="invalid distance too far back",M.mode=30;break}dt=it>M.wnext?(it-=M.wnext,M.wsize-it):M.wnext-it,it>M.length&&(it=M.length),pt=M.window}else pt=$,dt=W-M.offset,it=M.length;for(lt<it&&(it=lt),lt-=it,M.length-=it;$[W++]=pt[dt++],--it;);M.length===0&&(M.mode=21);break;case 26:if(lt===0)break t;$[W++]=M.length,lt--,M.mode=21;break;case 27:if(M.wrap){for(;Z<32;){if(Q===0)break t;Q--,Y|=V[X++]<<Z,Z+=8}if(J-=lt,I.total_out+=J,M.total+=J,J&&(I.adler=M.check=M.flags?o(M.check,$,J,W-J):a(M.check,$,J,W-J)),J=lt,(M.flags?Y:p(Y))!==M.check){I.msg="incorrect data check",M.mode=30;break}Z=Y=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;Z<32;){if(Q===0)break t;Q--,Y+=V[X++]<<Z,Z+=8}if(Y!==(4294967295&M.total)){I.msg="incorrect length check",M.mode=30;break}Z=Y=0}M.mode=29;case 29:F=1;break t;case 30:F=-3;break t;case 31:return-4;case 32:default:return d}return I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=Y,M.bits=Z,(M.wsize||J!==I.avail_out&&M.mode<30&&(M.mode<27||U!==4))&&G(I,I.output,I.next_out,J-I.avail_out)?(M.mode=31,-4):(gt-=I.avail_in,J-=I.avail_out,I.total_in+=gt,I.total_out+=J,M.total+=J,M.wrap&&J&&(I.adler=M.check=M.flags?o(M.check,$,J,I.next_out-J):a(M.check,$,J,I.next_out-J)),I.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(gt==0&&J===0||U===4)&&F===h&&(F=-5),F)},r.inflateEnd=function(I){if(!I||!I.state)return d;var U=I.state;return U.window&&(U.window=null),I.state=null,h},r.inflateGetHeader=function(I,U){var M;return I&&I.state&&2&(M=I.state).wrap?((M.head=U).done=!1,h):d},r.inflateSetDictionary=function(I,U){var M,V=U.length;return I&&I.state?(M=I.state).wrap!==0&&M.mode!==11?d:M.mode===11&&a(1,U,V,0)!==M.check?-3:G(I,U,V,V)?(M.mode=31,-4):(M.havedict=1,h):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(u,f,h,d,v,g,m,p){var S,y,E,C,R,L,z,A,w,G=p.bits,I=0,U=0,M=0,V=0,$=0,X=0,W=0,Q=0,lt=0,Y=0,Z=null,gt=0,J=new s.Buf16(16),it=new s.Buf16(16),dt=null,pt=0;for(I=0;I<=15;I++)J[I]=0;for(U=0;U<d;U++)J[f[h+U]]++;for($=G,V=15;1<=V&&J[V]===0;V--);if(V<$&&($=V),V===0)return v[g++]=20971520,v[g++]=20971520,p.bits=1,0;for(M=1;M<V&&J[M]===0;M++);for($<M&&($=M),I=Q=1;I<=15;I++)if(Q<<=1,(Q-=J[I])<0)return-1;if(0<Q&&(u===0||V!==1))return-1;for(it[1]=0,I=1;I<15;I++)it[I+1]=it[I]+J[I];for(U=0;U<d;U++)f[h+U]!==0&&(m[it[f[h+U]]++]=U);if(L=u===0?(Z=dt=m,19):u===1?(Z=a,gt-=257,dt=o,pt-=257,256):(Z=l,dt=c,-1),I=M,R=g,W=U=Y=0,E=-1,C=(lt=1<<(X=$))-1,u===1&&852<lt||u===2&&592<lt)return 1;for(;;){for(z=I-W,w=m[U]<L?(A=0,m[U]):m[U]>L?(A=dt[pt+m[U]],Z[gt+m[U]]):(A=96,0),S=1<<I-W,M=y=1<<X;v[R+(Y>>W)+(y-=S)]=z<<24|A<<16|w|0,y!==0;);for(S=1<<I-1;Y&S;)S>>=1;if(S!==0?(Y&=S-1,Y+=S):Y=0,U++,--J[I]==0){if(I===V)break;I=f[h+m[U]]}if($<I&&(Y&C)!==E){for(W===0&&(W=$),R+=M,Q=1<<(X=I-W);X+W<V&&!((Q-=J[X+W])<=0);)X++,Q<<=1;if(lt+=1<<X,u===1&&852<lt||u===2&&592<lt)return 1;v[E=Y&C]=$<<24|X<<16|R-g|0}}return Y!==0&&(v[R+Y]=I-W<<24|64<<16|0),p.bits=$,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),a=0,o=1;function l(_){for(var P=_.length;0<=--P;)_[P]=0}var c=0,u=29,f=256,h=f+1+u,d=30,v=19,g=2*h+1,m=15,p=16,S=7,y=256,E=16,C=17,R=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(h+2));l(G);var I=new Array(2*d);l(I);var U=new Array(512);l(U);var M=new Array(256);l(M);var V=new Array(u);l(V);var $,X,W,Q=new Array(d);function lt(_,P,N,B,D){this.static_tree=_,this.extra_bits=P,this.extra_base=N,this.elems=B,this.max_length=D,this.has_stree=_&&_.length}function Y(_,P){this.dyn_tree=_,this.max_code=0,this.stat_desc=P}function Z(_){return _<256?U[_]:U[256+(_>>>7)]}function gt(_,P){_.pending_buf[_.pending++]=255&P,_.pending_buf[_.pending++]=P>>>8&255}function J(_,P,N){_.bi_valid>p-N?(_.bi_buf|=P<<_.bi_valid&65535,gt(_,_.bi_buf),_.bi_buf=P>>p-_.bi_valid,_.bi_valid+=N-p):(_.bi_buf|=P<<_.bi_valid&65535,_.bi_valid+=N)}function it(_,P,N){J(_,N[2*P],N[2*P+1])}function dt(_,P){for(var N=0;N|=1&_,_>>>=1,N<<=1,0<--P;);return N>>>1}function pt(_,P,N){var B,D,q=new Array(m+1),j=0;for(B=1;B<=m;B++)q[B]=j=j+N[B-1]<<1;for(D=0;D<=P;D++){var K=_[2*D+1];K!==0&&(_[2*D]=dt(q[K]++,K))}}function yt(_){var P;for(P=0;P<h;P++)_.dyn_ltree[2*P]=0;for(P=0;P<d;P++)_.dyn_dtree[2*P]=0;for(P=0;P<v;P++)_.bl_tree[2*P]=0;_.dyn_ltree[2*y]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function bt(_){8<_.bi_valid?gt(_,_.bi_buf):0<_.bi_valid&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Tt(_,P,N,B){var D=2*P,q=2*N;return _[D]<_[q]||_[D]===_[q]&&B[P]<=B[N]}function tt(_,P,N){for(var B=_.heap[N],D=N<<1;D<=_.heap_len&&(D<_.heap_len&&Tt(P,_.heap[D+1],_.heap[D],_.depth)&&D++,!Tt(P,B,_.heap[D],_.depth));)_.heap[N]=_.heap[D],N=D,D<<=1;_.heap[N]=B}function Pt(_,P,N){var B,D,q,j,K=0;if(_.last_lit!==0)for(;B=_.pending_buf[_.d_buf+2*K]<<8|_.pending_buf[_.d_buf+2*K+1],D=_.pending_buf[_.l_buf+K],K++,B===0?it(_,D,P):(it(_,(q=M[D])+f+1,P),(j=L[q])!==0&&J(_,D-=V[q],j),it(_,q=Z(--B),N),(j=z[q])!==0&&J(_,B-=Q[q],j)),K<_.last_lit;);it(_,y,P)}function k(_,P){var N,B,D,q=P.dyn_tree,j=P.stat_desc.static_tree,K=P.stat_desc.has_stree,rt=P.stat_desc.elems,ot=-1;for(_.heap_len=0,_.heap_max=g,N=0;N<rt;N++)q[2*N]!==0?(_.heap[++_.heap_len]=ot=N,_.depth[N]=0):q[2*N+1]=0;for(;_.heap_len<2;)q[2*(D=_.heap[++_.heap_len]=ot<2?++ot:0)]=1,_.depth[D]=0,_.opt_len--,K&&(_.static_len-=j[2*D+1]);for(P.max_code=ot,N=_.heap_len>>1;1<=N;N--)tt(_,q,N);for(D=rt;N=_.heap[1],_.heap[1]=_.heap[_.heap_len--],tt(_,q,1),B=_.heap[1],_.heap[--_.heap_max]=N,_.heap[--_.heap_max]=B,q[2*D]=q[2*N]+q[2*B],_.depth[D]=(_.depth[N]>=_.depth[B]?_.depth[N]:_.depth[B])+1,q[2*N+1]=q[2*B+1]=D,_.heap[1]=D++,tt(_,q,1),2<=_.heap_len;);_.heap[--_.heap_max]=_.heap[1],function(ft,_t){var mt,xt,It,At,Ft,Ht,Rt=_t.dyn_tree,wt=_t.max_code,T=_t.stat_desc.static_tree,st=_t.stat_desc.has_stree,ht=_t.stat_desc.extra_bits,vt=_t.stat_desc.extra_base,Mt=_t.stat_desc.max_length,Vt=0;for(At=0;At<=m;At++)ft.bl_count[At]=0;for(Rt[2*ft.heap[ft.heap_max]+1]=0,mt=ft.heap_max+1;mt<g;mt++)Mt<(At=Rt[2*Rt[2*(xt=ft.heap[mt])+1]+1]+1)&&(At=Mt,Vt++),Rt[2*xt+1]=At,wt<xt||(ft.bl_count[At]++,Ft=0,vt<=xt&&(Ft=ht[xt-vt]),Ht=Rt[2*xt],ft.opt_len+=Ht*(At+Ft),st&&(ft.static_len+=Ht*(T[2*xt+1]+Ft)));if(Vt!==0){do{for(At=Mt-1;ft.bl_count[At]===0;)At--;ft.bl_count[At]--,ft.bl_count[At+1]+=2,ft.bl_count[Mt]--,Vt-=2}while(0<Vt);for(At=Mt;At!==0;At--)for(xt=ft.bl_count[At];xt!==0;)wt<(It=ft.heap[--mt])||(Rt[2*It+1]!==At&&(ft.opt_len+=(At-Rt[2*It+1])*Rt[2*It],Rt[2*It+1]=At),xt--)}}(_,P),pt(q,ot,_.bl_count)}function x(_,P,N){var B,D,q=-1,j=P[1],K=0,rt=7,ot=4;for(j===0&&(rt=138,ot=3),P[2*(N+1)+1]=65535,B=0;B<=N;B++)D=j,j=P[2*(B+1)+1],++K<rt&&D===j||(K<ot?_.bl_tree[2*D]+=K:D!==0?(D!==q&&_.bl_tree[2*D]++,_.bl_tree[2*E]++):K<=10?_.bl_tree[2*C]++:_.bl_tree[2*R]++,q=D,ot=(K=0)===j?(rt=138,3):D===j?(rt=6,3):(rt=7,4))}function F(_,P,N){var B,D,q=-1,j=P[1],K=0,rt=7,ot=4;for(j===0&&(rt=138,ot=3),B=0;B<=N;B++)if(D=j,j=P[2*(B+1)+1],!(++K<rt&&D===j)){if(K<ot)for(;it(_,D,_.bl_tree),--K!=0;);else D!==0?(D!==q&&(it(_,D,_.bl_tree),K--),it(_,E,_.bl_tree),J(_,K-3,2)):K<=10?(it(_,C,_.bl_tree),J(_,K-3,3)):(it(_,R,_.bl_tree),J(_,K-11,7));q=D,ot=(K=0)===j?(rt=138,3):D===j?(rt=6,3):(rt=7,4)}}l(Q);var H=!1;function b(_,P,N,B){J(_,(c<<1)+(B?1:0),3),function(D,q,j,K){bt(D),gt(D,j),gt(D,~j),s.arraySet(D.pending_buf,D.window,q,j,D.pending),D.pending+=j}(_,P,N)}r._tr_init=function(_){H||(function(){var P,N,B,D,q,j=new Array(m+1);for(D=B=0;D<u-1;D++)for(V[D]=B,P=0;P<1<<L[D];P++)M[B++]=D;for(M[B-1]=D,D=q=0;D<16;D++)for(Q[D]=q,P=0;P<1<<z[D];P++)U[q++]=D;for(q>>=7;D<d;D++)for(Q[D]=q<<7,P=0;P<1<<z[D]-7;P++)U[256+q++]=D;for(N=0;N<=m;N++)j[N]=0;for(P=0;P<=143;)G[2*P+1]=8,P++,j[8]++;for(;P<=255;)G[2*P+1]=9,P++,j[9]++;for(;P<=279;)G[2*P+1]=7,P++,j[7]++;for(;P<=287;)G[2*P+1]=8,P++,j[8]++;for(pt(G,h+1,j),P=0;P<d;P++)I[2*P+1]=5,I[2*P]=dt(P,5);$=new lt(G,L,f+1,h,m),X=new lt(I,z,0,d,m),W=new lt(new Array(0),A,0,v,S)}(),H=!0),_.l_desc=new Y(_.dyn_ltree,$),_.d_desc=new Y(_.dyn_dtree,X),_.bl_desc=new Y(_.bl_tree,W),_.bi_buf=0,_.bi_valid=0,yt(_)},r._tr_stored_block=b,r._tr_flush_block=function(_,P,N,B){var D,q,j=0;0<_.level?(_.strm.data_type===2&&(_.strm.data_type=function(K){var rt,ot=4093624447;for(rt=0;rt<=31;rt++,ot>>>=1)if(1&ot&&K.dyn_ltree[2*rt]!==0)return a;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return o;for(rt=32;rt<f;rt++)if(K.dyn_ltree[2*rt]!==0)return o;return a}(_)),k(_,_.l_desc),k(_,_.d_desc),j=function(K){var rt;for(x(K,K.dyn_ltree,K.l_desc.max_code),x(K,K.dyn_dtree,K.d_desc.max_code),k(K,K.bl_desc),rt=v-1;3<=rt&&K.bl_tree[2*w[rt]+1]===0;rt--);return K.opt_len+=3*(rt+1)+5+5+4,rt}(_),D=_.opt_len+3+7>>>3,(q=_.static_len+3+7>>>3)<=D&&(D=q)):D=q=N+5,N+4<=D&&P!==-1?b(_,P,N,B):_.strategy===4||q===D?(J(_,2+(B?1:0),3),Pt(_,G,I)):(J(_,4+(B?1:0),3),function(K,rt,ot,ft){var _t;for(J(K,rt-257,5),J(K,ot-1,5),J(K,ft-4,4),_t=0;_t<ft;_t++)J(K,K.bl_tree[2*w[_t]+1],3);F(K,K.dyn_ltree,rt-1),F(K,K.dyn_dtree,ot-1)}(_,_.l_desc.max_code+1,_.d_desc.max_code+1,j+1),Pt(_,_.dyn_ltree,_.dyn_dtree)),yt(_),B&&bt(_)},r._tr_tally=function(_,P,N){return _.pending_buf[_.d_buf+2*_.last_lit]=P>>>8&255,_.pending_buf[_.d_buf+2*_.last_lit+1]=255&P,_.pending_buf[_.l_buf+_.last_lit]=255&N,_.last_lit++,P===0?_.dyn_ltree[2*N]++:(_.matches++,P--,_.dyn_ltree[2*(M[N]+f+1)]++,_.dyn_dtree[2*Z(P)]++),_.last_lit===_.lit_bufsize-1},r._tr_align=function(_){J(_,2,3),it(_,y,G),function(P){P.bi_valid===16?(gt(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)}(_)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,u,f,h=1,d={},v=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){S(E)})}:function(){if(a.postMessage&&!a.importScripts){var E=!0,C=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=C,E}}()?(f="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",y,!1):a.attachEvent("onmessage",y),function(E){a.postMessage(f+E,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(E){S(E.data)},function(E){u.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var C=g.createElement("script");C.onreadystatechange=function(){S(E),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(E){setTimeout(S,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),R=0;R<C.length;R++)C[R]=arguments[R+1];var L={callback:E,args:C};return d[h]=L,l(h),h++},m.clearImmediate=p}function p(E){delete d[E]}function S(E){if(v)setTimeout(S,0,E);else{var C=d[E];if(C){v=!0;try{(function(R){var L=R.callback,z=R.args;switch(z.length){case 0:L();break;case 1:L(z[0]);break;case 2:L(z[0],z[1]);break;case 3:L(z[0],z[1],z[2]);break;default:L.apply(o,z)}})(C)}finally{p(E),v=!1}}}}function y(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(f)===0&&S(+E.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ep);var rT=Ep.exports;const sT=iT(rT);function Zs(n){const t=n.split(`
`);let e=[],i=[];if(t.forEach((m,p)=>{if(m.startsWith("v ")){const S=m.split(/\s+/).map((y,E)=>E===0?y:parseFloat(y));e.push({x:S[1],y:S[2],z:S[3],index:p})}i.push(m)}),e.length===0)return n;const r=Math.min(...e.map(m=>m.x)),s=Math.max(...e.map(m=>m.x)),a=Math.min(...e.map(m=>m.y)),o=Math.max(...e.map(m=>m.y)),l=Math.min(...e.map(m=>m.z)),c=Math.max(...e.map(m=>m.z)),u=(r+s)/2,f=(a+o)/2,h=(l+c)/2,d=-u,v=-f,g=-h;return e.forEach(m=>{const p=i[m.index].split(/\s+/);p[1]=(m.x+d).toFixed(6),p[2]=(m.y+v).toFixed(6),p[3]=(m.z+g).toFixed(6),i[m.index]=p.join(" ")}),i.join(`
`)}function Js(n,t,e,i){const r=t*Math.PI/180,s=e*Math.PI/180,a=i*Math.PI/180,o=n.split(`
`);let l=[];return o.forEach(c=>{if(c.startsWith("v ")){const u=c.split(/\s+/).map((p,S)=>S===0?p:parseFloat(p));let{x:f,y:h,z:d}={x:u[1],y:u[2],z:u[3]},v=h*Math.cos(r)-d*Math.sin(r),g=h*Math.sin(r)+d*Math.cos(r);h=v,d=g;let m=f*Math.cos(s)+d*Math.sin(s);g=d*Math.cos(s)-f*Math.sin(s),f=m,d=g,m=f*Math.cos(a)-h*Math.sin(a),v=f*Math.sin(a)+h*Math.cos(a),f=m,h=v,l.push(`v ${f.toFixed(6)} ${h.toFixed(6)} ${d.toFixed(6)}`)}else l.push(c)}),l.join(`
`)}function wp(n,t,e,i){n=n.trim(),!(n.startsWith("#")||n==="")&&(n.startsWith(t)?e.length>0&&(i.push(e.join(`
`)),e.length=0):n.startsWith("v ")&&e.push(n))}function Tp(n,t){n.length>0&&t.push(n.join(`
`))}function oT(n){const t=n.split(`
`);let e=[],i=[];return t.forEach(r=>wp(r,"g ",i,e)),Tp(i,e),e}function aT(n){const t=n.split(`
`);let e=[],i=[];return t.forEach(r=>wp(r,"o ",i,e)),Tp(i,e),e}const lT=Rr({__name:"app",async setup(n){let t,e;const i=([t,e]=eg(()=>fetch("/assets/error.obj").then(h=>h.text())),t=await t,e(),t),r=ln(i),s=ln(i),a=()=>({rotate:{x:0,y:0,z:0},preview:!0}),o=window.localStorage.getItem("config"),l=ln(o?JSON.parse(o):a());function c(h,d){s.value=Js(Zs(d),h.rotate.x,h.rotate.y,h.rotate.z)}cr(l,h=>{window.localStorage.setItem("config",JSON.stringify(h)),c(h,r.value)},{deep:!0}),cr(r,h=>{c(l.value,h)});function u(h,d){const v=document.createElement("a"),g=d instanceof Blob?URL.createObjectURL(d):URL.createObjectURL(new Blob([d],{type:"text/plain"}));v.href=g,v.download=h,v.click(),v.remove(),URL.revokeObjectURL(g)}function f(h){const d=Math.random().toString(36).substring(7),v=`${d}.${h?"zip":"obj"}`,g=l.value.rotate,m=Js(Zs(r.value),g.x,g.y,g.z);if(!h)return u(v,m);const p=new sT,S=`acmt-output-${d}/`;p.file(S+"input.obj",r.value),p.file(S+"output.obj",m);let y=0,E=0;for(const C of oT(r.value)){p.file(S+`groups/${y++}/group.obj`,Js(Zs(C),g.x,g.y,g.z));let R=0;for(const L of aT(C)){const z=Js(Zs(L),g.x,g.y,g.z);p.file(S+`individuals/${E++}.obj`,z),p.file(S+`groups/${y-1}/individuals/${R++}.obj`,z)}}p.generateAsync({type:"blob"}).then(C=>u(v,C))}return(h,d)=>{const v=kw,g=Hw,m=Kw,p=nT;return Pe(),mn(p,null,{default:Vr(()=>[Kt(l).preview?(Pe(),mn(g,{key:0},{default:Vr(()=>[re(v,{obj:Kt(s)},null,8,["obj"])]),_:1})):ad("",!0),re(g,null,{default:Vr(()=>[re(m,{modelValue:Kt(l),"onUpdate:modelValue":d[0]||(d[0]=S=>Ee(l)?l.value=S:null),onLoadObj:d[1]||(d[1]=S=>r.value=S),onClickDl:f},null,8,["modelValue"])]),_:1})]),_:1})}}}),cT={__name:"nuxt-error-page",props:{error:Object},setup(n){const e=n.error;e.stack&&e.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(e.statusCode||500),r=i===404,s=e.statusMessage??(r?"Page Not Found":"Internal Server Error"),a=e.message||e.toString(),o=void 0,u=r?Pc(()=>su(()=>import("./Dp0saXin.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(f=>f.default||f)):Pc(()=>su(()=>import("./DR0xNzfj.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(f=>f.default||f));return(f,h)=>(Pe(),mn(Kt(u),Hp(sd({statusCode:Kt(i),statusMessage:Kt(s),description:Kt(a),stack:Kt(o)})),null,16))}},Jf={__name:"nuxt-root",setup(n){const t=()=>null,e=Se(),i=e.deferHydration();if(e.isHydrating){const o=e.hooks.hookOnce("app:error",i);ss().beforeEach(o)}const r=!1;Vh(Dd,Ud()),e.hooks.callHookWith(o=>o.map(l=>l()),"vue:setup");const s=ec();Fh((o,l,c)=>{if(e.hooks.callHook("vue:error",o,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),C0(o)&&(o.fatal||o.unhandled))return e.runWithContext(()=>A0(o)),!1});const a=!1;return(o,l)=>(Pe(),mn(Nm,{onResolve:Kt(i)},{default:Vr(()=>[Kt(s)?(Pe(),mn(Kt(cT),{key:0,error:Kt(s)},null,8,["error"])):Kt(a)?(Pe(),mn(Kt(t),{key:1,context:Kt(a)},null,8,["context"])):Kt(r)?(Pe(),mn(Im(Kt(r)),{key:2})):(Pe(),mn(Kt(lT),{key:3}))]),_:1},8,["onResolve"]))}};let Qf;{let n;Qf=async function(){var a,o;if(n)return n;const i=!!((a=window.__NUXT__)!=null&&a.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?o_(Jf):s_(Jf),r=u0({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||nc(l)}i.config.errorHandler=s;try{await h0(r,zv)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(Sv),await r.hooks.callHook("app:mounted",i),await Hl()}catch(l){s(l)}return i.config.errorHandler===s&&(i.config.errorHandler=void 0),i},n=Qf().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{Vr as A,od as B,uT as C,fT as D,pT as E,dT as F,cr as G,jm as H,Wm as I,_l as J,ld as K,Zw as _,Xd as a,pu as b,Kl as c,Rr as d,Km as e,gT as f,Ig as g,Cr as h,hT as i,Go as j,gd as k,bo as l,Se as m,mT as n,Oh as o,Wo as p,T0 as q,ln as r,Jl as s,Pe as t,ss as u,Jr as v,fl as w,de as x,jp as y,re as z};
