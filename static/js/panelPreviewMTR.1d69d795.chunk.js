(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[58],{254:function(t,r,e){"use strict";e.r(r),e.d(r,"getBase64FontFace",(function(){return f}));var n=e(53),a=e(196),o=e.n(a),u=e(197),c=function(){var t=Object(u.a)(o.a.mark((function t(r,e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",document.fonts.load("80px Noto Serif "+e,r).then((function(t){var r=t[0].unicodeRange;return Array.from(Array.from(document.querySelectorAll("style")).filter((function(t){return"googlefonts"===t.id}))[0].sheet.cssRules).filter((function(t){return t.cssText.includes("Noto Serif "+e)})).filter((function(t){return t.cssText.includes(r)}))[0].cssText})));case 1:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("\u95e8"!==r){t.next=2;break}return t.abrupt("return",Promise.all([c(r,"SC")]));case 2:return t.abrupt("return",Promise.all([c(r,"KR")]).catch((function(){return Promise.all([c(r,"JP")]).catch((function(){return Promise.all([c(r,"TC"),c(r,"SC")]).catch((function(){return Promise.all([c(r,"SC")])}))}))})));case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(t){return new Promise((function(r){var e=new FileReader;e.onloadend=function(){r(e.result)},e.readAsDataURL(t)}))},f=function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://fonts.googleapis.com/css?family=Noto+Serif+KR:600|Noto+Serif+JP:600|Noto+Serif+TC:600|Noto+Serif+SC:600%26display=swap",t.abrupt("return",fetch("https://fonts.googleapis.com/css?family=Noto+Serif+KR:600|Noto+Serif+JP:600|Noto+Serif+TC:600|Noto+Serif+SC:600%26display=swap").then((function(t){return t.text()})).then(function(){var t=Object(u.a)(o.a.mark((function t(e){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=document.createElement("style")).type="text/css",a.id="googlefonts",a.innerText=e,document.head.append(a),c=Array.from(new Set(Array.from(r.querySelectorAll(".rmg-name__zh")).map((function(t){return t.innerHTML})).join("").replace(/[\d\s]/g,""))),t.abrupt("return",Promise.all(c.map(i)).then((function(t){var r;return(r=[]).concat.apply(r,Object(n.a)(t))})).then((function(t){return Array.from(new Set(t))})).then((function(t){return t.map(function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(r.match(/https:[\w:/.-]+.woff2/g)[0]).then((function(t){return t.blob()})).then(s).then((function(t){return r.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(t,"'); "))})));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())})));case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=panelPreviewMTR.1d69d795.chunk.js.map