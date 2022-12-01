(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626,11],{5273:function(e,t,a){Promise.resolve().then(a.t.bind(a,30,23)),Promise.resolve().then(a.bind(a,2023))},7921:function(e){e.exports={loading:"loading-dots_loading__3HYzm",spacer:"loading-dots_spacer__3kGlG",blink:"loading-dots_blink__mTR28"},e.exports.__checksum="2e6c6f6164696e67207b0a2020646973706c61793a20696e6c696e652d666c65783b0a2020616c69676e2d6974656d733a2063656e7465723b0a7d0a0a2e6c6f6164696e67202e737061636572207b0a20206d617267696e2d72696768743a203270783b0a7d0a0a2e6c6f6164696e67207370616e207b0a2020616e696d6174696f6e2d6e616d653a20626c696e6b3b0a2020616e696d6174696f6e2d6475726174696f6e3a20312e34733b0a2020616e696d6174696f6e2d697465726174696f6e2d636f756e743a20696e66696e6974653b0a2020616e696d6174696f6e2d66696c6c2d6d6f64653a20626f74683b0a202077696474683a203570783b0a20206865696768743a203570783b0a2020626f726465722d7261646975733a203530253b0a2020646973706c61793a20696e6c696e652d626c6f636b3b0a20206d617267696e3a2030203170783b0a7d0a0a2e6c6f6164696e67207370616e3a6e74682d6f662d74797065283229207b0a2020616e696d6174696f6e2d64656c61793a20302e32733b0a7d0a0a2e6c6f6164696e67207370616e3a6e74682d6f662d74797065283329207b0a2020616e696d6174696f6e2d64656c61793a20302e34733b0a7d0a0a406b65796672616d657320626c696e6b207b0a20203025207b0a202020206f7061636974793a20302e323b0a20207d0a2020323025207b0a202020206f7061636974793a20313b0a20207d0a202031303025207b0a202020206f7061636974793a20302e323b0a20207d0a7d0a"},2023:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(1844),o=a(5784),s=a(3299),i=a(7921),n=a.n(i);let l=e=>{let{color:t="#000"}=e;return(0,r.jsxs)("span",{className:n().loading,children:[(0,r.jsx)("span",{style:{backgroundColor:t}}),(0,r.jsx)("span",{style:{backgroundColor:t}}),(0,r.jsx)("span",{style:{backgroundColor:t}})]})};var d=a(6501),c=a(1664),u=a.n(c),p=a(9332);function f(e){let{type:t}=e,[a,i]=(0,o.useState)(!1),n=(0,p.useRouter)();return(0,r.jsxs)("form",{onSubmit(e){e.preventDefault(),i(!0),"login"===t?(0,s.signIn)("credentials",{redirect:!1,email:e.currentTarget.email.value,password:e.currentTarget.password.value}).then(e=>{let{ok:t,error:a}=e;i(!1),t?n.push("/protected"):d.ZP.error(a)}):fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.currentTarget.email.value,password:e.currentTarget.password.value})}).then(async e=>{i(!1),200===e.status?(d.ZP.success("Account created! Redirecting to login..."),setTimeout(()=>{n.push("/login")},2e3)):d.ZP.error(await e.text())})},className:"flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-xs text-gray-600 uppercase",children:"Email Address"}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"panic@thedis.co",autoComplete:"email",required:!0,className:"mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-xs text-gray-600 uppercase",children:"Password"}),(0,r.jsx)("input",{id:"password",name:"password",type:"password",required:!0,className:"mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"})]}),(0,r.jsx)("button",{disabled:a,className:"".concat(a?"cursor-not-allowed border-gray-200 bg-gray-100":"border-black bg-black text-white hover:bg-white hover:text-black"," flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"),children:a?(0,r.jsx)(l,{color:"#808080"}):(0,r.jsx)("p",{children:"login"===t?"Sign In":"Sign Up"})}),"login"===t?(0,r.jsxs)("p",{className:"text-center text-sm text-gray-600",children:["Don't have an account?"," ",(0,r.jsx)(u(),{href:"/register",className:"font-semibold text-gray-800",children:"Sign up"})," ","for free."]}):(0,r.jsxs)("p",{className:"text-center text-sm text-gray-600",children:["Already have an account?"," ",(0,r.jsx)(u(),{href:"/login",className:"font-semibold text-gray-800",children:"Sign in"})," ","instead."]})]})}},1664:function(e,t,a){e.exports=a(4090)},9332:function(e,t,a){e.exports=a(19)},2431:function(){},6501:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},ZP:function(){return es}});var s,i=a(5784);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+i+";":r+="f"==s[1]?p(i,s):s+"{"+p(i,"k"==s[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,i):s+":"+i+";")}return a+(t&&o?t+"{"+o+"}":o)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},b=(e,t,a,r,o)=>{var s,i;let n=m(e),l=f[n]||(f[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!f[l]){let b=n!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[l]=p(o?{["@keyframes "+l]:b}:b,a?"":"."+l)}let g=a&&f.g?f.g:null;return a&&(f.g=f[l]),s=f[l],i=t,g?i.data=i.data.replace(g,s):-1===i.data.indexOf(s)&&(i.data=r?s+i.data:i.data+s),l},g=(e,t,a)=>e.reduce((e,r,o)=>{let s=t[o];if(s&&s.call){let i=s(a),n=i&&i.props&&i.props.className||/^go/.test(i)&&i;s=n?"."+n:i&&"object"==typeof i?i.props?"":p(i,""):!1===i?"":i}return e+r+(null==s?"":s)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return b(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,x,v,w=h.bind({k:1});function k(e,t){let a=this||{};return function(){let r=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=h.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(o):o}}var j=e=>"function"==typeof e,E=(e,t)=>j(e)?e(t):e,N=(r=0,()=>(++r).toString()),_=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,C=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),S({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?C(r):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},T=[],A={toasts:[],pausedAt:void 0},S=e=>{A=P(A,e),T.forEach(e=>{e(A)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,a]=(0,i.useState)(A);(0,i.useEffect)(()=>(T.push(a),()=>{let e=T.indexOf(a);e>-1&&T.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},I=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||N()}),F=e=>(t,a)=>{let r=I(t,e,a);return S({type:2,toast:r}),r.id},H=(e,t)=>F("blank")(e,t);H.error=F("error"),H.success=F("success"),H.loading=F("loading"),H.custom=F("custom"),H.dismiss=e=>{S({type:3,toastId:e})},H.remove=e=>S({type:4,toastId:e}),H.promise=(e,t,a)=>{let r=H.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(H.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{H.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{S({type:1,toast:{id:e,height:t}})},Z=()=>{S({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=D(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,i.useCallback)(()=>{a&&S({type:6,time:Date.now()})},[a]),o=(0,i.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:s}=a||{},i=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:Z,endPause:r,calculateOffset:o}}},R=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,G=k("div")`
  position: absolute;
`,Y=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(B,null,t):t:"blank"===a?null:i.createElement(Y,null,i.createElement(q,{...r}),"loading"!==a&&i.createElement(G,null,"error"===a?i.createElement(R,{...r}):i.createElement(U,{...r})))},K=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(a),Q(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(J,{toast:e}),n=i.createElement(W,{...e.ariaProps},E(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,p.p=void 0,y=s,x=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let s=i.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:s,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=L(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||t,n=ea(s,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):o?o(a):i.createElement(ee,{toast:a,position:s}))}))},es=H}},function(e){e.O(0,[972,299,17,744],function(){return e(e.s=5273)}),_N_E=e.O()}]);