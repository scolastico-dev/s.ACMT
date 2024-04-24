const __vite__fileDeps=["./Cai5-0a7.js","./CVYC1Na6.js","./error-404.EzKNKnTL.css","./BdqQlA0A.js","./error-500.BOCRP2Ph.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/**
* @vue/shared v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nl(n,t){const e=new Set(n.split(","));return i=>e.has(i)}const ie={},fr=[],tn=()=>{},kp=()=>!1,os=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ol=n=>n.startsWith("onUpdate:"),Se=Object.assign,Fl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Bp=Object.prototype.hasOwnProperty,Yt=(n,t)=>Bp.call(n,t),Lt=Array.isArray,hr=n=>as(n)==="[object Map]",ko=n=>as(n)==="[object Set]",wc=n=>as(n)==="[object Date]",Ut=n=>typeof n=="function",ce=n=>typeof n=="string",In=n=>typeof n=="symbol",te=n=>n!==null&&typeof n=="object",kl=n=>(te(n)||Ut(n))&&Ut(n.then)&&Ut(n.catch),ch=Object.prototype.toString,as=n=>ch.call(n),zp=n=>as(n).slice(8,-1),uh=n=>as(n)==="[object Object]",Bl=n=>ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,dr=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Hp=/-(\w)/g,yn=Bo(n=>n.replace(Hp,(t,e)=>e?e.toUpperCase():"")),Vp=/\B([A-Z])/g,Ir=Bo(n=>n.replace(Vp,"-$1").toLowerCase()),zo=Bo(n=>n.charAt(0).toUpperCase()+n.slice(1)),oa=Bo(n=>n?`on${zo(n)}`:""),si=(n,t)=>!Object.is(n,t),oo=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},fh=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},nl=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Gp=n=>{const t=ce(n)?Number(n):NaN;return isNaN(t)?n:t};let Tc;const hh=()=>Tc||(Tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ls(n){if(Lt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ce(i)?qp(i):ls(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ce(n)||te(n))return n}const Wp=/;(?![^(]*\))/g,jp=/:([^]+)/,Xp=/\/\*[^]*?\*\//g;function qp(n){const t={};return n.replace(Xp,"").split(Wp).forEach(e=>{if(e){const i=e.split(jp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function zi(n){let t="";if(ce(n))t=n;else if(Lt(n))for(let e=0;e<n.length;e++){const i=zi(n[e]);i&&(t+=i+" ")}else if(te(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function $p(n){if(!n)return null;let{class:t,style:e}=n;return t&&!ce(t)&&(n.class=zi(t)),e&&(n.style=ls(e)),n}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Nl(Yp);function dh(n){return!!n||n===""}function Zp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ho(n[i],t[i]);return e}function Ho(n,t){if(n===t)return!0;let e=wc(n),i=wc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=In(n),i=In(t),e||i)return n===t;if(e=Lt(n),i=Lt(t),e||i)return e&&i?Zp(n,t):!1;if(e=te(n),i=te(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Ho(n[a],t[a]))return!1}}return String(n)===String(t)}function ph(n,t){return n.findIndex(e=>Ho(e,t))}const mh=n=>ce(n)?n:n==null?"":Lt(n)||te(n)&&(n.toString===ch||!Ut(n.toString))?JSON.stringify(n,gh,2):String(n),gh=(n,t)=>t&&t.__v_isRef?gh(n,t.value):hr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[aa(i,s)+" =>"]=r,e),{})}:ko(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>aa(e))}:In(t)?aa(t):te(t)&&!Lt(t)&&!uh(t)?String(t):t,aa=(n,t="")=>{var e;return In(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class _h{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!t&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=an;try{return an=this,t()}finally{an=e}}}on(){an=this}off(){an=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Jp(n){return new _h(n)}function Qp(n,t=an){t&&t.active&&t.effects.push(n)}function tm(){return an}let Di;class zl{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qp(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ui();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(em(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),fi()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ti,e=Di;try{return ti=!0,Di=this,this._runnings++,Ac(this),this.fn()}finally{Rc(this),this._runnings--,Di=e,ti=t}}stop(){var t;this.active&&(Ac(this),Rc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function em(n){return n.value}function Ac(n){n._trackId++,n._depsLength=0}function Rc(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)vh(n.deps[t],n);n.deps.length=n._depsLength}}function vh(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let ti=!0,il=0;const xh=[];function ui(){xh.push(ti),ti=!1}function fi(){const n=xh.pop();ti=n===void 0?!0:n}function Hl(){il++}function Vl(){for(il--;!il&&rl.length;)rl.shift()()}function yh(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const i=n.deps[n._depsLength];i!==t?(i&&vh(i,n),n.deps[n._depsLength++]=t):n._depsLength++}}const rl=[];function bh(n,t,e){Hl();for(const i of n.keys()){let r;i._dirtyLevel<t&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&rl.push(i.scheduler)))}Vl()}const Sh=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},go=new WeakMap,Ui=Symbol(""),sl=Symbol("");function Be(n,t,e){if(ti&&Di){let i=go.get(n);i||go.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=Sh(()=>i.delete(e))),yh(Di,r)}}function Ln(n,t,e,i,r,s){const a=go.get(n);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Lt(n)){const l=Number(i);a.forEach((c,f)=>{(f==="length"||!In(f)&&f>=l)&&o.push(c)})}else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Lt(n)?Bl(e)&&o.push(a.get("length")):(o.push(a.get(Ui)),hr(n)&&o.push(a.get(sl)));break;case"delete":Lt(n)||(o.push(a.get(Ui)),hr(n)&&o.push(a.get(sl)));break;case"set":hr(n)&&o.push(a.get(Ui));break}Hl();for(const l of o)l&&bh(l,4);Vl()}function nm(n,t){var e;return(e=go.get(n))==null?void 0:e.get(t)}const im=Nl("__proto__,__v_isRef,__isVue"),Mh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In)),Cc=rm();function rm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Kt(this);for(let s=0,a=this.length;s<a;s++)Be(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(Kt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){ui(),Hl();const i=Kt(this)[t].apply(this,e);return Vl(),fi(),i}}),n}function sm(n){In(n)||(n=String(n));const t=Kt(this);return Be(t,"has",n),t.hasOwnProperty(n)}class Eh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?vm:Rh:s?Ah:Th).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Lt(t);if(!r){if(a&&Yt(Cc,e))return Reflect.get(Cc,e,i);if(e==="hasOwnProperty")return sm}const o=Reflect.get(t,e,i);return(In(e)?Mh.has(e):im(e))||(r||Be(t,"get",e),s)?o:we(o)?a&&Bl(e)?o:o.value:te(o)?r?Ph(o):oi(o):o}}class wh extends Eh{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=Er(s);if(!_o(i)&&!Er(i)&&(s=Kt(s),i=Kt(i)),!Lt(t)&&we(s)&&!we(i))return l?!1:(s.value=i,!0)}const a=Lt(t)&&Bl(e)?Number(e)<t.length:Yt(t,e),o=Reflect.set(t,e,i,r);return t===Kt(r)&&(a?si(i,s)&&Ln(t,"set",e,i):Ln(t,"add",e,i)),o}deleteProperty(t,e){const i=Yt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Ln(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!In(e)||!Mh.has(e))&&Be(t,"has",e),i}ownKeys(t){return Be(t,"iterate",Lt(t)?"length":Ui),Reflect.ownKeys(t)}}class om extends Eh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const am=new wh,lm=new om,cm=new wh(!0);const Gl=n=>n,Vo=n=>Reflect.getPrototypeOf(n);function _s(n,t,e=!1,i=!1){n=n.__v_raw;const r=Kt(n),s=Kt(t);e||(si(t,s)&&Be(r,"get",t),Be(r,"get",s));const{has:a}=Vo(r),o=i?Gl:e?Xl:Jr;if(a.call(r,t))return o(n.get(t));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(t)}function vs(n,t=!1){const e=this.__v_raw,i=Kt(e),r=Kt(n);return t||(si(n,r)&&Be(i,"has",n),Be(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function xs(n,t=!1){return n=n.__v_raw,!t&&Be(Kt(n),"iterate",Ui),Reflect.get(n,"size",n)}function Pc(n){n=Kt(n);const t=Kt(this);return Vo(t).has.call(t,n)||(t.add(n),Ln(t,"add",n,n)),this}function Lc(n,t){t=Kt(t);const e=Kt(this),{has:i,get:r}=Vo(e);let s=i.call(e,n);s||(n=Kt(n),s=i.call(e,n));const a=r.call(e,n);return e.set(n,t),s?si(t,a)&&Ln(e,"set",n,t):Ln(e,"add",n,t),this}function Ic(n){const t=Kt(this),{has:e,get:i}=Vo(t);let r=e.call(t,n);r||(n=Kt(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Ln(t,"delete",n,void 0),s}function Dc(){const n=Kt(this),t=n.size!==0,e=n.clear();return t&&Ln(n,"clear",void 0,void 0),e}function ys(n,t){return function(i,r){const s=this,a=s.__v_raw,o=Kt(a),l=t?Gl:n?Xl:Jr;return!n&&Be(o,"iterate",Ui),a.forEach((c,f)=>i.call(r,l(c),l(f),s))}}function bs(n,t,e){return function(...i){const r=this.__v_raw,s=Kt(r),a=hr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),f=e?Gl:t?Xl:Jr;return!t&&Be(s,"iterate",l?sl:Ui),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:o?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function kn(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function um(){const n={get(s){return _s(this,s)},get size(){return xs(this)},has:vs,add:Pc,set:Lc,delete:Ic,clear:Dc,forEach:ys(!1,!1)},t={get(s){return _s(this,s,!1,!0)},get size(){return xs(this)},has:vs,add:Pc,set:Lc,delete:Ic,clear:Dc,forEach:ys(!1,!0)},e={get(s){return _s(this,s,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ys(!0,!1)},i={get(s){return _s(this,s,!0,!0)},get size(){return xs(this,!0)},has(s){return vs.call(this,s,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bs(s,!1,!1),e[s]=bs(s,!0,!1),t[s]=bs(s,!1,!0),i[s]=bs(s,!0,!0)}),[n,e,t,i]}const[fm,hm,dm,pm]=um();function Wl(n,t){const e=t?n?pm:dm:n?hm:fm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Yt(e,r)&&r in i?e:i,r,s)}const mm={get:Wl(!1,!1)},gm={get:Wl(!1,!0)},_m={get:Wl(!0,!1)};const Th=new WeakMap,Ah=new WeakMap,Rh=new WeakMap,vm=new WeakMap;function xm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ym(n){return n.__v_skip||!Object.isExtensible(n)?0:xm(zp(n))}function oi(n){return Er(n)?n:jl(n,!1,am,mm,Th)}function Ch(n){return jl(n,!1,cm,gm,Ah)}function Ph(n){return jl(n,!0,lm,_m,Rh)}function jl(n,t,e,i,r){if(!te(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=ym(n);if(a===0)return n;const o=new Proxy(n,a===2?i:e);return r.set(n,o),o}function Xr(n){return Er(n)?Xr(n.__v_raw):!!(n&&n.__v_isReactive)}function Er(n){return!!(n&&n.__v_isReadonly)}function _o(n){return!!(n&&n.__v_isShallow)}function Lh(n){return n?!!n.__v_raw:!1}function Kt(n){const t=n&&n.__v_raw;return t?Kt(t):n}function bm(n){return Object.isExtensible(n)&&fh(n,"__v_skip",!0),n}const Jr=n=>te(n)?oi(n):n,Xl=n=>te(n)?Ph(n):n;class Ih{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zl(()=>t(this._value),()=>ao(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Kt(this);return(!t._cacheable||t.effect.dirty)&&si(t._value,t._value=t.effect.run())&&ao(t,4),Dh(t),t.effect._dirtyLevel>=2&&ao(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Sm(n,t,e=!1){let i,r;const s=Ut(n);return s?(i=n,r=tn):(i=n.get,r=n.set),new Ih(i,r,s||!r,e)}function Dh(n){var t;ti&&Di&&(n=Kt(n),yh(Di,(t=n.dep)!=null?t:n.dep=Sh(()=>n.dep=void 0,n instanceof Ih?n:void 0)))}function ao(n,t=4,e){n=Kt(n);const i=n.dep;i&&bh(i,t)}function we(n){return!!(n&&n.__v_isRef===!0)}function Ne(n){return Uh(n,!1)}function Uc(n){return Uh(n,!0)}function Uh(n,t){return we(n)?n:new Mm(n,t)}class Mm{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Kt(t),this._value=e?t:Jr(t)}get value(){return Dh(this),this._value}set value(t){const e=this.__v_isShallow||_o(t)||Er(t);t=e?t:Kt(t),si(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Jr(t),ao(this,4))}}function $t(n){return we(n)?n.value:n}const Em={get:(n,t,e)=>$t(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return we(r)&&!we(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Nh(n){return Xr(n)?n:new Proxy(n,Em)}class wm{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return nm(Kt(this._object),this._key)}}class Tm{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Am(n,t,e){return we(n)?n:Ut(n)?new Tm(n):te(n)&&arguments.length>1?Rm(n,t,e):Ne(n)}function Rm(n,t,e){const i=n[t];return we(i)?i:new wm(n,t,e)}/**
* @vue/runtime-core v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ei(n,t,e,i){try{return i?n(...i):n()}catch(r){Dr(r,t,e)}}function un(n,t,e,i){if(Ut(n)){const r=ei(n,t,e,i);return r&&kl(r)&&r.catch(s=>{Dr(s,t,e)}),r}if(Lt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(un(n[s],t,e,i));return r}}function Dr(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const c=s.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){ui(),ei(l,null,10,[n,a,o]),fi();return}}Cm(n,e,r,i)}function Cm(n,t,e,i=!0){console.error(n)}let Qr=!1,ol=!1;const Pe=[];let mn=0;const pr=[];let qn=null,Ti=0;const Oh=Promise.resolve();let ql=null;function $l(n){const t=ql||Oh;return n?t.then(this?n.bind(this):n):t}function Pm(n){let t=mn+1,e=Pe.length;for(;t<e;){const i=t+e>>>1,r=Pe[i],s=ts(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function Go(n){(!Pe.length||!Pe.includes(n,Qr&&n.allowRecurse?mn+1:mn))&&(n.id==null?Pe.push(n):Pe.splice(Pm(n.id),0,n),Fh())}function Fh(){!Qr&&!ol&&(ol=!0,ql=Oh.then(kh))}function Lm(n){const t=Pe.indexOf(n);t>mn&&Pe.splice(t,1)}function al(n){Lt(n)?pr.push(...n):(!qn||!qn.includes(n,n.allowRecurse?Ti+1:Ti))&&pr.push(n),Fh()}function Nc(n,t,e=Qr?mn+1:0){for(;e<Pe.length;e++){const i=Pe[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Pe.splice(e,1),e--,i()}}}function vo(n){if(pr.length){const t=[...new Set(pr)].sort((e,i)=>ts(e)-ts(i));if(pr.length=0,qn){qn.push(...t);return}for(qn=t,Ti=0;Ti<qn.length;Ti++)qn[Ti]();qn=null,Ti=0}}const ts=n=>n.id==null?1/0:n.id,Im=(n,t)=>{const e=ts(n)-ts(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function kh(n){ol=!1,Qr=!0,Pe.sort(Im);try{for(mn=0;mn<Pe.length;mn++){const t=Pe[mn];t&&t.active!==!1&&ei(t,null,14)}}finally{mn=0,Pe.length=0,vo(),Qr=!1,ql=null,(Pe.length||pr.length)&&kh()}}function Dm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ie;let r=e;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:u,trim:h}=i[f]||ie;h&&(r=e.map(d=>ce(d)?d.trim():d)),u&&(r=e.map(nl))}let o,l=i[o=oa(t)]||i[o=oa(yn(t))];!l&&s&&(l=i[o=oa(Ir(t))]),l&&un(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,un(c,n,6,r)}}function Bh(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ut(n)){const l=c=>{const f=Bh(c,t,!0);f&&(o=!0,Se(a,f))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(te(n)&&i.set(n,null),null):(Lt(s)?s.forEach(l=>a[l]=null):Se(a,s),te(n)&&i.set(n,a),a)}function Wo(n,t){return!n||!os(t)?!1:(t=t.slice(2).replace(/Once$/,""),Yt(n,t[0].toLowerCase()+t.slice(1))||Yt(n,Ir(t))||Yt(n,t))}let pe=null,jo=null;function xo(n){const t=pe;return pe=n,jo=n&&n.type.__scopeId||null,t}function RT(n){jo=n}function CT(){jo=null}function qr(n,t=pe,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&$c(-1);const s=xo(t);let a;try{a=n(...r)}finally{xo(s),i._d&&$c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function la(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:f,props:u,data:h,setupState:d,ctx:_,inheritAttrs:g}=n,m=xo(n);let p,S;try{if(e.shapeFlag&4){const E=r||i,C=E;p=Je(c.call(C,E,f,u,d,h,_)),S=o}else{const E=t;p=Je(E.length>1?E(u,{attrs:o,slots:a,emit:l}):E(u,null)),S=t.props?o:Nm(o)}}catch(E){Yr.length=0,Dr(E,n,1),p=Qt(fn)}let y=p;if(S&&g!==!1){const E=Object.keys(S),{shapeFlag:C}=y;E.length&&C&7&&(s&&E.some(Ol)&&(S=Om(S,s)),y=Ar(y,S))}return e.dirs&&(y=Ar(y),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),p=y,xo(m),p}function Um(n,t=!0){let e;for(let i=0;i<n.length;i++){const r=n[i];if(ns(r)){if(r.type!==fn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Nm=n=>{let t;for(const e in n)(e==="class"||e==="style"||os(e))&&((t||(t={}))[e]=n[e]);return t},Om=(n,t)=>{const e={};for(const i in n)(!Ol(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Fm(n,t,e){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Oc(i,a,c):!!a;if(l&8){const f=t.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(a[h]!==i[h]&&!Wo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Oc(i,a,c):!0:!!a;return!1}function Oc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!Wo(e,s))return!0}return!1}function Yl({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const zh="components";function PT(n,t){return Vh(zh,n,!0,t)||n}const Hh=Symbol.for("v-ndc");function km(n){return ce(n)?Vh(zh,n,!1)||n:n||Hh}function Vh(n,t,e=!0,i=!1){const r=pe||ge;if(r){const s=r.type;{const o=Ng(s,!1);if(o&&(o===t||o===yn(t)||o===zo(yn(t))))return s}const a=Fc(r[n]||s[n],t)||Fc(r.appContext[n],t);return!a&&i?s:a}}function Fc(n,t){return n&&(n[t]||n[yn(t)]||n[zo(yn(t))])}const Bm=n=>n.__isSuspense;let ll=0;const zm={name:"Suspense",__isSuspense:!0,process(n,t,e,i,r,s,a,o,l,c){if(n==null)Vm(t,e,i,r,s,a,o,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){t.suspense=n.suspense,t.suspense.vnode=t,t.el=n.el;return}Gm(n,t,e,i,r,a,o,l,c)}},hydrate:Wm,create:Kl,normalize:jm},Hm=zm;function es(n,t){const e=n.props&&n.props[t];Ut(e)&&e()}function Vm(n,t,e,i,r,s,a,o,l){const{p:c,o:{createElement:f}}=l,u=f("div"),h=n.suspense=Kl(n,r,i,t,u,e,s,a,o,l);c(null,h.pendingBranch=n.ssContent,u,null,i,h,s,a),h.deps>0?(es(n,"onPending"),es(n,"onFallback"),c(null,n.ssFallback,t,e,i,null,s,a),mr(h,n.ssFallback)):h.resolve(!1,!0)}function Gm(n,t,e,i,r,s,a,o,{p:l,um:c,o:{createElement:f}}){const u=t.suspense=n.suspense;u.vnode=t,t.el=n.el;const h=t.ssContent,d=t.ssFallback,{activeBranch:_,pendingBranch:g,isInFallback:m,isHydrating:p}=u;if(g)u.pendingBranch=h,Zn(h,g)?(l(g,h,u.hiddenContainer,null,r,u,s,a,o),u.deps<=0?u.resolve():m&&(p||(l(_,d,e,i,r,null,s,a,o),mr(u,d)))):(u.pendingId=ll++,p?(u.isHydrating=!1,u.activeBranch=g):c(g,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),m?(l(null,h,u.hiddenContainer,null,r,u,s,a,o),u.deps<=0?u.resolve():(l(_,d,e,i,r,null,s,a,o),mr(u,d))):_&&Zn(h,_)?(l(_,h,e,i,r,u,s,a,o),u.resolve(!0)):(l(null,h,u.hiddenContainer,null,r,u,s,a,o),u.deps<=0&&u.resolve()));else if(_&&Zn(h,_))l(_,h,e,i,r,u,s,a,o),mr(u,h);else if(es(t,"onPending"),u.pendingBranch=h,h.shapeFlag&512?u.pendingId=h.component.suspenseId:u.pendingId=ll++,l(null,h,u.hiddenContainer,null,r,u,s,a,o),u.deps<=0)u.resolve();else{const{timeout:S,pendingId:y}=u;S>0?setTimeout(()=>{u.pendingId===y&&u.fallback(d)},S):S===0&&u.fallback(d)}}function Kl(n,t,e,i,r,s,a,o,l,c,f=!1){const{p:u,m:h,um:d,n:_,o:{parentNode:g,remove:m}}=c;let p;const S=Xm(n);S&&t!=null&&t.pendingBranch&&(p=t.pendingId,t.deps++);const y=n.props?Gp(n.props.timeout):void 0,E=s,C={vnode:n,parent:t,parentComponent:e,namespace:a,container:i,hiddenContainer:r,deps:0,pendingId:ll++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(R=!1,P=!1){const{vnode:z,activeBranch:T,pendingBranch:w,pendingId:G,effects:I,parentComponent:U,container:M}=C;let V=!1;C.isHydrating?C.isHydrating=!1:R||(V=T&&w.transition&&w.transition.mode==="out-in",V&&(T.transition.afterLeave=()=>{G===C.pendingId&&(h(w,M,s===E?_(T):s,0),al(I))}),T&&(g(T.el)!==C.hiddenContainer&&(s=_(T)),d(T,U,C,!0)),V||h(w,M,s,0)),mr(C,w),C.pendingBranch=null,C.isInFallback=!1;let Y=C.parent,X=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...I),X=!0;break}Y=Y.parent}!X&&!V&&al(I),C.effects=[],S&&t&&t.pendingBranch&&p===t.pendingId&&(t.deps--,t.deps===0&&!P&&t.resolve()),es(z,"onResolve")},fallback(R){if(!C.pendingBranch)return;const{vnode:P,activeBranch:z,parentComponent:T,container:w,namespace:G}=C;es(P,"onFallback");const I=_(z),U=()=>{C.isInFallback&&(u(null,R,w,I,T,null,G,o,l),mr(C,R))},M=R.transition&&R.transition.mode==="out-in";M&&(z.transition.afterLeave=U),C.isInFallback=!0,d(z,T,null,!0),M||U()},move(R,P,z){C.activeBranch&&h(C.activeBranch,R,P,z),C.container=R},next(){return C.activeBranch&&_(C.activeBranch)},registerDep(R,P){const z=!!C.pendingBranch;z&&C.deps++;const T=R.vnode.el;R.asyncDep.catch(w=>{Dr(w,R,0)}).then(w=>{if(R.isUnmounted||C.isUnmounted||C.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:G}=R;ml(R,w,!1),T&&(G.el=T);const I=!T&&R.subTree.el;P(R,G,g(T||R.subTree.el),T?null:_(R.subTree),C,a,l),I&&m(I),Yl(R,G.el),z&&--C.deps===0&&C.resolve()})},unmount(R,P){C.isUnmounted=!0,C.activeBranch&&d(C.activeBranch,e,R,P),C.pendingBranch&&d(C.pendingBranch,e,R,P)}};return C}function Wm(n,t,e,i,r,s,a,o,l){const c=t.suspense=Kl(t,i,e,n.parentNode,document.createElement("div"),null,r,s,a,o,!0),f=l(n,c.pendingBranch=t.ssContent,e,c,s,a);return c.deps===0&&c.resolve(!1,!0),f}function jm(n){const{shapeFlag:t,children:e}=n,i=t&32;n.ssContent=kc(i?e.default:e),n.ssFallback=i?kc(e.fallback):Qt(fn)}function kc(n){let t;if(Ut(n)){const e=Tr&&n._c;e&&(n._d=!1,me()),n=n(),e&&(n._d=!0,t=en,fd())}return Lt(n)&&(n=Um(n)),n=Je(n),t&&!n.dynamicChildren&&(n.dynamicChildren=t.filter(e=>e!==n)),n}function Gh(n,t){t&&t.pendingBranch?Lt(n)?t.effects.push(...n):t.effects.push(n):al(n)}function mr(n,t){n.activeBranch=t;const{vnode:e,parentComponent:i}=n;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;e.el=r,i&&i.subTree===e&&(i.vnode.el=r,Yl(i,r))}function Xm(n){var t;return((t=n.props)==null?void 0:t.suspensible)!=null&&n.props.suspensible!==!1}const qm=Symbol.for("v-scx"),$m=()=>vr(qm);function LT(n,t){return Zl(n,null,t)}const Ss={};function Ni(n,t,e){return Zl(n,t,e)}function Zl(n,t,{immediate:e,deep:i,flush:r,once:s,onTrack:a,onTrigger:o}=ie){if(t&&s){const R=t;t=(...P)=>{R(...P),C()}}const l=ge,c=R=>i===!0?R:Pi(R,i===!1?1:void 0);let f,u=!1,h=!1;if(we(n)?(f=()=>n.value,u=_o(n)):Xr(n)?(f=()=>c(n),u=!0):Lt(n)?(h=!0,u=n.some(R=>Xr(R)||_o(R)),f=()=>n.map(R=>{if(we(R))return R.value;if(Xr(R))return c(R);if(Ut(R))return ei(R,l,2)})):Ut(n)?t?f=()=>ei(n,l,2):f=()=>(d&&d(),un(n,l,3,[_])):f=tn,t&&i){const R=f;f=()=>Pi(R())}let d,_=R=>{d=y.onStop=()=>{ei(R,l,4),d=y.onStop=void 0}},g;if(cs)if(_=tn,t?e&&un(t,l,3,[f(),h?[]:void 0,_]):f(),r==="sync"){const R=$m();g=R.__watcherHandles||(R.__watcherHandles=[])}else return tn;let m=h?new Array(n.length).fill(Ss):Ss;const p=()=>{if(!(!y.active||!y.dirty))if(t){const R=y.run();(i||u||(h?R.some((P,z)=>si(P,m[z])):si(R,m)))&&(d&&d(),un(t,l,3,[R,m===Ss?void 0:h&&m[0]===Ss?[]:m,_]),m=R)}else y.run()};p.allowRecurse=!!t;let S;r==="sync"?S=p:r==="post"?S=()=>Oe(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),S=()=>Go(p));const y=new zl(f,tn,S),E=tm(),C=()=>{y.stop(),E&&Fl(E.effects,y)};return t?e?p():m=y.run():r==="post"?Oe(y.run.bind(y),l&&l.suspense):y.run(),g&&g.push(C),C}function Ym(n,t,e){const i=this.proxy,r=ce(n)?n.includes(".")?Wh(i,n):()=>i[n]:n.bind(i,i);let s;Ut(t)?s=t:(s=t.handler,e=t);const a=Fi(this),o=Zl(r,s.bind(i),e);return a(),o}function Wh(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Pi(n,t,e=0,i){if(!te(n)||n.__v_skip)return n;if(t&&t>0){if(e>=t)return n;e++}if(i=i||new Set,i.has(n))return n;if(i.add(n),we(n))Pi(n.value,t,e,i);else if(Lt(n))for(let r=0;r<n.length;r++)Pi(n[r],t,e,i);else if(ko(n)||hr(n))n.forEach(r=>{Pi(r,t,e,i)});else if(uh(n))for(const r in n)Pi(n[r],t,e,i);return n}function Ms(n,t){if(pe===null)return n;const e=$o(pe)||pe.proxy,i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,a,o,l=ie]=t[r];s&&(Ut(s)&&(s={mounted:s,updated:s}),s.deep&&Pi(a),i.push({dir:s,instance:e,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function hn(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ui(),un(l,e,8,[n.el,o,n,t]),fi())}}/*! #__NO_SIDE_EFFECTS__ */function Un(n,t){return Ut(n)?Se({name:n.name},t,{setup:n}):n}const gr=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Bc(n){Ut(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:i,delay:r=200,timeout:s,suspensible:a=!0,onError:o}=n;let l=null,c,f=0;const u=()=>(f++,l=null,h()),h=()=>{let d;return l||(d=l=t().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),o)return new Promise((g,m)=>{o(_,()=>g(u()),()=>m(_),f+1)});throw _}).then(_=>d!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return Un({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const d=ge;if(c)return()=>ca(c,d);const _=S=>{l=null,Dr(S,d,13,!i)};if(a&&d.suspense||cs)return h().then(S=>()=>ca(S,d)).catch(S=>(_(S),()=>i?Qt(i,{error:S}):null));const g=Ne(!1),m=Ne(),p=Ne(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!g.value&&!m.value){const S=new Error(`Async component timed out after ${s}ms.`);_(S),m.value=S}},s),h().then(()=>{g.value=!0,d.parent&&Jl(d.parent.vnode)&&(d.parent.effect.dirty=!0,Go(d.parent.update))}).catch(S=>{_(S),m.value=S}),()=>{if(g.value&&c)return ca(c,d);if(m.value&&i)return Qt(i,{error:m.value});if(e&&!p.value)return Qt(e)}}})}function ca(n,t){const{ref:e,props:i,children:r,ce:s}=t.vnode,a=Qt(n,i,r);return a.ref=e,a.ce=s,delete t.vnode.ce,a}const Jl=n=>n.type.__isKeepAlive;function Km(n,t){jh(n,"a",t)}function Zm(n,t){jh(n,"da",t)}function jh(n,t,e=ge){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Xo(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Jl(r.parent.vnode)&&Jm(i,t,e,r),r=r.parent}}function Jm(n,t,e,i){const r=Xo(t,n,i,!0);Ql(()=>{Fl(i[t],r)},e)}function Xo(n,t,e=ge,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;ui();const o=Fi(e),l=un(t,e,n,a);return o(),fi(),l});return i?r.unshift(s):r.push(s),s}}const Nn=n=>(t,e=ge)=>(!cs||n==="sp")&&Xo(n,(...i)=>t(...i),e),Qm=Nn("bm"),qo=Nn("m"),tg=Nn("bu"),eg=Nn("u"),Xh=Nn("bum"),Ql=Nn("um"),ng=Nn("sp"),ig=Nn("rtg"),rg=Nn("rtc");function qh(n,t=ge){Xo("ec",n,t)}function tc(n,t,e={},i,r){if(pe.isCE||pe.parent&&gr(pe.parent)&&pe.parent.isCE)return Qt("slot",e,i&&i());let s=n[t];s&&s._c&&(s._d=!1),me();const a=s&&$h(s(e)),o=gn(je,{key:e.key||a&&a.key||`_${t}`},a||(i?i():[]),a&&n._===1?64:-2);return o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function $h(n){return n.some(t=>ns(t)?!(t.type===fn||t.type===je&&!$h(t.children)):!0)?n:null}const cl=n=>n?vd(n)?$o(n)||n.proxy:cl(n.parent):null,$r=Se(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cl(n.parent),$root:n=>cl(n.root),$emit:n=>n.emit,$options:n=>ec(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Go(n.update)}),$nextTick:n=>n.n||(n.n=$l.bind(n.proxy)),$watch:n=>Ym.bind(n)}),ua=(n,t)=>n!==ie&&!n.__isScriptSetup&&Yt(n,t),sg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(ua(i,t))return a[t]=1,i[t];if(r!==ie&&Yt(r,t))return a[t]=2,r[t];if((c=n.propsOptions[0])&&Yt(c,t))return a[t]=3,s[t];if(e!==ie&&Yt(e,t))return a[t]=4,e[t];ul&&(a[t]=0)}}const f=$r[t];let u,h;if(f)return t==="$attrs"&&Be(n.attrs,"get",""),f(n);if((u=o.__cssModules)&&(u=u[t]))return u;if(e!==ie&&Yt(e,t))return a[t]=4,e[t];if(h=l.config.globalProperties,Yt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return ua(r,t)?(r[t]=e,!0):i!==ie&&Yt(i,t)?(i[t]=e,!0):Yt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!e[a]||n!==ie&&Yt(n,a)||ua(t,a)||(o=s[0])&&Yt(o,a)||Yt(i,a)||Yt($r,a)||Yt(r.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Yt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function zc(n){return Lt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}function og(n){const t=_d();let e=n();return pl(),kl(e)&&(e=e.catch(i=>{throw Fi(t),i})),[e,()=>Fi(t)]}let ul=!0;function ag(n){const t=ec(n),e=n.proxy,i=n.ctx;ul=!1,t.beforeCreate&&Hc(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:y,unmounted:E,render:C,renderTracked:R,renderTriggered:P,errorCaptured:z,serverPrefetch:T,expose:w,inheritAttrs:G,components:I,directives:U,filters:M}=t;if(c&&lg(c,i,null),a)for(const X in a){const W=a[X];Ut(W)&&(i[X]=W.bind(e))}if(r){const X=r.call(e,e);te(X)&&(n.data=oi(X))}if(ul=!0,s)for(const X in s){const W=s[X],Q=Ut(W)?W.bind(e,e):Ut(W.get)?W.get.bind(e,e):tn,lt=!Ut(W)&&Ut(W.set)?W.set.bind(e):tn,$=rc({get:Q,set:lt});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>$.value,set:Z=>$.value=Z})}if(o)for(const X in o)Yh(o[X],i,e,X);if(l){const X=Ut(l)?l.call(e):l;Reflect.ownKeys(X).forEach(W=>{Zh(W,X[W])})}f&&Hc(f,n,"c");function Y(X,W){Lt(W)?W.forEach(Q=>X(Q.bind(e))):W&&X(W.bind(e))}if(Y(Qm,u),Y(qo,h),Y(tg,d),Y(eg,_),Y(Km,g),Y(Zm,m),Y(qh,z),Y(rg,R),Y(ig,P),Y(Xh,S),Y(Ql,E),Y(ng,T),Lt(w))if(w.length){const X=n.exposed||(n.exposed={});w.forEach(W=>{Object.defineProperty(X,W,{get:()=>e[W],set:Q=>e[W]=Q})})}else n.exposed||(n.exposed={});C&&n.render===tn&&(n.render=C),G!=null&&(n.inheritAttrs=G),I&&(n.components=I),U&&(n.directives=U)}function lg(n,t,e=tn){Lt(n)&&(n=fl(n));for(const i in n){const r=n[i];let s;te(r)?"default"in r?s=vr(r.from||i,r.default,!0):s=vr(r.from||i):s=vr(r),we(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function Hc(n,t,e){un(Lt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Yh(n,t,e,i){const r=i.includes(".")?Wh(e,i):()=>e[i];if(ce(n)){const s=t[n];Ut(s)&&Ni(r,s)}else if(Ut(n))Ni(r,n.bind(e));else if(te(n))if(Lt(n))n.forEach(s=>Yh(s,t,e,i));else{const s=Ut(n.handler)?n.handler.bind(e):t[n.handler];Ut(s)&&Ni(r,s,n)}}function ec(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>yo(l,c,a,!0)),yo(l,t,a)),te(t)&&s.set(t,l),l}function yo(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&yo(n,s,e,!0),r&&r.forEach(a=>yo(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=cg[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const cg={data:Vc,props:Gc,emits:Gc,methods:Vr,computed:Vr,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Vr,directives:Vr,watch:fg,provide:Vc,inject:ug};function Vc(n,t){return t?n?function(){return Se(Ut(n)?n.call(this,this):n,Ut(t)?t.call(this,this):t)}:t:n}function ug(n,t){return Vr(fl(n),fl(t))}function fl(n){if(Lt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ie(n,t){return n?[...new Set([].concat(n,t))]:t}function Vr(n,t){return n?Se(Object.create(null),n,t):t}function Gc(n,t){return n?Lt(n)&&Lt(t)?[...new Set([...n,...t])]:Se(Object.create(null),zc(n),zc(t??{})):t}function fg(n,t){if(!n)return t;if(!t)return n;const e=Se(Object.create(null),n);for(const i in t)e[i]=Ie(n[i],t[i]);return e}function Kh(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function dg(n,t){return function(i,r=null){Ut(i)||(i=Se({},i)),r!=null&&!te(r)&&(r=null);const s=Kh(),a=new WeakSet;let o=!1;const l=s.app={_uid:hg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:yd,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Ut(c.install)?(a.add(c),c.install(l,...f)):Ut(c)&&(a.add(c),c(l,...f))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,f){return f?(s.components[c]=f,l):s.components[c]},directive(c,f){return f?(s.directives[c]=f,l):s.directives[c]},mount(c,f,u){if(!o){const h=Qt(i,r);return h.appContext=s,u===!0?u="svg":u===!1&&(u=void 0),f&&t?t(h,c):n(h,c,u),o=!0,l._container=c,c.__vue_app__=l,$o(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,f){return s.provides[c]=f,l},runWithContext(c){const f=_r;_r=l;try{return c()}finally{_r=f}}};return l}}let _r=null;function Zh(n,t){if(ge){let e=ge.provides;const i=ge.parent&&ge.parent.provides;i===e&&(e=ge.provides=Object.create(i)),e[n]=t}}function vr(n,t,e=!1){const i=ge||pe;if(i||_r){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:_r._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Ut(t)?t.call(i&&i.proxy):t}}function Jh(){return!!(ge||pe||_r)}const Qh=Object.create(null),td=()=>Object.create(Qh),ed=n=>Object.getPrototypeOf(n)===Qh;function pg(n,t,e,i=!1){const r={},s=td();n.propsDefaults=Object.create(null),nd(n,t,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);e?n.props=i?r:Ch(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mg(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Kt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Wo(n.emitsOptions,h))continue;const d=t[h];if(l)if(Yt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=yn(h);r[_]=hl(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{nd(n,t,r,s)&&(c=!0);let f;for(const u in o)(!t||!Yt(t,u)&&((f=Ir(u))===u||!Yt(t,f)))&&(l?e&&(e[u]!==void 0||e[f]!==void 0)&&(r[u]=hl(l,o,u,void 0,n,!0)):delete r[u]);if(s!==o)for(const u in s)(!t||!Yt(t,u))&&(delete s[u],c=!0)}c&&Ln(n.attrs,"set","")}function nd(n,t,e,i){const[r,s]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(dr(l))continue;const c=t[l];let f;r&&Yt(r,f=yn(l))?!s||!s.includes(f)?e[f]=c:(o||(o={}))[f]=c:Wo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Kt(e),c=o||ie;for(let f=0;f<s.length;f++){const u=s[f];e[u]=hl(r,l,u,c[u],n,!Yt(c,u))}}return a}function hl(n,t,e,i,r,s){const a=n[e];if(a!=null){const o=Yt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ut(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const f=Fi(r);i=c[e]=l.call(null,t),f()}}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ir(e))&&(i=!0))}return i}function id(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ut(n)){const f=u=>{l=!0;const[h,d]=id(u,t,!0);Se(a,h),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!l)return te(n)&&i.set(n,fr),fr;if(Lt(s))for(let f=0;f<s.length;f++){const u=yn(s[f]);Wc(u)&&(a[u]=ie)}else if(s)for(const f in s){const u=yn(f);if(Wc(u)){const h=s[f],d=a[u]=Lt(h)||Ut(h)?{type:h}:Se({},h);if(d){const _=qc(Boolean,d.type),g=qc(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||Yt(d,"default"))&&o.push(u)}}}const c=[a,o];return te(n)&&i.set(n,c),c}function Wc(n){return n[0]!=="$"&&!dr(n)}function jc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function Xc(n,t){return jc(n)===jc(t)}function qc(n,t){return Lt(t)?t.findIndex(e=>Xc(e,n)):Ut(t)&&Xc(t,n)?0:-1}const rd=n=>n[0]==="_"||n==="$stable",nc=n=>Lt(n)?n.map(Je):[Je(n)],gg=(n,t,e)=>{if(t._n)return t;const i=qr((...r)=>nc(t(...r)),e);return i._c=!1,i},sd=(n,t,e)=>{const i=n._ctx;for(const r in n){if(rd(r))continue;const s=n[r];if(Ut(s))t[r]=gg(r,s,i);else if(s!=null){const a=nc(s);t[r]=()=>a}}},od=(n,t)=>{const e=nc(t);n.slots.default=()=>e},_g=(n,t)=>{const e=n.slots=td();if(n.vnode.shapeFlag&32){const i=t._;i?(Se(e,t),fh(e,"_",i)):sd(t,e)}else t&&od(n,t)},vg=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,a=ie;if(i.shapeFlag&32){const o=t._;o?e&&o===1?s=!1:(Se(r,t),!e&&o===1&&delete r._):(s=!t.$stable,sd(t,r)),a=t}else t&&(od(n,t),a={default:1});if(s)for(const o in r)!rd(o)&&a[o]==null&&delete r[o]};function bo(n,t,e,i,r=!1){if(Lt(n)){n.forEach((h,d)=>bo(h,t&&(Lt(t)?t[d]:t),e,i,r));return}if(gr(i)&&!r)return;const s=i.shapeFlag&4?$o(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=t&&t.r,f=o.refs===ie?o.refs={}:o.refs,u=o.setupState;if(c!=null&&c!==l&&(ce(c)?(f[c]=null,Yt(u,c)&&(u[c]=null)):we(c)&&(c.value=null)),Ut(l))ei(l,o,12,[a,f]);else{const h=ce(l),d=we(l);if(h||d){const _=()=>{if(n.f){const g=h?Yt(u,l)?u[l]:f[l]:l.value;r?Lt(g)&&Fl(g,s):Lt(g)?g.includes(s)||g.push(s):h?(f[l]=[s],Yt(u,l)&&(u[l]=f[l])):(l.value=[s],n.k&&(f[n.k]=l.value))}else h?(f[l]=a,Yt(u,l)&&(u[l]=a)):d&&(l.value=a,n.k&&(f[n.k]=a))};a?(_.id=-1,Oe(_,e)):_()}}}let Bn=!1;const xg=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",yg=n=>n.namespaceURI.includes("MathML"),Es=n=>{if(xg(n))return"svg";if(yg(n))return"mathml"},ws=n=>n.nodeType===8;function bg(n){const{mt:t,p:e,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:c}}=n,f=(y,E)=>{if(!E.hasChildNodes()){e(null,y,E),vo(),E._vnode=y;return}Bn=!1,u(E.firstChild,y,null,null,null),vo(),E._vnode=y,Bn&&console.error("Hydration completed but contains mismatches.")},u=(y,E,C,R,P,z=!1)=>{z=z||!!E.dynamicChildren;const T=ws(y)&&y.data==="[",w=()=>g(y,E,C,R,P,T),{type:G,ref:I,shapeFlag:U,patchFlag:M}=E;let V=y.nodeType;E.el=y,M===-2&&(z=!1,E.dynamicChildren=null);let Y=null;switch(G){case wr:V!==3?E.children===""?(l(E.el=r(""),a(y),y),Y=y):Y=w():(y.data!==E.children&&(Bn=!0,y.data=E.children),Y=s(y));break;case fn:S(y)?(Y=s(y),p(E.el=y.content.firstChild,y,C)):V!==8||T?Y=w():Y=s(y);break;case lo:if(T&&(y=s(y),V=y.nodeType),V===1||V===3){Y=y;const X=!E.children.length;for(let W=0;W<E.staticCount;W++)X&&(E.children+=Y.nodeType===1?Y.outerHTML:Y.data),W===E.staticCount-1&&(E.anchor=Y),Y=s(Y);return T?s(Y):Y}else w();break;case je:T?Y=_(y,E,C,R,P,z):Y=w();break;default:if(U&1)(V!==1||E.type.toLowerCase()!==y.tagName.toLowerCase())&&!S(y)?Y=w():Y=h(y,E,C,R,P,z);else if(U&6){E.slotScopeIds=P;const X=a(y);if(T?Y=m(y):ws(y)&&y.data==="teleport start"?Y=m(y,y.data,"teleport end"):Y=s(y),t(E,X,null,C,R,Es(X),z),gr(E)){let W;T?(W=Qt(je),W.anchor=Y?Y.previousSibling:X.lastChild):W=y.nodeType===3?md(""):Qt("div"),W.el=y,E.component.subTree=W}}else U&64?V!==8?Y=w():Y=E.type.hydrate(y,E,C,R,P,z,n,d):U&128&&(Y=E.type.hydrate(y,E,C,R,Es(a(y)),P,z,n,u))}return I!=null&&bo(I,null,R,E),Y},h=(y,E,C,R,P,z)=>{z=z||!!E.dynamicChildren;const{type:T,props:w,patchFlag:G,shapeFlag:I,dirs:U,transition:M}=E,V=T==="input"||T==="option";if(V||G!==-1){U&&hn(E,null,C,"created");let Y=!1;if(S(y)){Y=ld(R,M)&&C&&C.vnode.props&&C.vnode.props.appear;const W=y.content.firstChild;Y&&M.beforeEnter(W),p(W,y,C),E.el=y=W}if(I&16&&!(w&&(w.innerHTML||w.textContent))){let W=d(y.firstChild,E,y,C,R,P,z);for(;W;){Bn=!0;const Q=W;W=W.nextSibling,o(Q)}}else I&8&&y.textContent!==E.children&&(Bn=!0,y.textContent=E.children);if(w)if(V||!z||G&48)for(const W in w)(V&&(W.endsWith("value")||W==="indeterminate")||os(W)&&!dr(W)||W[0]===".")&&i(y,W,null,w[W],void 0,void 0,C);else w.onClick&&i(y,"onClick",null,w.onClick,void 0,void 0,C);let X;(X=w&&w.onVnodeBeforeMount)&&Ze(X,C,E),U&&hn(E,null,C,"beforeMount"),((X=w&&w.onVnodeMounted)||U||Y)&&Gh(()=>{X&&Ze(X,C,E),Y&&M.enter(y),U&&hn(E,null,C,"mounted")},R)}return y.nextSibling},d=(y,E,C,R,P,z,T)=>{T=T||!!E.dynamicChildren;const w=E.children,G=w.length;for(let I=0;I<G;I++){const U=T?w[I]:w[I]=Je(w[I]);if(y)y=u(y,U,R,P,z,T);else{if(U.type===wr&&!U.children)continue;Bn=!0,e(null,U,C,null,R,P,Es(C),z)}}return y},_=(y,E,C,R,P,z)=>{const{slotScopeIds:T}=E;T&&(P=P?P.concat(T):T);const w=a(y),G=d(s(y),E,w,C,R,P,z);return G&&ws(G)&&G.data==="]"?s(E.anchor=G):(Bn=!0,l(E.anchor=c("]"),w,G),G)},g=(y,E,C,R,P,z)=>{if(Bn=!0,E.el=null,z){const G=m(y);for(;;){const I=s(y);if(I&&I!==G)o(I);else break}}const T=s(y),w=a(y);return o(y),e(null,E,w,T,C,R,Es(w),P),T},m=(y,E="[",C="]")=>{let R=0;for(;y;)if(y=s(y),y&&ws(y)&&(y.data===E&&R++,y.data===C)){if(R===0)return s(y);R--}return y},p=(y,E,C)=>{const R=E.parentNode;R&&R.replaceChild(y,E);let P=C;for(;P;)P.vnode.el===E&&(P.vnode.el=P.subTree.el=y),P=P.parent},S=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[f,u]}const Oe=Gh;function Sg(n){return ad(n)}function Mg(n){return ad(n,bg)}function ad(n,t){const e=hh();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=tn,insertStaticContent:_}=n,g=(k,x,F,H=null,b=null,v=null,L=void 0,N=null,B=!!x.dynamicChildren)=>{if(k===x)return;k&&!Zn(k,x)&&(H=pt(k),Z(k,b,v,!0),k=null),x.patchFlag===-2&&(B=!1,x.dynamicChildren=null);const{type:D,ref:q,shapeFlag:j}=x;switch(D){case wr:m(k,x,F,H);break;case fn:p(k,x,F,H);break;case lo:k==null&&S(x,F,H,L);break;case je:I(k,x,F,H,b,v,L,N,B);break;default:j&1?C(k,x,F,H,b,v,L,N,B):j&6?U(k,x,F,H,b,v,L,N,B):(j&64||j&128)&&D.process(k,x,F,H,b,v,L,N,B,Tt)}q!=null&&b&&bo(q,k&&k.ref,v,x||k,!x)},m=(k,x,F,H)=>{if(k==null)i(x.el=o(x.children),F,H);else{const b=x.el=k.el;x.children!==k.children&&c(b,x.children)}},p=(k,x,F,H)=>{k==null?i(x.el=l(x.children||""),F,H):x.el=k.el},S=(k,x,F,H)=>{[k.el,k.anchor]=_(k.children,x,F,H,k.el,k.anchor)},y=({el:k,anchor:x},F,H)=>{let b;for(;k&&k!==x;)b=h(k),i(k,F,H),k=b;i(x,F,H)},E=({el:k,anchor:x})=>{let F;for(;k&&k!==x;)F=h(k),r(k),k=F;r(x)},C=(k,x,F,H,b,v,L,N,B)=>{x.type==="svg"?L="svg":x.type==="math"&&(L="mathml"),k==null?R(x,F,H,b,v,L,N,B):T(k,x,b,v,L,N,B)},R=(k,x,F,H,b,v,L,N)=>{let B,D;const{props:q,shapeFlag:j,transition:K,dirs:rt}=k;if(B=k.el=a(k.type,v,q&&q.is,q),j&8?f(B,k.children):j&16&&z(k.children,B,null,H,b,fa(k,v),L,N),rt&&hn(k,null,H,"created"),P(B,k,k.scopeId,L,H),q){for(const ft in q)ft!=="value"&&!dr(ft)&&s(B,ft,null,q[ft],v,k.children,H,b,dt);"value"in q&&s(B,"value",null,q.value,v),(D=q.onVnodeBeforeMount)&&Ze(D,H,k)}rt&&hn(k,null,H,"beforeMount");const ot=ld(b,K);ot&&K.beforeEnter(B),i(B,x,F),((D=q&&q.onVnodeMounted)||ot||rt)&&Oe(()=>{D&&Ze(D,H,k),ot&&K.enter(B),rt&&hn(k,null,H,"mounted")},b)},P=(k,x,F,H,b)=>{if(F&&d(k,F),H)for(let v=0;v<H.length;v++)d(k,H[v]);if(b){let v=b.subTree;if(x===v){const L=b.vnode;P(k,L,L.scopeId,L.slotScopeIds,b.parent)}}},z=(k,x,F,H,b,v,L,N,B=0)=>{for(let D=B;D<k.length;D++){const q=k[D]=N?$n(k[D]):Je(k[D]);g(null,q,x,F,H,b,v,L,N)}},T=(k,x,F,H,b,v,L)=>{const N=x.el=k.el;let{patchFlag:B,dynamicChildren:D,dirs:q}=x;B|=k.patchFlag&16;const j=k.props||ie,K=x.props||ie;let rt;if(F&&mi(F,!1),(rt=K.onVnodeBeforeUpdate)&&Ze(rt,F,x,k),q&&hn(x,k,F,"beforeUpdate"),F&&mi(F,!0),D?w(k.dynamicChildren,D,N,F,H,fa(x,b),v):L||W(k,x,N,null,F,H,fa(x,b),v,!1),B>0){if(B&16)G(N,x,j,K,F,H,b);else if(B&2&&j.class!==K.class&&s(N,"class",null,K.class,b),B&4&&s(N,"style",j.style,K.style,b),B&8){const ot=x.dynamicProps;for(let ft=0;ft<ot.length;ft++){const _t=ot[ft],mt=j[_t],xt=K[_t];(xt!==mt||_t==="value")&&s(N,_t,mt,xt,b,k.children,F,H,dt)}}B&1&&k.children!==x.children&&f(N,x.children)}else!L&&D==null&&G(N,x,j,K,F,H,b);((rt=K.onVnodeUpdated)||q)&&Oe(()=>{rt&&Ze(rt,F,x,k),q&&hn(x,k,F,"updated")},H)},w=(k,x,F,H,b,v,L)=>{for(let N=0;N<x.length;N++){const B=k[N],D=x[N],q=B.el&&(B.type===je||!Zn(B,D)||B.shapeFlag&70)?u(B.el):F;g(B,D,q,null,H,b,v,L,!0)}},G=(k,x,F,H,b,v,L)=>{if(F!==H){if(F!==ie)for(const N in F)!dr(N)&&!(N in H)&&s(k,N,F[N],null,L,x.children,b,v,dt);for(const N in H){if(dr(N))continue;const B=H[N],D=F[N];B!==D&&N!=="value"&&s(k,N,D,B,L,x.children,b,v,dt)}"value"in H&&s(k,"value",F.value,H.value,L)}},I=(k,x,F,H,b,v,L,N,B)=>{const D=x.el=k?k.el:o(""),q=x.anchor=k?k.anchor:o("");let{patchFlag:j,dynamicChildren:K,slotScopeIds:rt}=x;rt&&(N=N?N.concat(rt):rt),k==null?(i(D,F,H),i(q,F,H),z(x.children||[],F,q,b,v,L,N,B)):j>0&&j&64&&K&&k.dynamicChildren?(w(k.dynamicChildren,K,F,b,v,L,N),(x.key!=null||b&&x===b.subTree)&&cd(k,x,!0)):W(k,x,F,q,b,v,L,N,B)},U=(k,x,F,H,b,v,L,N,B)=>{x.slotScopeIds=N,k==null?x.shapeFlag&512?b.ctx.activate(x,F,H,L,B):M(x,F,H,b,v,L,B):V(k,x,B)},M=(k,x,F,H,b,v,L)=>{const N=k.component=Pg(k,H,b);if(Jl(k)&&(N.ctx.renderer=Tt),Lg(N),N.asyncDep){if(b&&b.registerDep(N,Y),!k.el){const B=N.subTree=Qt(fn);p(null,B,x,F)}}else Y(N,k,x,F,b,v,L)},V=(k,x,F)=>{const H=x.component=k.component;if(Fm(k,x,F))if(H.asyncDep&&!H.asyncResolved){X(H,x,F);return}else H.next=x,Lm(H.update),H.effect.dirty=!0,H.update();else x.el=k.el,H.vnode=x},Y=(k,x,F,H,b,v,L)=>{const N=()=>{if(k.isMounted){let{next:q,bu:j,u:K,parent:rt,vnode:ot}=k;{const It=ud(k);if(It){q&&(q.el=ot.el,X(k,q,L)),It.asyncDep.then(()=>{k.isUnmounted||N()});return}}let ft=q,_t;mi(k,!1),q?(q.el=ot.el,X(k,q,L)):q=ot,j&&oo(j),(_t=q.props&&q.props.onVnodeBeforeUpdate)&&Ze(_t,rt,q,ot),mi(k,!0);const mt=la(k),xt=k.subTree;k.subTree=mt,g(xt,mt,u(xt.el),pt(xt),k,b,v),q.el=mt.el,ft===null&&Yl(k,mt.el),K&&Oe(K,b),(_t=q.props&&q.props.onVnodeUpdated)&&Oe(()=>Ze(_t,rt,q,ot),b)}else{let q;const{el:j,props:K}=x,{bm:rt,m:ot,parent:ft}=k,_t=gr(x);if(mi(k,!1),rt&&oo(rt),!_t&&(q=K&&K.onVnodeBeforeMount)&&Ze(q,ft,x),mi(k,!0),j&&Pt){const mt=()=>{k.subTree=la(k),Pt(j,k.subTree,k,b,null)};_t?x.type.__asyncLoader().then(()=>!k.isUnmounted&&mt()):mt()}else{const mt=k.subTree=la(k);g(null,mt,F,H,k,b,v),x.el=mt.el}if(ot&&Oe(ot,b),!_t&&(q=K&&K.onVnodeMounted)){const mt=x;Oe(()=>Ze(q,ft,mt),b)}(x.shapeFlag&256||ft&&gr(ft.vnode)&&ft.vnode.shapeFlag&256)&&k.a&&Oe(k.a,b),k.isMounted=!0,x=F=H=null}},B=k.effect=new zl(N,tn,()=>Go(D),k.scope),D=k.update=()=>{B.dirty&&B.run()};D.id=k.uid,mi(k,!0),D()},X=(k,x,F)=>{x.component=k;const H=k.vnode.props;k.vnode=x,k.next=null,mg(k,x.props,H,F),vg(k,x.children,F),ui(),Nc(k),fi()},W=(k,x,F,H,b,v,L,N,B=!1)=>{const D=k&&k.children,q=k?k.shapeFlag:0,j=x.children,{patchFlag:K,shapeFlag:rt}=x;if(K>0){if(K&128){lt(D,j,F,H,b,v,L,N,B);return}else if(K&256){Q(D,j,F,H,b,v,L,N,B);return}}rt&8?(q&16&&dt(D,b,v),j!==D&&f(F,j)):q&16?rt&16?lt(D,j,F,H,b,v,L,N,B):dt(D,b,v,!0):(q&8&&f(F,""),rt&16&&z(j,F,H,b,v,L,N,B))},Q=(k,x,F,H,b,v,L,N,B)=>{k=k||fr,x=x||fr;const D=k.length,q=x.length,j=Math.min(D,q);let K;for(K=0;K<j;K++){const rt=x[K]=B?$n(x[K]):Je(x[K]);g(k[K],rt,F,null,b,v,L,N,B)}D>q?dt(k,b,v,!0,!1,j):z(x,F,H,b,v,L,N,B,j)},lt=(k,x,F,H,b,v,L,N,B)=>{let D=0;const q=x.length;let j=k.length-1,K=q-1;for(;D<=j&&D<=K;){const rt=k[D],ot=x[D]=B?$n(x[D]):Je(x[D]);if(Zn(rt,ot))g(rt,ot,F,null,b,v,L,N,B);else break;D++}for(;D<=j&&D<=K;){const rt=k[j],ot=x[K]=B?$n(x[K]):Je(x[K]);if(Zn(rt,ot))g(rt,ot,F,null,b,v,L,N,B);else break;j--,K--}if(D>j){if(D<=K){const rt=K+1,ot=rt<q?x[rt].el:H;for(;D<=K;)g(null,x[D]=B?$n(x[D]):Je(x[D]),F,ot,b,v,L,N,B),D++}}else if(D>K)for(;D<=j;)Z(k[D],b,v,!0),D++;else{const rt=D,ot=D,ft=new Map;for(D=ot;D<=K;D++){const Rt=x[D]=B?$n(x[D]):Je(x[D]);Rt.key!=null&&ft.set(Rt.key,D)}let _t,mt=0;const xt=K-ot+1;let It=!1,At=0;const Ft=new Array(xt);for(D=0;D<xt;D++)Ft[D]=0;for(D=rt;D<=j;D++){const Rt=k[D];if(mt>=xt){Z(Rt,b,v,!0);continue}let wt;if(Rt.key!=null)wt=ft.get(Rt.key);else for(_t=ot;_t<=K;_t++)if(Ft[_t-ot]===0&&Zn(Rt,x[_t])){wt=_t;break}wt===void 0?Z(Rt,b,v,!0):(Ft[wt-ot]=D+1,wt>=At?At=wt:It=!0,g(Rt,x[wt],F,null,b,v,L,N,B),mt++)}const Ht=It?Eg(Ft):fr;for(_t=Ht.length-1,D=xt-1;D>=0;D--){const Rt=ot+D,wt=x[Rt],A=Rt+1<q?x[Rt+1].el:H;Ft[D]===0?g(null,wt,F,A,b,v,L,N,B):It&&(_t<0||D!==Ht[_t]?$(wt,F,A,2):_t--)}}},$=(k,x,F,H,b=null)=>{const{el:v,type:L,transition:N,children:B,shapeFlag:D}=k;if(D&6){$(k.component.subTree,x,F,H);return}if(D&128){k.suspense.move(x,F,H);return}if(D&64){L.move(k,x,F,Tt);return}if(L===je){i(v,x,F);for(let j=0;j<B.length;j++)$(B[j],x,F,H);i(k.anchor,x,F);return}if(L===lo){y(k,x,F);return}if(H!==2&&D&1&&N)if(H===0)N.beforeEnter(v),i(v,x,F),Oe(()=>N.enter(v),b);else{const{leave:j,delayLeave:K,afterLeave:rt}=N,ot=()=>i(v,x,F),ft=()=>{j(v,()=>{ot(),rt&&rt()})};K?K(v,ot,ft):ft()}else i(v,x,F)},Z=(k,x,F,H=!1,b=!1)=>{const{type:v,props:L,ref:N,children:B,dynamicChildren:D,shapeFlag:q,patchFlag:j,dirs:K}=k;if(N!=null&&bo(N,null,F,k,!0),q&256){x.ctx.deactivate(k);return}const rt=q&1&&K,ot=!gr(k);let ft;if(ot&&(ft=L&&L.onVnodeBeforeUnmount)&&Ze(ft,x,k),q&6)it(k.component,F,H);else{if(q&128){k.suspense.unmount(F,H);return}rt&&hn(k,null,x,"beforeUnmount"),q&64?k.type.remove(k,x,F,b,Tt,H):D&&(v!==je||j>0&&j&64)?dt(D,x,F,!1,!0):(v===je&&j&384||!b&&q&16)&&dt(B,x,F),H&&gt(k)}(ot&&(ft=L&&L.onVnodeUnmounted)||rt)&&Oe(()=>{ft&&Ze(ft,x,k),rt&&hn(k,null,x,"unmounted")},F)},gt=k=>{const{type:x,el:F,anchor:H,transition:b}=k;if(x===je){J(F,H);return}if(x===lo){E(k);return}const v=()=>{r(F),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(k.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:N}=b,B=()=>L(F,v);N?N(k.el,v,B):B()}else v()},J=(k,x)=>{let F;for(;k!==x;)F=h(k),r(k),k=F;r(x)},it=(k,x,F)=>{const{bum:H,scope:b,update:v,subTree:L,um:N}=k;H&&oo(H),b.stop(),v&&(v.active=!1,Z(L,k,x,F)),N&&Oe(N,x),Oe(()=>{k.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},dt=(k,x,F,H=!1,b=!1,v=0)=>{for(let L=v;L<k.length;L++)Z(k[L],x,F,H,b)},pt=k=>k.shapeFlag&6?pt(k.component.subTree):k.shapeFlag&128?k.suspense.next():h(k.anchor||k.el);let yt=!1;const bt=(k,x,F)=>{k==null?x._vnode&&Z(x._vnode,null,null,!0):g(x._vnode||null,k,x,null,null,null,F),yt||(yt=!0,Nc(),vo(),yt=!1),x._vnode=k},Tt={p:g,um:Z,m:$,r:gt,mt:M,mc:z,pc:W,pbc:w,n:pt,o:n};let tt,Pt;return t&&([tt,Pt]=t(Tt)),{render:bt,hydrate:tt,createApp:dg(bt,tt)}}function fa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function mi({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function ld(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function cd(n,t,e=!1){const i=n.children,r=t.children;if(Lt(i)&&Lt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=$n(r[s]),o.el=a.el),e||cd(a,o)),o.type===wr&&(o.el=a.el)}}function Eg(n){const t=n.slice(),e=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,a=e.length-1;s<a;)o=s+a>>1,n[e[o]]<c?s=o+1:a=o;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,a=e[s-1];s-- >0;)e[s]=a,a=t[a];return e}function ud(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ud(t)}const wg=n=>n.__isTeleport,je=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),lo=Symbol.for("v-stc"),Yr=[];let en=null;function me(n=!1){Yr.push(en=n?null:[])}function fd(){Yr.pop(),en=Yr[Yr.length-1]||null}let Tr=1;function $c(n){Tr+=n}function hd(n){return n.dynamicChildren=Tr>0?en||fr:null,fd(),Tr>0&&en&&en.push(n),n}function ai(n,t,e,i,r,s){return hd(ne(n,t,e,i,r,s,!0))}function gn(n,t,e,i,r){return hd(Qt(n,t,e,i,r,!0))}function ns(n){return n?n.__v_isVNode===!0:!1}function Zn(n,t){return n.type===t.type&&n.key===t.key}const dd=({key:n})=>n??null,co=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ce(n)||we(n)||Ut(n)?{i:pe,r:n,k:t,f:!!e}:n:null);function ne(n,t=null,e=null,i=0,r=null,s=n===je?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&dd(t),ref:t&&co(t),scopeId:jo,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pe};return o?(ic(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ce(e)?8:16),Tr>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const Qt=Tg;function Tg(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===Hh)&&(n=fn),ns(n)){const o=Ar(n,t,!0);return e&&ic(o,e),Tr>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag|=-2,o}if(Og(n)&&(n=n.__vccOpts),t){t=pd(t);let{class:o,style:l}=t;o&&!ce(o)&&(t.class=zi(o)),te(l)&&(Lh(l)&&!Lt(l)&&(l=Se({},l)),t.style=ls(l))}const a=ce(n)?1:Bm(n)?128:wg(n)?64:te(n)?4:Ut(n)?2:0;return ne(n,t,e,i,r,a,s,!0)}function pd(n){return n?Lh(n)||ed(n)?Se({},n):n:null}function Ar(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=t?Ag(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&dd(o),ref:t&&t.ref?e&&r?Lt(r)?r.concat(co(t)):[r,co(t)]:co(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==je?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ar(n.ssContent),ssFallback:n.ssFallback&&Ar(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function md(n=" ",t=0){return Qt(wr,null,n,t)}function gd(n="",t=!1){return t?(me(),gn(fn,null,n)):Qt(fn,null,n)}function Je(n){return n==null||typeof n=="boolean"?Qt(fn):Lt(n)?Qt(je,null,n.slice()):typeof n=="object"?$n(n):Qt(wr,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ar(n)}function ic(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Lt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),ic(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!ed(t)?t._ctx=pe:r===3&&pe&&(pe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ut(t)?(t={default:t,_ctx:pe},e=32):(t=String(t),i&64?(e=16,t=[md(t)]):e=8);n.children=t,n.shapeFlag|=e}function Ag(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=zi([t.class,i.class]));else if(r==="style")t.style=ls([t.style,i.style]);else if(os(r)){const s=t[r],a=i[r];a&&s!==a&&!(Lt(s)&&s.includes(a))&&(t[r]=s?[].concat(s,a):a)}else r!==""&&(t[r]=i[r])}return t}function Ze(n,t,e,i=null){un(n,t,7,[e,i])}const Rg=Kh();let Cg=0;function Pg(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Rg,s={uid:Cg++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:id(i,r),emitsOptions:Bh(i,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Dm.bind(null,s),n.ce&&n.ce(s),s}let ge=null;const _d=()=>ge||pe;let So,dl;{const n=hh(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};So=t("__VUE_INSTANCE_SETTERS__",e=>ge=e),dl=t("__VUE_SSR_SETTERS__",e=>cs=e)}const Fi=n=>{const t=ge;return So(n),n.scope.on(),()=>{n.scope.off(),So(t)}},pl=()=>{ge&&ge.scope.off(),So(null)};function vd(n){return n.vnode.shapeFlag&4}let cs=!1;function Lg(n,t=!1){t&&dl(t);const{props:e,children:i}=n.vnode,r=vd(n);pg(n,e,r,t),_g(n,i);const s=r?Ig(n,t):void 0;return t&&dl(!1),s}function Ig(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sg);const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?Ug(n):null,s=Fi(n);ui();const a=ei(i,n,0,[n.props,r]);if(fi(),s(),kl(a)){if(a.then(pl,pl),t)return a.then(o=>{ml(n,o,t)}).catch(o=>{Dr(o,n,0)});n.asyncDep=a}else ml(n,a,t)}else xd(n,t)}function ml(n,t,e){Ut(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:te(t)&&(n.setupState=Nh(t)),xd(n,e)}let Yc;function xd(n,t,e){const i=n.type;if(!n.render){if(!t&&Yc&&!i.render){const r=i.template||ec(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Se(Se({isCustomElement:s,delimiters:o},a),l);i.render=Yc(r,c)}}n.render=i.render||tn}{const r=Fi(n);ui();try{ag(n)}finally{fi(),r()}}}const Dg={get(n,t){return Be(n,"get",""),n[t]}};function Ug(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Dg),slots:n.slots,emit:n.emit,expose:t}}function $o(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Nh(bm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in $r)return $r[e](n)},has(t,e){return e in t||e in $r}}))}function Ng(n,t=!0){return Ut(n)?n.displayName||n.name:n.name||t&&n.__name}function Og(n){return Ut(n)&&"__vccOpts"in n}const rc=(n,t)=>Sm(n,t,cs);function Fg(n,t,e){const i=arguments.length;return i===2?te(t)&&!Lt(t)?ns(t)?Qt(n,null,[t]):Qt(n,t):Qt(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ns(e)&&(e=[e]),Qt(n,t,e))}const yd="3.4.24";/**
* @vue/runtime-dom v3.4.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kg="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,Kc=Yn&&Yn.createElement("template"),zg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Yn.createElementNS(kg,n):t==="mathml"?Yn.createElementNS(Bg,n):Yn.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const a=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Kc.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const o=Kc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Hg=Symbol("_vtc");function Vg(n,t,e){const i=n[Hg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Zc=Symbol("_vod"),Gg=Symbol("_vsh"),Wg=Symbol(""),jg=/(^|;)\s*display\s*:/;function Xg(n,t,e){const i=n.style,r=ce(e);let s=!1;if(e&&!r){if(t)if(ce(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&uo(i,o,"")}else for(const a in t)e[a]==null&&uo(i,a,"");for(const a in e)a==="display"&&(s=!0),uo(i,a,e[a])}else if(r){if(t!==e){const a=i[Wg];a&&(e+=";"+a),i.cssText=e,s=jg.test(e)}}else t&&n.removeAttribute("style");Zc in n&&(n[Zc]=s?i.display:"",n[Gg]&&(i.display="none"))}const Jc=/\s*!important$/;function uo(n,t,e){if(Lt(e))e.forEach(i=>uo(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=qg(n,t);Jc.test(e)?n.setProperty(Ir(i),e.replace(Jc,""),"important"):n[i]=e}}const Qc=["Webkit","Moz","ms"],ha={};function qg(n,t){const e=ha[t];if(e)return e;let i=yn(t);if(i!=="filter"&&i in n)return ha[t]=i;i=zo(i);for(let r=0;r<Qc.length;r++){const s=Qc[r]+i;if(s in n)return ha[t]=s}return t}const tu="http://www.w3.org/1999/xlink";function $g(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(tu,t.slice(6,t.length)):n.setAttributeNS(tu,t,e);else{const s=Kp(t);e==null||s&&!dh(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function Yg(n,t,e,i,r,s,a){if(t==="innerHTML"||t==="textContent"){i&&a(i,r,s),n[t]=e??"";return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?n.getAttribute("value")||"":n.value,f=e??"";(c!==f||!("_value"in n))&&(n.value=f),e==null&&n.removeAttribute(t),n._value=e;return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=dh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function Ai(n,t,e,i){n.addEventListener(t,e,i)}function Kg(n,t,e,i){n.removeEventListener(t,e,i)}const eu=Symbol("_vei");function Zg(n,t,e,i,r=null){const s=n[eu]||(n[eu]={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=Jg(t);if(i){const c=s[t]=e_(i,r);Ai(n,o,c,l)}else a&&(Kg(n,o,a,l),s[t]=void 0)}}const nu=/(?:Once|Passive|Capture)$/;function Jg(n){let t;if(nu.test(n)){t={};let i;for(;i=n.match(nu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ir(n.slice(2)),t]}let da=0;const Qg=Promise.resolve(),t_=()=>da||(Qg.then(()=>da=0),da=Date.now());function e_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;un(n_(i,e.value),t,5,[i])};return e.value=n,e.attached=t_(),e}function n_(n,t){if(Lt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const iu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,i_=(n,t,e,i,r,s,a,o,l)=>{const c=r==="svg";t==="class"?Vg(n,i,c):t==="style"?Xg(n,e,i):os(t)?Ol(t)||Zg(n,t,e,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):r_(n,t,i,c))?Yg(n,t,i,s,a,o,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),$g(n,t,i,c))};function r_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&iu(t)&&Ut(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return iu(t)&&ce(e)?!1:t in n}const Mo=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Lt(t)?e=>oo(t,e):t};function s_(n){n.target.composing=!0}function ru(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xr=Symbol("_assign"),pa={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[xr]=Mo(r);const s=i||r.props&&r.props.type==="number";Ai(n,t?"change":"input",a=>{if(a.target.composing)return;let o=n.value;e&&(o=o.trim()),s&&(o=nl(o)),n[xr](o)}),e&&Ai(n,"change",()=>{n.value=n.value.trim()}),t||(Ai(n,"compositionstart",s_),Ai(n,"compositionend",ru),Ai(n,"change",ru))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:r}},s){if(n[xr]=Mo(s),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?nl(n.value):n.value,o=t??"";a!==o&&(document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===o)||(n.value=o))}},o_={deep:!0,created(n,t,e){n[xr]=Mo(e),Ai(n,"change",()=>{const i=n._modelValue,r=a_(n),s=n.checked,a=n[xr];if(Lt(i)){const o=ph(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(ko(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(bd(n,s))})},mounted:su,beforeUpdate(n,t,e){n[xr]=Mo(e),su(n,t,e)}};function su(n,{value:t,oldValue:e},i){n._modelValue=t,Lt(t)?n.checked=ph(t,i.props.value)>-1:ko(t)?n.checked=t.has(i.props.value):t!==e&&(n.checked=Ho(t,bd(n,!0)))}function a_(n){return"_value"in n?n._value:n.value}function bd(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Sd=Se({patchProp:i_},zg);let Kr,ou=!1;function l_(){return Kr||(Kr=Sg(Sd))}function c_(){return Kr=ou?Kr:Mg(Sd),ou=!0,Kr}const u_=(...n)=>{const t=l_().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Ed(i);if(!r)return;const s=t._component;!Ut(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=e(r,!1,Md(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t},f_=(...n)=>{const t=c_().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Ed(i);if(r)return e(r,!0,Md(r))},t};function Md(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ed(n){return ce(n)?document.querySelector(n):n}const h_=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,d_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,p_=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function m_(n,t){if(n==="__proto__"||n==="constructor"&&t&&typeof t=="object"&&"prototype"in t){g_(n);return}return t}function g_(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function Eo(n,t={}){if(typeof n!="string")return n;const e=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return e.slice(1,-1);if(e.length<=9){const i=e.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!p_.test(n)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(h_.test(n)||d_.test(n)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,m_)}return JSON.parse(n)}catch(i){if(t.strict)throw i;return n}}const __=/#/g,v_=/&/g,x_=/\//g,y_=/=/g,sc=/\+/g,b_=/%5e/gi,S_=/%60/gi,M_=/%7c/gi,E_=/%20/gi;function w_(n){return encodeURI(""+n).replace(M_,"|")}function gl(n){return w_(typeof n=="string"?n:JSON.stringify(n)).replace(sc,"%2B").replace(E_,"+").replace(__,"%23").replace(v_,"%26").replace(S_,"`").replace(b_,"^").replace(x_,"%2F")}function ma(n){return gl(n).replace(y_,"%3D")}function wo(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function T_(n){return wo(n.replace(sc," "))}function A_(n){return wo(n.replace(sc," "))}function wd(n=""){const t={};n[0]==="?"&&(n=n.slice(1));for(const e of n.split("&")){const i=e.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=T_(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=A_(i[2]||"");t[r]===void 0?t[r]=s:Array.isArray(t[r])?t[r].push(s):t[r]=[t[r],s]}return t}function R_(n,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(e=>`${ma(n)}=${gl(e)}`).join("&"):`${ma(n)}=${gl(t)}`:ma(n)}function Td(n){return Object.keys(n).filter(t=>n[t]!==void 0).map(t=>R_(t,n[t])).filter(Boolean).join("&")}const C_=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,P_=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,L_=/^([/\\]\s*){2,}[^/\\]/,I_=/^[\s\0]*(blob|data|javascript|vbscript):$/i,D_=/\/$|\/\?|\/#/,U_=/^\.?\//;function Ur(n,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?C_.test(n):P_.test(n)||(t.acceptRelative?L_.test(n):!1)}function N_(n){return!!n&&I_.test(n)}function _l(n="",t){return t?D_.test(n):n.endsWith("/")}function oc(n="",t){if(!t)return(_l(n)?n.slice(0,-1):n)||"/";if(!_l(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");r>=0&&(e=n.slice(0,r),i=n.slice(r));const[s,...a]=e.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(a.length>0?`?${a.join("?")}`:"")+i}function vl(n="",t){if(!t)return n.endsWith("/")?n:n+"/";if(_l(n,!0))return n||"/";let e=n,i="";const r=n.indexOf("#");if(r>=0&&(e=n.slice(0,r),i=n.slice(r),!e))return i;const[s,...a]=e.split("?");return s+"/"+(a.length>0?`?${a.join("?")}`:"")+i}function O_(n=""){return n.startsWith("/")}function au(n=""){return O_(n)?n:"/"+n}function F_(n,t){if(Rd(t)||Ur(n))return n;const e=oc(t);return n.startsWith(e)?n:Yo(e,n)}function k_(n,t){if(Rd(t))return n;const e=oc(t);if(!n.startsWith(e))return n;const i=n.slice(e.length);return i[0]==="/"?i:"/"+i}function Ad(n,t){const e=Ko(n),i={...wd(e.search),...t};return e.search=Td(i),Ld(e)}function Rd(n){return!n||n==="/"}function B_(n){return n&&n!=="/"}function Yo(n,...t){let e=n||"";for(const i of t.filter(r=>B_(r)))if(e){const r=i.replace(U_,"");e=vl(e)+r}else e=i;return e}function Cd(...n){var a,o,l,c;const t=/\/(?!\/)/,e=n.filter(Boolean),i=[];let r=0;for(const f of e)if(!(!f||f==="/")){for(const[u,h]of f.split(t).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&Ur(i[0]))continue;i.pop(),r--;continue}if(u===1&&((a=i[i.length-1])!=null&&a.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(o=e[0])!=null&&o.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=e[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(c=e[e.length-1])!=null&&c.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function z_(n,t,e={}){return e.trailingSlash||(n=vl(n),t=vl(t)),e.leadingSlash||(n=au(n),t=au(t)),e.encoding||(n=wo(n),t=wo(t)),n===t}const Pd=Symbol.for("ufo:protocolRelative");function Ko(n="",t){const e=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(e){const[,u,h=""]=e;return{protocol:u.toLowerCase(),pathname:h,href:u+h,auth:"",host:"",search:"",hash:""}}if(!Ur(n,{acceptRelative:!0}))return lu(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,a="",o=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:f}=lu(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:a,pathname:l,search:c,hash:f,[Pd]:!i}}function lu(n=""){const[t="",e="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:e,hash:i}}function Ld(n){const t=n.pathname||"",e=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[Pd]?(n.protocol||"")+"//":"")+r+s+t+e+i}class H_ extends Error{constructor(t,e){super(t,e),this.name="FetchError",e!=null&&e.cause&&!this.cause&&(this.cause=e.cause)}}function V_(n){var l,c,f,u,h;const t=((l=n.error)==null?void 0:l.message)||((c=n.error)==null?void 0:c.toString())||"",e=((f=n.request)==null?void 0:f.method)||((u=n.options)==null?void 0:u.method)||"GET",i=((h=n.request)==null?void 0:h.url)||String(n.request)||"/",r=`[${e}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",a=`${r}: ${s}${t?` ${t}`:""}`,o=new H_(a,n.error?{cause:n.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(o,d,{get(){return n[d]}});for(const[d,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(o,d,{get(){return n.response&&n.response[_]}});return o}const G_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function cu(n="GET"){return G_.has(n.toUpperCase())}function W_(n){if(n===void 0)return!1;const t=typeof n;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const j_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),X_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function q_(n=""){if(!n)return"json";const t=n.split(";").shift()||"";return X_.test(t)?"json":j_.has(t)||t.startsWith("text/")?"text":"blob"}function $_(n,t,e=globalThis.Headers){const i={...t,...n};if(t!=null&&t.params&&(n!=null&&n.params)&&(i.params={...t==null?void 0:t.params,...n==null?void 0:n.params}),t!=null&&t.query&&(n!=null&&n.query)&&(i.query={...t==null?void 0:t.query,...n==null?void 0:n.query}),t!=null&&t.headers&&(n!=null&&n.headers)){i.headers=new e((t==null?void 0:t.headers)||{});for(const[r,s]of new e((n==null?void 0:n.headers)||{}))i.headers.set(r,s)}return i}const Y_=new Set([408,409,425,429,500,502,503,504]),K_=new Set([101,204,205,304]);function Id(n={}){const{fetch:t=globalThis.fetch,Headers:e=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(o){const l=o.error&&o.error.name==="AbortError"&&!o.options.timeout||!1;if(o.options.retry!==!1&&!l){let f;typeof o.options.retry=="number"?f=o.options.retry:f=cu(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(f>0&&(Array.isArray(o.options.retryStatusCodes)?o.options.retryStatusCodes.includes(u):Y_.has(u))){const h=o.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(o.request,{...o.options,retry:f-1})}}const c=V_(o);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){var d;const f={request:l,options:$_(c,n.defaults,e),response:void 0,error:void 0};f.options.method=(d=f.options.method)==null?void 0:d.toUpperCase(),f.options.onRequest&&await f.options.onRequest(f),typeof f.request=="string"&&(f.options.baseURL&&(f.request=F_(f.request,f.options.baseURL)),(f.options.query||f.options.params)&&(f.request=Ad(f.request,{...f.options.params,...f.options.query}))),f.options.body&&cu(f.options.method)&&(W_(f.options.body)?(f.options.body=typeof f.options.body=="string"?f.options.body:JSON.stringify(f.options.body),f.options.headers=new e(f.options.headers||{}),f.options.headers.has("content-type")||f.options.headers.set("content-type","application/json"),f.options.headers.has("accept")||f.options.headers.set("accept","application/json")):("pipeTo"in f.options.body&&typeof f.options.body.pipeTo=="function"||typeof f.options.body.pipe=="function")&&("duplex"in f.options||(f.options.duplex="half")));let u;if(!f.options.signal&&f.options.timeout){const _=new i;u=setTimeout(()=>_.abort(),f.options.timeout),f.options.signal=_.signal}try{f.response=await t(f.request,f.options)}catch(_){return f.error=_,f.options.onRequestError&&await f.options.onRequestError(f),await r(f)}finally{u&&clearTimeout(u)}if(f.response.body&&!K_.has(f.response.status)&&f.options.method!=="HEAD"){const _=(f.options.parseResponse?"json":f.options.responseType)||q_(f.response.headers.get("content-type")||"");switch(_){case"json":{const g=await f.response.text(),m=f.options.parseResponse||Eo;f.response._data=m(g);break}case"stream":{f.response._data=f.response.body;break}default:f.response._data=await f.response[_]()}}return f.options.onResponse&&await f.options.onResponse(f),!f.options.ignoreResponseError&&f.response.status>=400&&f.response.status<600?(f.options.onResponseError&&await f.options.onResponseError(f),await r(f)):f.response},a=async function(l,c){return(await s(l,c))._data};return a.raw=s,a.native=(...o)=>t(...o),a.create=(o={})=>Id({...n,defaults:{...n.defaults,...o}}),a}const ac=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Z_=ac.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),J_=ac.Headers,Q_=ac.AbortController,t0=Id({fetch:Z_,Headers:J_,AbortController:Q_}),e0=t0,n0=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},To=n0().app,i0=()=>To.baseURL,r0=()=>To.buildAssetsDir,lc=(...n)=>Cd(Dd(),r0(),...n),Dd=(...n)=>{const t=To.cdnURL||To.baseURL;return n.length?Cd(t,...n):t};globalThis.__buildAssetsURL=lc,globalThis.__publicAssetsURL=Dd;globalThis.$fetch||(globalThis.$fetch=e0.create({baseURL:i0()}));function xl(n,t={},e){for(const i in n){const r=n[i],s=e?`${e}:${i}`:i;typeof r=="object"&&r!==null?xl(r,t,s):typeof r=="function"&&(t[s]=r)}return t}const s0={run:n=>n()},o0=()=>s0,Ud=typeof console.createTask<"u"?console.createTask:o0;function a0(n,t){const e=t.shift(),i=Ud(e);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...t))),Promise.resolve())}function l0(n,t){const e=t.shift(),i=Ud(e);return Promise.all(n.map(r=>i.run(()=>r(...t))))}function ga(n,t){for(const e of[...n])e(t)}class c0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,i={}){if(!t||typeof e!="function")return()=>{};const r=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!i.allowDeprecated){let a=s.message;a||(a=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,e(...s));return i=this.hook(t,r),i}removeHook(t,e){if(this._hooks[t]){const i=this._hooks[t].indexOf(e);i!==-1&&this._hooks[t].splice(i,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const i=this._hooks[t]||[];delete this._hooks[t];for(const r of i)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=xl(t),i=Object.keys(e).map(r=>this.hook(r,e[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(t){const e=xl(t);for(const i in e)this.removeHook(i,e[i])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(a0,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(l0,t,...e)}callHookWith(t,e,...i){const r=this._before||this._after?{name:e,args:i,context:{}}:void 0;this._before&&ga(this._before,r);const s=t(e in this._hooks?[...this._hooks[e]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&ga(this._after,r)}):(this._after&&r&&ga(this._after,r),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}}function Nd(){return new c0}function u0(n={}){let t,e=!1;const i=a=>{if(t&&t!==a)throw new Error("Context conflict")};let r;if(n.asyncContext){const a=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?r=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&t===void 0){const a=r.getStore();if(a!==void 0)return a}return t};return{use:()=>{const a=s();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>s(),set:(a,o)=>{o||i(a),t=a,e=!0},unset:()=>{t=void 0,e=!1},call:(a,o)=>{i(a),t=a;try{return r?r.run(a,o):o()}finally{e||(t=void 0)}},async callAsync(a,o){t=a;const l=()=>{t=a},c=()=>t===a?l:void 0;yl.add(c);try{const f=r?r.run(a,o):o();return e||(t=void 0),await f}finally{yl.delete(c)}}}}function f0(n={}){const t={};return{get(e,i={}){return t[e]||(t[e]=u0({...n,...i})),t[e],t[e]}}}const Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},uu="__unctx__",h0=Ao[uu]||(Ao[uu]=f0()),d0=(n,t={})=>h0.get(n,t),fu="__unctx_async_handlers__",yl=Ao[fu]||(Ao[fu]=new Set);function Od(n){const t=[];for(const r of yl){const s=r();s&&t.push(s)}const e=()=>{for(const r of t)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw e(),r})),[i,e]}const Fd=d0("nuxt-app",{asyncContext:!1}),p0="__nuxt_plugin";function m0(n){let t=0;const e={_scope:Jp(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.11.2"},get vue(){return e.vueApp.version}},payload:oi({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>e._scope.run(()=>v0(e,r)),isHydrating:!0,deferHydration(){if(!e.isHydrating)return()=>{};t++;let r=!1;return()=>{if(!r&&(r=!0,t--,t===0))return e.isHydrating=!1,e.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...n};e.hooks=Nd(),e.hook=e.hooks.hook,e.callHook=e.hooks.callHook,e.provide=(r,s)=>{const a="$"+r;Ts(e,a,s),Ts(e.vueApp.config.globalProperties,a,s)},Ts(e.vueApp,"$nuxt",e),Ts(e.vueApp.config.globalProperties,"$nuxt",e);{window.addEventListener("nuxt.preloadError",s=>{e.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||Me;const r=e.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});e.hook("app:mounted",r)}const i=e.payload.config;return e.provide("config",i),e}async function g0(n,t){if(t.hooks&&n.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:e}=await n.runWithContext(()=>t(n))||{};if(e&&typeof e=="object")for(const i in e)n.provide(i,e[i])}}async function _0(n,t){const e=[],i=[],r=[],s=[];let a=0;async function o(l){var f;const c=((f=l.dependsOn)==null?void 0:f.filter(u=>t.some(h=>h._name===u)&&!e.includes(u)))??[];if(c.length>0)i.push([new Set(c),l]);else{const u=g0(n,l).then(async()=>{l._name&&(e.push(l._name),await Promise.all(i.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(a++,await o(d)))})))});l.parallel?r.push(u.catch(h=>s.push(h))):await u}}for(const l of t)await o(l);if(await Promise.all(r),a)for(let l=0;l<a;l++)await Promise.all(r);if(s.length)throw s[0]}function Hi(n){if(typeof n=="function")return n;const t=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[p0]:!0,_name:t})}function v0(n,t,e){const i=()=>t();return Fd.set(n),n.vueApp.runWithContext(i)}function x0(){var t;let n;return Jh()&&(n=(t=_d())==null?void 0:t.appContext.app.$nuxt),n=n||Fd.tryUse(),n||null}function Me(){const n=x0();if(!n)throw new Error("[nuxt] instance unavailable");return n}function Ro(n){return Me().$config}function Ts(n,t,e){Object.defineProperty(n,t,{get:()=>e})}function y0(n,t){return{ctx:{table:n},matchAll:e=>Bd(e,n)}}function kd(n){const t={};for(const e in n)t[e]=e==="dynamic"?new Map(Object.entries(n[e]).map(([i,r])=>[i,kd(r)])):new Map(Object.entries(n[e]));return t}function b0(n){return y0(kd(n))}function Bd(n,t,e){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,a]of hu(t.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(a);for(const[s,a]of hu(t.dynamic))if(n.startsWith(s+"/")){const o="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...Bd(o,a))}const r=t.static.get(n);return r&&i.push(r),i.filter(Boolean)}function hu(n){return[...n.entries()].sort((t,e)=>t[0].length-e[0].length)}function _a(n){if(n===null||typeof n!="object")return!1;const t=Object.getPrototypeOf(n);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function bl(n,t,e=".",i){if(!_a(t))return bl(n,{},e,i);const r=Object.assign({},t);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const a=n[s];a!=null&&(i&&i(r,s,a,e)||(Array.isArray(a)&&Array.isArray(r[s])?r[s]=[...a,...r[s]]:_a(a)&&_a(r[s])?r[s]=bl(a,r[s],(e?`${e}.`:"")+s.toString(),i):r[s]=a))}return r}function zd(n){return(...t)=>t.reduce((e,i)=>bl(e,i,"",n),{})}const S0=zd(),M0=zd((n,t,e)=>{if(n[t]!==void 0&&typeof e=="function")return n[t]=e(n[t]),!0});function E0(n,t){try{return t in n}catch{return!1}}var w0=Object.defineProperty,T0=(n,t,e)=>t in n?w0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ei=(n,t,e)=>(T0(n,typeof t!="symbol"?t+"":t,e),e);class Sl extends Error{constructor(t,e={}){super(t,e),Ei(this,"statusCode",500),Ei(this,"fatal",!1),Ei(this,"unhandled",!1),Ei(this,"statusMessage"),Ei(this,"data"),Ei(this,"cause"),e.cause&&!this.cause&&(this.cause=e.cause)}toJSON(){const t={message:this.message,statusCode:Ml(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Hd(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Ei(Sl,"__h3_error__",!0);function A0(n){if(typeof n=="string")return new Sl(n);if(R0(n))return n;const t=new Sl(n.message??n.statusMessage??"",{cause:n.cause||n});if(E0(n,"stack"))try{Object.defineProperty(t,"stack",{get(){return n.stack}})}catch{try{t.stack=n.stack}catch{}}if(n.data&&(t.data=n.data),n.statusCode?t.statusCode=Ml(n.statusCode,t.statusCode):n.status&&(t.statusCode=Ml(n.status,t.statusCode)),n.statusMessage?t.statusMessage=n.statusMessage:n.statusText&&(t.statusMessage=n.statusText),t.statusMessage){const e=t.statusMessage;Hd(t.statusMessage)!==e&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(t.fatal=n.fatal),n.unhandled!==void 0&&(t.unhandled=n.unhandled),t}function R0(n){var t;return((t=n==null?void 0:n.constructor)==null?void 0:t.__h3_error__)===!0}const C0=/[^\u0009\u0020-\u007E]/g;function Hd(n=""){return n.replace(C0,"")}function Ml(n,t=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?t:n}const Vd=Symbol("route"),us=()=>{var n;return(n=Me())==null?void 0:n.$router},Gd=()=>Jh()?vr(Vd,Me()._route):Me()._route;const P0=()=>{try{if(Me()._processingMiddleware)return!0}catch{return!1}return!1},L0=(n,t)=>{n||(n="/");const e=typeof n=="string"?n:Ad(n.path||"/",n.query||{})+(n.hash||"");if(t!=null&&t.open){const{target:o="_blank",windowFeatures:l={}}=t.open,c=Object.entries(l).filter(([f,u])=>u!==void 0).map(([f,u])=>`${f.toLowerCase()}=${u}`).join(", ");return open(e,o,c),Promise.resolve()}const i=(t==null?void 0:t.external)||Ur(e,{acceptRelative:!0});if(i){if(!(t!=null&&t.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const o=Ko(e).protocol;if(o&&N_(o))throw new Error(`Cannot navigate to a URL with '${o}' protocol.`)}const r=P0();if(!i&&r)return n;const s=us(),a=Me();return i?(a._scope.stop(),t!=null&&t.replace?location.replace(e):location.href=e,r?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?s.replace(n):s.push(n)},Wd="__nuxt_error",cc=()=>Am(Me().payload,"error"),I0=n=>{const t=uc(n);try{const e=Me(),i=cc();e.hooks.callHook("app:error",t),i.value=i.value||t}catch{throw t}return t},D0=async(n={})=>{const t=Me(),e=cc();t.callHook("app:error:cleared",n),n.redirect&&await us().replace(n.redirect),e.value=null},U0=n=>!!n&&typeof n=="object"&&Wd in n,uc=n=>{const t=A0(n);return Object.defineProperty(t,Wd,{value:!0,configurable:!1,writable:!1}),t},N0="modulepreload",O0=function(n,t){return n[0]==="."?new URL(n,t).href:n},du={},F0=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(o=>{if(o=O0(o,i),o in du)return;du[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":N0,l||(f.as="script",f.crossOrigin=""),f.href=o,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},pu=(...n)=>F0(...n).catch(t=>{const e=new Event("nuxt.preloadError");throw e.payload=t,window.dispatchEvent(e),t}),k0=-1,B0=-2,z0=-3,H0=-4,V0=-5,G0=-6;function W0(n,t){return j0(JSON.parse(n),t)}function j0(n,t){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,i=Array(e.length);function r(s,a=!1){if(s===k0)return;if(s===z0)return NaN;if(s===H0)return 1/0;if(s===V0)return-1/0;if(s===G0)return-0;if(a)throw new Error("Invalid input");if(s in i)return i[s];const o=e[s];if(!o||typeof o!="object")i[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const l=o[0],c=t==null?void 0:t[l];if(c)return i[s]=c(r(o[1]));switch(l){case"Date":i[s]=new Date(o[1]);break;case"Set":const f=new Set;i[s]=f;for(let d=1;d<o.length;d+=1)f.add(r(o[d]));break;case"Map":const u=new Map;i[s]=u;for(let d=1;d<o.length;d+=2)u.set(r(o[d]),r(o[d+1]));break;case"RegExp":i[s]=new RegExp(o[1],o[2]);break;case"Object":i[s]=Object(o[1]);break;case"BigInt":i[s]=BigInt(o[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<o.length;d+=2)h[o[d]]=r(o[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(o.length);i[s]=l;for(let c=0;c<o.length;c+=1){const f=o[c];f!==B0&&(l[c]=r(f))}}else{const l={};i[s]=l;for(const c in o){const f=o[c];l[c]=r(f)}}return i[s]}return r(0)}function X0(n){return Array.isArray(n)?n:[n]}const q0=["title","titleTemplate","script","style","noscript"],fo=["base","meta","link","style","script","noscript"],$0=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Y0=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],jd=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],K0=typeof window<"u";function fc(n){let t=9;for(let e=0;e<n.length;)t=Math.imul(t^n.charCodeAt(e++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function mu(n){return n._h||fc(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([t,e])=>`${t}:${String(e)}`).join(",")}`)}function Xd(n,t){const{props:e,tag:i}=n;if(Y0.includes(i))return i;if(i==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof e[s]<"u"){const a=String(e[s]);return`${i}:${s}:${a}`}return!1}function gu(n,t){return n==null?t||null:typeof n=="function"?n(t):n}async function Z0(n,t,e){const i={tag:n,props:await qd(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(n))};return jd.forEach(r=>{const s=typeof i.props[r]<"u"?i.props[r]:e[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||q0.includes(i.tag))&&(i[r==="children"?"innerHTML":r]=s),delete i.props[r])}),i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function J0(n,t){var i;const e=n==="class"?" ":";";return typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,r])=>r).map(([r,s])=>n==="style"?`${r}:${s}`:r)),(i=Array.isArray(t)?t.join(e):t)==null?void 0:i.split(e).filter(r=>r.trim()).filter(Boolean).join(e)}async function qd(n,t){for(const e of Object.keys(n)){if(["class","style"].includes(e)){n[e]=J0(e,n[e]);continue}if(n[e]instanceof Promise&&(n[e]=await n[e]),!t&&!jd.includes(e)){const i=String(n[e]),r=e.startsWith("data-");i==="true"||i===""?n[e]=r?"true":!0:n[e]||(r&&i==="false"?n[e]="false":delete n[e])}}return n}const Q0=10;async function tv(n){const t=[];return Object.entries(n.resolvedInput).filter(([e,i])=>typeof i<"u"&&$0.includes(e)).forEach(([e,i])=>{const r=X0(i);t.push(...r.map(s=>Z0(e,s,n)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((e,i)=>(e._e=n._i,n.mode&&(e._m=n.mode),e._p=(n._i<<Q0)+i,e))}const _u={base:-10,title:10},vu={critical:-80,high:-10,low:20};function Co(n){let t=100;const e=n.tagPriority;return typeof e=="number"?e:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(t=-30),n.props.charset&&(t=-20),n.props.name==="viewport"&&(t=-15)):n.tag==="link"&&n.props.rel==="preconnect"?t=20:n.tag in _u&&(t=_u[n.tag]),typeof e=="string"&&e in vu?t+vu[e]:t)}const ev=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],xu=["onload","onerror","onabort","onprogress","onloadstart"],zn="%separator";function ho(n,t,e){if(typeof n!="string"||!n.includes("%"))return n;function i(a){let o;return["s","pageTitle"].includes(a)?o=t.pageTitle:a.includes(".")?o=a.split(".").reduce((l,c)=>l&&l[c]||void 0,t):o=t[a],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const o=i(a.slice(1));typeof o=="string"&&(n=n.replace(new RegExp(`\\${a}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),n.includes(zn)&&(n.endsWith(zn)&&(n=n.slice(0,-zn.length).trim()),n.startsWith(zn)&&(n=n.slice(zn.length).trim()),n=n.replace(new RegExp(`\\${zn}\\s*\\${zn}`,"g"),zn),n=ho(n,{separator:e},e)),n}async function $d(n,t={}){var f;const e=t.document||n.resolvedOptions.document;if(!e||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const r=(await n.resolveTags()).map(u=>({tag:u,id:fo.includes(u.tag)?mu(u):u.tag,shouldRender:!0}));let s=n._dom;if(!s){s={elMap:{htmlAttrs:e.documentElement,bodyAttrs:e.body}};for(const u of["body","head"]){const h=(f=e[u])==null?void 0:f.children,d=[];for(const _ of[...h].filter(g=>fo.includes(g.tagName.toLowerCase()))){const g={tag:_.tagName.toLowerCase(),props:await qd(_.getAttributeNames().reduce((S,y)=>({...S,[y]:_.getAttribute(y)}),{})),innerHTML:_.innerHTML};let m=1,p=Xd(g);for(;p&&d.find(S=>S._d===p);)p=`${p}:${m++}`;g._d=p||void 0,d.push(g),s.elMap[_.getAttribute("data-hid")||mu(g)]=_}}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function a(u,h,d){const _=`${u}:${h}`;s.sideEffects[_]=d,delete s.pendingSideEffects[_]}function o({id:u,$el:h,tag:d}){const _=d.tag.endsWith("Attrs");s.elMap[u]=h,_||(["textContent","innerHTML"].forEach(g=>{d[g]&&d[g]!==h[g]&&(h[g]=d[g])}),a(u,"el",()=>{var g;(g=s.elMap[u])==null||g.remove(),delete s.elMap[u]}));for(const[g,m]of Object.entries(d._eventHandlers||{}))h.getAttribute(`data-${g}`)!==""&&((d.tag==="bodyAttrs"?e.defaultView:h).addEventListener(g.replace("on",""),m.bind(h)),h.setAttribute(`data-${g}`,""));Object.entries(d.props).forEach(([g,m])=>{const p=`attr:${g}`;if(g==="class")for(const S of(m||"").split(" ").filter(Boolean))_&&a(u,`${p}:${S}`,()=>h.classList.remove(S)),!h.classList.contains(S)&&h.classList.add(S);else if(g==="style")for(const S of(m||"").split(";").filter(Boolean)){const[y,...E]=S.split(":").map(C=>C.trim());a(u,`${p}:${S}:${y}`,()=>{h.style.removeProperty(y)}),h.style.setProperty(y,E.join(":"))}else h.getAttribute(g)!==m&&h.setAttribute(g,m===!0?"":String(m)),_&&a(u,p,()=>h.removeAttribute(g))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const u of r){const{tag:h,shouldRender:d,id:_}=u;if(d){if(h.tag==="title"){e.title=h.textContent;continue}u.$el=u.$el||s.elMap[_],u.$el?o(u):fo.includes(h.tag)&&l.push(u)}}for(const u of l){const h=u.tag.tagPosition||"head";u.$el=e.createElement(u.tag.tag),o(u),c[h]=c[h]||e.createDocumentFragment(),c[h].appendChild(u.$el)}for(const u of r)await n.hooks.callHook("dom:renderTag",u,e,a);c.head&&e.head.appendChild(c.head),c.bodyOpen&&e.body.insertBefore(c.bodyOpen,e.body.firstChild),c.bodyClose&&e.body.appendChild(c.bodyClose),Object.values(s.pendingSideEffects).forEach(u=>u()),n._dom=s,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function nv(n,t={}){const e=t.delayFn||(i=>setTimeout(i,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(i=>e(async()=>{await $d(n,t),delete n._domUpdatePromise,i()}))}function iv(n){return t=>{var i,r;const e=((r=(i=t.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return e&&t.push(JSON.parse(e)),{mode:"client",hooks:{"entries:updated":function(s){nv(s,n)}}}}}const rv=["templateParams","htmlAttrs","bodyAttrs"],sv={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const e=Xd(n)||(n.key?`${n.tag}:${n.key}`:!1);e&&(n._d=e)},"tags:resolve":function(n){const t={};n.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=t[r];if(s){let o=i==null?void 0:i.tagDuplicateStrategy;if(!o&&rv.includes(i.tag)&&(o="merge"),o==="merge"){const l=s.props;["class","style"].forEach(c=>{l[c]&&(i.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`):i.props[c]=l[c])}),t[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(Co(i)>Co(s))return}const a=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(fo.includes(i.tag)&&a===0){delete t[r];return}t[r]=i});const e=[];Object.values(t).forEach(i=>{const r=i._duped;delete i._duped,e.push(i),r&&e.push(...r)}),n.tags=e,n.tags=n.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},ov={mode:"server",hooks:{"tags:resolve":function(n){const t={};n.tags.filter(e=>["titleTemplate","templateParams","title"].includes(e.tag)&&e._m==="server").forEach(e=>{t[e.tag]=e.tag.startsWith("title")?e.textContent:e.props}),Object.keys(t).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},av=["script","link","bodyAttrs"],lv=n=>({hooks:{"tags:resolve":function(t){for(const e of t.tags.filter(i=>av.includes(i.tag)))Object.entries(e.props).forEach(([i,r])=>{i.startsWith("on")&&typeof r=="function"&&(n.ssr&&xu.includes(i)?e.props[i]=`this.dataset.${i}fired = true`:delete e.props[i],e._eventHandlers=e._eventHandlers||{},e._eventHandlers[i]=r)}),n.ssr&&e._eventHandlers&&(e.props.src||e.props.href)&&(e.key=e.key||fc(e.props.src||e.props.href))},"dom:renderTag":function({$el:t,tag:e}){var i,r;for(const s of Object.keys((t==null?void 0:t.dataset)||{}).filter(a=>xu.some(o=>`${o}fired`===a))){const a=s.replace("fired","");(r=(i=e._eventHandlers)==null?void 0:i[a])==null||r.call(t,new Event(a.replace("on","")))}}}}),cv=["link","style","script","noscript"],uv={hooks:{"tag:normalise":({tag:n})=>{n.key&&cv.includes(n.tag)&&(n.props["data-hid"]=n._h=fc(n.key))}}},fv={hooks:{"tags:resolve":n=>{const t=e=>{var i;return(i=n.tags.find(r=>r._d===e))==null?void 0:i._p};for(const{prefix:e,offset:i}of ev)for(const r of n.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(e))){const s=t(r.tagPriority.replace(e,""));typeof s<"u"&&(r._p=s+i)}n.tags.sort((e,i)=>e._p-i._p).sort((e,i)=>Co(e)-Co(i))}}},hv={meta:"content",link:"href",htmlAttrs:"lang"},dv=n=>({hooks:{"tags:resolve":t=>{var o;const{tags:e}=t,i=(o=e.find(l=>l.tag==="title"))==null?void 0:o.textContent,r=e.findIndex(l=>l.tag==="templateParams"),s=r!==-1?e[r].props:{},a=s.separator||"|";delete s.separator,s.pageTitle=ho(s.pageTitle||i||"",s,a);for(const l of e.filter(c=>c.processTemplateParams!==!1)){const c=hv[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=ho(l.props[c],s,a):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(f=>{typeof l[f]=="string"&&(l[f]=ho(l[f],s,a))})}n._templateParams=s,n._separator=a,t.tags=e.filter(l=>l.tag!=="templateParams")}}}),pv={hooks:{"tags:resolve":n=>{const{tags:t}=n;let e=t.findIndex(r=>r.tag==="titleTemplate");const i=t.findIndex(r=>r.tag==="title");if(i!==-1&&e!==-1){const r=gu(t[e].textContent,t[i].textContent);r!==null?t[i].textContent=r||t[i].textContent:delete t[i]}else if(e!==-1){const r=gu(t[e].textContent);r!==null&&(t[e].textContent=r,t[e].tag="title",e=-1)}e!==-1&&delete t[e],n.tags=t.filter(Boolean)}}},mv={hooks:{"tags:afterResolve":function(n){for(const t of n.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let Yd;function gv(n={}){const t=_v(n);return t.use(iv()),Yd=t}function yu(n,t){return!n||n==="server"&&t||n==="client"&&!t}function _v(n={}){const t=Nd();t.addHooks(n.hooks||{}),n.document=n.document||(K0?document:void 0);const e=!n.document,i=()=>{o.dirty=!0,t.callHook("entries:updated",o)};let r=0,s=[];const a=[],o={plugins:a,dirty:!1,resolvedOptions:n,hooks:t,headEntries(){return s},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!a.some(f=>f.key===c.key))&&(a.push(c),yu(c.mode,e)&&t.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const f={_i:r++,input:l,...c};return yu(f.mode,e)&&(s.push(f),i()),{dispose(){s=s.filter(u=>u._i!==f._i),t.callHook("entries:updated",o),i()},patch(u){s=s.map(h=>(h._i===f._i&&(h.input=f.input=u),h)),i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await t.callHook("entries:resolve",l);for(const c of l.entries){const f=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(f):f),c.resolvedInput)for(const u of await tv(c)){const h={tag:u,entry:c,resolvedOptions:o.resolvedOptions};await t.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l),l.tags},ssr:e};return[sv,ov,lv,uv,fv,dv,pv,mv,...(n==null?void 0:n.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function vv(){return Yd}const xv=yd.startsWith("3");function yv(n){return typeof n=="function"?n():$t(n)}function El(n,t=""){if(n instanceof Promise)return n;const e=yv(n);return!n||!e?e:Array.isArray(e)?e.map(i=>El(i,t)):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,$t(r)]:[i,El(r,i)])):e}const bv={hooks:{"entries:resolve":function(n){for(const t of n.entries)t.resolvedInput=El(t.input)}}},Kd="usehead";function Sv(n){return{install(e){xv&&(e.config.globalProperties.$unhead=n,e.config.globalProperties.$head=n,e.provide(Kd,n))}}.install}function Mv(n={}){n.domDelayFn=n.domDelayFn||(e=>$l(()=>setTimeout(()=>e(),0)));const t=gv(n);return t.use(bv),t.install=Sv(t),t}const wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tl="__unhead_injection_handler__";function Ev(n){wl[Tl]=n}function IT(){if(Tl in wl)return wl[Tl]();const n=vr(Kd);return n||vv()}const wv={nuxt:{buildId:"ac965c41-f71d-4b4d-8e08-b45ed3a2827b"}},Tv=M0(wv);function Zd(){const n=Me();return n._appConfig||(n._appConfig=oi(Tv)),n._appConfig}const DT={componentName:"NuxtLink"},Av="#__nuxt";let po,Jd;function Rv(){var t;const n=(t=Zd().nuxt)==null?void 0:t.buildId;return po=$fetch(lc(`builds/meta/${n}.json`)),po.then(e=>{Jd=b0(e.matcher)}),po}function Zo(){return po||Rv()}async function hc(n){return await Zo(),S0({},...Jd.matchAll(n).reverse())}function bu(n,t={}){const e=Pv(n,t),i=Me(),r=i._payloadCache=i._payloadCache||{};return e in r||(r[e]=Lv(n).then(s=>s?Qd(e).then(a=>a||(delete r[e],null)):(r[e]=null,null))),r[e]}const Cv="_payload.json";function Pv(n,t={}){var r;const e=new URL(n,"http://localhost");if(e.host!=="localhost"||Ur(e.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=t.hash||(t.fresh?Date.now():(r=Zd().nuxt)==null?void 0:r.buildId);return Yo(Ro().app.baseURL,e.pathname,Cv+(i?`?${i}`:""))}async function Qd(n){const t=fetch(n).then(e=>e.text().then(tp));try{return await t}catch(e){console.warn("[nuxt] Cannot load payload ",n,e)}return null}async function Lv(n=Gd().path){if(n=oc(n),(await Zo()).prerendered.includes(n))return!0;const e=await hc(n);return!!e.prerender&&!e.redirect}let As=null;async function Iv(){if(As)return As;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const t=await tp(n.textContent||""),e=n.dataset.src?await Qd(n.dataset.src):void 0;return As={...t,...e,...window.__NUXT__},As}async function tp(n){return await W0(n,Me()._payloadRevivers)}function Dv(n,t){Me()._payloadRevivers[n]=t}const Su={NuxtError:n=>uc(n),EmptyShallowRef:n=>Uc(n==="_"?void 0:n==="0n"?BigInt(0):Eo(n)),EmptyRef:n=>Ne(n==="_"?void 0:n==="0n"?BigInt(0):Eo(n)),ShallowRef:n=>Uc(n),ShallowReactive:n=>Ch(n),Ref:n=>Ne(n),Reactive:n=>oi(n)},Uv=Hi({name:"nuxt:revive-payload:client",order:-30,async setup(n){let t,e;for(const i in Su)Dv(i,Su[i]);Object.assign(n.payload,([t,e]=Od(()=>n.runWithContext(Iv)),t=await t,e(),t)),window.__NUXT__=n.payload}}),Nv=[],Ov=Hi({name:"nuxt:head",enforce:"pre",setup(n){const t=Mv({plugins:Nv});Ev(()=>Me().vueApp._context.provides.usehead),n.vueApp.use(t);{let e=!0;const i=async()=>{e=!1,await $d(t)};t.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!e}),n.hooks.hook("page:start",()=>{e=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}}),Fv=async n=>{let t,e;const i=([t,e]=Od(()=>hc(n.path)),t=await t,e(),t);if(i.redirect)return Ur(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},kv=[Fv];function va(n){typeof n=="object"&&(n=Ld({pathname:n.path||"",search:Td(n.query||{}),hash:n.hash||""}));const t=Ko(n.toString());return{path:t.pathname,fullPath:n,query:wd(t.search),hash:t.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}}const Bv=Hi({name:"nuxt:router",enforce:"pre",setup(n){const t=k_(window.location.pathname,Ro().app.baseURL)+window.location.search+window.location.hash,e=[],i={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},r=(u,h)=>(i[u].push(h),()=>i[u].splice(i[u].indexOf(h),1)),s=Ro().app.baseURL,a=oi(va(t));async function o(u,h){try{const d=va(u);for(const _ of i["navigate:before"]){const g=await _(d,a);if(g===!1||g instanceof Error)return;if(typeof g=="string"&&g.length)return o(g,!0)}for(const _ of i["resolve:before"])await _(d,a);Object.assign(a,d),window.history[h?"replaceState":"pushState"]({},"",Yo(s,d.fullPath)),n.isHydrating||await n.runWithContext(D0);for(const _ of i["navigate:after"])await _(d,a)}catch(d){for(const _ of i.error)await _(d)}}const c={currentRoute:rc(()=>a),isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:u=>o(u,!1),replace:u=>o(u,!0),back:()=>window.history.go(-1),go:u=>window.history.go(u),forward:()=>window.history.go(1),beforeResolve:u=>r("resolve:before",u),beforeEach:u=>r("navigate:before",u),afterEach:u=>r("navigate:after",u),onError:u=>r("error",u),resolve:va,addRoute:(u,h)=>{e.push(h)},getRoutes:()=>e,hasRoute:u=>e.some(h=>h.name===u),removeRoute:u=>{const h=e.findIndex(d=>d.name===u);h!==-1&&e.splice(h,1)}};n.vueApp.component("RouterLink",Un({functional:!0,props:{to:{type:String,required:!0},custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(u,{slots:h})=>{const d=()=>o(u.to,u.replace);return()=>{var g;const _=c.resolve(u.to);return u.custom?(g=h.default)==null?void 0:g.call(h,{href:u.to,navigate:d,route:_}):Fg("a",{href:u.to,onClick:m=>(m.preventDefault(),d())},h)}}})),window.addEventListener("popstate",u=>{const h=u.target.location;c.replace(h.href.replace(h.origin,""))}),n._route=a,n._middleware=n._middleware||{global:[],named:{}};const f=n.payload.state._layout;return n.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(u,h)=>{u.meta=oi(u.meta||{}),n.isHydrating&&f&&!Er(u.meta.layout)&&(u.meta.layout=f),n._processingMiddleware=!0;{const d=new Set([...kv,...n._middleware.global]);{const _=await n.runWithContext(()=>hc(u.path));if(_.appMiddleware)for(const g in _.appMiddleware){const m=n._middleware.named[g];if(!m)return;_.appMiddleware[g]?d.add(m):d.delete(m)}}for(const _ of d){const g=await n.runWithContext(()=>_(u,h));if(g!==!0&&(g||g===!1))return g}}}),c.afterEach(()=>{delete n._processingMiddleware}),await c.replace(t),z_(a.fullPath,t)||await n.runWithContext(()=>L0(a.fullPath))}),{provide:{route:a,router:c}}}}),Mu=globalThis.requestIdleCallback||(n=>{const t=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{n(e)},1)}),UT=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),ep=n=>{const t=Me();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{Mu(n)}):Mu(n)},zv=Hi({name:"nuxt:payload",setup(n){us().beforeResolve(async(t,e)=>{if(t.path===e.path)return;const i=await bu(t.path);i&&Object.assign(n.static.data,i.data)}),ep(()=>{var t;n.hooks.hook("link:prefetch",async e=>{Ko(e).protocol||await bu(e)}),((t=navigator.connection)==null?void 0:t.effectiveType)!=="slow-2g"&&setTimeout(Zo,1e3)})}}),Hv=Hi(n=>{let t;async function e(){const i=await Zo();t&&clearTimeout(t),t=setTimeout(e,1e3*60*60);try{const r=await $fetch(lc("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}ep(()=>{t=setTimeout(e,1e3*60*60)})}),Vv=Hi({name:"nuxt:global-components"});function Gv(n={}){const t=n.path||window.location.pathname;let e={};try{e=Eo(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||(e==null?void 0:e.path)!==t||(e==null?void 0:e.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Me().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Wv=Hi({name:"nuxt:chunk-reload",setup(n){const t=us(),e=Ro(),i=new Set;t.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const o="href"in s&&s.href[0]==="#"?e.app.baseURL+s.href:Yo(e.app.baseURL,s.fullPath);Gv({path:o,persistState:!0})}n.hook("app:manifest:update",()=>{t.beforeResolve(r)}),t.onError((s,a)=>{i.has(s)&&r(a)})}}),jv=[Uv,Ov,Bv,zv,Hv,Vv,Wv],Xv=ne("div",{class:"loading-spinner"},null,-1),qv=[Xv],$v=Un({__name:"loading-overlay",props:{loading:{type:Boolean}},setup(n){const t=n;return(e,i)=>(me(),ai("div",{class:zi(["loading-overlay",{"opacity-0 pointer-events-none":!t.loading}])},qv,2))}}),Yv=ne("h1",null,"Drop file to load.",-1),Kv=[Yv],Zv=Un({__name:"drop-zone",emits:["load-obj"],setup(n,{emit:t}){const e=t,i=Ne(!1),r=o=>{o.preventDefault(),i.value=!0},s=o=>{o.preventDefault(),i.value=!1},a=o=>{var f;o.preventDefault(),i.value=!1;const l=(f=o.dataTransfer)==null?void 0:f.files[0];if(!l)return;const c=new FileReader;c.onload=u=>{var h;e("load-obj",(h=u.target)==null?void 0:h.result)},c.readAsText(l)};return qo(()=>{document.addEventListener("dragover",r),document.addEventListener("drop",a)}),Xh(()=>{document.removeEventListener("dragover",r),document.removeEventListener("drop",a)}),(o,l)=>(me(),ai("div",{class:zi(["drop-zone opacity-0",{"opacity-100":$t(i),"pointer-events-none":!$t(i)}]),onDragover:r,onDragleave:s,onDrop:a,draggable:"true"},Kv,34))}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="163",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jv=0,Eu=1,Qv=2,np=1,tx=2,Cn=3,li=0,Fe=1,_n=2,ni=0,yr=1,wu=2,Tu=3,Au=4,ex=5,Ri=100,nx=101,ix=102,rx=103,sx=104,ox=200,ax=201,lx=202,cx=203,Al=204,Rl=205,ux=206,fx=207,hx=208,dx=209,px=210,mx=211,gx=212,_x=213,vx=214,xx=0,yx=1,bx=2,Po=3,Sx=4,Mx=5,Ex=6,wx=7,pc=0,Tx=1,Ax=2,ii=0,Rx=1,Cx=2,Px=3,Lx=4,Ix=5,Dx=6,Ux=7,ip=300,Rr=301,Cr=302,Cl=303,Pl=304,Jo=306,Ll=1e3,Li=1001,Il=1002,nn=1003,Nx=1004,Rs=1005,ln=1006,xa=1007,Ii=1008,ri=1009,Ox=1010,Fx=1011,rp=1012,sp=1013,Pr=1014,Qn=1015,Lo=1016,op=1017,ap=1018,fs=1020,kx=35902,Bx=1021,zx=1022,vn=1023,Hx=1024,Vx=1025,br=1026,is=1027,Gx=1028,lp=1029,Wx=1030,cp=1031,up=1033,ya=33776,ba=33777,Sa=33778,Ma=33779,Ru=35840,Cu=35841,Pu=35842,Lu=35843,fp=36196,Iu=37492,Du=37496,Uu=37808,Nu=37809,Ou=37810,Fu=37811,ku=37812,Bu=37813,zu=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,ju=37819,Xu=37820,qu=37821,Ea=36492,$u=36494,Yu=36495,jx=36283,Ku=36284,Zu=36285,Ju=36286,Xx=3200,qx=3201,hp=0,$x=1,Jn="",dn="srgb",hi="srgb-linear",mc="display-p3",Qo="display-p3-linear",Io="linear",ee="srgb",Do="rec709",Uo="p3",Xi=7680,Qu=519,Yx=512,Kx=513,Zx=514,dp=515,Jx=516,Qx=517,ty=518,ey=519,tf=35044,ef="300 es",Pn=2e3,No=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nf=1234567;const Sr=Math.PI/180,rs=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function gc(n,t){return(n%t+t)%t}function ny(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function iy(n,t,e){return n!==t?(e-n)/(t-n):0}function Zr(n,t,e){return(1-e)*n+e*t}function ry(n,t,e,i){return Zr(n,t,1-Math.exp(-e*i))}function sy(n,t=1){return t-Math.abs(gc(n,t*2)-t)}function oy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ay(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ly(n,t){return n+Math.floor(Math.random()*(t-n+1))}function cy(n,t){return n+Math.random()*(t-n)}function uy(n){return n*(.5-Math.random())}function fy(n){n!==void 0&&(nf=n);let t=nf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hy(n){return n*Sr}function dy(n){return n*rs}function py(n){return(n&n-1)===0&&n!==0}function my(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _y(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),f=a((t+i)/2),u=s((t-i)/2),h=a((t-i)/2),d=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*f,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*f,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*f,o*c);break;case"XZX":n.set(o*f,l*_,l*d,o*c);break;case"YXY":n.set(l*d,o*f,l*_,o*c);break;case"ZYZ":n.set(l*_,l*d,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vy={DEG2RAD:Sr,RAD2DEG:rs,generateUUID:Nr,clamp:Ce,euclideanModulo:gc,mapLinear:ny,inverseLerp:iy,lerp:Zr,damp:ry,pingpong:sy,smoothstep:oy,smootherstep:ay,randInt:ly,randFloat:cy,randFloatSpread:uy,seededRandom:fy,degToRad:hy,radToDeg:dy,isPowerOfTwo:py,ceilPowerOfTwo:my,floorPowerOfTwo:gy,setQuaternionFromProperEuler:_y,normalize:De,denormalize:cr};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,r,s,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],_=i[8],g=r[0],m=r[3],p=r[6],S=r[1],y=r[4],E=r[7],C=r[2],R=r[5],P=r[8];return s[0]=a*g+o*S+l*C,s[3]=a*m+o*y+l*R,s[6]=a*p+o*E+l*P,s[1]=c*g+f*S+u*C,s[4]=c*m+f*y+u*R,s[7]=c*p+f*E+u*P,s[2]=h*g+d*S+_*C,s[5]=h*m+d*y+_*R,s[8]=h*p+d*E+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=f*a-o*c,h=o*l-f*s,d=c*s-a*l,_=e*u+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(r*c-f*i)*g,t[2]=(o*i-r*a)*g,t[3]=h*g,t[4]=(f*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new jt;function pp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xy(){const n=Oo("canvas");return n.style.display="block",n}const rf={};function yy(n){n in rf||(rf[n]=!0,console.warn(n))}const sf=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),of=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[hi]:{transfer:Io,primaries:Do,toReference:n=>n,fromReference:n=>n},[dn]:{transfer:ee,primaries:Do,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qo]:{transfer:Io,primaries:Uo,toReference:n=>n.applyMatrix3(of),fromReference:n=>n.applyMatrix3(sf)},[mc]:{transfer:ee,primaries:Uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(of),fromReference:n=>n.applyMatrix3(sf).convertLinearToSRGB()}},by=new Set([hi,Qo]),Jt={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!by.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Cs[t].toReference,r=Cs[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Cs[n].primaries},getTransfer:function(n){return n===Jn?Io:Cs[n].transfer}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qi;class Sy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Oo("canvas")),qi.width=t.width,qi.height=t.height;const i=qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mr(e[i]/255)*255):e[i]=Mr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let My=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Aa(r[a].image)):s.push(Aa(r[a]))}else s=Aa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ey=0;class ke extends Vi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=Li,r=Li,s=ln,a=Ii,o=vn,l=ri,c=ke.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Nr(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ll:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ll:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=ip;ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,r=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,E=(d+1)/2,C=(p+1)/2,R=(f+h)/4,P=(u+g)/4,z=(_+m)/4;return y>E&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=P/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=z/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(h-f)/S,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends Vi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends wy{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gp extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ty extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==h||c!==d||f!==_){let m=1-o;const p=l*h+c*d+f*_+u*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),R=Math.atan2(C,p*S);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const E=o*S;if(l=l*m+h*E,c=c*m+d*E,f=f*m+_*E,u=u*m+g*E,m===1-o){const C=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=C,c*=C,f*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+f*u+l*d-c*h,t[e+1]=l*_+f*h+c*u-o*d,t[e+2]=c*_+f*d+o*h-l*u,t[e+3]=f*_-o*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),u=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"YXZ":this._x=h*f*u+c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"ZXY":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u-h*d*_;break;case"ZYX":this._x=h*f*u-c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u+h*d*_;break;case"YZX":this._x=h*f*u+c*d*_,this._y=c*d*u+h*f*_,this._z=c*f*_-h*d*u,this._w=c*f*u-h*d*_;break;case"XZY":this._x=h*f*u-c*d*_,this._y=c*d*u-h*f*_,this._z=c*f*_+h*d*u,this._w=c*f*u+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=i+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(f-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),u=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,i=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(af.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),f=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*f,this.y=i+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new et,af=new Bi;class hs{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ps.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox)),Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),Ls.subVectors(this.max,kr),$i.subVectors(t.a,kr),Yi.subVectors(t.b,kr),Ki.subVectors(t.c,kr),Hn.subVectors(Yi,$i),Vn.subVectors(Ki,Yi),gi.subVectors($i,Ki);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-gi.z,gi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,gi.z,0,-gi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-gi.y,gi.x,0];return!Ca(e,$i,Yi,Ki,Ls)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,$i,Yi,Ki,Ls))?!1:(Is.crossVectors(Hn,Vn),e=[Is.x,Is.y,Is.z],Ca(e,$i,Yi,Ki,Ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new et,new et,new et,new et,new et,new et,new et,new et],rn=new et,Ps=new hs,$i=new et,Yi=new et,Ki=new et,Hn=new et,Vn=new et,gi=new et,kr=new et,Ls=new et,Is=new et,_i=new et;function Ca(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),f=i.dot(_i);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Ay=new hs,Br=new et,Pa=new et;class ds{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ay.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Pa)),this.expandByPoint(Br.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new et,La=new et,Ds=new et,Gn=new et,Ia=new et,Us=new et,Da=new et;class ta{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){La.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(La);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=Gn.dot(this.direction),l=-Gn.dot(Ds),c=Gn.lengthSq(),f=Math.abs(1-a*a);let u,h,d,_;if(f>0)if(u=a*l-o,h=a*o-l,_=s*f,u>=0)if(h>=-_)if(h<=_){const g=1/f;u*=g,h*=g,d=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(La).addScaledVector(Ds,h),d}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,a=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,a=(t.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,r,s){Ia.subVectors(e,t),Us.subVectors(i,t),Da.crossVectors(Ia,Us);let a=this.direction.dot(Da),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(Us.crossVectors(Gn,Us));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(Gn));if(c<0||l+c>a)return null;const f=-o*Gn.dot(Da);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,a,o,l,c,f,u,h,d,_,g,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,f,u,h,d,_,g,m)}set(t,e,i,r,s,a,o,l,c,f,u,h,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=a*f,d=a*u,_=o*f,g=o*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*f,d=l*u,_=c*f,g=c*u;e[0]=h+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*f,e[9]=-o,e[2]=d*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*f,d=l*u,_=c*f,g=c*u;e[0]=h-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*f,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*f,d=a*u,_=o*f,g=o*u;e[0]=l*f,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*u,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*f,e[4]=g-h*u,e[8]=_*u+d,e[1]=u,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=d*u+_,e[10]=h-g*u}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+g,e[5]=a*f,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*f,e[10]=g*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ry,t,Cy)}lookAt(t,e,i){const r=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Wn.crossVectors(i,Ge),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Wn.crossVectors(i,Ge)),Wn.normalize(),Ns.crossVectors(Ge,Wn),r[0]=Wn.x,r[4]=Ns.x,r[8]=Ge.x,r[1]=Wn.y,r[5]=Ns.y,r[9]=Ge.y,r[2]=Wn.z,r[6]=Ns.z,r[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],E=i[11],C=i[15],R=r[0],P=r[4],z=r[8],T=r[12],w=r[1],G=r[5],I=r[9],U=r[13],M=r[2],V=r[6],Y=r[10],X=r[14],W=r[3],Q=r[7],lt=r[11],$=r[15];return s[0]=a*R+o*w+l*M+c*W,s[4]=a*P+o*G+l*V+c*Q,s[8]=a*z+o*I+l*Y+c*lt,s[12]=a*T+o*U+l*X+c*$,s[1]=f*R+u*w+h*M+d*W,s[5]=f*P+u*G+h*V+d*Q,s[9]=f*z+u*I+h*Y+d*lt,s[13]=f*T+u*U+h*X+d*$,s[2]=_*R+g*w+m*M+p*W,s[6]=_*P+g*G+m*V+p*Q,s[10]=_*z+g*I+m*Y+p*lt,s[14]=_*T+g*U+m*X+p*$,s[3]=S*R+y*w+E*M+C*W,s[7]=S*P+y*G+E*V+C*Q,s[11]=S*z+y*I+E*Y+C*lt,s[15]=S*T+y*U+E*X+C*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-r*c*u-s*o*h+i*c*h+r*o*d-i*l*d)+g*(+e*l*d-e*c*h+s*a*h-r*a*d+r*c*f-s*l*f)+m*(+e*c*u-e*o*d-s*a*u+i*a*d+s*o*f-i*c*f)+p*(-r*o*f-e*l*u+e*o*h+r*a*u-i*a*h+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*c-g*h*c+g*l*d-o*m*d-u*l*p+o*h*p,y=_*h*c-f*m*c-_*l*d+a*m*d+f*l*p-a*h*p,E=f*g*c-_*u*c+_*o*d-a*g*d-f*o*p+a*u*p,C=_*u*l-f*g*l-_*o*h+a*g*h+f*o*m-a*u*m,R=e*S+i*y+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=S*P,t[1]=(g*h*s-u*m*s-g*r*d+i*m*d+u*r*p-i*h*p)*P,t[2]=(o*m*s-g*l*s+g*r*c-i*m*c-o*r*p+i*l*p)*P,t[3]=(u*l*s-o*h*s-u*r*c+i*h*c+o*r*d-i*l*d)*P,t[4]=y*P,t[5]=(f*m*s-_*h*s+_*r*d-e*m*d-f*r*p+e*h*p)*P,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*p-e*l*p)*P,t[7]=(a*h*s-f*l*s+f*r*c-e*h*c-a*r*d+e*l*d)*P,t[8]=E*P,t[9]=(_*u*s-f*g*s-_*i*d+e*g*d+f*i*p-e*u*p)*P,t[10]=(a*g*s-_*o*s+_*i*c-e*g*c-a*i*p+e*o*p)*P,t[11]=(f*o*s-a*u*s-f*i*c+e*u*c+a*i*d-e*o*d)*P,t[12]=C*P,t[13]=(f*g*r-_*u*r+_*i*h-e*g*h-f*i*m+e*u*m)*P,t[14]=(_*o*r-a*g*r-_*i*l+e*g*l+a*i*m-e*o*m)*P,t[15]=(a*u*r-f*o*r+f*i*l-e*u*l-a*i*h+e*o*h)*P,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,f=a+a,u=o+o,h=s*c,d=s*f,_=s*u,g=a*f,m=a*u,p=o*u,S=l*c,y=l*f,E=l*u,C=i.x,R=i.y,P=i.z;return r[0]=(1-(g+p))*C,r[1]=(d+E)*C,r[2]=(_-y)*C,r[3]=0,r[4]=(d-E)*R,r[5]=(1-(h+p))*R,r[6]=(m+S)*R,r[7]=0,r[8]=(_+y)*P,r[9]=(m-S)*P,r[10]=(1-(h+g))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const a=Zi.set(r[4],r[5],r[6]).length(),o=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],sn.copy(this);const c=1/s,f=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=f,sn.elements[5]*=f,sn.elements[6]*=f,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Pn){const l=this.elements,c=2*s/(e-t),f=2*s/(i-r),u=(e+t)/(e-t),h=(i+r)/(i-r);let d,_;if(o===Pn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===No)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Pn){const l=this.elements,c=1/(e-t),f=1/(i-r),u=1/(a-s),h=(e+t)*c,d=(i+r)*f;let _,g;if(o===Pn)_=(a+s)*u,g=-2*u;else if(o===No)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zi=new et,sn=new le,Ry=new et(0,0,0),Cy=new et(1,1,1),Wn=new et,Ns=new et,Ge=new et,lf=new le,cf=new Bi;class bn{constructor(t=0,e=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cf.setFromEuler(this),this.setFromQuaternion(cf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Py=0;const uf=new et,Ji=new Bi,wn=new le,Os=new et,zr=new et,Ly=new et,Iy=new Bi,ff=new et(1,0,0),hf=new et(0,1,0),df=new et(0,0,1),pf={type:"added"},Dy={type:"removed"},Qi={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Le extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new et,e=new bn,i=new Bi,r=new et(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(ff,t)}rotateY(t){return this.rotateOnAxis(hf,t)}rotateZ(t){return this.rotateOnAxis(df,t)}translateOnAxis(t,e){return uf.copy(t).applyQuaternion(this.quaternion),this.position.add(uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ff,t)}translateY(t){return this.translateOnAxis(hf,t)}translateZ(t){return this.translateOnAxis(df,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Os.copy(t):Os.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(zr,Os,this.up):wn.lookAt(Os,zr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(wn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pf),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dy),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pf),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Ly),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Iy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),u=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new et(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new et,Tn=new et,Na=new et,An=new et,tr=new et,er=new et,mf=new et,Oa=new et,Fa=new et,ka=new et;class cn{constructor(t=new et,e=new et,i=new et){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),on.subVectors(t,e),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){on.subVectors(r,e),Tn.subVectors(i,e),Na.subVectors(t,e);const a=on.dot(on),o=on.dot(Tn),l=on.dot(Na),c=Tn.dot(Tn),f=Tn.dot(Na),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,d=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static isFrontFacing(t,e,i,r){return on.subVectors(i,e),Tn.subVectors(t,e),on.cross(Tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),on.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),er.subVectors(s,i),Oa.subVectors(t,i);const l=tr.dot(Oa),c=er.dot(Oa);if(l<=0&&c<=0)return e.copy(i);Fa.subVectors(t,r);const f=tr.dot(Fa),u=er.dot(Fa);if(f>=0&&u<=f)return e.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(i).addScaledVector(tr,a);ka.subVectors(t,s);const d=tr.dot(ka),_=er.dot(ka);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(er,o);const m=f*_-d*u;if(m<=0&&u-f>=0&&d-_>=0)return mf.subVectors(s,r),o=(u-f)/(u-f+(d-_)),e.copy(r).addScaledVector(mf,o);const p=1/(m+g+h);return a=g*p,o=h*p,e.copy(i).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ba(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Jt.workingColorSpace){if(t=gc(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ba(a,s,t+1/3),this.g=Ba(a,s,t),this.b=Ba(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(t,e=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const i=vp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}copyLinearToSRGB(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ce(Re.r*255,0,255))*65536+Math.round(Ce(Re.g*255,0,255))*256+Math.round(Ce(Re.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=dn){Jt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Fs);const i=Zr(jn.h,Fs.h,e),r=Zr(jn.s,Fs.s,e),s=Zr(jn.l,Fs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Xt;Xt.NAMES=vp;let Uy=0;class Dn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=yr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fo extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new et,ks=new Ot;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tf&&(t.usage=this.usage),t}}class xp extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class yp extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ny=0;const Ye=new le,za=new Le,nr=new et,We=new hs,Hr=new hs,be=new et;class ze extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?yp:xp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,i){return Ye.makeTranslation(t,e,i),this.applyMatrix4(Ye),this}scale(t,e,i){return Ye.makeScale(t,e,i),this.applyMatrix4(Ye),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];We.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,Hr.min),We.expandByPoint(be),be.addVectors(We.max,Hr.max),We.expandByPoint(be)):(We.expandByPoint(Hr.min),We.expandByPoint(Hr.max))}We.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)be.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(t,c),be.add(nr)),r=Math.max(r,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new et,l[z]=new et;const c=new et,f=new et,u=new et,h=new Ot,d=new Ot,_=new Ot,g=new et,m=new et;function p(z,T,w){c.fromBufferAttribute(i,z),f.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(s,z),d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),f.sub(c),u.sub(c),d.sub(h),_.sub(h);const G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(G),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(G),o[z].add(g),o[T].add(g),o[w].add(g),l[z].add(m),l[T].add(m),l[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let z=0,T=S.length;z<T;++z){const w=S[z],G=w.start,I=w.count;for(let U=G,M=G+I;U<M;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new et,E=new et,C=new et,R=new et;function P(z){C.fromBufferAttribute(r,z),R.copy(C);const T=o[z];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(R,T);const G=E.dot(l[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,G)}for(let z=0,T=S.length;z<T;++z){const w=S[z],G=w.start,I=w.count;for(let U=G,M=G+I;U<M;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new et,s=new et,a=new et,o=new et,l=new et,c=new et,f=new et,u=new et;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*f;for(let p=0;p<f;p++)h[_++]=c[d++]}return new xn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=t(h,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(e))}const s=t.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new le,vi=new ta,Bs=new ds,_f=new et,ir=new et,rr=new et,sr=new et,Ha=new et,zs=new et,Hs=new Ot,Vs=new Ot,Gs=new Ot,vf=new et,xf=new et,yf=new et,Ws=new et,js=new et;class Xe extends Le{constructor(t=new ze,e=new Fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(Ha.fromBufferAttribute(u,t),a?zs.addScaledVector(Ha,f):zs.addScaledVector(Ha.sub(e),f))}e.add(zs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(Bs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Bs,_f)===null||vi.origin.distanceToSquared(_f)>(t.far-t.near)**2))&&(gf.copy(s).invert(),vi.copy(t.ray).applyMatrix4(gf),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,C=y;E<C;E+=3){const R=o.getX(E),P=o.getX(E+1),z=o.getX(E+2);r=Xs(this,p,t,i,c,f,u,R,P,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);r=Xs(this,a,t,i,c,f,u,S,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=S,C=y;E<C;E+=3){const R=E,P=E+1,z=E+2;r=Xs(this,p,t,i,c,f,u,R,P,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,y=m+1,E=m+2;r=Xs(this,a,t,i,c,f,u,S,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Oy(n,t,e,i,r,s,a,o){let l;if(t.side===Fe?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===li,o),l===null)return null;js.copy(o),js.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:n}}function Xs(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ir),n.getVertexPosition(l,rr),n.getVertexPosition(c,sr);const f=Oy(n,t,e,i,ir,rr,sr,Ws);if(f){r&&(Hs.fromBufferAttribute(r,o),Vs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),f.uv=cn.getInterpolation(Ws,ir,rr,sr,Hs,Vs,Gs,new Ot)),s&&(Hs.fromBufferAttribute(s,o),Vs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),f.uv1=cn.getInterpolation(Ws,ir,rr,sr,Hs,Vs,Gs,new Ot)),a&&(vf.fromBufferAttribute(a,o),xf.fromBufferAttribute(a,l),yf.fromBufferAttribute(a,c),f.normal=cn.getInterpolation(Ws,ir,rr,sr,vf,xf,yf,new et),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new et,materialIndex:0};cn.getNormal(ir,rr,sr,u.normal),f.face=u}return f}class ps extends ze{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(u,2));function _(g,m,p,S,y,E,C,R,P,z,T){const w=E/P,G=C/z,I=E/2,U=C/2,M=R/2,V=P+1,Y=z+1;let X=0,W=0;const Q=new et;for(let lt=0;lt<Y;lt++){const $=lt*G-U;for(let Z=0;Z<V;Z++){const gt=Z*w-I;Q[g]=gt*S,Q[m]=$*y,Q[p]=M,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=R>0?1:-1,f.push(Q.x,Q.y,Q.z),u.push(Z/P),u.push(1-lt/z),X+=1}}for(let lt=0;lt<z;lt++)for(let $=0;$<P;$++){const Z=h+$+V*lt,gt=h+$+V*(lt+1),J=h+($+1)+V*(lt+1),it=h+($+1)+V*lt;l.push(Z,gt,it),l.push(gt,J,it),W+=6}o.addGroup(d,W,T),d+=W,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=Lr(n[e]);for(const r in i)t[r]=i[r]}return t}function Fy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const ky={clone:Lr,merge:Ue};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Fy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Sp extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new et,bf=new Ot,Sf=new Ot;class Qe extends Sp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,bf,Sf),e.subVectors(Sf,bf)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const or=-90,ar=1;class Hy extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(or,ar,t,e);r.layers=this.layers,this.add(r);const s=new Qe(or,ar,t,e);s.layers=this.layers,this.add(s);const a=new Qe(or,ar,t,e);a.layers=this.layers,this.add(a);const o=new Qe(or,ar,t,e);o.layers=this.layers,this.add(o);const l=new Qe(or,ar,t,e);l.layers=this.layers,this.add(l);const c=new Qe(or,ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Mp extends ke{constructor(t,e,i,r,s,a,o,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vy extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Mp(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:ni});s.uniforms.tEquirect.value=e;const a=new Xe(r,s),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=ln),new Hy(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Va=new et,Gy=new et,Wy=new jt;class Kn{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Va.subVectors(i,e).cross(Gy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wy.getNormalMatrix(t),r=this.coplanarPoint(Va).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new ds,qs=new et;class Ep{constructor(t=new Kn,e=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],u=r[6],h=r[7],d=r[8],_=r[9],g=r[10],m=r[11],p=r[12],S=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+a,h+f,m+_,E+S).normalize(),i[3].setComponents(l-a,h-f,m-_,E-S).normalize(),i[4].setComponents(l-o,h-u,m-g,E-y).normalize(),e===Pn)i[5].setComponents(l+o,h+u,m+g,E+y).normalize();else if(e===No)i[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(qs.x=r.normal.x>0?t.max.x:t.min.x,qs.y=r.normal.y>0?t.max.y:t.min.y,qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wp(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function jy(n){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&h.length===0&&n.bufferSubData(c,0,f),h.length!==0){for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*f.BYTES_PER_ELEMENT,f,u.offset,u.count),u.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ms extends ze{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,u=t/o,h=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<f;p++){const S=p*h-a;for(let y=0;y<c;y++){const E=y*u-s;_.push(E,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,E=S+c*(p+1),C=S+1+c*(p+1),R=S+1+c*p;d.push(y,E,R),d.push(E,C,R)}this.setIndex(d),this.setAttribute("position",new de(_,3)),this.setAttribute("normal",new de(g,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sb=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mb=`#define PI 3.141592653589793
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
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`
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
}`,Eb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,jb=`struct PhysicalMaterial {
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
}`,Xb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nS=`#if defined( USE_POINTS_UV )
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
#endif`,iS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
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
#endif`,lS=`#ifdef USE_MORPHTARGETS
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
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mS=`#ifdef USE_NORMALMAP
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
#endif`,gS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LS=`float getShadowMask() {
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
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,QS=`#if DEPTH_PACKING == 3200
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
}`,tM=`#define DISTANCE
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
}`,eM=`#define DISTANCE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,hM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,pM=`#define PHONG
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
}`,mM=`#define PHONG
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
}`,gM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,xM=`#define TOON
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
}`,yM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,SM=`#include <common>
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
}`,MM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,wM=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Xy,alphahash_pars_fragment:qy,alphamap_fragment:$y,alphamap_pars_fragment:Yy,alphatest_fragment:Ky,alphatest_pars_fragment:Zy,aomap_fragment:Jy,aomap_pars_fragment:Qy,batching_pars_vertex:tb,batching_vertex:eb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ob,clipping_planes_fragment:ab,clipping_planes_pars_fragment:lb,clipping_planes_pars_vertex:cb,clipping_planes_vertex:ub,color_fragment:fb,color_pars_fragment:hb,color_pars_vertex:db,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:_b,displacementmap_pars_vertex:vb,displacementmap_vertex:xb,emissivemap_fragment:yb,emissivemap_pars_fragment:bb,colorspace_fragment:Sb,colorspace_pars_fragment:Mb,envmap_fragment:Eb,envmap_common_pars_fragment:wb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Bb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Lb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Db,lightmap_fragment:Ub,lightmap_pars_fragment:Nb,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Fb,lights_pars_begin:kb,lights_toon_fragment:zb,lights_toon_pars_fragment:Hb,lights_phong_fragment:Vb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Wb,lights_physical_pars_fragment:jb,lights_fragment_begin:Xb,lights_fragment_maps:qb,lights_fragment_end:$b,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Jb,map_fragment:Qb,map_pars_fragment:tS,map_particle_fragment:eS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphinstance_vertex:sS,morphcolor_vertex:oS,morphnormal_vertex:aS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:dS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:vS,iridescence_pars_fragment:xS,opaque_fragment:yS,packing:bS,premultiplied_alpha_fragment:SS,project_vertex:MS,dithering_fragment:ES,dithering_pars_fragment:wS,roughnessmap_fragment:TS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:CS,shadowmap_vertex:PS,shadowmask_pars_fragment:LS,skinbase_vertex:IS,skinning_pars_vertex:DS,skinning_vertex:US,skinnormal_vertex:NS,specularmap_fragment:OS,specularmap_pars_fragment:FS,tonemapping_fragment:kS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:jS,background_vert:XS,background_frag:qS,backgroundCube_vert:$S,backgroundCube_frag:YS,cube_vert:KS,cube_frag:ZS,depth_vert:JS,depth_frag:QS,distanceRGBA_vert:tM,distanceRGBA_frag:eM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:oM,meshbasic_frag:aM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:fM,meshnormal_vert:hM,meshnormal_frag:dM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:yM,points_frag:bM,shadow_vert:SM,shadow_frag:MM,sprite_vert:EM,sprite_frag:wM},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},pn={basic:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([St.points,St.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([St.common,St.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([St.sprite,St.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([St.common,St.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};pn.physical={uniforms:Ue([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const $s={r:0,b:0,g:0},yi=new bn,TM=new le;function AM(n,t,e,i,r,s,a){const o=new Xt(0);let l=s===!0?0:1,c,f,u=null,h=0,d=null;function _(m,p){let S=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Jo)?(f===void 0&&(f=new Xe(new ps(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Lr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),yi.copy(p.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(yi)),f.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ee,(u!==y||h!==y.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xe(new ms(2,2),new ci({name:"BackgroundMaterial",uniforms:Lr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB($s,bp(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function RM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,G,I,U,M){let V=!1;const Y=u(U,I,G);s!==Y&&(s=Y,c(s.object)),V=d(w,U,I,M),V&&_(w,U,I,M),M!==null&&t.update(M,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,E(w,G,I,U),M!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(M).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function f(w){return n.deleteVertexArray(w)}function u(w,G,I){const U=I.wireframe===!0;let M=i[w.id];M===void 0&&(M={},i[w.id]=M);let V=M[G.id];V===void 0&&(V={},M[G.id]=V);let Y=V[U];return Y===void 0&&(Y=h(l()),V[U]=Y),Y}function h(w){const G=[],I=[],U=[];for(let M=0;M<e;M++)G[M]=0,I[M]=0,U[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:I,attributeDivisors:U,object:w,attributes:{},index:null}}function d(w,G,I,U){const M=s.attributes,V=G.attributes;let Y=0;const X=I.getAttributes();for(const W in X)if(X[W].location>=0){const lt=M[W];let $=V[W];if($===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),lt===void 0||lt.attribute!==$||$&&lt.data!==$.data)return!0;Y++}return s.attributesNum!==Y||s.index!==U}function _(w,G,I,U){const M={},V=G.attributes;let Y=0;const X=I.getAttributes();for(const W in X)if(X[W].location>=0){let lt=V[W];lt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor));const $={};$.attribute=lt,lt&&lt.data&&($.data=lt.data),M[W]=$,Y++}s.attributes=M,s.attributesNum=Y,s.index=U}function g(){const w=s.newAttributes;for(let G=0,I=w.length;G<I;G++)w[G]=0}function m(w){p(w,0)}function p(w,G){const I=s.newAttributes,U=s.enabledAttributes,M=s.attributeDivisors;I[w]=1,U[w]===0&&(n.enableVertexAttribArray(w),U[w]=1),M[w]!==G&&(n.vertexAttribDivisor(w,G),M[w]=G)}function S(){const w=s.newAttributes,G=s.enabledAttributes;for(let I=0,U=G.length;I<U;I++)G[I]!==w[I]&&(n.disableVertexAttribArray(I),G[I]=0)}function y(w,G,I,U,M,V,Y){Y===!0?n.vertexAttribIPointer(w,G,I,M,V):n.vertexAttribPointer(w,G,I,U,M,V)}function E(w,G,I,U){g();const M=U.attributes,V=I.getAttributes(),Y=G.defaultAttributeValues;for(const X in V){const W=V[X];if(W.location>=0){let Q=M[X];if(Q===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const lt=Q.normalized,$=Q.itemSize,Z=t.get(Q);if(Z===void 0)continue;const gt=Z.buffer,J=Z.type,it=Z.bytesPerElement,dt=J===n.INT||J===n.UNSIGNED_INT||Q.gpuType===sp;if(Q.isInterleavedBufferAttribute){const pt=Q.data,yt=pt.stride,bt=Q.offset;if(pt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)p(W.location+Tt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Tt=0;Tt<W.locationSize;Tt++)y(W.location+Tt,$/W.locationSize,J,lt,yt*it,(bt+$/W.locationSize*Tt)*it,dt)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,$/W.locationSize,J,lt,$*it,$/W.locationSize*pt*it,dt)}}else if(Y!==void 0){const lt=Y[X];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(W.location,lt);break;case 3:n.vertexAttrib3fv(W.location,lt);break;case 4:n.vertexAttrib4fv(W.location,lt);break;default:n.vertexAttrib1fv(W.location,lt)}}}}S()}function C(){z();for(const w in i){const G=i[w];for(const I in G){const U=G[I];for(const M in U)f(U[M].object),delete U[M];delete G[I]}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const G=i[w.id];for(const I in G){const U=G[I];for(const M in U)f(U[M].object),delete U[M];delete G[I]}delete i[w.id]}function P(w){for(const G in i){const I=i[G];if(I[w.id]===void 0)continue;const U=I[w.id];for(const M in U)f(U[M].object),delete U[M];delete I[w.id]}}function z(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function CM(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),e.update(c,i,f))}function o(l,c,f){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<f;h++)this.render(l[h],c[h]);else{u.multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];e.update(h,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function PM(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=e.precision!==void 0?e.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),p=f>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:f,maxTextureSize:u,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:p,maxSamples:S}}function LM(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Kn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||r;return r=h,i=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const S=s?0:i,y=S*4;let E=p.clippingState||null;l.value=E,E=f(_,h,y,d);for(let C=0;C!==y;++C)E[C]=e[C];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(u,h,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,E=d;y!==g;++y,E+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function IM(n){let t=new WeakMap;function e(a,o){return o===Cl?a.mapping=Rr:o===Pl&&(a.mapping=Cr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vy(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class DM extends Sp{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,Mf=[.125,.215,.35,.446,.526,.582],Ci=20,Ga=new DM,Ef=new Xt;let Wa=null,ja=0,Xa=0,qa=!1;const wi=(1+Math.sqrt(5))/2,lr=1/wi,wf=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,wi,lr),new et(0,wi,-lr),new et(lr,0,wi),new et(-lr,0,wi),new et(wi,lr,0),new et(-wi,lr,0)];class Tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,ja,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Lo,format:vn,colorSpace:hi,depthBuffer:!1},r=Af(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(s)),this._blurMaterial=NM(s,t,e)}return r}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,i,r){const o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Ef),f.toneMapping=ii,f.autoClear=!1;const d=new Fo({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new Xe(new ps,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Ef),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Ys(r,S*y,p>2?y:0,y,y),f.setRenderTarget(r),g&&f.render(_,o),f.render(t,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Rr||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ga)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(r-1)%wf.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Xe(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),g=s/_,m=isFinite(s)?1+Math.floor(f*g):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let S=0;for(let P=0;P<Ci;++P){const z=P/g,T=Math.exp(-z*z/2);p.push(T),P===0?S+=T:P<m&&(S+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const E=this._sizeLods[r],C=3*E*(r>y-ur?r-y+ur:0),R=4*(this._cubeSize-E);Ys(e,C,R,3*E,2*E),l.setRenderTarget(e),l.render(u,Ga)}}function UM(n){const t=[],e=[],i=[];let r=n;const s=n-ur+1+Mf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ur?l=Mf[a-n+ur-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),y=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,z=R>2?0:-1,T=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];S.set(T,g*_*R),y.set(h,m*_*R);const w=[R,R,R,R,R,R];E.set(w,p*_*R)}const C=new ze;C.setAttribute("position",new xn(S,g)),C.setAttribute("uv",new xn(y,m)),C.setAttribute("faceIndex",new xn(E,p)),t.push(C),r>ur&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Af(n,t,e){const i=new ki(n,t,e);return i.texture.mapping=Jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function NM(n,t,e){const i=new Float32Array(Ci),r=new et(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Rf(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Cf(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function OM(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cl||l===Pl,f=l===Rr||l===Cr;if(c||f){let u=t.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Tf(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||f&&d&&r(d)?(e===null&&(e=new Tf(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function FM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kM(n,t,e,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const _ in h)t.update(h[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function c(u){const h=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,E=S.length;y<E;y+=3){const C=S[y+0],R=S[y+1],P=S[y+2];h.push(C,R,R,P,P,C)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const C=y+0,R=y+1,P=y+2;h.push(C,R,R,P,P,C)}}else return;const m=new(pp(h)?yp:xp)(h,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function BM(n,t,e){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,h){n.drawElements(i,h,s,u*a),e.update(h,i,1)}function c(u,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,u*a,d),e.update(h,i,d))}function f(u,h,d){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d;g++)this.render(u[g]/a,h[g]);else{_.multiDrawElementsWEBGL(i,h,0,s,u,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];e.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function zM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function HM(n,t,e){const i=new WeakMap,r=new Ee;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let T=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let E=o.attributes.position.count*y,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*C*4*u),P=new gp(R,E,C,u);P.type=Qn,P.needsUpdate=!0;const z=y*4;for(let w=0;w<u;w++){const G=m[w],I=p[w],U=S[w],M=E*C*4*w;for(let V=0;V<G.count;V++){const Y=V*z;d===!0&&(r.fromBufferAttribute(G,V),R[M+Y+0]=r.x,R[M+Y+1]=r.y,R[M+Y+2]=r.z,R[M+Y+3]=0),_===!0&&(r.fromBufferAttribute(I,V),R[M+Y+4]=r.x,R[M+Y+5]=r.y,R[M+Y+6]=r.z,R[M+Y+7]=0),g===!0&&(r.fromBufferAttribute(U,V),R[M+Y+8]=r.x,R[M+Y+9]=r.y,R[M+Y+10]=r.z,R[M+Y+11]=U.itemSize===4?r.w:1)}}h={count:u,texture:P,size:new Ot(E,C)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function VM(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Tp extends ke{constructor(t,e,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:br,f!==br&&f!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===br&&(i=Pr),i===void 0&&f===is&&(i=fs),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ap=new ke,Rp=new Tp(1,1);Rp.compareFunction=dp;const Cp=new gp,Pp=new Ty,Lp=new Mp,Pf=[],Lf=[],If=new Float32Array(16),Df=new Float32Array(9),Uf=new Float32Array(4);function Or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Pf[r];if(s===void 0&&(s=new Float32Array(r),Pf[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ea(n,t){let e=Lf[t];e===void 0&&(e=new Int32Array(t),Lf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function GM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function jM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),ve(e,i)}}function $M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;Df.set(i),n.uniformMatrix3fv(this.addr,!1,Df),ve(e,i)}}function YM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,i))return;If.set(i),n.uniformMatrix4fv(this.addr,!1,If),ve(e,i)}}function KM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ZM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function tE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function eE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function nE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function iE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function rE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Rp:Ap;e.setTexture2D(t||s,r)}function sE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Pp,r)}function oE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Lp,r)}function aE(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Cp,r)}function lE(n){switch(n){case 5126:return GM;case 35664:return WM;case 35665:return jM;case 35666:return XM;case 35674:return qM;case 35675:return $M;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return tE;case 36294:return eE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return aE}}function cE(n,t){n.uniform1fv(this.addr,t)}function uE(n,t){const e=Or(t,this.size,2);n.uniform2fv(this.addr,e)}function fE(n,t){const e=Or(t,this.size,3);n.uniform3fv(this.addr,e)}function hE(n,t){const e=Or(t,this.size,4);n.uniform4fv(this.addr,e)}function dE(n,t){const e=Or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pE(n,t){const e=Or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mE(n,t){const e=Or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gE(n,t){n.uniform1iv(this.addr,t)}function _E(n,t){n.uniform2iv(this.addr,t)}function vE(n,t){n.uniform3iv(this.addr,t)}function xE(n,t){n.uniform4iv(this.addr,t)}function yE(n,t){n.uniform1uiv(this.addr,t)}function bE(n,t){n.uniform2uiv(this.addr,t)}function SE(n,t){n.uniform3uiv(this.addr,t)}function ME(n,t){n.uniform4uiv(this.addr,t)}function EE(n,t,e){const i=this.cache,r=t.length,s=ea(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ap,s[a])}function wE(n,t,e){const i=this.cache,r=t.length,s=ea(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Pp,s[a])}function TE(n,t,e){const i=this.cache,r=t.length,s=ea(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Lp,s[a])}function AE(n,t,e){const i=this.cache,r=t.length,s=ea(e,r);_e(i,s)||(n.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Cp,s[a])}function RE(n){switch(n){case 5126:return cE;case 35664:return uE;case 35665:return fE;case 35666:return hE;case 35674:return dE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return _E;case 35668:case 35672:return vE;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return bE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return AE}}class CE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lE(e.type)}}class PE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RE(e.type)}}class LE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Nf(n,t){n.seq.push(t),n.map[t.id]=t}function IE(n,t,e){const i=n.name,r=i.length;for($a.lastIndex=0;;){const s=$a.exec(i),a=$a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Nf(e,c===void 0?new CE(o,n,t):new PE(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new LE(o),Nf(e,u)),e=u}}}class mo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);IE(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Of(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const DE=37297;let UE=0;function NE(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function OE(n){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(n);let i;switch(t===e?i="":t===Uo&&e===Do?i="LinearDisplayP3ToLinearSRGB":t===Do&&e===Uo&&(i="LinearSRGBToLinearDisplayP3"),n){case hi:case Qo:return[i,"LinearTransferOETF"];case dn:case mc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ff(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+NE(n.getShaderSource(t),a)}else return r}function FE(n,t){const e=OE(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kE(n,t){let e;switch(t){case Rx:e="Linear";break;case Cx:e="Reinhard";break;case Px:e="OptimizedCineon";break;case Lx:e="ACESFilmic";break;case Dx:e="AgX";break;case Ux:e="Neutral";break;case Ix:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function BE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function zE(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function HE(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Gr(n){return n!==""}function kf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(VE,WE)}const GE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WE(n,t){let e=Wt[t];if(e===void 0){const i=GE.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dl(e)}const jE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(jE,XE)}function XE(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function qE(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===np?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tx?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function $E(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YE(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function KE(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Tx:t="ENVMAP_BLENDING_MIX";break;case Ax:t="ENVMAP_BLENDING_ADD";break}return t}function ZE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function JE(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qE(e),c=$E(e),f=YE(e),u=KE(e),h=ZE(e),d=BE(e),_=zE(s),g=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?kE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,FE("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Dl(a),a=kf(a,e),a=Bf(a,e),o=Dl(o),o=kf(o,e),o=Bf(o,e),a=zf(a),o=zf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,E=S+p+o,C=Of(r,r.VERTEX_SHADER,y),R=Of(r,r.FRAGMENT_SHADER,E);r.attachShader(g,C),r.attachShader(g,R),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(G){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(C).trim(),M=r.getShaderInfoLog(R).trim();let V=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,R);else{const X=Ff(r,C,"vertex"),W=Ff(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+I+`
`+X+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||M==="")&&(Y=!1);Y&&(G.diagnostics={runnable:V,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:M,prefix:p}})}r.deleteShader(C),r.deleteShader(R),z=new mo(r,g),T=HE(r,g)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,DE)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let QE=0;class tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ew(t),e.set(t,i)),i}}class ew{constructor(t){this.id=QE++,this.code=t,this.usedTimes=0}}function nw(n,t,e,i,r,s,a){const o=new _p,l=new tw,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,w,G,I,U){const M=I.fog,V=U.geometry,Y=T.isMeshStandardMaterial?I.environment:null,X=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),W=X&&X.mapping===Jo?X.image.height:null,Q=_[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$=lt!==void 0?lt.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let gt,J,it,dt;if(Q){const xe=pn[Q];gt=xe.vertexShader,J=xe.fragmentShader}else gt=T.vertexShader,J=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),dt=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),yt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Tt=!!T.map,tt=!!T.matcap,Pt=!!X,k=!!T.aoMap,x=!!T.lightMap,F=!!T.bumpMap,H=!!T.normalMap,b=!!T.displacementMap,v=!!T.emissiveMap,L=!!T.metalnessMap,N=!!T.roughnessMap,B=T.anisotropy>0,D=T.clearcoat>0,q=T.iridescence>0,j=T.sheen>0,K=T.transmission>0,rt=B&&!!T.anisotropyMap,ot=D&&!!T.clearcoatMap,ft=D&&!!T.clearcoatNormalMap,_t=D&&!!T.clearcoatRoughnessMap,mt=q&&!!T.iridescenceMap,xt=q&&!!T.iridescenceThicknessMap,It=j&&!!T.sheenColorMap,At=j&&!!T.sheenRoughnessMap,Ft=!!T.specularMap,Ht=!!T.specularColorMap,Rt=!!T.specularIntensityMap,wt=K&&!!T.transmissionMap,A=K&&!!T.thicknessMap,st=!!T.gradientMap,ht=!!T.alphaMap,vt=T.alphaTest>0,Mt=!!T.alphaHash,Vt=!!T.extensions;let qt=ii;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(qt=n.toneMapping);const re={shaderID:Q,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:J,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:bt,instancing:yt,instancingColor:yt&&U.instanceColor!==null,instancingMorph:yt&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:hi,alphaToCoverage:!!T.alphaToCoverage,map:Tt,matcap:tt,envMap:Pt,envMapMode:Pt&&X.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:x,bumpMap:F,normalMap:H,displacementMap:h&&b,emissiveMap:v,normalMapObjectSpace:H&&T.normalMapType===$x,normalMapTangentSpace:H&&T.normalMapType===hp,metalnessMap:L,roughnessMap:N,anisotropy:B,anisotropyMap:rt,clearcoat:D,clearcoatMap:ot,clearcoatNormalMap:ft,clearcoatRoughnessMap:_t,iridescence:q,iridescenceMap:mt,iridescenceThicknessMap:xt,sheen:j,sheenColorMap:It,sheenRoughnessMap:At,specularMap:Ft,specularColorMap:Ht,specularIntensityMap:Rt,transmission:K,transmissionMap:wt,thicknessMap:A,gradientMap:st,opaque:T.transparent===!1&&T.blending===yr&&T.alphaToCoverage===!1,alphaMap:ht,alphaTest:vt,alphaHash:Mt,combine:T.combine,mapUv:Tt&&g(T.map.channel),aoMapUv:k&&g(T.aoMap.channel),lightMapUv:x&&g(T.lightMap.channel),bumpMapUv:F&&g(T.bumpMap.channel),normalMapUv:H&&g(T.normalMap.channel),displacementMapUv:b&&g(T.displacementMap.channel),emissiveMapUv:v&&g(T.emissiveMap.channel),metalnessMapUv:L&&g(T.metalnessMap.channel),roughnessMapUv:N&&g(T.roughnessMap.channel),anisotropyMapUv:rt&&g(T.anisotropyMap.channel),clearcoatMapUv:ot&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:At&&g(T.sheenRoughnessMap.channel),specularMapUv:Ft&&g(T.specularMap.channel),specularColorMapUv:Ht&&g(T.specularColorMap.channel),specularIntensityMapUv:Rt&&g(T.specularIntensityMap.channel),transmissionMapUv:wt&&g(T.transmissionMap.channel),thicknessMapUv:A&&g(T.thicknessMap.channel),alphaMapUv:ht&&g(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||B),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Tt||ht),fog:!!M,useFog:T.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Tt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===ee,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_n,flipSided:T.side===Fe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Vt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function p(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)w.push(G),w.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(S(w,T),y(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function S(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),T.push(o.mask)}function E(T){const w=_[T.type];let G;if(w){const I=pn[w];G=ky.clone(I.uniforms)}else G=T.uniforms;return G}function C(T,w){let G;for(let I=0,U=f.length;I<U;I++){const M=f[I];if(M.cacheKey===w){G=M,++G.usedTimes;break}}return G===void 0&&(G=new JE(n,w,T,s),f.push(G)),G}function R(T){if(--T.usedTimes===0){const w=f.indexOf(T);f[w]=f[f.length-1],f.pop(),T.destroy()}}function P(T){l.remove(T)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:f,dispose:z}}function iw(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function rw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gf(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,h,d,_,g,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,h,d,_,g,m){const p=a(u,h,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,h,d,_,g,m){const p=a(u,h,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||rw),i.length>1&&i.sort(h||Vf),r.length>1&&r.sort(h||Vf)}function f(){for(let u=t,h=n.length;u<h;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function sw(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gf,n.set(i,[a])):r>=s.length?(a=new Gf,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ow(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new Xt};break;case"SpotLight":e={position:new et,direction:new et,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new et,halfWidth:new et,halfHeight:new et};break}return n[t.id]=e,e}}}function aw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lw=0;function cw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function uw(n){const t=new ow,e=aw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new et);const r=new et,s=new le,a=new le;function o(c,f){let u=0,h=0,d=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,g=0,m=0,p=0,S=0,y=0,E=0,C=0,R=0,P=0,z=0;c.sort(cw);const T=f===!0?Math.PI:1;for(let G=0,I=c.length;G<I;G++){const U=c[G],M=U.color,V=U.intensity,Y=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=M.r*V*T,h+=M.g*V*T,d+=M.b*V*T;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],V);z++}else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const Q=U.shadow,lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,i.directionalShadow[_]=lt,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=U.shadow.matrix,y++}i.directional[_]=W,_++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(M).multiplyScalar(V*T),W.distance=Y,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[m]=W;const Q=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,Q.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[m]=Q.matrix,U.castShadow){const lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,i.spotShadow[m]=lt,i.spotShadowMap[m]=X,C++}m++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(M).multiplyScalar(V),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=W,p++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Q=U.shadow,lt=e.get(U);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,lt.shadowCameraNear=Q.camera.near,lt.shadowCameraFar=Q.camera.far,i.pointShadow[g]=lt,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=W,g++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(V*T),W.groundColor.copy(U.groundColor).multiplyScalar(V*T),i.hemi[S]=W,S++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const w=i.hash;(w.directionalLength!==_||w.pointLength!==g||w.spotLength!==m||w.rectAreaLength!==p||w.hemiLength!==S||w.numDirectionalShadows!==y||w.numPointShadows!==E||w.numSpotShadows!==C||w.numSpotMaps!==R||w.numLightProbes!==z)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=p,i.point.length=g,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=z,w.directionalLength=_,w.pointLength=g,w.spotLength=m,w.rectAreaLength=p,w.hemiLength=S,w.numDirectionalShadows=y,w.numPointShadows=E,w.numSpotShadows=C,w.numSpotMaps=R,w.numLightProbes=z,i.version=lw++)}function l(c,f){let u=0,h=0,d=0,_=0,g=0;const m=f.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(y.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Wf(n){const t=new uw(n),e=[],i=[];function r(){e.length=0,i.length=0}function s(f){e.push(f)}function a(f){i.push(f)}function o(f){t.setup(e,f)}function l(f){t.setupView(e,f)}return{init:r,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fw(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Wf(n),t.set(r,[o])):s>=a.length?(o=new Wf(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class hw extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dw extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
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
}`;function gw(n,t,e){let i=new Ep;const r=new Ot,s=new Ot,a=new Ee,o=new hw({depthPacking:qx}),l=new dw,c={},f=e.maxTextureSize,u={[li]:Fe,[Fe]:li,[_n]:_n},h=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=np;let p=this.type;this.render=function(R,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),w=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ni),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Cn&&this.type===Cn,M=p===Cn&&this.type!==Cn;for(let V=0,Y=R.length;V<Y;V++){const X=R[V],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const Q=W.getFrameExtents();if(r.multiply(Q),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Q.x),r.x=s.x*Q.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Q.y),r.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||U===!0||M===!0){const $=this.type!==Cn?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new ki(r.x,r.y,$),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const lt=W.getViewportCount();for(let $=0;$<lt;$++){const Z=W.getViewport($);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(a),W.updateMatrices(X,$),i=W.getFrustum(),E(P,z,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&S(W,z),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,w,G)};function S(R,P){const z=t.update(g);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ki(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,z,h,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,z,d,g,null)}function y(R,P,z,T){let w=null;const G=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)w=G;else if(w=z.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const I=w.uuid,U=P.uuid;let M=c[I];M===void 0&&(M={},c[I]=M);let V=M[U];V===void 0&&(V=w.clone(),M[U]=V,P.addEventListener("dispose",C)),w=V}if(w.visible=P.visible,w.wireframe=P.wireframe,T===Cn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=n.properties.get(w);I.light=z}return w}function E(R,P,z,T,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Cn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const U=t.update(R),M=R.material;if(Array.isArray(M)){const V=U.groups;for(let Y=0,X=V.length;Y<X;Y++){const W=V[Y],Q=M[W.materialIndex];if(Q&&Q.visible){const lt=y(R,Q,T,w);R.onBeforeShadow(n,R,P,z,U,lt,W),n.renderBufferDirect(z,null,U,lt,R,W),R.onAfterShadow(n,R,P,z,U,lt,W)}}}else if(M.visible){const V=y(R,M,T,w);R.onBeforeShadow(n,R,P,z,U,V,null),n.renderBufferDirect(z,null,U,V,R,null),R.onAfterShadow(n,R,P,z,U,V,null)}}const I=R.children;for(let U=0,M=I.length;U<M;U++)E(I[U],P,z,T,w)}function C(R){R.target.removeEventListener("dispose",C);for(const z in c){const T=c[z],w=R.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function _w(n){function t(){let A=!1;const st=new Ee;let ht=null;const vt=new Ee(0,0,0,0);return{setMask:function(Mt){ht!==Mt&&!A&&(n.colorMask(Mt,Mt,Mt,Mt),ht=Mt)},setLocked:function(Mt){A=Mt},setClear:function(Mt,Vt,qt,re,xe){xe===!0&&(Mt*=re,Vt*=re,qt*=re),st.set(Mt,Vt,qt,re),vt.equals(st)===!1&&(n.clearColor(Mt,Vt,qt,re),vt.copy(st))},reset:function(){A=!1,ht=null,vt.set(-1,0,0,0)}}}function e(){let A=!1,st=null,ht=null,vt=null;return{setTest:function(Mt){Mt?dt(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!A&&(n.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(ht!==Mt){switch(Mt){case xx:n.depthFunc(n.NEVER);break;case yx:n.depthFunc(n.ALWAYS);break;case bx:n.depthFunc(n.LESS);break;case Po:n.depthFunc(n.LEQUAL);break;case Sx:n.depthFunc(n.EQUAL);break;case Mx:n.depthFunc(n.GEQUAL);break;case Ex:n.depthFunc(n.GREATER);break;case wx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=Mt}},setLocked:function(Mt){A=Mt},setClear:function(Mt){vt!==Mt&&(n.clearDepth(Mt),vt=Mt)},reset:function(){A=!1,st=null,ht=null,vt=null}}}function i(){let A=!1,st=null,ht=null,vt=null,Mt=null,Vt=null,qt=null,re=null,xe=null;return{setTest:function(Zt){A||(Zt?dt(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!A&&(n.stencilMask(Zt),st=Zt)},setFunc:function(Zt,ue,fe){(ht!==Zt||vt!==ue||Mt!==fe)&&(n.stencilFunc(Zt,ue,fe),ht=Zt,vt=ue,Mt=fe)},setOp:function(Zt,ue,fe){(Vt!==Zt||qt!==ue||re!==fe)&&(n.stencilOp(Zt,ue,fe),Vt=Zt,qt=ue,re=fe)},setLocked:function(Zt){A=Zt},setClear:function(Zt){xe!==Zt&&(n.clearStencil(Zt),xe=Zt)},reset:function(){A=!1,st=null,ht=null,vt=null,Mt=null,Vt=null,qt=null,re=null,xe=null}}}const r=new t,s=new e,a=new i,o=new WeakMap,l=new WeakMap;let c={},f={},u=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,S=null,y=null,E=null,C=null,R=new Xt(0,0,0),P=0,z=!1,T=null,w=null,G=null,I=null,U=null;const M=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Y>=2);let W=null,Q={};const lt=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Z=new Ee().fromArray(lt),gt=new Ee().fromArray($);function J(A,st,ht,vt){const Mt=new Uint8Array(4),Vt=n.createTexture();n.bindTexture(A,Vt),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<ht;qt++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(st+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return Vt}const it={};it[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),dt(n.DEPTH_TEST),s.setFunc(Po),F(!1),H(Eu),dt(n.CULL_FACE),k(ni);function dt(A){c[A]!==!0&&(n.enable(A),c[A]=!0)}function pt(A){c[A]!==!1&&(n.disable(A),c[A]=!1)}function yt(A,st){return f[A]!==st?(n.bindFramebuffer(A,st),f[A]=st,A===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=st),A===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(A,st){let ht=h,vt=!1;if(A){ht=u.get(st),ht===void 0&&(ht=[],u.set(st,ht));const Mt=A.textures;if(ht.length!==Mt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Vt=0,qt=Mt.length;Vt<qt;Vt++)ht[Vt]=n.COLOR_ATTACHMENT0+Vt;ht.length=Mt.length,vt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,vt=!0);vt&&n.drawBuffers(ht)}function Tt(A){return d!==A?(n.useProgram(A),d=A,!0):!1}const tt={[Ri]:n.FUNC_ADD,[nx]:n.FUNC_SUBTRACT,[ix]:n.FUNC_REVERSE_SUBTRACT};tt[rx]=n.MIN,tt[sx]=n.MAX;const Pt={[ox]:n.ZERO,[ax]:n.ONE,[lx]:n.SRC_COLOR,[Al]:n.SRC_ALPHA,[px]:n.SRC_ALPHA_SATURATE,[hx]:n.DST_COLOR,[ux]:n.DST_ALPHA,[cx]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[dx]:n.ONE_MINUS_DST_COLOR,[fx]:n.ONE_MINUS_DST_ALPHA,[mx]:n.CONSTANT_COLOR,[gx]:n.ONE_MINUS_CONSTANT_COLOR,[_x]:n.CONSTANT_ALPHA,[vx]:n.ONE_MINUS_CONSTANT_ALPHA};function k(A,st,ht,vt,Mt,Vt,qt,re,xe,Zt){if(A===ni){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(dt(n.BLEND),_=!0),A!==ex){if(A!==g||Zt!==z){if((m!==Ri||y!==Ri)&&(n.blendEquation(n.FUNC_ADD),m=Ri,y=Ri),Zt)switch(A){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.ONE,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,S=null,E=null,C=null,R.set(0,0,0),P=0,g=A,z=Zt}return}Mt=Mt||st,Vt=Vt||ht,qt=qt||vt,(st!==m||Mt!==y)&&(n.blendEquationSeparate(tt[st],tt[Mt]),m=st,y=Mt),(ht!==p||vt!==S||Vt!==E||qt!==C)&&(n.blendFuncSeparate(Pt[ht],Pt[vt],Pt[Vt],Pt[qt]),p=ht,S=vt,E=Vt,C=qt),(re.equals(R)===!1||xe!==P)&&(n.blendColor(re.r,re.g,re.b,xe),R.copy(re),P=xe),g=A,z=!1}function x(A,st){A.side===_n?pt(n.CULL_FACE):dt(n.CULL_FACE);let ht=A.side===Fe;st&&(ht=!ht),F(ht),A.blending===yr&&A.transparent===!1?k(ni):k(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);const vt=A.stencilWrite;a.setTest(vt),vt&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),v(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(A){T!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),T=A)}function H(A){A!==Jv?(dt(n.CULL_FACE),A!==w&&(A===Eu?n.cullFace(n.BACK):A===Qv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),w=A}function b(A){A!==G&&(V&&n.lineWidth(A),G=A)}function v(A,st,ht){A?(dt(n.POLYGON_OFFSET_FILL),(I!==st||U!==ht)&&(n.polygonOffset(st,ht),I=st,U=ht)):pt(n.POLYGON_OFFSET_FILL)}function L(A){A?dt(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function N(A){A===void 0&&(A=n.TEXTURE0+M-1),W!==A&&(n.activeTexture(A),W=A)}function B(A,st,ht){ht===void 0&&(W===null?ht=n.TEXTURE0+M-1:ht=W);let vt=Q[ht];vt===void 0&&(vt={type:void 0,texture:void 0},Q[ht]=vt),(vt.type!==A||vt.texture!==st)&&(W!==ht&&(n.activeTexture(ht),W=ht),n.bindTexture(A,st||it[A]),vt.type=A,vt.texture=st)}function D(){const A=Q[W];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function rt(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _t(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function It(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function At(A){Z.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Z.copy(A))}function Ft(A){gt.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),gt.copy(A))}function Ht(A,st){let ht=l.get(st);ht===void 0&&(ht=new WeakMap,l.set(st,ht));let vt=ht.get(A);vt===void 0&&(vt=n.getUniformBlockIndex(st,A.name),ht.set(A,vt))}function Rt(A,st){const vt=l.get(st).get(A);o.get(st)!==vt&&(n.uniformBlockBinding(st,vt,A.__bindingPointIndex),o.set(st,vt))}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,Q={},f={},u=new WeakMap,h=[],d=null,_=!1,g=null,m=null,p=null,S=null,y=null,E=null,C=null,R=new Xt(0,0,0),P=0,z=!1,T=null,w=null,G=null,I=null,U=null,Z.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:dt,disable:pt,bindFramebuffer:yt,drawBuffers:bt,useProgram:Tt,setBlending:k,setMaterial:x,setFlipSided:F,setCullFace:H,setLineWidth:b,setPolygonOffset:v,setScissorTest:L,activeTexture:N,bindTexture:B,unbindTexture:D,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:xt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Rt,texStorage2D:_t,texStorage3D:mt,texSubImage2D:K,texSubImage3D:rt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:At,viewport:Ft,reset:wt}}function vw(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,f=new WeakMap;let u;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return d?new OffscreenCanvas(b,v):Oo("canvas")}function g(b,v,L){let N=1;const B=H(b);if((B.width>L||B.height>L)&&(N=L/Math.max(B.width,B.height)),N<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const D=Math.floor(N*B.width),q=Math.floor(N*B.height);u===void 0&&(u=_(D,q));const j=v?_(D,q):u;return j.width=D,j.height=q,j.getContext("2d").drawImage(b,0,0,D,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+D+"x"+q+")."),j}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==nn&&b.minFilter!==ln}function p(b){n.generateMipmap(b)}function S(b,v,L,N,B=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let D=v;if(v===n.RED&&(L===n.FLOAT&&(D=n.R32F),L===n.HALF_FLOAT&&(D=n.R16F),L===n.UNSIGNED_BYTE&&(D=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(D=n.R8UI),L===n.UNSIGNED_SHORT&&(D=n.R16UI),L===n.UNSIGNED_INT&&(D=n.R32UI),L===n.BYTE&&(D=n.R8I),L===n.SHORT&&(D=n.R16I),L===n.INT&&(D=n.R32I)),v===n.RG&&(L===n.FLOAT&&(D=n.RG32F),L===n.HALF_FLOAT&&(D=n.RG16F),L===n.UNSIGNED_BYTE&&(D=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(D=n.RG8UI),L===n.UNSIGNED_SHORT&&(D=n.RG16UI),L===n.UNSIGNED_INT&&(D=n.RG32UI),L===n.BYTE&&(D=n.RG8I),L===n.SHORT&&(D=n.RG16I),L===n.INT&&(D=n.RG32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(D=n.RGB9_E5),v===n.RGBA){const q=B?Io:Jt.getTransfer(N);L===n.FLOAT&&(D=n.RGBA32F),L===n.HALF_FLOAT&&(D=n.RGBA16F),L===n.UNSIGNED_BYTE&&(D=q===ee?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(D=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(D=n.RGB5_A1)}return(D===n.R16F||D===n.R32F||D===n.RG16F||D===n.RG32F||D===n.RGBA16F||D===n.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function y(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==nn&&b.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function E(b){const v=b.target;v.removeEventListener("dispose",E),R(v),v.isVideoTexture&&f.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),z(v)}function R(b){const v=i.get(b);if(v.__webglInit===void 0)return;const L=b.source,N=h.get(L);if(N){const B=N[v.__cacheKey];B.usedTimes--,B.usedTimes===0&&P(b),Object.keys(N).length===0&&h.delete(L)}i.remove(b)}function P(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const L=b.source,N=h.get(L);delete N[v.__cacheKey],a.memory.textures--}function z(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(v.__webglFramebuffer[N]))for(let B=0;B<v.__webglFramebuffer[N].length;B++)n.deleteFramebuffer(v.__webglFramebuffer[N][B]);else n.deleteFramebuffer(v.__webglFramebuffer[N]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[N])}else{if(Array.isArray(v.__webglFramebuffer))for(let N=0;N<v.__webglFramebuffer.length;N++)n.deleteFramebuffer(v.__webglFramebuffer[N]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let N=0;N<v.__webglColorRenderbuffer.length;N++)v.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[N]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=b.textures;for(let N=0,B=L.length;N<B;N++){const D=i.get(L[N]);D.__webglTexture&&(n.deleteTexture(D.__webglTexture),a.memory.textures--),i.remove(L[N])}i.remove(b)}let T=0;function w(){T=0}function G(){const b=T;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),T+=1,b}function I(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function U(b,v){const L=i.get(b);if(b.isVideoTexture&&x(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const N=b.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,b,v);return}}e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function M(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Z(L,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function V(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Z(L,b,v);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function Y(b,v){const L=i.get(b);if(b.version>0&&L.__version!==b.version){gt(L,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const X={[Ll]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},W={[nn]:n.NEAREST,[Nx]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[xa]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Q={[Yx]:n.NEVER,[ey]:n.ALWAYS,[Kx]:n.LESS,[dp]:n.LEQUAL,[Zx]:n.EQUAL,[ty]:n.GEQUAL,[Jx]:n.GREATER,[Qx]:n.NOTEQUAL};function lt(b,v){if(v.type===Qn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===xa||v.magFilter===Rs||v.magFilter===Ii||v.minFilter===ln||v.minFilter===xa||v.minFilter===Rs||v.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,X[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,X[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,X[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,W[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,W[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==Rs&&v.minFilter!==Ii||v.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $(b,v){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",E));const N=v.source;let B=h.get(N);B===void 0&&(B={},h.set(N,B));const D=I(v);if(D!==b.__cacheKey){B[D]===void 0&&(B[D]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),B[D].usedTimes++;const q=B[b.__cacheKey];q!==void 0&&(B[b.__cacheKey].usedTimes--,q.usedTimes===0&&P(v)),b.__cacheKey=D,b.__webglTexture=B[D].texture}return L}function Z(b,v,L){let N=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(N=n.TEXTURE_3D);const B=$(b,v),D=v.source;e.bindTexture(N,b.__webglTexture,n.TEXTURE0+L);const q=i.get(D);if(D.version!==q.__version||B===!0){e.activeTexture(n.TEXTURE0+L);const j=Jt.getPrimaries(Jt.workingColorSpace),K=v.colorSpace===Jn?null:Jt.getPrimaries(v.colorSpace),rt=v.colorSpace===Jn||j===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ot=g(v.image,!1,r.maxTextureSize);ot=F(v,ot);const ft=s.convert(v.format,v.colorSpace),_t=s.convert(v.type);let mt=S(v.internalFormat,ft,_t,v.colorSpace,v.isVideoTexture);lt(N,v);let xt;const It=v.mipmaps,At=v.isVideoTexture!==!0&&mt!==fp,Ft=q.__version===void 0||B===!0,Ht=D.dataReady,Rt=y(v,ot);if(v.isDepthTexture)mt=n.DEPTH_COMPONENT16,v.type===Qn?mt=n.DEPTH_COMPONENT32F:v.type===Pr?mt=n.DEPTH_COMPONENT24:v.type===fs&&(mt=n.DEPTH24_STENCIL8),Ft&&(At?e.texStorage2D(n.TEXTURE_2D,1,mt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,mt,ot.width,ot.height,0,ft,_t,null));else if(v.isDataTexture)if(It.length>0){At&&Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,It[0].width,It[0].height);for(let wt=0,A=It.length;wt<A;wt++)xt=It[wt],At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,_t,xt.data):e.texImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,ft,_t,xt.data);v.generateMipmaps=!1}else At?(Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,ot.width,ot.height),Ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,ft,_t,ot.data)):e.texImage2D(n.TEXTURE_2D,0,mt,ot.width,ot.height,0,ft,_t,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){At&&Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,mt,It[0].width,It[0].height,ot.depth);for(let wt=0,A=It.length;wt<A;wt++)xt=It[wt],v.format!==vn?ft!==null?At?Ht&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,ot.depth,ft,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,wt,mt,xt.width,xt.height,ot.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?Ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,wt,0,0,0,xt.width,xt.height,ot.depth,ft,_t,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,wt,mt,xt.width,xt.height,ot.depth,0,ft,_t,xt.data)}else{At&&Ft&&e.texStorage2D(n.TEXTURE_2D,Rt,mt,It[0].width,It[0].height);for(let wt=0,A=It.length;wt<A;wt++)xt=It[wt],v.format!==vn?ft!==null?At?Ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,xt.width,xt.height,ft,_t,xt.data):e.texImage2D(n.TEXTURE_2D,wt,mt,xt.width,xt.height,0,ft,_t,xt.data)}else if(v.isDataArrayTexture)At?(Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,mt,ot.width,ot.height,ot.depth),Ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,ft,_t,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,mt,ot.width,ot.height,ot.depth,0,ft,_t,ot.data);else if(v.isData3DTexture)At?(Ft&&e.texStorage3D(n.TEXTURE_3D,Rt,mt,ot.width,ot.height,ot.depth),Ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,ft,_t,ot.data)):e.texImage3D(n.TEXTURE_3D,0,mt,ot.width,ot.height,ot.depth,0,ft,_t,ot.data);else if(v.isFramebufferTexture){if(Ft)if(At)e.texStorage2D(n.TEXTURE_2D,Rt,mt,ot.width,ot.height);else{let wt=ot.width,A=ot.height;for(let st=0;st<Rt;st++)e.texImage2D(n.TEXTURE_2D,st,mt,wt,A,0,ft,_t,null),wt>>=1,A>>=1}}else if(It.length>0){if(At&&Ft){const wt=H(It[0]);e.texStorage2D(n.TEXTURE_2D,Rt,mt,wt.width,wt.height)}for(let wt=0,A=It.length;wt<A;wt++)xt=It[wt],At?Ht&&e.texSubImage2D(n.TEXTURE_2D,wt,0,0,ft,_t,xt):e.texImage2D(n.TEXTURE_2D,wt,mt,ft,_t,xt);v.generateMipmaps=!1}else if(At){if(Ft){const wt=H(ot);e.texStorage2D(n.TEXTURE_2D,Rt,mt,wt.width,wt.height)}Ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,_t,ot)}else e.texImage2D(n.TEXTURE_2D,0,mt,ft,_t,ot);m(v)&&p(N),q.__version=D.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function gt(b,v,L){if(v.image.length!==6)return;const N=$(b,v),B=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);const D=i.get(B);if(B.version!==D.__version||N===!0){e.activeTexture(n.TEXTURE0+L);const q=Jt.getPrimaries(Jt.workingColorSpace),j=v.colorSpace===Jn?null:Jt.getPrimaries(v.colorSpace),K=v.colorSpace===Jn||q===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let A=0;A<6;A++)!rt&&!ot?ft[A]=g(v.image[A],!0,r.maxCubemapSize):ft[A]=ot?v.image[A].image:v.image[A],ft[A]=F(v,ft[A]);const _t=ft[0],mt=s.convert(v.format,v.colorSpace),xt=s.convert(v.type),It=S(v.internalFormat,mt,xt,v.colorSpace),At=v.isVideoTexture!==!0,Ft=D.__version===void 0||N===!0,Ht=B.dataReady;let Rt=y(v,_t);lt(n.TEXTURE_CUBE_MAP,v);let wt;if(rt){At&&Ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,_t.width,_t.height);for(let A=0;A<6;A++){wt=ft[A].mipmaps;for(let st=0;st<wt.length;st++){const ht=wt[st];v.format!==vn?mt!==null?At?Ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st,It,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st,0,0,ht.width,ht.height,mt,xt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st,It,ht.width,ht.height,0,mt,xt,ht.data)}}}else{if(wt=v.mipmaps,At&&Ft){wt.length>0&&Rt++;const A=H(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,It,A.width,A.height)}for(let A=0;A<6;A++)if(ot){At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,ft[A].width,ft[A].height,mt,xt,ft[A].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,It,ft[A].width,ft[A].height,0,mt,xt,ft[A].data);for(let st=0;st<wt.length;st++){const vt=wt[st].image[A].image;At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st+1,0,0,vt.width,vt.height,mt,xt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st+1,It,vt.width,vt.height,0,mt,xt,vt.data)}}else{At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,0,0,mt,xt,ft[A]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,It,mt,xt,ft[A]);for(let st=0;st<wt.length;st++){const ht=wt[st];At?Ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st+1,0,0,mt,xt,ht.image[A]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+A,st+1,It,mt,xt,ht.image[A])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),D.__version=B.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function J(b,v,L,N,B,D){const q=s.convert(L.format,L.colorSpace),j=s.convert(L.type),K=S(L.internalFormat,q,j,L.colorSpace);if(!i.get(v).__hasExternalTextures){const ot=Math.max(1,v.width>>D),ft=Math.max(1,v.height>>D);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?e.texImage3D(B,D,K,ot,ft,v.depth,0,q,j,null):e.texImage2D(B,D,K,ot,ft,0,q,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),k(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,B,i.get(L).__webglTexture,0,Pt(v)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,B,i.get(L).__webglTexture,D),e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(b,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let N=n.DEPTH_COMPONENT24;if(L||k(v)){const B=v.depthTexture;B&&B.isDepthTexture&&(B.type===Qn?N=n.DEPTH_COMPONENT32F:B.type===Pr&&(N=n.DEPTH_COMPONENT24));const D=Pt(v);k(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D,N,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,D,N,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,N,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const N=Pt(v);L&&k(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,v.width,v.height):k(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const N=v.textures;for(let B=0;B<N.length;B++){const D=N[B],q=s.convert(D.format,D.colorSpace),j=s.convert(D.type),K=S(D.internalFormat,q,j,D.colorSpace),rt=Pt(v);L&&k(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,K,v.width,v.height):k(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);const N=i.get(v.depthTexture).__webglTexture,B=Pt(v);if(v.depthTexture.format===br)k(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,N,0);else if(v.depthTexture.format===is)k(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function pt(b){const v=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");dt(v.__webglFramebuffer,b)}else if(L){v.__webglDepthbuffer=[];for(let N=0;N<6;N++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[N]),v.__webglDepthbuffer[N]=n.createRenderbuffer(),it(v.__webglDepthbuffer[N],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),it(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(b,v,L){const N=i.get(b);v!==void 0&&J(N.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&pt(b)}function bt(b){const v=b.texture,L=i.get(b),N=i.get(v);b.addEventListener("dispose",C);const B=b.textures,D=b.isWebGLCubeRenderTarget===!0,q=B.length>1;if(q||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=v.version,a.memory.textures++),D){L.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[j]=[];for(let K=0;K<v.mipmaps.length;K++)L.__webglFramebuffer[j][K]=n.createFramebuffer()}else L.__webglFramebuffer[j]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)L.__webglFramebuffer[j]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(q)for(let j=0,K=B.length;j<K;j++){const rt=i.get(B[j]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&k(b)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let j=0;j<B.length;j++){const K=B[j];L.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[j]);const rt=s.convert(K.format,K.colorSpace),ot=s.convert(K.type),ft=S(K.internalFormat,rt,ot,K.colorSpace,b.isXRRenderTarget===!0),_t=Pt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,ft,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,L.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),it(L.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(D){e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),lt(n.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)J(L.__webglFramebuffer[j][K],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else J(L.__webglFramebuffer[j],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let j=0,K=B.length;j<K;j++){const rt=B[j],ot=i.get(rt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),lt(n.TEXTURE_2D,rt),J(L.__webglFramebuffer,b,rt,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),m(rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),lt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)J(L.__webglFramebuffer[K],b,v,n.COLOR_ATTACHMENT0,j,K);else J(L.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,j,0);m(v)&&p(j),e.unbindTexture()}b.depthBuffer&&pt(b)}function Tt(b){const v=b.textures;for(let L=0,N=v.length;L<N;L++){const B=v[L];if(m(B)){const D=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,q=i.get(B).__webglTexture;e.bindTexture(D,q),p(D),e.unbindTexture()}}}function tt(b){if(b.samples>0&&k(b)===!1){const v=b.textures,L=b.width,N=b.height;let B=n.COLOR_BUFFER_BIT;const D=[],q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=i.get(b),K=v.length>1;if(K)for(let rt=0;rt<v.length;rt++)e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let rt=0;rt<v.length;rt++){D.push(n.COLOR_ATTACHMENT0+rt),b.depthBuffer&&D.push(q);const ot=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(ot===!1&&(b.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&j.__isTransmissionRenderTarget!==!0&&(B|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,j.__webglColorRenderbuffer[rt]),ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[q]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[q])),K){const ft=i.get(v[rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,L,N,0,0,L,N,B,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<v.length;rt++){e.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,j.__webglColorRenderbuffer[rt]);const ot=i.get(v[rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,j.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Pt(b){return Math.min(r.maxSamples,b.samples)}function k(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function x(b){const v=a.render.frame;f.get(b)!==v&&(f.set(b,v),b.update())}function F(b,v){const L=b.colorSpace,N=b.format,B=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||L!==hi&&L!==Jn&&(Jt.getTransfer(L)===ee?(N!==vn||B!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function H(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=w,this.setTexture2D=U,this.setTexture2DArray=M,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=yt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=k}function xw(n,t){function e(i,r=Jn){let s;const a=Jt.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===op)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ox)return n.BYTE;if(i===Fx)return n.SHORT;if(i===rp)return n.UNSIGNED_SHORT;if(i===sp)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Lo)return n.HALF_FLOAT;if(i===Bx)return n.ALPHA;if(i===zx)return n.RGB;if(i===vn)return n.RGBA;if(i===Hx)return n.LUMINANCE;if(i===Vx)return n.LUMINANCE_ALPHA;if(i===br)return n.DEPTH_COMPONENT;if(i===is)return n.DEPTH_STENCIL;if(i===Gx)return n.RED;if(i===lp)return n.RED_INTEGER;if(i===Wx)return n.RG;if(i===cp)return n.RG_INTEGER;if(i===up)return n.RGBA_INTEGER;if(i===ya||i===ba||i===Sa||i===Ma)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Cu||i===Pu||i===Lu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fp)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Iu||i===Du)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Iu)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Du)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Nu||i===Ou||i===Fu||i===ku||i===Bu||i===zu||i===Hu||i===Vu||i===Gu||i===Wu||i===ju||i===Xu||i===qu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Uu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ku)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===$u||i===Yu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jx||i===Ku||i===Zu||i===Ju)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ku)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ju)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class yw extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wr extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mw=`
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

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new ke,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,r=new ci({vertexShader:Sw,fragmentShader:Mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Xe(new ms(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class ww extends Vi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,_=null;const g=new Ew,m=e.getContextAttributes();let p=null,S=null;const y=[],E=[],C=new Ot;let R=null;const P=new Qe;P.layers.enable(1),P.viewport=new Ee;const z=new Qe;z.layers.enable(2),z.viewport=new Ee;const T=[P,z],w=new yw;w.layers.enable(1),w.layers.enable(2);let G=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=y[J];return it===void 0&&(it=new Ya,y[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=y[J];return it===void 0&&(it=new Ya,y[J]=it),it.getGripSpace()},this.getHand=function(J){let it=y[J];return it===void 0&&(it=new Ya,y[J]=it),it.getHandSpace()};function U(J){const it=E.indexOf(J.inputSource);if(it===-1)return;const dt=y[it];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||a),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function M(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",V);for(let J=0;J<y.length;J++){const it=E[J];it!==null&&(E[J]=null,y[J].disconnect(it))}G=null,I=null,g.reset(),t.setRenderTarget(p),d=null,h=null,u=null,r=null,S=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",M),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ki(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,dt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?is:br,dt=m.stencil?fs:Pr);const yt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=new XRWebGLBinding(r,e),h=u.createProjectionLayer(yt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new ki(h.textureWidth,h.textureHeight,{format:vn,type:ri,depthTexture:new Tp(h.textureWidth,h.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const bt=t.properties.get(S);bt.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),gt.setContext(r),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(J){for(let it=0;it<J.removed.length;it++){const dt=J.removed[it],pt=E.indexOf(dt);pt>=0&&(E[pt]=null,y[pt].disconnect(dt))}for(let it=0;it<J.added.length;it++){const dt=J.added[it];let pt=E.indexOf(dt);if(pt===-1){for(let bt=0;bt<y.length;bt++)if(bt>=E.length){E.push(dt),pt=bt;break}else if(E[bt]===null){E[bt]=dt,pt=bt;break}if(pt===-1)break}const yt=y[pt];yt&&yt.connect(dt)}}const Y=new et,X=new et;function W(J,it,dt){Y.setFromMatrixPosition(it.matrixWorld),X.setFromMatrixPosition(dt.matrixWorld);const pt=Y.distanceTo(X),yt=it.projectionMatrix.elements,bt=dt.projectionMatrix.elements,Tt=yt[14]/(yt[10]-1),tt=yt[14]/(yt[10]+1),Pt=(yt[9]+1)/yt[5],k=(yt[9]-1)/yt[5],x=(yt[8]-1)/yt[0],F=(bt[8]+1)/bt[0],H=Tt*x,b=Tt*F,v=pt/(-x+F),L=v*-x;it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(L),J.translateZ(v),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const N=Tt+v,B=tt+v,D=H-L,q=b+(pt-L),j=Pt*tt/B*N,K=k*tt/B*N;J.projectionMatrix.makePerspective(D,q,j,K,N,B),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Q(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),w.near=z.near=P.near=J.near,w.far=z.far=P.far=J.far,(G!==w.near||I!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,I=w.far,P.near=G,P.far=I,z.near=G,z.far=I,P.updateProjectionMatrix(),z.updateProjectionMatrix(),J.updateProjectionMatrix());const it=J.parent,dt=w.cameras;Q(w,it);for(let pt=0;pt<dt.length;pt++)Q(dt[pt],it);dt.length===2?W(w,P,z):w.projectionMatrix.copy(P.projectionMatrix),lt(J,w,it)};function lt(J,it,dt){dt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null};let $=null;function Z(J,it){if(f=it.getViewerPose(c||a),_=it,f!==null){const dt=f.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let pt=!1;dt.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let bt=0;bt<dt.length;bt++){const Tt=dt[bt];let tt=null;if(d!==null)tt=d.getViewport(Tt);else{const k=u.getViewSubImage(h,Tt);tt=k.viewport,bt===0&&(t.setRenderTargetTextures(S,k.colorTexture,h.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(S))}let Pt=T[bt];Pt===void 0&&(Pt=new Qe,Pt.layers.enable(bt),Pt.viewport=new Ee,T[bt]=Pt),Pt.matrix.fromArray(Tt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Tt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(tt.x,tt.y,tt.width,tt.height),bt===0&&(w.matrix.copy(Pt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(Pt)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const bt=u.getDepthInformation(dt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,r.renderState)}}for(let dt=0;dt<y.length;dt++){const pt=E[dt],yt=y[dt];pt!==null&&yt!==void 0&&yt.update(pt,it,c||a)}g.render(t,w),$&&$(J,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}const gt=new wp;gt.setAnimationLoop(Z),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}}const bi=new bn,Tw=new le;function Aw(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,E=S.envMapRotation;if(y&&(m.envMap.value=y,bi.copy(E),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*C,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rw(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(_(S),E=f(S),r[S.id]=E,S.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(S,C);const R=t.render.frame;s[S.id]!==R&&(h(S),s[S.id]=R)}function f(S){const y=u();S.__bindingPointIndex=y;const E=n.createBuffer(),C=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=r[S.id],E=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,P=E.length;R<P;R++){const z=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,w=z.length;T<w;T++){const G=z[T];if(d(G,R,T,C)===!0){const I=G.__offset,U=Array.isArray(G.value)?G.value:[G.value];let M=0;for(let V=0;V<U.length;V++){const Y=U[V],X=g(Y);typeof Y=="number"||typeof Y=="boolean"?(G.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,I+M,G.__data)):Y.isMatrix3?(G.__data[0]=Y.elements[0],G.__data[1]=Y.elements[1],G.__data[2]=Y.elements[2],G.__data[3]=0,G.__data[4]=Y.elements[3],G.__data[5]=Y.elements[4],G.__data[6]=Y.elements[5],G.__data[7]=0,G.__data[8]=Y.elements[6],G.__data[9]=Y.elements[7],G.__data[10]=Y.elements[8],G.__data[11]=0):(Y.toArray(G.__data,M),M+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,y,E,C){const R=S.value,P=y+"_"+E;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const z=C[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[P]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function _(S){const y=S.uniforms;let E=0;const C=16;for(let P=0,z=y.length;P<z;P++){const T=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,G=T.length;w<G;w++){const I=T[w],U=Array.isArray(I.value)?I.value:[I.value];for(let M=0,V=U.length;M<V;M++){const Y=U[M],X=g(Y),W=E%C;W!==0&&C-W<X.boundary&&(E+=C-W),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=X.storage}}}const R=E%C;return R>0&&(E+=C-R),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Cw{constructor(t={}){const{canvas:e=xy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let E=!1,C=0,R=0,P=null,z=-1,T=null;const w=new Ee,G=new Ee;let I=null;const U=new Xt(0);let M=0,V=e.width,Y=e.height,X=1,W=null,Q=null;const lt=new Ee(0,0,V,Y),$=new Ee(0,0,V,Y);let Z=!1;const gt=new Ep;let J=!1,it=!1;const dt=new le,pt=new Ot,yt=new et,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return P===null?X:1}let tt=i;function Pt(O,nt){const ct=e.getContext(O,nt);return ct!==null?ct:null}try{const O={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",vt,!1),tt===null){const nt="webgl2";if(tt=Pt(nt,O),tt===null)throw Pt(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let k,x,F,H,b,v,L,N,B,D,q,j,K,rt,ot,ft,_t,mt,xt,It,At,Ft,Ht,Rt;function wt(){k=new FM(tt),k.init(),x=new PM(tt,k,t),Ft=new xw(tt,k),F=new _w(tt),H=new zM(tt),b=new iw,v=new vw(tt,k,F,b,x,Ft,H),L=new IM(y),N=new OM(y),B=new jy(tt),Ht=new RM(tt,B),D=new kM(tt,B,H,Ht),q=new VM(tt,D,B,H),xt=new HM(tt,x,v),ft=new LM(b),j=new nw(y,L,N,k,x,Ht,ft),K=new Aw(y,b),rt=new sw,ot=new fw(k),mt=new AM(y,L,N,F,q,h,l),_t=new gw(y,q,x),Rt=new Rw(tt,H,x,F),It=new CM(tt,k,H),At=new BM(tt,k,H),H.programs=j.programs,y.capabilities=x,y.extensions=k,y.properties=b,y.renderLists=rt,y.shadowMap=_t,y.state=F,y.info=H}wt();const A=new ww(y,tt);this.xr=A,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){const O=k.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=k.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(O){O!==void 0&&(X=O,this.setSize(V,Y,!1))},this.getSize=function(O){return O.set(V,Y)},this.setSize=function(O,nt,ct=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=O,Y=nt,e.width=Math.floor(O*X),e.height=Math.floor(nt*X),ct===!0&&(e.style.width=O+"px",e.style.height=nt+"px"),this.setViewport(0,0,O,nt)},this.getDrawingBufferSize=function(O){return O.set(V*X,Y*X).floor()},this.setDrawingBufferSize=function(O,nt,ct){V=O,Y=nt,X=ct,e.width=Math.floor(O*ct),e.height=Math.floor(nt*ct),this.setViewport(0,0,O,nt)},this.getCurrentViewport=function(O){return O.copy(w)},this.getViewport=function(O){return O.copy(lt)},this.setViewport=function(O,nt,ct,ut){O.isVector4?lt.set(O.x,O.y,O.z,O.w):lt.set(O,nt,ct,ut),F.viewport(w.copy(lt).multiplyScalar(X).round())},this.getScissor=function(O){return O.copy($)},this.setScissor=function(O,nt,ct,ut){O.isVector4?$.set(O.x,O.y,O.z,O.w):$.set(O,nt,ct,ut),F.scissor(G.copy($).multiplyScalar(X).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(O){F.setScissorTest(Z=O)},this.setOpaqueSort=function(O){W=O},this.setTransparentSort=function(O){Q=O},this.getClearColor=function(O){return O.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(O=!0,nt=!0,ct=!0){let ut=0;if(O){let at=!1;if(P!==null){const Et=P.texture.format;at=Et===up||Et===cp||Et===lp}if(at){const Et=P.texture.type,Ct=Et===ri||Et===Pr||Et===rp||Et===fs||Et===op||Et===ap,Dt=mt.getClearColor(),Nt=mt.getClearAlpha(),Bt=Dt.r,kt=Dt.g,zt=Dt.b;Ct?(d[0]=Bt,d[1]=kt,d[2]=zt,d[3]=Nt,tt.clearBufferuiv(tt.COLOR,0,d)):(_[0]=Bt,_[1]=kt,_[2]=zt,_[3]=Nt,tt.clearBufferiv(tt.COLOR,0,_))}else ut|=tt.COLOR_BUFFER_BIT}nt&&(ut|=tt.DEPTH_BUFFER_BIT),ct&&(ut|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),rt.dispose(),ot.dispose(),b.dispose(),L.dispose(),N.dispose(),q.dispose(),Ht.dispose(),Rt.dispose(),j.dispose(),A.dispose(),A.removeEventListener("sessionstart",ue),A.removeEventListener("sessionend",fe),He.stop()};function st(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const O=H.autoReset,nt=_t.enabled,ct=_t.autoUpdate,ut=_t.needsUpdate,at=_t.type;wt(),H.autoReset=O,_t.enabled=nt,_t.autoUpdate=ct,_t.needsUpdate=ut,_t.type=at}function vt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Mt(O){const nt=O.target;nt.removeEventListener("dispose",Mt),Vt(nt)}function Vt(O){qt(O),b.remove(O)}function qt(O){const nt=b.get(O).programs;nt!==void 0&&(nt.forEach(function(ct){j.releaseProgram(ct)}),O.isShaderMaterial&&j.releaseShaderCache(O))}this.renderBufferDirect=function(O,nt,ct,ut,at,Et){nt===null&&(nt=bt);const Ct=at.isMesh&&at.matrixWorld.determinant()<0,Dt=Up(O,nt,ct,ut,at);F.setMaterial(ut,Ct);let Nt=ct.index,Bt=1;if(ut.wireframe===!0){if(Nt=D.getWireframeAttribute(ct),Nt===void 0)return;Bt=2}const kt=ct.drawRange,zt=ct.attributes.position;let ae=kt.start*Bt,Ve=(kt.start+kt.count)*Bt;Et!==null&&(ae=Math.max(ae,Et.start*Bt),Ve=Math.min(Ve,(Et.start+Et.count)*Bt)),Nt!==null?(ae=Math.max(ae,0),Ve=Math.min(Ve,Nt.count)):zt!=null&&(ae=Math.max(ae,0),Ve=Math.min(Ve,zt.count));const ye=Ve-ae;if(ye<0||ye===1/0)return;Ht.setup(at,ut,Dt,ct,Nt);let Sn,oe=It;if(Nt!==null&&(Sn=B.get(Nt),oe=At,oe.setIndex(Sn)),at.isMesh)ut.wireframe===!0?(F.setLineWidth(ut.wireframeLinewidth*Tt()),oe.setMode(tt.LINES)):oe.setMode(tt.TRIANGLES);else if(at.isLine){let Gt=ut.linewidth;Gt===void 0&&(Gt=1),F.setLineWidth(Gt*Tt()),at.isLineSegments?oe.setMode(tt.LINES):at.isLineLoop?oe.setMode(tt.LINE_LOOP):oe.setMode(tt.LINE_STRIP)}else at.isPoints?oe.setMode(tt.POINTS):at.isSprite&&oe.setMode(tt.TRIANGLES);if(at.isBatchedMesh)oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)oe.renderInstances(ae,ye,at.count);else if(ct.isInstancedBufferGeometry){const Gt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,na=Math.min(ct.instanceCount,Gt);oe.renderInstances(ae,ye,na)}else oe.render(ae,ye)};function re(O,nt,ct){O.transparent===!0&&O.side===_n&&O.forceSinglePass===!1?(O.side=Fe,O.needsUpdate=!0,gs(O,nt,ct),O.side=li,O.needsUpdate=!0,gs(O,nt,ct),O.side=_n):gs(O,nt,ct)}this.compile=function(O,nt,ct=null){ct===null&&(ct=O),m=ot.get(ct),m.init(),S.push(m),ct.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(m.pushLight(at),at.castShadow&&m.pushShadow(at))}),O!==ct&&O.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(m.pushLight(at),at.castShadow&&m.pushShadow(at))}),m.setupLights(y._useLegacyLights);const ut=new Set;return O.traverse(function(at){const Et=at.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const Dt=Et[Ct];re(Dt,ct,at),ut.add(Dt)}else re(Et,ct,at),ut.add(Et)}),S.pop(),m=null,ut},this.compileAsync=function(O,nt,ct=null){const ut=this.compile(O,nt,ct);return new Promise(at=>{function Et(){if(ut.forEach(function(Ct){b.get(Ct).currentProgram.isReady()&&ut.delete(Ct)}),ut.size===0){at(O);return}setTimeout(Et,10)}k.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let xe=null;function Zt(O){xe&&xe(O)}function ue(){He.stop()}function fe(){He.start()}const He=new wp;He.setAnimationLoop(Zt),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(O){xe=O,A.setAnimationLoop(O),O===null?He.stop():He.start()},A.addEventListener("sessionstart",ue),A.addEventListener("sessionend",fe),this.render=function(O,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera(nt),nt=A.getCamera()),O.isScene===!0&&O.onBeforeRender(y,O,nt,P),m=ot.get(O,S.length),m.init(),S.push(m),dt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),gt.setFromProjectionMatrix(dt),it=this.localClippingEnabled,J=ft.init(this.clippingPlanes,it),g=rt.get(O,p.length),g.init(),p.push(g),qe(O,nt,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(W,Q),this.info.render.frame++,J===!0&&ft.beginShadows();const ct=m.state.shadowsArray;if(_t.render(ct,O,nt),J===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1)&&mt.render(g,O),m.setupLights(y._useLegacyLights),nt.isArrayCamera){const ut=nt.cameras;for(let at=0,Et=ut.length;at<Et;at++){const Ct=ut[at];On(g,O,Ct,Ct.viewport)}}else On(g,O,nt);P!==null&&(v.updateMultisampleRenderTarget(P),v.updateRenderTargetMipmap(P)),O.isScene===!0&&O.onAfterRender(y,O,nt),Ht.resetDefaultState(),z=-1,T=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function qe(O,nt,ct,ut){if(O.visible===!1)return;if(O.layers.test(nt.layers)){if(O.isGroup)ct=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(nt);else if(O.isLight)m.pushLight(O),O.castShadow&&m.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||gt.intersectsSprite(O)){ut&&yt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(dt);const Ct=q.update(O),Dt=O.material;Dt.visible&&g.push(O,Ct,Dt,ct,yt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||gt.intersectsObject(O))){const Ct=q.update(O),Dt=O.material;if(ut&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),yt.copy(O.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),yt.copy(Ct.boundingSphere.center)),yt.applyMatrix4(O.matrixWorld).applyMatrix4(dt)),Array.isArray(Dt)){const Nt=Ct.groups;for(let Bt=0,kt=Nt.length;Bt<kt;Bt++){const zt=Nt[Bt],ae=Dt[zt.materialIndex];ae&&ae.visible&&g.push(O,Ct,ae,ct,yt.z,zt)}}else Dt.visible&&g.push(O,Ct,Dt,ct,yt.z,null)}}const Et=O.children;for(let Ct=0,Dt=Et.length;Ct<Dt;Ct++)qe(Et[Ct],nt,ct,ut)}function On(O,nt,ct,ut){const at=O.opaque,Et=O.transmissive,Ct=O.transparent;m.setupLightsView(ct),J===!0&&ft.setGlobalState(y.clippingPlanes,ct),Et.length>0&&Gi(at,Et,nt,ct),ut&&F.viewport(w.copy(ut)),at.length>0&&di(at,nt,ct),Et.length>0&&di(Et,nt,ct),Ct.length>0&&di(Ct,nt,ct),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Gi(O,nt,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new ki(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Lo:ri,minFilter:Ii,samples:4,stencilBuffer:s});const Bt=b.get(m.state.transmissionRenderTarget);Bt.__isTransmissionRenderTarget=!0}const Et=m.state.transmissionRenderTarget;y.getDrawingBufferSize(pt),Et.setSize(pt.x,pt.y);const Ct=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(U),M=y.getClearAlpha(),M<1&&y.setClearColor(16777215,.5),y.clear();const Dt=y.toneMapping;y.toneMapping=ii,di(O,ct,ut),v.updateMultisampleRenderTarget(Et),v.updateRenderTargetMipmap(Et);let Nt=!1;for(let Bt=0,kt=nt.length;Bt<kt;Bt++){const zt=nt[Bt],ae=zt.object,Ve=zt.geometry,ye=zt.material,Sn=zt.group;if(ye.side===_n&&ae.layers.test(ut.layers)){const oe=ye.side;ye.side=Fe,ye.needsUpdate=!0,yc(ae,ct,ut,Ve,ye,Sn),ye.side=oe,ye.needsUpdate=!0,Nt=!0}}Nt===!0&&(v.updateMultisampleRenderTarget(Et),v.updateRenderTargetMipmap(Et)),y.setRenderTarget(Ct),y.setClearColor(U,M),y.toneMapping=Dt}function di(O,nt,ct){const ut=nt.isScene===!0?nt.overrideMaterial:null;for(let at=0,Et=O.length;at<Et;at++){const Ct=O[at],Dt=Ct.object,Nt=Ct.geometry,Bt=ut===null?Ct.material:ut,kt=Ct.group;Dt.layers.test(ct.layers)&&yc(Dt,nt,ct,Nt,Bt,kt)}}function yc(O,nt,ct,ut,at,Et){O.onBeforeRender(y,nt,ct,ut,at,Et),O.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),at.onBeforeRender(y,nt,ct,ut,O,Et),at.transparent===!0&&at.side===_n&&at.forceSinglePass===!1?(at.side=Fe,at.needsUpdate=!0,y.renderBufferDirect(ct,nt,ut,at,O,Et),at.side=li,at.needsUpdate=!0,y.renderBufferDirect(ct,nt,ut,at,O,Et),at.side=_n):y.renderBufferDirect(ct,nt,ut,at,O,Et),O.onAfterRender(y,nt,ct,ut,at,Et)}function gs(O,nt,ct){nt.isScene!==!0&&(nt=bt);const ut=b.get(O),at=m.state.lights,Et=m.state.shadowsArray,Ct=at.state.version,Dt=j.getParameters(O,at.state,Et,nt,ct),Nt=j.getProgramCacheKey(Dt);let Bt=ut.programs;ut.environment=O.isMeshStandardMaterial?nt.environment:null,ut.fog=nt.fog,ut.envMap=(O.isMeshStandardMaterial?N:L).get(O.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&O.envMap===null?nt.environmentRotation:O.envMapRotation,Bt===void 0&&(O.addEventListener("dispose",Mt),Bt=new Map,ut.programs=Bt);let kt=Bt.get(Nt);if(kt!==void 0){if(ut.currentProgram===kt&&ut.lightsStateVersion===Ct)return Sc(O,Dt),kt}else Dt.uniforms=j.getUniforms(O),O.onBuild(ct,Dt,y),O.onBeforeCompile(Dt,y),kt=j.acquireProgram(Dt,Nt),Bt.set(Nt,kt),ut.uniforms=Dt.uniforms;const zt=ut.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(zt.clippingPlanes=ft.uniform),Sc(O,Dt),ut.needsLights=Op(O),ut.lightsStateVersion=Ct,ut.needsLights&&(zt.ambientLightColor.value=at.state.ambient,zt.lightProbe.value=at.state.probe,zt.directionalLights.value=at.state.directional,zt.directionalLightShadows.value=at.state.directionalShadow,zt.spotLights.value=at.state.spot,zt.spotLightShadows.value=at.state.spotShadow,zt.rectAreaLights.value=at.state.rectArea,zt.ltc_1.value=at.state.rectAreaLTC1,zt.ltc_2.value=at.state.rectAreaLTC2,zt.pointLights.value=at.state.point,zt.pointLightShadows.value=at.state.pointShadow,zt.hemisphereLights.value=at.state.hemi,zt.directionalShadowMap.value=at.state.directionalShadowMap,zt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,zt.spotShadowMap.value=at.state.spotShadowMap,zt.spotLightMatrix.value=at.state.spotLightMatrix,zt.spotLightMap.value=at.state.spotLightMap,zt.pointShadowMap.value=at.state.pointShadowMap,zt.pointShadowMatrix.value=at.state.pointShadowMatrix),ut.currentProgram=kt,ut.uniformsList=null,kt}function bc(O){if(O.uniformsList===null){const nt=O.currentProgram.getUniforms();O.uniformsList=mo.seqWithValue(nt.seq,O.uniforms)}return O.uniformsList}function Sc(O,nt){const ct=b.get(O);ct.outputColorSpace=nt.outputColorSpace,ct.batching=nt.batching,ct.instancing=nt.instancing,ct.instancingColor=nt.instancingColor,ct.instancingMorph=nt.instancingMorph,ct.skinning=nt.skinning,ct.morphTargets=nt.morphTargets,ct.morphNormals=nt.morphNormals,ct.morphColors=nt.morphColors,ct.morphTargetsCount=nt.morphTargetsCount,ct.numClippingPlanes=nt.numClippingPlanes,ct.numIntersection=nt.numClipIntersection,ct.vertexAlphas=nt.vertexAlphas,ct.vertexTangents=nt.vertexTangents,ct.toneMapping=nt.toneMapping}function Up(O,nt,ct,ut,at){nt.isScene!==!0&&(nt=bt),v.resetTextureUnits();const Et=nt.fog,Ct=ut.isMeshStandardMaterial?nt.environment:null,Dt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hi,Nt=(ut.isMeshStandardMaterial?N:L).get(ut.envMap||Ct),Bt=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,kt=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),zt=!!ct.morphAttributes.position,ae=!!ct.morphAttributes.normal,Ve=!!ct.morphAttributes.color;let ye=ii;ut.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=y.toneMapping);const Sn=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,oe=Sn!==void 0?Sn.length:0,Gt=b.get(ut),na=m.state.lights;if(J===!0&&(it===!0||O!==T)){const $e=O===T&&ut.id===z;ft.setState(ut,O,$e)}let se=!1;ut.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==na.state.version||Gt.outputColorSpace!==Dt||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==Nt||ut.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ft.numPlanes||Gt.numIntersection!==ft.numIntersection)||Gt.vertexAlphas!==Bt||Gt.vertexTangents!==kt||Gt.morphTargets!==zt||Gt.morphNormals!==ae||Gt.morphColors!==Ve||Gt.toneMapping!==ye||Gt.morphTargetsCount!==oe)&&(se=!0):(se=!0,Gt.__version=ut.version);let pi=Gt.currentProgram;se===!0&&(pi=gs(ut,nt,at));let Mc=!1,Fr=!1,ia=!1;const Te=pi.getUniforms(),Fn=Gt.uniforms;if(F.useProgram(pi.program)&&(Mc=!0,Fr=!0,ia=!0),ut.id!==z&&(z=ut.id,Fr=!0),Mc||T!==O){Te.setValue(tt,"projectionMatrix",O.projectionMatrix),Te.setValue(tt,"viewMatrix",O.matrixWorldInverse);const $e=Te.map.cameraPosition;$e!==void 0&&$e.setValue(tt,yt.setFromMatrixPosition(O.matrixWorld)),x.logarithmicDepthBuffer&&Te.setValue(tt,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Te.setValue(tt,"isOrthographic",O.isOrthographicCamera===!0),T!==O&&(T=O,Fr=!0,ia=!0)}if(at.isSkinnedMesh){Te.setOptional(tt,at,"bindMatrix"),Te.setOptional(tt,at,"bindMatrixInverse");const $e=at.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Te.setValue(tt,"boneTexture",$e.boneTexture,v))}at.isBatchedMesh&&(Te.setOptional(tt,at,"batchingTexture"),Te.setValue(tt,"batchingTexture",at._matricesTexture,v));const ra=ct.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&xt.update(at,ct,pi),(Fr||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Te.setValue(tt,"receiveShadow",at.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Fn.envMap.value=Nt,Fn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&nt.environment!==null&&(Fn.envMapIntensity.value=nt.environmentIntensity),Fr&&(Te.setValue(tt,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Np(Fn,ia),Et&&ut.fog===!0&&K.refreshFogUniforms(Fn,Et),K.refreshMaterialUniforms(Fn,ut,X,Y,m.state.transmissionRenderTarget),mo.upload(tt,bc(Gt),Fn,v)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(mo.upload(tt,bc(Gt),Fn,v),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Te.setValue(tt,"center",at.center),Te.setValue(tt,"modelViewMatrix",at.modelViewMatrix),Te.setValue(tt,"normalMatrix",at.normalMatrix),Te.setValue(tt,"modelMatrix",at.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const $e=ut.uniformsGroups;for(let sa=0,Fp=$e.length;sa<Fp;sa++){const Ec=$e[sa];Rt.update(Ec,pi),Rt.bind(Ec,pi)}}return pi}function Np(O,nt){O.ambientLightColor.needsUpdate=nt,O.lightProbe.needsUpdate=nt,O.directionalLights.needsUpdate=nt,O.directionalLightShadows.needsUpdate=nt,O.pointLights.needsUpdate=nt,O.pointLightShadows.needsUpdate=nt,O.spotLights.needsUpdate=nt,O.spotLightShadows.needsUpdate=nt,O.rectAreaLights.needsUpdate=nt,O.hemisphereLights.needsUpdate=nt}function Op(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(O,nt,ct){b.get(O.texture).__webglTexture=nt,b.get(O.depthTexture).__webglTexture=ct;const ut=b.get(O);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ct===void 0,ut.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,nt){const ct=b.get(O);ct.__webglFramebuffer=nt,ct.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(O,nt=0,ct=0){P=O,C=nt,R=ct;let ut=!0,at=null,Et=!1,Ct=!1;if(O){const Nt=b.get(O);Nt.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(tt.FRAMEBUFFER,null),ut=!1):Nt.__webglFramebuffer===void 0?v.setupRenderTarget(O):Nt.__hasExternalTextures&&v.rebindTextures(O,b.get(O.texture).__webglTexture,b.get(O.depthTexture).__webglTexture);const Bt=O.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);const kt=b.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(kt[nt])?at=kt[nt][ct]:at=kt[nt],Et=!0):O.samples>0&&v.useMultisampledRTT(O)===!1?at=b.get(O).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[ct]:at=kt,w.copy(O.viewport),G.copy(O.scissor),I=O.scissorTest}else w.copy(lt).multiplyScalar(X).floor(),G.copy($).multiplyScalar(X).floor(),I=Z;if(F.bindFramebuffer(tt.FRAMEBUFFER,at)&&ut&&F.drawBuffers(O,at),F.viewport(w),F.scissor(G),F.setScissorTest(I),Et){const Nt=b.get(O.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt.__webglTexture,ct)}else if(Ct){const Nt=b.get(O.texture),Bt=nt||0;tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,Nt.__webglTexture,ct||0,Bt)}z=-1},this.readRenderTargetPixels=function(O,nt,ct,ut,at,Et,Ct){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=b.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){F.bindFramebuffer(tt.FRAMEBUFFER,Dt);try{const Nt=O.texture,Bt=Nt.format,kt=Nt.type;if(Bt!==vn&&Ft.convert(Bt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=kt===Lo&&(k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float"));if(kt!==ri&&Ft.convert(kt)!==tt.getParameter(tt.IMPLEMENTATION_COLOR_READ_TYPE)&&kt!==Qn&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=O.width-ut&&ct>=0&&ct<=O.height-at&&tt.readPixels(nt,ct,ut,at,Ft.convert(Bt),Ft.convert(kt),Et)}finally{const Nt=P!==null?b.get(P).__webglFramebuffer:null;F.bindFramebuffer(tt.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(O,nt,ct=0){const ut=Math.pow(2,-ct),at=Math.floor(nt.image.width*ut),Et=Math.floor(nt.image.height*ut);v.setTexture2D(nt,0),tt.copyTexSubImage2D(tt.TEXTURE_2D,ct,0,0,O.x,O.y,at,Et),F.unbindTexture()},this.copyTextureToTexture=function(O,nt,ct,ut=0){const at=nt.image.width,Et=nt.image.height,Ct=Ft.convert(ct.format),Dt=Ft.convert(ct.type);v.setTexture2D(ct,0),tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,ct.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,ct.unpackAlignment),nt.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,at,Et,Ct,Dt,nt.image.data):nt.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,nt.mipmaps[0].width,nt.mipmaps[0].height,Ct,nt.mipmaps[0].data):tt.texSubImage2D(tt.TEXTURE_2D,ut,O.x,O.y,Ct,Dt,nt.image),ut===0&&ct.generateMipmaps&&tt.generateMipmap(tt.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(O,nt,ct,ut,at=0){const Et=Math.round(O.max.x-O.min.x),Ct=Math.round(O.max.y-O.min.y),Dt=O.max.z-O.min.z+1,Nt=Ft.convert(ut.format),Bt=Ft.convert(ut.type);let kt;if(ut.isData3DTexture)v.setTexture3D(ut,0),kt=tt.TEXTURE_3D;else if(ut.isDataArrayTexture||ut.isCompressedArrayTexture)v.setTexture2DArray(ut,0),kt=tt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}tt.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,ut.flipY),tt.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),tt.pixelStorei(tt.UNPACK_ALIGNMENT,ut.unpackAlignment);const zt=tt.getParameter(tt.UNPACK_ROW_LENGTH),ae=tt.getParameter(tt.UNPACK_IMAGE_HEIGHT),Ve=tt.getParameter(tt.UNPACK_SKIP_PIXELS),ye=tt.getParameter(tt.UNPACK_SKIP_ROWS),Sn=tt.getParameter(tt.UNPACK_SKIP_IMAGES),oe=ct.isCompressedTexture?ct.mipmaps[at]:ct.image;tt.pixelStorei(tt.UNPACK_ROW_LENGTH,oe.width),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,oe.height),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,O.min.x),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,O.min.y),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,O.min.z),ct.isDataTexture||ct.isData3DTexture?tt.texSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,Bt,oe.data):ut.isCompressedArrayTexture?tt.compressedTexSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,oe.data):tt.texSubImage3D(kt,at,nt.x,nt.y,nt.z,Et,Ct,Dt,Nt,Bt,oe),tt.pixelStorei(tt.UNPACK_ROW_LENGTH,zt),tt.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,ae),tt.pixelStorei(tt.UNPACK_SKIP_PIXELS,Ve),tt.pixelStorei(tt.UNPACK_SKIP_ROWS,ye),tt.pixelStorei(tt.UNPACK_SKIP_IMAGES,Sn),at===0&&ut.generateMipmaps&&tt.generateMipmap(kt),F.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?v.setTextureCube(O,0):O.isData3DTexture?v.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?v.setTexture2DArray(O,0):v.setTexture2D(O,0),F.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,F.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mc?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Qo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Pw extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oi extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jf=new et,Xf=new et,qf=new le,Ka=new ta,Ks=new ds;class Lw extends Le{constructor(t=new ze,e=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)jf.fromBufferAttribute(e,r-1),Xf.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=jf.distanceTo(Xf);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;qf.copy(r).invert(),Ka.copy(t.ray).applyMatrix4(qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new et,f=new et,u=new et,h=new et,d=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let y=p,E=S-1;y<E;y+=d){const C=_.getX(y),R=_.getX(y+1);if(c.fromBufferAttribute(m,C),f.fromBufferAttribute(m,R),Ka.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(h);z<t.near||z>t.far||e.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let y=p,E=S-1;y<E;y+=d){if(c.fromBufferAttribute(m,y),f.fromBufferAttribute(m,y+1),Ka.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(h);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const $f=new et,Yf=new et;class ss extends Lw{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)$f.fromBufferAttribute(e,r),Yf.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$f.distanceTo(Yf);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jr extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kf=new le,Ul=new ta,Zs=new ds,Js=new et;class Za extends Le{constructor(t=new ze,e=new jr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(r),Zs.radius+=s,t.ray.intersectsSphere(Zs)===!1)return;Kf.copy(r).invert(),Ul.copy(t.ray).applyMatrix4(Kf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);Js.fromBufferAttribute(u,m),Zf(Js,m,l,r,t,e,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=h,g=d;_<g;_++)Js.fromBufferAttribute(u,_),Zf(Js,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zf(n,t,e,i,r,s,a){const o=Ul.distanceSqToPoint(n);if(o<e){const l=new et;Ul.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}const Qs=new et,to=new et,Ja=new et,eo=new cn;class Iw extends ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Sr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],u=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=eo;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),eo.getNormal(Ja),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,E=u[S],C=u[y],R=eo[f[S]],P=eo[f[y]],z=`${E}_${C}`,T=`${C}_${E}`;T in h&&h[T]?(Ja.dot(h[T].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(P.x,P.y,P.z)),h[T]=null):z in h||(h[z]={index0:c[S],index1:c[y],normal:Ja.clone()})}}for(const _ in h)if(h[_]){const{index0:g,index1:m}=h[_];Qs.fromBufferAttribute(o,g),to.fromBufferAttribute(o,m),d.push(Qs.x,Qs.y,Qs.z),d.push(to.x,to.y,to.z)}this.setAttribute("position",new de(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dw extends Dn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Jf={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Uw{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null}}}const Nw=new Uw;class vc{constructor(t){this.manager=t!==void 0?t:Nw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Ow extends Error{constructor(t,e){super(t),this.response=e}}class Fw extends vc{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Jf.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:i,onError:r});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=Rn[t],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:y,value:E})=>{if(y)p.close();else{g+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,P=f.length;R<P;R++){const z=f[R];z.onProgress&&z.onProgress(C)}p.enqueue(E),S()}})}}});return new Response(m)}else throw new Ow(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Jf.add(t,c);const f=Rn[t];delete Rn[t];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=Rn[t];if(f===void 0)throw this.manager.itemError(t),c;delete Rn[t];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class kw extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Bw extends kw{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zw extends ss{constructor(t=10,e=10,i=4473924,r=8947848){i=new Xt(i),r=new Xt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let h=0,d=0,_=-o;h<=e;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=h===s?i:r;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const f=new ze;f.setAttribute("position",new de(l,3)),f.setAttribute("color",new de(c,3));const u=new Oi({vertexColors:!0,toneMapped:!1});super(f,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hw extends ss{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ze;r.setAttribute("position",new de(e,3)),r.setAttribute("color",new de(i,3));const s=new Oi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new Xt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);const Vw=/^[og]\s*(.+)?/,Gw=/^mtllib /,Ww=/^usemtl /,jw=/^usemap /,th=/\s+/,eh=new et,Qa=new et,nh=new et,ih=new et,Ke=new et,no=new Xt;function Xw(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(t,e,i){const r=this.vertices,s=this.object.geometry.normals;eh.fromArray(r,t),Qa.fromArray(r,e),nh.fromArray(r,i),Ke.subVectors(nh,Qa),ih.subVectors(eh,Qa),Ke.cross(ih),Ke.normalize(),s.push(Ke.x,Ke.y,Ke.z),s.push(Ke.x,Ke.y,Ke.z),s.push(Ke.x,Ke.y,Ke.z)},addColor:function(t,e,i){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(t,e,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,r,s,a,o,l,c){const f=this.vertices.length;let u=this.parseVertexIndex(t,f),h=this.parseVertexIndex(e,f),d=this.parseVertexIndex(i,f);if(this.addVertex(u,h,d),this.addColor(u,h,d),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),h=this.parseNormalIndex(l,_),d=this.parseNormalIndex(c,_),this.addNormal(u,h,d)}else this.addFaceNormal(u,h,d);if(r!==void 0&&r!==""){const _=this.uvs.length;u=this.parseUVIndex(r,_),h=this.parseUVIndex(s,_),d=this.parseUVIndex(a,_),this.addUV(u,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,r=t.length;i<r;i++){const s=this.parseVertexIndex(t[i],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return n.startObject("",!1),n}class qw extends vc{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,a=new Fw(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Xw;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let r=[];for(let o=0,l=i.length;o<l;o++){const c=i[o].trimStart();if(c.length===0)continue;const f=c.charAt(0);if(f!=="#")if(f==="v"){const u=c.split(th);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(no.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(no.r,no.g,no.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(f==="f"){const h=c.slice(1).trim().split(th),d=[];for(let g=0,m=h.length;g<m;g++){const p=h[g];if(p.length>0){const S=p.split("/");d.push(S)}}const _=d[0];for(let g=1,m=d.length-1;g<m;g++){const p=d[g],S=d[g+1];e.addFace(_[0],p[0],S[0],_[1],p[1],S[1],_[2],p[2],S[2])}}else if(f==="l"){const u=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=u;else for(let _=0,g=u.length;_<g;_++){const m=u[_].split("/");m[0]!==""&&h.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(h,d)}else if(f==="p"){const h=c.slice(1).trim().split(" ");e.addPointGeometry(h)}else if((r=Vw.exec(c))!==null){const u=(" "+r[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Ww.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(Gw.test(c))e.materialLibraries.push(c.substring(7).trim());else if(jw.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=c.split(" "),r.length>1){const h=r[1].trim().toLowerCase();e.object.smooth=h!=="0"&&h!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Wr;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],f=c.geometry,u=c.materials,h=f.type==="Line",d=f.type==="Points";let _=!1;if(f.vertices.length===0)continue;const g=new ze;g.setAttribute("position",new de(f.vertices,3)),f.normals.length>0&&g.setAttribute("normal",new de(f.normals,3)),f.colors.length>0&&(_=!0,g.setAttribute("color",new de(f.colors,3))),f.hasUVIndices===!0&&g.setAttribute("uv",new de(f.uvs,2));const m=[];for(let S=0,y=u.length;S<y;S++){const E=u[S],C=E.name+"_"+E.smooth+"_"+_;let R=e.materials[C];if(this.materials!==null){if(R=this.materials.create(E.name),h&&R&&!(R instanceof Oi)){const P=new Oi;Dn.prototype.copy.call(P,R),P.color.copy(R.color),R=P}else if(d&&R&&!(R instanceof jr)){const P=new jr({size:10,sizeAttenuation:!1});Dn.prototype.copy.call(P,R),P.color.copy(R.color),P.map=R.map,R=P}}R===void 0&&(h?R=new Oi:d?R=new jr({size:1,sizeAttenuation:!1}):R=new Dw,R.name=E.name,R.flatShading=!E.smooth,R.vertexColors=_,e.materials[C]=R),m.push(R)}let p;if(m.length>1){for(let S=0,y=u.length;S<y;S++){const E=u[S];g.addGroup(E.groupStart,E.groupCount,S)}h?p=new ss(g,m):d?p=new Za(g,m):p=new Xe(g,m)}else h?p=new ss(g,m[0]):d?p=new Za(g,m[0]):p=new Xe(g,m[0]);p.name=c.name,s.add(p)}else if(e.vertices.length>0){const o=new jr({size:1,sizeAttenuation:!1}),l=new ze;l.setAttribute("position",new de(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new de(e.colors,3)),o.vertexColors=!0);const c=new Za(l,o);s.add(c)}return s}}const rh={type:"change"},tl={type:"start"},sh={type:"end"},io=new ta,oh=new Kn,$w=Math.cos(70*vy.DEG2RAD);class Yw extends Vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ft),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ft),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(rh),i.update(),s=r.NONE},this.update=function(){const A=new et,st=new Bi().setFromUnitVectors(t.up,new et(0,1,0)),ht=st.clone().invert(),vt=new et,Mt=new Bi,Vt=new et,qt=2*Math.PI;return function(xe=null){const Zt=i.object.position;A.copy(Zt).sub(i.target),A.applyQuaternion(st),o.setFromVector3(A),i.autoRotate&&s===r.NONE&&I(w(xe)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ue=i.minAzimuthAngle,fe=i.maxAzimuthAngle;isFinite(ue)&&isFinite(fe)&&(ue<-Math.PI?ue+=qt:ue>Math.PI&&(ue-=qt),fe<-Math.PI?fe+=qt:fe>Math.PI&&(fe-=qt),ue<=fe?o.theta=Math.max(ue,Math.min(fe,o.theta)):o.theta=o.theta>(ue+fe)/2?Math.max(ue,o.theta):Math.min(fe,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let He=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)o.radius=lt(o.radius);else{const qe=o.radius;o.radius=lt(o.radius*c),He=qe!=o.radius}if(A.setFromSpherical(o),A.applyQuaternion(ht),Zt.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&R){let qe=null;if(i.object.isPerspectiveCamera){const On=A.length();qe=lt(On*c);const Gi=On-qe;i.object.position.addScaledVector(E,Gi),i.object.updateMatrixWorld(),He=!!Gi}else if(i.object.isOrthographicCamera){const On=new et(C.x,C.y,0);On.unproject(i.object);const Gi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),He=Gi!==i.object.zoom;const di=new et(C.x,C.y,0);di.unproject(i.object),i.object.position.sub(di).add(On),i.object.updateMatrixWorld(),qe=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qe).add(i.object.position):(io.origin.copy(i.object.position),io.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(io.direction))<$w?t.lookAt(i.target):(oh.setFromNormalAndCoplanarPoint(i.object.up,i.target),io.intersectPlane(oh,i.target))))}else if(i.object.isOrthographicCamera){const qe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),qe!==i.object.zoom&&(i.object.updateProjectionMatrix(),He=!0)}return c=1,R=!1,He||vt.distanceToSquared(i.object.position)>a||8*(1-Mt.dot(i.object.quaternion))>a||Vt.distanceToSquared(i.target)>a?(i.dispatchEvent(rh),vt.copy(i.object.position),Mt.copy(i.object.quaternion),Vt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",xt),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",B),i.domElement.removeEventListener("wheel",j),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",B),i.domElement.getRootNode().removeEventListener("keydown",rt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ft),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Qf,l=new Qf;let c=1;const f=new et,u=new Ot,h=new Ot,d=new Ot,_=new Ot,g=new Ot,m=new Ot,p=new Ot,S=new Ot,y=new Ot,E=new et,C=new Ot;let R=!1;const P=[],z={};let T=!1;function w(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function G(A){const st=Math.abs(A*.01);return Math.pow(.95,i.zoomSpeed*st)}function I(A){l.theta-=A}function U(A){l.phi-=A}const M=function(){const A=new et;return function(ht,vt){A.setFromMatrixColumn(vt,0),A.multiplyScalar(-ht),f.add(A)}}(),V=function(){const A=new et;return function(ht,vt){i.screenSpacePanning===!0?A.setFromMatrixColumn(vt,1):(A.setFromMatrixColumn(vt,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ht),f.add(A)}}(),Y=function(){const A=new et;return function(ht,vt){const Mt=i.domElement;if(i.object.isPerspectiveCamera){const Vt=i.object.position;A.copy(Vt).sub(i.target);let qt=A.length();qt*=Math.tan(i.object.fov/2*Math.PI/180),M(2*ht*qt/Mt.clientHeight,i.object.matrix),V(2*vt*qt/Mt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(M(ht*(i.object.right-i.object.left)/i.object.zoom/Mt.clientWidth,i.object.matrix),V(vt*(i.object.top-i.object.bottom)/i.object.zoom/Mt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(A,st){if(!i.zoomToCursor)return;R=!0;const ht=i.domElement.getBoundingClientRect(),vt=A-ht.left,Mt=st-ht.top,Vt=ht.width,qt=ht.height;C.x=vt/Vt*2-1,C.y=-(Mt/qt)*2+1,E.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function lt(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function $(A){u.set(A.clientX,A.clientY)}function Z(A){Q(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function gt(A){_.set(A.clientX,A.clientY)}function J(A){h.set(A.clientX,A.clientY),d.subVectors(h,u).multiplyScalar(i.rotateSpeed);const st=i.domElement;I(2*Math.PI*d.x/st.clientHeight),U(2*Math.PI*d.y/st.clientHeight),u.copy(h),i.update()}function it(A){S.set(A.clientX,A.clientY),y.subVectors(S,p),y.y>0?X(G(y.y)):y.y<0&&W(G(y.y)),p.copy(S),i.update()}function dt(A){g.set(A.clientX,A.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(g),i.update()}function pt(A){Q(A.clientX,A.clientY),A.deltaY<0?W(G(A.deltaY)):A.deltaY>0&&X(G(A.deltaY)),i.update()}function yt(A){let st=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),st=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),st=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?I(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),st=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?I(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),st=!0;break}st&&(A.preventDefault(),i.update())}function bt(A){if(P.length===1)u.set(A.pageX,A.pageY);else{const st=Rt(A),ht=.5*(A.pageX+st.x),vt=.5*(A.pageY+st.y);u.set(ht,vt)}}function Tt(A){if(P.length===1)_.set(A.pageX,A.pageY);else{const st=Rt(A),ht=.5*(A.pageX+st.x),vt=.5*(A.pageY+st.y);_.set(ht,vt)}}function tt(A){const st=Rt(A),ht=A.pageX-st.x,vt=A.pageY-st.y,Mt=Math.sqrt(ht*ht+vt*vt);p.set(0,Mt)}function Pt(A){i.enableZoom&&tt(A),i.enablePan&&Tt(A)}function k(A){i.enableZoom&&tt(A),i.enableRotate&&bt(A)}function x(A){if(P.length==1)h.set(A.pageX,A.pageY);else{const ht=Rt(A),vt=.5*(A.pageX+ht.x),Mt=.5*(A.pageY+ht.y);h.set(vt,Mt)}d.subVectors(h,u).multiplyScalar(i.rotateSpeed);const st=i.domElement;I(2*Math.PI*d.x/st.clientHeight),U(2*Math.PI*d.y/st.clientHeight),u.copy(h)}function F(A){if(P.length===1)g.set(A.pageX,A.pageY);else{const st=Rt(A),ht=.5*(A.pageX+st.x),vt=.5*(A.pageY+st.y);g.set(ht,vt)}m.subVectors(g,_).multiplyScalar(i.panSpeed),Y(m.x,m.y),_.copy(g)}function H(A){const st=Rt(A),ht=A.pageX-st.x,vt=A.pageY-st.y,Mt=Math.sqrt(ht*ht+vt*vt);S.set(0,Mt),y.set(0,Math.pow(S.y/p.y,i.zoomSpeed)),X(y.y),p.copy(S);const Vt=(A.pageX+st.x)*.5,qt=(A.pageY+st.y)*.5;Q(Vt,qt)}function b(A){i.enableZoom&&H(A),i.enablePan&&F(A)}function v(A){i.enableZoom&&H(A),i.enableRotate&&x(A)}function L(A){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",N),i.domElement.addEventListener("pointerup",B)),!Ft(A)&&(It(A),A.pointerType==="touch"?_t(A):D(A)))}function N(A){i.enabled!==!1&&(A.pointerType==="touch"?mt(A):q(A))}function B(A){switch(At(A),P.length){case 0:i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",B),i.dispatchEvent(sh),s=r.NONE;break;case 1:const st=P[0],ht=z[st];_t({pointerId:st,pageX:ht.x,pageY:ht.y});break}}function D(A){let st;switch(A.button){case 0:st=i.mouseButtons.LEFT;break;case 1:st=i.mouseButtons.MIDDLE;break;case 2:st=i.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Wi.DOLLY:if(i.enableZoom===!1)return;Z(A),s=r.DOLLY;break;case Wi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;gt(A),s=r.PAN}else{if(i.enableRotate===!1)return;$(A),s=r.ROTATE}break;case Wi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;$(A),s=r.ROTATE}else{if(i.enablePan===!1)return;gt(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(tl)}function q(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;J(A);break;case r.DOLLY:if(i.enableZoom===!1)return;it(A);break;case r.PAN:if(i.enablePan===!1)return;dt(A);break}}function j(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(tl),pt(K(A)),i.dispatchEvent(sh))}function K(A){const st=A.deltaMode,ht={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(st){case 1:ht.deltaY*=16;break;case 2:ht.deltaY*=100;break}return A.ctrlKey&&!T&&(ht.deltaY*=10),ht}function rt(A){A.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",ot,{passive:!0,capture:!0}))}function ot(A){A.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",ot,{passive:!0,capture:!0}))}function ft(A){i.enabled===!1||i.enablePan===!1||yt(A)}function _t(A){switch(Ht(A),P.length){case 1:switch(i.touches.ONE){case ji.ROTATE:if(i.enableRotate===!1)return;bt(A),s=r.TOUCH_ROTATE;break;case ji.PAN:if(i.enablePan===!1)return;Tt(A),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ji.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pt(A),s=r.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(A),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(tl)}function mt(A){switch(Ht(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;x(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;F(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;v(A),i.update();break;default:s=r.NONE}}function xt(A){i.enabled!==!1&&A.preventDefault()}function It(A){P.push(A.pointerId)}function At(A){delete z[A.pointerId];for(let st=0;st<P.length;st++)if(P[st]==A.pointerId){P.splice(st,1);return}}function Ft(A){for(let st=0;st<P.length;st++)if(P[st]==A.pointerId)return!0;return!1}function Ht(A){let st=z[A.pointerId];st===void 0&&(st=new Ot,z[A.pointerId]=st),st.set(A.pageX,A.pageY)}function Rt(A){const st=A.pointerId===P[0]?P[1]:P[0];return z[st]}i.domElement.addEventListener("contextmenu",xt),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",B),i.domElement.addEventListener("wheel",j,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",rt,{passive:!0,capture:!0}),this.update()}}const Kw=Un({__name:"preview",props:{obj:{}},setup(n){const t=Ne(),e=n;let i,r,s,a,o,l,c;const f=()=>{i=new Pw,i.background=new Xt(16777215),r=new Qe(75,t.value.clientWidth/t.value.clientHeight,.1,1e3),r.position.set(0,5,100),s=new Cw({antialias:!0}),s.setSize(t.value.clientWidth,t.value.clientHeight),t.value.appendChild(s.domElement),a=new Yw(r,s.domElement),a.update();const _=new Bw(4210752);if(i.add(_),o=new Hw(.1),o.position.set(10,0,10),o.renderOrder=100,Array.isArray(o.material))for(const S of o.material)S.depthTest=!1;else o.material.depthTest=!1;i.add(o);const g=new ms(.3,.3),m=new Fo({color:16777215,side:_n});l=new Xe(g,m),i.add(l);const p=new zw(1e3,1e3);i.add(p),window.addEventListener("resize",u,!1),h()},u=()=>{r.aspect=t.value.clientWidth/t.value.clientHeight,r.updateProjectionMatrix(),s.setSize(t.value.clientWidth,t.value.clientHeight)},h=()=>{requestAnimationFrame(h),a.update();const _=.6,g=-.6,m=-1,p=.075,S=-.05,y=-.1,E=new et(1,0,0).applyQuaternion(r.quaternion).multiplyScalar(_),C=new et(0,1,0).applyQuaternion(r.quaternion).multiplyScalar(g),R=new et(0,0,1).applyQuaternion(r.quaternion).multiplyScalar(m),P=E.add(C).add(R).add(r.position);o.position.copy(P);const z=new et(1,0,0).applyQuaternion(r.quaternion).multiplyScalar(_+p),T=new et(0,1,0).applyQuaternion(r.quaternion).multiplyScalar(g+S),w=new et(0,0,1).applyQuaternion(r.quaternion).multiplyScalar(m+y),G=z.add(T).add(w).add(r.position);l.position.copy(G),l.lookAt(r.position),l.rotation.copy(r.rotation),s.render(i,r)},d=_=>{c=new qw().parse(_);const m=[];c.traverse(S=>{S instanceof Xe&&(S.material=new Fo({color:2236962}),m.push(new Iw(S.geometry)))});const p=new Oi({color:5592405});for(const S of m){const y=new ss(S,p);c.add(y)}i.add(c),c.position.set(0,0,0)};return qo(()=>{f(),d(e.obj)}),Ql(()=>{window.removeEventListener("resize",u),s.dispose()}),Ni(()=>e.obj,(_,g)=>{_!==g&&(c&&(i.remove(c),c=null),d(_))}),(_,g)=>(me(),ai("div",{ref_key:"container",ref:t,class:"preview-container"},null,512))}}),Zw={class:"base-panel"},Jw={key:0,class:"font-bold text-3xl"},Qw=Un({__name:"panel",props:{title:{}},setup(n){return(t,e)=>(me(),ai("div",Zw,[t.title?(me(),ai("h1",Jw,mh(t.title),1)):gd("",!0),tc(t.$slots,"default")]))}}),tT=ne("h2",{class:"text-xl mb-2"},"Rotation",-1),eT={class:"form-grid"},nT=ne("label",{for:"rotate-x"},"X:",-1),iT=ne("label",{for:"rotate-y"},"Y:",-1),rT=ne("label",{for:"rotate-z"},"Z:",-1),sT=ne("div",{class:"border-t-2 border-black/20 w-full my-4"},null,-1),oT={class:"form-grid"},aT=ne("label",{for:"preview"},"Show Preview:",-1),lT=Un({__name:"config",props:{modelValue:{}},emits:["load-obj","click-dl","update:modelValue"],setup(n,{emit:t}){const e=Ne("fileInput"),i=t,r=n,s=rc({get:()=>r.modelValue,set:l=>i("update:modelValue",l)}),a=()=>{e.value.click()},o=()=>{var f;const l=(f=e.value.files)==null?void 0:f[0];if(!l)return;const c=new FileReader;c.onload=()=>{var u;i("load-obj",(u=c.result)==null?void 0:u.toString())},c.readAsText(l)};return(l,c)=>(me(),ai("div",null,[tT,ne("div",eT,[nT,Ms(ne("input",{id:"rotate-x",type:"number","onUpdate:modelValue":c[0]||(c[0]=f=>$t(s).rotate.x=f),min:"-180",max:"180",step:"1"},null,512),[[pa,$t(s).rotate.x,void 0,{number:!0}]]),iT,Ms(ne("input",{id:"rotate-y",type:"number","onUpdate:modelValue":c[1]||(c[1]=f=>$t(s).rotate.y=f),min:"-180",max:"180",step:"1"},null,512),[[pa,$t(s).rotate.y,void 0,{number:!0}]]),rT,Ms(ne("input",{id:"rotate-z",type:"number","onUpdate:modelValue":c[2]||(c[2]=f=>$t(s).rotate.z=f),min:"-180",max:"180",step:"1"},null,512),[[pa,$t(s).rotate.z,void 0,{number:!0}]])]),sT,ne("div",oT,[aT,Ms(ne("input",{id:"preview",type:"checkbox","onUpdate:modelValue":c[3]||(c[3]=f=>$t(s).preview=f)},null,512),[[o_,$t(s).preview]])]),ne("input",{ref_key:"fileInput",ref:e,type:"file",accept:".obj",onChange:o,class:"hidden"},null,544),ne("button",{class:"form-button",onClick:a},"Load OBJ"),ne("button",{class:"form-button",onClick:c[4]||(c[4]=f=>i("click-dl",!1))},"Download OBJ"),ne("button",{class:"form-button",onClick:c[5]||(c[5]=f=>i("click-dl",!0))},"Download ZIP")]))}}),cT={class:"fixed top-0 right-0 translate-x-1/2 -translate-y-1/2"},uT={class:"my-2 py-1 border-dotted border-black border-y-2 px-[200px]"},fT={class:"whitespace-pre text-center"},hT=Un({__name:"github-badge",props:{text:{},to:{}},emits:["click"],setup(n,{emit:t}){const e=t,i=n,r=Ne(),s=Ne(0);function a(){const l=r.value.getBoundingClientRect(),c=Math.sqrt(2);console.log(l.width,l.height),s.value=l.width/c}qo(()=>{a()});function o(){e("click"),i.to&&window.open(i.to,"_blank")}return Ni(()=>i.text,()=>{window.requestAnimationFrame(()=>{a()})}),(l,c)=>(me(),ai("div",cT,[ne("div",{class:zi(["bg-white shadow-md p-2 select-none",{"cursor-pointer":i.to!==void 0}]),style:ls(`transform: translate(-${$t(s)}px, ${$t(s)}px) rotate(45deg);`),onClick:o},[ne("div",uT,[ne("div",{ref_key:"container",ref:r,class:""},[tc(l.$slots,"default",{},()=>[ne("p",fT,mh(l.text||"text missing"),1)])],512)])],6)]))}}),dT=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},pT={},mT={class:"base-layout"},gT=ne("h1",{class:"absolute top-4 left-4 text-3xl font-bold text-white"}," Wavefront OBJ - Auto Centering Multi Tool ",-1);function _T(n,t){const e=hT;return me(),ai("div",mT,[Qt(e,{text:`This project is OpenSource!
Visit us on GitHub!`,to:"https://github.com/scolastico-dev/s.ACMT/",size:400}),gT,tc(n.$slots,"default")])}const vT=dT(pT,[["render",_T]]);var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function so(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ip={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,t){(function(e){n.exports=e()})(function(){return function e(i,r,s){function a(c,f){if(!r[c]){if(!i[c]){var u=typeof so=="function"&&so;if(!f&&u)return u(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var d=r[c]={exports:{}};i[c][0].call(d.exports,function(_){var g=i[c][1][_];return a(g||_)},d,d.exports,e,i,r,s)}return r[c].exports}for(var o=typeof so=="function"&&so,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(e,i,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,f,u,h,d,_,g,m=[],p=0,S=l.length,y=S,E=s.getTypeOf(l)!=="string";p<l.length;)y=S-p,u=E?(c=l[p++],f=p<S?l[p++]:0,p<S?l[p++]:0):(c=l.charCodeAt(p++),f=p<S?l.charCodeAt(p++):0,p<S?l.charCodeAt(p++):0),h=c>>2,d=(3&c)<<4|f>>4,_=1<y?(15&f)<<2|u>>6:64,g=2<y?63&u:64,m.push(o.charAt(h)+o.charAt(d)+o.charAt(_)+o.charAt(g));return m.join("")},r.decode=function(l){var c,f,u,h,d,_,g=0,m=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var S,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&y--,l.charAt(l.length-2)===o.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=a.uint8array?new Uint8Array(0|y):new Array(0|y);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(h=o.indexOf(l.charAt(g++)))>>4,f=(15&h)<<4|(d=o.indexOf(l.charAt(g++)))>>2,u=(3&d)<<6|(_=o.indexOf(l.charAt(g++))),S[m++]=c,d!==64&&(S[m++]=f),_!==64&&(S[m++]=u);return S}},{"./support":30,"./utils":32}],2:[function(e,i,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(f,u,h,d,_){this.compressedSize=f,this.uncompressedSize=u,this.crc32=h,this.compression=d,this.compressedContent=_}c.prototype={getContentWorker:function(){var f=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return f.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,u,h){return f.pipe(new o).pipe(new l("uncompressedSize")).pipe(u.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var s=e("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();i.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,f,u,h){var d=a,_=h+u;c^=-1;for(var g=h;g<_;g++)c=c>>>8^d[255&(c^f[g])];return-1^c}(0|l,o,o.length,0):function(c,f,u,h){var d=a,_=h+u;c^=-1;for(var g=h;g<_;g++)c=c>>>8^d[255&(c^f.charCodeAt(g))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function f(u,h){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=h,this.meta={}}r.magic="\b\0",o.inherits(f,l),f.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,u.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(h){u.push({data:h,meta:u.meta})}},r.compressWorker=function(u){return new f("Deflate",u)},r.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function s(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function a(d,_,g,m,p,S){var y,E,C=d.file,R=d.compression,P=S!==c.utf8encode,z=o.transformTo("string",S(C.name)),T=o.transformTo("string",c.utf8encode(C.name)),w=C.comment,G=o.transformTo("string",S(w)),I=o.transformTo("string",c.utf8encode(w)),U=T.length!==C.name.length,M=I.length!==w.length,V="",Y="",X="",W=C.dir,Q=C.date,lt={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(lt.crc32=d.crc32,lt.compressedSize=d.compressedSize,lt.uncompressedSize=d.uncompressedSize);var $=0;_&&($|=8),P||!U&&!M||($|=2048);var Z=0,gt=0;W&&(Z|=16),p==="UNIX"?(gt=798,Z|=function(it,dt){var pt=it;return it||(pt=dt?16893:33204),(65535&pt)<<16}(C.unixPermissions,W)):(gt=20,Z|=function(it){return 63&(it||0)}(C.dosPermissions)),y=Q.getUTCHours(),y<<=6,y|=Q.getUTCMinutes(),y<<=5,y|=Q.getUTCSeconds()/2,E=Q.getUTCFullYear()-1980,E<<=4,E|=Q.getUTCMonth()+1,E<<=5,E|=Q.getUTCDate(),U&&(Y=s(1,1)+s(f(z),4)+T,V+="up"+s(Y.length,2)+Y),M&&(X=s(1,1)+s(f(G),4)+I,V+="uc"+s(X.length,2)+X);var J="";return J+=`
\0`,J+=s($,2),J+=R.magic,J+=s(y,2),J+=s(E,2),J+=s(lt.crc32,4),J+=s(lt.compressedSize,4),J+=s(lt.uncompressedSize,4),J+=s(z.length,2),J+=s(V.length,2),{fileRecord:u.LOCAL_FILE_HEADER+J+z+V,dirRecord:u.CENTRAL_FILE_HEADER+s(gt,2)+J+s(G.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+z+V+G}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),f=e("../crc32"),u=e("../signature");function h(d,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},h.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=a(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=a(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return u.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(p,S,y,E,C){var R=o.transformTo("string",C(E));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(p,2)+s(p,2)+s(S,4)+s(y,4)+s(R.length,2)+R}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(d){var _=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},i.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var f=new a(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{o.forEach(function(h,d){u++;var _=function(S,y){var E=S||y,C=s[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(d.options.compression,l.compression),g=d.options.compressionOptions||l.compressionOptions||{},m=d.dir,p=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:h,dir:m,date:p,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(f)}),f.entriesCount=u}catch(h){f.error(h)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),f=e("./nodejsUtils");function u(h){return new a.Promise(function(d,_){var g=h.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==h.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(h,d){var _=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),f.isNode&&f.isStream(h)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",h,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new l(d);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],p=g.files;if(d.checkCRC32)for(var S=0;S<p.length;S++)m.push(u(p[S]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),p=m.files,S=0;S<p.length;S++){var y=p[S],E=y.fileNameStr,C=s.resolve(y.fileNameStr);_.file(C,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:d.createFolders}),y.dir||(_.file(C).unsafeOriginalName=E)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var f=this;o.on("data",function(u,h){f.push(u)||f._helper.pause(),c&&c(h)}).on("error",function(u){f.emit("error",u)}).on("end",function(){f.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},i.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,r){function s(C,R,P){var z,T=o.getTypeOf(R),w=o.extend(P||{},f);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=p(C)),w.createFolders&&(z=m(C))&&S.call(this,z,!0);var G=T==="string"&&w.binary===!1&&w.base64===!1;P&&P.binary!==void 0||(w.binary=!G),(R instanceof u&&R.uncompressedSize===0||w.dir||!R||R.length===0)&&(w.base64=!1,w.binary=!0,R="",w.compression="STORE",T="string");var I=null;I=R instanceof u||R instanceof l?R:_.isNode&&_.isStream(R)?new g(C,R):o.prepareContent(C,R,w.binary,w.optimizedBinaryString,w.base64);var U=new h(C,I,w);this.files[C]=U}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),f=e("./defaults"),u=e("./compressedObject"),h=e("./zipObject"),d=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var R=C.lastIndexOf("/");return 0<R?C.substring(0,R):""},p=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},S=function(C,R){return R=R!==void 0?R:f.createFolders,C=p(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:R}),this.files[C]};function y(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var R,P,z;for(R in this.files)z=this.files[R],(P=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&C(P,z)},filter:function(C){var R=[];return this.forEach(function(P,z){C(P,z)&&R.push(z)}),R},file:function(C,R,P){if(arguments.length!==1)return C=this.root+C,s.call(this,C,R,P),this;if(y(C)){var z=C;return this.filter(function(w,G){return!G.dir&&z.test(w)})}var T=this.files[this.root+C];return T&&!T.dir?T:null},folder:function(C){if(!C)return this;if(y(C))return this.filter(function(T,w){return w.dir&&C.test(T)});var R=this.root+C,P=S.call(this,R),z=this.clone();return z.root=P.name,z},remove:function(C){C=this.root+C;var R=this.files[C];if(R||(C.slice(-1)!=="/"&&(C+="/"),R=this.files[C]),R&&!R.dir)delete this.files[C];else for(var P=this.filter(function(T,w){return w.name.slice(0,C.length)===C}),z=0;z<P.length;z++)delete this.files[P[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var R,P={};try{if((P=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var z=P.comment||this.comment||"";R=d.generateWorker(this,P,z)}catch(T){(R=new l("error")).error(T)}return new c(R,P.type||"string",P.mimeType)},generateAsync:function(C,R){return this.generateInternalStream(C).accumulate(R)},generateNodeStream:function(C,R){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(R)}};i.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),u=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===f&&this.data[h+3]===u)return h-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),u=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&f===h[2]&&u===h[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=a},{"../utils":32}],19:[function(e,i,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),f=e("./Uint8ArrayReader");i.exports=function(u){var h=s.getTypeOf(u);return s.checkSupport(h),h!=="string"||a.uint8array?h==="nodebuffer"?new c(u):a.uint8array?new f(s.transformTo("uint8array",u)):new o(s.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=s.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},i.exports=s},{}],29:[function(e,i,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),f=e("../external"),u=null;if(c.nodestream)try{u=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(_,g){return new f.Promise(function(m,p){var S=[],y=_._internalType,E=_._outputType,C=_._mimeType;_.on("data",function(R,P){S.push(R),g&&g(P)}).on("error",function(R){S=[],p(R)}).on("end",function(){try{var R=function(P,z,T){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",z),T);case"base64":return l.encode(z);default:return s.transformTo(P,z)}}(E,function(P,z){var T,w=0,G=null,I=0;for(T=0;T<z.length;T++)I+=z[T].length;switch(P){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(G=new Uint8Array(I),T=0;T<z.length;T++)G.set(z[T],w),w+=z[T].length;return G;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+P+"'")}}(y,S),C);m(R)}catch(P){p(P)}S=[]}).resume()})}function d(_,g,m){var p=g;switch(g){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=g,this._mimeType=m,s.checkSupport(p),this._worker=_.pipe(new a(p)),_.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}d.prototype={accumulate:function(_){return h(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(p){g.call(m,p.data,p.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},_)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return a.nodebuffer?o.newBufferFrom(d,"utf-8"):function(_){var g,m,p,S,y,E=_.length,C=0;for(S=0;S<E;S++)(64512&(m=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(p=_.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),S++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(C):new Array(C),S=y=0;y<C;S++)(64512&(m=_.charCodeAt(S)))==55296&&S+1<E&&(64512&(p=_.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(p-56320),S++),m<128?g[y++]=m:(m<2048?g[y++]=192|m>>>6:(m<65536?g[y++]=224|m>>>12:(g[y++]=240|m>>>18,g[y++]=128|m>>>12&63),g[y++]=128|m>>>6&63),g[y++]=128|63&m);return g}(d)},r.utf8decode=function(d){return a.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,p,S,y=_.length,E=new Array(2*y);for(g=m=0;g<y;)if((p=_[g++])<128)E[m++]=p;else if(4<(S=c[p]))E[m++]=65533,g+=S-1;else{for(p&=S===2?31:S===3?15:7;1<S&&g<y;)p=p<<6|63&_[g++],S--;1<S?E[m++]=65533:p<65536?E[m++]=p:(p-=65536,E[m++]=55296|p>>10&1023,E[m++]=56320|1023&p)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),s.applyFromCharCode(E)}(d=s.transformTo(a.uint8array?"uint8array":"array",d))},s.inherits(u,l),u.prototype.processChunk=function(d){var _=s.transformTo(a.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(S,y){var E;for((y=y||S.length)>S.length&&(y=S.length),E=y-1;0<=E&&(192&S[E])==128;)E--;return E<0||E===0?y:E+c[S[E]]>y?E:y}(_),p=_;m!==_.length&&(a.uint8array?(p=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(p=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(p),meta:d.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=u,s.inherits(h,l),h.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(g){return g}function f(g,m){for(var p=0;p<g.length;++p)m[p]=255&g.charCodeAt(p);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(g),p.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(g,m,p){var S=[],y=0,E=g.length;if(E<=p)return String.fromCharCode.apply(null,g);for(;y<E;)m==="array"||m==="nodebuffer"?S.push(String.fromCharCode.apply(null,g.slice(y,Math.min(y+p,E)))):S.push(String.fromCharCode.apply(null,g.subarray(y,Math.min(y+p,E)))),y+=p;return S.join("")},stringifyByChar:function(g){for(var m="",p=0;p<g.length;p++)m+=String.fromCharCode(g[p]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function h(g){var m=65536,p=r.getTypeOf(g),S=!0;if(p==="uint8array"?S=u.applyCanBeUsed.uint8array:p==="nodebuffer"&&(S=u.applyCanBeUsed.nodebuffer),S)for(;1<m;)try{return u.stringifyByChunk(g,p,m)}catch{m=Math.floor(m/2)}return u.stringifyByChar(g)}function d(g,m){for(var p=0;p<g.length;p++)m[p]=g[p];return m}r.applyFromCharCode=h;var _={};_.string={string:c,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:function(g){return f(g,o.allocBuffer(g.length))}},_.array={string:h,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return h(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:h,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:h,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var p=r.getTypeOf(m);return _[p][g](m)},r.resolve=function(g){for(var m=g.split("/"),p=[],S=0;S<m.length;S++){var y=m[S];y==="."||y===""&&S!==0&&S!==m.length-1||(y===".."?p.pop():p.push(y))}return p.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,p,S="";for(p=0;p<(g||"").length;p++)S+="\\x"+((m=g.charCodeAt(p))<16?"0":"")+m.toString(16).toUpperCase();return S},r.delay=function(g,m,p){setImmediate(function(){g.apply(p||null,m||[])})},r.inherits=function(g,m){function p(){}p.prototype=m.prototype,g.prototype=new p},r.extend=function(){var g,m,p={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&p[m]===void 0&&(p[m]=arguments[g][m]);return p},r.prepareContent=function(g,m,p,S,y){return l.Promise.resolve(m).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,R){var P=new FileReader;P.onload=function(z){C(z.target.result)},P.onerror=function(z){R(z.target.error)},P.readAsArrayBuffer(E)}):E}).then(function(E){var C=r.getTypeOf(E);return C?(C==="arraybuffer"?E=r.transformTo("uint8array",E):C==="string"&&(y?E=a.decode(E):p&&S!==!0&&(E=function(R){return f(R,s.uint8array?new Uint8Array(R.length):new Array(R.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function f(u){this.files=[],this.loadOptions=u}f.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(h)+", expected "+a.pretty(u)+")")}},isSignature:function(u,h){var d=this.reader.index;this.reader.setIndex(u);var _=this.reader.readString(4)===h;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",d=a.transformTo(h,u);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,h,d,_=this.zip64EndOfCentralSize-44;0<_;)u=this.reader.readInt(2),h=this.reader.readInt(4),d=this.reader.readData(h),this.zip64ExtensibleData[u]={id:u,length:h,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,h;for(u=0;u<this.files.length;u++)h=this.files[u],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var h=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=h-d;if(0<_)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(u){this.reader=s(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),f=e("./compressions"),u=e("./support");function h(d,_){this.options=d,this.loadOptions=_}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var p in f)if(Object.prototype.hasOwnProperty.call(f,p)&&f[p].magic===m)return f[p];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,p=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<p;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(p)},handleUTF8:function(){var d=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var p=a.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=s(d.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(d.length-5))}return null}},i.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),f=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var p=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var S=!this._dataBinary;S&&!p&&(g=g.pipe(new l.Utf8EncodeWorker)),!S&&p&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(y){(g=new f("error")).error(y)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<u.length;d++)s.prototype[u[d]]=h;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,f=new l(_),u=s.document.createTextNode("");f.observe(u,{characterData:!0}),a=function(){u.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var h=new s.MessageChannel;h.port1.onmessage=_,a=function(){h.port2.postMessage(0)}}var d=[];function _(){var g,m;o=!0;for(var p=d.length;p;){for(m=d,d=[],g=-1;++g<p;)m[g]();p=d.length}o=!1}i.exports=function(g){d.push(g)!==1||o||a()}}).call(this,typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function u(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,p!==a&&g(this,p)}function h(p,S,y){this.promise=p,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function d(p,S,y){s(function(){var E;try{E=S(y)}catch(C){return o.reject(p,C)}E===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,E)})}function _(p){var S=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof S=="function")return function(){S.apply(p,arguments)}}function g(p,S){var y=!1;function E(P){y||(y=!0,o.reject(p,P))}function C(P){y||(y=!0,o.resolve(p,P))}var R=m(function(){S(C,E)});R.status==="error"&&E(R.value)}function m(p,S){var y={};try{y.value=p(S),y.status="success"}catch(E){y.status="error",y.value=E}return y}(i.exports=u).prototype.finally=function(p){if(typeof p!="function")return this;var S=this.constructor;return this.then(function(y){return S.resolve(p()).then(function(){return y})},function(y){return S.resolve(p()).then(function(){throw y})})},u.prototype.catch=function(p){return this.then(null,p)},u.prototype.then=function(p,S){if(typeof p!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var y=new this.constructor(a);return this.state!==f?d(y,this.state===c?p:S,this.outcome):this.queue.push(new h(y,p,S)),y},h.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},h.prototype.otherCallFulfilled=function(p){d(this.promise,this.onFulfilled,p)},h.prototype.callRejected=function(p){o.reject(this.promise,p)},h.prototype.otherCallRejected=function(p){d(this.promise,this.onRejected,p)},o.resolve=function(p,S){var y=m(_,S);if(y.status==="error")return o.reject(p,y.value);var E=y.value;if(E)g(p,E);else{p.state=c,p.outcome=S;for(var C=-1,R=p.queue.length;++C<R;)p.queue[C].callFulfilled(S)}return p},o.reject=function(p,S){p.state=l,p.outcome=S;for(var y=-1,E=p.queue.length;++y<E;)p.queue[y].callRejected(S);return p},u.resolve=function(p){return p instanceof this?p:o.resolve(new this(a),p)},u.reject=function(p){var S=new this(a);return o.reject(S,p)},u.all=function(p){var S=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,E=!1;if(!y)return this.resolve([]);for(var C=new Array(y),R=0,P=-1,z=new this(a);++P<y;)T(p[P],P);return z;function T(w,G){S.resolve(w).then(function(I){C[G]=I,++R!==y||E||(E=!0,o.resolve(z,C))},function(I){E||(E=!0,o.reject(z,I))})}},u.race=function(p){var S=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,E=!1;if(!y)return this.resolve([]);for(var C=-1,R=new this(a);++C<y;)P=p[C],S.resolve(P).then(function(z){E||(E=!0,o.resolve(R,z))},function(z){E||(E=!0,o.reject(R,z))});var P;return R}},{immediate:36}],38:[function(e,i,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),f=Object.prototype.toString,u=0,h=-1,d=0,_=8;function g(p){if(!(this instanceof g))return new g(p);this.options=a.assign({level:h,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},p||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(y!==u)throw new Error(l[y]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var E;if(E=typeof S.dictionary=="string"?o.string2buf(S.dictionary):f.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(y=s.deflateSetDictionary(this.strm,E))!==u)throw new Error(l[y]);this._dict_set=!0}}function m(p,S){var y=new g(S);if(y.push(p,!0),y.err)throw y.msg||l[y.err];return y.result}g.prototype.push=function(p,S){var y,E,C=this.strm,R=this.options.chunkSize;if(this.ended)return!1;E=S===~~S?S:S===!0?4:0,typeof p=="string"?C.input=o.string2buf(p):f.call(p)==="[object ArrayBuffer]"?C.input=new Uint8Array(p):C.input=p,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(R),C.next_out=0,C.avail_out=R),(y=s.deflate(C,E))!==1&&y!==u)return this.onEnd(y),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&y!==1);return E===4?(y=s.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===u):E!==2||(this.onEnd(u),!(C.avail_out=0))},g.prototype.onData=function(p){this.chunks.push(p)},g.prototype.onEnd=function(p){p===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(p,S){return(S=S||{}).raw=!0,m(p,S)},r.gzip=function(p,S){return(S=S||{}).gzip=!0,m(p,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),f=e("./zlib/zstream"),u=e("./zlib/gzheader"),h=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var p=s.inflateInit2(this.strm,m.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new u,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var p=new d(m);if(p.push(g,!0),p.err)throw p.msg||c[p.err];return p.result}d.prototype.push=function(g,m){var p,S,y,E,C,R,P=this.strm,z=this.options.chunkSize,T=this.options.dictionary,w=!1;if(this.ended)return!1;S=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?P.input=o.binstring2buf(g):h.call(g)==="[object ArrayBuffer]"?P.input=new Uint8Array(g):P.input=g,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(z),P.next_out=0,P.avail_out=z),(p=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(R=typeof T=="string"?o.string2buf(T):h.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,p=s.inflateSetDictionary(this.strm,R)),p===l.Z_BUF_ERROR&&w===!0&&(p=l.Z_OK,w=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&p!==l.Z_STREAM_END&&(P.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=o.utf8border(P.output,P.next_out),E=P.next_out-y,C=o.buf2string(P.output,y),P.next_out=E,P.avail_out=z-E,E&&a.arraySet(P.output,P.output,y,E,0),this.onData(C)):this.onData(a.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(w=!0)}while((0<P.avail_in||P.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(p=s.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=d,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var u in f)f.hasOwnProperty(u)&&(l[u]=f[u])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,f,u,h){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+u),h);else for(var d=0;d<u;d++)l[h+d]=c[f+d]},flattenChunks:function(l){var c,f,u,h,d,_;for(c=u=0,f=l.length;c<f;c++)u+=l[c].length;for(_=new Uint8Array(u),c=h=0,f=l.length;c<f;c++)d=l[c],_.set(d,h),h+=d.length;return _}},o={arraySet:function(l,c,f,u,h){for(var d=0;d<u;d++)l[h+d]=c[f+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,i,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(u,h){if(h<65537&&(u.subarray&&o||!u.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(u,h));for(var d="",_=0;_<h;_++)d+=String.fromCharCode(u[_]);return d}l[254]=l[254]=1,r.string2buf=function(u){var h,d,_,g,m,p=u.length,S=0;for(g=0;g<p;g++)(64512&(d=u.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=u.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),S+=d<128?1:d<2048?2:d<65536?3:4;for(h=new s.Buf8(S),g=m=0;m<S;g++)(64512&(d=u.charCodeAt(g)))==55296&&g+1<p&&(64512&(_=u.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?h[m++]=d:(d<2048?h[m++]=192|d>>>6:(d<65536?h[m++]=224|d>>>12:(h[m++]=240|d>>>18,h[m++]=128|d>>>12&63),h[m++]=128|d>>>6&63),h[m++]=128|63&d);return h},r.buf2binstring=function(u){return f(u,u.length)},r.binstring2buf=function(u){for(var h=new s.Buf8(u.length),d=0,_=h.length;d<_;d++)h[d]=u.charCodeAt(d);return h},r.buf2string=function(u,h){var d,_,g,m,p=h||u.length,S=new Array(2*p);for(d=_=0;d<p;)if((g=u[d++])<128)S[_++]=g;else if(4<(m=l[g]))S[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<p;)g=g<<6|63&u[d++],m--;1<m?S[_++]=65533:g<65536?S[_++]=g:(g-=65536,S[_++]=55296|g>>10&1023,S[_++]=56320|1023&g)}return f(S,_)},r.utf8border=function(u,h){var d;for((h=h||u.length)>u.length&&(h=u.length),d=h-1;0<=d&&(192&u[d])==128;)d--;return d<0||d===0?h:d+l[u[d]]>h?d:h}},{"./common":41}],43:[function(e,i,r){i.exports=function(s,a,o,l){for(var c=65535&s|0,f=s>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;f=f+(c=c+a[l++]|0)|0,--u;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();i.exports=function(a,o,l,c){var f=s,u=c+l;a^=-1;for(var h=c;h<u;h++)a=a>>>8^f[255&(a^o[h])];return-1^a}},{}],46:[function(e,i,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),f=e("./messages"),u=0,h=4,d=0,_=-2,g=-1,m=4,p=2,S=8,y=9,E=286,C=30,R=19,P=2*E+1,z=15,T=3,w=258,G=w+T+1,I=42,U=113,M=1,V=2,Y=3,X=4;function W(x,F){return x.msg=f[F],F}function Q(x){return(x<<1)-(4<x?9:0)}function lt(x){for(var F=x.length;0<=--F;)x[F]=0}function $(x){var F=x.state,H=F.pending;H>x.avail_out&&(H=x.avail_out),H!==0&&(a.arraySet(x.output,F.pending_buf,F.pending_out,H,x.next_out),x.next_out+=H,F.pending_out+=H,x.total_out+=H,x.avail_out-=H,F.pending-=H,F.pending===0&&(F.pending_out=0))}function Z(x,F){o._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,F),x.block_start=x.strstart,$(x.strm)}function gt(x,F){x.pending_buf[x.pending++]=F}function J(x,F){x.pending_buf[x.pending++]=F>>>8&255,x.pending_buf[x.pending++]=255&F}function it(x,F){var H,b,v=x.max_chain_length,L=x.strstart,N=x.prev_length,B=x.nice_match,D=x.strstart>x.w_size-G?x.strstart-(x.w_size-G):0,q=x.window,j=x.w_mask,K=x.prev,rt=x.strstart+w,ot=q[L+N-1],ft=q[L+N];x.prev_length>=x.good_match&&(v>>=2),B>x.lookahead&&(B=x.lookahead);do if(q[(H=F)+N]===ft&&q[H+N-1]===ot&&q[H]===q[L]&&q[++H]===q[L+1]){L+=2,H++;do;while(q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&q[++L]===q[++H]&&L<rt);if(b=w-(rt-L),L=rt-w,N<b){if(x.match_start=F,B<=(N=b))break;ot=q[L+N-1],ft=q[L+N]}}while((F=K[F&j])>D&&--v!=0);return N<=x.lookahead?N:x.lookahead}function dt(x){var F,H,b,v,L,N,B,D,q,j,K=x.w_size;do{if(v=x.window_size-x.lookahead-x.strstart,x.strstart>=K+(K-G)){for(a.arraySet(x.window,x.window,K,K,0),x.match_start-=K,x.strstart-=K,x.block_start-=K,F=H=x.hash_size;b=x.head[--F],x.head[F]=K<=b?b-K:0,--H;);for(F=H=K;b=x.prev[--F],x.prev[F]=K<=b?b-K:0,--H;);v+=K}if(x.strm.avail_in===0)break;if(N=x.strm,B=x.window,D=x.strstart+x.lookahead,q=v,j=void 0,j=N.avail_in,q<j&&(j=q),H=j===0?0:(N.avail_in-=j,a.arraySet(B,N.input,N.next_in,j,D),N.state.wrap===1?N.adler=l(N.adler,B,j,D):N.state.wrap===2&&(N.adler=c(N.adler,B,j,D)),N.next_in+=j,N.total_in+=j,j),x.lookahead+=H,x.lookahead+x.insert>=T)for(L=x.strstart-x.insert,x.ins_h=x.window[L],x.ins_h=(x.ins_h<<x.hash_shift^x.window[L+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[L+T-1])&x.hash_mask,x.prev[L&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=L,L++,x.insert--,!(x.lookahead+x.insert<T)););}while(x.lookahead<G&&x.strm.avail_in!==0)}function pt(x,F){for(var H,b;;){if(x.lookahead<G){if(dt(x),x.lookahead<G&&F===u)return M;if(x.lookahead===0)break}if(H=0,x.lookahead>=T&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),H!==0&&x.strstart-H<=x.w_size-G&&(x.match_length=it(x,H)),x.match_length>=T)if(b=o._tr_tally(x,x.strstart-x.match_start,x.match_length-T),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=T){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else b=o._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(b&&(Z(x,!1),x.strm.avail_out===0))return M}return x.insert=x.strstart<T-1?x.strstart:T-1,F===h?(Z(x,!0),x.strm.avail_out===0?Y:X):x.last_lit&&(Z(x,!1),x.strm.avail_out===0)?M:V}function yt(x,F){for(var H,b,v;;){if(x.lookahead<G){if(dt(x),x.lookahead<G&&F===u)return M;if(x.lookahead===0)break}if(H=0,x.lookahead>=T&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=T-1,H!==0&&x.prev_length<x.max_lazy_match&&x.strstart-H<=x.w_size-G&&(x.match_length=it(x,H),x.match_length<=5&&(x.strategy===1||x.match_length===T&&4096<x.strstart-x.match_start)&&(x.match_length=T-1)),x.prev_length>=T&&x.match_length<=x.prev_length){for(v=x.strstart+x.lookahead-T,b=o._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-T),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=v&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+T-1])&x.hash_mask,H=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=T-1,x.strstart++,b&&(Z(x,!1),x.strm.avail_out===0))return M}else if(x.match_available){if((b=o._tr_tally(x,0,x.window[x.strstart-1]))&&Z(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return M}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(b=o._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<T-1?x.strstart:T-1,F===h?(Z(x,!0),x.strm.avail_out===0?Y:X):x.last_lit&&(Z(x,!1),x.strm.avail_out===0)?M:V}function bt(x,F,H,b,v){this.good_length=x,this.max_lazy=F,this.nice_length=H,this.max_chain=b,this.func=v}function Tt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*P),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*R+1)),lt(this.dyn_ltree),lt(this.dyn_dtree),lt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(z+1),this.heap=new a.Buf16(2*E+1),lt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),lt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function tt(x){var F;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=p,(F=x.state).pending=0,F.pending_out=0,F.wrap<0&&(F.wrap=-F.wrap),F.status=F.wrap?I:U,x.adler=F.wrap===2?0:1,F.last_flush=u,o._tr_init(F),d):W(x,_)}function Pt(x){var F=tt(x);return F===d&&function(H){H.window_size=2*H.w_size,lt(H.head),H.max_lazy_match=s[H.level].max_lazy,H.good_match=s[H.level].good_length,H.nice_match=s[H.level].nice_length,H.max_chain_length=s[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=T-1,H.match_available=0,H.ins_h=0}(x.state),F}function k(x,F,H,b,v,L){if(!x)return _;var N=1;if(F===g&&(F=6),b<0?(N=0,b=-b):15<b&&(N=2,b-=16),v<1||y<v||H!==S||b<8||15<b||F<0||9<F||L<0||m<L)return W(x,_);b===8&&(b=9);var B=new Tt;return(x.state=B).strm=x,B.wrap=N,B.gzhead=null,B.w_bits=b,B.w_size=1<<B.w_bits,B.w_mask=B.w_size-1,B.hash_bits=v+7,B.hash_size=1<<B.hash_bits,B.hash_mask=B.hash_size-1,B.hash_shift=~~((B.hash_bits+T-1)/T),B.window=new a.Buf8(2*B.w_size),B.head=new a.Buf16(B.hash_size),B.prev=new a.Buf16(B.w_size),B.lit_bufsize=1<<v+6,B.pending_buf_size=4*B.lit_bufsize,B.pending_buf=new a.Buf8(B.pending_buf_size),B.d_buf=1*B.lit_bufsize,B.l_buf=3*B.lit_bufsize,B.level=F,B.strategy=L,B.method=H,Pt(x)}s=[new bt(0,0,0,0,function(x,F){var H=65535;for(H>x.pending_buf_size-5&&(H=x.pending_buf_size-5);;){if(x.lookahead<=1){if(dt(x),x.lookahead===0&&F===u)return M;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var b=x.block_start+H;if((x.strstart===0||x.strstart>=b)&&(x.lookahead=x.strstart-b,x.strstart=b,Z(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-G&&(Z(x,!1),x.strm.avail_out===0))return M}return x.insert=0,F===h?(Z(x,!0),x.strm.avail_out===0?Y:X):(x.strstart>x.block_start&&(Z(x,!1),x.strm.avail_out),M)}),new bt(4,4,8,4,pt),new bt(4,5,16,8,pt),new bt(4,6,32,32,pt),new bt(4,4,16,16,yt),new bt(8,16,32,32,yt),new bt(8,16,128,128,yt),new bt(8,32,128,256,yt),new bt(32,128,258,1024,yt),new bt(32,258,258,4096,yt)],r.deflateInit=function(x,F){return k(x,F,S,15,8,0)},r.deflateInit2=k,r.deflateReset=Pt,r.deflateResetKeep=tt,r.deflateSetHeader=function(x,F){return x&&x.state?x.state.wrap!==2?_:(x.state.gzhead=F,d):_},r.deflate=function(x,F){var H,b,v,L;if(!x||!x.state||5<F||F<0)return x?W(x,_):_;if(b=x.state,!x.output||!x.input&&x.avail_in!==0||b.status===666&&F!==h)return W(x,x.avail_out===0?-5:_);if(b.strm=x,H=b.last_flush,b.last_flush=F,b.status===I)if(b.wrap===2)x.adler=0,gt(b,31),gt(b,139),gt(b,8),b.gzhead?(gt(b,(b.gzhead.text?1:0)+(b.gzhead.hcrc?2:0)+(b.gzhead.extra?4:0)+(b.gzhead.name?8:0)+(b.gzhead.comment?16:0)),gt(b,255&b.gzhead.time),gt(b,b.gzhead.time>>8&255),gt(b,b.gzhead.time>>16&255),gt(b,b.gzhead.time>>24&255),gt(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),gt(b,255&b.gzhead.os),b.gzhead.extra&&b.gzhead.extra.length&&(gt(b,255&b.gzhead.extra.length),gt(b,b.gzhead.extra.length>>8&255)),b.gzhead.hcrc&&(x.adler=c(x.adler,b.pending_buf,b.pending,0)),b.gzindex=0,b.status=69):(gt(b,0),gt(b,0),gt(b,0),gt(b,0),gt(b,0),gt(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),gt(b,3),b.status=U);else{var N=S+(b.w_bits-8<<4)<<8;N|=(2<=b.strategy||b.level<2?0:b.level<6?1:b.level===6?2:3)<<6,b.strstart!==0&&(N|=32),N+=31-N%31,b.status=U,J(b,N),b.strstart!==0&&(J(b,x.adler>>>16),J(b,65535&x.adler)),x.adler=1}if(b.status===69)if(b.gzhead.extra){for(v=b.pending;b.gzindex<(65535&b.gzhead.extra.length)&&(b.pending!==b.pending_buf_size||(b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),$(x),v=b.pending,b.pending!==b.pending_buf_size));)gt(b,255&b.gzhead.extra[b.gzindex]),b.gzindex++;b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),b.gzindex===b.gzhead.extra.length&&(b.gzindex=0,b.status=73)}else b.status=73;if(b.status===73)if(b.gzhead.name){v=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),$(x),v=b.pending,b.pending===b.pending_buf_size)){L=1;break}L=b.gzindex<b.gzhead.name.length?255&b.gzhead.name.charCodeAt(b.gzindex++):0,gt(b,L)}while(L!==0);b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),L===0&&(b.gzindex=0,b.status=91)}else b.status=91;if(b.status===91)if(b.gzhead.comment){v=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),$(x),v=b.pending,b.pending===b.pending_buf_size)){L=1;break}L=b.gzindex<b.gzhead.comment.length?255&b.gzhead.comment.charCodeAt(b.gzindex++):0,gt(b,L)}while(L!==0);b.gzhead.hcrc&&b.pending>v&&(x.adler=c(x.adler,b.pending_buf,b.pending-v,v)),L===0&&(b.status=103)}else b.status=103;if(b.status===103&&(b.gzhead.hcrc?(b.pending+2>b.pending_buf_size&&$(x),b.pending+2<=b.pending_buf_size&&(gt(b,255&x.adler),gt(b,x.adler>>8&255),x.adler=0,b.status=U)):b.status=U),b.pending!==0){if($(x),x.avail_out===0)return b.last_flush=-1,d}else if(x.avail_in===0&&Q(F)<=Q(H)&&F!==h)return W(x,-5);if(b.status===666&&x.avail_in!==0)return W(x,-5);if(x.avail_in!==0||b.lookahead!==0||F!==u&&b.status!==666){var B=b.strategy===2?function(D,q){for(var j;;){if(D.lookahead===0&&(dt(D),D.lookahead===0)){if(q===u)return M;break}if(D.match_length=0,j=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++,j&&(Z(D,!1),D.strm.avail_out===0))return M}return D.insert=0,q===h?(Z(D,!0),D.strm.avail_out===0?Y:X):D.last_lit&&(Z(D,!1),D.strm.avail_out===0)?M:V}(b,F):b.strategy===3?function(D,q){for(var j,K,rt,ot,ft=D.window;;){if(D.lookahead<=w){if(dt(D),D.lookahead<=w&&q===u)return M;if(D.lookahead===0)break}if(D.match_length=0,D.lookahead>=T&&0<D.strstart&&(K=ft[rt=D.strstart-1])===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]){ot=D.strstart+w;do;while(K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&K===ft[++rt]&&rt<ot);D.match_length=w-(ot-rt),D.match_length>D.lookahead&&(D.match_length=D.lookahead)}if(D.match_length>=T?(j=o._tr_tally(D,1,D.match_length-T),D.lookahead-=D.match_length,D.strstart+=D.match_length,D.match_length=0):(j=o._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++),j&&(Z(D,!1),D.strm.avail_out===0))return M}return D.insert=0,q===h?(Z(D,!0),D.strm.avail_out===0?Y:X):D.last_lit&&(Z(D,!1),D.strm.avail_out===0)?M:V}(b,F):s[b.level].func(b,F);if(B!==Y&&B!==X||(b.status=666),B===M||B===Y)return x.avail_out===0&&(b.last_flush=-1),d;if(B===V&&(F===1?o._tr_align(b):F!==5&&(o._tr_stored_block(b,0,0,!1),F===3&&(lt(b.head),b.lookahead===0&&(b.strstart=0,b.block_start=0,b.insert=0))),$(x),x.avail_out===0))return b.last_flush=-1,d}return F!==h?d:b.wrap<=0?1:(b.wrap===2?(gt(b,255&x.adler),gt(b,x.adler>>8&255),gt(b,x.adler>>16&255),gt(b,x.adler>>24&255),gt(b,255&x.total_in),gt(b,x.total_in>>8&255),gt(b,x.total_in>>16&255),gt(b,x.total_in>>24&255)):(J(b,x.adler>>>16),J(b,65535&x.adler)),$(x),0<b.wrap&&(b.wrap=-b.wrap),b.pending!==0?d:1)},r.deflateEnd=function(x){var F;return x&&x.state?(F=x.state.status)!==I&&F!==69&&F!==73&&F!==91&&F!==103&&F!==U&&F!==666?W(x,_):(x.state=null,F===U?W(x,-3):d):_},r.deflateSetDictionary=function(x,F){var H,b,v,L,N,B,D,q,j=F.length;if(!x||!x.state||(L=(H=x.state).wrap)===2||L===1&&H.status!==I||H.lookahead)return _;for(L===1&&(x.adler=l(x.adler,F,j,0)),H.wrap=0,j>=H.w_size&&(L===0&&(lt(H.head),H.strstart=0,H.block_start=0,H.insert=0),q=new a.Buf8(H.w_size),a.arraySet(q,F,j-H.w_size,H.w_size,0),F=q,j=H.w_size),N=x.avail_in,B=x.next_in,D=x.input,x.avail_in=j,x.next_in=0,x.input=F,dt(H);H.lookahead>=T;){for(b=H.strstart,v=H.lookahead-(T-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[b+T-1])&H.hash_mask,H.prev[b&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=b,b++,--v;);H.strstart=b,H.lookahead=T-1,dt(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=T-1,H.match_available=0,x.next_in=B,x.input=D,x.avail_in=N,H.wrap=L,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(s,a){var o,l,c,f,u,h,d,_,g,m,p,S,y,E,C,R,P,z,T,w,G,I,U,M,V;o=s.state,l=s.next_in,M=s.input,c=l+(s.avail_in-5),f=s.next_out,V=s.output,u=f-(a-s.avail_out),h=f+(s.avail_out-257),d=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,p=o.window,S=o.hold,y=o.bits,E=o.lencode,C=o.distcode,R=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;t:do{y<15&&(S+=M[l++]<<y,y+=8,S+=M[l++]<<y,y+=8),z=E[S&R];e:for(;;){if(S>>>=T=z>>>24,y-=T,(T=z>>>16&255)===0)V[f++]=65535&z;else{if(!(16&T)){if(!(64&T)){z=E[(65535&z)+(S&(1<<T)-1)];continue e}if(32&T){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}w=65535&z,(T&=15)&&(y<T&&(S+=M[l++]<<y,y+=8),w+=S&(1<<T)-1,S>>>=T,y-=T),y<15&&(S+=M[l++]<<y,y+=8,S+=M[l++]<<y,y+=8),z=C[S&P];n:for(;;){if(S>>>=T=z>>>24,y-=T,!(16&(T=z>>>16&255))){if(!(64&T)){z=C[(65535&z)+(S&(1<<T)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(G=65535&z,y<(T&=15)&&(S+=M[l++]<<y,(y+=8)<T&&(S+=M[l++]<<y,y+=8)),d<(G+=S&(1<<T)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(S>>>=T,y-=T,(T=f-u)<G){if(g<(T=G-T)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(U=p,(I=0)===m){if(I+=_-T,T<w){for(w-=T;V[f++]=p[I++],--T;);I=f-G,U=V}}else if(m<T){if(I+=_+m-T,(T-=m)<w){for(w-=T;V[f++]=p[I++],--T;);if(I=0,m<w){for(w-=T=m;V[f++]=p[I++],--T;);I=f-G,U=V}}}else if(I+=m-T,T<w){for(w-=T;V[f++]=p[I++],--T;);I=f-G,U=V}for(;2<w;)V[f++]=U[I++],V[f++]=U[I++],V[f++]=U[I++],w-=3;w&&(V[f++]=U[I++],1<w&&(V[f++]=U[I++]))}else{for(I=f-G;V[f++]=V[I++],V[f++]=V[I++],V[f++]=V[I++],2<(w-=3););w&&(V[f++]=V[I++],1<w&&(V[f++]=V[I++]))}break}}break}}while(l<c&&f<h);l-=w=y>>3,S&=(1<<(y-=w<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=f<h?h-f+257:257-(f-h),o.hold=S,o.bits=y}},{}],49:[function(e,i,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),f=1,u=2,h=0,d=-2,_=1,g=852,m=592;function p(I){return(I>>>24&255)+(I>>>8&65280)+((65280&I)<<8)+((255&I)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(I){var U;return I&&I.state?(U=I.state,I.total_in=I.total_out=U.total=0,I.msg="",U.wrap&&(I.adler=1&U.wrap),U.mode=_,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(g),U.distcode=U.distdyn=new s.Buf32(m),U.sane=1,U.back=-1,h):d}function E(I){var U;return I&&I.state?((U=I.state).wsize=0,U.whave=0,U.wnext=0,y(I)):d}function C(I,U){var M,V;return I&&I.state?(V=I.state,U<0?(M=0,U=-U):(M=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?d:(V.window!==null&&V.wbits!==U&&(V.window=null),V.wrap=M,V.wbits=U,E(I))):d}function R(I,U){var M,V;return I?(V=new S,(I.state=V).window=null,(M=C(I,U))!==h&&(I.state=null),M):d}var P,z,T=!0;function w(I){if(T){var U;for(P=new s.Buf32(512),z=new s.Buf32(32),U=0;U<144;)I.lens[U++]=8;for(;U<256;)I.lens[U++]=9;for(;U<280;)I.lens[U++]=7;for(;U<288;)I.lens[U++]=8;for(c(f,I.lens,0,288,P,0,I.work,{bits:9}),U=0;U<32;)I.lens[U++]=5;c(u,I.lens,0,32,z,0,I.work,{bits:5}),T=!1}I.lencode=P,I.lenbits=9,I.distcode=z,I.distbits=5}function G(I,U,M,V){var Y,X=I.state;return X.window===null&&(X.wsize=1<<X.wbits,X.wnext=0,X.whave=0,X.window=new s.Buf8(X.wsize)),V>=X.wsize?(s.arraySet(X.window,U,M-X.wsize,X.wsize,0),X.wnext=0,X.whave=X.wsize):(V<(Y=X.wsize-X.wnext)&&(Y=V),s.arraySet(X.window,U,M-V,Y,X.wnext),(V-=Y)?(s.arraySet(X.window,U,M-V,V,0),X.wnext=V,X.whave=X.wsize):(X.wnext+=Y,X.wnext===X.wsize&&(X.wnext=0),X.whave<X.wsize&&(X.whave+=Y))),0}r.inflateReset=E,r.inflateReset2=C,r.inflateResetKeep=y,r.inflateInit=function(I){return R(I,15)},r.inflateInit2=R,r.inflate=function(I,U){var M,V,Y,X,W,Q,lt,$,Z,gt,J,it,dt,pt,yt,bt,Tt,tt,Pt,k,x,F,H,b,v=0,L=new s.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!I||!I.state||!I.output||!I.input&&I.avail_in!==0)return d;(M=I.state).mode===12&&(M.mode=13),W=I.next_out,Y=I.output,lt=I.avail_out,X=I.next_in,V=I.input,Q=I.avail_in,$=M.hold,Z=M.bits,gt=Q,J=lt,F=h;t:for(;;)switch(M.mode){case _:if(M.wrap===0){M.mode=13;break}for(;Z<16;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(2&M.wrap&&$===35615){L[M.check=0]=255&$,L[1]=$>>>8&255,M.check=o(M.check,L,2,0),Z=$=0,M.mode=2;break}if(M.flags=0,M.head&&(M.head.done=!1),!(1&M.wrap)||(((255&$)<<8)+($>>8))%31){I.msg="incorrect header check",M.mode=30;break}if((15&$)!=8){I.msg="unknown compression method",M.mode=30;break}if(Z-=4,x=8+(15&($>>>=4)),M.wbits===0)M.wbits=x;else if(x>M.wbits){I.msg="invalid window size",M.mode=30;break}M.dmax=1<<x,I.adler=M.check=1,M.mode=512&$?10:12,Z=$=0;break;case 2:for(;Z<16;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(M.flags=$,(255&M.flags)!=8){I.msg="unknown compression method",M.mode=30;break}if(57344&M.flags){I.msg="unknown header flags set",M.mode=30;break}M.head&&(M.head.text=$>>8&1),512&M.flags&&(L[0]=255&$,L[1]=$>>>8&255,M.check=o(M.check,L,2,0)),Z=$=0,M.mode=3;case 3:for(;Z<32;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.head&&(M.head.time=$),512&M.flags&&(L[0]=255&$,L[1]=$>>>8&255,L[2]=$>>>16&255,L[3]=$>>>24&255,M.check=o(M.check,L,4,0)),Z=$=0,M.mode=4;case 4:for(;Z<16;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.head&&(M.head.xflags=255&$,M.head.os=$>>8),512&M.flags&&(L[0]=255&$,L[1]=$>>>8&255,M.check=o(M.check,L,2,0)),Z=$=0,M.mode=5;case 5:if(1024&M.flags){for(;Z<16;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.length=$,M.head&&(M.head.extra_len=$),512&M.flags&&(L[0]=255&$,L[1]=$>>>8&255,M.check=o(M.check,L,2,0)),Z=$=0}else M.head&&(M.head.extra=null);M.mode=6;case 6:if(1024&M.flags&&(Q<(it=M.length)&&(it=Q),it&&(M.head&&(x=M.head.extra_len-M.length,M.head.extra||(M.head.extra=new Array(M.head.extra_len)),s.arraySet(M.head.extra,V,X,it,x)),512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,M.length-=it),M.length))break t;M.length=0,M.mode=7;case 7:if(2048&M.flags){if(Q===0)break t;for(it=0;x=V[X+it++],M.head&&x&&M.length<65536&&(M.head.name+=String.fromCharCode(x)),x&&it<Q;);if(512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,x)break t}else M.head&&(M.head.name=null);M.length=0,M.mode=8;case 8:if(4096&M.flags){if(Q===0)break t;for(it=0;x=V[X+it++],M.head&&x&&M.length<65536&&(M.head.comment+=String.fromCharCode(x)),x&&it<Q;);if(512&M.flags&&(M.check=o(M.check,V,it,X)),Q-=it,X+=it,x)break t}else M.head&&(M.head.comment=null);M.mode=9;case 9:if(512&M.flags){for(;Z<16;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if($!==(65535&M.check)){I.msg="header crc mismatch",M.mode=30;break}Z=$=0}M.head&&(M.head.hcrc=M.flags>>9&1,M.head.done=!0),I.adler=M.check=0,M.mode=12;break;case 10:for(;Z<32;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}I.adler=M.check=p($),Z=$=0,M.mode=11;case 11:if(M.havedict===0)return I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=$,M.bits=Z,2;I.adler=M.check=1,M.mode=12;case 12:if(U===5||U===6)break t;case 13:if(M.last){$>>>=7&Z,Z-=7&Z,M.mode=27;break}for(;Z<3;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}switch(M.last=1&$,Z-=1,3&($>>>=1)){case 0:M.mode=14;break;case 1:if(w(M),M.mode=20,U!==6)break;$>>>=2,Z-=2;break t;case 2:M.mode=17;break;case 3:I.msg="invalid block type",M.mode=30}$>>>=2,Z-=2;break;case 14:for($>>>=7&Z,Z-=7&Z;Z<32;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if((65535&$)!=($>>>16^65535)){I.msg="invalid stored block lengths",M.mode=30;break}if(M.length=65535&$,Z=$=0,M.mode=15,U===6)break t;case 15:M.mode=16;case 16:if(it=M.length){if(Q<it&&(it=Q),lt<it&&(it=lt),it===0)break t;s.arraySet(Y,V,X,it,W),Q-=it,X+=it,lt-=it,W+=it,M.length-=it;break}M.mode=12;break;case 17:for(;Z<14;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(M.nlen=257+(31&$),$>>>=5,Z-=5,M.ndist=1+(31&$),$>>>=5,Z-=5,M.ncode=4+(15&$),$>>>=4,Z-=4,286<M.nlen||30<M.ndist){I.msg="too many length or distance symbols",M.mode=30;break}M.have=0,M.mode=18;case 18:for(;M.have<M.ncode;){for(;Z<3;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.lens[N[M.have++]]=7&$,$>>>=3,Z-=3}for(;M.have<19;)M.lens[N[M.have++]]=0;if(M.lencode=M.lendyn,M.lenbits=7,H={bits:M.lenbits},F=c(0,M.lens,0,19,M.lencode,0,M.work,H),M.lenbits=H.bits,F){I.msg="invalid code lengths set",M.mode=30;break}M.have=0,M.mode=19;case 19:for(;M.have<M.nlen+M.ndist;){for(;bt=(v=M.lencode[$&(1<<M.lenbits)-1])>>>16&255,Tt=65535&v,!((yt=v>>>24)<=Z);){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(Tt<16)$>>>=yt,Z-=yt,M.lens[M.have++]=Tt;else{if(Tt===16){for(b=yt+2;Z<b;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if($>>>=yt,Z-=yt,M.have===0){I.msg="invalid bit length repeat",M.mode=30;break}x=M.lens[M.have-1],it=3+(3&$),$>>>=2,Z-=2}else if(Tt===17){for(b=yt+3;Z<b;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}Z-=yt,x=0,it=3+(7&($>>>=yt)),$>>>=3,Z-=3}else{for(b=yt+7;Z<b;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}Z-=yt,x=0,it=11+(127&($>>>=yt)),$>>>=7,Z-=7}if(M.have+it>M.nlen+M.ndist){I.msg="invalid bit length repeat",M.mode=30;break}for(;it--;)M.lens[M.have++]=x}}if(M.mode===30)break;if(M.lens[256]===0){I.msg="invalid code -- missing end-of-block",M.mode=30;break}if(M.lenbits=9,H={bits:M.lenbits},F=c(f,M.lens,0,M.nlen,M.lencode,0,M.work,H),M.lenbits=H.bits,F){I.msg="invalid literal/lengths set",M.mode=30;break}if(M.distbits=6,M.distcode=M.distdyn,H={bits:M.distbits},F=c(u,M.lens,M.nlen,M.ndist,M.distcode,0,M.work,H),M.distbits=H.bits,F){I.msg="invalid distances set",M.mode=30;break}if(M.mode=20,U===6)break t;case 20:M.mode=21;case 21:if(6<=Q&&258<=lt){I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=$,M.bits=Z,l(I,J),W=I.next_out,Y=I.output,lt=I.avail_out,X=I.next_in,V=I.input,Q=I.avail_in,$=M.hold,Z=M.bits,M.mode===12&&(M.back=-1);break}for(M.back=0;bt=(v=M.lencode[$&(1<<M.lenbits)-1])>>>16&255,Tt=65535&v,!((yt=v>>>24)<=Z);){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(bt&&!(240&bt)){for(tt=yt,Pt=bt,k=Tt;bt=(v=M.lencode[k+(($&(1<<tt+Pt)-1)>>tt)])>>>16&255,Tt=65535&v,!(tt+(yt=v>>>24)<=Z);){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}$>>>=tt,Z-=tt,M.back+=tt}if($>>>=yt,Z-=yt,M.back+=yt,M.length=Tt,bt===0){M.mode=26;break}if(32&bt){M.back=-1,M.mode=12;break}if(64&bt){I.msg="invalid literal/length code",M.mode=30;break}M.extra=15&bt,M.mode=22;case 22:if(M.extra){for(b=M.extra;Z<b;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.length+=$&(1<<M.extra)-1,$>>>=M.extra,Z-=M.extra,M.back+=M.extra}M.was=M.length,M.mode=23;case 23:for(;bt=(v=M.distcode[$&(1<<M.distbits)-1])>>>16&255,Tt=65535&v,!((yt=v>>>24)<=Z);){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if(!(240&bt)){for(tt=yt,Pt=bt,k=Tt;bt=(v=M.distcode[k+(($&(1<<tt+Pt)-1)>>tt)])>>>16&255,Tt=65535&v,!(tt+(yt=v>>>24)<=Z);){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}$>>>=tt,Z-=tt,M.back+=tt}if($>>>=yt,Z-=yt,M.back+=yt,64&bt){I.msg="invalid distance code",M.mode=30;break}M.offset=Tt,M.extra=15&bt,M.mode=24;case 24:if(M.extra){for(b=M.extra;Z<b;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}M.offset+=$&(1<<M.extra)-1,$>>>=M.extra,Z-=M.extra,M.back+=M.extra}if(M.offset>M.dmax){I.msg="invalid distance too far back",M.mode=30;break}M.mode=25;case 25:if(lt===0)break t;if(it=J-lt,M.offset>it){if((it=M.offset-it)>M.whave&&M.sane){I.msg="invalid distance too far back",M.mode=30;break}dt=it>M.wnext?(it-=M.wnext,M.wsize-it):M.wnext-it,it>M.length&&(it=M.length),pt=M.window}else pt=Y,dt=W-M.offset,it=M.length;for(lt<it&&(it=lt),lt-=it,M.length-=it;Y[W++]=pt[dt++],--it;);M.length===0&&(M.mode=21);break;case 26:if(lt===0)break t;Y[W++]=M.length,lt--,M.mode=21;break;case 27:if(M.wrap){for(;Z<32;){if(Q===0)break t;Q--,$|=V[X++]<<Z,Z+=8}if(J-=lt,I.total_out+=J,M.total+=J,J&&(I.adler=M.check=M.flags?o(M.check,Y,J,W-J):a(M.check,Y,J,W-J)),J=lt,(M.flags?$:p($))!==M.check){I.msg="incorrect data check",M.mode=30;break}Z=$=0}M.mode=28;case 28:if(M.wrap&&M.flags){for(;Z<32;){if(Q===0)break t;Q--,$+=V[X++]<<Z,Z+=8}if($!==(4294967295&M.total)){I.msg="incorrect length check",M.mode=30;break}Z=$=0}M.mode=29;case 29:F=1;break t;case 30:F=-3;break t;case 31:return-4;case 32:default:return d}return I.next_out=W,I.avail_out=lt,I.next_in=X,I.avail_in=Q,M.hold=$,M.bits=Z,(M.wsize||J!==I.avail_out&&M.mode<30&&(M.mode<27||U!==4))&&G(I,I.output,I.next_out,J-I.avail_out)?(M.mode=31,-4):(gt-=I.avail_in,J-=I.avail_out,I.total_in+=gt,I.total_out+=J,M.total+=J,M.wrap&&J&&(I.adler=M.check=M.flags?o(M.check,Y,J,I.next_out-J):a(M.check,Y,J,I.next_out-J)),I.data_type=M.bits+(M.last?64:0)+(M.mode===12?128:0)+(M.mode===20||M.mode===15?256:0),(gt==0&&J===0||U===4)&&F===h&&(F=-5),F)},r.inflateEnd=function(I){if(!I||!I.state)return d;var U=I.state;return U.window&&(U.window=null),I.state=null,h},r.inflateGetHeader=function(I,U){var M;return I&&I.state&&2&(M=I.state).wrap?((M.head=U).done=!1,h):d},r.inflateSetDictionary=function(I,U){var M,V=U.length;return I&&I.state?(M=I.state).wrap!==0&&M.mode!==11?d:M.mode===11&&a(1,U,V,0)!==M.check?-3:G(I,U,V,V)?(M.mode=31,-4):(M.havedict=1,h):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(f,u,h,d,_,g,m,p){var S,y,E,C,R,P,z,T,w,G=p.bits,I=0,U=0,M=0,V=0,Y=0,X=0,W=0,Q=0,lt=0,$=0,Z=null,gt=0,J=new s.Buf16(16),it=new s.Buf16(16),dt=null,pt=0;for(I=0;I<=15;I++)J[I]=0;for(U=0;U<d;U++)J[u[h+U]]++;for(Y=G,V=15;1<=V&&J[V]===0;V--);if(V<Y&&(Y=V),V===0)return _[g++]=20971520,_[g++]=20971520,p.bits=1,0;for(M=1;M<V&&J[M]===0;M++);for(Y<M&&(Y=M),I=Q=1;I<=15;I++)if(Q<<=1,(Q-=J[I])<0)return-1;if(0<Q&&(f===0||V!==1))return-1;for(it[1]=0,I=1;I<15;I++)it[I+1]=it[I]+J[I];for(U=0;U<d;U++)u[h+U]!==0&&(m[it[u[h+U]]++]=U);if(P=f===0?(Z=dt=m,19):f===1?(Z=a,gt-=257,dt=o,pt-=257,256):(Z=l,dt=c,-1),I=M,R=g,W=U=$=0,E=-1,C=(lt=1<<(X=Y))-1,f===1&&852<lt||f===2&&592<lt)return 1;for(;;){for(z=I-W,w=m[U]<P?(T=0,m[U]):m[U]>P?(T=dt[pt+m[U]],Z[gt+m[U]]):(T=96,0),S=1<<I-W,M=y=1<<X;_[R+($>>W)+(y-=S)]=z<<24|T<<16|w|0,y!==0;);for(S=1<<I-1;$&S;)S>>=1;if(S!==0?($&=S-1,$+=S):$=0,U++,--J[I]==0){if(I===V)break;I=u[h+m[U]]}if(Y<I&&($&C)!==E){for(W===0&&(W=Y),R+=M,Q=1<<(X=I-W);X+W<V&&!((Q-=J[X+W])<=0);)X++,Q<<=1;if(lt+=1<<X,f===1&&852<lt||f===2&&592<lt)return 1;_[E=$&C]=Y<<24|X<<16|R-g|0}}return $!==0&&(_[R+$]=I-W<<24|64<<16|0),p.bits=Y,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var s=e("../utils/common"),a=0,o=1;function l(v){for(var L=v.length;0<=--L;)v[L]=0}var c=0,f=29,u=256,h=u+1+f,d=30,_=19,g=2*h+1,m=15,p=16,S=7,y=256,E=16,C=17,R=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(h+2));l(G);var I=new Array(2*d);l(I);var U=new Array(512);l(U);var M=new Array(256);l(M);var V=new Array(f);l(V);var Y,X,W,Q=new Array(d);function lt(v,L,N,B,D){this.static_tree=v,this.extra_bits=L,this.extra_base=N,this.elems=B,this.max_length=D,this.has_stree=v&&v.length}function $(v,L){this.dyn_tree=v,this.max_code=0,this.stat_desc=L}function Z(v){return v<256?U[v]:U[256+(v>>>7)]}function gt(v,L){v.pending_buf[v.pending++]=255&L,v.pending_buf[v.pending++]=L>>>8&255}function J(v,L,N){v.bi_valid>p-N?(v.bi_buf|=L<<v.bi_valid&65535,gt(v,v.bi_buf),v.bi_buf=L>>p-v.bi_valid,v.bi_valid+=N-p):(v.bi_buf|=L<<v.bi_valid&65535,v.bi_valid+=N)}function it(v,L,N){J(v,N[2*L],N[2*L+1])}function dt(v,L){for(var N=0;N|=1&v,v>>>=1,N<<=1,0<--L;);return N>>>1}function pt(v,L,N){var B,D,q=new Array(m+1),j=0;for(B=1;B<=m;B++)q[B]=j=j+N[B-1]<<1;for(D=0;D<=L;D++){var K=v[2*D+1];K!==0&&(v[2*D]=dt(q[K]++,K))}}function yt(v){var L;for(L=0;L<h;L++)v.dyn_ltree[2*L]=0;for(L=0;L<d;L++)v.dyn_dtree[2*L]=0;for(L=0;L<_;L++)v.bl_tree[2*L]=0;v.dyn_ltree[2*y]=1,v.opt_len=v.static_len=0,v.last_lit=v.matches=0}function bt(v){8<v.bi_valid?gt(v,v.bi_buf):0<v.bi_valid&&(v.pending_buf[v.pending++]=v.bi_buf),v.bi_buf=0,v.bi_valid=0}function Tt(v,L,N,B){var D=2*L,q=2*N;return v[D]<v[q]||v[D]===v[q]&&B[L]<=B[N]}function tt(v,L,N){for(var B=v.heap[N],D=N<<1;D<=v.heap_len&&(D<v.heap_len&&Tt(L,v.heap[D+1],v.heap[D],v.depth)&&D++,!Tt(L,B,v.heap[D],v.depth));)v.heap[N]=v.heap[D],N=D,D<<=1;v.heap[N]=B}function Pt(v,L,N){var B,D,q,j,K=0;if(v.last_lit!==0)for(;B=v.pending_buf[v.d_buf+2*K]<<8|v.pending_buf[v.d_buf+2*K+1],D=v.pending_buf[v.l_buf+K],K++,B===0?it(v,D,L):(it(v,(q=M[D])+u+1,L),(j=P[q])!==0&&J(v,D-=V[q],j),it(v,q=Z(--B),N),(j=z[q])!==0&&J(v,B-=Q[q],j)),K<v.last_lit;);it(v,y,L)}function k(v,L){var N,B,D,q=L.dyn_tree,j=L.stat_desc.static_tree,K=L.stat_desc.has_stree,rt=L.stat_desc.elems,ot=-1;for(v.heap_len=0,v.heap_max=g,N=0;N<rt;N++)q[2*N]!==0?(v.heap[++v.heap_len]=ot=N,v.depth[N]=0):q[2*N+1]=0;for(;v.heap_len<2;)q[2*(D=v.heap[++v.heap_len]=ot<2?++ot:0)]=1,v.depth[D]=0,v.opt_len--,K&&(v.static_len-=j[2*D+1]);for(L.max_code=ot,N=v.heap_len>>1;1<=N;N--)tt(v,q,N);for(D=rt;N=v.heap[1],v.heap[1]=v.heap[v.heap_len--],tt(v,q,1),B=v.heap[1],v.heap[--v.heap_max]=N,v.heap[--v.heap_max]=B,q[2*D]=q[2*N]+q[2*B],v.depth[D]=(v.depth[N]>=v.depth[B]?v.depth[N]:v.depth[B])+1,q[2*N+1]=q[2*B+1]=D,v.heap[1]=D++,tt(v,q,1),2<=v.heap_len;);v.heap[--v.heap_max]=v.heap[1],function(ft,_t){var mt,xt,It,At,Ft,Ht,Rt=_t.dyn_tree,wt=_t.max_code,A=_t.stat_desc.static_tree,st=_t.stat_desc.has_stree,ht=_t.stat_desc.extra_bits,vt=_t.stat_desc.extra_base,Mt=_t.stat_desc.max_length,Vt=0;for(At=0;At<=m;At++)ft.bl_count[At]=0;for(Rt[2*ft.heap[ft.heap_max]+1]=0,mt=ft.heap_max+1;mt<g;mt++)Mt<(At=Rt[2*Rt[2*(xt=ft.heap[mt])+1]+1]+1)&&(At=Mt,Vt++),Rt[2*xt+1]=At,wt<xt||(ft.bl_count[At]++,Ft=0,vt<=xt&&(Ft=ht[xt-vt]),Ht=Rt[2*xt],ft.opt_len+=Ht*(At+Ft),st&&(ft.static_len+=Ht*(A[2*xt+1]+Ft)));if(Vt!==0){do{for(At=Mt-1;ft.bl_count[At]===0;)At--;ft.bl_count[At]--,ft.bl_count[At+1]+=2,ft.bl_count[Mt]--,Vt-=2}while(0<Vt);for(At=Mt;At!==0;At--)for(xt=ft.bl_count[At];xt!==0;)wt<(It=ft.heap[--mt])||(Rt[2*It+1]!==At&&(ft.opt_len+=(At-Rt[2*It+1])*Rt[2*It],Rt[2*It+1]=At),xt--)}}(v,L),pt(q,ot,v.bl_count)}function x(v,L,N){var B,D,q=-1,j=L[1],K=0,rt=7,ot=4;for(j===0&&(rt=138,ot=3),L[2*(N+1)+1]=65535,B=0;B<=N;B++)D=j,j=L[2*(B+1)+1],++K<rt&&D===j||(K<ot?v.bl_tree[2*D]+=K:D!==0?(D!==q&&v.bl_tree[2*D]++,v.bl_tree[2*E]++):K<=10?v.bl_tree[2*C]++:v.bl_tree[2*R]++,q=D,ot=(K=0)===j?(rt=138,3):D===j?(rt=6,3):(rt=7,4))}function F(v,L,N){var B,D,q=-1,j=L[1],K=0,rt=7,ot=4;for(j===0&&(rt=138,ot=3),B=0;B<=N;B++)if(D=j,j=L[2*(B+1)+1],!(++K<rt&&D===j)){if(K<ot)for(;it(v,D,v.bl_tree),--K!=0;);else D!==0?(D!==q&&(it(v,D,v.bl_tree),K--),it(v,E,v.bl_tree),J(v,K-3,2)):K<=10?(it(v,C,v.bl_tree),J(v,K-3,3)):(it(v,R,v.bl_tree),J(v,K-11,7));q=D,ot=(K=0)===j?(rt=138,3):D===j?(rt=6,3):(rt=7,4)}}l(Q);var H=!1;function b(v,L,N,B){J(v,(c<<1)+(B?1:0),3),function(D,q,j,K){bt(D),gt(D,j),gt(D,~j),s.arraySet(D.pending_buf,D.window,q,j,D.pending),D.pending+=j}(v,L,N)}r._tr_init=function(v){H||(function(){var L,N,B,D,q,j=new Array(m+1);for(D=B=0;D<f-1;D++)for(V[D]=B,L=0;L<1<<P[D];L++)M[B++]=D;for(M[B-1]=D,D=q=0;D<16;D++)for(Q[D]=q,L=0;L<1<<z[D];L++)U[q++]=D;for(q>>=7;D<d;D++)for(Q[D]=q<<7,L=0;L<1<<z[D]-7;L++)U[256+q++]=D;for(N=0;N<=m;N++)j[N]=0;for(L=0;L<=143;)G[2*L+1]=8,L++,j[8]++;for(;L<=255;)G[2*L+1]=9,L++,j[9]++;for(;L<=279;)G[2*L+1]=7,L++,j[7]++;for(;L<=287;)G[2*L+1]=8,L++,j[8]++;for(pt(G,h+1,j),L=0;L<d;L++)I[2*L+1]=5,I[2*L]=dt(L,5);Y=new lt(G,P,u+1,h,m),X=new lt(I,z,0,d,m),W=new lt(new Array(0),T,0,_,S)}(),H=!0),v.l_desc=new $(v.dyn_ltree,Y),v.d_desc=new $(v.dyn_dtree,X),v.bl_desc=new $(v.bl_tree,W),v.bi_buf=0,v.bi_valid=0,yt(v)},r._tr_stored_block=b,r._tr_flush_block=function(v,L,N,B){var D,q,j=0;0<v.level?(v.strm.data_type===2&&(v.strm.data_type=function(K){var rt,ot=4093624447;for(rt=0;rt<=31;rt++,ot>>>=1)if(1&ot&&K.dyn_ltree[2*rt]!==0)return a;if(K.dyn_ltree[18]!==0||K.dyn_ltree[20]!==0||K.dyn_ltree[26]!==0)return o;for(rt=32;rt<u;rt++)if(K.dyn_ltree[2*rt]!==0)return o;return a}(v)),k(v,v.l_desc),k(v,v.d_desc),j=function(K){var rt;for(x(K,K.dyn_ltree,K.l_desc.max_code),x(K,K.dyn_dtree,K.d_desc.max_code),k(K,K.bl_desc),rt=_-1;3<=rt&&K.bl_tree[2*w[rt]+1]===0;rt--);return K.opt_len+=3*(rt+1)+5+5+4,rt}(v),D=v.opt_len+3+7>>>3,(q=v.static_len+3+7>>>3)<=D&&(D=q)):D=q=N+5,N+4<=D&&L!==-1?b(v,L,N,B):v.strategy===4||q===D?(J(v,2+(B?1:0),3),Pt(v,G,I)):(J(v,4+(B?1:0),3),function(K,rt,ot,ft){var _t;for(J(K,rt-257,5),J(K,ot-1,5),J(K,ft-4,4),_t=0;_t<ft;_t++)J(K,K.bl_tree[2*w[_t]+1],3);F(K,K.dyn_ltree,rt-1),F(K,K.dyn_dtree,ot-1)}(v,v.l_desc.max_code+1,v.d_desc.max_code+1,j+1),Pt(v,v.dyn_ltree,v.dyn_dtree)),yt(v),B&&bt(v)},r._tr_tally=function(v,L,N){return v.pending_buf[v.d_buf+2*v.last_lit]=L>>>8&255,v.pending_buf[v.d_buf+2*v.last_lit+1]=255&L,v.pending_buf[v.l_buf+v.last_lit]=255&N,v.last_lit++,L===0?v.dyn_ltree[2*N]++:(v.matches++,L--,v.dyn_ltree[2*(M[N]+u+1)]++,v.dyn_dtree[2*Z(L)]++),v.last_lit===v.lit_bufsize-1},r._tr_align=function(v){J(v,2,3),it(v,y,G),function(L){L.bi_valid===16?(gt(L,L.bi_buf),L.bi_buf=0,L.bi_valid=0):8<=L.bi_valid&&(L.pending_buf[L.pending++]=255&L.bi_buf,L.bi_buf>>=8,L.bi_valid-=8)}(v)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,f,u,h=1,d={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){S(E)})}:function(){if(a.postMessage&&!a.importScripts){var E=!0,C=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=C,E}}()?(u="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",y,!1):a.attachEvent("onmessage",y),function(E){a.postMessage(u+E,"*")}):a.MessageChannel?((f=new MessageChannel).port1.onmessage=function(E){S(E.data)},function(E){f.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var C=g.createElement("script");C.onreadystatechange=function(){S(E),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(E){setTimeout(S,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),R=0;R<C.length;R++)C[R]=arguments[R+1];var P={callback:E,args:C};return d[h]=P,l(h),h++},m.clearImmediate=p}function p(E){delete d[E]}function S(E){if(_)setTimeout(S,0,E);else{var C=d[E];if(C){_=!0;try{(function(R){var P=R.callback,z=R.args;switch(z.length){case 0:P();break;case 1:P(z[0]);break;case 2:P(z[0],z[1]);break;case 3:P(z[0],z[1],z[2]);break;default:P.apply(o,z)}})(C)}finally{p(E),_=!1}}}}function y(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(u)===0&&S(+E.data.slice(u.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ip);var yT=Ip.exports;const bT=xT(yT);function Si(n){const t=n.split(`
`);let e=[],i=[];if(t.forEach((m,p)=>{if(m.startsWith("v ")){const S=m.split(/\s+/).map((y,E)=>E===0?y:parseFloat(y));e.push({x:S[1],y:S[2],z:S[3],index:p})}i.push(m)}),e.length===0)return n;const r=Math.min(...e.map(m=>m.x)),s=Math.max(...e.map(m=>m.x)),a=Math.min(...e.map(m=>m.y)),o=Math.max(...e.map(m=>m.y)),l=Math.min(...e.map(m=>m.z)),c=Math.max(...e.map(m=>m.z)),f=(r+s)/2,u=(a+o)/2,h=(l+c)/2,d=-f,_=-u,g=-h;return e.forEach(m=>{const p=i[m.index].split(/\s+/);p[1]=(m.x+d).toFixed(6),p[2]=(m.y+_).toFixed(6),p[3]=(m.z+g).toFixed(6),i[m.index]=p.join(" ")}),i.join(`
`)}function Mi(n,t,e,i){const r=t*Math.PI/180,s=e*Math.PI/180,a=i*Math.PI/180,o=n.split(`
`);let l=[];return o.forEach(c=>{if(c.startsWith("v ")){const f=c.split(/\s+/).map((p,S)=>S===0?p:parseFloat(p));let{x:u,y:h,z:d}={x:f[1],y:f[2],z:f[3]},_=h*Math.cos(r)-d*Math.sin(r),g=h*Math.sin(r)+d*Math.cos(r);h=_,d=g;let m=u*Math.cos(s)+d*Math.sin(s);g=d*Math.cos(s)-u*Math.sin(s),u=m,d=g,m=u*Math.cos(a)-h*Math.sin(a),_=u*Math.sin(a)+h*Math.cos(a),u=m,h=_,l.push(`v ${u.toFixed(6)} ${h.toFixed(6)} ${d.toFixed(6)}`)}else l.push(c)}),l.join(`
`)}class xc{constructor(t){const e=t.split(`
`);this.vertices=e.filter(i=>i.startsWith("v ")),this.faces=e.filter(i=>i.startsWith("f ")),this.vertexMap=this.vertices.reduce((i,r,s)=>(i[r]=s,i),{}),this.faceMap=this.faces.reduce((i,r,s)=>(r.split(/\s+/).slice(1).map(o=>parseInt(o.split("/")[0])-1).forEach(o=>{i[o]||(i[o]=[]),i[o].push(s)}),i),{})}getFacesForVertex(t){const e=this.vertexMap[t];return this.faceMap[e]?this.faceMap[e].map(i=>this.faces[i]):[]}getVerticesForFace(t){return t.split(/\s+/).slice(1).map(i=>parseInt(i.split("/")[0])-1).map(i=>this.vertices[i])}processVerticesAndFaces(t){let e=[],i=new Set(t);t.forEach(o=>{this.getFacesForVertex(o).forEach(c=>{e.push(c),this.getVerticesForFace(c).forEach(f=>i.add(f))})});const r=Array.from(i),s=r.reduce((o,l,c)=>(o[this.vertexMap[l]]=c+1,o),{}),a=e.map(o=>`f${o.split(/\s+/).slice(1).map(f=>` ${s[parseInt(f.split("/")[0])-1]}`).join("")}`);return{vertices:r.sort((o,l)=>this.vertexMap[o]-this.vertexMap[l]),faces:Array.from(new Set(a))}}}function ST(n,t){n.length>0&&t.push(n.join(`
`))}function MT(n,t,e,i){n=n.trim(),!(n.startsWith("#")||n==="")&&(n.startsWith(t)?e.length>0&&(i.push(e.join(`
`)),e.length=0):e.push(n))}function Dp(n,t,e){let i=[],r=[];return t.forEach(s=>MT(s,e,r,i)),ST(r,i),i.map(s=>{const o=s.split(`
`).filter(c=>c.startsWith("v ")),l=n.processVerticesAndFaces(o);return l.vertices.concat(l.faces).join(`
`)})}function ET(n){const t=new xc(n);return Dp(t,n.split(`
`),"g ")}function wT(n){const t=new xc(n);return Dp(t,n.split(`
`),"o ")}function el(n){const t=new xc(n),e=new Array(t.faces.length).fill(!1),i=[];function r(s){const a=[s],o=[],l=new Set;for(;a.length>0;){const h=a.shift();if(e[h])continue;e[h]=!0;const d=t.faces[h];t.getVerticesForFace(d).forEach(g=>{l.add(g),t.getFacesForVertex(g).forEach(p=>{const S=t.faces.indexOf(p);e[S]||a.push(S)})}),o.push(d)}const c=Array.from(l),f=c.reduce((h,d,_)=>(h[t.vertexMap[d]]=_+1,h),{}),u=o.map(h=>`f${h.split(/\s+/).slice(1).map(g=>{const m=parseInt(g.split("/")[0])-1;return` ${f[m]}`}).join(" ")}`);return{vertices:c,faces:u}}for(let s=0;s<t.faces.length;s++)if(!e[s]){const a=r(s);i.push(a)}return i.map(s=>s.vertices.concat(s.faces).join(`
`))}const TT=Un({__name:"app",async setup(n){let t,e;const i=([t,e]=og(()=>fetch("/assets/error.obj").then(_=>_.text())),t=await t,e(),t),r=Ne(i),s=Ne(i),a=Ne(!1),o=()=>({rotate:{x:0,y:0,z:0},preview:!0}),l=window.localStorage.getItem("config"),c=Ne(l?JSON.parse(l):o());function f(_,g){s.value=Mi(Si(g),_.rotate.x,_.rotate.y,_.rotate.z)}Ni(c,_=>{window.localStorage.setItem("config",JSON.stringify(_)),f(_,r.value)},{deep:!0}),Ni(r,_=>{f(c.value,_)});function u(_,g){const m=document.createElement("a"),p=g instanceof Blob?URL.createObjectURL(g):URL.createObjectURL(new Blob([g],{type:"text/plain"}));m.href=p,m.download=_,m.click(),m.remove(),URL.revokeObjectURL(p),a.value=!1}const h=(_=500)=>new Promise(g=>setTimeout(g,_));async function d(_){if(a.value)return;a.value=!0,await h();const g=Math.random().toString(36).substring(7),m=`${g}.${_?"zip":"obj"}`,p=c.value.rotate,S=Mi(Si(r.value),p.x,p.y,p.z);if(!_)return u(m,S);const y=new bT,E=`acmt-output-${g}/`;y.file(E+"input.obj",r.value),y.file(E+"output.obj",S);let C=0,R=0;for(const P of ET(r.value)){const z=E+`groups/${C++}/`;y.file(z+"group.obj",Mi(Si(P),p.x,p.y,p.z));let T=0;for(const G of el(P)){const I=Mi(Si(G),p.x,p.y,p.z);y.file(z+`connected/${T++}.obj`,I)}let w=0;for(const G of wT(P)){const I=Mi(Si(G),p.x,p.y,p.z);y.file(E+`individuals/${R++}.obj`,I);const U=z+`individuals/${w++}/`;y.file(U+"individual.obj",I);let M=0;for(const V of el(G)){const Y=Mi(Si(V),p.x,p.y,p.z);y.file(U+`connected/${M++}.obj`,Y)}}}R=0;for(const P of el(r.value))y.file(E+`connected/${R++}.obj`,Mi(Si(P),p.x,p.y,p.z));y.generateAsync({type:"blob"}).then(P=>u(m,P))}return(_,g)=>{const m=$v,p=Zv,S=Kw,y=Qw,E=lT,C=vT;return me(),gn(C,null,{default:qr(()=>[Qt(m,{loading:$t(a)},null,8,["loading"]),Qt(p,{onLoadObj:g[0]||(g[0]=R=>r.value=R)}),$t(c).preview?(me(),gn(y,{key:0},{default:qr(()=>[Qt(S,{obj:$t(s)},null,8,["obj"])]),_:1})):gd("",!0),Qt(y,null,{default:qr(()=>[Qt(E,{modelValue:$t(c),"onUpdate:modelValue":g[1]||(g[1]=R=>we(c)?c.value=R:null),onLoadObj:g[2]||(g[2]=R=>r.value=R),onClickDl:d},null,8,["modelValue"])]),_:1})]),_:1})}}}),AT={__name:"nuxt-error-page",props:{error:Object},setup(n){const e=n.error;e.stack&&e.stack.split(`
`).splice(1).map(u=>({text:u.replace("webpack:/","").replace(".vue",".js").trim(),internal:u.includes("node_modules")&&!u.includes(".cache")||u.includes("internal")||u.includes("new Promise")})).map(u=>`<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);const i=Number(e.statusCode||500),r=i===404,s=e.statusMessage??(r?"Page Not Found":"Internal Server Error"),a=e.message||e.toString(),o=void 0,f=r?Bc(()=>pu(()=>import("./Cai5-0a7.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(u=>u.default||u)):Bc(()=>pu(()=>import("./BdqQlA0A.js"),__vite__mapDeps([3,1,4]),import.meta.url).then(u=>u.default||u));return(u,h)=>(me(),gn($t(f),$p(pd({statusCode:$t(i),statusMessage:$t(s),description:$t(a),stack:$t(o)})),null,16))}},ah={__name:"nuxt-root",setup(n){const t=()=>null,e=Me(),i=e.deferHydration();if(e.isHydrating){const o=e.hooks.hookOnce("app:error",i);us().beforeEach(o)}const r=!1;Zh(Vd,Gd()),e.hooks.callHookWith(o=>o.map(l=>l()),"vue:setup");const s=cc();qh((o,l,c)=>{if(e.hooks.callHook("vue:error",o,l,c).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),U0(o)&&(o.fatal||o.unhandled))return e.runWithContext(()=>I0(o)),!1});const a=!1;return(o,l)=>(me(),gn(Hm,{onResolve:$t(i)},{default:qr(()=>[$t(s)?(me(),gn($t(AT),{key:0,error:$t(s)},null,8,["error"])):$t(a)?(me(),gn($t(t),{key:1,context:$t(a)},null,8,["context"])):$t(r)?(me(),gn(km($t(r)),{key:2})):(me(),gn($t(TT),{key:3}))]),_:1},8,["onResolve"]))}};let lh;{let n;lh=async function(){var a,o;if(n)return n;const i=!!((a=window.__NUXT__)!=null&&a.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?f_(ah):u_(ah),r=m0({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||uc(l)}i.config.errorHandler=s;try{await _0(r,jv)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(Av),await r.hooks.callHook("app:mounted",i),await $l()}catch(l){s(l)}return i.config.errorHandler===s&&(i.config.errorHandler=void 0),i},n=lh().catch(t=>{throw console.error("Error while mounting app:",t),t})}export{qr as A,md as B,RT as C,CT as D,IT as E,LT as F,Ni as G,Zm as H,Km as I,El as J,_d as K,dT as _,ep as a,Mu as b,rc as c,Un as d,Xh as e,UT as f,Fg as g,Ur as h,PT as i,Yo as j,wd as k,Ro as l,Me as m,DT as n,qo as o,Ko as p,L0 as q,Ne as r,oc as s,me as t,us as u,ai as v,vl as w,ne as x,mh as y,Qt as z};
