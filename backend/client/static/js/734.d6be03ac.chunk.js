"use strict";(self.webpackChunkcredot_mechine_test=self.webpackChunkcredot_mechine_test||[]).push([[734],{581:(e,s,i)=>{i.d(s,{$n:()=>n,Ay:()=>c,ey:()=>t});i(43);var a=i(579);const t=e=>{let{count:s=0,setCount:i,...t}=e;return(0,a.jsx)("div",{...t,children:(0,a.jsxs)("div",{style:{display:"flex",height:"100%",border:"1px solid #E2E2E2",width:"100%",justifyContent:"center"},children:[(0,a.jsx)("button",{className:"count-button",onClick:()=>{i(s-1)},style:{border:"none",width:"100%",display:"flex",cursor:"pointer",outline:"none",backgroundColor:"transparent"},children:(0,a.jsx)("img",{style:{margin:"auto"},src:"/assets/icons/minus.svg",alt:""})}),(0,a.jsx)("div",{className:"count",style:{display:"flex",justifyContent:"center",width:"100%",alignItems:"center",border:"solid #E2E2E2",borderWidth:"0px 1px 0px 1px",padding:"0px 10px 0px 10px"},children:s}),(0,a.jsx)("button",{className:"count-button",onClick:()=>{i(s+1)},style:{border:"none",display:"flex",width:"100%",cursor:"pointer",outline:"none",backgroundColor:"transparent"},children:(0,a.jsx)("img",{style:{margin:"auto"},src:"/assets/icons/plus.svg",alt:""})})]})})},n=e=>{let{icon:s,...i}=e;return(0,a.jsx)("button",{...i,children:(0,a.jsxs)("div",{style:{margin:"auto",display:"flex",height:"fit-content",width:"fit-content",justifyContent:"center"},children:[i.children," ",s]})})},c=n},734:(e,s,i)=>{i.r(s),i.d(s,{default:()=>v});var a=i(43),t=i(581),n=i(216);var c=i(569),l=i(211),r=i(148),d=i(511),o=i(353),m=i(801),u=i(579);const v=()=>{var e,s,i,v,h,p,x;const j=new URLSearchParams((0,n.zy)().search),g=(0,r.j)(),{auth:N}=(0,r.G)((e=>e.auth)),{cart:y}=(0,r.G)((e=>e.cart)),C=(0,n.Zp)(),f=j.get("id")||"",{error:b,data:w,loading:k}=(0,r.G)((e=>e.product)),[P,I]=(0,a.useState)("red"),[B,E]=(0,a.useState)("256 GB"),[S,_]=(0,a.useState)(0),[G,R]=(0,a.useState)(1);(0,a.useEffect)((()=>{const e={pathParams:{productId:f}};g((0,l.DY)(e))}),[f]),(0,a.useEffect)((()=>{w&&w.length>0&&_(0)}),[w]);return k?(0,u.jsx)("div",{children:"loading..."}):(0,u.jsx)("div",{children:w&&w.length>0&&(0,u.jsx)("div",{className:"product-specific",children:(0,u.jsxs)("div",{className:"product-specific-container",children:[(0,u.jsxs)("div",{className:"varient-deatils",children:[(0,u.jsxs)("div",{className:"image-section",children:[(0,u.jsx)("div",{className:"selected-image-container",children:(0,u.jsx)("img",{className:"image",src:null!==(e=w[0])&&void 0!==e&&e.images[S]?"".concat(m.JR).concat(null===(s=w[0])||void 0===s?void 0:s.images[S]):"/assets/images/image-placeholder.jpg",alt:"selected-image"})}),(0,u.jsx)("div",{className:"multiple-image-container",children:w[0].images.map(((e,s)=>(0,u.jsx)("div",{className:"image-wrapper ".concat(s===S?"selected":""),onClick:()=>{_(s)},children:(0,u.jsx)("img",{className:"image",src:e?"".concat(m.JR).concat(e):"/assets/images/image-placeholder.jpg",alt:"image-".concat(s)})})))})]}),(0,u.jsxs)("div",{className:"title-section",children:[(0,u.jsx)("p",{className:"title",children:w[0].name}),(0,u.jsxs)("div",{className:"rating",children:[(0,u.jsx)("img",{className:"image",src:"/assets/images/rating.png",alt:"rating"}),"( There are no reviews yet )"]}),(0,u.jsxs)("p",{className:"price",children:[(0,u.jsx)("span",{className:"inr",children:"INR"}),(0,u.jsx)("span",{className:"price",children:(0,d.u)(null===(i=w[0])||void 0===i?void 0:i.discountedPrice)}),(0,u.jsx)("span",{className:"actual",children:(0,d.u)(null===(v=w[0])||void 0===v?void 0:v.actualPrice)})]}),(0,u.jsxs)("p",{className:"description",children:[null===(h=w[0])||void 0===h?void 0:h.description," "]}),(0,u.jsxs)("div",{className:"color-varients",children:[(0,u.jsxs)("p",{className:"title",children:["Colour: ",(0,u.jsx)("span",{children:(0,o.v7)(P)})]}),(0,u.jsx)("div",{className:"varients",children:["black","red","green","grey","blue"].map(((e,s)=>(0,u.jsx)("div",{className:"".concat(e,"  pointer ").concat(e==P?"active":""),style:{display:"flex",position:"relative"},onClick:()=>{I(e)},children:(0,u.jsx)("svg",{width:"19",style:{display:e==P?"block":"none",margin:"auto"},height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.029 5.13477C15.895 5.13554 15.7653 5.18158 15.6608 5.26539L6.65483 12.2135L3.43552 8.23177C3.38786 8.16756 3.32773 8.11363 3.25872 8.07323C3.18971 8.03283 3.11326 8.00679 3.03394 7.99666C2.95462 7.98653 2.87407 7.99253 2.79712 8.0143C2.72018 8.03607 2.64842 8.07315 2.58616 8.12333C2.5239 8.1735 2.47242 8.23574 2.4348 8.3063C2.39718 8.37686 2.3742 8.4543 2.36724 8.53396C2.36028 8.61362 2.36949 8.69386 2.3943 8.76988C2.41911 8.8459 2.45903 8.91612 2.51165 8.97633L6.45889 13.8653L16.3888 6.2047C16.4887 6.12975 16.5625 6.02519 16.5995 5.90589C16.6366 5.78659 16.6351 5.65864 16.5952 5.54025C16.5554 5.42185 16.4792 5.31904 16.3775 5.24646C16.2759 5.17387 16.1539 5.13401 16.029 5.13477Z",fill:"white"})})},s)))})]}),(0,u.jsxs)("div",{className:"internal-memory",children:[(0,u.jsx)("p",{className:"title",children:"Internal Memory"}),(0,u.jsx)("div",{className:"varients",children:["128 GB","256 GB","512 GB","1 TB"].map(((e,s)=>(0,u.jsx)("div",{className:"memory ".concat(e==B?"active":""),onClick:()=>{E(e)},children:e},s)))})]}),(0,u.jsxs)("div",{className:"addtocart-container",children:[(0,u.jsx)("div",{className:"horizontal-seperator"}),(0,u.jsxs)("div",{className:"add-to-cart",children:[(0,u.jsx)(t.ey,{className:"quantity-button",count:G,setCount:R}),(0,u.jsx)(t.$n,{className:"add-to-cart-button",onClick:()=>{let e=y,s=e.filter((e=>e.productId!==w[0]._id)),i=e.filter((e=>e.productId===w[0]._id));var a,t,n,l,r,d;i.length>0?g((0,c.Bo)([...s,{image:null===(a=w[0])||void 0===a?void 0:a.images[0],productId:w[0]._id,name:w[0].name,price:null===(t=w[0])||void 0===t?void 0:t.discountedPrice,quantity:i[0].quantity+G,varients:{color:P,memory:B},totalPrice:Math.round(G*(null===(n=w[0])||void 0===n?void 0:n.discountedPrice)*100)/100}])):g((0,c.Bo)([...y,{image:null===(l=w[0])||void 0===l?void 0:l.images[0],productId:w[0]._id,name:w[0].name,price:null===(r=w[0])||void 0===r?void 0:r.discountedPrice,quantity:G,varients:{color:P,memory:B},totalPrice:Math.round(G*(null===(d=w[0])||void 0===d?void 0:d.discountedPrice)*100)/100}]));C("/".concat(null===N||void 0===N?void 0:N.user,"/cart"))},children:"ADD TO CART"})]}),(0,u.jsx)("div",{className:"horizontal-seperator"})]})]})]}),(0,u.jsxs)("div",{className:"specific-deatils",children:[(0,u.jsxs)("div",{className:"nav-bar",children:[(0,u.jsx)("div",{className:"nav",children:"Overview"}),(0,u.jsx)("div",{className:"nav active",children:"Specifications"})]}),(0,u.jsx)("div",{className:"horizontal-seperator"}),(0,u.jsx)("div",{className:"points",children:(0,u.jsx)("ul",{className:"list",children:w.length>0&&(null===(p=w[0])||void 0===p||null===(x=p.Specifications)||void 0===x?void 0:x.map(((e,s)=>(0,u.jsx)("li",{children:e},s))))})})]})]})})})}},511:(e,s,i)=>{i.d(s,{u:()=>a});const a=e=>new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}}]);
//# sourceMappingURL=734.d6be03ac.chunk.js.map