"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1550],{76042:function(t,e,n){n.d(e,{A:function(){return p},J:function(){return y}});var r=n(97458),i=n(88360),o=n(52983),a=n(11787),s=n(37210),c=n(49146);const l=(0,s.zo)(a.VY,{minWidth:"180px",boxShadow:"0px 0px 1px 0px rgba(61, 72, 83, 0.36), 0px 2px 8px 0px rgba(61, 72, 83, 0.10), 0px 8px 48px 0px rgba(243, 246, 248, 0.15)"}),d=(0,s.zo)(a.ck,{"&[data-highlighted]":{borderBottom:0,borderTop:0,inset:0}}),m=(0,o.forwardRef)(((t,e)=>{let{children:n,...i}=t;return(0,r.jsx)(d,{className:"flex flex-row items-start justify-between px-2 py-1 text-xs rounded outline-none hover:cursor-pointer hover:bg-gray-50",...i,ref:e,children:n})}));m.displayName="ContextMenuItem";const u=(0,o.forwardRef)(((t,e)=>{let{children:n,...i}=t;return(0,r.jsx)(l,{className:"overflow-hidden bg-white rounded-lg",...i,ref:e,children:n})}));u.displayName="ContextMenuContent";const h=(0,o.forwardRef)(((t,e)=>{let{...n}=t;return(0,r.jsx)(a.Z0,{className:"border-t border-gray-100",...n,ref:e})}));h.displayName="ContextMenuSeparator";const f=(0,o.forwardRef)(((t,e)=>{let{children:n,...i}=t;return(0,r.jsx)(a.ZA,{className:"flex flex-col px-2 py-2 gap-y-1",...i,ref:e,children:n})}));var p;f.displayName="ContextMenuGroup",function(t){t.PNG="png",t.SVG="svg"}(p||(p={}));const w=()=>{(0,i.Z9)(new i.Rd("button","open in lottie creator","animation-player-context-menu"))},y=t=>{let{children:e,fileId:n,isAnnotatingComment:s,onAddCommentClick:l,onContextMenuOpen:d,onCopyFrameClick:p,onCopyLinkClick:y,showCopyFrame:x,triggerRef:g}=t;const[v,A]=o.useState(null),L=(0,o.useMemo)((()=>{if(n){const t=new URL("https://creator.lottiefiles.com");return t.searchParams.append("fileId",n),t.searchParams.append("utm_medium","platform"),t.searchParams.append("utm_source","animation-player-context-menu"),t.toString()}return""}),[n]),D=t=>{(0,i.Z9)(new i.tf({format:t,source:"animation-player-context-menu"})),p(t)};return(0,r.jsxs)(a.fC,{children:[(0,r.jsx)(a.xz,{onContextMenu:t=>{A(t),d()},ref:g,children:e}),(0,r.jsx)(a.Uv,{children:(0,r.jsxs)(u,{children:[(0,r.jsx)(f,{children:(0,r.jsxs)(m,{onSelect:()=>{y("animation-player-context-menu")},children:[(0,r.jsx)("span",{children:"Copy animation link"}),c.Mq&&(0,r.jsx)("span",{className:"text-gray-400",children:"⌘ L"})]})}),(0,r.jsx)(h,{}),!s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{children:(0,r.jsxs)(m,{onSelect:()=>{v&&((0,i.Z9)(new i.i$({source:"animation-player-context-menu"})),l(v))},children:[(0,r.jsx)("span",{children:"Add comment"}),(0,r.jsx)("span",{className:"text-gray-400",children:"C"})]})}),(0,r.jsx)(h,{})]}),x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f,{children:[(0,r.jsx)(m,{onSelect:()=>D("svg"),children:"Copy frame as SVG"}),(0,r.jsx)(m,{onSelect:()=>D("png"),children:"Copy frame as PNG"})]}),(0,r.jsx)(h,{})]}),n&&(0,r.jsx)(f,{children:(0,r.jsx)(m,{children:(0,r.jsx)("a",{href:L,onClick:w,target:"_blank",rel:"noreferrer",children:"Open in Lottie Creator"})})})]})})]})}},21330:function(t,e,n){n.d(e,{s:function(){return s},w:function(){return c}});var r=n(97458),i=n(34723),o=n(52983);const a=o.createContext({features:[]}),s=t=>{let{children:e,features:n}=t;return(0,r.jsx)(a.Provider,{value:{features:n},children:e})},c=()=>{const{features:t}=o.useContext(a);return t?new i.UZ(t):new i.UZ([])}},66575:function(t,e,n){n.d(e,{$V:function(){return s},lr:function(){return a},tL:function(){return o},tr:function(){return l},yo:function(){return d}});var r=n(70705),i=n(41793);const o=t=>{let{container:e,x:n,y:r}=t;const i=e.getBoundingClientRect(),o=2048/i.width,a=2048/i.height;return{x:n-i.x,y:r-i.y,ratio:{x:o/2048*100,y:a/2048*100}}},a=t=>{let{marker:e}=t;if(e.ratio){return{left:e.x*e.ratio.x,top:e.y*e.ratio.y}}return{left:0,top:0}},s=(t,e)=>{if(t){if(t.url&&t.fileSize)return r.ws.Completed;switch(t.status){case"PROCESSED":return r.ws.Completed;case"ERROR":return r.ws.Failed}}switch(e){case"PROCESSED":return r.ws.Completed;case"FAILED":return r.ws.Failed}return r.ws.InProgress},c=async t=>await i.J2.fromURL(t),l=async(t,e)=>{const n=await c(t),r=await n.getAnimationAtIndex(0);if(!r)return r;const i=await r.toJSON({inlineAssets:!0});if(e){const t=await n.getTheme(e),r=null==t?void 0:t.data;r&&(i.slots?Object.assign(i.slots,r):Object.assign(i,{slots:r}))}return i},d=async t=>{const e=await c(t),n=await e.getAnimationAtIndex(0);if(!n)return n;return await n.toArrayBuffer({inlineAssets:!0})}},41793:function(t,e,n){n.d(e,{J2:function(){return u}});var r,i,o=n(15313).lW,a=Object.defineProperty,s=(t,e,n)=>(((t,e,n)=>{e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n),c=((r=c||{}).DotLottieAnimationNotFound="DotLottieAnimationNotFound",r.DotLottieHasNoAnimations="DotLottieHasNoAnimations",r.DotLottieJSError="DotLottieJSError",r),l=class extends Error{get name(){return"DotLottieJSError"===this.kind&&this._inner?this._inner.name:"DotLottieError"}get message(){return"DotLottieJSError"===this.kind&&this._inner?this._inner.message:super.message}get stack(){return"DotLottieJSError"===this.kind&&this._inner?this._inner.stack:super.stack}static fromDotLottieJSError(t){let e=new l("DotLottieJSError","");return e._inner=t,e}static makeAnimationNotFoundError(t){return new l("DotLottieAnimationNotFound","The animation at the given index was not found: index=".concat(t))}static makeHasNoAnimationsError(){return new l("DotLottieHasNoAnimations","The given .lottie file does not contain any animations")}constructor(t,e){super(e),s(this,"kind"),s(this,"_inner"),this.kind=t}},d=((i=d||{}).Bounce="bounce",i.Normal="normal",i);async function m(t){let{PlayMode:e}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));return t===e.Bounce?"bounce":"normal"}var u=class{static async forVersion(t){let{DotLottie:e,DotLottieV1:r}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));return new u("1"===t?{inner:new r,version:1}:{inner:new e,version:2})}static async fromAnimationArrayBuffer(t,e,n){let r=typeof o>"u"?await new Blob([e],{type:"application/json"}).text():o.from(e).toString("utf-8"),i=JSON.parse(r);return u.fromAnimationJSON(t,i,n)}static async fromAnimationJSON(t,e,r){let{DotLottie:i,DotLottieError:o,DotLottieV1:a}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));var s;e.assets=null!==(s=e.assets)&&void 0!==s?s:[];try{if("2"===r.version){let n=new i,o=new u({inner:n,version:2});return await o.addAnimation(t,e,r),o}{let n=new a,i=new u({inner:n,version:1});return await i.addAnimation(t,e,r),i}}catch(t){throw t instanceof o?l.fromDotLottieJSError(t):t}}static async fromArrayBuffer(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"preserve",{DotLottieError:r,loadFromArrayBuffer:i}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{let n=await i(t);return await u.fromBytes(n,e)}catch(t){throw t instanceof r?l.fromDotLottieJSError(t):t}}static async fromBytes(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"preserve",{DotLottie:r,DotLottieError:i,DotLottieV1:o,getDotLottieVersion:a}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{if("2"===("preserve"===e?await a(t):e)[0]){let e=await(new r).fromArrayBuffer(t);return new u({inner:e,version:2})}{let e=await(new o).fromArrayBuffer(t);return new u({inner:e,version:1})}}catch(t){throw t instanceof i?l.fromDotLottieJSError(t):t}}static async fromURL(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"preserve",{DotLottieError:r,loadFromURL:i}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{let n=await i(t);return await u.fromBytes(n,e)}catch(t){throw t instanceof r?l.fromDotLottieJSError(t):t}}get stateMachineIds(){var t,e;return 1===this._instance.version?[]:null!==(e=null===(t=this._instance.inner.manifest.stateMachines)||void 0===t?void 0:t.map((t=>t.id)))&&void 0!==e?e:[]}get themeIds(){var t,e;return 1===this._instance.version?[]:null!==(e=null===(t=this._instance.inner.manifest.themes)||void 0===t?void 0:t.map((t=>t.id)))&&void 0!==e?e:[]}get version(){return this._instance.inner.version}async addAnimation(t,e,r){let{DotLottieError:i,PlayMode:o}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832)),a="playMode"in r&&"bounce"===r.playMode?o.Bounce:o.Normal;try{this._instance.inner.addAnimation({...r,id:t,data:e,playMode:a})}catch(t){throw t instanceof i?l.fromDotLottieJSError(t):t}}async addAnimationBuffer(t,e,n){let r=typeof o>"u"?await new Blob([e],{type:"application/json"}).text():o.from(e).toString("utf-8"),i=JSON.parse(r);await this.addAnimation(t,i,n)}async addAnimationCopy(t,e,n){let r=await n.getAnimation(t);if(r){if("1"===n.version){let n=r;await this.addAnimationBuffer(t,e,{version:"1",autoplay:n.autoplay,defaultActiveAnimation:n.defaultActiveAnimation,direction:n.direction,hover:n.hover,intermission:n.intermission,loop:n.loop,playMode:n.playMode?await m(n.playMode):"normal",speed:n.speed,themeColor:n.themeColor})}if("2"===n.version){let n=r;await this.addAnimationBuffer(t,e,{version:"2",name:n.name,defaultActiveAnimation:n.defaultActiveAnimation,...n.background?{background:n.background}:{},...n.initialTheme?{initialTheme:n.initialTheme}:{},...n.themes?{themes:n.themes.map((t=>t.id))}:{}})}}}async addTheme(t,e,n){2===this._instance.version&&this._instance.inner.addTheme({id:t,name:e,data:n})}async copyThemes(t){let e=t.themeIds;for(let n of e){let e=await t.getTheme(n);e&&await this.addTheme(n,e.name,e.data)}}async getAnimation(t){let{DotLottieError:e}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{return this._instance.inner.getAnimation(t)}catch(t){throw t instanceof e?l.fromDotLottieJSError(t):t}}async getAnimationAtIndex(t){var e;let n=this._instance.inner.animations;if(n.length<1)throw l.makeHasNoAnimationsError();let r=null===(e=n[t])||void 0===e?void 0:e.id,i=r?await this.getAnimation(r):null;if(!i)throw l.makeAnimationNotFoundError(t);return i}async getAnimations(){let t=this._instance.inner.getAnimations();return t?t.map((t=>{let[e,n]=t;return n})):[]}async getAudio(){let{DotLottieError:t}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{return this._instance.inner.getAudio()}catch(e){throw e instanceof t?l.fromDotLottieJSError(e):e}}async getImages(){let{DotLottieError:t}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{return this._instance.inner.getImages()}catch(e){throw e instanceof t?l.fromDotLottieJSError(e):e}}async getStateMachine(t){let{DotLottieError:e}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));if(1!==this._instance.version)try{return this._instance.inner.getStateMachine(t)}catch(t){throw t instanceof e?l.fromDotLottieJSError(t):t}}async getTheme(t){let{DotLottieError:e}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));if(1!==this._instance.version)try{return this._instance.inner.getTheme(t)}catch(t){throw t instanceof e?l.fromDotLottieJSError(t):t}}async toArrayBuffer(){let{DotLottieError:t}=await Promise.all([n.e(9565),n.e(3943)]).then(n.bind(n,82832));try{return this._instance.inner.toArrayBuffer()}catch(e){throw e instanceof t?l.fromDotLottieJSError(e):e}}async toBlob(){let t=await this.toArrayBuffer();return new Blob([t],{type:"application/zip"})}constructor(t){s(this,"_instance"),this._instance=t}}}}]);