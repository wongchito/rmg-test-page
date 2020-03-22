(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[66],{17:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},43:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=function(e){switch(e){case"gz28":case"gzgf":return 60;case"gz1":case"gz3":return 40;case"gz1421":return 20;default:return 0}}(e.variant),n=c.a.useMemo((function(){switch(e.variant){case"gz1":return c.a.createElement("circle",{cy:-28,r:16,fill:"red"});case"gz28":return c.a.createElement("ellipse",{rx:24,ry:12,fill:"orange"});case"gz3":return c.a.createElement("rect",{x:-15,y:-25,height:30,width:30,fill:"red"});case"gzgf":return c.a.createElement("ellipse",{rx:24,ry:12,fill:"white"});case"gz1421":return c.a.createElement("ellipse",{cy:-8,rx:24,ry:12,fill:"orange"});default:return c.a.createElement(c.a.Fragment,null)}}),[e.variant]);return c.a.createElement("g",null,c.a.createElement("rect",{id:"strip_gz",style:Object(a.a)({},"--height","".concat(t,"px"))}),c.a.createElement("g",{style:{transform:"translate(calc(var(--rmg-svg-width) / 2),calc(var(--rmg-svg-height) - 30px))"}},e.isShowLight&&n),e.isShowPSD&&c.a.createElement(l,e))};var l=c.a.memo((function(e){return c.a.createElement("g",{id:"big_psd",fill:["gz3","gz1421","gz1"].includes(e.variant)?"var(--rmg-theme-fg)":"#000",style:Object(a.a)({},"--psd-dy",["gz1","gz3"].includes(e.variant)?"82px":"gz1421"===e.variant?"62px":"58px")},c.a.createElement("rect",{height:40,width:40,rx:4,x:-20,fill:["gz3","gz1421","gz1"].includes(e.variant)?"var(--rmg-theme-colour)":"#fff"}),c.a.createElement("text",{className:"rmg-name__en",fontSize:20,dy:12},e.isShowPSD),c.a.createElement("text",{className:"rmg-name__zh",fontSize:12,dy:26},"\u5c4f\u853d\u95e8"),c.a.createElement("text",{className:"rmg-name__en",fontSize:6.5,dy:36},"Screen Door"))}),(function(e,t){return e.variant===t.variant&&e.isShowPSD===t.isShowPSD}))},44:function(e,t,n){"use strict";var a=n(4),r=n(17),c=n(0),l=n.n(c);t.a=function(e){var t=e.lineNum,n=e.stnNum,c=Object(r.a)(e,["lineNum","stnNum"]),i=l.a.useRef(null),m=l.a.useState({width:15.03125}),s=Object(a.a)(m,2),u=s[0],o=s[1];l.a.useEffect((function(){return o(i.current.getBBox())}),[t]);var g=u.width>15.03125?15.03125/u.width:1,d=2===t.length?g:1;return l.a.createElement("g",Object.assign({textAnchor:"middle",fontSize:13.5},c),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{transform:"translate(-9.25,0)scale(".concat(g,")")},l.a.createElement("text",{ref:i,className:"rmg-name__zh"},t)),l.a.createElement("g",{transform:"translate(9.25,0)scale(".concat(d,")")},l.a.createElement("text",{className:"rmg-name__zh"},n)))}),[u.width,t,n]))}},95:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(3),c=n(0),l=n.n(c),i=n(5),m=n(43),s=n(8),u=n(1),o=n(4),g=n(44),d=function(){var e,t=l.a.useContext(i.b).param,n=t.stn_list[t.current_stn_idx],a=l.a.useRef(null),m=Object(c.useState)({width:0}),s=Object(o.a)(m,2),u=s[0],g=s[1];Object(c.useEffect)((function(){return g(a.current.getBBox())}),[n.name[0],n.name[1]]);var d=n["l"===t.direction?"parents":"children"];return l.a.createElement("g",null,l.a.createElement(f,{ref:a,curName:n.name,style:Object(r.a)({},"--translate-y","".concat(.5*t.svg_height-50-18*(n.name[1].split("\\").length-1),"px"))}),l.a.createElement(h,{lineNum:t.line_num,stnNum:n.num,style:(e={},Object(r.a)(e,"--translate-x","".concat((t.svgWidth.runin+u.width)/2+55,"px")),Object(r.a)(e,"--translate-y","".concat(.5*t.svg_height-30-18*(n.name[1].split("\\").length-1),"px")),e)}),d.includes("linestart")||d.includes("lineend")?l.a.createElement(l.a.Fragment,null):1===d.length?l.a.createElement(x,{nextId:d[0],nameBBox:u}):l.a.createElement(E,{nextIds:d,nameBBox:u}))},f=l.a.forwardRef((function(e,t){var n=e.curName,r=Object(a.a)(e,["curName"]);return l.a.createElement("g",Object.assign({id:"big_name",ref:t},r),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("text",{className:"rmg-name__zh",fontSize:90},n[0]),l.a.createElement("g",{fontSize:36,className:"rmg-name__en"},n[1].split("\\").map((function(e,t){return l.a.createElement("text",{key:t,dy:70+36*t},e)}))))}),[n]))})),h=function(e){var t=e.lineNum,n=e.stnNum,r=Object(a.a)(e,["lineNum","stnNum"]);return l.a.createElement("g",Object.assign({id:"big_stn_num"},r),l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("path",{className:"rmg-stn rmg-stn--future",d:"M 0,12.95 V -12.95 H -12.95 a 12.95,12.95 0 0,0 0,25.9 h 25.9 a 12.95,12.95 0 0,0 0,-25.9 H 0 "}),l.a.createElement(g.a,Object.assign({transform:"scale(1.4)"},{lineNum:t,stnNum:n})))}),[t,n]))},x=function(e){var t,n=l.a.useContext(i.b).param,a=Object(c.useState)({width:0}),m=Object(o.a)(a,2),s=m[0],u=m[1],g=l.a.useRef(null);Object(c.useEffect)((function(){return u(g.current.getBBox())}),[]);var d=n.stn_list[e.nextId].name[0].length,f=(n.svgWidth.runin-e.nameBBox.width)/2;return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{id:"big_next"},l.a.createElement("g",{textAnchor:"middle",style:Object(r.a)({},"--translate-x","l"===n.direction?"80px":"".concat(d<=2?n.svgWidth.runin-45-s.width-70:n.svgWidth.runin-45-s.width-52.5,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},"\u4e0b\u7ad9"),l.a.createElement("text",{className:"rmg-name__en",dy:30},"Next")),l.a.createElement("g",{textAnchor:"start",ref:g,style:Object(r.a)({},"--translate-x","l"===n.direction?"".concat(d<=2?150:132.5,"px"):"".concat(n.svgWidth.runin-45-s.width,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},n.stn_list[e.nextId].name[0]),n.stn_list[e.nextId].name[1].split("\\").map((function(e,t){return l.a.createElement("text",{className:"rmg-name__en",dy:30+17*t,key:t},e)})))),l.a.createElement("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(r.a)(t,"--translate-x","l"===n.direction?"".concat((115+35*((d<=2?1:.5)+d)+f)/2-20,"px"):"".concat((n.svgWidth.runin-45-s.width-(d<=2?105:87.5)+f+e.nameBBox.width+55+25.9)/2+20,"px")),Object(r.a)(t,"--rotate","l"===n.direction?"0deg":"180deg"),t)}))},E=function(e){var t,n=l.a.useContext(i.b),a=n.param,m=n.routes,g=e.nextIds.map((function(e){return a.stn_list[e].name})),d=Object(c.useState)({width:0}),f=Object(o.a)(d,2),h=f[0],x=f[1],E=Object(c.useRef)([]);Object(c.useEffect)((function(){x((function(e){return Object(u.a)({},e,{width:0})})),E.current.forEach((function(e){var t=null===e||void 0===e?void 0:e.getBBox();x((function(e){return t?e.width>t.width?e:t:e}))}))}),[g.toString()]);var p=e.nextIds.map((function(e){return m.reduce((function(t,n){return n.includes(e)?t.concat(n.filter((function(e){return!["linestart","lineend"].includes(e)})).slice("l"===a.direction?0:-1)[0]):t}),[])})),_=Math.max.apply(Math,Object(s.a)(g.map((function(e){return e[0].length})))),b=(a.svgWidth.runin-e.nameBBox.width)/2;return l.a.createElement(l.a.Fragment,null,l.a.createElement("g",{id:"big_next_2"},g.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("g",{textAnchor:"middle",style:Object(r.a)({},"--translate-x","l"===a.direction?"72px":"".concat(a.svgWidth.runin-45-h.width-41,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},"\u4e0b\u7ad9"),l.a.createElement("text",{className:"rmg-name__en",y:22},"Next")),l.a.createElement("g",{ref:function(e){return E.current[t]=e},textAnchor:"start",style:Object(r.a)({},"--translate-x","l"===a.direction?"113px":"".concat(a.svgWidth.runin-45-h.width,"px"))},l.a.createElement("text",{className:"rmg-name__zh"},e[0]),e[1].split("\\").map((function(e,t){return l.a.createElement("text",{key:t,className:"rmg-name__en",y:22+13*t},e)})),l.a.createElement("text",{className:"rmg-name__zh",y:-35},p[t].map((function(e){return a.stn_list[e].name[0]})).join("/")+"\u65b9\u5411"),l.a.createElement("text",{className:"rmg-name__en rmg-name__gzmtr--next2-dest",y:-20},"Towards "+p[t].map((function(e){return a.stn_list[e].name[1]})).join("/").replace("\\"," "))))}))),l.a.createElement("path",{id:"arrow",d:"M 60,60 L 0,0 L 60,-60 H 100 L 55,-15 H 160 V 15 H 55 L 100,60z",fill:"black",style:(t={},Object(r.a)(t,"--translate-x","l"===a.direction?"".concat((99+27*(1+_)+b)/2-20,"px"):"".concat((a.svgWidth.runin-45-h.width-41-27+b+e.nameBBox.width+55+25.9)/2+20,"px")),Object(r.a)(t,"--rotate","l"===a.direction?"0deg":"180deg"),t)}))},p=(t.default=function(){var e=c.useContext(i.b).param;return c.createElement(c.Fragment,null,c.createElement(m.a,{variant:e.info_panel_type,isShowLight:!0,isShowPSD:e.psd_num}),c.createElement(p,{num:e.platform_num,style:Object(r.a)({},"--translate-x","".concat("l"===e.direction?e.svgWidth.runin-100:100,"px"))}),c.createElement(d,null))},function(e){var t=e.num,n=Object(a.a)(e,["num"]);return c.createElement("g",Object.assign({id:"platform"},n),c.useMemo((function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:0,cy:0,r:30,fill:"var(--rmg-theme-colour)"}),c.createElement("text",{className:"rmg-name__en",fontSize:38,dy:-9.5},t),c.createElement("text",{className:"rmg-name__zh",fontSize:13,dy:10},"\u7ad9\u53f0"),c.createElement("text",{className:"rmg-name__en",fontSize:9,dy:21},"Platform"))}),[t]))})}}]);
//# sourceMappingURL=runinMTR.18b16be8.chunk.js.map