import{d as T,i as Y,j as b,k as B,a as V,e as i,g as p,f as c,l as o,t,m as _,w as L,F as w,u as F,o as l,n as I,p as N,q as j}from"./index.30f889a0.js";import{u as z,a as H,b as R,d as h}from"./bing.2ee70796.js";import{_ as $,a as q}from"./h5-header.4772423d.js";import{_ as A}from"./image-list.vue_vue_type_script_setup_true_lang.cdbe68f7.js";import{b as k}from"./route-block.6a611cbf.js";import"./_plugin-vue_export-helper.cdc0426e.js";const E={key:0,class:"is-refreshing-text"},G={class:"image-list-content"},J={class:"title"},K={key:2,class:"is-loading-more-text"},O={key:3,class:"is-no-more-text"},P=T({__name:"index",setup(Q){const{isDark:f}=j(),s=z(),{t:n}=H(),v=F(),y=R(),g=Y({scrollTop:0});b(()=>{S(),y.setBackBtnStatus(!1)}),B((r,m,u)=>{M(),u()});const d=r=>h(r).format("YYYY-MM-DD")===h().format("YYYY-MM-DD"),x=r=>{v.push(`/h5/detail?id=${r.id}`)},a=V(),M=()=>{g.scrollTop=a.value?a.value.scrollTop:0},S=()=>{a.value.scrollTop=g.scrollTop};return(r,m)=>{const u=$,C=A,D=q;return l(),i(w,null,[p(u),c("div",{ref_key:"h5Content",ref:a,class:"h5-index h5-content"},[o(s).refreshing?(l(),i("div",E,t(o(n)("notice.refreshing")),1)):_("",!0),p(C,{"show-info-text":!1,"auto-load":3,onClickImage:x},{content:L(({data:e})=>[c("div",G,[c("div",J,[c("span",{style:I({"background-color":e.color[o(f)?"LightVibrant":"DarkVibrant"],color:o(f)?"#000":"#fff"}),class:N({date:!0,today:d(e==null?void 0:e.date)})},t(d(e==null?void 0:e.date)?o(n)("index.today"):e==null?void 0:e.date),7),c("span",null,t((e==null?void 0:e.title)||(e==null?void 0:e.copyright)),1)])])]),_:1}),!o(s).loadingMore&&!o(s).noMore?(l(),i("div",{key:1,class:"load-more-btn",onClick:m[0]||(m[0]=(...e)=>o(s).loadMore&&o(s).loadMore(...e))},t(o(n)("notice.more")),1)):_("",!0),o(s).loadingMore?(l(),i("div",K,t(o(n)("notice.loadingMore")),1)):_("",!0),o(s).noMore?(l(),i("div",O,t(o(n)("notice.noMore")),1)):_("",!0),p(D)],512)],64)}}});typeof k=="function"&&k(P);export{P as default};