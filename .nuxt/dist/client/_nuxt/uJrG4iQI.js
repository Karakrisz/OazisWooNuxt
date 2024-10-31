import{d as ne,O as le,s as re,x as de,N as ce,K as p,I as u,P as ie,J as ue,a7 as me,o as l,c as r,b as t,e as U,F as v,g as e,a as i,w as A,t as o,f as c,r as _e,_ as pe,j as he,a8 as fe,l as ge,$ as ye}from"./CVb3yudB.js";import{_ as xe,a as ve}from"./DQnMs7oG.js";import{u as be}from"./DKIXGy_I.js";const we={class:"w-full min-h-[600px] flex items-center p-8 text-gray-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16 flex-col"},ke={class:"w-full"},Ie={key:0,class:"flex items-center gap-4"},$e={class:"text-xl font-semibold"},je={class:"flex items-center justify-between w-full mb-2"},Te={class:"text-xl font-semibold"},Le=e("hr",{class:"my-8"},null,-1),Me={key:0,class:"flex-1 w-full"},Ce={class:"flex items-center justify-between"},De={class:"mb-2 text-xs text-gray-400 uppercase"},Pe={class:"leading-none"},Be={class:"mb-2 text-xs text-gray-400 uppercase"},Ne={class:"leading-none"},Oe={class:"mb-2 text-xs text-gray-400 uppercase"},Se={class:"mb-2 text-xs text-gray-400 uppercase"},Ee={class:"leading-none"},Re=e("hr",{class:"my-8"},null,-1),qe={class:"grid gap-2"},Fe={class:"flex-1 leading-tight"},Ge={class:"text-sm text-gray-600"},He={class:"text-sm font-semibold"},Ve=e("hr",{class:"my-8"},null,-1),ze={key:0},Ue=e("hr",{class:"my-8"},null,-1),Ae={class:"flex justify-between"},Je={class:"flex justify-between"},Ke={class:"flex justify-between"},Qe={key:0,class:"flex justify-between text-primary"},We=e("hr",{class:"my-8"},null,-1),Xe={class:"flex justify-between"},Ye={class:""},Ze={class:"font-semibold"},es={key:1,class:"flex flex-col items-center justify-center flex-1 w-full gap-4 text-center"},ss=e("h1",{class:"text-xl font-semibold"},"Error",-1),ts=["innerHTML"],os=2500,ds=ne({__name:"order-summary",setup(as){const{query:m,params:J,name:b}=le(),{customer:K}=re(),{formatDate:Q,formatPrice:W}=de(),{t:w}=ce(),a=p({}),X=p(m.fetch_delay==="true"),h=p(!1),_=p(""),Y=u(()=>{var s;return!((s=K.value)!=null&&s.databaseId)}),k=u(()=>b==="order-summary"),f=u(()=>b==="order-received"),g=u(()=>{var s;return((s=a.value)==null?void 0:s.status)!==fe.COMPLETED}),Z=u(()=>{var s;return!!parseFloat(((s=a.value)==null?void 0:s.rawDiscountTotal)||"0")}),I=u(()=>{var s,d;return((d=(s=a.value)==null?void 0:s.downloadableItems)==null?void 0:d.nodes)||[]});ie(()=>{f.value&&(m.cancel_order||m.from_paypal||m.PayerID)&&window.close()}),ue(async()=>{await y(),f.value&&X.value&&g.value&&setTimeout(()=>{y()},os)});async function y(){var s;try{const d=await me({id:J.orderId});d.order&&(a.value=d.order)}catch(d){_.value=((s=d==null?void 0:d.gqlErrors)==null?void 0:s[0].message)||"Could not find order"}h.value=!0}const ee=async()=>{h.value=!1,await y()};return be({title(){return k.value?w("messages.shop.orderSummary"):w("messages.shop.orderReceived")}}),(s,d)=>{const se=ge,x=pe,$=he,te=xe,oe=ye,ae=ve;return l(),r("div",we,[t(h)?(l(),r(v,{key:1},[e("div",ke,[t(k)?(l(),r("div",Ie,[i($,{to:"/my-account?tab=orders",class:"inline-flex items-center justify-center p-2 border rounded-md",title:"Back to orders","aria-label":"Back to orders"},{default:A(()=>[i(x,{name:"ion:chevron-back-outline"})]),_:1}),e("h1",$e,o(s.$t("messages.shop.orderSummary")),1)])):t(f)?(l(),r(v,{key:1},[e("div",je,[e("h1",Te,o(s.$t("messages.shop.orderReceived")),1),t(g)?(l(),r("button",{key:0,type:"button",class:"inline-flex items-center justify-center p-2 bg-white border rounded-md",title:"Refresh order","aria-label":"Refresh order",onClick:ee},[i(x,{name:"ion:refresh-outline"})])):c("",!0)]),e("p",null,o(s.$t("messages.shop.orderThanks")),1)],64)):c("",!0),Le]),t(a)&&!t(Y)?(l(),r("div",Me,[e("div",Ce,[e("div",null,[e("div",De,o(s.$t("messages.shop.order")),1),e("div",Pe,"#"+o(t(a).databaseId),1)]),e("div",null,[e("div",Be,o(s.$t("messages.general.date")),1),e("div",Ne,o(t(Q)(t(a).date)),1)]),e("div",null,[e("div",Oe,o(s.$t("messages.general.status")),1),i(te,{order:t(a)},null,8,["order"])]),e("div",null,[e("div",Se,o(s.$t("messages.general.paymentMethod")),1),e("div",Ee,o(t(a).paymentMethodTitle),1)])]),Re,e("div",qe,[t(a).lineItems?(l(!0),r(v,{key:0},_e(t(a).lineItems.nodes,n=>{var j,T,L,M;return l(),r("div",{key:n.id,class:"flex items-center justify-between gap-8"},[(j=n.product)!=null&&j.node?(l(),U($,{key:0,to:`/product/${n.product.node.slug}`},{default:A(()=>{var C,D,P,B,N,O,S,E,R,q,F,G,H,V,z;return[i(oe,{class:"w-16 h-16 rounded-xl",src:((P=(D=(C=n.variation)==null?void 0:C.node)==null?void 0:D.image)==null?void 0:P.sourceUrl)||((N=(B=n.product.node)==null?void 0:B.image)==null?void 0:N.sourceUrl)||"/images/placeholder.png",alt:((E=(S=(O=n.variation)==null?void 0:O.node)==null?void 0:S.image)==null?void 0:E.altText)||((q=(R=n.product.node)==null?void 0:R.image)==null?void 0:q.altText)||"Product image",title:((H=(G=(F=n.variation)==null?void 0:F.node)==null?void 0:G.image)==null?void 0:H.title)||((z=(V=n.product.node)==null?void 0:V.image)==null?void 0:z.title)||"Product image",width:"64",height:"64",loading:"lazy"},null,8,["src","alt","title"])]}),_:2},1032,["to"])):c("",!0),e("div",Fe,o(n.variation?(L=(T=n.variation)==null?void 0:T.node)==null?void 0:L.name:(M=n.product)==null?void 0:M.node.name),1),e("div",Ge,"Qty. "+o(n.quantity),1),e("span",He,o(t(W)(n.total)),1)])}),128)):c("",!0)]),Ve,t(I).length&&!t(g)?(l(),r("div",ze,[i(ae,{downloadableItems:t(I)},null,8,["downloadableItems"]),Ue])):c("",!0),e("div",null,[e("div",Ae,[e("span",null,o(s.$t("messages.shop.subtotal")),1),e("span",null,o(t(a).subtotal),1)]),e("div",Je,[e("span",null,o(s.$t("messages.general.tax")),1),e("span",null,o(t(a).totalTax),1)]),e("div",Ke,[e("span",null,o(s.$t("messages.general.shipping")),1),e("span",null,o(t(a).shippingTotal),1)]),t(Z)?(l(),r("div",Qe,[e("span",null,o(s.$t("messages.shop.discount")),1),e("span",null,"- "+o(t(a).discountTotal),1)])):c("",!0),We,e("div",Xe,[e("span",Ye,o(s.$t("messages.shop.total")),1),e("span",Ze,o(t(a).total),1)])])])):t(_)?(l(),r("div",es,[i(x,{name:"ion:sad-outline",size:"96",class:"text-gray-700"}),ss,t(_)?(l(),r("div",{key:0,class:"text-sm text-red-500",innerHTML:t(_)},null,8,ts)):c("",!0)])):c("",!0)],64)):(l(),U(se,{key:0,class:"flex-1"}))])}}});export{ds as default};