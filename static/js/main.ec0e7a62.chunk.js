(this["webpackJsonpcgw_2-12"]=this["webpackJsonpcgw_2-12"]||[]).push([[0],{23:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(17),r=c.n(a),i=(c(23),c(4)),o=c.n(i),l=c(8),j=c(3),d=c(18),u=c.n(d).a.create({baseURL:"https://covid-193.p.rapidapi.com",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"bd52c7831bmsh885f8cdd1f00f06p13ec79jsn09e6320cff58"}}),b=c(0);var p=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("Singapore"),r=Object(j.a)(a,2),i=r[0],d=r[1],p=Object(s.useState)({}),h=Object(j.a)(p,2),O=h[0],x=h[1],f=Object(s.useState)({}),v=Object(j.a)(f,2),g=v[0],m=v[1],w=Object(s.useState)(""),y=Object(j.a)(w,2),S=y[0],C=y[1];function E(){return(E=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/countries");case 2:t=e.sent,console.log("Response from get - list of countries: ",t),c=[],200===t.status&&(c=t.data.response,console.log("Extracted owners",c),n(c));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){d(e.target.value)}function N(){return(N=Object(l.a)(o.a.mark((function e(t){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submitted country",i),e.next=4,u.get("/statistics?country=".concat(i));case 4:200===(c=e.sent).status&&(console.log("200 ok"),s=c.data.response[0],console.log("Extracted Stat: ",s),console.log("Extracted Cases: ",""),console.log("Extracted Cases: ","".new),console.log("Extracted Deaths: ",""),x(s.cases),m(s.deaths),C(s.day));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"canvass",children:[Object(b.jsx)("div",{className:"displayWindow",children:Object(b.jsxs)("form",{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(b.jsx)("h3",{children:"Choose a country"}),function(){if(console.log("inside render: ",c),0===c.length)return Object(b.jsx)("p",{children:"no countries listed"});var e=c.map((function(e,t){return Object(b.jsx)("option",{children:e},"".concat(e,"-").concat(t))}));return Object(b.jsx)("select",{id:"countries",name:"countries",onChange:k,defaultValue:"Singapore",children:e})}(),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(b.jsx)("div",{className:"displayWindow2",children:Object(b.jsxs)("div",{className:"displayCell",children:["Date of update: ".concat(S),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Cases",Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["New: ",null===O.new?0:O.new]}),Object(b.jsxs)("li",{children:["Active: ",O.active]}),Object(b.jsxs)("li",{children:["Critical: ",O.critical]}),Object(b.jsxs)("li",{children:["Recovered: ",O.recovered]}),Object(b.jsxs)("li",{children:["Total: ",O.total]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Deaths",Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["New: ",null===g.new?0:g.new]}),Object(b.jsxs)("li",{children:["Total: ",g.total]})]})]})})]})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ec0e7a62.chunk.js.map