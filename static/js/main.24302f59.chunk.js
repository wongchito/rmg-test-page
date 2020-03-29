(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[52],[function(e,t){e.exports=React},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t){e.exports=MaterialUI},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(3),a=n(1),c=n(0),i=Object(c.createContext)({}),s=Object(c.createContext)({}),l=function(e,t){var n,c,i,s,l,o;switch(t.type){case"GLOBAL":return t.data;case"ANY":return Object(a.a)({},e,Object(r.a)({},t.key,t.data));case"SET_HEIGHT":return Object(a.a)({},e,{svg_height:t.value});case"SET_WIDTH":return Object(a.a)({},e,{svgWidth:Object(a.a)({},e.svgWidth,Object(r.a)({},t.targetId,t.value))});case"SET_Y":return Object(a.a)({},e,{y_pc:t.value});case"SET_BRANCH_SPACING":return Object(a.a)({},e,{branch_spacing:t.value});case"SET_PADDING":return Object(a.a)({},e,{padding:t.value});case"SET_DIRECTION_GZ_X":return Object(a.a)({},e,{direction_gz_x:t.value});case"SET_DIRECTION_GZ_Y":return Object(a.a)({},e,{direction_gz_y:t.value});case"SET_LINE_NAME":return Object(a.a)({},e,{line_name:t.name});case"SET_THEME":return Object(a.a)({},e,{theme:t.theme});case"SET_DIRECTION":return Object(a.a)({},e,{direction:"l"===e.direction?"r":"l"});case"SET_PLATFORM":return Object(a.a)({},e,{platform_num:t.platform});case"SET_TEXT_STAGGER":return Object(a.a)({},e,{namePosMTR:Object(a.a)({},e.namePosMTR,{isStagger:t.checked})});case"SET_TEXT_FLIP":return Object(a.a)({},e,{namePosMTR:Object(a.a)({},e.namePosMTR,{isFlip:!e.namePosMTR.isFlip})});case"SET_DEST_LEGACY":return Object(a.a)({},e,{customiseMTRDest:Object(a.a)({},e.customiseMTRDest,{isLegacy:t.isLegacy})});case"SET_TERMINAL_OVERRIDE":return Object(a.a)({},e,{customiseMTRDest:Object(a.a)({},e.customiseMTRDest,{terminal:t.terminal})});case"SET_LINE_NUM":return Object(a.a)({},e,{line_num:t.num});case"SET_PSD_NUM":return Object(a.a)({},e,{psd_num:t.num});case"SET_PANEL_TYPE":return Object(a.a)({},e,{info_panel_type:t.variant});case"ADD_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(n=e.notesGZMTR)||void 0===n?void 0:n.concat([["","",0,0,!1]])});case"REMOVE_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(c=e.notesGZMTR)||void 0===c?void 0:c.filter((function(e,n){return n!==t.idx}))});case"UPDATE_NOTE_GZMTR":return Object(a.a)({},e,{notesGZMTR:null===(i=e.notesGZMTR)||void 0===i?void 0:i.map((function(e,n){return n===t.idx?t.note:e}))});case"SET_CURRENT_STATION":return Object(a.a)({},e,{current_stn_idx:t.stnId});case"REVERSE_STATIONS":return Object(a.a)({},e,{stn_list:Object.keys(e.stn_list).reduce((function(t,n){return Object(a.a)({},t,Object(r.a)({},n,function(t){switch(t){case"linestart":return Object(a.a)({},e.stn_list.lineend,{parents:[],children:e.stn_list.lineend.parents.slice().reverse(),branch:{left:[],right:e.stn_list.lineend.branch.left}});case"lineend":return Object(a.a)({},e.stn_list.linestart,{parents:e.stn_list.linestart.children.slice().reverse(),children:[],branch:{left:e.stn_list.linestart.branch.right,right:[]}});default:return Object(a.a)({},e.stn_list[t],{parents:e.stn_list[t].children.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),children:e.stn_list[t].parents.map((function(e){return"linestart"===e?"lineend":"lineend"===e?"linestart":e})).reverse(),branch:{left:e.stn_list[t].branch.right,right:e.stn_list[t].branch.left}})}}(n)))}),{})});case"UPDATE_STATION_NAME":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{name:t.name})))});case"UPDATE_STATION_NUM":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{num:t.num})))});case"UPDATE_STATION_TRANSFER":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:t.transfer})))});case"UPDATE_STATION_INTERCHANGE_INFO":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{info:null===(s=e.stn_list[t.stnId].transfer)||void 0===s?void 0:s.info.map((function(e,n){return n===t.setIdx?e.map((function(e,n){return n===t.intIdx?[0,1,2,3,4,5].map((function(n){return void 0===t.info[n]?e[n]:t.info[n]})):e})):e}))})})))});case"UPDATE_STATION_OSI_NAME":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{osi_names:[t.name]})})))});case"UPDATE_STATION_TICK_DIREC":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{tick_direc:t.direction})})))});case"UPDATE_STATION_PAID_AREA":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{transfer:Object(a.a)({},e.stn_list[t.stnId].transfer,{paid_area:t.isPaid})})))});case"UPDATE_STATION_BRANCH_TYPE":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{branch:Object(a.a)({},e.stn_list[t.stnId].branch,Object(r.a)({},t.direction,[t.branchType,e.stn_list[t.stnId].branch[t.direction][1]]))})))});case"UPDATE_STATION_BRANCH_FIRST":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,(l={},Object(r.a)(l,t.branches[0].stnId,Object(a.a)({},e.stn_list[t.branches[0].stnId],{branch:Object(a.a)({},e.stn_list[t.branches[0].stnId].branch,Object(r.a)({},t.branches[0].direction,[e.stn_list[t.branches[0].stnId].branch[t.branches[0].direction][0],t.branches[0].first]))})),Object(r.a)(l,t.branches[1].stnId,Object(a.a)({},e.stn_list[t.branches[1].stnId],{branch:Object(a.a)({},e.stn_list[t.branches[1].stnId].branch,Object(r.a)({},t.branches[1].direction,[e.stn_list[t.branches[1].stnId].branch[t.branches[1].direction][0],t.branches[1].first]))})),l))});case"UPDATE_STATION_BRANCH_POS":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,(o={},Object(r.a)(o,t.left,Object(a.a)({},e.stn_list[t.left],{parents:e.stn_list[t.left].parents.slice().reverse()})),Object(r.a)(o,t.right,Object(a.a)({},e.stn_list[t.right],{children:e.stn_list[t.right].children.slice().reverse()})),o))});case"UPDATE_STATION_FACILITY":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{facility:t.facility})))});case"UPDATE_STATION_SERVICES":return Object(a.a)({},e,{stn_list:Object(a.a)({},e.stn_list,Object(r.a)({},t.stnId,Object(a.a)({},e.stn_list[t.stnId],{services:Array.from(t.isChecked?new Set(e.stn_list[t.stnId].services).add(t.serviceId):e.stn_list[t.stnId].services.filter((function(e){return e!==t.serviceId})))})))});case"UPDATE_STATION_LIST":return Object(a.a)({},e,{stn_list:t.stnList});default:return e}}},function(e,t){e.exports=ReactI18next},function(e,t){e.exports=ReactRouterDOM},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o}));var r=n(4),a=n(0),c=n.n(a),i=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var r=n[t].parents[0];return r?1===n[r].children.length?e(r,n):0===n[r].children.indexOf(t)?1:-1:0},s=function(e){console.log("computing branches");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push([a]),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1])break}r++}return n},l=function(e){console.log("computing routes");for(var t=["linestart"],n=[["linestart"]],r=0;t.length;){var a=t.shift(),c=n[r].slice().reverse()[0]||null;for(c&&"linestart"!==a?n[r].push(a):n[r]=[a];"lineend"!==a;){var i=e[c=a].children;if(function(){switch(i.length){case 1:a=i[0];break;case 2:var s=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push(n[r].slice()),t.push(s)):0===r&&(n.push([c]),t.push(s)),a=i.filter((function(e){return e!==s}))[0]}}(),n[r].push(a),c===e[a].branch.left[1]&&"nonthrough"===e[a].branch.left[0])break}r++}return n},o=function(e){var t=c.a.useState([]),n=Object(r.a)(t,2),a=n[0],i=n[1];return c.a.useEffect((function(){if(console.log("computing tpo"),1!==e.length){var t=e.reduce((function(e,t){var n=e.indexOf(t.slice(-1)[0]);return e.slice(0,n).concat(t.slice(1),e.slice(n+1))}),["lineend"]).slice(0,-1);i(t)}else i(e[0].slice(1,-1))}),[e.toString()]),a}},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(4);function a(){var e,t=JSON.parse(localStorage.rmgParam);"line_name"in t||(t.line_name=["\u8def\u7dda\u540d","Name of Line"]),"dest_legacy"in t||(t.dest_legacy=!1),delete t.fontZH,delete t.fontEN,delete t.weightZH,delete t.weightEN;for(var n=0,a=Object.entries(t.stn_list);n<a.length;n++){var c=Object(r.a)(a[n],2),i=c[0],s=c[1];"branch"in s||(t.stn_list[i].branch={left:[],right:[]},2===s.children.length?t.stn_list[i].branch.right=["through",s.children[1]]:t.stn_list[i].branch.right=[],2===s.parents.length?t.stn_list[i].branch.left=["through",s.parents[1]]:t.stn_list[i].branch.left=[])}t.psd_num="psd_num"in t?t.psd_num.toString():"1","line_num"in t||(t.line_num="1"),delete t.style,3===t.theme.length&&t.theme.push("#fff");for(var l=0,o=Object.entries(t.stn_list);l<o.length;l++){var u=Object(r.a)(o[l],2),f=u[0],b=u[1];"num"in b||(t.stn_list[f].num="00"),"interchange"in b&&b.interchange.map((function(e){return e.forEach((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}for(var h=0,d=Object.entries(t.stn_list);h<d.length;h++){var m=Object(r.a)(d[h],2),g=m[0],_=m[1];"osi22_end_p"===_.change_type&&(t.stn_list[g].change_type="osi22_pr"),"osi22_end_u"===_.change_type&&(t.stn_list[g].change_type="osi22_ur")}for(var p=0,O=Object.entries(t.stn_list);p<O.length;p++){var v=Object(r.a)(O[p],2),j=v[0];"interchange"in v[1]||(t.stn_list[j].interchange=[[]])}t.info_panel_type="info_panel_type"in t?function(e){switch(e){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return e}}(t.info_panel_type):"gz28","direction_gz_x"in t||(t.direction_gz_x=50),"direction_gz_y"in t||(t.direction_gz_y=70);for(var y=0,E=Object.entries(t.stn_list);y<E.length;y++){var T,S,I,w,A,x=Object(r.a)(E[y],2),N=x[0],k=x[1];if(!("transfer"in k))t.stn_list[N].transfer={type:null===(T=k.change_type)||void 0===T?void 0:T.split("_")[0],tick_direc:"none"===k.change_type||"int2"===k.change_type?"r":null===(S=k.change_type)||void 0===S?void 0:S.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(I=k.change_type)||void 0===I?void 0:I.indexOf("osi"))||"p"===(null===(w=k.change_type)||void 0===w?void 0:w.split("_")[1][0]),osi_names:-1!==(null===(A=k.change_type)||void 0===A?void 0:A.indexOf("osi"))?[k.interchange[1][0]]:[],info:2===k.interchange.length?[k.interchange[0],k.interchange[1].slice(1)]:k.interchange};delete t.stn_list[N].change_type,delete t.stn_list[N].interchange}for(var P=0,R=Object.entries(t.stn_list);P<R.length;P++){var M=Object(r.a)(R[P],2),C=M[0],D=M[1];"services"in D||(t.stn_list[C].services=["local"]),"facility"in D||(t.stn_list[C].facility="usage"in D?D.usage:""),delete t.stn_list[C].usage}"customiseMTRDest"in t||(t.customiseMTRDest={isLegacy:t.dest_legacy||!1,terminal:!1}),delete t.dest_legacy,"svgWidth"in t||(t.svgWidth={destination:t.svg_dest_width,runin:t.svg_dest_width,railmap:t.svg_width}),delete t.svg_width,delete t.svg_dest_width,"notesGZMTR"in t||(t.notesGZMTR=[]),t.notesGZMTR=null===(e=t.notesGZMTR)||void 0===e?void 0:e.map((function(e){return 4===e.length?e.concat([!1]):e})),delete t.char_form,delete t.show_outer,delete t.strip_pc,delete t.txt_bg_gap,"namePosMTR"in t||(t.namePosMTR={isStagger:!0,isFlip:t.txt_flip}),delete t.txt_flip,Object.keys(t.stn_list).forEach((function(e){"secondaryName"in t.stn_list[e]||(t.stn_list[e].secondaryName=["",""])})),localStorage.setItem("rmgParam",JSON.stringify(t))}var c=function(e,t){var n=!0,r=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var s=c.value;if(e[s])return e[s]}}catch(l){r=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}return e.en},i=function(e,t){return("gzmtr"===t?((null===e||void 0===e?void 0:e.num)||"-")+": ":"")+(null===e||void 0===e?void 0:e.name.join().replace("\\"," "))}},function(e,t){e.exports=i18next},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return a}))},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=i18nextXHRBackend},function(e,t){e.exports=i18nextBrowserLanguageDetector},function(e,t,n){e.exports=n(22)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),i=n(17),s=(n(21),n(11)),l=n.n(s),o=n(6),u=n(18),f=n.n(u),b=n(19),h=n.n(b);l.a.use(f.a).use(h.a).use(o.initReactI18next).init({fallbackLng:{"zh-CN":["zh-Hans","en"],"zh-Hant":["zh-HK","en"],"zh-HK":["zh-Hant","en"],"zh-TW":["zh-HK","zh-Hant"],default:["en"]},backend:{loadPath:"/rmg-test-page/locale/{{lng}}.json"},interpolation:{escapeValue:!1}}).then((function(e){document.title=e("title"),document.documentElement.setAttribute("lang",l.a.language)}));var d=n(4),m=n(7),g=n(2),_=n(5),p=Object(g.makeStyles)((function(e){return Object(g.createStyles)({rootLight:{backgroundColor:e.palette.primary.main},rootDark:{backgroundColor:e.palette.background.paper},title:{flexGrow:1,color:"#fff"},menuButton:{color:"#fff"}})})),O=function(){var e=Object(o.useTranslation)(),t=e.t,n=e.i18n,r=p(),c=Object(g.useMediaQuery)("(prefers-color-scheme: dark)");return a.useMemo((function(){return a.createElement(g.AppBar,{position:"sticky",className:c?r.rootDark:r.rootLight},a.createElement(g.Toolbar,{variant:"dense"},a.createElement(g.Typography,{variant:"h6",className:r.title,color:"textPrimary"},t("title")),a.createElement(v,null),a.createElement(j,null)))}),[c,n.language])},v=function(){var e=Object(o.useTranslation)().t,t=p(),n=a.useContext(_.a),r=n.canvasAvailable,c=n.setCanvasToShown,i=a.useState(null),s=Object(d.a)(i,2),l=s[0],u=s[1],f=function(e){return function(){c(e),u(null)}};return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(g.Tooltip,{title:e("toggle.tooltip")},a.createElement(g.IconButton,{onClick:function(e){return u(e.currentTarget)},className:t.menuButton},a.createElement(g.Icon,null,"photo_library"))),a.createElement(g.Menu,{anchorEl:l,open:Boolean(l),onClose:function(){return u(null)}},r.map((function(t){return a.createElement(g.MenuItem,{key:t,onClick:f(t)},e("toggle."+t))})),a.createElement(g.Divider,{style:{margin:"6px 0"}}),a.createElement(g.MenuItem,{onClick:f("all")},e("toggle.all"))))}),[r.toString(),l,t.menuButton])},j=function(){var e=Object(o.useTranslation)().t,t=p(),n=a.useContext(_.a).setCanvasScale;return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(g.Tooltip,{title:e("zoom.out")},a.createElement(g.IconButton,{onClick:function(){return n((function(e){return e<=.1?e:e-.1}))},className:t.menuButton},a.createElement(g.Icon,null,"zoom_out"))),a.createElement(g.Tooltip,{title:e("zoom.in")},a.createElement(g.IconButton,{onClick:function(){return n((function(e){return e+.1}))},className:t.menuButton},a.createElement(g.Icon,null,"zoom_in"))))}),[t.menuButton])},y=n(3),E=n(12),T=n(13),S=n(15),I=n(14),w=n(16),A=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(S.a)(this,Object(I.a)(t).call(this,e))).state={hasError:!1},n}return Object(w.a)(t,e),Object(T.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.a.Component),x=Object(g.makeStyles)((function(){return Object(g.createStyles)({root:{display:"flex",flexDirection:"row",overflowX:"scroll","&::before, &::after":{content:'""',margin:"auto"},"& > svg":{flex:"0 0 auto",border:"1px solid black"}}})})),N=function(){var e=x(),t=c.a.useContext(_.b).param,n=c.a.useContext(_.a).canvasScale,r=c.a.useCallback((function(e){var r;return{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:t.svg_height*n,viewBox:"0 0 ".concat(t.svgWidth[e]," ").concat(t.svg_height),style:(r={},Object(y.a)(r,"--rmg-svg-width",t.svgWidth[e]+"px"),Object(y.a)(r,"--rmg-svg-height",t.svg_height+"px"),Object(y.a)(r,"--rmg-theme-colour",t.theme[2]),Object(y.a)(r,"--rmg-theme-fg",t.theme[3]),r)}}),[t.svg_height,JSON.stringify(t.svgWidth),t.theme[2],t.theme[3],n]);return c.a.createElement("div",{className:e.root},c.a.createElement(m.Switch,null,Object.keys(G).map((function(e){return c.a.createElement(m.Route,{path:"/".concat(e),key:e},c.a.createElement(k,{rmgStyle:e,canvasAvailable:G[e],svgProps:r}))})),c.a.createElement(m.Redirect,{to:"/"+(new URLSearchParams(window.location.search).get("style")||"mtr")})))},k=Object(a.memo)((function(e){var t=Object(a.useContext)(_.a),n=t.canvasToShown,i=t.setCanvasToShown,s=t.setCanvasAvailable;return Object(a.useEffect)((function(){["share","destination","runin","railmap"].forEach((function(t){t in e.canvasAvailable||"share"===t?document.getElementById("css_"+t).href="/rmg-test-page"+"/styles/".concat(t,"_").concat(e.rmgStyle,".css"):document.getElementById("css_"+t).href=""})),s(Object.keys(e.canvasAvailable)),i((function(t){return["all"].concat(Object(r.a)(Object.keys(e.canvasAvailable))).includes(t)?t:"all"}))}),[]),c.a.createElement(c.a.Fragment,null,Object.keys(e.canvasAvailable).map((function(t){return["all",t].includes(n)&&c.a.createElement(c.a.Suspense,{key:t,fallback:c.a.createElement(g.CircularProgress,null)},c.a.createElement(A,null,c.a.createElement("svg",e.svgProps(t),c.a.createElement("rect",{id:"canvas-bg",x:0,y:0,fill:"white",stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),e.canvasAvailable[t])))})))})),P=Object(a.lazy)((function(){return n.e(70).then(n.bind(null,104))})),R=Object(a.lazy)((function(){return n.e(67).then(n.bind(null,98))})),M=Object(a.lazy)((function(){return n.e(50).then(n.bind(null,85))})),C=Object(a.lazy)((function(){return n.e(68).then(n.bind(null,99))})),D=Object(a.lazy)((function(){return n.e(51).then(n.bind(null,86))})),z=Object(a.lazy)((function(){return n.e(71).then(n.bind(null,87))})),B=Object(a.lazy)((function(){return n.e(69).then(n.bind(null,100))})),G={gzmtr:{runin:c.a.createElement(P,null),railmap:c.a.createElement(R,null)},mtr:{destination:c.a.createElement(M,null),railmap:c.a.createElement(C,null)},shmetro:{destination:c.a.createElement(D,null),runin:c.a.createElement(z,null),railmap:c.a.createElement(B,null)}},L=N,H=a.lazy((function(){return n.e(60).then(n.bind(null,97))})),U=a.lazy((function(){return n.e(57).then(n.bind(null,101))})),Z=a.lazy((function(){return n.e(53).then(n.bind(null,102))})),W=a.lazy((function(){return n.e(62).then(n.bind(null,96))})),F=a.lazy((function(){return n.e(56).then(n.bind(null,88))})),J=Object(g.makeStyles)((function(e){var t;return Object(g.createStyles)({root:Object(y.a)({display:"flex",flexDirection:"row",height:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),typography:{background:e.palette.background.default},tab:(t={padding:"6px 24px",height:48},Object(y.a)(t,e.breakpoints.down("xs"),{minWidth:"calc(100% / 5)"}),Object(y.a)(t,"& .MuiTab-wrapper",{flexDirection:"row"}),Object(y.a)(t,"&.MuiTab-labelIcon",{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}),t),tabs:{overflow:"auto","&::-webkit-scrollbar":{width:0},scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},tabpanel:{overflow:"auto",flex:1},box:{display:"flex",justifyContent:"center",alignItems:"center"}})}));function Y(){var e=Object(o.useTranslation)(),t=e.t,n=e.i18n,r=J(),c=Object(g.useTheme)(),i=Object(g.useMediaQuery)(c.breakpoints.down("xs")),s=a.useState(0),l=Object(d.a)(s,2),u=l[0],f=l[1],b=a.useMemo((function(){return a.createElement(g.Typography,{className:"".concat(r.typography," ").concat(r.tabs),component:"div"},a.createElement(g.Tabs,{value:u,orientation:i?"horizontal":"vertical",indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return f(t)},variant:"scrollable",scrollButtons:"off"},[["file","insert_drive_file"],["layout","panorama"],["design","brush"],["stations","directions_transit"],["info","info"]].map((function(e,n){return a.createElement(g.Tab,{label:a.createElement("span",null,t("tab."+e[0])),icon:a.createElement(g.Icon,null,e[1]),key:n,className:r.tab})})),"/>"))}),[u,n.language,r.tab,i]);return a.createElement("div",{className:r.root},b,a.createElement(g.Typography,{className:"".concat(r.typography," ").concat(r.tabpanel),component:"div",role:"tabpanel"},a.createElement(g.Box,{p:3,className:r.box},a.createElement(a.Suspense,{fallback:a.createElement(g.CircularProgress,null)},function(e){switch(e){case 0:return a.createElement(H,null);case 1:return a.createElement(U,null);case 2:return a.createElement(Z,null);case 3:return a.createElement(W,null);case 4:return a.createElement(F,null);default:return a.createElement(H,null)}}(u)))))}var X=function(){return a.createElement(a.Suspense,{fallback:a.createElement(g.CircularProgress,null)},a.createElement(Y,null))},V=n(9),K=Object(g.createMuiTheme)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#018786"},error:{main:"#cf6679"}},overrides:{MuiDialog:{paper:{minWidth:280}}}}),Q=Object(g.createMuiTheme)({palette:{primary:{light:"#bb86fc",main:"#6200ee"},secondary:{main:"#018786"},error:{main:"#b00020"}},overrides:{MuiDialog:{paper:{minWidth:280}}}});function q(){var e=Object(g.useMediaQuery)("(prefers-color-scheme: dark)")?K:Q,t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(localStorage.rmgCanvas),l=Object(d.a)(s,2),o=l[0],u=l[1];Object(a.useEffect)((function(){return localStorage.setItem("rmgCanvas",o)}),[o]);var f=Object(a.useState)(Number(localStorage.rmgScale)>=.1?Number(localStorage.rmgScale):1),b=Object(d.a)(f,2),h=b[0],p=b[1];return Object(a.useEffect)((function(){return localStorage.setItem("rmgScale",h.toFixed(1))}),[h]),c.a.createElement(m.BrowserRouter,{basename:"/rmg-test-page"},c.a.createElement(g.ThemeProvider,{theme:e},c.a.createElement(_.a.Provider,{value:{rmgStyle:window.location.pathname.split("/")[2],canvasAvailable:r,setCanvasAvailable:i,canvasToShown:o,setCanvasToShown:u,canvasScale:h,setCanvasScale:p}},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(g.LinearProgress,null)},c.a.createElement(O,null)),c.a.createElement(ee,null))))}var $,ee=function(){var e=Object(a.useReducer)(_.c,JSON.parse(localStorage.rmgParam)),t=Object(d.a)(e,2),n=t[0],r=t[1],i=JSON.stringify(n);Object(a.useEffect)((function(){return localStorage.setItem("rmgParam",i)}),[i]);var s=Object.keys(n.stn_list).reduce((function(e,t){return e+t+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","branch")(n.stn_list[t])}),""),l=Object(a.useMemo)((function(){return Object(V.a)(n.stn_list)}),[s]),o=Object(a.useMemo)((function(){return Object(V.b)(n.stn_list)}),[s]),u=Object(V.d)(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.b.Provider,{value:{param:n,dispatch:r,branches:l,routes:o,deps:s,tpo:u}},c.a.createElement("div",{style:{overflowY:"auto"}},c.a.createElement(L,null)),c.a.createElement("div",{style:{flex:1,overflow:"hidden"}},c.a.createElement(X,null))),c.a.createElement("canvas",{style:{display:"none"}}))},te=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),($=document.head).append.apply($,Object(r.a)(["share","destination","runin","railmap"].map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.id="css_"+e,t}))));var ne=function(){i.render(a.createElement(q,null),document.querySelectorAll("div#root")[0])};if(localStorage.rmgParam){try{Object(te.c)()}catch(re){alert(re+"Something error! Please refresh to start from a new canvas. "),console.error(re),localStorage.removeItem("rmgParam")}ne()}else n.e(0).then(n.bind(null,55)).then((function(e){localStorage.setItem("rmgParam",JSON.stringify(e.default)),Object(te.c)()})).then((function(){return ne()}))}],[[20,72]]]);
//# sourceMappingURL=main.24302f59.chunk.js.map