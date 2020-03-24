(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[58],{113:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n(0),a=n.n(o),i=n(10),l=n(2),c=n(16);function u(){var e=Object(i.useTranslation)().t,t=a.a.useState(!1),n=Object(r.a)(t,2),o=n[0],c=n[1],u=a.a.useState({}),m=Object(r.a)(u,2),f=m[0],p=m[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.ListItem,{button:!0,component:"label",htmlFor:"upload-param"},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"folder_open")),a.a.createElement(l.ListItemText,{primary:e("file.open.button")})),a.a.createElement("input",{type:"file",accept:"application/json",style:{display:"none"},id:"upload-param",onChange:function(e){console.log(e.target.files[0]),new Promise((function(t){var n=new FileReader;n.onloadend=t,n.readAsText(e.target.files[0])})).then((function(e){return JSON.parse(e.target.result)})).then((function(e){p(e),c(!0)}))}}),a.a.createElement(s,{open:o,onClose:function(e){return function(){if("close"===e)return document.getElementById("upload-param").value="",void c(!1);"accept"===e&&(localStorage.rmgParam=JSON.stringify(f),window.location.reload(!0))}},content:f}))}function s(e){var t,n=Object(i.useTranslation)().t;return a.a.createElement(l.Dialog,{onClose:e.onClose("close"),open:e.open},a.a.createElement(l.DialogTitle,null,"Your Configuration"),a.a.createElement(l.DialogContent,{dividers:!0},a.a.createElement(l.DialogContentText,{style:{whiteSpace:"pre-line"}},0===Object.keys(e.content).length?"empty":(t=e.content,"Number of stations: ".concat(Object.keys(t.stn_list).length-2,"\n                ").concat(Object.entries(t.stn_list).map((function(e){return["linestart","lineend"].includes(e[0])?"":e[1].name.join(" - ")})).join("\r\n").trim().replace(/\\/," "))))),a.a.createElement(l.DialogActions,null,a.a.createElement(l.Button,{onClick:e.onClose("close"),color:"primary"},n("dialog.cancel")),a.a.createElement(l.Button,{onClick:e.onClose("accept"),color:"primary",autoFocus:!0},"Import")))}var m=n(73),f=n.n(m),p=n(74);function h(e){var t=e.viewBox.baseVal.width,n=e.viewBox.baseVal.height;e.setAttribute("width",t.toString()),e.setAttribute("height",n.toString());var r=document.querySelectorAll("canvas")[0];r.width=2.5*Number(t),r.height=2.5*Number(n);var o=r.getContext("2d");o.clearRect(0,0,r.width,r.height),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--station").forEach((function(e){return e.setAttribute("font-size","11px")})),e.querySelectorAll(".rmg-name__zh.IntName").forEach((function(e){return e.setAttribute("font-size","10px")})),e.querySelectorAll(".rmg-name__en.rmg-name__mtr--osi").forEach((function(e){return e.setAttribute("font-size","9px")})),e.querySelectorAll(".rmg-name__en.rmg-name__gzmtr--next2-dest").forEach((function(e){return e.setAttribute("font-size","8.5px")})),e.querySelectorAll(".rmg-name__en.IntName").forEach((function(e){return e.setAttribute("font-size","7px")})),e.querySelectorAll("text:not([font-size]), tspan:not([font-size])").forEach((function(e){return e.setAttribute("font-size",window.getComputedStyle(e).fontSize)})),e.querySelectorAll("text, tspan").forEach((function(e){var t=window.getComputedStyle(e);e.setAttribute("font-family",t.fontFamily),e.setAttribute("fill",t.fill),e.setAttribute("dominant-baseline",t.dominantBaseline),e.setAttribute("text-anchor",t.textAnchor||""),e.removeAttribute("class")}));var a=new Image;a.onload=function(){setTimeout((function(){o.drawImage(a,0,0,2.5*Number(t),2.5*Number(n)),function(e,t){var n=document.createElement("a");"string"===typeof n.download?(n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)):window.open(e)}(r.toDataURL("image/png"),"rmg."+(new Date).toISOString()+".png")}),2e3)},a.addEventListener("loadend",(function(){console.log("img loaded")})),a.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(e.outerHTML)))}var d=n(8),g=function(e){var t=Object(i.useTranslation)().t,a=o.useContext(d.a).rmgStyle,c=o.useState(document.createElement("svg")),u=Object(r.a)(c,2),s=u[0],m=u[1],g=o.useState(!1),v=Object(r.a)(g,2),y=v[0],E=v[1],b=o.useRef(null);o.useEffect((function(){if(""===e.canvas)return m(document.createElement("svg")),void E(!1);var t=["--rmg-svg-width","--rmg-svg-height"].map((function(t){return document.querySelector("svg#".concat(e.canvas)).style.getPropertyValue(t).match(/\d+/g)[0]})).map(Number),o=Object(r.a)(t,2),i=o[0],l=o[1],c=Math.min(window.innerWidth,1412)-64-48,u=window.innerHeight-64-64-52-16,s=Math.min(c/i,u/l),h=document.querySelector("svg#".concat(e.canvas)).cloneNode(!0);h.setAttribute("height",(l*s).toString()),h.style.setProperty("all","initial"),["share",e.canvas].map((function(e){var t;return Array.from((null===(t=Array.from(document.querySelectorAll("link")).filter((function(t){return t.id==="css_"+e}))[0])||void 0===t?void 0:t.sheet).cssRules).map((function(e){return e.cssText})).join(" ")})).forEach((function(e){var t=document.createElement("style");t.innerText=e,h.prepend(t)})),"mtr"===a?n.e(57).then(n.bind(null,105)).then((function(e){(0,e.getBase64FontFace)(h).then(function(){var e=Object(p.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t);case 2:n=e.sent,(r=document.createElement("style")).innerText=n.join(" "),h.prepend(r),m(h),document.fonts.ready.then((function(){return E(!0)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):(m(h),E(!0))}),[e.canvas]);var w=function(t){return function(){var n=b.current.querySelector("svg");if("png"===t)h(n);else if("svg"===t){var r=document.createElement("a");r.href="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n.outerHTML))),r.download="rmg."+(new Date).toISOString()+".svg",r.click()}e.onClose("close")}};return o.createElement(l.Dialog,{onClose:w("close"),open:e.open,maxWidth:!1},o.createElement(l.DialogTitle,null,t("file.preview.title")),o.createElement(l.DialogContent,{dangerouslySetInnerHTML:{__html:s.outerHTML},ref:b}),o.createElement(l.DialogActions,null,o.createElement(l.Button,{onClick:w("close"),color:"primary",autoFocus:!0},t("dialog.cancel")),o.createElement(l.Button,{onClick:w("png"),color:"primary",disabled:!y},t("file.preview.png")),o.createElement(l.Button,{onClick:w("svg"),color:"primary",disabled:!y},t("file.preview.svg"))))};var v=function(e){var t=Object(i.useTranslation)().t,n=o.useContext(d.a),a=n.canvasAvailable,c=n.canvasToShown,u=o.useState(!1),s=Object(r.a)(u,2),m=s[0],f=s[1],p=o.useState(""),h=Object(r.a)(p,2),v=h[0],y=h[1],E=function(t){return function(){"close"!==t&&(f(!0),y(t)),e.onClose("close")}};return o.createElement(o.Fragment,null,o.createElement(l.Dialog,{onClose:E("close"),open:e.open},o.createElement(l.DialogTitle,null,t("file.export.title")),o.createElement(l.DialogContent,{dividers:!0},o.createElement(l.List,null,("all"===c?a:[c]).map((function(e){return o.createElement(l.ListItem,{button:!0,key:e,onClick:E(e)},o.createElement(l.ListItemText,{primary:t("file.export."+e)}))}))))),o.createElement(g,{open:m,onClose:function(e){"close"===e&&(f(!1),y(""))},canvas:v}))},y=n(18),E=a.a.lazy((function(){return n.e(59).then(n.bind(null,119))}));var b={en:"English","zh-Hans":"\u4e2d\u6587\uff08\u7b80\u4f53\uff09","zh-HK":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09"},w=function(){var e=Object(i.useTranslation)(),t=e.t,n=e.i18n,s=Object(o.useContext)(d.a).rmgStyle,m=Object(o.useState)(!1),f=Object(r.a)(m,2),p=f[0],h=f[1],g=Object(o.useState)(!1),y=Object(r.a)(g,2),w=y[0],C=y[1],I=Object(o.useState)(!1),S=Object(r.a)(I,2),j=S[0],O=S[1],_=Object(o.useState)(!1),T=Object(r.a)(_,2),k=T[0],A=T[1];return a.a.createElement("div",null,a.a.createElement(l.Card,null,a.a.createElement(l.List,{component:"nav"},a.a.createElement(l.ListItem,{button:!0,onClick:function(){return h(!0)}},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"note_add")),a.a.createElement(l.ListItemText,{primary:t("file.new.button")})),a.a.createElement(u,null),a.a.createElement(l.ListItem,{button:!0,onClick:function(){var e=document.createElement("a");e.href="data:application/json;base64,"+btoa(unescape(encodeURIComponent(localStorage.rmgParam))),e.download="rmg.param."+(new Date).toISOString()+".json",e.click()}},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"save")),a.a.createElement(l.ListItemText,{primary:t("file.save")})),a.a.createElement(l.ListItem,{button:!0,onClick:function(){return C(!0)}},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"cloud_download")),a.a.createElement(l.ListItemText,{primary:t("file.export.button")}))),a.a.createElement(l.Divider,null),a.a.createElement(l.List,{component:"nav"},a.a.createElement(l.ListItem,{button:!0,onClick:function(){return O(!0)}},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"style")),a.a.createElement(l.ListItemText,{primary:t("file.style.button"),secondary:t("file.style."+s)})),a.a.createElement(l.ListItem,{button:!0,onClick:function(){return A(!0)}},a.a.createElement(l.ListItemIcon,null,a.a.createElement(l.Icon,null,"translate")),a.a.createElement(l.ListItemText,{primary:t("file.lang.button"),secondary:Object(c.b)(b,n.languages)})))),a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(l.LinearProgress,null)},a.a.createElement(E,{open:p,onClose:function(){return h(!1)}})),a.a.createElement(v,{open:w,onClose:function(e){C(!1)}}),a.a.createElement(x,{open:j,onClose:function(e){"close"===e||e===s||window.gtag("event","set",{event_category:"style",event_label:e}),O(!1)}}),a.a.createElement(L,{open:k,onClose:function(){return A(!1)}}))};function x(e){var t=Object(i.useTranslation)().t;return a.a.createElement(l.Dialog,{onClose:function(){return e.onClose("close")},open:e.open},a.a.createElement(l.DialogTitle,null,t("file.style.title")),a.a.createElement(l.DialogContent,{dividers:!0},a.a.createElement(l.List,null,["gzmtr","mtr","shmetro"].map((function(n){return a.a.createElement(y.b,{to:"/"+n,key:n,style:{textDecoration:"none",color:"unset"}},a.a.createElement(l.ListItem,{button:!0,onClick:function(){return e.onClose(n)}},a.a.createElement(l.ListItemText,{primary:t("file.style."+n)})))})))))}function L(e){var t=Object(i.useTranslation)(),n=t.t,r=t.i18n;return a.a.createElement(l.Dialog,{onClose:e.onClose,open:e.open},a.a.createElement(l.DialogTitle,null,n("file.lang.title")),a.a.createElement(l.DialogContent,{dividers:!0},a.a.createElement(l.List,null,Object.keys(b).map((function(t){return a.a.createElement(l.ListItem,{button:!0,onClick:function(){return(n=t)===r.language||(r.changeLanguage(n).then((function(e){return document.title=e("title")})),window.gtag("event","set",{event_category:"language",event_label:n}),document.documentElement.setAttribute("lang",n)),void e.onClose();var n},key:t},a.a.createElement(l.ListItemText,{primary:b[t]}))})))))}t.default=function(){var e=Object(i.withTranslation)()(w);return a.a.createElement(l.Grid,{container:!0,spacing:3,justify:"center",alignItems:"center"},a.a.createElement(l.Grid,{item:!0,xs:12,sm:8,md:6,lg:4},a.a.createElement(e,null)))}},73:function(e,t,n){e.exports=n(99)},74:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function l(e){r(i,o,a,l,c,"next",e)}function c(e){r(i,o,a,l,c,"throw",e)}l(void 0)}))}}n.d(t,"a",(function(){return o}))},99:function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n,r){var o=t&&t.prototype instanceof s?t:s,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=c(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=l;var u={};function s(){}function m(){}function f(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,d=h&&h(h(L([])));d&&d!==t&&n.call(d,o)&&(p=d);var g=f.prototype=s.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r;this._invoke=function(o,a){function i(){return new t((function(r,i){!function r(o,a,i,l){var u=c(e[o],e,a);if("throw"!==u.type){var s=u.arg,m=s.value;return m&&"object"===typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return m.prototype=g.constructor=f,f.constructor=m,f[i]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new y(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(g),g[i]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=panelSave.9a3cc158.chunk.js.map