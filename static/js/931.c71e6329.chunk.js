"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[931],{395:function(n,t,e){e.d(t,{s:function(){return x}});var i,r,o,a,c=e(87),u=e(168),s=e(444),l=s.ZP.div(i||(i=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),p=s.ZP.div(r||(r=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),d=s.ZP.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),f=s.ZP.img(a||(a=(0,u.Z)(["\nheight: 100px;\nwidth: 100px;\ndisplay:block;\n"]))),h=e(184),x=function(n){var t=n.films;return(0,h.jsx)(l,{children:t.map((function(n){return(0,h.jsx)(p,{children:(0,h.jsxs)(c.rU,{to:"".concat(n.id),children:[(0,h.jsx)(f,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:""}),(0,h.jsx)(d,{children:n.title?n.title:n.name})]})},n.id)}))})}},931:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var i,r,o,a=e(433),c=e(439),u=e(168),s=e(444),l=e(128),p=s.ZP.div(i||(i=(0,u.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),d=s.ZP.input(r||(r=(0,u.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),f=(0,s.ZP)(l.G4C)(o||(o=(0,u.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),h=e(184),x=function(n){var t=n.value,e=n.onChange;return(0,h.jsxs)(p,{children:[(0,h.jsx)(f,{}),(0,h.jsx)(d,{type:"text",value:t,onChange:function(n){return e(n.target.value)}})]})},g=e(395),m=e(635),Z=e(87),v=e(791),b=function(){var n,t=(0,v.useState)([]),e=(0,c.Z)(t,2),i=e[0],r=e[1],o=(0,Z.lr)(),u=(0,c.Z)(o,2),s=u[0],l=u[1],p=(0,v.useState)([]),d=(0,c.Z)(p,2),f=d[0],b=d[1],j=null!==(n=s.get("name"))&&void 0!==n?n:"";return(0,v.useEffect)((function(){(0,m.q)().then((function(n){return n.json()})).then((function(n){r((0,a.Z)(n.results))})).catch((function(n){console.log("error >>",n)})).finally((function(){console.log("done!")}))}),[]),(0,v.useEffect)((function(){b(i.filter((function(n){return(n.title?n.title:n.name).toLowerCase().includes(j.toLowerCase())})))}),[s]),(0,h.jsxs)("main",{children:[(0,h.jsx)("h1",{children:"Movies"}),(0,h.jsx)(x,{value:j,onChange:function(n){l(""!==n?{name:n}:{})}}),(0,h.jsx)(g.s,{films:f})]})}},635:function(n,t,e){e.d(t,{q:function(){return i}});var i=function(){return fetch("".concat("https://api.themoviedb.org/3/","/trending/all/day?api_key=").concat("0aea76bf17d3a057de2e549752e53890","&page=1&language=en-US"))}}}]);
//# sourceMappingURL=931.c71e6329.chunk.js.map