(this["webpackJsonp@optimumfuturist/scrum"]=this["webpackJsonp@optimumfuturist/scrum"]||[]).push([[0],{39:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(32),r=a.n(n),i=(a(39),a(13)),l=a(3),o=a(18),j=(a(64),a(65),a(34)),d=a(0),b="".concat(".","/color-logo.svg"),m=["Bijay","Diwan","Shyam","Sanchita","Shekhar","Suman","Niranjan","Praveen","Sunil","Kapoor","Basanta","Bibek","Sandesh","Prajwol"],h=Object(d.jsxs)("div",{className:"stepbox stepbox--large",children:[Object(d.jsx)("h2",{className:"tgif",children:"TGIF "}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"em-1","aria-label":"Party Gilter",role:"img",children:"\ud83c\udf89"}),"\xa0\xa0",Object(d.jsx)("span",{className:"em-2","aria-label":"Party Balloons",role:"img",children:"\ud83c\udf8a"}),"\xa0\xa0",Object(d.jsx)("span",{className:"em-3","aria-label":"Party Beer",role:"img",children:"\ud83c\udf7b"}),"\xa0\xa0",Object(d.jsx)("span",{className:"em-4","aria-label":"Pingpong",role:"img",children:"\ud83c\udfd3"})]}),x=(new Date).toDateString().indexOf("Fri")>=0?h:Object(d.jsx)("h2",{children:"Thank You"}),O=[{id:"start",className:"slide brand",data:{x:300,y:-200,scale:2},content:[Object(d.jsx)("img",{src:b,alt:"Optimum Futurist"}),Object(d.jsx)("p",{className:"brand-of",children:"Daily"}),Object(d.jsx)("h2",{className:"try",children:"Scrum"}),Object(d.jsxs)("p",{children:["Total Attendees: #",m.length]})]},{id:"its",data:{x:850,y:3e3,rotateZ:90,scale:5},content:[Object(d.jsxs)("p",{style:{textAlign:"left"},children:["How to report? ",Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:" - Describe what you're working on"})," ",Object(d.jsx)("br",{}),"and - ",Object(d.jsx)("span",{className:"btn-block",children:"inform any roadblocks?"})," ",Object(d.jsx)("br",{})]})]}].concat(Object(j.a)(m.sort((function(){return Math.random()-.5})).map((function(e,t){return{id:"staff_"+t,className:"staffs",data:{x:3*t+210+2100,y:1100+150*t,z:-2e3,rotateY:3*t+210+30,rotateX:1*t+210+120,scale:1.8},content:[Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"stepbox",children:Object(d.jsxs)("h2",{children:[" ",e," "]})})})]}}))),[{id:"qsts",data:{x:6200,y:4300,z:-100,rotateX:-40,rotateY:10,scale:10},content:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("strong",{children:Object(d.jsx)("span",{className:"have",children:"Q"})}),Object(d.jsx)("span",{className:"you",children:"&"}),Object(d.jsx)("span",{className:"noticed",children:"A"})]})]},{id:"thankyou",className:"step opacity large-title",data:{x:3e3,y:500,z:0,scale:3},content:[Object(d.jsx)(d.Fragment,{children:x})]}]),u={width:1600,height:900,maxScale:1,minScale:0,perspective:1400,transitionDuration:1e3},p=function(){return Object(d.jsx)(o.Impress,{progress:!0,rootData:u,hint:!0,children:O.map((function(e,t){return c.a.createElement(o.Step,{id:e.id,className:e.className,data:e.data,key:t},e.content.map((function(e,t){return c.a.cloneElement(e,{id:e.id,className:e.className,key:t})})))}))})},N=a(73),g=function(e){var t=e.text,a=e.to;return Object(d.jsxs)(i.b,{className:"pushable",to:a,children:[Object(d.jsx)("span",{className:"shadow"}),Object(d.jsx)("span",{className:"edge"}),Object(d.jsx)("span",{className:"front",children:t})]})},f=function(e){var t=e.className,a=e.children,s=e.to;return Object(d.jsx)(i.b,{className:t,to:s,children:a})},y=(a(68),function(){var e=m.map((function(e){var t=Object(N.a)();return Object(d.jsxs)("li",{className:"item",children:[Object(d.jsx)("input",{id:t,type:"checkbox"}),Object(d.jsx)("label",{htmlFor:t,children:e})]},t)}));return Object(d.jsxs)("section",{className:"list-view page",children:[Object(d.jsx)("h1",{className:"title",children:"Choose Attendees"}),Object(d.jsx)("ul",{className:"inbox",children:e}),Object(d.jsx)(g,{to:"/",text:"Return"})]})});a(69);var v=function(){return Object(d.jsx)(i.a,{basename:"/scrum",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/list",exact:!0,children:Object(d.jsx)(y,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(l.a,{children:Object(d.jsx)("section",{className:"page",children:Object(d.jsxs)("div",{className:"page-card",children:[Object(d.jsx)("h1",{className:"title",children:"Not Found"}),Object(d.jsx)(g,{to:"/",text:"Go Home"})]})})})]}),Object(d.jsx)(f,{to:"/list",className:"pinned",children:Object(d.jsx)("span",{role:"img","aria-label":"Settings",children:"\u2699\ufe0f"})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(21),S=a.n(w);S.a.config({driver:S.a.WEBSQL,name:"OptimumScrum",version:2,size:4980736,storeName:"_attendees",description:"Attendees list for participants and absentees"}),r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.02ca393e.chunk.js.map