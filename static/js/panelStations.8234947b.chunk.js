(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[60],{112:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(3),l=n(1),c=n(4),i=n(0),o=n.n(i),s=n(10),u=n(2),h=n(16),d=n(15),f=function(){return Math.floor(Math.random()*Math.pow(36,4)).toString(36).padStart(4,"0")};function p(e){var t="\u7678\u7532\u4e59\u4e19\u4e01\u620a\u5df1\u5e9a\u8f9b\u58ec\u65e5\u6708\u91d1\u6728\u6c34\u706b\u571f\u7af9\u6208\u5341\u5927\u4e2d\u4e00\u5f13\u4eba\u5fc3\u624b\u53e3\u5c38\u5eff\u5c71\u5973\u7530\u96e3\u535c\u91cd".split(""),n="Zero One Two Three Four Five Six Seven Eight Nine Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu".split(" ");return[e.split("").map((function(e){return t[parseInt(e,36)]})).join(""),e.split("").map((function(e){return n[parseInt(e,36)]})).join(" ")]}var m=n(8),b=o.a.memo((function(e){var t=Object(s.useTranslation)().t,n=Object(i.useContext)(m.a).rmgStyle,r=Object(i.useContext)(m.b).tpo,b={centre:t("stations.add.centre"),upper:t("stations.add.upper"),lower:t("stations.add.lower"),newupper:t("stations.add.newUpper"),newlower:t("stations.add.newLower")},g=o.a.useState("before"),E=Object(c.a)(g,2),v=E[0],O=E[1],y=o.a.useState(r[0]),j=Object(c.a)(y,2),C=j[0],S=j[1],I=o.a.useState(Object.keys(b)[0]),k=Object(c.a)(I,2),x=k[0],w=k[1],T=o.a.useState(Array(5).fill(!0)),L=Object(c.a)(T,2),D=L[0],N=L[1],_=o.a.useState(""),M=Object(c.a)(_,2),z=M[0],A=M[1],B=o.a.useState([]),U=Object(c.a)(B,2),F=U[0],J=U[1],H=o.a.useMemo((function(){return function(e,t,n){switch(n[t]?n[t]["before"===e?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=Object(d.c)(t,n);if(0===r){var a=function(e,t,n){var r=[];if("before"===e){for(;1===n[t].parents.length;)t=n[t].parents[0],r.unshift(t);r.pop()}else{for(;1===n[t].children.length;)t=n[t].children[0],r.push(t);r.shift()}return r}(e,t,n);return[1,0,0,a=a.length?a:[],a]}return r<0?"before"===e?[n[n[t].parents[0]].children.length-1,0,1,[],[]]:[n[n[t].children[0]].parents.length-1,0,1,[],[]]:"before"===e?[n[n[t].parents[0]].children.length-1,1,0,[],[]]:[n[n[t].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(v,C,e.stnList)}),[v,C,e.stnList]);o.a.useEffect((function(){console.log("new"),N(H.map((function(e){return"number"===typeof e?Boolean(e):Boolean(e.length)}))),J(H[3])}),[H.toString()]),o.a.useEffect((function(){return w(Object.keys(b)[D.indexOf(!0)])}),[D]),o.a.useEffect((function(){0!==F.length&&A(F[0])}),[F]),o.a.useEffect((function(){C in e.stnList||S(r[0])}),[Object.keys(e.stnList).toString()]);var P=function(t){if("close"===t)e.onClose("close");else{var n=function(e,t,n,r,c){for(var i=f();Object.keys(c).includes(i);)i=f();var o={name:p(i),num:"00",services:["local"],parents:[],children:[],branch:{left:[],right:[]},transfer:{info:[[]],type:"none",tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},s=JSON.parse(JSON.stringify(c));return"before"===e?"centre"===n?(o.parents=c[t].parents,0===c[t].parents.length&&0!==Object(d.c)(t,c)?o.children=c.linestart.children:0!==Object(d.c)(t,c)?(o.children=c[c[t].parents[0]].children.slice(),o.branch.right=c[o.parents[0]].branch.right,s[o.parents[0]].branch.right=[]):(o.children=[t],o.branch.left=c[t].branch.left,s[t].branch.left=[]),o.parents.forEach((function(e){s[e].children=[i]})),o.children.forEach((function(e){s[e].parents=[i]}))):"upper"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[0]&&(s[t].branch.left[1]=i),o.parents=c[t].parents.slice(0,1),o.children=[t],o.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[0]=i):(o.parents=c[t].parents,o.children=[t],o.parents.forEach((function(e){s[e].children[0]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),o.children.forEach((function(e){s[e].parents=[i]}))):"lower"===n?2===c[t].parents.length?(c[t].branch.left[1]===c[t].parents[1]&&(s[t].branch.left[1]=i),o.parents=c[t].parents.slice(1),o.children=[t],o.parents.forEach((function(e){s[e].children=[i]})),s[t].parents[1]=i):(o.parents=c[t].parents,o.children=[t],o.parents.forEach((function(e){var n=c[e].children.length;s[e].children[n-1]=i,c[e].branch.right[1]===t&&(s[e].branch.right[1]=i)})),o.children.forEach((function(e){s[e].parents=[i]}))):(s[t].branch.left=["through",i],s[r].branch.right=["through",i],o.parents=[r],o.children=[t],"newupper"===n?(s[r].children.unshift(i),s[t].parents.unshift(i)):(s[r].children.push(i),s[t].parents.push(i))):"centre"===n?(o.children=c[t].children,0===c[t].children.length&&0!==Object(d.c)(t,c)?o.parents=c.lineend.parents:0!==Object(d.c)(t,c)?(o.parents=c[c[t].children[0]].parents,o.branch.left=c[o.children[0]].branch.left,s[o.children[0]].branch.left=[]):(o.parents=[t],o.branch.right=c[t].branch.right,s[t].branch.right=[]),o.children.forEach((function(e){s[e].parents=[i]})),o.parents.forEach((function(e){s[e].children=[i]}))):"upper"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[0]&&(s[t].branch.right[1]=i),o.children=c[t].children.slice(0,1),o.parents=[t],o.children.forEach((function(e){s[e].parents=[i]})),s[t].children[0]=i):(o.children=c[t].children,o.parents=[t],o.children.forEach((function(e){s[e].parents[0]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),o.parents.forEach((function(e){s[e].children=[i]}))):"lower"===n?2===c[t].children.length?(c[t].branch.right[1]===c[t].children[1]&&(s[t].branch.right[1]=i),o.children=c[t].children.slice(1),o.parents=[t],o.children.forEach((function(e){s[e].parents=[i]})),s[t].children[1]=i):(o.children=c[t].children,o.parents=[t],o.children.forEach((function(e){s[e].parents[1===c[e].parents.length?0:1]=i,c[e].branch.left[1]===t&&(s[e].branch.left[1]=i)})),o.parents.forEach((function(e){s[e].children=[i]}))):(s[t].branch.right=["through",i],s[r].branch.left=["through",i],o.children=[r],o.parents=[t],"newupper"===n?(s[r].parents.unshift(i),s[t].children.unshift(i)):(s[r].parents.push(i),s[t].children.push(i))),[i,Object(l.a)({},s,Object(a.a)({},i,o))]}(v,C,x,z,e.stnList),r=Object(c.a)(n,2),i=r[0],o=r[1];e.paramUpdate("stn_list",o),e.onClose(i)}};return o.a.createElement(u.Dialog,{open:e.open,onClose:function(){return P("close")}},o.a.createElement(u.DialogTitle,null,t("stations.add.title")),o.a.createElement(u.DialogContent,{dividers:!0},o.a.createElement(u.List,null,o.a.createElement(u.ListItem,null,o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"control_camera")),o.a.createElement(u.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:t("stations.add.prep"),onChange:function(e){return O(e.target.value)},value:v},o.a.createElement(u.MenuItem,{key:"before",value:"before"},t("stations.add.before")),o.a.createElement(u.MenuItem,{key:"after",value:"after"},t("stations.add.after")))),o.a.createElement(u.ListItem,null,o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"near_me")),o.a.createElement(u.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:t("stations.add.pivot"),onChange:function(e){return S(e.target.value)},value:C},r.map((function(t){return o.a.createElement(u.MenuItem,{key:t,value:t},Object(h.a)(e.stnList[t],n))})))),o.a.createElement(u.ListItem,null,o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"share")),o.a.createElement(u.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:t("stations.add.loc"),onChange:function(e){return w(e.target.value)},value:x},Object.keys(b).map((function(e,t){return o.a.createElement(u.MenuItem,{key:e,value:e,disabled:!D[t]},b[e])})))),o.a.createElement(u.ListItem,{style:{display:["newupper","newlower"].includes(x)?"flex":"none"}},o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"undo")),o.a.createElement(u.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:t("stations.add.end"),onChange:function(e){return A(e.target.value)},value:z},F.map((function(t){return o.a.createElement(u.MenuItem,{key:t,value:t},Object(h.a)(e.stnList[t],n))})))))),o.a.createElement(u.DialogActions,null,o.a.createElement(u.Button,{onClick:function(){return P("close")},color:"primary"},t("dialog.cancel")),o.a.createElement(u.Button,{onClick:function(){return P("accept")},color:"primary",autoFocus:!0},t("dialog.ok"))))}),(function(e,t){if(e.open!==t.open)return!1;var n=function(e){return Object.keys(e).reduce((function(t,n){return t+n+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("parents","children","name","num")(e[n])}),"")};return n(e.stnList)===n(t.stnList)})),g=o.a.lazy((function(){return n.e(64).then(n.bind(null,121))})),E=o.a.lazy((function(){return n.e(62).then(n.bind(null,109))})),v=o.a.lazy((function(){return n.e(61).then(n.bind(null,110))})),O=o.a.lazy((function(){return n.e(63).then(n.bind(null,111))})),y=Object(u.makeStyles)((function(e){return Object(u.createStyles)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var j=function(e){var t=Object(s.useTranslation)().t,n=o.a.useContext(m.b),r=n.param,a=n.dispatch,i=r.stn_list[e.stnId],h=o.a.useState(0),d=Object(c.a)(h,2),f=d[0],p=d[1],b=y(),j=Object(u.useTheme)(),C=Object(u.useMediaQuery)(j.breakpoints.down("sm")),S=o.a.useMemo((function(){return o.a.createElement(u.Tabs,{value:f,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return p(t)},variant:"scrollable",scrollButtons:"off"},[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(e,n){return o.a.createElement(u.Tab,{label:o.a.createElement("span",null,t("stations.edit.tab."+e[0])),icon:o.a.createElement(u.Icon,null,e[1]),key:n,className:b.tab})})))}),[f,b.tab]),I=function(t){var n=Object(l.a)({},t,{info:t.info.map((function(e){return e.map((function(e){return 0===Object.values(e).length?r.theme.concat(["\u8f49\u7dab","Line"]):e}))}))});a({type:"UPDATE_STATION_TRANSFER",stnId:e.stnId,transfer:n})};return o.a.createElement(u.Dialog,{onClose:e.onClose,open:e.open,fullScreen:C},o.a.createElement(u.DialogTitle,null,t("stations.edit.title")),o.a.createElement(u.DialogContent,{dividers:!0,style:{padding:"0 16px"}},S,o.a.createElement(u.Typography,{component:"div",role:"tabpanel"},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(u.CircularProgress,null)},function(t){switch(t){case 0:return o.a.createElement(g,{stnId:e.stnId});case 1:return o.a.createElement(E,{stnTrans:i.transfer,onUpdate:I,stnId:e.stnId});case 2:return o.a.createElement(v,{stnId:e.stnId});case 3:return o.a.createElement(O,{facility:i.facility,services:new Set(i.services),onUpdate:function(t,n){return e.onUpdate(t,n)},stnId:e.stnId})}}(f)))),o.a.createElement(u.DialogActions,null,o.a.createElement(u.Button,{onClick:e.onClose,color:"primary",autoFocus:!0},t("dialog.done"))))},C=Object(u.makeStyles)((function(e){return Object(u.createStyles)({root:{backgroundColor:e.palette.background.paper,height:55,borderRadius:8,boxShadow:e.shadows[1]},rootSize:{margin:8,width:"calc((100% - 96px) / 6)"},rootSizeTablet:{margin:6,width:"calc((100% - 48px) / 4)"},rootSizeMobile:{margin:6,width:"calc((100% - 24px) / 2)"},stnChipText:{display:"block",textAlign:"center"},stnChipTextZH:{fontSize:18,fontWeight:500,lineHeight:"1.2rem"},stnChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre",overflow:"hidden"},addChipLabel:{fontWeight:500,fontSize:"1rem",lineHeight:"1.2rem",textAlign:"center",width:"100%"},stnChipLabel:{width:"100%"}})})),S=o.a.memo((function(e){var t=Object(i.useContext)(m.a).rmgStyle,n=Object(i.useContext)(m.b).tpo,r=Object(u.useMediaQuery)("(max-width: 839px) and (min-width: 480px)"),a=Object(u.useMediaQuery)("(max-width: 480px)"),l=C();return o.a.createElement("div",null,n.map((function(n,c){var i,s,h,d=o.a.createElement("span",null,o.a.createElement("span",{className:"".concat(l.stnChipText," ").concat(l.stnChipTextZH)},(null===(i=e.stnList[n])||void 0===i?void 0:i.name[0])||""),o.a.createElement("span",{className:"".concat(l.stnChipText," ").concat(l.stnChipTextEN)},(null===(s=e.stnList[n])||void 0===s?void 0:s.name[1].replace("\\","\r\n"))||""));return o.a.createElement(u.Chip,{key:n,icon:"gzmtr"!==t?o.a.createElement(o.a.Fragment,null):o.a.createElement(u.Avatar,{style:{backgroundColor:"unset"}},(null===(h=e.stnList[n])||void 0===h?void 0:h.num)||"00"),label:d,onClick:e.onSelection(n),classes:{label:l.stnChipLabel},className:"".concat(l.root," ").concat(a?l.rootSizeMobile:r?l.rootSizeTablet:l.rootSize)})})))}),(function(e,t){var n=function(e){return Object.keys(e).reduce((function(t,n){return t+n+function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t+JSON.stringify(e[n])}),"")}}("name","num")(e[n])}),"")};return n(e.stnList)===n(t.stnList)}));function I(e){var t=Object(s.useTranslation)().t;return i.createElement(u.Dialog,{open:e.open},i.createElement(u.DialogTitle,null,t("stations.remove.title")),i.createElement(u.DialogContent,null,i.createElement(u.DialogContentText,null,i.createElement(s.Trans,{i18nKey:"stations.remove.msg"},{name:e.stnInfo.name.join()}))),i.createElement(u.DialogActions,null,i.createElement(u.Button,{onClick:function(){return e.onClose("close")},color:"primary",autoFocus:!0},t("dialog.cancel")),i.createElement(u.Button,{onClick:function(){return e.onClose("accept")},color:"primary"},t("stations.remove.button"))))}function k(e){var t=Object(s.useTranslation)().t;return i.createElement(u.Dialog,{open:e.open,onClose:e.onClose},i.createElement(u.DialogTitle,null,t("stations.remove.error.title")),i.createElement(u.DialogContent,null,i.createElement(u.DialogContentText,null,t("stations.remove.error.msg"))),i.createElement(u.DialogActions,null,i.createElement(u.Button,{onClick:e.onClose,color:"primary",autoFocus:!0},t("dialog.ok"))))}var x=function(e){var t=Object(s.useTranslation)().t,n=i.useContext(m.b),r=n.dispatch,a=n.branches,l=function(t){var n=a[0];n.forEach((function(e,a){var l;l="ascend"===t?a.toString().padStart(2,"0"):(n.length-1-a).toString().padStart(2,"0"),r({type:"UPDATE_STATION_NUM",stnId:e,num:l})})),e.onClose()};return i.useMemo((function(){return i.createElement(u.Dialog,{onClose:e.onClose,open:e.open},i.createElement(u.DialogTitle,null,t("design.autoNum.title")),i.createElement(u.DialogContent,null,i.createElement(u.DialogContentText,null,t("design.autoNum.msg"))),i.createElement(u.DialogActions,null,i.createElement(u.Button,{onClick:e.onClose,color:"primary",autoFocus:!0},t("dialog.cancel")),i.createElement(u.Button,{onClick:function(){return l("ascend")},color:"primary"},t("design.autoNum.ascend")),i.createElement(u.Button,{onClick:function(){return l("descend")},color:"primary"},t("design.autoNum.descend"))))}),[e.open])},w=Object(u.makeStyles)((function(e){return Object(u.createStyles)({fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}})})),T=o.a.memo((function(e){var t=Object(s.useTranslation)().t,n=Object(i.useContext)(m.a).rmgStyle,r=w(),a=o.a.useState(null),l=Object(c.a)(a,2),h=l[0],d=l[1],f=function(t){return function(){d(null),e.onAction(t)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Tooltip,{title:t("stations.fabs.tooltip"),"aria-label":"options"},o.a.createElement(u.Fab,{color:"primary",className:r.fab,onClick:function(e){return d(e.target)}},o.a.createElement(u.Icon,null,"more_vert"))),o.a.createElement(u.Menu,{anchorEl:h,open:Boolean(h),onClose:function(){return d(null)}},o.a.createElement(u.MenuItem,{onClick:f("add")},o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"add_box")),o.a.createElement(u.ListItemText,{primary:t("stations.fabs.add")})),o.a.createElement(u.MenuItem,{onClick:f("reverse")},o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"cached")),o.a.createElement(u.ListItemText,{primary:t("stations.fabs.reverse")})),"gzmtr"===n&&o.a.createElement(u.MenuItem,{onClick:f("autonum")},o.a.createElement(u.ListItemIcon,null,o.a.createElement(u.Icon,null,"filter_1")),o.a.createElement(u.ListItemText,{primary:t("design.autoNum.button")}))))}),(function(){return!0})),L=function(e){var t=Object(s.useTranslation)().t,n=Object(i.useContext)(m.a).rmgStyle,f=Object(i.useState)(""),p=Object(c.a)(f,2),g=p[0],E=p[1],v=Object(i.useState)(!1),O=Object(c.a)(v,2),y=O[0],C=O[1],w=Object(i.useState)(!1),L=Object(c.a)(w,2),D=L[0],N=L[1],_=Object(i.useState)(!1),M=Object(c.a)(_,2),z=M[0],A=M[1],B=Object(i.useState)(!1),U=Object(c.a)(B,2),F=U[0],J=U[1],H=Object(i.useState)(!1),P=Object(c.a)(H,2),Q=P[0],R=P[1],W=Object(i.useState)(!1),Z=Object(c.a)(W,2),K=Z[0],G=Z[1],V=function(t){"clickaway"!==t&&(C(!1),"current"===t?e.paramUpdate("current_stn_idx",g):"edit"===t?A(!0):"delete"===t&&J(!0))};return o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(S,{stnList:e.stnList,onSelection:function(e){return function(){E(e),C(!0)}},addStationClick:function(){return N(!0)}}),o.a.createElement(u.Snackbar,{open:y,onClose:function(e,t){return V(t)},autoHideDuration:5e3,message:Object(h.a)(e.stnList[g],n),action:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Button,{color:"secondary",size:"small",onClick:function(){return V("current")}},t("stations.current")),o.a.createElement(u.Button,{color:"secondary",size:"small",onClick:function(){return V("edit")}},t("stations.edit.button")),o.a.createElement(u.Button,{color:"secondary",size:"small",onClick:function(){return V("delete")}},t("stations.remove.button")),o.a.createElement(u.IconButton,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return V("close")}},o.a.createElement(u.Icon,{fontSize:"small"},"close")))}),o.a.createElement(T,{onAction:function(t){if("add"===t&&N(!0),"reverse"===t){var n=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(e).forEach((function(n){var r=Object(l.a)({},e[n]);if("linestart"===n)t.lineend.parents=r.children.reverse(),t.lineend.branch={left:r.branch.right,right:[]};else if("lineend"===n)t.linestart.children=r.parents.reverse(),t.linestart.branch={left:[],right:r.branch.left};else{var a=r.children.reverse().map((function(e){switch(e){case"linestart":return"lineend";case"lineend":return"linestart";default:return e}}));t[n].children=r.parents.reverse().map((function(e){switch(e){case"linestart":return"lineend";case"lineend":return"linestart";default:return e}})),t[n].parents=a,t[n].branch.left=r.branch.right,t[n].branch.right=r.branch.left}})),t}(e.stnList);e.paramUpdate("stn_list",n)}"autonum"===t&&G(!0)}}),o.a.createElement(b,{open:D,stnList:e.stnList,onClose:function(e){"close"===e?N(!1):(N(!1),E(e),A(!0))},paramUpdate:e.paramUpdate}),o.a.createElement(j,{open:z,onClose:function(){return A(!1)},onUpdate:function(t,n,c){var i=g;if("facility"===n&&e.paramUpdate("stn_list",Object(l.a)({},e.stnList,Object(a.a)({},i,Object(l.a)({},e.stnList[i],{facility:t})))),"services"===n){var o=new Set(e.stnList[i].services);!1===t.selected?o.delete(t.chipId):o.add(t.chipId),e.paramUpdate("stn_list",Object(l.a)({},e.stnList,Object(a.a)({},i,Object(l.a)({},e.stnList[i],{services:Object(r.a)(o)}))))}},stnId:g}),o.a.createElement(I,{open:F,onClose:function(t){var n=g;if(J(!1),"accept"===t){var r=function(e,t){var n=JSON.parse(JSON.stringify(t)),r=n[e].parents,a=n[e].children,l=!0;for(var c in n)if(![e,"linestart","lineend"].includes(c)&&0===Object(d.c)(c,n)){l=!1;break}if(2===r.length&&2===a.length)return!1;if(l)return!1;if(4===Object.keys(n).length)return!1;if(2===r.length||2===a.length)console.log("this case"),r.forEach((function(e){n[e].children=a})),a.forEach((function(e){n[e].parents=r})),1===r.length&&(n[r[0]].branch.right=n[e].branch.right),1===a.length&&(n[a[0]].branch.left=n[e].branch.left);else if(2===n[r[0]].children.length&&2===n[a[0]].parents.length){var i=n[r[0]].children.indexOf(e),o=n[a[0]].parents.indexOf(e);n[r[0]].children.splice(i,1),n[a[0]].parents.splice(o,1),n[r[0]].branch.right=[],n[a[0]].branch.left=[]}else r.forEach((function(t){var r=n[t].children.indexOf(e);a.length?n[t].children[r]=a[0]:n[t].children.splice(r,1),n[t].branch.right[1]===e&&(n[t].branch.right[1]=a[0])})),a.forEach((function(t){var a=n[t].parents.indexOf(e);r.length?n[t].parents[a]=r[0]:n[t].parents.splice(a,1),n[t].branch.left[1]===e&&(n[t].branch.left[1]=r[0])}));return delete n[e],n}(n,e.stnList);if(!1===r)R(!0);else{if(e.currentId===n){var a=Object.keys(r).filter((function(e){return!["linestart","lineend"].includes(e)}))[0];e.paramUpdate("current_stn_idx",a)}e.paramUpdate("stn_list",r)}}},stnInfo:e.stnList[g]||e.stnList.linestart}),o.a.createElement(k,{open:Q,onClose:function(){return R(!1)}}),"gzmtr"===n&&o.a.createElement(x,{open:K,onClose:function(){return G(!1)}}))};t.default=L}}]);
//# sourceMappingURL=panelStations.8234947b.chunk.js.map