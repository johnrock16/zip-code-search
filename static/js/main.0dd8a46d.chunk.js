(this["webpackJsonpzip-code-search"]=this["webpackJsonpzip-code-search"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(9),a=n.n(o),i=(n(14),n(15),n(0)),u=function(){return Object(i.jsx)("div",{style:{display:"flex",backgroundColor:"black"},children:Object(i.jsx)("div",{style:{display:"flex",height:"15vh",width:"100%",borderBottom:"solid",borderWidth:.5,flexDirection:"row"},children:Object(i.jsx)("div",{style:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row"},children:Object(i.jsx)("span",{style:{fontSize:24,color:"white"},children:"ADDRESS BY ZIP CODE"})})})})},l=n(5),s=n(3),d=n(1),j=n(7),b=n(4),p=n.n(b),f=n(6),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.params,r=void 0===n?{}:n,c=t.headers,o=void 0===c?{}:c;return fetch(e+O(r),{method:"GET",headers:Object(d.a)({"content-type":"application/json",accept:"application/json"},o)}).catch((function(e){console.log(e)}))},x=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.length>1&&void 0!==r[1]?r[1]:"json",200!==t.status){e.next=6;break}return e.next=4,t[n]();case 4:return e.t0=e.sent,e.abrupt("return",{result:e.t0});case 6:return e.abrupt("return",{status:t.status,error:"error on resolve"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")},v=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://viacep.com.br/ws","/").concat(t).concat("/json/"),e.next=3,h(n);case 3:return r=e.sent,e.next=6,x(r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={zipCode:""},y={button:{backgroundColor:"black",color:"white",border:"none"}},m=function(e){var t=e.onSearch,n=e.input,c=(n=void 0===n?{}:n).inputStyle,o=Object(l.a)(n,["inputStyle"]),a=e.button,u=(a=void 0===a?{}:a).buttonStyle,b=Object(l.a)(a,["buttonStyle"]),p=Object(r.useState)(g),f=Object(j.a)(p,2),h=f[0],x=f[1],O=h.zipCode,m={zipCode:function(e){return t="zipCode",n=e.target.value,void x((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},t,n))}));var t,n}};return Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("input",Object(d.a)({style:c,type:"text",onChange:m.zipCode},o)),Object(i.jsx)("button",Object(d.a)(Object(d.a)({style:Object(d.a)(Object(d.a)({},y.button),u),onClick:function(){/[0-9]{5}-[\d]{3}/g.test(O)?v(O).then((function(e){(null===e||void 0===e?void 0:e.result)&&t(e.result)})):alert("CEP INVALIDO")}},b),{},{children:"Search"}))]})},C={cep:"",bairro:"",complemento:"",cidade:"",logradouro:"",uf:""},S=function(e){var t=e.text,n=e.children,r=Object(l.a)(e,["text","children"]);return Object(i.jsxs)("div",{style:Object(d.a)({display:"flex",width:"100%",justifyContent:"center"},null===r||void 0===r?void 0:r.divStyle),children:[Object(i.jsx)("span",{style:Object(d.a)({fontSize:14,padding:10},null===r||void 0===r?void 0:r.textStyle),children:t}),n]})},w={container:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column",padding:20}},k=function(){var e=Object(r.useState)(C),t=Object(j.a)(e,2),n=t[0],c=t[1],o=(n.cep,n.bairro),a=n.complemento,u=n.cidade,l=n.logradouro,b=n.uf,p=function(e,t){c((function(n){return Object(d.a)(Object(d.a)({},n),{},Object(s.a)({},e,t))}))},f={cep:function(e){return p("cep",e.target.value)},bairro:function(e){return p("bairro",e.target.value)},complemento:function(e){return p("complemento",e.target.value)},cidade:function(e){return p("cidade",e.target.value)},logradouro:function(e){return p("logradouro",e.target.value)},uf:function(e){return p("uf",e.target.value)}};return Object(i.jsxs)("div",{style:w.container,children:[Object(i.jsx)(S,{text:"CEP",children:Object(i.jsx)(m,{onSearch:function(e){var t=e.cep,n=e.bairro,r=e.complemento,o=e.localidade,a=e.logradouro,i=e.uf;c((function(e){return Object(d.a)(Object(d.a)({},e),{},{cep:t,bairro:n,complemento:r,cidade:o,logradouro:a,uf:i})}))}})}),Object(i.jsx)(S,{text:"UF",children:Object(i.jsx)("input",{type:"text",value:b,onChange:f.uf})}),Object(i.jsx)(S,{text:"Cidade",children:Object(i.jsx)("input",{type:"text",value:u,onChange:f.cidade})}),Object(i.jsx)(S,{text:"Bairro",children:Object(i.jsx)("input",{type:"text",value:o,onChange:f.bairro})}),Object(i.jsx)(S,{text:"Logradouro",children:Object(i.jsx)("input",{type:"text",value:l,onChange:f.logradouro})}),Object(i.jsx)(S,{text:"Complemento",children:Object(i.jsx)("input",{type:"text",value:a,onChange:f.complemento})})]})};var z=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(k,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root")),I()}},[[18,1,2]]]);
//# sourceMappingURL=main.0dd8a46d.chunk.js.map