import{r as d}from"./index.BVOCwoKb.js";var O={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function L(){if(P)return j;P=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(s,o,r){var n=null;if(r!==void 0&&(n=""+r),o.key!==void 0&&(n=""+o.key),"key"in o){r={};for(var i in o)i!=="key"&&(r[i]=o[i])}else r=o;return o=r.ref,{$$typeof:e,type:s,key:n,ref:o!==void 0?o:null,props:r}}return j.Fragment=t,j.jsx=a,j.jsxs=a,j}var _;function H(){return _||(_=1,O.exports=L()),O.exports}var f=H();let Y={data:""},U=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Y,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,x=(e,t)=>{let a="",s="",o="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+n+";":s+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":t)+"}":typeof n=="object"?s+=x(n,t?t.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=x.p?x.p(r,n):r+":"+n+";")}return a+(t&&o?t+"{"+o+"}":o)+s},h={},z=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+z(e[a]);return t}return e},B=(e,t,a,s,o)=>{let r=z(e),n=h[r]||(h[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!h[n]){let l=r!==e?e:(c=>{let u,y,m=[{}];for(;u=V.exec(c.replace(Z,""));)u[4]?m.shift():u[3]?(y=u[3].replace(F," ").trim(),m.unshift(m[0][y]=m[0][y]||{})):m[0][u[1]]=u[2].replace(F," ").trim();return m[0]})(e);h[n]=x(o?{["@keyframes "+n]:l}:l,a?"":"."+n)}let i=a&&h.g?h.g:null;return a&&(h.g=h[n]),((l,c,u,y)=>{y?c.data=c.data.replace(y,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(h[n],t,s,i),n},G=(e,t,a)=>e.reduce((s,o,r)=>{let n=t[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return s+o+(n??"")},"");function S(e){let t=this||{},a=e.call?e(t.p):e;return B(a.unshift?a.raw?G(a,[].slice.call(arguments,1),t.p):a.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):a,U(t.target),t.g,t.o,t.k)}let I,A,N;S.bind({g:1});let b=S.bind({k:1});function W(e,t,a,s){x.p=t,I=e,A=a,N=s}function v(e,t){let a=this||{};return function(){let s=arguments;function o(r,n){let i=Object.assign({},r),l=i.className||o.className;a.p=Object.assign({theme:A&&A()},i),a.o=/ *go\d+/.test(l),i.className=S.apply(a,s)+(l?" "+l:"");let c=e;return e[0]&&(c=i.as||e,delete i.as),N&&c[0]&&N(i),I(c,i)}return o}}var X=e=>typeof e=="function",R=(e,t)=>X(e)?e(t):e,Q=(()=>{let e=0;return()=>(++e).toString()})(),q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,J=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return J(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},C=[],w={toasts:[],pausedAt:void 0},E=e=>{w=J(w,e),C.forEach(t=>{t(w)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,a]=d.useState(w),s=d.useRef(w);d.useEffect(()=>(s.current!==w&&a(w),C.push(a),()=>{let r=C.indexOf(a);r>-1&&C.splice(r,1)}),[]);let o=t.toasts.map(r=>{var n,i,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((n=e[r.type])==null?void 0:n.removeDelay)||e?.removeDelay,duration:r.duration||((i=e[r.type])==null?void 0:i.duration)||e?.duration||ee[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:o}},re=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Q()}),$=e=>(t,a)=>{let s=re(t,e,a);return E({type:2,toast:s}),s.id},p=(e,t)=>$("blank")(e,t);p.error=$("error");p.success=$("success");p.loading=$("loading");p.custom=$("custom");p.dismiss=e=>{E({type:3,toastId:e})};p.remove=e=>E({type:4,toastId:e});p.promise=(e,t,a)=>{let s=p.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let r=t.success?R(t.success,o):void 0;return r?p.success(r,{id:s,...a,...a?.success}):p.dismiss(s),o}).catch(o=>{let r=t.error?R(t.error,o):void 0;r?p.error(r,{id:s,...a,...a?.error}):p.dismiss(s)}),e};var ae=(e,t)=>{E({type:1,toast:{id:e,height:t}})},se=()=>{E({type:5,time:Date.now()})},k=new Map,ie=1e3,oe=(e,t=ie)=>{if(k.has(e))return;let a=setTimeout(()=>{k.delete(e),E({type:4,toastId:e})},t);k.set(e,a)},ne=e=>{let{toasts:t,pausedAt:a}=te(e);d.useEffect(()=>{if(a)return;let r=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,a]);let s=d.useCallback(()=>{a&&E({type:6,time:Date.now()})},[a]),o=d.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},u=t.filter(g=>(g.position||c)===(r.position||c)&&g.height),y=u.findIndex(g=>g.id===r.id),m=u.filter((g,T)=>T<y&&g.visible).length;return u.filter(g=>g.visible).slice(...i?[m+1]:[0,m]).reduce((g,T)=>g+(T.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(r=>{if(r.dismissed)oe(r.id,r.removeDelay);else{let n=k.get(r.id);n&&(clearTimeout(n),k.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:ae,startPause:se,endPause:s,calculateOffset:o}}},le=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ce=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ue=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ce} 0.15s ease-out forwards;
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
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,fe=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ye=b`
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
}`,ge=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ye} 0.2s ease-out forwards;
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
`,he=v("div")`
  position: absolute;
`,be=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(ve,null,t):t:a==="blank"?null:d.createElement(be,null,d.createElement(me,{...s}),a!=="loading"&&d.createElement(he,null,a==="error"?d.createElement(ue,{...s}):d.createElement(ge,{...s})))},Ee=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,je=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",De=v("div")`
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
`,Ce=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Re=(e,t)=>{let a=e.includes("top")?1:-1,[s,o]=q()?[ke,$e]:[Ee(a),je(a)];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Se=d.memo(({toast:e,position:t,style:a,children:s})=>{let o=e.height?Re(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(we,{toast:e}),n=d.createElement(Ce,{...e.ariaProps},R(e.message,e));return d.createElement(De,{className:e.className,style:{...o,...a,...e.style}},typeof s=="function"?s({icon:r,message:n}):d.createElement(d.Fragment,null,r,n))});W(d.createElement);var Te=({id:e,className:t,style:a,onHeightUpdate:s,children:o})=>{let r=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:r,className:t,style:a},o)},Oe=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...o}},Ae=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=16,Ne=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:o,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=ne(a);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let u=c.position||t,y=l.calculateOffset(c,{reverseOrder:e,gutter:s,defaultPosition:t}),m=Oe(u,y);return d.createElement(Te,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Ae:"",style:m},c.type==="custom"?R(c.message,c):o?o(c):d.createElement(Se,{toast:c,position:u}))}))},M=p;const _e=()=>{const[e,t]=d.useState(!1),a=async s=>{if(s.preventDefault(),t(!0),!new FormData(s.currentTarget).get("email")){M.error("Please enter your email"),t(!1);return}setTimeout(()=>{M.success("Message sent successfully!"),t(!1),s.currentTarget.reset()},2e3)};return f.jsxs(f.Fragment,{children:[f.jsxs("form",{className:"contact-form",onSubmit:a,children:[f.jsx("h2",{children:"Let's Connect"}),f.jsxs("p",{children:["お問い合わせ、見積もり、",f.jsx("br",{}),"またはコラボレーションについては",f.jsx("br",{}),"下記までご連絡ください"]}),f.jsxs("label",{children:["your email",f.jsx("input",{type:"email",name:"email",autoComplete:"email",placeholder:"e.g., kyundesign2022@gmail.com"})]}),f.jsx("button",{className:"link",type:"submit",disabled:e,children:e?"Sending...":"Contact Me"})]}),f.jsx(Ne,{})]})};export{_e as default};
