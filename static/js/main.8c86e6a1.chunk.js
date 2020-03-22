(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[51],{23:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(9),r=n(3),c=n(0),s=Object(c.createContext)({}),i=Object(c.createContext)({}),l=function(e,t){var n,c,s,i,l,o;switch(t.type){case"GLOBAL":return t.data;case"ANY":return Object(r.a)({},e,Object(a.a)({},t.key,t.data));case"SET_HEIGHT":return Object(r.a)({},e,{svg_height:t.value});case"SET_WIDTH":return Object(r.a)({},e,{svgWidth:Object(r.a)({},e.svgWidth,Object(a.a)({},t.targetId,t.value))});case"SET_Y":return Object(r.a)({},e,{y_pc:t.value});case"SET_BRANCH_SPACING":return Object(r.a)({},e,{branch_spacing:t.value});case"SET_PADDING":return Object(r.a)({},e,{padding:t.value});case"SET_DIRECTION_GZ_X":return Object(r.a)({},e,{direction_gz_x:t.value});case"SET_DIRECTION_GZ_Y":return Object(r.a)({},e,{direction_gz_y:t.value});case"SET_LINE_NAME":return Object(r.a)({},e,{line_name:t.name});case"SET_THEME":return Object(r.a)({},e,{theme:t.theme});case"SET_DIRECTION":return Object(r.a)({},e,{direction:"l"===e.direction?"r":"l"});case"SET_PLATFORM":return Object(r.a)({},e,{platform_num:t.platform});case"SET_TEXT_FLIP":return Object(r.a)({},e,{txt_flip:!e.txt_flip});case"SET_DEST_LEGACY":return Object(r.a)({},e,{dest_legacy:t.isLegacy,customiseMTRDest:Object(r.a)({},e.customiseMTRDest,{isLegacy:t.isLegacy})});case"SET_TERMINAL_OVERRIDE":return Object(r.a)({},e,{customiseMTRDest:Object(r.a)({},e.customiseMTRDest,{terminal:t.terminal})});case"SET_LINE_NUM":return Object(r.a)({},e,{line_num:t.num});case"SET_PSD_NUM":return Object(r.a)({},e,{psd_num:t.num});case"SET_PANEL_TYPE":return Object(r.a)({},e,{info_panel_type:t.variant});case"ADD_NOTE_GZMTR":return Object(r.a)({},e,{notesGZMTR:null===(n=e.notesGZMTR)||void 0===n?void 0:n.concat([["","",0,0,!1]])});case"REMOVE_NOTE_GZMTR":return Object(r.a)({},e,{notesGZMTR:null===(c=e.notesGZMTR)||void 0===c?void 0:c.filter((function(e,n){return n!==t.idx}))});case"UPDATE_NOTE_GZMTR":return Object(r.a)({},e,{notesGZMTR:null===(s=e.notesGZMTR)||void 0===s?void 0:s.map((function(e,n){return n===t.idx?t.note:e}))});case"UPDATE_STATION_NAME":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{name:t.name})))});case"UPDATE_STATION_NUM":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{num:t.num})))});case"UPDATE_STATION_TRANSFER":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{transfer:t.transfer})))});case"UPDATE_STATION_INTERCHANGE_INFO":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{transfer:Object(r.a)({},e.stn_list[t.stnId].transfer,{info:null===(i=e.stn_list[t.stnId].transfer)||void 0===i?void 0:i.info.map((function(e,n){return n===t.setIdx?e.map((function(e,n){return n===t.intIdx?[0,1,2,3,4,5].map((function(n){return void 0===t.info[n]?e[n]:t.info[n]})):e})):e}))})})))});case"UPDATE_STATION_OSI_NAME":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{transfer:Object(r.a)({},e.stn_list[t.stnId].transfer,{osi_names:[t.name]})})))});case"UPDATE_STATION_TICK_DIREC":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{transfer:Object(r.a)({},e.stn_list[t.stnId].transfer,{tick_direc:t.direction})})))});case"UPDATE_STATION_PAID_AREA":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{transfer:Object(r.a)({},e.stn_list[t.stnId].transfer,{paid_area:t.isPaid})})))});case"UPDATE_STATION_BRANCH_TYPE":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{branch:Object(r.a)({},e.stn_list[t.stnId].branch,Object(a.a)({},t.direction,[t.branchType,e.stn_list[t.stnId].branch[t.direction][1]]))})))});case"UPDATE_STATION_BRANCH_FIRST":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,(l={},Object(a.a)(l,t.branches[0].stnId,Object(r.a)({},e.stn_list[t.branches[0].stnId],{branch:Object(r.a)({},e.stn_list[t.branches[0].stnId].branch,Object(a.a)({},t.branches[0].direction,[e.stn_list[t.branches[0].stnId].branch[t.branches[0].direction][0],t.branches[0].first]))})),Object(a.a)(l,t.branches[1].stnId,Object(r.a)({},e.stn_list[t.branches[1].stnId],{branch:Object(r.a)({},e.stn_list[t.branches[1].stnId].branch,Object(a.a)({},t.branches[1].direction,[e.stn_list[t.branches[1].stnId].branch[t.branches[1].direction][0],t.branches[1].first]))})),l))});case"UPDATE_STATION_BRANCH_POS":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,(o={},Object(a.a)(o,t.left,Object(r.a)({},e.stn_list[t.left],{parents:e.stn_list[t.left].parents.slice().reverse()})),Object(a.a)(o,t.right,Object(r.a)({},e.stn_list[t.right],{children:e.stn_list[t.right].children.slice().reverse()})),o))});case"UPDATE_STATION_FACILITY":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{facility:t.facility})))});case"UPDATE_STATION_SERVICES":return Object(r.a)({},e,{stn_list:Object(r.a)({},e.stn_list,Object(a.a)({},t.stnId,Object(r.a)({},e.stn_list[t.stnId],{services:Array.from(t.isChecked?new Set(e.stn_list[t.stnId].services).add(t.serviceId):e.stn_list[t.stnId].services.filter((function(e){return e!==t.serviceId})))})))});case"UPDATE_STATION_LIST":return Object(r.a)({},e,{stn_list:t.stnList});default:return e}}},43:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return o}));var a=n(13),r=n(0),c=n.n(r),s=function e(t,n){if(["linestart","lineend"].includes(t)||n[t].parents.length>1||n[t].children.length>1)return 0;var a=n[t].parents[0];return a?1==n[a].children.length?e(a,n):0==n[a].children.indexOf(t)?1:-1:0},i=function(e){console.log("computing branches");for(var t=["linestart"],n=[["linestart"]],a=0;t.length;){var r=t.shift(),c=n[a].slice().reverse()[0]||null;for(c&&"linestart"!==r?n[a].push(r):n[a]=[r];"lineend"!==r;){var s=e[c=r].children;switch(s.length){case 1:r=s[0];break;case 2:var i=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push([r]),t.push(i)):0===a&&(n.push([c]),t.push(i)),r=s.filter((function(e){return e!=i}))[0]}if(n[a].push(r),c===e[r].branch.left[1])break}a++}return n},l=function(e){console.log("computing routes");for(var t=["linestart"],n=[["linestart"]],a=0;t.length;){var r=t.shift(),c=n[a].slice().reverse()[0]||null;for(c&&"linestart"!==r?n[a].push(r):n[a]=[r];"lineend"!==r;){var s=e[c=r].children;switch(s.length){case 1:r=s[0];break;case 2:var i=e[c].branch.right[1];"through"===e[c].branch.right[0]?(n.push(n[a].slice()),t.push(i)):0===a&&(n.push([c]),t.push(i)),r=s.filter((function(e){return e!=i}))[0]}if(n[a].push(r),c===e[r].branch.left[1]&&"nonthrough"===e[r].branch.left[0])break}a++}return n},o=function(e){var t=c.a.useState([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return c.a.useEffect((function(){if(console.log("computing tpo"),1!==e.length){var t=e.reduce((function(e,t){var n=e.indexOf(t.slice(-1)[0]);return e.slice(0,n).concat(t.slice(1),e.slice(n+1))}),["lineend"]).slice(0,-1);s(t)}else s(e[0].slice(1,-1))}),[e.toString()]),r}},54:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(13);function r(){var e,t=JSON.parse(localStorage.rmgParam);"line_name"in t||(t.line_name=["\u8def\u7dda\u540d","Name of Line"]),"dest_legacy"in t||(t.dest_legacy=!1),delete t.fontZH,delete t.fontEN,delete t.weightZH,delete t.weightEN;for(var n=0,r=Object.entries(t.stn_list);n<r.length;n++){var c=Object(a.a)(r[n],2),s=c[0],i=c[1];"branch"in i||(t.stn_list[s].branch={left:[],right:[]},2===i.children.length?t.stn_list[s].branch.right=["through",i.children[1]]:t.stn_list[s].branch.right=[],2===i.parents.length?t.stn_list[s].branch.left=["through",i.parents[1]]:t.stn_list[s].branch.left=[])}"psd_num"in t||(t.psd_num=1),"line_num"in t||(t.line_num=1),delete t.style,3===t.theme.length&&t.theme.push("#fff");for(var l=0,o=Object.entries(t.stn_list);l<o.length;l++){var u=Object(a.a)(o[l],2),m=u[0],d=u[1];["linestart","lineend"].includes(m)||("num"in d||(t.stn_list[m].num="00"))}for(var h=0,f=Object.entries(t.stn_list);h<f.length;h++){var b=Object(a.a)(f[h],2),_=(b[0],b[1]);"interchange"in _&&_.interchange.map((function(e){e.map((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}"info_panel_type"in t||(t.info_panel_type="panasonic");for(var g=0,p=Object.entries(t.stn_list);g<p.length;g++){var O=Object(a.a)(p[g],2),v=O[0],j=O[1];"osi22_end_p"===j.change_type&&(t.stn_list[v].change_type="osi22_pr"),"osi22_end_u"===j.change_type&&(t.stn_list[v].change_type="osi22_ur")}for(var E=0,y=Object.entries(t.stn_list);E<y.length;E++){var T=Object(a.a)(y[E],2),I=T[0];"interchange"in T[1]||(t.stn_list[I].interchange=[[]])}"gz_1"===t.info_panel_type&&(t.info_panel_type="gz28"),"panasonic"===t.info_panel_type&&(t.info_panel_type="gz28"),"gz_2"===t.info_panel_type&&(t.info_panel_type="gzgf"),"gz_3"===t.info_panel_type&&(t.info_panel_type="gz3"),"direction_gz_x"in t||(t.direction_gz_x=50),"direction_gz_y"in t||(t.direction_gz_y=70);for(var S=0,w=Object.entries(t.stn_list);S<w.length;S++){var N,A,P,x,k,z=Object(a.a)(w[S],2),C=z[0],D=z[1];if(!("transfer"in D))t.stn_list[C].transfer={type:null===(N=D.change_type)||void 0===N?void 0:N.split("_")[0],tick_direc:"none"===D.change_type||"int2"===D.change_type?"r":null===(A=D.change_type)||void 0===A?void 0:A.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(P=D.change_type)||void 0===P?void 0:P.indexOf("osi"))||"p"===(null===(x=D.change_type)||void 0===x?void 0:x.split("_")[1][0]),osi_names:-1!==(null===(k=D.change_type)||void 0===k?void 0:k.indexOf("osi"))?[D.interchange[1][0]]:[],info:2===D.interchange.length?[D.interchange[0],D.interchange[1].slice(1)]:D.interchange}}for(var M=0,R=Object.entries(t.stn_list);M<R.length;M++){var G=Object(a.a)(R[M],2),L=G[0];"services"in G[1]||(t.stn_list[L].services=["local"])}for(var U=0,H=Object.entries(t.stn_list);U<H.length;U++){var Z=Object(a.a)(H[U],2),B=Z[0];"usage"in Z[1]||(t.stn_list[B].usage="")}for(var W=0,F=Object.entries(t.stn_list);W<F.length;W++){var J=Object(a.a)(F[W],2),Y=J[0],K=J[1];"facility"in K||(t.stn_list[Y].facility=K.usage)}"customiseMTRDest"in t||(t.customiseMTRDest={isLegacy:t.dest_legacy||!1,terminal:!1}),"svgWidth"in t||(t.svgWidth={destination:t.svg_dest_width,runin:t.svg_dest_width,railmap:t.svg_width}),"notesGZMTR"in t||(t.notesGZMTR=[]),t.notesGZMTR=null===(e=t.notesGZMTR)||void 0===e?void 0:e.map((function(e){return 4===e.length?e.concat([!1]):e})),localStorage.setItem("rmgParam",JSON.stringify(t))}var c=function(e,t){return t.reduce((function(t,n){return t||(e[n]?e[n]:t)}),"")},s=function(e){return"".concat("gzmtr"===window.urlParams.get("style")?((null===e||void 0===e?void 0:e.num)||"-")+": ":"").concat(null===e||void 0===e?void 0:e.name.join().replace("\\"," "))}},81:function(e,t,n){e.exports=n(99)},86:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(53),r=n(0),c=n.n(r),s=n(10),i=(n(86),n(56)),l=n(26),o=n(70),u=n(71);i.a.use(o.a).use(u.a).use(l.b).init({fallbackLng:{"zh-CN":["zh-Hans","en"],"zh-Hant":["zh-HK","en"],"zh-HK":["zh-Hant","en"],"zh-TW":["zh-HK","zh-Hant"],default:["en"]},debug:!0,backend:{loadPath:"/rmg-test-page/locale/{{lng}}.json"},interpolation:{escapeValue:!1}}).then((function(e){document.title=e("title"),document.documentElement.setAttribute("lang",i.a.language)}));var m=n(13),d=n(123),h=n(143),f=n(125),b=n(126),_=n(127),g=n(128),p=n(144),O=n(131),v=n(132),j=n(108),E=n(134),y=n(135),T=n(23),I=Object(d.a)((function(e){return Object(h.a)({rootLight:{backgroundColor:e.palette.primary.main},rootDark:{backgroundColor:e.palette.background.paper},title:{flexGrow:1,color:"#fff"},menuButton:{color:"#fff"}})})),S=function(){var e=Object(l.c)(),t=e.t,n=e.i18n,a=I(),c=Object(f.a)("(prefers-color-scheme: dark)");return r.useMemo((function(){return r.createElement(b.a,{position:"sticky",className:c?a.rootDark:a.rootLight},r.createElement(_.a,{variant:"dense"},r.createElement(g.a,{variant:"h6",className:a.title,color:"textPrimary"},t("title")),r.createElement(w,null),r.createElement(N,null)))}),[c,n.language])},w=function(){var e=Object(l.c)().t,t=I(),n=r.useContext(T.a),a=n.canvasAvailable,c=n.setCanvasToShown,s=r.useState(null),i=Object(m.a)(s,2),o=i[0],u=i[1],d=function(e){return function(){c(e),u(null)}};return r.useMemo((function(){return r.createElement(r.Fragment,null,r.createElement(p.a,{title:e("toggle.tooltip")},r.createElement(O.a,{onClick:function(e){return u(e.currentTarget)},className:t.menuButton},r.createElement(v.a,null,"photo_library"))),r.createElement(j.a,{anchorEl:o,open:Boolean(o),onClose:function(){return u(null)}},a.map((function(t){return r.createElement(E.a,{key:t,onClick:d(t)},e("toggle."+t))})),r.createElement(y.a,{style:{margin:"6px 0"}}),r.createElement(E.a,{onClick:d("all")},e("toggle.all"))))}),[a.toString(),o,t.menuButton])},N=function(){var e=Object(l.c)().t,t=I(),n=r.useContext(T.a).setCanvasScale;return r.useMemo((function(){return r.createElement(r.Fragment,null,r.createElement(p.a,{title:e("zoom.out")},r.createElement(O.a,{onClick:function(){return n((function(e){return e<=.1?e:e-.1}))},className:t.menuButton},r.createElement(v.a,null,"zoom_out"))),r.createElement(p.a,{title:e("zoom.in")},r.createElement(O.a,{onClick:function(){return n((function(e){return e+.1}))},className:t.menuButton},r.createElement(v.a,null,"zoom_in"))))}),[t.menuButton])},A=n(9),P=function(e){switch(window.urlParams.get("style")){case"shmetro":return r.lazy((function(){return n.e(50).then(n.bind(null,242))}));default:return r.lazy((function(){return n.e(49).then(n.bind(null,243))}))}}(),x=function(e){return r.createElement("svg",e,e.children,r.createElement(P,null))},k=function(e){switch(window.urlParams.get("style")){case"shmetro":return c.a.lazy((function(){return n.e(70).then(n.bind(null,244))}));default:return c.a.lazy((function(){return n.e(69).then(n.bind(null,273))}))}}(),z=function(e){return c.a.createElement("svg",e,e.children,c.a.createElement(k,null))},C=function(e){switch(window.urlParams.get("style")){case"gzmtr":return r.lazy((function(){return n.e(66).then(n.bind(null,263))}));case"shmetro":return r.lazy((function(){return n.e(68).then(n.bind(null,267))}));default:return r.lazy((function(){return n.e(67).then(n.bind(null,258))}))}}(),D=function(e){return r.createElement("svg",e,e.children,r.createElement(C,null))},M=n(136),R=Object(d.a)((function(){return Object(h.a)({root:{display:"flex",flexDirection:"row",overflowX:"scroll","&::before, &::after":{content:'""',margin:"auto"},"& > svg":{flex:"0 0 auto",border:"1px solid black"}}})})),G=function(){var e=R(),t=c.a.useContext(T.b).param,n=c.a.useContext(T.a),a=n.canvasAvailable,r=n.canvasToShown,s=n.canvasScale,i=function(e){var n;return{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:t.svg_height*s,viewBox:"0 0 ".concat(t.svgWidth[e]," ").concat(t.svg_height),style:(n={},Object(A.a)(n,"--rmg-svg-width",t.svgWidth[e]+"px"),Object(A.a)(n,"--rmg-svg-height",t.svg_height+"px"),Object(A.a)(n,"--rmg-theme-colour",t.theme[2]),Object(A.a)(n,"--rmg-theme-fg",t.theme[3]),n),children:c.a.createElement("rect",{x:0,y:0,fill:"white",stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})}};return c.a.createElement("div",{className:e.root},a.map((function(e){return[e,"all"].includes(r)&&c.a.createElement(c.a.Suspense,{key:e,fallback:c.a.createElement(M.a,null)},function(e){switch(e){case"destination":return c.a.createElement(x,i(e));case"runin":return c.a.createElement(z,i(e));case"railmap":return c.a.createElement(D,i(e))}}(e))})))},L=n(141),U=n(137),H=n(140),Z=r.lazy((function(){return Promise.all([n.e(2),n.e(73),n.e(59)]).then(n.bind(null,259))})),B=r.lazy((function(){return Promise.all([n.e(1),n.e(48),n.e(56)]).then(n.bind(null,260))})),W=r.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(52)]).then(n.bind(null,265))})),F=r.lazy((function(){return Promise.all([n.e(1),n.e(2),n.e(77),n.e(61)]).then(n.bind(null,257))})),J=r.lazy((function(){return n.e(55).then(n.bind(null,261))})),Y=Object(d.a)((function(e){return Object(h.a)({typography:{background:e.palette.background.default},tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 5)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}},box:{display:"flex",justifyContent:"center",alignItems:"center"}})}));function K(e){var t=Object(l.c)(),n=t.t,a=t.i18n,c=Y(),s=r.useState(0),i=Object(m.a)(s,2),o=i[0],u=i[1],d=r.useMemo((function(){return r.createElement(g.a,{className:c.typography,component:"div"},r.createElement(L.a,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return u(t)},variant:"scrollable",scrollButtons:"off"},[["file","insert_drive_file"],["layout","panorama"],["design","brush"],["stations","directions_transit"],["info","info"]].map((function(e,t){return r.createElement(U.a,{label:r.createElement("span",null,n("tab."+e[0])),icon:r.createElement(v.a,null,e[1]),key:t,className:c.tab})})),"/>"))}),[o,a.language,c.tab]);return r.createElement(r.Fragment,null,d,r.createElement(g.a,{className:c.typography,component:"div",role:"tabpanel",style:{overflow:"auto"}},r.createElement(H.a,{p:3,className:c.box},r.createElement(r.Suspense,{fallback:r.createElement(M.a,null)},function(t){switch(t){case 0:return r.createElement(Z,null);case 1:return r.createElement(B,null);case 2:return r.createElement(W,null);case 3:return r.createElement(F,{theme:e.param.theme,stnList:e.param.stn_list,currentId:e.param.current_stn_idx,paramUpdate:e.paramUpdate,tpo:e.tpo});case 4:return r.createElement(J,null);default:return r.createElement(Z,null)}}(o)))))}var V=function(e){return r.createElement(r.Suspense,{fallback:r.createElement(M.a,null)},r.createElement(K,e))},X=n(43),q=n(73),$=n(138),Q=n(139),ee=Object(q.a)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#018786"},error:{main:"#cf6679"}},overrides:{MuiDialog:{paper:{minWidth:280}}}}),te=Object(q.a)({palette:{primary:{light:"#bb86fc",main:"#6200ee"},secondary:{main:"#018786"},error:{main:"#b00020"}},overrides:{MuiDialog:{paper:{minWidth:280}}}});function ne(e){var t=Object(f.a)("(prefers-color-scheme: dark)")?ee:te,n=Object(r.useState)(e.canvas.includes(localStorage.rmgCanvas)?localStorage.rmgCanvas:"all"),a=Object(m.a)(n,2),s=a[0],i=a[1];Object(r.useEffect)((function(){return localStorage.setItem("rmgCanvas",s)}),[s]);var l=Object(r.useState)(Number(localStorage.rmgScale)>=.1?Number(localStorage.rmgScale):1),o=Object(m.a)(l,2),u=o[0],d=o[1];return Object(r.useEffect)((function(){return localStorage.setItem("rmgScale",u.toFixed(1))}),[u]),c.a.createElement(c.a.Fragment,null,c.a.createElement($.a,{theme:t},c.a.createElement(T.a.Provider,{value:{canvasAvailable:e.canvas,canvasToShown:s,setCanvasToShown:i,canvasScale:u,setCanvasScale:d}},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(Q.a,null)},c.a.createElement(S,null)),c.a.createElement(re,null))))}var ae,re=function(){var e=Object(r.useReducer)(T.c,JSON.parse(localStorage.rmgParam)),t=Object(m.a)(e,2),n=t[0],a=t[1],s=JSON.stringify(n);Object(r.useEffect)((function(){return localStorage.setItem("rmgParam",s)}),[s]);var i=Object.keys(n.stn_list).reduce((function(e,t){return e+t+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","branch")(n.stn_list[t])}),""),l=Object(r.useMemo)((function(){return Object(X.a)(n.stn_list)}),[i]),o=Object(r.useMemo)((function(){return Object(X.b)(n.stn_list)}),[i]),u=Object(X.d)(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(T.b.Provider,{value:{param:n,dispatch:a,branches:l,routes:o,deps:i}},c.a.createElement(G,null),c.a.createElement("div",{style:{flex:1,overflow:"auto",display:"flex",flexDirection:"column"}},c.a.createElement(V,{param:n,paramUpdate:function(e,t){return a({type:"ANY",key:e,data:t})},tpo:u}))),c.a.createElement("canvas",{style:{display:"none"}}))},ce=n(54);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));switch("serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),window.urlParams.get("style")){case"mtr":case"gzmtr":case"shmetro":break;default:window.urlParams.set("style","mtr")}window.history.pushState({url:window.location.href},"","?"+window.urlParams.toString());var se=function(e){switch(window.urlParams.get("style")){case"mtr":return["destination","railmap"];case"gzmtr":return["runin","railmap"];case"shmetro":return["destination","runin","railmap"];default:return[]}}();(ae=document.head).append.apply(ae,Object(a.a)(["share"].concat(Object(a.a)(se)).map((function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href="/rmg-test-page/styles/".concat(e,"_").concat(window.urlParams.get("style"),".css"),t.id="css_".concat(e),t}))));var ie=function(){s.render(r.createElement(ne,{canvas:se}),document.querySelectorAll("div#root")[0])};if(localStorage.rmgParam){try{Object(ce.c)()}catch(le){alert(le+"Something error! Please refresh to start from a new canvas. "),console.error(le),localStorage.removeItem("rmgParam")}ie()}else n.e(0).then(n.bind(null,190)).then((function(e){localStorage.setItem("rmgParam",JSON.stringify(e.default)),Object(ce.c)()})).then((function(){return ie()}))}},[[81,71,72]]]);
//# sourceMappingURL=main.8c86e6a1.chunk.js.map