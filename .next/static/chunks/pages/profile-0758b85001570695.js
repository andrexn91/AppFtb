(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return i(323)}])},323:function(e,t,i){"use strict";i.r(t);var o=i(5893),n=i(7294),l=i(9981),a=i.n(l);t.default=()=>{let[e,t]=(0,n.useState)("Nome Utente"),[i,l]=(0,n.useState)("Attaccante"),[s,r]=(0,n.useState)("/images/default-avatar.png");return(0,o.jsxs)("div",{className:a().profileContainer,children:[(0,o.jsx)("h1",{children:"Il mio profilo"}),(0,o.jsxs)("div",{className:a().profileContent,children:[(0,o.jsxs)("div",{className:a().photoSection,children:[(0,o.jsx)("img",{src:s,alt:"Foto Profilo",className:a().profilePhoto}),(0,o.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let t=URL.createObjectURL(e.target.files[0]);r(t)}},className:a().fileInput})]}),(0,o.jsxs)("div",{className:a().infoSection,children:[(0,o.jsxs)("label",{children:["Nome utente:",(0,o.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:a().inputField})]}),(0,o.jsxs)("label",{children:["Ruolo preferito:",(0,o.jsxs)("select",{value:i,onChange:e=>l(e.target.value),className:a().selectField,children:[(0,o.jsx)("option",{value:"Portiere",children:"Portiere"}),(0,o.jsx)("option",{value:"Difensore",children:"Difensore"}),(0,o.jsx)("option",{value:"Centrocampista",children:"Centrocampista"}),(0,o.jsx)("option",{value:"Attaccante",children:"Attaccante"})]})]}),(0,o.jsx)("button",{onClick:()=>{alert("Profilo salvato!")},className:a().saveButton,children:"Salva"})]})]})]})}},9981:function(e){e.exports={profileContainer:"Profile_profileContainer__idtO_",profileContent:"Profile_profileContent__i0F9n",photoSection:"Profile_photoSection__TrKeG",profilePhoto:"Profile_profilePhoto__RYYP5",fileInput:"Profile_fileInput__a6JPu",infoSection:"Profile_infoSection__lvpCb",inputField:"Profile_inputField__FKpLZ",selectField:"Profile_selectField__0PoYW",saveButton:"Profile_saveButton__dtuf4"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);