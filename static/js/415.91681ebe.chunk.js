"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{395:function(n,t,e){e.d(t,{s:function(){return g}});var r,i,o,a,c=e(87),u=e(168),s=e(444),d=s.ZP.div(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),l=s.ZP.div(i||(i=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),f=s.ZP.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),p=s.ZP.img(a||(a=(0,u.Z)(["\nheight: 100px;\nwidth: 100px;\ndisplay:block;\n"]))),h=e(184),g=function(n){var t=n.films;return(0,h.jsx)(d,{children:t.map((function(n){return(0,h.jsx)(l,{children:(0,h.jsxs)(c.rU,{to:"".concat(n.id),children:[(0,h.jsx)(p,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:""}),(0,h.jsx)(f,{children:n.title?n.title:n.name})]})},n.id)}))})}},415:function(n,t,e){e.r(t);var r=e(433),i=e(439),o=e(395),a=e(635),c=e(791),u=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){(0,a.q)().then((function(n){return n.json()})).then((function(n){s((0,r.Z)(n.results))})).catch((function(n){console.log("error >>",n)})).finally((function(){console.log("done!")}))}),[]),(0,u.jsxs)("main",{children:[(0,u.jsx)("h1",{children:"Trendings"}),(0,u.jsx)(o.s,{films:e})]})}},635:function(n,t,e){e.d(t,{q:function(){return r},t:function(){return i}});var r=function(){return fetch("".concat("https://api.themoviedb.org/3/","/trending/all/day?api_key=").concat("0aea76bf17d3a057de2e549752e53890","&page=1&language=en-US"))},i=function(n,t){return n.find((function(n){return n.id===t}))}}}]);
//# sourceMappingURL=415.91681ebe.chunk.js.map