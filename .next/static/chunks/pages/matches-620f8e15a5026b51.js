(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{4869:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/matches",function(){return a(3640)}])},3640:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return matches}});var i=a(5893),n=a(7294),s=a(9500),r=a(5108),c=a.n(r),components_MatchList=()=>{let[t,e]=(0,n.useState)([]),[a,r]=(0,n.useState)(!0),[o,l]=(0,n.useState)(null);(0,n.useEffect)(()=>{let fetchMatches=async()=>{try{let t=await (0,s.h_)();e(t),r(!1)}catch(t){l("Errore nel caricamento delle partite."),r(!1)}};fetchMatches()},[]);let handleBooking=async t=>{try{await (0,s.y_)(t),e(e=>e.map(e=>e.id===t?{...e,participants:e.participants+1}:e)),alert("Prenotazione effettuata con successo!")}catch(t){alert("Errore nella prenotazione: "+t)}};return a?(0,i.jsx)("p",{children:"Caricamento partite in corso..."}):o?(0,i.jsx)("p",{children:o}):(0,i.jsxs)("div",{className:c().matchListContainer,children:[(0,i.jsx)("h1",{children:"Partite Disponibili"}),(0,i.jsx)("div",{className:c().matchList,children:t.map(t=>(0,i.jsxs)("div",{className:c().matchCard,children:[(0,i.jsx)("h2",{children:t.location}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Data:"})," ",t.date]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Orario:"})," ",t.time]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Partecipanti:"})," ",t.participants,"/",t.maxParticipants]}),(0,i.jsx)("button",{className:c().joinButton,disabled:t.participants>=t.maxParticipants,onClick:()=>handleBooking(t.id),children:t.participants>=t.maxParticipants?"Partita Piena":"Prenotati"})]},t.id))})]})},o=a(8281),l=a.n(o),matches=()=>(0,i.jsxs)("div",{className:l().matchesPage,children:[(0,i.jsx)("h1",{children:"Lista Partite"}),(0,i.jsx)("p",{children:"Trova una partita e prenota il tuo posto!"}),(0,i.jsx)(components_MatchList,{})]})},9500:function(t,e,a){"use strict";a.d(e,{Pj:function(){return deleteMatch},h_:function(){return getMatches},nT:function(){return addMatch},ts:function(){return getCurrentUser},x4:function(){return login},y_:function(){return bookMatch}});let i=[{id:1,date:"2025-01-10",time:"18:00",location:"Campo Sportivo Centro",participants:8,maxParticipants:10,description:"Partita amichevole aperta a tutti i livelli."},{id:2,date:"2025-01-12",time:"20:00",location:"Stadio Comunale",participants:5,maxParticipants:10,description:"Partita serale per giocatori esperti."}],getMatches=async()=>new Promise(t=>{setTimeout(()=>t(i),500)}),addMatch=async t=>new Promise(e=>{setTimeout(()=>{i.push({...t,id:i.length+1}),e()},500)}),deleteMatch=async t=>new Promise(e=>{setTimeout(()=>{i=i.filter(e=>e.id!==t),e()},500)}),bookMatch=async t=>new Promise((e,a)=>{setTimeout(()=>{let n=i.find(e=>e.id===t);n&&n.participants<n.maxParticipants?(n.participants+=1,e()):a("Impossibile prenotare: partita piena o non trovata.")},500)}),n=null,s=[{id:1,email:"user@example.com",role:"user"},{id:2,email:"admin@example.com",role:"admin"}],login=async(t,e)=>new Promise((e,a)=>{setTimeout(()=>{let i=s.find(e=>e.email===t);i?(n=i,e(i)):a("Credenziali non valide.")},500)}),getCurrentUser=async()=>new Promise(t=>{setTimeout(()=>t(n),500)})},5108:function(t){t.exports={matchListContainer:"MatchList_matchListContainer__bJFbk",matchList:"MatchList_matchList__3shDu",matchCard:"MatchList_matchCard__zAn2F",joinButton:"MatchList_joinButton__RC0z9"}},8281:function(t){t.exports={matchesPage:"MatchesPage_matchesPage__jW5F5"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=4869)}),_N_E=t.O()}]);