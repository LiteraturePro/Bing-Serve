import{l as x,a as S,A as ot,N as $e,Q as pt,z as O,i as q,b as me,P as le,j as Ae,v as Le,y as p,s as Re,R as Pe,S as St,d as X,g as u,x as It,T as se,U as Fe,V as at,W as He,X as it,Y as $t,F as Te,Z as Pt,_ as Dt,e as J,t as W,m as we,f as A,I as Bt,w as Xe,C as Ot,$ as Tt,r as kt,o as ee,p as zt,n as At,a0 as Lt}from"./index.9a0cb797.js";import{u as Rt,b as Ft,a as Ht}from"./bing.f31a99df.js";import{_ as Nt,a as Yt}from"./h5-header.c0d86349.js";import{b as Ue}from"./route-block.6a611cbf.js";import"./_plugin-vue_export-helper.cdc0426e.js";function Mt(){}const ce=Object.assign,Ne=typeof window<"u";function Ze(e,t){const n=t.split(".");let a=e;return n.forEach(i=>{var o;a=(o=a[i])!=null?o:""}),a}function Xt(e,t,n){return t.reduce((a,i)=>((!n||e[i]!==void 0)&&(a[i]=e[i]),a),{})}const Se=null,D=[Number,String],T={type:Boolean,default:!0},be=e=>({type:e,required:!0}),Ut=()=>({type:Array,default:()=>[]}),te=e=>({type:D,default:e}),M=e=>({type:String,default:e});var he=typeof window<"u";function We(e){return he?requestAnimationFrame(e):-1}function xe(e){We(()=>We(e))}var Zt=e=>e===window,je=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),Wt=e=>{const t=x(e);if(Zt(t)){const n=t.innerWidth,a=t.innerHeight;return je(n,a)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():je(0,0)};function jt(e){const t=Le(e,null);if(t){const n=Pe(),{link:a,unlink:i,internalChildren:o}=t;a(n),ot(()=>i(n));const s=p(()=>o.indexOf(n));return{parent:t,index:s}}return{parent:null,index:S(-1)}}function Vt(e){const t=[],n=a=>{Array.isArray(a)&&a.forEach(i=>{var o;St(i)&&(t.push(i),(o=i.component)!=null&&o.subTree&&(t.push(i.component.subTree),n(i.component.subTree.children)),i.children&&n(i.children))})};return n(e),t}function qt(e,t,n){const a=Vt(e.subTree.children);n.sort((o,s)=>a.indexOf(o.vnode)-a.indexOf(s.vnode));const i=n.map(o=>o.proxy);t.sort((o,s)=>{const c=i.indexOf(o),f=i.indexOf(s);return c-f})}function Kt(e){const t=q([]),n=q([]),a=Pe();return{children:t,linkChildren:o=>{Re(e,Object.assign({link:f=>{f.proxy&&(n.push(f),t.push(f.proxy),qt(a,t,n))},unlink:f=>{const l=n.indexOf(f);t.splice(l,1),n.splice(l,1)},children:t,internalChildren:n},o))}}}function st(e){let t;me(()=>{e(),le(()=>{t=!0})}),Ae(()=>{t&&e()})}function De(e,t,n={}){if(!he)return;const{target:a=window,passive:i=!1,capture:o=!1}=n;let s;const c=l=>{const d=x(l);d&&!s&&(d.addEventListener(e,t,{capture:o,passive:i}),s=!0)},f=l=>{const d=x(l);d&&s&&(d.removeEventListener(e,t,o),s=!1)};ot(()=>f(a)),$e(()=>f(a)),st(()=>c(a)),pt(a)&&O(a,(l,d)=>{f(d),c(l)})}var _e,Oe;function Gt(){if(!_e&&(_e=S(0),Oe=S(0),he)){const e=()=>{_e.value=window.innerWidth,Oe.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:_e,height:Oe}}var Qt=/scroll|auto|overlay/i,Jt=he?window:void 0;function en(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function tn(e,t=Jt){let n=e;for(;n&&n!==t&&en(n);){const{overflowY:a}=window.getComputedStyle(n);if(Qt.test(a))return n;n=n.parentNode}return t}var Ce;function nn(){if(!Ce&&(Ce=S("visible"),he)){const e=()=>{Ce.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return Ce}const Q=e=>e!=null,ke=e=>typeof e=="function",lt=e=>e!==null&&typeof e=="object",on=e=>lt(e)&&ke(e.then)&&ke(e.catch),ct=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),an=()=>Ne?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;an();const sn=e=>e.stopPropagation();function ve(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&sn(e)}function Ve(e){const t=x(e);if(!t)return!1;const n=window.getComputedStyle(t),a=n.display==="none",i=t.offsetParent===null&&n.position!=="fixed";return a||i}const{width:rt,height:ut}=Gt();function Y(e){if(Q(e))return ct(e)?`${e}px`:String(e)}function ln(e){if(Q(e)){if(Array.isArray(e))return{width:Y(e[0]),height:Y(e[1])};const t=Y(e);return{width:t,height:t}}}function cn(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const rn=/-(\w)/g,dt=e=>e.replace(rn,(t,n)=>n.toUpperCase()),un=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,""),G=(e,t,n)=>Math.min(Math.max(e,t),n),{hasOwnProperty:dn}=Object.prototype;function fn(e,t,n){const a=t[n];!Q(a)||(!dn.call(e,n)||!lt(a)?e[n]=a:e[n]=ft(Object(e[n]),a))}function ft(e,t){return Object.keys(t).forEach(n=>{fn(e,t,n)}),e}var vn={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const qe=S("zh-CN"),Ke=q({"zh-CN":vn}),mn={messages(){return Ke[qe.value]},use(e,t){qe.value=e,this.add({[e]:t})},add(e={}){ft(Ke,e)}};var hn=mn;function gn(e){const t=dt(e)+".";return(n,...a)=>{const i=hn.messages(),o=Ze(i,t+n)||Ze(i,n);return ke(o)?o(...a):o}}function ze(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,a)=>n+ze(e,a),""):Object.keys(t).reduce((n,a)=>n+(t[a]?ze(e,a):""),""):""}function yn(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${ze(t,n)}`)}function U(e){const t=`van-${e}`;return[t,yn(t),gn(t)]}const vt="van-haptics-feedback";function mt(e,{args:t=[],done:n,canceled:a}){if(e){const i=e.apply(null,t);on(i)?i.then(o=>{o?n():a&&a()}).catch(Mt):i?n():a&&a()}else n()}function K(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(dt(`-${n}`),e))},e}const ht=Symbol();function wn(e){const t=Le(ht,null);t&&O(t,n=>{n&&e()})}function ge(e){const t=Pe();t&&ce(t.proxy,e)}const[bn,Ge]=U("badge"),xn={dot:Boolean,max:D,tag:M("div"),color:String,offset:Array,content:D,showZero:T,position:M("top-right")};var _n=X({name:bn,props:xn,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:s,showZero:c}=e;return Q(s)&&s!==""&&(c||s!==0&&s!=="0")},a=()=>{const{dot:s,max:c,content:f}=e;if(!s&&n())return t.content?t.content():Q(c)&&ct(f)&&+f>c?`${c}+`:f},i=p(()=>{const s={background:e.color};if(e.offset){const[c,f]=e.offset;t.default?(s.top=Y(f),typeof c=="number"?s.right=Y(-c):s.right=c.startsWith("-")?c.replace("-",""):`-${c}`):(s.marginTop=Y(f),s.marginLeft=Y(c))}return s}),o=()=>{if(n()||e.dot)return u("div",{class:Ge([e.position,{dot:e.dot,fixed:!!t.default}]),style:i.value},[a()])};return()=>{if(t.default){const{tag:s}=e;return u(s,{class:Ge("wrapper")},{default:()=>[t.default(),o()]})}return o()}}});const Cn=K(_n);let gt=2e3;const En=()=>++gt,pn=e=>{gt=e},[yt,Sn]=U("config-provider"),wt=Symbol(yt),In={tag:M("div"),zIndex:Number,themeVars:Object,iconPrefix:String};function $n(e){const t={};return Object.keys(e).forEach(n=>{t[`--van-${un(n)}`]=e[n]}),t}X({name:yt,props:In,setup(e,{slots:t}){const n=p(()=>{if(e.themeVars)return $n(e.themeVars)});return Re(wt,e),It(()=>{e.zIndex!==void 0&&pn(e.zIndex)}),()=>u(e.tag,{class:Sn(),style:n.value},{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t)]}})}});const[Pn,Qe]=U("icon"),Dn=e=>e==null?void 0:e.includes("/"),Bn={dot:Boolean,tag:M("i"),name:String,size:D,badge:D,color:String,badgeProps:Object,classPrefix:String};var On=X({name:Pn,props:Bn,setup(e,{slots:t}){const n=Le(wt,null),a=p(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||Qe());return()=>{const{tag:i,dot:o,name:s,size:c,badge:f,color:l}=e,d=Dn(s);return u(Cn,se({dot:o,tag:i,class:[a.value,d?"":`${a.value}-${s}`],style:{color:l,fontSize:Y(c)},content:f},e.badgeProps),{default:()=>{var y;return[(y=t.default)==null?void 0:y.call(t),d&&u("img",{class:Qe("image"),src:s},null)]}})}}});const Ye=K(On),[Tn,fe]=U("loading"),kn=Array(12).fill(null).map((e,t)=>u("i",{class:fe("line",String(t+1))},null)),zn=u("svg",{class:fe("circular"),viewBox:"25 25 50 50"},[u("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),An={size:D,type:M("circular"),color:String,vertical:Boolean,textSize:D,textColor:String};var Ln=X({name:Tn,props:An,setup(e,{slots:t}){const n=p(()=>ce({color:e.color},ln(e.size))),a=()=>{var i;if(t.default)return u("span",{class:fe("text"),style:{fontSize:Y(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[t.default()])};return()=>{const{type:i,vertical:o}=e;return u("div",{class:fe([i,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[u("span",{class:fe("spinner",i),style:n.value},[i==="spinner"?kn:zn]),a()])}}});const Rn=K(Ln),Fn={show:Boolean,zIndex:D,overlay:T,duration:D,teleport:[String,Object],lockScroll:T,lazyRender:T,beforeClose:Function,overlayStyle:Object,overlayClass:Se,transitionAppear:Boolean,closeOnClickOverlay:T};function Hn(e,t){return e>t?"horizontal":t>e?"vertical":""}function Me(){const e=S(0),t=S(0),n=S(0),a=S(0),i=S(0),o=S(0),s=S(""),c=()=>s.value==="vertical",f=()=>s.value==="horizontal",l=()=>{n.value=0,a.value=0,i.value=0,o.value=0,s.value=""};return{move:w=>{const m=w.touches[0];n.value=(m.clientX<0?0:m.clientX)-e.value,a.value=m.clientY-t.value,i.value=Math.abs(n.value),o.value=Math.abs(a.value);const E=10;(!s.value||i.value<E&&o.value<E)&&(s.value=Hn(i.value,o.value))},start:w=>{l(),e.value=w.touches[0].clientX,t.value=w.touches[0].clientY},reset:l,startX:e,startY:t,deltaX:n,deltaY:a,offsetX:i,offsetY:o,direction:s,isVertical:c,isHorizontal:f}}let de=0;const Je="van-overflow-hidden";function Nn(e,t){const n=Me(),a="01",i="10",o=d=>{n.move(d);const y=n.deltaY.value>0?i:a,w=tn(d.target,e.value),{scrollHeight:m,offsetHeight:E,scrollTop:v}=w;let h="11";v===0?h=E>=m?"00":"01":v+E>=m&&(h="10"),h!=="11"&&n.isVertical()&&!(parseInt(h,2)&parseInt(y,2))&&ve(d,!0)},s=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",o,{passive:!1}),de||document.body.classList.add(Je),de++},c=()=>{de&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",o),de--,de||document.body.classList.remove(Je))},f=()=>t()&&s(),l=()=>t()&&c();st(f),$e(l),Fe(l),O(t,d=>{d?s():c()})}function bt(e){const t=S(!1);return O(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const[Yn,Mn]=U("overlay"),Xn={show:Boolean,zIndex:D,duration:D,className:Se,lockScroll:T,lazyRender:T,customStyle:Object};var Un=X({name:Yn,props:Xn,setup(e,{slots:t}){const n=S(),a=bt(()=>e.show||!e.lazyRender),i=s=>{e.lockScroll&&ve(s,!0)},o=a(()=>{var s;const c=ce(cn(e.zIndex),e.customStyle);return Q(e.duration)&&(c.animationDuration=`${e.duration}s`),He(u("div",{ref:n,style:c,class:[Mn(),e.className]},[(s=t.default)==null?void 0:s.call(t)]),[[it,e.show]])});return De("touchmove",i,{target:n}),()=>u(at,{name:"van-fade",appear:!0},{default:o})}});const Zn=K(Un),Wn=ce({},Fn,{round:Boolean,position:M("center"),closeIcon:M("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:M("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[jn,et]=U("popup");var Vn=X({name:jn,inheritAttrs:!1,props:Wn,emits:["open","close","opened","closed","keydown","update:show","click-overlay","click-close-icon"],setup(e,{emit:t,attrs:n,slots:a}){let i,o;const s=S(),c=S(),f=bt(()=>e.show||!e.lazyRender),l=p(()=>{const _={zIndex:s.value};if(Q(e.duration)){const z=e.position==="center"?"animationDuration":"transitionDuration";_[z]=`${e.duration}s`}return _}),d=()=>{i||(i=!0,s.value=e.zIndex!==void 0?+e.zIndex:En(),t("open"))},y=()=>{i&&mt(e.beforeClose,{done(){i=!1,t("close"),t("update:show",!1)}})},w=_=>{t("click-overlay",_),e.closeOnClickOverlay&&y()},m=()=>{if(e.overlay)return u(Zn,{show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:w},{default:a["overlay-content"]})},E=_=>{t("click-close-icon",_),y()},v=()=>{if(e.closeable)return u(Ye,{role:"button",tabindex:0,name:e.closeIcon,class:[et("close-icon",e.closeIconPosition),vt],classPrefix:e.iconPrefix,onClick:E},null)},h=()=>t("opened"),$=()=>t("closed"),L=_=>t("keydown",_),j=f(()=>{var _;const{round:z,position:F,safeAreaInsetTop:r,safeAreaInsetBottom:b}=e;return He(u("div",se({ref:c,style:l.value,role:"dialog",tabindex:0,class:[et({round:z,[F]:F}),{"van-safe-area-top":r,"van-safe-area-bottom":b}],onKeydown:L},n),[(_=a.default)==null?void 0:_.call(a),v()]),[[it,e.show]])}),k=()=>{const{position:_,transition:z,transitionAppear:F}=e,r=_==="center"?"van-fade":`van-popup-slide-${_}`;return u(at,{name:z||r,appear:F,onAfterEnter:h,onAfterLeave:$},{default:j})};return O(()=>e.show,_=>{_&&!i&&(d(),n.tabindex===0&&le(()=>{var z;(z=c.value)==null||z.focus()})),!_&&i&&(i=!1,t("close"))}),ge({popupRef:c}),Nn(c,()=>e.show&&e.lockScroll),De("popstate",()=>{e.closeOnPopstate&&(y(),o=!1)}),me(()=>{e.show&&d()}),Ae(()=>{o&&(t("update:show",!0),o=!1)}),$e(()=>{e.show&&e.teleport&&(y(),o=!0)}),Re(ht,()=>e.show),()=>e.teleport?u($t,{to:e.teleport},{default:()=>[m(),k()]}):u(Te,null,[m(),k()])}});const qn=K(Vn);function Kn(){const e=q({show:!1}),t=i=>{e.show=i},n=i=>{ce(e,i,{transitionAppear:!0}),t(!0)},a=()=>t(!1);return ge({open:n,close:a,toggle:t}),{open:n,close:a,state:e,toggle:t}}function Gn(e){const t=Pt(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const[Qn,ae]=U("image"),Jn={src:String,alt:String,fit:String,position:String,round:Boolean,width:D,height:D,radius:D,lazyLoad:Boolean,iconSize:D,showError:T,errorIcon:M("photo-fail"),iconPrefix:String,showLoading:T,loadingIcon:M("photo")};var eo=X({name:Qn,props:Jn,emits:["load","error"],setup(e,{emit:t,slots:n}){const a=S(!1),i=S(!0),o=S(),{$Lazyload:s}=Pe().proxy,c=p(()=>{const v={width:Y(e.width),height:Y(e.height)};return Q(e.radius)&&(v.overflow="hidden",v.borderRadius=Y(e.radius)),v});O(()=>e.src,()=>{a.value=!1,i.value=!0});const f=v=>{i.value=!1,t("load",v)},l=v=>{a.value=!0,i.value=!1,t("error",v)},d=(v,h,$)=>$?$():u(Ye,{name:v,size:e.iconSize,class:h,classPrefix:e.iconPrefix},null),y=()=>{if(i.value&&e.showLoading)return u("div",{class:ae("loading")},[d(e.loadingIcon,ae("loading-icon"),n.loading)]);if(a.value&&e.showError)return u("div",{class:ae("error")},[d(e.errorIcon,ae("error-icon"),n.error)])},w=()=>{if(a.value||!e.src)return;const v={alt:e.alt,class:ae("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?He(u("img",se({ref:o},v),null),[[Dt("lazy"),e.src]]):u("img",se({src:e.src,onLoad:f,onError:l},v),null)},m=({el:v})=>{const h=()=>{v===o.value&&i.value&&f()};o.value?h():le(h)},E=({el:v})=>{v===o.value&&!a.value&&l()};return s&&Ne&&(s.$on("loaded",m),s.$on("error",E),Fe(()=>{s.$off("loaded",m),s.$off("error",E)})),()=>{var v;return u("div",{class:ae({round:e.round}),style:c.value},[w(),y(),(v=n.default)==null?void 0:v.call(n)])}}});const to=K(eo),[xt,Ee]=U("swipe"),no={loop:T,width:D,height:D,vertical:Boolean,autoplay:te(0),duration:te(500),touchable:T,lazyRender:Boolean,initialSwipe:te(0),indicatorColor:String,showIndicators:T,stopPropagation:T},_t=Symbol(xt);var oo=X({name:xt,props:no,emits:["change"],setup(e,{emit:t,slots:n}){const a=S(),i=S(),o=q({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),s=Me(),{children:c,linkChildren:f}=Kt(_t),l=p(()=>c.length),d=p(()=>o[e.vertical?"height":"width"]),y=p(()=>e.vertical?s.deltaY.value:s.deltaX.value),w=p(()=>o.rect?(e.vertical?o.rect.height:o.rect.width)-d.value*l.value:0),m=p(()=>Math.ceil(Math.abs(w.value)/d.value)),E=p(()=>l.value*d.value),v=p(()=>(o.active+l.value)%l.value),h=p(()=>{const g=e.vertical?"vertical":"horizontal";return s.direction.value===g}),$=p(()=>{const g={transitionDuration:`${o.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${o.offset}px)`};if(d.value){const P=e.vertical?"height":"width",I=e.vertical?"width":"height";g[P]=`${E.value}px`,g[I]=e[I]?`${e[I]}px`:""}return g}),L=g=>{const{active:P}=o;return g?e.loop?G(P+g,-1,l.value):G(P+g,0,m.value):P},j=(g,P=0)=>{let I=g*d.value;e.loop||(I=Math.min(I,-w.value));let N=P-I;return e.loop||(N=G(N,w.value,0)),N},k=({pace:g=0,offset:P=0,emitChange:I})=>{if(l.value<=1)return;const{active:N}=o,R=L(g),ue=j(R,P);if(e.loop){if(c[0]&&ue!==w.value){const Be=ue<w.value;c[0].setOffset(Be?E.value:0)}if(c[l.value-1]&&ue!==0){const Be=ue>0;c[l.value-1].setOffset(Be?-E.value:0)}}o.active=R,o.offset=ue,I&&R!==N&&t("change",v.value)},_=()=>{o.swiping=!0,o.active<=-1?k({pace:l.value}):o.active>=l.value&&k({pace:-l.value})},z=()=>{_(),s.reset(),xe(()=>{o.swiping=!1,k({pace:-1,emitChange:!0})})},F=()=>{_(),s.reset(),xe(()=>{o.swiping=!1,k({pace:1,emitChange:!0})})};let r;const b=()=>clearTimeout(r),C=()=>{b(),e.autoplay>0&&l.value>1&&(r=setTimeout(()=>{F(),C()},+e.autoplay))},B=(g=+e.initialSwipe)=>{if(!a.value)return;const P=()=>{var I,N;if(!Ve(a)){const R={width:a.value.offsetWidth,height:a.value.offsetHeight};o.rect=R,o.width=+((I=e.width)!=null?I:R.width),o.height=+((N=e.height)!=null?N:R.height)}l.value&&(g=Math.min(l.value-1,g)),o.active=g,o.swiping=!0,o.offset=j(g),c.forEach(R=>{R.setOffset(0)}),C()};Ve(a)?le().then(P):P()},H=()=>B(o.active);let Z;const ne=g=>{!e.touchable||(s.start(g),Z=Date.now(),b(),_())},oe=g=>{e.touchable&&o.swiping&&(s.move(g),h.value&&(!e.loop&&(o.active===0&&y.value>0||o.active===l.value-1&&y.value<0)||(ve(g,e.stopPropagation),k({offset:y.value}))))},re=()=>{if(!e.touchable||!o.swiping)return;const g=Date.now()-Z,P=y.value/g;if((Math.abs(P)>.25||Math.abs(y.value)>d.value/2)&&h.value){const N=e.vertical?s.offsetY.value:s.offsetX.value;let R=0;e.loop?R=N>0?y.value>0?-1:1:0:R=-Math[y.value>0?"ceil":"floor"](y.value/d.value),k({pace:R,emitChange:!0})}else y.value&&k({pace:0});o.swiping=!1,C()},ye=(g,P={})=>{_(),s.reset(),xe(()=>{let I;e.loop&&g===l.value?I=o.active===0?0:g:I=g%l.value,P.immediate?xe(()=>{o.swiping=!1}):o.swiping=!1,k({pace:I-o.active,emitChange:!0})})},V=(g,P)=>{const I=P===v.value,N=I?{backgroundColor:e.indicatorColor}:void 0;return u("i",{style:N,class:Ee("indicator",{active:I})},null)},Et=()=>{if(n.indicator)return n.indicator({active:v.value,total:l.value});if(e.showIndicators&&l.value>1)return u("div",{class:Ee("indicators",{vertical:e.vertical})},[Array(l.value).fill("").map(V)])};return ge({prev:z,next:F,state:o,resize:H,swipeTo:ye}),f({size:d,props:e,count:l,activeIndicator:v}),O(()=>e.initialSwipe,g=>B(+g)),O(l,()=>B(o.active)),O(()=>e.autoplay,C),O([rt,ut],H),O(nn(),g=>{g==="visible"?C():b()}),me(B),Ae(()=>B(o.active)),wn(()=>B(o.active)),$e(b),Fe(b),De("touchmove",oe,{target:i}),()=>{var g;return u("div",{ref:a,class:Ee()},[u("div",{ref:i,style:$.value,class:Ee("track",{vertical:e.vertical}),onTouchstartPassive:ne,onTouchend:re,onTouchcancel:re},[(g=n.default)==null?void 0:g.call(n)]),Et()])}}});const ao=K(oo),[io,so]=U("swipe-item");var lo=X({name:io,setup(e,{slots:t}){let n;const a=q({offset:0,inited:!1,mounted:!1}),{parent:i,index:o}=jt(_t);if(!i)return;const s=p(()=>{const l={},{vertical:d}=i.props;return i.size.value&&(l[d?"height":"width"]=`${i.size.value}px`),a.offset&&(l.transform=`translate${d?"Y":"X"}(${a.offset}px)`),l}),c=p(()=>{const{loop:l,lazyRender:d}=i.props;if(!d||n)return!0;if(!a.mounted)return!1;const y=i.activeIndicator.value,w=i.count.value-1,m=y===0&&l?w:y-1,E=y===w&&l?0:y+1;return n=o.value===y||o.value===m||o.value===E,n}),f=l=>{a.offset=l};return me(()=>{le(()=>{a.mounted=!0})}),ge({setOffset:f}),()=>{var l;return u("div",{class:so(),style:s.value},[c.value?(l=t.default)==null?void 0:l.call(t):null])}}});const co=K(lo),tt=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),nt=U("image-preview")[1];var ro=X({props:{src:String,show:Boolean,active:Number,minZoom:be(D),maxZoom:be(D),rootWidth:be(Number),rootHeight:be(Number)},emits:["scale","close"],setup(e,{emit:t}){const n=q({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),a=Me(),i=S(),o=p(()=>{const{rootWidth:r,rootHeight:b}=e,C=b/r;return n.imageRatio>C}),s=p(()=>{const{scale:r,moveX:b,moveY:C,moving:B,zooming:H}=n,Z={transitionDuration:H||B?"0s":".3s"};if(r!==1){const ne=b/r,oe=C/r;Z.transform=`scale(${r}, ${r}) translate(${ne}px, ${oe}px)`}return Z}),c=p(()=>{if(n.imageRatio){const{rootWidth:r,rootHeight:b}=e,C=o.value?b/n.imageRatio:r;return Math.max(0,(n.scale*C-r)/2)}return 0}),f=p(()=>{if(n.imageRatio){const{rootWidth:r,rootHeight:b}=e,C=o.value?b:r*n.imageRatio;return Math.max(0,(n.scale*C-b)/2)}return 0}),l=r=>{r=G(r,+e.minZoom,+e.maxZoom+1),r!==n.scale&&(n.scale=r,t("scale",{scale:r,index:e.active}))},d=()=>{l(1),n.moveX=0,n.moveY=0},y=()=>{const r=n.scale>1?1:2;l(r),n.moveX=0,n.moveY=0};let w,m,E,v,h,$,L;const j=r=>{const{touches:b}=r,{offsetX:C}=a;a.start(r),w=b.length,m=n.moveX,E=n.moveY,L=Date.now(),n.moving=w===1&&n.scale!==1,n.zooming=w===2&&!C.value,n.zooming&&(v=n.scale,h=tt(r.touches))},k=r=>{const{touches:b}=r;if(a.move(r),(n.moving||n.zooming)&&ve(r,!0),n.moving){const{deltaX:C,deltaY:B}=a,H=C.value+m,Z=B.value+E;n.moveX=G(H,-c.value,c.value),n.moveY=G(Z,-f.value,f.value)}if(n.zooming&&b.length===2){const C=tt(b),B=v*C/h;l(B)}},_=()=>{if(w>1)return;const{offsetX:r,offsetY:b}=a,C=Date.now()-L,B=250,H=5;r.value<H&&b.value<H&&C<B&&($?(clearTimeout($),$=null,y()):$=setTimeout(()=>{t("close"),$=null},B))},z=r=>{let b=!1;(n.moving||n.zooming)&&(b=!0,n.moving&&m===n.moveX&&E===n.moveY&&(b=!1),r.touches.length||(n.zooming&&(n.moveX=G(n.moveX,-c.value,c.value),n.moveY=G(n.moveY,-f.value,f.value),n.zooming=!1),n.moving=!1,m=0,E=0,v=1,n.scale<1&&d(),n.scale>e.maxZoom&&(n.scale=+e.maxZoom))),ve(r,b),_(),a.reset()},F=r=>{const{naturalWidth:b,naturalHeight:C}=r.target;n.imageRatio=C/b};return O(()=>e.active,d),O(()=>e.show,r=>{r||d()}),De("touchmove",k,{target:p(()=>{var r;return(r=i.value)==null?void 0:r.$el})}),()=>{const r={loading:()=>u(Rn,{type:"spinner"},null)};return u(co,{ref:i,class:nt("swipe-item"),onTouchstartPassive:j,onTouchend:z,onTouchcancel:z},{default:()=>[u(to,{src:e.src,fit:"contain",class:nt("image",{vertical:o.value}),style:s.value,onLoad:F},r)]})}}});const[uo,ie]=U("image-preview"),fo=["show","transition","overlayStyle","closeOnPopstate"],vo={show:Boolean,loop:T,images:Ut(),minZoom:te(1/3),maxZoom:te(3),overlay:T,closeable:Boolean,showIndex:T,className:Se,closeIcon:M("clear"),transition:String,beforeClose:Function,overlayClass:Se,overlayStyle:Object,swipeDuration:te(300),startPosition:te(0),showIndicators:Boolean,closeOnPopstate:T,closeIconPosition:M("top-right")};var Ct=X({name:uo,props:vo,emits:["scale","close","closed","change","update:show"],setup(e,{emit:t,slots:n}){const a=S(),i=q({active:0,rootWidth:0,rootHeight:0}),o=()=>{if(a.value){const h=Wt(a.value.$el);i.rootWidth=h.width,i.rootHeight=h.height,a.value.resize()}},s=h=>t("scale",h),c=h=>t("update:show",h),f=()=>{mt(e.beforeClose,{args:[i.active],done:()=>c(!1)})},l=h=>{h!==i.active&&(i.active=h,t("change",h))},d=()=>{if(e.showIndex)return u("div",{class:ie("index")},[n.index?n.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},y=()=>{if(n.cover)return u("div",{class:ie("cover")},[n.cover()])},w=()=>u(ao,{ref:a,lazyRender:!0,loop:e.loop,class:ie("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:l},{default:()=>[e.images.map(h=>u(ro,{src:h,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:s,onClose:f},null))]}),m=()=>{if(e.closeable)return u(Ye,{role:"button",name:e.closeIcon,class:[ie("close-icon",e.closeIconPosition),vt],onClick:f},null)},E=()=>t("closed"),v=(h,$)=>{var L;return(L=a.value)==null?void 0:L.swipeTo(h,$)};return ge({swipeTo:v}),me(o),O([rt,ut],o),O(()=>e.startPosition,h=>l(+h)),O(()=>e.show,h=>{const{images:$,startPosition:L}=e;h?(l(+L),le(()=>{o(),v(+L,{immediate:!0})})):t("close",{index:i.active,url:$[i.active]})}),()=>u(qn,se({class:[ie(),e.className],overlayClass:[ie("overlay"),e.overlayClass],onClosed:E,"onUpdate:show":c},Xt(e,fo)),{default:()=>[m(),w(),d(),y()]})}});let pe;const mo={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function ho(){({instance:pe}=Gn({setup(){const{state:e,toggle:t}=Kn(),n=()=>{e.images=[]};return()=>u(Ct,se(e,{onClosed:n,"onUpdate:show":t}),null)}}))}const Ie=(e,t=0)=>{if(!!Ne)return pe||ho(),e=Array.isArray(e)?{images:e,startPosition:t}:e,pe.open(ce({},mo,e)),pe};Ie.Component=K(Ct);Ie.install=e=>{e.use(Ie.Component)};const go={key:0,class:"loading"},yo={class:"detail-image"},wo={class:"image-content"},bo={class:"color"},xo={class:"container"},_o={class:"title"},Co={class:"date"},Eo={class:"greyscale-image"},po={class:"title"},So={class:"gaussian-image"},Io={class:"title"},$o={class:"hd-image"},Po={class:"title"},Do={class:"uhd-image"},Bo={class:"title"},Oo={key:0,class:"image-inner"},To=A("div",{class:"square-spinner"},null,-1),ko=[To],zo=["onClick"],Ao={class:"remark"},Lo=X({__name:"detail",setup(e){const t=Ot(),n=Rt(),a=Ft(),{t:i}=Ht(),o=q({id:Number(t.query.id),data:{},loading:!1,loadUHDImage:()=>{},loadingUHD:!1,showUHDOverlayer:!0,UHDLoadMap:{}}),s=()=>{o.id=Number(t.query.id),o.loadingUHD=!1,o.showUHDOverlayer=!o.UHDLoadMap[o.id]},c=()=>{const{id:w}=o;o.data=n.dataList.filter(m=>m.id===w)[0]||{},a.setBackBtnStatus(!0),o.data.id!==w&&(o.loading=!0,Tt({id:w}).then(m=>{o.data=m,o.loading=!1}),a.setBackBtnStatus(!1))};c();const f=()=>{o.loadingUHD=!0,o.loadUHDImage(),o.showUHDOverlayer=!1},l=w=>{o.loadUHDImage=w,o.UHDLoadMap[o.id]&&f()},d=()=>{o.UHDLoadMap[o.id]=!0,o.loadingUHD=!1};O(()=>t.query.id,w=>{!w||(s(),c())});const y=w=>{var m;Ie({images:[(m=o.data)==null?void 0:m.url[w]],showIndex:!1})};return(w,m)=>{var $,L,j,k,_,z,F,r,b,C,B,H,Z,ne,oe,re,ye;const E=Nt,v=kt("pmage"),h=Yt;return ee(),J(Te,null,[u(E),x(o).loading?(ee(),J("div",go,W(x(i)("notice.loading")),1)):we("",!0),x(o).loading?we("",!0):(ee(),J("div",{key:x(o).data.id,class:"h5-detail h5-content"},[A("div",yo,[u(v,{placeholder:($=x(o).data)==null?void 0:$.base64,src:(j=(L=x(o).data)==null?void 0:L.url)==null?void 0:j.hd,class:"image"},null,8,["placeholder","src"]),A("div",wo,[A("div",bo,[(ee(!0),J(Te,null,Bt(Object.keys(x(o).data.color),V=>(ee(),J("div",{key:V,class:zt({"color-item":!0,[V]:!0}),style:At({"background-color":x(o).data.color[V]})},null,6))),128))]),A("div",xo,[A("div",_o,W((k=x(o).data)==null?void 0:k.title),1),A("div",Co,W((_=x(o).data)==null?void 0:_.date)+" "+W((z=x(o).data)==null?void 0:z.copyright),1)])])]),A("div",Eo,[A("div",po,W(x(i)("detail.greyscale")),1),u(v,{placeholder:(F=x(o).data)==null?void 0:F.base64,src:(b=(r=x(o).data)==null?void 0:r.url)==null?void 0:b.greyscale,class:"image",onClick:m[0]||(m[0]=V=>y("greyscale"))},null,8,["placeholder","src"])]),A("div",So,[A("div",Io,W(x(i)("detail.gaussian")),1),u(v,{placeholder:(C=x(o).data)==null?void 0:C.base64,src:(H=(B=x(o).data)==null?void 0:B.url)==null?void 0:H.gaussian,class:"image",onClick:m[1]||(m[1]=V=>y("gaussian"))},null,8,["placeholder","src"])]),A("div",$o,[A("div",Po,W(x(i)("detail.hd")),1),u(v,{placeholder:(Z=x(o).data)==null?void 0:Z.base64,src:(oe=(ne=x(o).data)==null?void 0:ne.url)==null?void 0:oe.hd,class:"image",onClick:m[2]||(m[2]=V=>y("hd"))},null,8,["placeholder","src"])]),A("div",Do,[A("div",Bo,W(x(i)("detail.uhd")),1),u(v,{class:"image",placeholder:(re=x(o).data)==null?void 0:re.base64,src:(ye=x(o).data)==null?void 0:ye.url.uhd,onBeforeLoad:l,onOnload:d,onClick:m[3]||(m[3]=V=>y("uhd"))},{default:Xe(()=>[x(o).loadingUHD?(ee(),J("div",Oo,ko)):we("",!0)]),top:Xe(()=>[x(o).showUHDOverlayer?(ee(),J("div",{key:0,class:"overlayer",onClick:Lt(f,["self","stop"])},W(x(i)("detail.overlayer")),9,zo)):we("",!0)]),_:1},8,["placeholder","src"])]),A("div",Ao,W(x(i)("detail.remark.h5")),1),u(h)]))],64)}}});typeof Ue=="function"&&Ue(Lo);export{Lo as default};