(this["webpackJsonp@optimumfuturist/scrum"]=this["webpackJsonp@optimumfuturist/scrum"]||[]).push([[0],{42:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(36),i=n.n(a),r=(n(42),n(12)),l=n(3),o=n(18),j=n(23),b=(n(67),n(9)),d=n.n(b),m="persons",h=(n(68),n(19)),x=n(0),u="".concat(".","/color-logo.svg"),O=Object(x.jsxs)("div",{className:"stepbox stepbox--large",children:[Object(x.jsx)("h2",{className:"tgif",children:"TGIF "}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"em-1","aria-label":"Party Gilter",role:"img",children:"\ud83c\udf89"}),"\xa0\xa0",Object(x.jsx)("span",{className:"em-2","aria-label":"Party Balloons",role:"img",children:"\ud83c\udf8a"}),"\xa0\xa0",Object(x.jsx)("span",{className:"em-3","aria-label":"Party Beer",role:"img",children:"\ud83c\udf7b"}),"\xa0\xa0",Object(x.jsx)("span",{className:"em-4","aria-label":"Pingpong",role:"img",children:"\ud83c\udfd3"})]}),p=(new Date).toDateString().indexOf("Fri")>=0?O:Object(x.jsx)("h2",{children:"Thank You"}),f=function(e){if(e)return[{id:"start",className:"slide brand",data:{x:-1400,y:-1500},content:[Object(x.jsx)("img",{src:u,alt:"Optimum Futurist"}),Object(x.jsx)("p",{className:"brand-of",children:"Daily"}),Object(x.jsx)("h2",{className:"try",children:"Scrum"}),Object(x.jsxs)("p",{children:["Total Attendees: #",e.length]})]},{id:"its",data:{x:0,y:-1500},content:[Object(x.jsxs)("p",{style:{textAlign:"left"},children:["How to report? ",Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:" - Describe what you're working on"})," ",Object(x.jsx)("br",{}),"and - ",Object(x.jsx)("span",{className:"btn-block",children:"inform any roadblocks?"})," ",Object(x.jsx)("br",{})]})]}].concat(Object(h.a)(function(e){return e.sort((function(){return Math.random()-.5})).map((function(e,t){return{id:"staff_"+t,className:"persons",data:{x:0,y:0+40*t},content:[Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"stepbox",children:Object(x.jsxs)("h2",{children:[" ",e.name," "]})})})]}}))}(e)),[{id:"qsts",data:{x:1200,y:500,scale:4,rotateZ:90},content:[Object(x.jsxs)("h1",{children:[Object(x.jsx)("strong",{children:Object(x.jsx)("span",{className:"have",children:"Any"})}),Object(x.jsx)("span",{className:"noticed",children:"\xa0Questions?"})]})]},{id:"thankyou",className:"step opacity large-title",data:{x:3e3,y:1500,z:0,scale:3},content:[Object(x.jsx)(x.Fragment,{children:p})]}])},g={width:1600,height:900,maxScale:1,minScale:0,perspective:1400,transitionDuration:1e3},N=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(l.f)();Object(s.useEffect)((function(){d.a.getItem(m).then((function(e){a(e),e&&0!==e.length||i.push("/list")}))}),[]);var r=f(n);return n&&0!==n.length?Object(x.jsx)(j.Impress,{progress:!0,rootData:g,hint:!0,children:r.map((function(e,t){return c.a.createElement(j.Step,{id:e.id,className:e.className,data:e.data,key:t},e.content.map((function(e,t){return c.a.cloneElement(e,{id:e.id,className:e.className,key:t})})))}))}):Object(x.jsx)("div",{children:"Loading"})},v=n(76),y=function(e){var t=e.text,n=e.to,s=e.onClick;return n?Object(x.jsxs)(r.b,{className:"pushable",to:n,children:[Object(x.jsx)("span",{className:"shadow"}),Object(x.jsx)("span",{className:"edge"}),Object(x.jsx)("span",{className:"front",children:t})]}):Object(x.jsxs)("button",{className:"pushable sec",onClick:function(e){return s(e)},children:[Object(x.jsx)("span",{className:"shadow"}),Object(x.jsx)("span",{className:"edge"}),Object(x.jsx)("span",{className:"front",children:t})]})},w=function(e){var t=e.className,n=e.children,s=e.to;return Object(x.jsx)(r.b,{className:t,to:s,children:n})},k=(n(71),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){d.a.getItem(m).then((function(e){Array.isArray(e)&&c(e)}))}),[]);var a=n.map((function(e){var t=Object(v.a)();return Object(x.jsxs)("li",{className:"item",children:[Object(x.jsx)("label",{htmlFor:t,children:e.name}),Object(x.jsx)("button",{className:"btn-remove",onClick:function(){return r(e.id)},id:t,type:"button",children:"\xd7"})]},t)})),i=function(e){d.a.setItem(m,e).then((function(e){c(e)}))},r=function(e){var t=n.filter((function(t){return t.id!==e}));i(t)};return Object(x.jsxs)("section",{className:"list-view page",children:[Object(x.jsx)("h1",{className:"title",children:"Attendees"}),Object(x.jsx)("ul",{className:"inbox",children:!n.length&&Object(x.jsx)("li",{className:"item",children:Object(x.jsx)("label",{title:"No one available",children:"No one available"})})}),Object(x.jsx)("ul",{className:"inbox",children:a}),Object(x.jsxs)("div",{className:"btn-wrap",children:[n.length>0&&Object(x.jsx)(y,{to:"/",text:"Start Meeting"}),Object(x.jsx)(y,{text:"Add",onClick:function(){var e=prompt();if(e){var t=[].concat(Object(h.a)(n),[{name:e,id:n.length+1}]);i(t)}}})]})]})});n(72);var S=function(){return Object(x.jsx)(r.a,{basename:"/scrum",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(w,{to:"/list",className:"pinned",children:Object(x.jsx)("span",{role:"img","aria-label":"Settings",children:"\u2699\ufe0f"})}),Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/list",exact:!0,children:Object(x.jsx)(k,{})}),Object(x.jsx)(l.a,{path:"/",children:Object(x.jsx)(N,{})}),Object(x.jsx)(l.a,{children:Object(x.jsx)("section",{className:"page",children:Object(x.jsxs)("div",{className:"page-card",children:[Object(x.jsx)("h1",{className:"title",children:"Not Found"}),Object(x.jsx)(y,{to:"/",text:"Go Home"})]})})})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.config({name:"of.scrum",description:"Attendees list for participants and absentees"}),d.a.getItem(m).then((function(e){e||d.a.setItem(m,[])})),i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.9b97b056.chunk.js.map