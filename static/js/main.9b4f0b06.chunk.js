(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(8),r=n.n(o),s=(n(16),n(10)),u=n(2),b=n(9),j=n.n(b);n(7);function l(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),r=Object(u.a)(o,2),s=r[0],b=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{className:"phoneBook__name",children:["\u0418\u043c\u044f",Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){i(e.currentTarget.value)},className:"name__input"})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{className:"phoneBook__number",children:[" \u041d\u043e\u043c\u0435\u0440",Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){b(e.currentTarget.value)},className:"number__input"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"button",onClick:function e(t){e({id:j.a.generate(),name:n,number:s})},className:"phoneBook__button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(c.jsx)("br",{})]})}function d(e){var t=e.contacts,n=e.onDeleteContact;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(c.jsx)("ul",{className:"contact__list",children:t.map((function(e){return Object(c.jsxs)("li",{className:"list__item",children:[Object(c.jsx)("p",{children:"".concat(e.name," : ").concat(e.number)}),Object(c.jsx)("button",{className:"list__button",onClick:function(){return n(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))})]})}function m(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),r=Object(u.a)(o,2),b=r[0],j=r[1],m=b.toLowerCase(),h=n.filter((function(e){return e.name.toLowerCase().includes(m)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(c.jsx)(l,{handleButtonAdd:function(e){var t,c;(t=n,c=e.name,t.find((function(e){return e.name===c})))?window.alert("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e.name," \u0443\u0436\u0435 e\u0441\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435")):i((function(t){return[].concat(Object(s.a)(t.contacts),[e])}))}}),Object(c.jsx)("label",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",onChange:function(e){j(e.currentTarget.value)},className:"filter__input"}),Object(c.jsx)(d,{contacts:h,onDeleteContact:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),h()},7:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.9b4f0b06.chunk.js.map