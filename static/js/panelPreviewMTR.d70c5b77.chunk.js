(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[63],{92:function(t,e,n){"use strict";n.r(e),n.d(e,"getBase64FontFace",(function(){return f}));var r=n(59),o=n.n(r),c=n(8),u=n(60),a=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",document.fonts.load("80px Noto Serif "+n,e).then((function(t){return Object(c.a)(Object(c.a)(document.querySelectorAll("style")).filter((function(t){return"googlefonts"===t.id}))[0].sheet.cssRules).filter((function(t){return t.cssText.includes("Noto Serif "+n)})).filter((function(e){return e.cssText.includes(t[0].unicodeRange)}))[0].cssText})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("\u95e8"!==e){t.next=2;break}return t.abrupt("return",Promise.all([a(e,"SC")]));case 2:return t.abrupt("return",Promise.all([a(e,"KR")]).catch((function(){return Promise.all([a(e,"JP")]).catch((function(){return Promise.all([a(e,"TC"),a(e,"SC")]).catch((function(){return Promise.all([a(e,"SC")]).catch((function(){return console.warn(e+": not found"),[]}))}))}))})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsDataURL(t)}))},f=function(t){return fetch("https://fonts.googleapis.com/css?family=Noto+Serif+KR:600|Noto+Serif+JP:600|Noto+Serif+TC:600|Noto+Serif+SC:600%26display=swap").then((function(t){return t.text()})).then(function(){var e=Object(u.a)(o.a.mark((function e(n){var r,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=document.createElement("style")).type="text/css",r.id="googlefonts",r.textContent=n,document.head.append(r),u=Object(c.a)(new Set(Object(c.a)(t.querySelectorAll(".rmg-name__zh")).map((function(t){return t.innerHTML})).join("").replace(/[\d\w\s]/g,""))),e.abrupt("return",Promise.all(u.map(i)).then((function(t){var e,n;return null===(e=document.querySelector("style#googlefonts"))||void 0===e||e.remove(),Object(c.a)(new Set((n=[]).concat.apply(n,Object(c.a)(t)))).map((function(t){return fetch(t.match(/https:[\w:/.-]+.woff2/g)[0]).then((function(t){return t.blob()})).then(s).then((function(e){return t.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(e,"'); "))}))}))})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=panelPreviewMTR.d70c5b77.chunk.js.map