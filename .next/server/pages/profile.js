(()=>{var e={};e.id=63,e.ids=[63,220],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7333:e=>{e.exports={profileContainer:"Profile_profileContainer__idtO_",profileContent:"Profile_profileContent__i0F9n",photoSection:"Profile_photoSection__TrKeG",profilePhoto:"Profile_profilePhoto__RYYP5",fileInput:"Profile_fileInput__a6JPu",infoSection:"Profile_infoSection__lvpCb",inputField:"Profile_inputField__FKpLZ",selectField:"Profile_selectField__0PoYW",saveButton:"Profile_saveButton__dtuf4"}},3999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>m,default:()=>g,getServerSideProps:()=>h,getStaticPaths:()=>S,getStaticProps:()=>v,reportWebVitals:()=>b,routeModule:()=>y,unstable_getServerProps:()=>M,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>A,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>x});var i={};r.r(i),r.d(i,{default:()=>_});var o=r(3865),n=r(9455),a=r(671),s=r(781),l=r.n(s),u=r(3645),c=r.n(u),p=r(8732),f=r(2015),d=r(7333),P=r.n(d);let _=()=>{let[e,t]=(0,f.useState)("Nome Utente"),[r,i]=(0,f.useState)("Attaccante"),[o,n]=(0,f.useState)("/images/default-avatar.png");return(0,p.jsxs)("div",{className:P().profileContainer,children:[(0,p.jsx)("h1",{children:"Il mio profilo"}),(0,p.jsxs)("div",{className:P().profileContent,children:[(0,p.jsxs)("div",{className:P().photoSection,children:[(0,p.jsx)("img",{src:o,alt:"Foto Profilo",className:P().profilePhoto}),(0,p.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&n(URL.createObjectURL(e.target.files[0]))},className:P().fileInput})]}),(0,p.jsxs)("div",{className:P().infoSection,children:[(0,p.jsxs)("label",{children:["Nome utente:",(0,p.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:P().inputField})]}),(0,p.jsxs)("label",{children:["Ruolo preferito:",(0,p.jsxs)("select",{value:r,onChange:e=>i(e.target.value),className:P().selectField,children:[(0,p.jsx)("option",{value:"Portiere",children:"Portiere"}),(0,p.jsx)("option",{value:"Difensore",children:"Difensore"}),(0,p.jsx)("option",{value:"Centrocampista",children:"Centrocampista"}),(0,p.jsx)("option",{value:"Attaccante",children:"Attaccante"})]})]}),(0,p.jsx)("button",{onClick:()=>{alert("Profilo salvato!")},className:P().saveButton,children:"Salva"})]})]})]})},g=(0,a.M)(i,"default"),v=(0,a.M)(i,"getStaticProps"),S=(0,a.M)(i,"getStaticPaths"),h=(0,a.M)(i,"getServerSideProps"),m=(0,a.M)(i,"config"),b=(0,a.M)(i,"reportWebVitals"),x=(0,a.M)(i,"unstable_getStaticProps"),j=(0,a.M)(i,"unstable_getStaticPaths"),A=(0,a.M)(i,"unstable_getStaticParams"),M=(0,a.M)(i,"unstable_getServerProps"),C=(0,a.M)(i,"unstable_getServerSideProps"),y=new o.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/profile",pathname:"/profile",bundlePath:"",filename:""},components:{App:c(),Document:l()},userland:i})},3645:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=r(9929),o=r(8732),n=i._(r(2015)),a=r(2811);async function s(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,a.loadGetInitialProps)(t,r)}}class l extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,o.jsx)(e,{...t})}}l.origGetInitialProps=s,l.getInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9455:(e,t)=>{"use strict";Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[781],()=>r(3999));module.exports=i})();