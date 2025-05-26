import{r as d}from"./index.BVOCwoKb.js";var A={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function L(){if(P)return E;P=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(n,i,r){var o=null;if(r!==void 0&&(o=""+r),i.key!==void 0&&(o=""+i.key),"key"in i){r={};for(var s in i)s!=="key"&&(r[s]=i[s])}else r=i;return i=r.ref,{$$typeof:e,type:n,key:o,ref:i!==void 0?i:null,props:r}}return E.Fragment=t,E.jsx=a,E.jsxs=a,E}var F;function B(){return F||(F=1,A.exports=L()),A.exports}var u=B();let H={data:""},Y=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||H,U=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,V=/\/\*[^]*?\*\/|  +/g,_=/\n+/g,b=(e,t)=>{let a="",n="",i="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":n+=r[1]=="f"?b(o,r):r+"{"+b(o,r[1]=="k"?"":t)+"}":typeof o=="object"?n+=b(o,t?t.replace(/([^,])+/g,s=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=b.p?b.p(r,o):r+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+n},y={},I=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+I(e[a]);return t}return e},Z=(e,t,a,n,i)=>{let r=I(e),o=y[r]||(y[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!y[o]){let l=r!==e?e:(c=>{let p,g,f=[{}];for(;p=U.exec(c.replace(V,""));)p[4]?f.shift():p[3]?(g=p[3].replace(_," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(_," ").trim();return f[0]})(e);y[o]=b(i?{["@keyframes "+o]:l}:l,a?"":"."+o)}let s=a&&y.g?y.g:null;return a&&(y.g=y[o]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(y[o],t,n,s),o},G=(e,t,a)=>e.reduce((n,i,r)=>{let o=t[r];if(o&&o.call){let s=o(a),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;o=l?"."+l:s&&typeof s=="object"?s.props?"":b(s,""):s===!1?"":s}return n+i+(o??"")},"");function O(e){let t=this||{},a=e.call?e(t.p):e;return Z(a.unshift?a.raw?G(a,[].slice.call(arguments,1),t.p):a.reduce((n,i)=>Object.assign(n,i&&i.call?i(t.p):i),{}):a,Y(t.target),t.g,t.o,t.k)}let M,z,N;O.bind({g:1});let x=O.bind({k:1});function W(e,t,a,n){b.p=t,M=e,z=a,N=n}function v(e,t){let a=this||{};return function(){let n=arguments;function i(r,o){let s=Object.assign({},r),l=s.className||i.className;a.p=Object.assign({theme:z&&z()},s),a.o=/ *go\d+/.test(l),s.className=O.apply(a,n)+(l?" "+l:"");let c=e;return e[0]&&(c=s.as||e,delete s.as),N&&c[0]&&N(s),M(c,s)}return i}}var X=e=>typeof e=="function",D=(e,t)=>X(e)?e(t):e,Q=(()=>{let e=0;return()=>(++e).toString()})(),J=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return q(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},C=[],j={toasts:[],pausedAt:void 0},w=e=>{j=q(j,e),C.forEach(t=>{t(j)})},ee={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},te=(e={})=>{let[t,a]=d.useState(j),n=d.useRef(j);d.useEffect(()=>(n.current!==j&&a(j),C.push(a),()=>{let r=C.indexOf(a);r>-1&&C.splice(r,1)}),[]);let i=t.toasts.map(r=>{var o,s,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((o=e[r.type])==null?void 0:o.removeDelay)||e?.removeDelay,duration:r.duration||((s=e[r.type])==null?void 0:s.duration)||e?.duration||ee[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:i}},re=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Q()}),S=e=>(t,a)=>{let n=re(t,e,a);return w({type:2,toast:n}),n.id},m=(e,t)=>S("blank")(e,t);m.error=S("error");m.success=S("success");m.loading=S("loading");m.custom=S("custom");m.dismiss=e=>{w({type:3,toastId:e})};m.remove=e=>w({type:4,toastId:e});m.promise=(e,t,a)=>{let n=m.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let r=t.success?D(t.success,i):void 0;return r?m.success(r,{id:n,...a,...a?.success}):m.dismiss(n),i}).catch(i=>{let r=t.error?D(t.error,i):void 0;r?m.error(r,{id:n,...a,...a?.error}):m.dismiss(n)}),e};var ae=(e,t)=>{w({type:1,toast:{id:e,height:t}})},se=()=>{w({type:5,time:Date.now()})},k=new Map,ie=1e3,oe=(e,t=ie)=>{if(k.has(e))return;let a=setTimeout(()=>{k.delete(e),w({type:4,toastId:e})},t);k.set(e,a)},ne=e=>{let{toasts:t,pausedAt:a}=te(e);d.useEffect(()=>{if(a)return;let r=Date.now(),o=t.map(s=>{if(s.duration===1/0)return;let l=(s.duration||0)+s.pauseDuration-(r-s.createdAt);if(l<0){s.visible&&m.dismiss(s.id);return}return setTimeout(()=>m.dismiss(s.id),l)});return()=>{o.forEach(s=>s&&clearTimeout(s))}},[t,a]);let n=d.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),i=d.useCallback((r,o)=>{let{reverseOrder:s=!1,gutter:l=8,defaultPosition:c}=o||{},p=t.filter(h=>(h.position||c)===(r.position||c)&&h.height),g=p.findIndex(h=>h.id===r.id),f=p.filter((h,T)=>T<g&&h.visible).length;return p.filter(h=>h.visible).slice(...s?[f+1]:[0,f]).reduce((h,T)=>h+(T.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(r=>{if(r.dismissed)oe(r.id,r.removeDelay);else{let o=k.get(r.id);o&&(clearTimeout(o),k.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:ae,startPause:se,endPause:n,calculateOffset:i}}},le=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ce=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=x`
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
`,pe=x`
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
`,fe=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ge=x`
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
}`,he=v("div")`
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
    animation: ${ge} 0.2s ease-out forwards;
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
`,ye=v("div")`
  position: absolute;
`,xe=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=x`
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
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,je=({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return t!==void 0?typeof t=="string"?d.createElement(ve,null,t):t:a==="blank"?null:d.createElement(xe,null,d.createElement(me,{...n}),a!=="loading"&&d.createElement(ye,null,a==="error"?d.createElement(ue,{...n}):d.createElement(he,{...n})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",Se="0%{opacity:1;} 100%{opacity:0;}",$e=v("div")`
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
`,Re=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ce=(e,t)=>{let a=e.includes("top")?1:-1,[n,i]=J()?[ke,Se]:[we(a),Ee(a)];return{animation:t?`${x(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},De=d.memo(({toast:e,position:t,style:a,children:n})=>{let i=e.height?Ce(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(je,{toast:e}),o=d.createElement(Re,{...e.ariaProps},D(e.message,e));return d.createElement($e,{className:e.className,style:{...i,...a,...e.style}},typeof n=="function"?n({icon:r,message:o}):d.createElement(d.Fragment,null,r,o))});W(d.createElement);var Oe=({id:e,className:t,style:a,onHeightUpdate:n,children:i})=>{let r=d.useCallback(o=>{if(o){let s=()=>{let l=o.getBoundingClientRect().height;n(e,l)};s(),new MutationObserver(s).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return d.createElement("div",{ref:r,className:t,style:a},i)},Te=(e,t)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:J()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...n,...i}},Ae=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,ze=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:n,children:i,containerStyle:r,containerClassName:o})=>{let{toasts:s,handlers:l}=ne(a);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},s.map(c=>{let p=c.position||t,g=l.calculateOffset(c,{reverseOrder:e,gutter:n,defaultPosition:t}),f=Te(p,g);return d.createElement(Oe,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Ae:"",style:f},c.type==="custom"?D(c.message,c):i?i(c):d.createElement(De,{toast:c,position:p}))}))},R=m;const Pe=()=>{const[e,t]=d.useState(!1),[a,n]=d.useState(!1),i=d.useRef(null),r=async o=>{o.preventDefault(),t(!0);const s=new FormData(o.currentTarget);if(!s.get("email")){R.error("Please enter your email"),t(!1);return}try{const l={email:s.get("email"),message:s.get("message")||"",name:s.get("name")||""},c=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),p=await c.json();c.ok?(n(!0),i.current?.reset(),R.success(`✅ メッセージを送信しました！
📧 自動返信メールをご確認ください`,{duration:6e3,style:{background:"#10B981",color:"white",fontSize:"14px",padding:"16px",borderRadius:"8px"}}),setTimeout(()=>{n(!1)},3e3)):R.error(p.error||"メール送信に失敗しました")}catch(l){console.error("Contact form error:",l),R.error("ネットワークエラーが発生しました")}finally{t(!1)}};return u.jsxs(u.Fragment,{children:[u.jsxs("form",{className:"contact-form",ref:i,onSubmit:r,children:[u.jsx("h2",{children:"Let's Connect"}),a?u.jsxs("div",{style:{background:"linear-gradient(135deg, #10B981, #059669)",color:"white",padding:"20px",borderRadius:"12px",textAlign:"center",margin:"20px 0",animation:"fadeIn 0.5s ease-in-out"},children:[u.jsx("div",{style:{fontSize:"48px",marginBottom:"10px"},children:"🎉"}),u.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px"},children:"送信完了！"}),u.jsxs("p",{style:{margin:"0",fontSize:"14px",opacity:"0.9"},children:["メッセージありがとうございます。",u.jsx("br",{}),"自動返信メールをご確認ください。"]})]}):u.jsxs("p",{children:["お問い合わせ、見積もり、",u.jsx("br",{}),"またはコラボレーションについては",u.jsx("br",{}),"下記までご連絡ください"]}),u.jsxs("label",{children:["your name (optional)",u.jsx("input",{type:"text",name:"name",autoComplete:"name",placeholder:"e.g., 田中太郎"})]}),u.jsxs("label",{children:["your email",u.jsx("input",{type:"email",name:"email",autoComplete:"email",placeholder:"e.g., kyundesign2022@gmail.com"})]}),u.jsxs("label",{children:["message (optional)",u.jsx("textarea",{name:"message",rows:4,placeholder:"お問い合わせ内容、ご質問、ご要望などをお聞かせください..."})]}),u.jsx("button",{className:"link",type:"submit",disabled:e||a,style:{background:a?"#10B981":"",transform:a?"scale(1.05)":"",transition:"all 0.3s ease"},children:e?u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{marginRight:"8px"},children:"📤"}),"送信中..."]}):a?u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{marginRight:"8px"},children:"✅"}),"送信完了"]}):"Contact Me"})]}),u.jsx(ze,{})]})};export{Pe as default};
