"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{395:function(n,t,e){e.d(t,{s:function(){return g}});var c,a,r,o,i=e(87),u=e(168),l=e(444),s=l.ZP.div(c||(c=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),f=l.ZP.div(a||(a=(0,u.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),d=l.ZP.h3(r||(r=(0,u.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),p=l.ZP.img(o||(o=(0,u.Z)(["\nheight: 100px;\nwidth: 100px;\ndisplay:block;\n"]))),h=e(184),g=function(n){var t=n.films;return(0,h.jsx)(s,{children:t.map((function(n){return(0,h.jsx)(f,{children:(0,h.jsxs)(i.rU,{to:"".concat(n.id),children:[(0,h.jsx)(p,{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:""}),(0,h.jsx)(d,{children:n.title?n.title:n.name})]})},n.id)}))})}},415:function(n,t,e){e.r(t);var c=e(433),a=e(439),r=e(395),o=e(635),i=e(791),u=e(184);t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],l=t[1];return(0,i.useEffect)((function(){(0,o.e2)().then((function(n){return n.json()})).then((function(n){l((0,c.Z)(n.results))})).catch((function(n){console.log("error >>",n)})).finally((function(){console.log("done!")}))}),[]),(0,u.jsxs)("main",{children:[(0,u.jsx)("h1",{children:"Trendings"}),(0,u.jsx)(r.s,{films:e})]})}},635:function(n,t,e){e.d(t,{Hu:function(){return u},Pg:function(){return i},e2:function(){return r},qF:function(){return o}});var c="https://api.themoviedb.org/3/",a="0aea76bf17d3a057de2e549752e53890",r=function(){return fetch("".concat(c,"/trending/all/day?api_key=").concat(a,"&page=1&language=en-US"))},o=function(n){return fetch("".concat(c,"/search/movie?api_key=").concat(a,"&page=1&language=en-US&query=").concat(n))},i=function(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(a,"&language=en-US"))},u=function(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))}}}]);
//# sourceMappingURL=415.2b38039f.chunk.js.map