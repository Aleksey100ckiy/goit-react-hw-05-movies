"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{29:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,o,i=t(433),c=t(439),l=t(791),d=t(87),s=t(168),p=t(444),u=p.ZP.div(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),h=p.ZP.div(a||(a=(0,s.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),f=p.ZP.h3(o||(o=(0,s.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),g=t(184),m=function(n){var e=n.films;return(0,g.jsx)(u,{children:e.map((function(n){return(0,g.jsx)(h,{children:(0,g.jsxs)(d.rU,{to:"".concat(n.id),children:[(0,g.jsx)("img",{src:"".concat(n.poster_path),alt:""}),(0,g.jsx)(f,{children:n.title})]})},n.id)}))})};var x=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return fetch("".concat("https://api.themoviedb.org/3/","/trending/all/day?api_key=").concat("0aea76bf17d3a057de2e549752e53890","&page=1&language=en-US")).then((function(n){return n.json()})).then((function(n){r.apply(void 0,(0,i.Z)(n))})).catch((function(n){console.log("error >>",n)})).finally((function(){console.log("done!")})),(0,g.jsxs)("main",{children:[(0,g.jsx)("h1",{children:"Trendings"}),(0,g.jsx)(m,{films:t})]})}}}]);
//# sourceMappingURL=463.558f4965.chunk.js.map