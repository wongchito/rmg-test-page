(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[48],[function(e,t){e.exports=React},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t){e.exports=MaterialUI},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(3),a=n(1),c=n(0),i=Object(c.createContext)({}),s=Object(c.createContext)({}),l=function(e,t){var n,c,i,s,l,o;switch(t.type){case"GLOBAL":return t.data;case"ANY":return Object(a.a)({},e,Object(r.a)({},t.key,t.data));case"SET_HEIGHT":return Object(a.a)({},e,{svg_height:t.value});case"SET_WIDTH":return Object(a.a)({},e,{svgWidth:Object(a.a)({},e.svgWidth,Object(r.a)({},t.targetId,t.value))});case"SET_Y":return Object(a.a)({},e,{y_pc:t.value});case"SET_BRANCH_SPACING":return Object(a.a)({},e,{branch_spacing:t.value});case"SET_PADDING":return Object(a.a)({},e,{padding:t.value});case"SET_DIRECTION_GZ_X":return Object(a.a)({},e,{direction_gz_x:t.value});case"SET_DIRECTION_GZ_Y":return Object(a.a)({},e,{direction_gz_y:t.value});case"SET_LINE_NAME":return Object(a.a)({},e,{line_name:t.name});case"SET_THEME":return Object(a.a)({},e,{theme:t.theme});case"SET_DIRECTION":return Object(a.a)({},e,{direction:"l"===e.direction?"r":"l"});case"SET_PLATFORM":return Object(a.a)({},e,{platform_num:t.platform});case"SET_TEXT_FLIP":return Object(a.a)({},e,{txt_flip:!e.txt_flip});case"SET_DEST_LEGACY":return Object(a.a)({},e,{dest_legacy:t.isLegacy,customiseMTRDest:Object(a.a)({},e.customiseMTRDest,{isLegacy:t.isLegacy})});case"SET_TERMINAL_OVERRIDE":return Object(a.a)({},e,{customiseMTRDest:Object(a.a)({},e.customiseMTRDest,{terminal:t.terminal})});case"SET_LINE_NUM":return Object(a.a)({},e,{line_num:t.num});case"SET_PSD_NUM":return Object(a.a)({},e,{psd_num:t.num});case"SET_PANEL_TYPE":return Object(a.a)({},e,{info_panel_type:t.variant});case"ADD_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(n=e.notesGZMTR)||void 0===n?void 0:n.concat([["","",0,0,!1]])});case"REMOVE_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(c=e.notesGZMTR)||void 0===c?void 0:c.filter((function(e,n){return n!==t.idx}))});case"UPDATE_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(i=e.notesGZMTR)||void 0===i?void 0:i.map((function(e,n){return n===t.idx?t.note:e}))});case"UPDATE_STATION_NAME":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{name:t.name})))});case"UPDATE_STATION_NUM":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{num:t.num})))});case"UPDATE_STATION_TRANSFER":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:t.transfer})))});case"UPDATE_STATION_INTERCHANGE_INFO":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{info:null===(s=e.stn_list[t.stnId].transfer)||void 0===s?void 0:s.info.map((function(e,n){return n===t.setIdx?e.map((function(e,n){return n===t.intIdx?[0,1,2,3,4,5].map((function(n){return void 0===t.info[n]?e[n]:t.info[n]})):e})):e}))})})))});case"UPDATE_STATION_OSI_NAME":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{osi_names:[t.name]})})))});case"UPDATE_STATION_TICK_DIREC":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{tick_direc:t.direction})})))});case"UPDATE_STATION_PAID_AREA":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{paid_area:t.isPaid})})))});case"UPDATE_STATION_BRANCH_TYPE":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{branch:Object(a.a)({},e.stn_list[t.stnId].branch,Object(r.a)({},t.direction,[t.branchType,e.stn_list[t.stnId].branch[t.direction][1]]))})))});case"UPDATE_STATION_BRANCH_FIRST":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,(l={},Object(r.a)(l,t.branches[0].stnId,Object(a.a)({},e.stn_list[t.branches[0].stnId],{branch:Object(a.a)({},e.stn_list[t.branches[0].stnId].branch,Object(r.a)({},t.branches[0].direction,[e.stn_list[t.branches[0].stnId].branch[t.branches[0].direction][0],t.branches[0].first]))})),Object(r.a)(l,t.branches[1].stnId,Object(a.a)({},e.stn_list[t.branches[1].stnId],{branch:Object(a.a)({},e.stn_list[t.branches[1].stnId].branch,Object(r.a)({},t.branches[1].direction,[e.stn_list[t.branches[1].stnId].branch[t.branches[1].direction][0],t.branches[1].first]))})),l))});case"UPDATE_STATION_BRANCH_POS":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,(o={},Object(r.a)(o,t.left,Object(a.a)({},e.stn_list[t.left],{parents:e.stn_list[t.left].parents.slice().reverse()})),Object(r.a)(o,t.right,Object(a.a)({},e.stn_list[t.right],{children:e.stn_list[t.right].children.slice().reverse()})),o))});case"UPDATE_STATION_FACILITY":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{facility:t.facility})))});case"UPDATE_STATION_SERVICES":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{services:Array.from(t.isChecked?new Set(e.stn_list[t.stnId].services).add(t.serviceId):e.stn_list[t.stnId].services.filter((function(e){return e!==t.serviceId})))})))});case"UPDATE_STATION_LIST":return Object(a.a)({},e,{stn_list:t.stnList});default:return e}}},function(e,t){e.exports=ReactI18next},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o}));var r=n(4),a=n(0),c=n.n(a),i=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var r=n[t].parents[0];return r?1===n[r].children.length?e(r,n):0===n[r].children.indexOf(t)?1:-1:0},s=function(e){console.log("computing branches");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push([a]),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1])break}r++}return n},l=function(e){console.log("computing routes");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push(n[r].slice()),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1]&&"nonthrough"===e[a].branch.left[0])break}r++}return n},o=function(e){var t=c.a.useState([]),n=Object(r.a)(t,2),a=n[0],i=n[1];return c.a.useEffect((function(){if(console.log("computing tpo"),1!==e.length){var t=e.reduce((function(e,t){var n=e.indexOf(t.slice(-1)[0]);return e.slice(0,n).concat(t.slice(1),e.slice(n+1))}),["lineend"]).slice(0,-1);i(t)}else i(e[0].slice(1,-1))}),[e.toString()]),a}},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(4);function a(){var e,t=JSON.parse(localStorage.rmgParam);"line_name"in t||(t.line_name=["\u8def\u7dda\u540d","Name of Line"]),"dest_legacy"in t||(t.dest_legacy=!1),delete t.fontZH,delete t.fontEN,delete t.weightZH,delete t.weightEN;for(var n=0,a=Object.entries(t.stn_list);n<a.length;n++){var c=Object(r.a)(a[n],2),i=c[0],s=c[1];"branch"in s||(t.stn_list[i].branch={left:[],right:[]},2===s.children.length?t.stn_list[i].branch.right=["through",s.children[1]]:t.stn_list[i].branch.right=[],2===s.parents.length?t.stn_list[i].branch.left=["through",s.parents[1]]:t.stn_list[i].branch.left=[])}"psd_num"in t||(t.psd_num=1),"line_num"in t||(t.line_num=1),delete t.style,3===t.theme.length&&t.theme.push("#fff");for(var l=0,o=Object.entries(t.stn_list);l<o.length;l++){var u=Object(r.a)(o[l],2),f=u[0],b=u[1];["linestart","lineend"].includes(f)||("num"in b||(t.stn_list[f].num="00"))}for(var m=0,h=Object.values(t.stn_list);m<h.length;m++){var d=h[m];"interchange"in d&&d.interchange.map((function(e){return e.forEach((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}"info_panel_type"in t||(t.info_panel_type="panasonic");for(var p=0,g=Object.entries(t.stn_list);p<g.length;p++){var _=Object(r.a)(g[p],2),O=_[0],v=_[1];"osi22_end_p"===v.change_type&&(t.stn_list[O].change_type="osi22_pr"),"osi22_end_u"===v.change_type&&(t.stn_list[O].change_type="osi22_ur")}for(var y=0,j=Object.entries(t.stn_list);y<j.length;y++){var E=Object(r.a)(j[y],2),T=E[0];"interchange"in E[1]||(t.stn_list[T].interchange=[[]])}"gz_1"===t.info_panel_type&&(t.info_panel_type="gz28"),"panasonic"===t.info_panel_type&&(t.info_panel_type="gz28"),"gz_2"===t.info_panel_type&&(t.info_panel_type="gzgf"),"gz_3"===t.info_panel_type&&(t.info_panel_type="gz3"),"direction_gz_x"in t||(t.direction_gz_x=50),"direction_gz_y"in t||(t.direction_gz_y=70);for(var S=0,I=Object.entries(t.stn_list);S<I.length;S++){var w,A,P,N,x,k=Object(r.a)(I[S],2),D=k[0],M=k[1];if(!("transfer"in M))t.stn_list[D].transfer={type:null===(w=M.change_type)||void 0===w?void 0:w.split("_")[0],tick_direc:"none"===M.change_type||"int2"===M.change_type?"r":null===(A=M.change_type)||void 0===A?void 0:A.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(P=M.change_type)||void 0===P?void 0:P.indexOf("osi"))||"p"===(null===(N=M.change_type)||void 0===N?void 0:N.split("_")[1][0]),osi_names:-1!==(null===(x=M.change_type)||void 0===x?void 0:x.indexOf("osi"))?[M.interchange[1][0]]:[],info:2===M.interchange.length?[M.interchange[0],M.interchange[1].slice(1)]:M.interchange}}for(var C=0,R=Object.entries(t.stn_list);C<R.length;C++){var z=Object(r.a)(R[C],2),L=z[0];"services"in z[1]||(t.stn_list[L].services=["local"])}for(var B=0,G=Object.entries(t.stn_list);B<G.length;B++){var U=Object(r.a)(G[B],2),H=U[0];"usage"in U[1]||(t.stn_list[H].usage="")}for(var Z=0,F=Object.entries(t.stn_list);Z<F.length;Z++){var W=Object(r.a)(F[Z],2),J=W[0],Y=W[1];"facility"in Y||(t.stn_list[J].facility=Y.usage)}"customiseMTRDest"in t||(t.customiseMTRDest={isLegacy:t.dest_legacy||!1,terminal:!1}),"svgWidth"in t||(t.svgWidth={destination:t.svg_dest_width,runin:t.svg_dest_width,railmap:t.svg_width}),"notesGZMTR"in t||(t.notesGZMTR=[]),t.notesGZMTR=null===(e=t.notesGZMTR)||void 0===e?void 0:e.map((function(e){return 4===e.length?e.concat([!1]):e})),localStorage.setItem("rmgParam",JSON.stringify(t))}var c=function(e,t){return t.reduce((function(t,n){return t||(e[n]?e[n]:t)}),"")},i=function(e){return"".concat("gzmtr"===window.urlParams.get("style")?((null===e||void 0===e?void 0:e.num)||"-")+": ":"").concat(null===e||void 0===e?void 0:e.name.join().replace("\\"," "))}},function(e,t){e.exports=i18next},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=i18nextXHRBackend},function(e,t){e.exports=i18nextBrowserLanguageDetector},function(e,t,n){e.exports=n(21)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),i=n(16),s=(n(20),n(10)),l=n.n(s),o=n(6),u=n(17),f=n.n(u),b=n(18),m=n.n(b);l.a.use(f.a).use(m.a).use(o.initReactI18next).init({fallbackLng:{"zh-CN":["zh-Hans","en"],"zh-Hant":["zh-HK","en"],"zh-HK":["zh-Hant","en"],"zh-TW":["zh-HK","zh-Hant"],default:["en"]},backend:{loadPath:"/rmg-test-page/locale/{{lng}}.json"},interpolation:{escapeValue:!1}}).then((function(e){document.title=e("title"),document.documentElement.setAttribute("lang",l.a.language)}));var h=n(4),d=n(2),p=n(5),g=Object(d.makeStyles)((function(e){return Object(d.createStyles)({rootLight:{backgroundColor:e.palette.primary.main},rootDark:{backgroundColor:e.palette.background.paper},title:{flexGrow:1,color:"#fff"},menuButton:{color:"#fff"}})})),_=function(){var e=Object(o.useTranslation)(),t=e.t,n=e.i18n,r=g(),c=Object(d.useMediaQuery)("(prefers-color-scheme: dark)");return a.useMemo((function(){return a.createElement(d.AppBar,{position:"sticky",className:c?r.rootDark:r.rootLight},a.createElement(d.Toolbar,{variant:"dense"},a.createElement(d.Typography,{variant:"h6",className:r.title,color:"textPrimary"},t("title")),a.createElement(O,null),a.createElement(v,null)))}),[c,n.language])},O=function(){var e=Object(o.useTranslation)().t,t=g(),n=a.useContext(p.a),r=n.canvasAvailable,c=n.setCanvasToShown,i=a.useState(null),s=Object(h.a)(i,2),l=s[0],u=s[1],f=function(e){return function(){c(e),u(null)}};return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(d.Tooltip,{title:e("toggle.tooltip")},a.createElement(d.IconButton,{onClick:function(e){return u(e.currentTarget)},className:t.menuButton},a.createElement(d.Icon,null,"photo_library"))),a.createElement(d.Menu,{anchorEl:l,open:Boolean(l),onClose:function(){return u(null)}},r.map((function(t){return a.createElement(d.MenuItem,{key:t,onClick:f(t)},e("toggle."+t))})),a.createElement(d.Divider,{style:{margin:"6px 0"}}),a.createElement(d.MenuItem,{onClick:f("all")},e("toggle.all"))))}),[r.toString(),l,t.menuButton])},v=function(){var e=Object(o.useTranslation)().t,t=g(),n=a.useContext(p.a).setCanvasScale;return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(d.Tooltip,{title:e("zoom.out")},a.createElement(d.IconButton,{onClick:function(){return n((function(e){return e<=.1?e:e-.1}))},className:t.menuButton},a.createElement(d.Icon,null,"zoom_out"))),a.createElement(d.Tooltip,{title:e("zoom.in")},a.createElement(d.IconButton,{onClick:function(){return n((function(e){return e+.1}))},className:t.menuButton},a.createElement(d.Icon,null,"zoom_in"))))}),[t.menuButton])},y=n(3),j=function(e){switch(window.urlParams.get("style")){case"shmetro":return a.lazy((function(){return n.e(47).then(n.bind(null,80))}));default:return a.lazy((function(){return n.e(46).then(n.bind(null,81))}))}}(),E=function(e){return a.createElement("svg",e,e.children,a.createElement(j,null))},T=function(e){switch(window.urlParams.get("style")){case"shmetro":return c.a.lazy((function(){return n.e(67).then(n.bind(null,82))}));default:return c.a.lazy((function(){return n.e(66).then(n.bind(null,99))}))}}(),S=function(e){return c.a.createElement("svg",e,e.children,c.a.createElement(T,null))},I=function(e){switch(window.urlParams.get("style")){case"gzmtr":return a.lazy((function(){return n.e(63).then(n.bind(null,93))}));case"shmetro":return a.lazy((function(){return n.e(65).then(n.bind(null,97))}));default:return a.lazy((function(){return n.e(64).then(n.bind(null,94))}))}}(),w=function(e){return a.createElement("svg",e,e.children,a.createElement(I,null))},A=n(11),P=n(12),N=n(14),x=n(13),k=n(15),D=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(N.a)(this,Object(x.a)(t).call(this,e))).state={hasError:!1},n}return Object(k.a)(t,e),Object(P.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.a.Component),M=Object(d.makeStyles)((function(){return Object(d.createStyles)({root:{display:"flex",flexDirection:"row",overflowX:"scroll","&::before, &::after":{content:'""',margin:"auto"},"& > svg":{flex:"0 0 auto",border:"1px solid black"}}})})),C=function(){var e=M(),t=c.a.useContext(p.b).param,n=c.a.useContext(p.a),r=n.canvasAvailable,a=n.canvasToShown,i=n.canvasScale,s=function(e){var n;return{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:t.svg_height*i,viewBox:"0 0 ".concat(t.svgWidth[e]," ").concat(t.svg_height),style:(n={},Object(y.a)(n,"--rmg-svg-width",t.svgWidth[e]+"px"),Object(y.a)(n,"--rmg-svg-height",t.svg_height+"px"),Object(y.a)(n,"--rmg-theme-colour",t.theme[2]),Object(y.a)(n,"--rmg-theme-fg",t.theme[3]),n),children:c.a.createElement("rect",{x:0,y:0,fill:"white",stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})}};return c.a.createElement("div",{className:e.root},r.map((function(e){return[e,"all"].includes(a)&&c.a.createElement(c.a.Suspense,{key:e,fallback:c.a.createElement(d.CircularProgress,null)},c.a.createElement(D,null,function(e){switch(e){case"destination":return c.a.createElement(E,s(e));case"runin":return c.a.createElement(S,s(e));case"railmap":return c.a.createElement(w,s(e))}}(e)))})))},R=a.lazy((function(){return n.e(56).then(n.bind(null,92))})),z=a.lazy((function(){return n.e(53).then(n.bind(null,95))})),L=a.lazy((function(){return n.e(49).then(n.bind(null,96))})),B=a.lazy((function(){return n.e(58).then(n.bind(null,91))})),G=a.lazy((function(){return n.e(52).then(n.bind(null,83))})),U=Object(d.makeStyles)((function(e){return Object(d.createStyles)({typography:{background:e.palette.background.default},tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 5)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}},box:{display:"flex",justifyContent:"center",alignItems:"center"}})}));function H(e){var t=Object(o.useTranslation)(),n=t.t,r=t.i18n,c=U(),i=a.useState(0),s=Object(h.a)(i,2),l=s[0],u=s[1],f=a.useMemo((function(){return a.createElement(d.Typography,{className:c.typography,component:"div"},a.createElement(d.Tabs,{value:l,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return u(t)},variant:"scrollable",scrollButtons:"off"},[["file","insert_drive_file"],["layout","panorama"],["design","brush"],["stations","directions_transit"],["info","info"]].map((function(e,t){return a.createElement(d.Tab,{label:a.createElement("span",null,n("tab."+e[0])),icon:a.createElement(d.Icon,null,e[1]),key:t,className:c.tab})})),"/>"))}),[l,r.language,c.tab]);return a.createElement(a.Fragment,null,f,a.createElement(d.Typography,{className:c.typography,component:"div",role:"tabpanel",style:{overflow:"auto"}},a.createElement(d.Box,{p:3,className:c.box},a.createElement(a.Suspense,{fallback:a.createElement(d.CircularProgress,null)},function(t){switch(t){case 0:return a.createElement(R,null);case 1:return a.createElement(z,null);case 2:return a.createElement(L,null);case 3:return a.createElement(B,{theme:e.param.theme,stnList:e.param.stn_list,currentId:e.param.current_stn_idx,paramUpdate:e.paramUpdate,tpo:e.tpo});case 4:return a.createElement(G,null);default:return a.createElement(R,null)}}(l)))))}var Z=function(e){return a.createElement(a.Suspense,{fallback:a.createElement(d.CircularProgress,null)},a.createElement(H,e))},F=n(7),W=Object(d.createMuiTheme)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#018786"},error:{main:"#cf6679"}},overrides:{MuiDialog:{paper:{minWidth:280}}}}),J=Object(d.createMuiTheme)({palette:{primary:{light:"#bb86fc",main:"#6200ee"},secondary:{main:"#018786"},error:{main:"#b00020"}},overrides:{MuiDialog:{paper:{minWidth:280}}}});function Y(e){var t=Object(d.useMediaQuery)("(prefers-color-scheme: dark)")?W:J,n=Object(a.useState)(e.canvas.includes(localStorage.rmgCanvas)?localStorage.rmgCanvas:"all"),r=Object(h.a)(n,2),i=r[0],s=r[1];Object(a.useEffect)((function(){return localStorage.setItem("rmgCanvas",i)}),[i]);var l=Object(a.useState)(Number(localStorage.rmgScale)>=.1?Number(localStorage.rmgScale):1),o=Object(h.a)(l,2),u=o[0],f=o[1];return Object(a.useEffect)((function(){return localStorage.setItem("rmgScale",u.toFixed(1))}),[u]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.ThemeProvider,{theme:t},c.a.createElement(p.a.Provider,{value:{canvasAvailable:e.canvas,canvasToShown:i,setCanvasToShown:s,canvasScale:u,setCanvasScale:f}},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(d.LinearProgress,null)},c.a.createElement(_,null)),c.a.createElement(K,null))))}var X,K=function(){var e=Object(a.useReducer)(p.c,JSON.parse(localStorage.rmgParam)),t=Object(h.a)(e,2),n=t[0],r=t[1],i=JSON.stringify(n);Object(a.useEffect)((function(){return localStorage.setItem("rmgParam",i)}),[i]);var s=Object.keys(n.stn_list).reduce((function(e,t){return e+t+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","branch")(n.stn_list[t])}),""),l=Object(a.useMemo)((function(){return Object(F.a)(n.stn_list)}),[s]),o=Object(a.useMemo)((function(){return Object(F.b)(n.stn_list)}),[s]),u=Object(F.d)(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.b.Provider,{value:{param:n,dispatch:r,branches:l,routes:o,deps:s}},c.a.createElement(C,null),c.a.createElement("div",{style:{flex:1,overflow:"auto",display:"flex",flexDirection:"column"}},c.a.createElement(Z,{param:n,paramUpdate:function(e,t){return r({type:"ANY",key:e,data:t})},tpo:u}))),c.a.createElement("canvas",{style:{display:"none"}}))},V=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));switch("serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),window.urlParams.get("style")){case"mtr":case"gzmtr":case"shmetro":break;default:window.urlParams.set("style","mtr")}window.history.pushState({url:window.location.href},"","?"+window.urlParams.toString());var Q=function(e){switch(window.urlParams.get("style")){case"mtr":return["destination","railmap"];case"gzmtr":return["runin","railmap"];case"shmetro":return["destination","runin","railmap"];default:return[]}}();(X=document.head).append.apply(X,Object(r.a)(["share"].concat(Object(r.a)(Q)).map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href="/rmg-test-page"+"/styles/".concat(e,"_").concat(window.urlParams.get("style"),".css"),t.id="css_".concat(e),t}))));var q=function(){i.render(a.createElement(Y,{canvas:Q}),document.querySelectorAll("div#root")[0])};if(localStorage.rmgParam){try{Object(V.c)()}catch($){alert($+"Something error! Please refresh to start from a new canvas. "),console.error($),localStorage.removeItem("rmgParam")}q()}else n.e(0).then(n.bind(null,52)).then((function(e){localStorage.setItem("rmgParam",JSON.stringify(e.default)),Object(V.c)()})).then((function(){return q()}))}],[[19,68]]]);
//# sourceMappingURL=main.4969c0b7.chunk.js.map