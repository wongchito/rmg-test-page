(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[60],{238:function(e,n,t){var a={"./basic/blank":[195,0],"./basic/blank.ts":[195,0],"./basic/default":[204,30],"./basic/default.ts":[204,30],"./gzmtr/gf":[205,41],"./gzmtr/gf.ts":[205,41],"./gzmtr/gz1":[206,46],"./gzmtr/gz1.ts":[206,46],"./gzmtr/gz14":[207,47],"./gzmtr/gz14.ts":[207,47],"./gzmtr/gz2":[208,25],"./gzmtr/gz2.ts":[208,25],"./gzmtr/gz21":[209,26],"./gzmtr/gz21.ts":[209,26],"./gzmtr/gz3":[210,27],"./gzmtr/gz3.ts":[210,27],"./gzmtr/gz4":[211,28],"./gzmtr/gz4.ts":[211,28],"./gzmtr/gz5":[212,29],"./gzmtr/gz5.ts":[212,29],"./gzmtr/gz6":[213,31],"./gzmtr/gz6.ts":[213,31],"./gzmtr/gz7":[214,32],"./gzmtr/gz7.ts":[214,32],"./gzmtr/gz8":[215,33],"./gzmtr/gz8.ts":[215,33],"./gzmtr/gz9":[216,34],"./gzmtr/gz9.ts":[216,34],"./mlm/taipa":[217,35],"./mlm/taipa.ts":[217,35],"./mtr/ael":[218,36],"./mtr/ael.ts":[218,36],"./mtr/eal":[219,37],"./mtr/eal.ts":[219,37],"./mtr/isl":[220,38],"./mtr/isl.ts":[220,38],"./mtr/ktl":[221,39],"./mtr/ktl.ts":[221,39],"./mtr/mol":[222,40],"./mtr/mol.ts":[222,40],"./mtr/sile":[223,42],"./mtr/sile.ts":[223,42],"./mtr/tkl":[224,43],"./mtr/tkl.ts":[224,43],"./mtr/twl":[225,44],"./mtr/twl.ts":[225,44],"./mtr/wrl":[226,45],"./mtr/wrl.ts":[226,45]};function i(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],i=n[0];return t.e(n[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(a)},i.id=238,e.exports=i},273:function(e,n,t){"use strict";t.r(n);var a=t(13),i=t(9),r=t(0),s=t(26),l=t(123),m=t(143),z=t(24),c=t(125),o=t(269),g=t(250),h=t(251),d=t(141),f=t(137),u=t(128),H=t(133),p=t(103),b=t(232),L=t(252),k=t(234),w=t(54),O=[{id:"basic",name:{en:"Basic",zh:"\u57fa\u672c"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"\u5e7f\u5dde\u5730\u94c1","zh-Hant":"\u5ee3\u5dde\u5730\u9435"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"\u6fb3\u95e8\u8f7b\u8f68","zh-Hant":"\u6fb3\u9580\u8f15\u8ecc"}},{id:"mtr",name:{en:"MTR","zh-Hans":"\u6e2f\u94c1","zh-Hant":"\u6e2f\u9435"}}],v={basic:[{filename:"blank",desc:{en:"Blank",zh:"\u7a7a\u767d"}},{filename:"default",desc:{en:"Default","zh-Hans":"\u9ed8\u8ba4","zh-Hant":"\u9810\u8a2d"}}],gzmtr:[{filename:"gz1",desc:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"gz2",desc:{en:"Line 2","zh-Hans":"2\u53f7\u7ebf","zh-Hant":"2\u865f\u7dda"}},{filename:"gz3",desc:{en:"Line 3","zh-Hans":"3\u53f7\u7ebf","zh-Hant":"3\u865f\u7dda"}},{filename:"gz4",desc:{en:"Line 4","zh-Hans":"4\u53f7\u7ebf","zh-Hant":"4\u865f\u7dda"}},{filename:"gz5",desc:{en:"Line 5","zh-Hans":"5\u53f7\u7ebf","zh-Hant":"5\u865f\u7dda"}},{filename:"gz6",desc:{en:"Line 6","zh-Hans":"6\u53f7\u7ebf","zh-Hant":"6\u865f\u7dda"}},{filename:"gz7",desc:{en:"Line 7","zh-Hans":"7\u53f7\u7ebf","zh-Hant":"7\u865f\u7dda"}},{filename:"gz8",desc:{en:"Line 8","zh-Hans":"8\u53f7\u7ebf","zh-Hant":"8\u865f\u7dda"}},{filename:"gz9",desc:{en:"Line 9","zh-Hans":"9\u53f7\u7ebf","zh-Hant":"9\u865f\u7dda"}},{filename:"gz14",desc:{en:"Line 14","zh-Hans":"14\u53f7\u7ebf","zh-Hant":"14\u865f\u7dda"}},{filename:"gz21",desc:{en:"Line 21","zh-Hans":"21\u53f7\u7ebf","zh-Hant":"21\u865f\u7dda"}},{filename:"gf",desc:{en:"Guangfo Line","zh-Hans":"\u5e7f\u4f5b\u7ebf","zh-Hant":"\u5ee3\u4f5b\u7dda"}}],mlm:[{filename:"taipa",desc:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"\u6c39\u4ed4\u7ebf","zh-Hant":"\u6c39\u4ed4\u7dda"}}],mtr:[{filename:"twl",desc:{en:"Tsuen Wan Line","zh-Hans":"\u8343\u6e7e\u7ebf","zh-Hant":"\u8343\u7063\u7dab"}},{filename:"ktl",desc:{en:"Kwun Tong Line","zh-Hans":"\u89c2\u5858\u7ebf","zh-Hant":"\u89c0\u5858\u7dab"}},{filename:"isl",desc:{en:"Island Line","zh-Hans":"\u6e2f\u5c9b\u7ebf","zh-Hant":"\u6e2f\u5cf6\u7dab"}},{filename:"tkl",desc:{en:"Tseung Kwan O Line","zh-Hans":"\u5c06\u519b\u6fb3\u7ebf","zh-Hant":"\u5c07\u8ecd\u6fb3\u7dab"}},{filename:"sile",desc:{en:"South Island Line","zh-Hans":"\u5357\u6e2f\u5c9b\u7ebf","zh-Hant":"\u5357\u6e2f\u5cf6\u7dab"}},{filename:"ael",desc:{en:"Airport Express","zh-Hans":"\u673a\u573a\u5feb\u7ebf","zh-Hant":"\u6a5f\u5834\u5feb\u7dab"}},{filename:"eal",desc:{en:"East Rail Line","zh-Hans":"\u4e1c\u94c1\u7ebf","zh-Hant":"\u6771\u9435\u7dab"}},{filename:"wrl",desc:{en:"West Rail Line","zh-Hans":"\u897f\u94c1\u7ebf","zh-Hant":"\u897f\u9435\u7dab"}},{filename:"mol",desc:{en:"Tuen Ma Line Phase 1","zh-Hans":"\u5c6f\u9a6c\u7ebf\u4e00\u671f","zh-Hant":"\u5c6f\u99ac\u7dab\u4e00\u671f"}}]},E=Object(l.a)((function(e){var n;return Object(m.a)({root:(n={display:"flex",flexDirection:"row"},Object(i.a)(n,e.breakpoints.down("xs"),{flexDirection:"column",paddingTop:0,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(i.a)(n,e.breakpoints.up("sm"),{height:350}),n),tab:Object(i.a)({minWidth:0},e.breakpoints.down("xs"),{minWidth:"calc(100% / 3)"}),tabpanel:{flex:1,overflow:"auto",minWidth:220}})})),j=function(e){var n=Object(s.c)(),i=n.t,l=n.i18n,m=E(),j=Object(z.a)(),y=Object(c.a)(j.breakpoints.down("xs")),T=r.useState(0),x=Object(a.a)(T,2),C=x[0],M=x[1];return r.useMemo((function(){return r.createElement(o.a,{open:e.open,onClose:function(){return e.onClose()}},r.createElement(g.a,null,i("file.new.title")),r.createElement(h.a,{dividers:!0,className:m.root},r.createElement(d.a,{value:C,orientation:y?"horizontal":"vertical",variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",onChange:function(e,n){return M(n)}},O.map((function(e){return r.createElement(f.a,{key:e.id,label:Object(w.b)(e.name,l.languages),className:m.tab})}))),r.createElement(u.a,{component:"div",role:"tabpanel",className:m.tabpanel},r.createElement(H.a,{disablePadding:!0},v[O[C].id].map((function(e){return r.createElement(p.a,{button:!0,onClick:(n=e.filename,function(){t(238)("./".concat(companies[C].id,"/").concat(n)).then((function(e){localStorage.rmgParam=JSON.stringify(e.default),window.location.reload(!0)})).catch((function(e){return console.error(e)}))}),key:e.filename},r.createElement(b.a,{primary:Object(w.b)(e.desc,l.languages)}));var n}))))),r.createElement(L.a,null,r.createElement(k.a,{variant:"outlined",onClick:function(){return e.onClose()},color:"primary",autoFocus:!0},i("dialog.cancel"))))}),[e.open,C,y,l.language,JSON.stringify(m)])};n.default=j}}]);
//# sourceMappingURL=panelSaveTemplateDialog.43f8baa6.chunk.js.map