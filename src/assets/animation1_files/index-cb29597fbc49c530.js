(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405,8391],{73958:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(10459)}])},26636:function(e,t,s){"use strict";s.d(t,{o:function(){return n}});var a=s(97458);const n=s(52983).forwardRef(((e,t)=>{let{children:s,contentWrapperCssClasses:n="flex-grow overflow-hidden",headerControl:l,headerWrapperCssClasses:i="bg-white h-16 flex items-center sm:px-6 px-2 border-b border-gray-100 flex-shrink-0",id:r}=e;return(0,a.jsxs)("div",{id:r,ref:t,"data-onboarding-watch":"create_menu_new_button",className:"flex overflow-y-auto absolute inset-0 flex-col w-full",children:[l&&(0,a.jsx)("div",{className:i,children:l}),(0,a.jsx)("div",{className:n,children:s})]})}));n.displayName="PageScaffold"},91092:function(e,t,s){"use strict";s.d(t,{ph:function(){return u},s8:function(){return m}});var a=s(97458),n=s(83849),l=s.n(n),i=s(52983),r=s(37091),o=s(52364),c=s(75757),d=s(52885);const u=e=>{let{childClassName:t,children:s,className:n,loading:i,name:o,onClickViewAll:u}=e;return(0,a.jsxs)("div",{className:l()("flex flex-col justify-start items-start",n),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center w-full",children:[i&&(0,a.jsx)(d.k,{className:"h-6 w-[133px]",children:(0,a.jsx)(c.J,{color:"light",className:"rounded"})}),!i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"text-base truncate font-lf-semi-bold",children:o}),(0,a.jsxs)("span",{onClick:u,className:"flex gap-x-2 items-center text-sm cursor-pointer text-actionPrimary font-lf-semi-bold hover:text-actionPrimaryHover",children:["View more ",(0,a.jsx)(r.J,{name:"arrow-right",className:"mt-1",small:!0})]})]})]}),(0,a.jsx)("div",{className:l()("gap-6 mt-4 w-full",t),children:s})]})},m=e=>{let{autoplay:t=!0,onClick:s,src:n}=e;const{videoRef:l}=(0,o.x)({autoplay:t}),r=(0,i.useCallback)((()=>{var e;t||(null===(e=l.current)||void 0===e||e.play())}),[t,l]),c=(0,i.useCallback)((()=>{var e;t||(null===(e=l.current)||void 0===e||e.pause())}),[t,l]);return(0,a.jsx)("div",{onClick:s,onMouseEnter:r,onMouseLeave:c,className:"flex overflow-hidden justify-center items-center p-2 bg-white rounded-lg cursor-pointer shadow-default hover:shadow-md",children:(0,a.jsx)("video",{ref:l,playsInline:!0,muted:!0,loop:!0,className:"object-cover w-full rounded-sm aspect-square",children:(0,a.jsx)("source",{src:n,type:"video/MP4"})})})}},72490:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a=s(97458),n=s(52983),l=s(37091);const i=e=>{let{actionIdentifier:t,children:s,className:i,color:r="blue",onClose:o,permanentClose:c=!1}=e;const[d,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>{let e=!1;if(c){e=!("true"===localStorage.getItem("permanently-closed-".concat(t)))}else{const s=localStorage.getItem("closed-time-".concat(t));if(s){e=Date.now()-new Date(s).getTime()>864e5}else e=!0}u(e)}),[t,c]);const m=(0,n.useCallback)((()=>{c?localStorage.setItem("permanently-closed-".concat(t),"true"):localStorage.setItem("closed-time-".concat(t),(new Date).toISOString()),u(!1),null==o||o()}),[t,o,c]);return d?(0,a.jsxs)("div",{className:"".concat(i," flex items-center justify-between p-2 space-x-3 rounded-lg bg-").concat(r,"-50"),children:[(0,a.jsx)("div",{className:"flex-grow text-teal-800",children:s}),(0,a.jsxs)("button",{onClick:m,type:"button",className:"p-1 text-gray-900 rounded-md dark:bg-gray-800 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-lf-teal",children:[(0,a.jsx)("span",{className:"sr-only",children:"Close message"}),(0,a.jsx)(l.J,{name:"cross",className:"w-6 h-6"})]})]}):(0,a.jsx)(a.Fragment,{})}},80843:function(e,t,s){"use strict";s.d(t,{By:function(){return r},JG:function(){return n},Mx:function(){return m},T4:function(){return h},YO:function(){return d},Zq:function(){return x},fl:function(){return c},k0:function(){return o},ox:function(){return u},pr:function(){return i},r1:function(){return f},wf:function(){return l},yX:function(){return p}});var a=s(60642);const n="https://help.lottiefiles.com/hc/en-us/articles/9517076270233",l="https://lottiefiles.notion.site/Getting-started-with-dotLottie-907cb7b157b34990a7bba7bcae8f21b0",i="https://developers.lottiefiles.com/docs/dotlottie-player/",r=new URL("theming",a.NT).toString(),o="https://developers.lottiefiles.com/docs/tools/dotlottie-js/theming/",c=new URL("web-player",a.NT).toString(),d="https://lively-measure-628416.framer.app/",u="https://lottie.host/b8c92fc6-8d88-4269-b332-4d614dae939d/ZbBDILbMG4.lottie",m="https://lottie.host/0aeb7618-e25a-4013-8670-44c6a55ae03a/ZHRuEc6JeV.lottie",h="https://lottie.host/d84f6b49-da96-40df-a2e9-b95e54e316aa/309y6rBxwM.lottie",x="https://lottie.host/663efcc9-31bf-4f05-a241-8480b39f40fc/n8TQUijZjP.lottie",f="https://lottie.host/328b9b51-ae82-41c8-b487-841bf1f6c4b5/1HWP4y3Hdm.lottie",p="https://lottie.host/8b158e45-9417-43c5-9c92-91397d563390/BEYljc9m95.lottie"},76581:function(e,t,s){"use strict";s.d(t,{t:function(){return n}});var a=s(52983);function n(e){let{defaultValue:t,sizeMap:s}=e;const n=e=>{let a={width:Number.POSITIVE_INFINITY,value:t};return s.forEach((t=>{let{value:s,width:n}=t;e<n&&n<a.width&&(a={width:n,value:s})})),a.width===Number.POSITIVE_INFINITY?{width:e,value:t}:a},[l,i]=(0,a.useState)(n(window.innerWidth));return(0,a.useEffect)((()=>{const e=()=>{const e=window.innerWidth;i(n(e))};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),l}},10459:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ne}});var a=s(97458),n=s(96734),l=s(88360),i=s(34723),r=s(83849),o=s.n(r),c=s(34038),d=s.n(c),u=s(54542),m=s.n(u),h=s(67613),x=s.n(h),f=s(52983),p=s(75800),b=s(80794),g=s(26636),v=s(71800),w=s(16153),j=s(80314),N=s(63005),y=s(39463),k=s(70705),C=s(37091),E=s(72490),I=s(38274);const S=e=>{let{workspaceId:t}=e;const{loading:s,pendingProcessing:n}=(0,I.k)(t);return!s&&n?(0,a.jsx)(E.Z,{className:"px-3 py-2 bg-[#B0E8FD] text-gray-900",actionIdentifier:"wf-payment-processing-banner-".concat(t),children:(0,a.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,a.jsx)(C.J,{name:"info",className:"w-10 text-blue-500"}),(0,a.jsxs)("div",{className:"text-sm flex",children:[(0,a.jsx)("div",{className:"font-semibold mr-1",children:"Payment is being processed."}),(0,a.jsx)("span",{children:"Premium features will be available in up to 24 hours"})]})]})}):(0,a.jsx)(a.Fragment,{})},_=()=>{const e=(0,n.SS)(i.AD.WORKFLOW_MAINTENANCE_BANNER);if(!e.on)return(0,a.jsx)(a.Fragment,{});const t=e.value,s=new Date(t.from),l=new Date(t.to),r=new Date;if(r<s||r>l)return(0,a.jsx)(a.Fragment,{});const o=()=>(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"text-xl",children:t.emoji}),(0,a.jsx)("div",{className:"text-sm",dangerouslySetInnerHTML:{__html:t.message}})]});return t.dismissible?(0,a.jsx)(E.Z,{className:"px-3 py-2 bg-[#B0E8FD] text-gray-900",actionIdentifier:"wf-maintenance-banner",children:(0,a.jsx)(o,{})}):(0,a.jsx)("div",{className:"px-3 py-2 bg-[#B0E8FD] text-gray-900 rounded-lg",children:(0,a.jsx)(o,{})})};var R=s(91092),A=s(22455),M=s(23048),P=s(92943),D=s(76581),T=s(40582),L=s(12324),F=s(49939),U=s(20895),H=s(81191),Z=s(61057),O=s(49146),B=s(18598),J=s(60586),V=s(8050),W=s(92421),q=s(80843);const z="".concat(q.By,"?utm_medium=platform&utm_source=dashboard_banner");var G=()=>{const e=(0,f.useCallback)((()=>{(0,l.Z9)(new l.Rd("button","theming-introduction-banner-learn-more"))}),[]),t=(0,f.useCallback)((()=>{(0,l.Z9)(new l.Rd("button","theming-introduction-banner-close"))}),[]);return(0,a.jsx)(E.Z,{className:"px-3 py-2 !bg-[#B0E8FD] text-gray-900 mb-6",actionIdentifier:"wf-theming-introduction-banner",permanentClose:!0,onClose:t,children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"overflow-hidden rounded-md",children:(0,a.jsx)(V.V,{src:q.T4,autoplay:!0,loop:!0,style:{height:"40px",aspectRatio:"1/1"}})}),(0,a.jsxs)("div",{className:"flex flex-col flex-1 ml-3",children:[(0,a.jsx)("h2",{className:"font-bold text-gray-900",children:"dotLottie now supports theming"}),(0,a.jsxs)("p",{className:"text-sm text-gray-500",children:["Create themes for dotLottie animations, such as light and dark modes, and easily switch between them wherever the animations are used."," ",(0,a.jsx)(W.r,{className:"underline text-actionPrimary hover:text-actionPrimaryHover",onClick:e,href:z,target:"_blank",children:"Learn more"})]})]})]})})},K=s(24912),Y=s(52885),X=s(75757);const Q=()=>(0,a.jsxs)(Y.k,{direction:"column",children:[(0,a.jsxs)(Y.k,{align:"center",children:[(0,a.jsx)(Y.k,{className:"h-6 w-[133px] ",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})}),(0,a.jsxs)(Y.k,{className:"ml-auto space-x-2",children:[(0,a.jsx)(Y.k,{className:"h-8 w-[161px] ",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})}),(0,a.jsx)(Y.k,{className:"h-8 w-[165px]",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})})]})]}),(0,a.jsx)(Y.k,{direction:"column",className:"mt-4 w-full",children:(0,a.jsx)("div",{className:"grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7",children:Array.from({length:10}).map(((e,t)=>(0,a.jsx)("div",{className:"aspect-square",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})},"skeleton-".concat(t+1))))})})]}),$=()=>(0,a.jsxs)(Y.k,{direction:"column",className:"mt-10 space-y-[10px]",children:[(0,a.jsx)(Y.k,{align:"center",children:(0,a.jsx)(Y.k,{className:"h-6 w-[133px] ",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})})}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-4",children:Array.from({length:4}).map(((e,t)=>(0,a.jsx)("div",{className:"h-[120px]",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})},"skeleton-".concat(t+1))))})]}),ee="https://creator.lottiefiles.com",te=d()((async()=>s.e(9660).then(s.bind(s,99660))),{loadableGenerated:{webpack:()=>[99660]},ssr:!1}),se=d()((async()=>s.e(989).then(s.bind(s,60989))),{loadableGenerated:{webpack:()=>[60989]},ssr:!1}),ae=d()((async()=>s.e(6424).then(s.bind(s,56424))),{loadableGenerated:{webpack:()=>[56424]},ssr:!1});function ne(){var e,t;const{activeWorkspace:s,workspaces:r}=(0,F.cF)(),{data:c,isLoading:d}=(0,L.xi)(),u=(0,H.QU)();var h;const{hasEditorAccess:E}=(0,T.W)({scopes:null!==(h=null==s?void 0:s.permissionScopes)&&void 0!==h?h:[]}),{isWorkspaceLoading:I}=(0,K.r)(),[V,W]=(0,f.useState)(!0),q=(0,p.useSetRecoilState)(y._b),[,z]=(0,p.useRecoilState)(U.x),[Y,ne]=(0,f.useState)([]),le=(0,n.SS)(i.AD.ENABLE_PREMIUM_ASSETS),ie=(0,n.SS)(i.AD.ENABLE_THEMING),re=(0,f.useMemo)((()=>{const e=r.some((e=>-1!==e.features.findIndex((e=>e.slug===i.Hh.USE_PREMIUM_ASSETS&&!0===e.isEnabled))));return le.on||e}),[le,r]),[oe]=(0,b.aM)({query:N.t,variables:{workspaceId:null==s?void 0:s.id},pause:!(null==s?void 0:s.id)}),[ce]=(0,b.aM)({query:B._m,variables:{workspaceId:null==s?void 0:s.id,first:10},pause:!(null==s?void 0:s.id)}),de=(0,f.useMemo)((()=>{var e;return(null===(e=ce.data)||void 0===e?void 0:e.workspaceMembers.edges.filter((e=>{var t;return null===(t=e.node)||void 0===t?void 0:t.user})).map((e=>{var t;return null===(t=e.node)||void 0===t?void 0:t.user})).sort((()=>0===Math.round(Math.random())?-1:1)))||[]}),[ce.data]);(0,f.useEffect)((()=>{if(oe.error);else if(oe.data&&oe.data.filesRecentlyModified){const e=oe.data.filesRecentlyModified;ne(e)}}),[oe]);const ue=(0,f.useMemo)((()=>(0,a.jsx)(A.z,{keys:["U"],metaKey:!0})),[]),me=(0,f.useCallback)((e=>{let{slug:t}=e;return()=>{z({slug:t,source:Z.hH.DASHBOARD})}}),[z]),he=(0,f.useCallback)((()=>{(0,l.Z9)(new l.Rd("button","create-animation-cta","dashboard-header")),window.open("".concat(ee,"/new?workspace=").concat(null==s?void 0:s.id,"&utm_medium=platform&utm_source=dashboard"),"_blank")}),[s]),xe=(0,f.useCallback)(((e,t)=>{let s;if(((0,k.QR)(e)||(0,k.xK)(e))&&(s=e.fileObject.filename.split(".").pop()),"creator"===s)window.open("".concat(ee,"?fileId=").concat(e.id,"&utm_medium=platform&utm_source=file-card"),"_blank");else{const s="/animation/".concat(e.id);t?window.open("".concat(s,"?from=dashboard"),"_blank"):x().push({pathname:s,query:{...x().query,from:"dashboard"}})}}),[]),fe=(0,P.X)(),pe=(0,f.useCallback)((e=>{(0,l.Z9)(new l.Rd("button","premium asset dashboard"));const t="/premium-assets";(O.Mq?e.metaKey:e.ctrlKey)?window.open(t,"_blank"):x().push({pathname:t,query:x().query})}),[]);(0,f.useEffect)((()=>{u()}),[fe,Y,u]);const be=(0,D.t)({sizeMap:[{width:992,value:4},{width:1200,value:6},{width:1536,value:6},{width:1920,value:8},{width:2150,value:8},{width:1e4,value:10}],defaultValue:10}),ge=(0,f.useCallback)((()=>{(0,l.Z9)(new l.Rd("button","dashboard-all-tools")),window.open("https://lottiefiles.com/integrations","_blank")}),[]),ve=(0,f.useCallback)((()=>{(0,l.Z9)(new l.Rd("button","upload-animation-cta","dashboard")),q(!0)}),[q]),we=(0,f.useCallback)((async()=>{const e=window.location.href;(0,l.Z9)(new l.Rd("button","workspace members avatar view all member","dashboard")),x().push("/settings/".concat(null==s?void 0:s.id,"/members?returnTo=").concat(e),void 0,{shallow:!0})}),[null==s?void 0:s.id]),je=(0,f.useCallback)((()=>{W(!1)}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m(),{children:(0,a.jsx)("title",{children:"Dashboard - LottieFiles Platform"})}),(0,a.jsxs)(g.o,{headerWrapperCssClasses:"flex items-center px-6 pt-3 pb-6 flex-shrink-0",contentWrapperCssClasses:o()("flex-grow px-6 pb-9"),headerControl:(0,a.jsxs)("div",{className:"flex flex-col w-full space-y-6",children:[(0,a.jsx)(_,{}),(0,a.jsx)(S,{workspaceId:null==s?void 0:s.id}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(w.Z,{variant:"heading-1",gutter:!1,lineHeightClass:"leading-8 -ml-0.5",darkest:!0,children:"Dashboard"}),((null===(e=ce.data)||void 0===e?void 0:e.workspaceMembers.totalCount)||0)>1&&(0,a.jsx)(J.h,{workspaceMembers:de,onClickRemainigMemberCount:we,memberCount:null===(t=ce.data)||void 0===t?void 0:t.workspaceMembers.totalCount})]})]}),children:[ie.on&&(0,a.jsx)(G,{}),I||oe.fetching?(0,a.jsx)(Q,{}):(0,a.jsx)(a.Fragment,{children:Y.length>0?(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(w.Z,{variant:"heading-3",className:"-ml-[1px] font-lf-semi-bold text-left text-base text-current leading-6",children:"Recently modified"}),E()&&(0,a.jsxs)("div",{className:"flex gap-2",children:[fe&&(0,a.jsx)("div",{className:"relative","data-onboarding-id":"dashboard-create-animation",children:(0,a.jsx)(M.u,{title:"Create a new animation with Lottie Creator",placement:"bottom",children:(0,a.jsx)(v.z,{onClick:he,text:"Create animation",additionalClass:"h-8 rounded-lg",variant:"tertiary",padding:"px-4 py-1",fontClasses:"font-lf-bold text-sm",textClasses:"mb-0.5",icon:"plus",hideTextOnMobile:!0,iconSize:"small"})})}),(0,a.jsx)("div",{className:"relative","data-onboarding-id":"dashboard-anim-upload",children:(0,a.jsx)(M.u,{title:"",shortcut:ue,placement:"bottom",children:(0,a.jsx)(v.z,{onClick:ve,text:"Upload animations",icon:"upload",fontClasses:"font-lf-semi-bold",additionalClass:"h-8 rounded-lg",textClasses:"mb-0.5",padding:"px-4 py-1",hideTextOnMobile:!0,iconSize:"small"})})})]})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(j.GridView,{onItemClick:xe,workspaceId:null==s?void 0:s.id,files:Y,showUpdatedUser:!1})})]}):(0,a.jsx)(a.Fragment,{children:E()&&(0,a.jsx)(ae,{source:"dashboard"})})}),V&&(0,a.jsx)($,{}),(0,a.jsxs)("div",{className:o()("mt-10 space-y-[10px]",{hidden:V}),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(w.Z,{variant:"heading-4",color:"current",lineHeightClass:"leading-6",darkest:!0,children:"Begin your motion design journey with these tools"}),(0,a.jsxs)("span",{onClick:ge,className:"flex items-center text-sm cursor-pointer gap-x-2 text-actionPrimary font-lf-semi-bold hover:text-actionPrimaryHover",children:["All tools ",(0,a.jsx)(C.J,{name:"arrow-right",className:"mt-1",small:!0})]})]}),(0,a.jsx)(te,{onLoadCallback:je})]}),(0,a.jsxs)("div",{className:"mt-10 space-y-10",children:[re&&(0,a.jsxs)(R.ph,{childClassName:"grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-8 4xl:grid-cols-10",name:"Premium animations",onClickViewAll:pe,loading:d,children:[d&&(0,a.jsx)(a.Fragment,{children:Array.from({length:be.value}).map(((e,t)=>(0,a.jsx)("div",{className:"aspect-square",children:(0,a.jsx)(X.J,{color:"light",className:"rounded"})},"skeleton-".concat(t+1))))}),!d&&(0,a.jsx)(a.Fragment,{children:c.slice(0,be.value).map((e=>(0,a.jsx)(R.s8,{src:e.thumbnailVideoUrl,onClick:me({slug:e.slug}),autoplay:!1},e.id)))})]}),(0,a.jsx)(se,{autoplay:!1})]})]})]})}},8391:function(e,t,s){"use strict";s.d(t,{Y:function(){return a}});const a=(0,s(75800).atom)({key:"selectedAnimationsCount",default:0})},61057:function(e,t,s){"use strict";var a,n,l,i;s.d(t,{$i:function(){return n},gv:function(){return l},hH:function(){return a}}),function(e){e.DASHBOARD="dashboard",e.HOME="home",e.INDIVIDUAL="individual",e.PACK="pack",e.SEARCH="search",e.URL="url"}(a||(a={})),function(e){e.FEATURED="featured",e.POPULAR="popular",e.RECENT="recent"}(n||(n={})),function(e){e.ANIMATIONS="animations",e.PACKS="packs"}(l||(l={})),function(e){e.FEATURED="featured",e.INDIVIDUAL="individual",e.POPULAR="popular",e.RECENT="recent",e.SEARCH="search"}(i||(i={}))}},function(e){e.O(0,[2125,1160,1119,8118,2888,9774,179],(function(){return t=73958,e(e.s=t);var t}));var t=e.O();_N_E=t}]);