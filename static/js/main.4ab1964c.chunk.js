(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,r){e.exports=r(31)},25:function(e,a,r){},31:function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(15),i=r.n(o),m=r(6),s=r(5),l=(r(25),function(){return t.a.createElement("h1",{className:"main-title"},"Home Page")}),c=r(18),d=r(19),h=r(10),u=r.n(h),b=function(e){var a=e.currentPerson,r=e.tableHeaders,o=e.highlightedValue,i=a.born,m=a.age,l=a.sex,c=a.century,d=a.name,h=Object(s.f)(),b=Object(s.h)(),v=Object(s.g)(),f="".concat(b.path,"/").concat(d.replace(/\W/g,"-").toLowerCase());return t.a.createElement("tr",{className:u()("person","m"===l?"person--male":"person--female","person--lived-in-".concat(c),{"person--selected":v.pathname===f}),onClick:function(){h.push({pathname:f,search:v.search})}},r.map(function(e){var r,s=e.code;return t.a.createElement("td",{key:s,className:u()({"person--born-before-1650":"name"===s&&i<1650,"person--age-over-65":"age"===s&&m>=65})},(r=a[s],o?r.toString().split(new RegExp("(".concat(o,")"),"gi")).map(function(e,a){return t.a.createElement(n.Fragment,{key:"".concat(e+a)},e.toLowerCase()===o.toLowerCase()?t.a.createElement("span",{style:{backgroundColor:"green"}},e):e)}):r))}))},v=function(e){var a=e.people,r=e.sortTable,n=e.highlightedValue,o=[],i=null,m=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];if(r.every(function(e,a){return e===o[a]}))return i;var t=r[0];return o=r,i=0===a.length?[{name:"There are no people"}]:Object.keys(t[0]).map(function(e){return{code:e,name:e[0].toUpperCase()+e.slice(1)}})}(a);return t.a.createElement("table",{className:"people-table"},t.a.createElement("thead",null,t.a.createElement("tr",null,m.map(function(e){var a=e.name,n=e.code;return t.a.createElement("th",{key:a},t.a.createElement("button",{type:"button",className:"sort-button",onClick:function(){return r(n)}},a))}))),t.a.createElement("tbody",null,a.map(function(e){return t.a.createElement(b,{key:e.id,currentPerson:e,tableHeaders:m,highlightedValue:n})})))};var f,k=(f=[{name:"Carolus Haverbeke",sex:"m",born:1832,died:1905,father:"Carel Haverbeke",mother:"Maria van Brussel"},{name:"Emma de Milliano",sex:"f",born:1876,died:1956,father:"Petrus de Milliano",mother:"Sophia van Damme"},{name:"Maria de Rycke",sex:"f",born:1683,died:1724,father:"Frederik de Rycke",mother:"Laurentia van Vlaenderen"},{name:"Jan van Brussel",sex:"m",born:1714,died:1748,father:"Jacobus van Brussel",mother:"Joanna van Rooten"},{name:"Philibert Haverbeke",sex:"m",born:1907,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Jan Frans van Brussel",sex:"m",born:1761,died:1833,father:"Jacobus Bernardus van Brussel",mother:null},{name:"Pauwels van Haverbeke",sex:"m",born:1535,died:1582,father:"N. van Haverbeke",mother:null},{name:"Clara Aernoudts",sex:"f",born:1918,died:2012,father:"Henry Aernoudts",mother:"Sidonie Coene"},{name:"Emile Haverbeke",sex:"m",born:1877,died:1968,father:"Carolus Haverbeke",mother:"Maria Sturm"},{name:"Lieven de Causmaecker",sex:"m",born:1696,died:1724,father:"Carel de Causmaecker",mother:"Joanna Claes"},{name:"Pieter Haverbeke",sex:"m",born:1602,died:1642,father:"Lieven van Haverbeke",mother:null},{name:"Livina Haverbeke",sex:"f",born:1692,died:1743,father:"Daniel Haverbeke",mother:"Joanna de Pape"},{name:"Pieter Bernard Haverbeke",sex:"m",born:1695,died:1762,father:"Willem Haverbeke",mother:"Petronella Wauters"},{name:"Lieven van Haverbeke",sex:"m",born:1570,died:1636,father:"Pauwels van Haverbeke",mother:"Lievijne Jans"},{name:"Joanna de Causmaecker",sex:"f",born:1762,died:1807,father:"Bernardus de Causmaecker",mother:null},{name:"Willem Haverbeke",sex:"m",born:1668,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Pieter Antone Haverbeke",sex:"m",born:1753,died:1798,father:"Jan Francies Haverbeke",mother:"Petronella de Decker"},{name:"Maria van Brussel",sex:"f",born:1801,died:1834,father:"Jan Frans van Brussel",mother:"Joanna de Causmaecker"},{name:"Angela Haverbeke",sex:"f",born:1728,died:1734,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Elisabeth Haverbeke",sex:"f",born:1711,died:1754,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Lievijne Jans",sex:"f",born:1542,died:1582,father:null,mother:null},{name:"Bernardus de Causmaecker",sex:"m",born:1721,died:1789,father:"Lieven de Causmaecker",mother:"Livina Haverbeke"},{name:"Jacoba Lammens",sex:"f",born:1699,died:1740,father:"Lieven Lammens",mother:"Livina de Vrieze"},{name:"Pieter de Decker",sex:"m",born:1705,died:1780,father:"Joos de Decker",mother:"Petronella van de Steene"},{name:"Joanna de Pape",sex:"f",born:1654,died:1723,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Daniel Haverbeke",sex:"m",born:1652,died:1723,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Lieven Haverbeke",sex:"m",born:1631,died:1676,father:"Pieter Haverbeke",mother:"Anna van Hecke"},{name:"Martina de Pape",sex:"f",born:1666,died:1727,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Jan Francies Haverbeke",sex:"m",born:1725,died:1779,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Maria Haverbeke",sex:"m",born:1905,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Petronella de Decker",sex:"f",born:1731,died:1781,father:"Pieter de Decker",mother:"Livina Haverbeke"},{name:"Livina Sierens",sex:"f",born:1761,died:1826,father:"Jan Sierens",mother:"Maria van Waes"},{name:"Laurentia Haverbeke",sex:"f",born:1710,died:1786,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Carel Haverbeke",sex:"m",born:1796,died:1837,father:"Pieter Antone Haverbeke",mother:"Livina Sierens"},{name:"Elisabeth Hercke",sex:"f",born:1632,died:1674,father:"Willem Hercke",mother:"Margriet de Brabander"},{name:"Jan Haverbeke",sex:"m",born:1671,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Anna van Hecke",sex:"f",born:1607,died:1670,father:"Paschasius van Hecke",mother:"Martijntken Beelaert"},{name:"Maria Sturm",sex:"f",born:1835,died:1917,father:"Charles Sturm",mother:"Seraphina Spelier"},{name:"Jacobus Bernardus van Brussel",sex:"m",born:1736,died:1809,father:"Jan van Brussel",mother:"Elisabeth Haverbeke"}]).map(function(e,a){return Object(d.a)({id:a+1},e,{mother:e.mother||"",father:e.father||"",age:e.died-e.born,century:Math.ceil(e.died/100),children:f.filter(function(a){return a.father===e.name||a.mother===e.name}).map(function(e){return e.name}).join(", ")})}),p=function(){var e=Object(s.f)(),a=Object(s.g)(),r=new URLSearchParams(a.search),o=(r.get("query")||"").toLowerCase(),i=Object(n.useState)(o),m=Object(c.a)(i,2),l=m[0],d=m[1];Object(n.useEffect)(function(){d(o)},[o]);var h=function(e,a){var r;return function(){clearTimeout(r);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];r=setTimeout.apply(void 0,[e,a].concat(t))}}(function(){e.push({search:r.toString()})},500),u=k.filter(function(e){return(e.name+e.mother+e.father+e.children).toLowerCase().includes(o)}),b="",f=r.get("sortBy"),p=r.get("sortOrder");u[0]&&(b=typeof u[0][f]);var H={string:function(e,a){return e[f].localeCompare(a[f])},number:function(e,a){return e[f]-a[f]}}[b]||function(){return 0},x=u.sort(H);return"desc"===p&&x.reverse(),t.a.createElement(t.a.Fragment,null,t.a.createElement("h1",{className:"main-title"},"People table"),t.a.createElement("p",{className:"table-info"},"Number of people: ".concat(x.length)),t.a.createElement("input",{type:"search",className:"table-search",placeholder:"Search for people",onChange:function(e){var a=e.target.value.trim().toLowerCase();r.set("query",a),(r.get("query")||"").trim()||r.delete("query"),d(a),h(a)},value:l}),t.a.createElement(v,{people:x,sortTable:function(a){r.get("sortBy")!==a?(r.set("sortBy",a),r.set("sortOrder","asc")):r.set("sortOrder","asc"===p?"desc":"asc"),e.push({search:r.toString()})},highlightedValue:l}))},H=function(){return t.a.createElement("div",{className:"nav"},t.a.createElement("ul",{className:"nav__list"},t.a.createElement("li",{className:"nav__item"},t.a.createElement(m.b,{className:"nav__link",activeClassName:"nav__link--active",exact:!0,to:"/"},"Home")),t.a.createElement("li",{className:"nav__item"},t.a.createElement(m.b,{className:"nav__link",activeClassName:"nav__link--active",to:"/people"},"People Table"))),t.a.createElement(s.c,null,t.a.createElement(s.a,{path:"/",exact:!0,component:l}),t.a.createElement(s.a,{path:"/people",component:p})))};i.a.render(t.a.createElement(m.a,null,t.a.createElement(H,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4ab1964c.chunk.js.map