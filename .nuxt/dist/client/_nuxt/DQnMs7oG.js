import{d as _,I as i,o,c as n,t as a,b as m,E as f,D as h,x as g,g as s,F as b,r as w,e as x,w as k,h as y,f as p,j as $}from"./CVb3yudB.js";const v=_({__name:"orderStatusLabel",props:{order:{}},setup(d){const c=d,u=i(()=>{var t,r;return((r=(t=c.order)==null?void 0:t.status)==null?void 0:r.replace(/_/g," "))||""});return(t,r)=>{var l;return o(),n("span",{class:f([`order-${(l=t.order)==null?void 0:l.status}`,"order-status"])},a(m(u)),3)}}}),L=h(v,[["__scopeId","data-v-0773288d"]]),I={class:"w-full text-left table-auto","aria-label":"Download List"},D={class:"rounded-l-lg"},N={key:0},B=["href","download"],C=_({__name:"DownloadableItems",props:{downloadableItems:{type:Object,default:[]}},setup(d){const{formatDate:c}=g(),u=d;return(t,r)=>{const l=$;return o(),n("table",I,[s("thead",null,[s("tr",null,[s("th",null,a(t.$t("messages.general.product")),1),s("th",null,a(t.$t("messages.shop.downloadsRemaining")),1),s("th",null,a(t.$t("messages.shop.expires")),1),s("th",null,a(t.$t("messages.general.download")),1)])]),s("tbody",null,[(o(!0),n(b,null,w(u.downloadableItems,e=>(o(),n("tr",{key:e.id},[s("td",D,[e.product?(o(),x(l,{key:0,to:`/product/${e.product.slug}`,class:"hover:underline"},{default:k(()=>[y(a(e.product.name),1)]),_:2},1032,["to"])):p("",!0)]),s("td",null,a(e.downloadsRemaining||"∞"),1),s("td",null,a(e.accessExpires?m(c)(e.accessExpires):"Never"),1),e.url?(o(),n("td",N,[s("a",{href:e.url,download:e.name,class:"text-primary hover:text-primary-dark hover:underline"},a(e.name),9,B)])):p("",!0)]))),128))])])}}}),S=h(C,[["__scopeId","data-v-e1d90b2a"]]);export{L as _,S as a};
