import{d as B,m as ot,x as de,O as Ae,ac as lt,o as s,e as T,w as q,a as k,h as U,t as m,b as e,f as h,I as O,c as o,g as t,F as H,r as j,H as Me,j as Re,K as C,U as Ue,$ as Le,D as Z,ad as W,M as rt,J as Be,E as D,u as Ne,N as it,l as qe,_ as ze,T as oe,Y as ct,i as le,B as V,L as Q,ae as ue,C as Y,af as ut,a3 as He,a4 as je,Z as Ee,n as dt,ag as mt,ah as pt,p as gt,ai as Oe}from"./CVb3yudB.js";import{_ as _t,a as me}from"./IMQLDHXu.js";import{_ as ht}from"./CaQzSeT8.js";import{u as vt}from"./BUpnhGW8.js";import{_ as ft}from"./CwbbPGBB.js";const yt=a=>{const r=Object.create(null);for(const i in a){const u=a[i];u!==void 0&&(r[i]=u)}return r},pe=(a,r)=>(i,u)=>(ot(()=>a({...yt(i),...u.attrs},u)),()=>{var c,_;return r?(_=(c=u.slots).default)==null?void 0:_.call(c):null}),Ve={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},bt=B({name:"Link",inheritAttrs:!1,props:{...Ve,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:pe(a=>({link:[a]}))}),$t=B({name:"Title",inheritAttrs:!1,setup:pe((a,{slots:r})=>{var i,u,c;return{title:((c=(u=(i=r.default)==null?void 0:i.call(r))==null?void 0:u[0])==null?void 0:c.children)||null}})}),xt=B({name:"Meta",inheritAttrs:!1,props:{...Ve,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:pe(a=>{const r={...a};return r.httpEquiv&&(r["http-equiv"]=r.httpEquiv,delete r.httpEquiv),{meta:[r]}})}),kt=B({name:"Head",inheritAttrs:!1,setup:(a,r)=>()=>{var i,u;return(u=(i=r.slots).default)==null?void 0:u.call(i)}});var wt={};const St=B({__name:"SEOHead",props:{info:{type:Object,required:!0}},setup(a){var M;const{frontEndUrl:r,wooNuxtSEO:i,isDev:u,stripHtml:c}=de(),{path:_}=Ae(),{info:p}=a,d=p.name,w=`${r}${_}`,v=wt.SITE_TITLE??"WooNuxt",y=lt(),S=u?"":r,n=((M=p.image)==null?void 0:M.sourceUrl)??"/images/placeholder.jpg",L=S+y.getSizes(n,{width:1200,height:630}).src,$=S+y.getSizes(n,{width:1600,height:900}).src,g=p.shortDescription||p.description?c(p.shortDescription):c(p.description),b=(i==null?void 0:i.find(x=>x.provider==="facebook"))??null,A=(i==null?void 0:i.find(x=>x.provider==="twitter"))??null;return(x,ee)=>{const se=$t,P=xt,re=bt,ie=kt;return s(),T(ie,null,{default:q(()=>{var I,N;return[k(se,null,{default:q(()=>[U(m(e(d)),1)]),_:1}),e(g)?(s(),T(P,{key:0,name:"description",hid:"description",content:e(g)},null,8,["content"])):h("",!0),k(P,{name:"image",hid:"image",content:L}),k(P,{property:"og:site_name",hid:"og:site_name",content:e(v)},null,8,["content"]),k(P,{property:"og:url",hid:"og:url",content:w}),a.info.name?(s(),T(P,{key:1,property:"og:title",hid:"og:title",content:a.info.name},null,8,["content"])):h("",!0),e(g)?(s(),T(P,{key:2,property:"og:description",hid:"og:description",content:e(g)},null,8,["content"])):h("",!0),k(P,{property:"og:image",hid:"og:image",content:L}),(I=e(b))!=null&&I.url?(s(),T(P,{key:3,property:"article:publisher",hid:"article:publisher",content:e(b).url},null,8,["content"])):h("",!0),k(P,{name:"twitter:card",hid:"twitter:card",content:"summary_large_image"}),(N=e(A))!=null&&N.handle?(s(),T(P,{key:4,name:"twitter:site",hid:"twitter:site",content:e(A).handle},null,8,["content"])):h("",!0),a.info.name?(s(),T(P,{key:5,name:"twitter:title",hid:"twitter:title",content:a.info.name},null,8,["content"])):h("",!0),e(g)?(s(),T(P,{key:6,name:"twitter:description",hid:"twitter:description",content:e(g)},null,8,["content"])):h("",!0),k(P,{name:"twitter:image",hid:"twitter:image",content:$}),k(P,{name:"twitter:url",hid:"twitter:url",content:w}),k(re,{rel:"canonical",hid:"canonical",href:w})]}),_:1})}}}),It={class:"flex text-sm leading-none text-gray-400 gap-1 items-center"},Tt=t("span",null," /",-1),Ct={key:1,class:"text-gray-800"},Pt={key:2},Ot=B({__name:"Breadcrumb",props:{product:{}},setup(a){var p;const r=Me(),{product:i}=a,u=((p=r==null?void 0:r.public)==null?void 0:p.PRODUCT_CATEGORY_PERMALINK)||"/product-category/",c=O(()=>{var d;return(d=i.productCategories)==null?void 0:d.nodes[0]}),_=O(()=>{var d,w;return[{name:"Products",slug:"/products"},{name:(d=c.value)==null?void 0:d.name,slug:`${String(u)}${(w=c.value)==null?void 0:w.slug}`},{name:i.name}]});return(d,w)=>{const v=Re;return s(),o("div",It,[t("span",null,[k(v,{to:"/",class:"hover:text-primary"},{default:q(()=>[U(m(d.$t("messages.general.home")),1)]),_:1}),Tt]),(s(!0),o(H,null,j(e(_),(y,S)=>(s(),o("span",{key:y.name||S},[y.slug?(s(),T(v,{key:0,to:decodeURIComponent(y.slug),class:"hover:text-primary"},{default:q(()=>[U(m(y.name),1)]),_:2},1032,["to"])):(s(),o("span",Ct,m(y.name),1)),S+1<e(_).length?(s(),o("span",Pt," /")):h("",!0)]))),128))])}}}),At={key:0,class:"my-4 gallery-images"},Mt=B({__name:"ProductImageGallery",props:{mainImage:{type:Object,required:!0},gallery:{type:Object,required:!0},node:{type:Object,required:!0},activeVariation:{type:Object,required:!1}},setup(a){const{fallbackImage:r}=de(),i=a,u=O(()=>({sourceUrl:i.mainImage.sourceUrl||r,title:i.mainImage.title,altText:i.mainImage.altText,databaseId:i.mainImage.databaseId})),c=C(u.value),_=O(()=>[u.value,...i.gallery.nodes].filter((d,w,v)=>w===v.findIndex(y=>(y==null?void 0:y.databaseId)===(d==null?void 0:d.databaseId)))),p=d=>{d&&(c.value=d)};return Ue(()=>i.activeVariation,d=>{if(d!=null&&d.image){const w=_.value.find(v=>{var y;return v.databaseId===((y=d.image)==null?void 0:y.databaseId)});w&&(c.value=w)}}),(d,w)=>{const v=_t,y=Le;return s(),o("div",null,[k(v,{node:a.node,class:"absolute text-base top-4 right-4"},null,8,["node"]),k(y,{class:"rounded-xl object-contain w-full min-w-[350px]",width:"640",height:"640",alt:e(c).altText||a.node.name,title:e(c).title||a.node.name,src:e(c).sourceUrl||e(r),sizes:"100vw lg:640px",fetchpriority:"high",placeholder:"","placeholder-class":"blur-xl"},null,8,["alt","title","src"]),a.gallery.nodes.length?(s(),o("div",At,[(s(!0),o(H,null,j(e(_),S=>(s(),T(y,{key:S.databaseId,class:"cursor-pointer rounded-xl",width:"640",height:"640",src:S.sourceUrl,alt:S.altText||a.node.name,title:S.title||a.node.name,sizes:"100vw lg:640px",placeholder:"","placeholder-class":"blur-xl",loading:"lazy",onClick:n=>p(S)},null,8,["src","alt","title","onClick"]))),128))])):h("",!0)])}}}),Rt=Z(Mt,[["__scopeId","data-v-fa2e6964"]]),Ut=B({__name:"WPAdminLink",props:{link:{}},setup(a){var _,p,d;const r=Me(),i=(d=(p=(_=r==null?void 0:r.public)==null?void 0:_["graphql-client"])==null?void 0:p.clients)==null?void 0:d.default,{link:u}=a,c=(i==null?void 0:i.host)??null;return c==null||c.replace("/graphql",""),u!=null&&u.startsWith("/wp-admin"),(w,v)=>null}}),Lt=Z(Ut,[["__scopeId","data-v-79cc94cd"]]),Bt={key:0,class:"text-green-600"},Nt={key:1,class:"text-red-600"},qt={key:2,class:"text-yellow-600"},zt={key:3,class:"text-gray-600"},Ht=B({__name:"StockStatus",props:{stockStatus:{type:String,required:!1}},setup(a){return(r,i)=>a.stockStatus===e(W).IN_STOCK?(s(),o("span",Bt,m(r.$t("messages.shop.inStock")),1)):a.stockStatus===e(W).OUT_OF_STOCK?(s(),o("span",Nt,m(r.$t("messages.shop.outOfStock")),1)):a.stockStatus===e(W).ON_BACKORDER?(s(),o("span",qt,m(r.$t("messages.shop.onBackorder")),1)):(s(),o("span",zt,"Loading"))}}),jt={class:"relative inline-block group"},Et={class:"absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-white text-sm rounded px-2 py-2 transition-opacity duration-300 whitespace-nowrap"},Vt=t("div",{class:"absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-8 border-transparent border-t-black border-t-opacity-80"},null,-1),Dt=B({__name:"Tooltip",props:{text:{type:String,required:!0}},setup(a){return(r,i)=>(s(),o("div",jt,[rt(r.$slots,"default"),t("div",Et,[U(m(a.text)+" ",1),Vt])]))}}),Ft={key:0,class:"flex flex-col gap-1 justify-between"},Wt={key:0,class:"grid gap-2"},Kt={class:"text-sm"},Gt={key:0,class:"text-gray-400"},Jt={class:"flex gap-2"},Yt=["for"],Qt=["id","checked","name","value"],Zt=["title"],Xt={key:1,class:"grid gap-2"},es={class:"text-sm"},ts={key:0,class:"text-gray-400"},ss=["id","name"],ns={disabled:"",hidden:""},as=["value","innerHTML","selected"],os={key:2,class:"grid gap-2"},ls={class:"text-sm"},rs={key:0,class:"text-gray-400"},is={class:"flex gap-2"},cs=["for"],us=["id","checked","name","value"],ds=["title"],ms=B({__name:"AttributeSelections",props:{attributes:{},defaultAttributes:{}},emits:["attrs-changed"],setup(a,{emit:r}){const{attributes:i,defaultAttributes:u}=a,c=r,_=C([]),p=O(()=>(v,y)=>v.terms.nodes.find(S=>S.slug===y.value).name),d=()=>{const v=i.map(y=>{const S=document.querySelector(`.name-${y.name}:checked`),n=document.querySelector(`#${y.name}`),L=y.name.charAt(0).toLowerCase()+y.name.slice(1),$=(S==null?void 0:S.value)??(n==null?void 0:n.value)??"";return{name:L,value:$}});_.value=v,c("attrs-changed",v)},w=()=>{u!=null&&u.nodes&&(u==null||u.nodes.forEach(v=>{const y=document.querySelector(`.name-${v.name}[value="${v.value}"]`);y&&(y.checked=!0);const S=document.querySelector(`#${v.name}`);S&&(S.value=v.value)}))};return Be(()=>{w(),d()}),(v,y)=>{const S=Dt;return v.attributes?(s(),o("div",Ft,[(s(!0),o(H,null,j(v.attributes,(n,L)=>{var $;return s(),o("div",{key:L,class:"flex flex-wrap py-2 relative justify-between"},[n.name=="pa_color"||n.name=="color"?(s(),o("div",Wt,[t("div",Kt,[U(m(v.$t("messages.general.color"))+" ",1),e(_).length?(s(),o("span",Gt,m(e(p)(n,e(_)[L])),1)):h("",!0)]),t("div",Jt,[(s(!0),o(H,null,j(n.terms.nodes,(g,b)=>(s(),o("span",{key:b},[k(S,{text:g.name},{default:q(()=>[t("label",{for:`${g.slug}_${b}`},[t("input",{id:`${g.slug}_${b}`,ref_for:!0,ref:n.name,class:D(["hidden",`name-${n.name}`]),checked:b==0,type:"radio",name:n.name,value:g.slug,onChange:d},null,42,Qt),t("span",{class:D(["color-button",`color-${g.slug}`]),title:`${n.name}: ${g}`},null,10,Zt)],8,Yt)]),_:2},1032,["text"])]))),128))])])):n.terms.nodes&&(($=n.terms.nodes)==null?void 0:$.length)>8?(s(),o("div",Xt,[t("div",es,[U(m(n.label)+" ",1),e(_).length?(s(),o("span",ts,m(e(p)(n,e(_)[L])),1)):h("",!0)]),t("select",{id:n.name,ref_for:!0,ref:n.name,name:n.name,required:"",class:"border-white shadow",onChange:d},[t("option",ns,m(v.$t("messages.general.choose"))+" "+m(decodeURIComponent(n.label)),1),(s(!0),o(H,null,j(n.terms.nodes,(g,b)=>(s(),o("option",{key:b,value:g.slug,innerHTML:g.name,selected:b==0},null,8,as))),128))],40,ss)])):(s(),o("div",os,[t("div",ls,[U(m(n.label)+" ",1),e(_).length?(s(),o("span",rs,": "+m(e(p)(n,e(_)[L])),1)):h("",!0)]),t("div",is,[(s(!0),o(H,null,j(n.terms.nodes,(g,b)=>(s(),o("span",{key:b},[t("label",{for:`${g.slug}_${b}`},[t("input",{id:`${g.slug}_${b}`,ref_for:!0,ref:n.name,class:D(["hidden",`name-${n.name}`]),checked:b==0,type:"radio",name:n.name,value:g.slug,onChange:d},null,42,us),t("span",{class:D(["radio-button",`picker-${g.slug}`]),title:`${n.name}: ${g.slug}`},m(g.name),11,ds)],8,cs)]))),128))])]))])}),128))])):h("",!0)}}}),ps=["disabled"],gs={__name:"AddToCartButton",props:{disabled:{type:Boolean,default:!1}},setup(a){const{cart:r}=Ne(),i=C(!1),{t:u}=it(),c=O(()=>i.value?u("messages.shop.adding"):u("messages.shop.addToCart"));return Ue(r,_=>{i.value=!1}),(_,p)=>{const d=qe;return s(),o("button",{type:"submit",class:D(["rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none",{disabled:a.disabled}]),disabled:a.disabled,onClick:p[0]||(p[0]=w=>i.value=!0)},[t("span",null,m(e(c)),1),e(i)?(s(),T(d,{key:0,stroke:"4",size:"12",color:"#fff"})):h("",!0)],10,ps)}}},_s=Z(gs,[["__scopeId","data-v-7b2c0bbf"]]),hs=B({__name:"WishlistButton",props:{product:{}},setup(a){const{addToWishlist:r,removeFromWishlist:i,isInList:u}=vt(),{product:c}=a,_=O(()=>c.databaseId?u(c.databaseId):!1),p=()=>_.value&&c.databaseId?i(c.databaseId):r(c);return(d,w)=>{const v=ze;return s(),o("button",{type:"button",class:"cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center",onClick:p},[e(_)?(s(),T(v,{key:0,name:"ion:heart",size:"18",class:"text-red-400"})):(s(),T(v,{key:1,name:"ion:heart-outline",size:"18"})),t("span",null,m(e(_)?d.$t("messages.shop.wishlistRemove"):d.$t("messages.shop.wishlistAdd")),1)])}}}),vs=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18"},[t("circle",{cx:"128",cy:"256",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"384",cy:"112",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("circle",{cx:"384",cy:"400",r:"48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"})],-1),fs={key:1,class:"flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"},ys=["href"],bs=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})],-1),$s=[bs],xs=["href"],ks=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z","fill-rule":"evenodd"})],-1),ws=[ks],Ss=["href"],Is=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"18",height:"18",fill:"currentColor"},[t("path",{d:"M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"})],-1),Ts=[Is],Cs=B({__name:"ShareButton",props:{product:{type:Object,required:!0}},setup(a){const r=a,i=C(!1),u=O(()=>`https://twitter.com/intent/tweet?text=${r.product.name}&url=${window.location.href}`),c=O(()=>`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`),_=O(()=>`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=${r.product.image.sourceUrl}&description=${r.product.name}`),p=()=>{i.value=!0};return(d,w)=>(s(),T(oe,{name:"fade",mode:"out-in"},{default:q(()=>[e(i)?(s(),o("div",fs,[t("a",{href:e(u),target:"_blank",title:"Share on Twitter"},$s,8,ys),t("a",{href:e(c),target:"_blank",title:"Share on Facebook"},ws,8,xs),t("a",{href:e(_),target:"_blank",title:"Share on Pinterest"},Ts,8,Ss)])):(s(),o("button",{key:0,type:"button",class:"flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer",onClick:p},[vs,t("span",null,m(d.$t("messages.general.share")),1)]))]),_:1}))}}),X=a=>(He("data-v-ba6de38c"),a=a(),je(),a),Ps={key:0,class:"font-semibold text-sm text-2xl text-gray-900"},Os={key:1,class:"font-semibold text-sm text-2xl text-gray-900"},As={key:2,class:"my-2"},Ms={class:"text-sm"},Rs={class:"my-4 bars"},Us={class:"flex text-sm gap-1 items-center"},Ls={class:"flex-1 relative"},Bs=X(()=>t("div",{class:"rounded-full bg-gray-200 h-2.5 w-full"},null,-1)),Ns=X(()=>t("div",{class:"mt-10 text-xl mb-2 text-gray-900"},"Share your thoughts",-1)),qs=X(()=>t("div",{class:"text-sm mb-4"},"If you have used this product, we would love to hear about your experience.",-1)),zs={class:"w-full text-gray-500"},Hs={class:"p-5 mt-3 grid gap-2 border rounded-lg"},js={class:"block text-center mb-1.5"},Es={class:"text-center text-sm block relative m-auto"},Vs=X(()=>t("span",{class:"text-red-500"},"*",-1)),Ds={class:"gap-1 flex justify-center mt-2 relative"},Fs=["onMouseover"],Ws=["value"],Ks={class:"w-full col-span-full"},Gs={for:"content",class:"text-sm mb-0.5"},Js=X(()=>t("span",{class:"text-red-500"},"*",-1)),Ys={class:"w-full col-span-full"},Qs={for:"author",class:"text-sm mb-0.5"},Zs=X(()=>t("span",{class:"text-red-500"},"*",-1)),Xs=["innerHTML"],en=["innerHTML"],tn={class:"w-full col-span-full text-center mt-3"},sn={class:"flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400",type:"submit"},nn={__name:"ReviewsScore",props:{reviews:{type:Object,default:null},productId:{type:Number,default:null},size:{type:Number,default:21}},setup(a){const r=a,i=O(()=>{const $=[0,0,0,0,0];r.reviews.edges.forEach(b=>{$[b.rating-1]+=1});const g=$.reduce((b,A)=>b+A,0);return $.map((b,A)=>{const M=b/g*100;return{count:b,percentage:M,rating:A+1}}).reverse()}),u=C(!1),c=C(0),_=C(null),p=C(null),d=C(null),w=C(""),v=C(""),y=C(!1);function S($){c.value=$}function n(){c.value=0}async function L(){var g;const $={commentOn:r.productId,author:d.value.split("@")[0],content:p.value,rating:_.value,authorEmail:d.value};try{y.value=!0,await ut($),v.value="Your review is awaiting approval",setTimeout(()=>{v.value="",u.value=!1},4e3)}catch(b){w.value=(g=b==null?void 0:b.gqlErrors)==null?void 0:g[0].message,setTimeout(()=>{w.value=""},5e3)}finally{y.value=!1}}return($,g)=>{const b=me,A=ze,M=qe;return s(),o("div",null,[a.reviews.edges.length?(s(),o("h4",Ps,m($.$t("messages.shop.customerReviews")),1)):(s(),o("h4",Os,m($.$t("messages.shop.noReviews")),1)),a.reviews.edges.length?(s(),o("div",As,[k(b,{rating:a.reviews.averageRating,"hide-count":!0,class:"text-sm mr-2"},null,8,["rating"]),t("span",Ms,m($.$t("messages.general.basedOn"))+" "+m(a.reviews.edges.length)+" "+m($.$t("messages.shop.reviews")),1)])):h("",!0),t("div",Rs,[(s(!0),o(H,null,j(e(i),x=>(s(),o("div",{key:x,class:"flex gap-4 items-center"},[t("div",Us,[U(m(x.rating)+" ",1),k(A,{class:"text-yellow-400",name:"ion:star"})]),t("div",Ls,[Bs,t("div",{class:"rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute",style:ct({width:x.percentage+"%"})},null,4)])]))),128))]),Ns,qs,t("button",{onClick:g[0]||(g[0]=x=>u.value=!e(u)),class:"border rounded-lg text-center w-full p-2"},m(e(u)?$.$t("messages.shop.close"):$.$t("messages.shop.writeReview")),1),k(oe,{class:"ease-in-out transform transition-all",name:"scale-y"},{default:q(()=>[e(u)?(s(),o("form",{key:0,onSubmit:le(L,["prevent"]),class:"writeReview"},[t("div",zs,[t("div",Hs,[t("div",js,[t("label",Es,[U(m($.$t("messages.shop.rateReview"))+" ",1),Vs]),t("div",Ds,[(s(),o(H,null,j(5,x=>t("label",{key:x,class:D(["grid p-1 rounded",e(_)<x&&x>e(c)?"disable-star":"checked-star"]),onMouseover:ee=>S(x),onMouseout:n},[V(t("input",{type:"radio",class:"overflow-hidden appearance-none opacity-0 absolute",name:"rating",value:x,"onUpdate:modelValue":g[1]||(g[1]=ee=>Q(_)?_.value=ee:null),required:""},null,8,Ws),[[ue,e(_)]]),k(A,{name:"ion:star",size:a.size+""},null,8,["size"])],42,Fs)),64))])]),t("div",Ks,[t("label",Gs,[U(m($.$t("messages.shop.rateContent"))+" ",1),Js]),V(t("textarea",{class:"w-full",id:"content",placeholder:"Great Quality","onUpdate:modelValue":g[2]||(g[2]=x=>Q(p)?p.value=x:null),required:""},null,512),[[Y,e(p)]])]),t("div",Ys,[t("label",Qs,[U(m($.$t("messages.shop.rateEmail"))+" ",1),Zs]),V(t("input",{class:"w-full",id:"author",placeholder:"example@example.com",type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","onUpdate:modelValue":g[3]||(g[3]=x=>Q(d)?d.value=x:null),required:""},null,512),[[Y,e(d)]])]),k(oe,{name:"scale-y",mode:"out-in"},{default:q(()=>[e(w)?(s(),o("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:e(w)},null,8,Xs)):h("",!0)]),_:1}),k(oe,{name:"scale-y",mode:"out-in"},{default:q(()=>[e(v)?(s(),o("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:e(v)},null,8,en)):h("",!0)]),_:1}),t("div",tn,[t("button",sn,[e(y)?(s(),T(M,{key:0,stroke:"4",size:"16",color:"#78350F"})):h("",!0),t("span",null,m($.$t("messages.shop.submit")),1)])])])])],32)):h("",!0)]),_:1})])}}},an=Z(nn,[["__scopeId","data-v-ba6de38c"]]),on={class:"flex flex-wrap gap-32 items-start"},ln={class:"flex max-w-sm gap-4 prose"},rn={key:0,class:"divide-y flex-1"},cn={class:"flex gap-4 items-center"},un=["src"],dn={class:"grid gap-1"},mn={class:"text-sm"},pn={class:"font-semibold"},gn={class:"italic text-gray-400"},_n=["innerHTML"],hn={__name:"ProductReviews",props:{product:{type:Object,default:null}},setup(a){return(r,i)=>{var _;const u=an,c=me;return s(),o("div",on,[t("div",ln,[a.product.reviews?(s(),T(u,{key:0,reviews:a.product.reviews,productId:a.product.databaseId},null,8,["reviews","productId"])):h("",!0)]),(_=a.product.reviews)!=null&&_.edges&&a.product.reviews.edges.length?(s(),o("div",rn,[(s(!0),o(H,null,j(a.product.reviews.edges,p=>(s(),o("div",{key:p.id,class:"my-2 py-8"},[t("div",cn,[p.node.author.node.avatar?(s(),o("img",{key:0,src:p.node.author.node.avatar.url,class:"rounded-full h-12 w-12"},null,8,un)):h("",!0),t("div",dn,[t("div",mn,[t("span",pn,m(p.node.author.node.name),1),t("span",gn," – "+m(new Date(p.node.date).toLocaleString(r.$t("messages.general.langCode"),{month:"long",day:"numeric",year:"numeric"})),1)]),k(c,{rating:p.rating,"hide-count":!0,class:"text-sm"},null,8,["rating"])])]),t("div",{class:"mt-4 text-gray-700 italic prose-sm",innerHTML:p.node.content},null,8,_n)]))),128))])):h("",!0)])}}},vn={class:"border-b flex gap-8 tabs"},fn={class:"tab-contents"},yn=["innerHTML"],bn=B({__name:"ProductTabs",props:{product:{type:Object,required:!0}},setup(a){const{product:r}=a,{storeSettings:i}=Ee(),u=r.description?0:1,c=C(u);return(_,p)=>{const d=hn;return s(),o("div",null,[t("nav",vn,[a.product.description?(s(),o("button",{key:0,type:"button",class:D(e(c)===0?"active":""),onClick:p[0]||(p[0]=le(w=>c.value=0,["prevent"]))},m(_.$t("messages.shop.productDescription")),3)):h("",!0),e(i).showReviews?(s(),o("button",{key:1,type:"button",class:D(e(c)===1?"active":""),onClick:p[1]||(p[1]=le(w=>c.value=1,["prevent"]))},m(_.$t("messages.shop.reviews"))+" ("+m(a.product.reviewCount)+")",3)):h("",!0)]),t("div",fn,[e(c)===0&&a.product.description?(s(),o("div",{key:0,class:"font-light mt-8 prose",innerHTML:a.product.description},null,8,yn)):h("",!0),e(c)===1?(s(),T(d,{key:1,product:a.product},null,8,["product"])):h("",!0)])])}}}),$n=Z(bn,[["__scopeId","data-v-b27dac84"]]),te=a=>(He("data-v-f2a11f0b"),a=a(),je(),a),xn={key:0,class:"container relative py-6 xl:max-w-7xl"},kn={class:"flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24"},wn={class:"lg:max-w-md xl:max-w-lg md:py-2 w-full"},Sn={class:"flex justify-between mb-4"},In={class:"flex-1"},Tn={class:"flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold"},Cn={key:0},Pn={key:1},On={style:{"background-color":"limegreen",height:"fit-content",padding:".5em"}},An={key:0,class:"grid gap-2 my-8 text-sm"},Mn={key:0,class:"flex items-center gap-2"},Rn=te(()=>t("label",{for:"ftype1"}," Készre varrás",-1)),Un=te(()=>t("label",{for:"ftype2"}," Méteráru",-1)),Ln={key:1,class:"flex items-center gap-2"},Bn={key:0},Nn={key:2,class:"flex items-center gap-2"},qn={class:"grid gap-2 my-8 text-sm"},zn={class:"flex items-center gap-2"},Hn={class:"text-gray-400"},jn={key:0,class:"flex items-center gap-2"},En={class:"text-gray-400"},Vn=["innerHTML"],Dn=te(()=>t("hr",null,null,-1)),Fn={class:"fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0"},Wn={key:1},Kn={class:"grid gap-2 my-8 text-sm"},Gn={class:"flex items-center gap-2"},Jn={class:"text-gray-400"},Yn={key:0,class:"product-categories"},Qn=te(()=>t("span",{class:"comma"},", ",-1)),Zn=te(()=>t("hr",null,null,-1)),Xn={class:"flex flex-wrap gap-4"},ea={key:1,class:"my-32"},ta={key:2,class:"my-32"},sa={class:"mb-4 text-xl font-semibold"},na=B({__name:"[slug]",props:{modelValue:{default:1},modelModifiers:{}},emits:["update:modelValue"],async setup(a){var he,ve,fe,ye,be,$e,xe,ke,we,Se,Ie,Te,Ce;let r,i;const u=Ae(),{storeSettings:c}=Ee(),{arraysEqual:_,formatArray:p,checkForVariationTypeOfAny:d}=de(),{addToCart:w,isUpdatingCart:v}=Ne(),y=u.params.slug,{data:S}=([r,i]=dt(()=>gt("getProduct",{slug:y})),r=await r,i(),r),n=C((he=S==null?void 0:S.value)==null?void 0:he.product),L=(fe=(ve=n.value.metaData)==null?void 0:ve.filter(l=>(l==null?void 0:l.key)=="szelesseg")[0])==null?void 0:fe.value,$=(be=(ye=n.value.metaData)==null?void 0:ye.filter(l=>(l==null?void 0:l.key)=="magassag")[0])==null?void 0:be.value,g=(xe=($e=n.value.metaData)==null?void 0:$e.filter(l=>(l==null?void 0:l.key)=="fuggony")[0])==null?void 0:xe.value,b=C(parseInt((we=(ke=n.value.metaData)==null?void 0:ke.filter(l=>(l==null?void 0:l.key)=="varras")[0])==null?void 0:we.value)),A=C(1),M=mt(a,"modelValue"),x=C(null),ee=C([]),se=C([]),P=C(),re=O(()=>{var l;return((l=n.value)==null?void 0:l.type)===Oe.SIMPLE}),ie=O(()=>{var l;return((l=n.value)==null?void 0:l.type)===Oe.VARIABLE}),I=O(()=>x.value||n.value),N=C(parseInt(L)||0),K=C(parseInt($)||0);g==1&&M==1&&((I==null?void 0:I.value.rawSalePrice)>0&&(I.value.salePrice=parseInt(I==null?void 0:I.value.rawSalePrice)+parseInt((Ie=(Se=n.value.metaData)==null?void 0:Se.filter(l=>(l==null?void 0:l.key)=="varras")[0])==null?void 0:Ie.value)+""),I.value.regularPrice=parseInt(I==null?void 0:I.value.rawRegularPrice)+parseInt((Ce=(Te=n.value.metaData)==null?void 0:Te.filter(l=>(l==null?void 0:l.key)=="varras")[0])==null?void 0:Ce.value)+"");const ne=O(()=>{var l,f;return{productId:(l=I.value)==null?void 0:l.databaseId,quantity:A.value,variationId:((f=x.value)==null?void 0:f.databaseId)??null,variation:x.value?P.value:null,extraData:JSON.stringify({width:N.value,height:K.value})}}),ge=l=>{var f,E,F;n.value.stockStatus=l.stockStatus??((f=n.value)==null?void 0:f.stockStatus),(F=(E=l.variations)==null?void 0:E.nodes)==null||F.forEach((G,z)=>{var J,ae;(ae=(J=n.value)==null?void 0:J.variations)!=null&&ae.nodes[z]&&(n.value.variations.nodes[z].stockStatus=G.stockStatus)})};Be(async()=>{var l;try{const{product:f}=await pt({slug:y});f&&ge(f)}catch(f){const E=(l=f==null?void 0:f.gqlErrors)==null?void 0:l[0].message;E&&console.error(E)}n.value.variations&&se.value.push(...d(n.value))});const De=l=>{var F,G;if(!n.value.variations)return;P.value=l.map(z=>({attributeName:z.name,attributeValue:z.value}));const f=JSON.parse(JSON.stringify(l)),E=(F=n.value.variations)==null?void 0:F.nodes.filter(z=>{if(z.attributes)return se.value.forEach(J=>f[J].value=""),_(p(z.attributes.nodes),p(f))});x.value=E[0],ne.value.variationId=((G=x.value)==null?void 0:G.databaseId)??null,ne.value.variation=x.value?P.value:null,ee.value=l},ce=O(()=>{var l,f;return ie.value?((l=x.value)==null?void 0:l.stockStatus)||W.OUT_OF_STOCK:((f=I.value)==null?void 0:f.stockStatus)||W.OUT_OF_STOCK}),Fe=O(()=>re.value?!I.value||ce.value===W.OUT_OF_STOCK||v.value:!I.value||ce.value===W.OUT_OF_STOCK||!x.value||v.value);function We(l){Number(l.target.value)>$&&(l.target.value=$);const f=Number(l.target.value);K.value=f}function Ke(l){Number(l.target.value)<L&&(l.target.value=L);const f=Number(l.target.value);N.value=f}function _e(l){M.value=l.target.value}async function Ge(){console.log(ne.value);const l={...ne.value};await w(l)}const Je=O(()=>b.value&&M.value===1?Number(I.value.rawSalePrice||I.value.rawRegularPrice)*Number(A.value)*Number(N.value/100)+Number(b.value)*Number(N.value)/100*Number(A.value):Number(I.value.rawSalePrice||I.value.rawRegularPrice)*Number(A.value));return(l,f)=>{var Pe;const E=St,F=Ot,G=Rt,z=Le,J=Lt,ae=me,Ye=ht,Qe=Ht,Ze=ms,Xe=_s,et=Re,tt=hs,st=Cs,nt=$n,at=ft;return e(n)?(s(),o("main",xn,[k(E,{info:e(n)},null,8,["info"]),e(c).showBreadcrumbOnSingleProduct?(s(),T(F,{key:0,product:e(n),class:"mb-6"},null,8,["product"])):h("",!0),t("div",kn,[e(n).image?(s(),T(G,{key:0,class:"relative flex-1","main-image":e(n).image,gallery:e(n).galleryImages,node:e(I),activeVariation:e(x)||{}},null,8,["main-image","gallery","node","activeVariation"])):(s(),T(z,{key:1,class:"relative flex-1 skeleton",src:"/images/placeholder.jpg",alt:((Pe=e(n))==null?void 0:Pe.name)||"Product"},null,8,["alt"])),t("div",wn,[t("div",Sn,[t("div",In,[t("h1",Tn,[U(m(e(I).name),1),e(g)?(s(),o("span",Cn," szélesség: "+m(e(N))+"cm,",1)):h("",!0),e(g)?(s(),o("span",Pn," magasság: "+m(e(K))+"cm",1)):h("",!0),k(J,{link:`/wp-admin/post.php?post=${e(n).databaseId}&action=edit`},{default:q(()=>[U("Edit")]),_:1},8,["link"])]),e(c).showReviews?(s(),T(ae,{key:0,rating:e(n).averageRating||0,count:e(n).reviewCount||0},null,8,["rating","count"])):h("",!0)]),k(Ye,{class:"text-xl","sale-price":e(I).salePrice,"regular-price":`${e(I).regularPrice} / 100cm`},null,8,["sale-price","regular-price"]),t("h3",On," Fizetendő: "+m(Intl.NumberFormat("hu-HU",{style:"currency",currency:"HUF",maximumFractionDigits:0,useGrouping:!0}).format(e(Je))),1)]),e(g)?(s(),o("div",An,[e(g)?(s(),o("div",Mn,[V(t("input",{type:"radio",id:"ftype1",name:"ftype","onUpdate:modelValue":f[0]||(f[0]=R=>M.value=R),value:1,onInput:_e},null,544),[[ue,M.value]]),Rn,V(t("input",{type:"radio",id:"ftype2",name:"ftype","onUpdate:modelValue":f[1]||(f[1]=R=>M.value=R),value:0,onInput:_e},null,544),[[ue,M.value]]),Un])):h("",!0),e(g)?(s(),o("div",Ln,[M.value===1?(s(),o("h3",Bn,"Varrás: "+m(e(b)/100)+" Ft/cm",1)):h("",!0)])):h("",!0),e(g)?(s(),o("div",Nn,[t("h3",null,[U("Szélesség (cm): "),V(t("input",{type:"number",name:"fwidth",onBlur:Ke,"onUpdate:modelValue":f[2]||(f[2]=R=>Q(N)?N.value=R:null)},null,544),[[Y,e(N)]])]),t("h3",null,[U("Magasság (cm): "),V(t("input",{type:"number",name:"fheight",onInput:We,"onUpdate:modelValue":f[3]||(f[3]=R=>Q(K)?K.value=R:null)},null,544),[[Y,e(K)]])])])):h("",!0)])):h("",!0),t("div",qn,[t("div",zn,[t("span",Hn,m(l.$t("messages.shop.availability"))+": ",1),k(Qe,{stockStatus:e(ce),onUpdated:ge},null,8,["stockStatus"])]),e(c).showSKU?(s(),o("div",jn,[t("span",En,m(l.$t("messages.shop.sku"))+": ",1),t("span",null,m(e(n).sku||"N/A"),1)])):h("",!0)]),t("div",{class:"mb-8 font-light prose",innerHTML:e(n).shortDescription||e(n).description},null,8,Vn),Dn,t("form",{onSubmit:f[6]||(f[6]=le(R=>Ge(),["prevent"]))},[V(t("input",{type:"hidden",id:"extra_product_field","onUpdate:modelValue":f[4]||(f[4]=R=>M.value=R)},null,512),[[Y,M.value]]),e(n).type=="VARIABLE"&&e(n).attributes&&e(n).variations?(s(),T(Ze,{key:0,class:"mt-4 mb-8",attributes:e(n).attributes.nodes,defaultAttributes:e(n).defaultAttributes,variations:e(n).variations.nodes,onAttrsChanged:De},null,8,["attributes","defaultAttributes","variations"])):h("",!0),t("div",Fn,[V(t("input",{"onUpdate:modelValue":f[5]||(f[5]=R=>Q(A)?A.value=R:null),type:"number",min:"1","aria-label":"Quantity",class:"bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"},null,512),[[Y,e(A)]]),k(Xe,{class:D(["flex-1 w-full md:max-w-xs",{loading:e(v)}]),disabled:e(Fe)},null,8,["disabled","class"])])],32),e(c).showProductCategoriesOnSingleProduct?(s(),o("div",Wn,[t("div",Kn,[t("div",Gn,[t("span",Jn,m(l.$t("messages.shop.category",2))+":",1),e(n).productCategories?(s(),o("div",Yn,[(s(!0),o(H,null,j(e(n).productCategories.nodes,R=>(s(),T(et,{key:R.slug,to:`/product-category/${decodeURIComponent(R.slug)}`,class:"hover:text-primary",title:R.name},{default:q(()=>[U(m(R.name),1),Qn]),_:2},1032,["to","title"]))),128))])):h("",!0)])]),Zn])):h("",!0),t("div",Xn,[k(tt,{product:e(n)},null,8,["product"]),k(st,{product:e(n)},null,8,["product"])])])]),e(n).description||e(n).reviews?(s(),o("div",ea,[k(nt,{product:e(n)},null,8,["product"])])):h("",!0),e(n).related&&e(c).showRelatedProducts?(s(),o("div",ta,[t("div",sa,m(l.$t("messages.shop.youMayLike")),1),k(at,{products:e(n).related.nodes,class:"grid-cols-2 md:grid-cols-4 lg:grid-cols-5"},null,8,["products"])])):h("",!0)])):h("",!0)}}}),ca=Z(na,[["__scopeId","data-v-f2a11f0b"]]);export{ca as default};
