import{_ as B,a as C,b as v,c as b,d as F}from"./D6uh4ZQD.js";import{d as $,ab as A,x as N,Z as O,O as V,n as q,J as D,U as E,m as G,b as t,o as s,c as H,e as c,f as o,g as m,a as l,p as R}from"./CVb3yudB.js";import"./IMQLDHXu.js";import"./CaQzSeT8.js";const S={key:0,class:"container flex items-start gap-16"},j={class:"w-full"},I={class:"flex items-center justify-between w-full gap-4 mt-8 md:gap-8"},z=$({__name:"[slug]",async setup(J){var d,_;let e,r;const{setProducts:p,updateProductList:i}=A(),{isQueryEmpty:f}=N(),{storeSettings:n}=O(),a=V(),g=a.params.slug,{data:h}=([e,r]=q(()=>R("getProducts",{slug:g})),e=await e,r(),e),u=((_=(d=h.value)==null?void 0:d.products)==null?void 0:_.nodes)||[];return p(u),D(()=>{f.value||i()}),E(()=>a.query,()=>{a.name==="product-category-slug"&&i()}),G({title:"Products",meta:[{hid:"description",name:"description",content:"Products"}]}),(L,M)=>{const y=v,w=B,x=b,P=F,k=C;return t(u).length?(s(),H("div",S,[t(n).showFilters?(s(),c(y,{key:0,"hide-categories":!0})):o("",!0),m("div",j,[m("div",I,[l(w),t(n).showOrderByDropdown?(s(),c(x,{key:0,class:"hidden md:inline-flex"})):o("",!0),t(n).showFilters?(s(),c(P,{key:1,class:"md:hidden"})):o("",!0)]),l(k)])])):o("",!0)}}});export{z as default};
