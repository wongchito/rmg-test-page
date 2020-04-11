(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[62],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n(4),l=n(6),c=n(62),u=n(5),m=Object(r.makeStyles)((function(e){return Object(r.createStyles)({dividerVertical:{margin:e.spacing(0,2)},nestedList:{paddingLeft:e.spacing(5)}})})),s=function(){var e=Object(l.useTranslation)().t,t=Object(a.useContext)(u.a).rmgStyle,n=o.a.useContext(u.b),m=n.param,s=n.dispatch,f=o.a.useState(!1),p=Object(i.a)(f,2),E=p[0],y=p[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.ListItem,{button:!0,onClick:function(){return y(!0)}},o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"color_lens")),o.a.createElement(r.ListItemText,{primary:e("design.theme"),secondary:o.a.createElement("span",{style:{backgroundColor:m.theme[2],color:m.theme[3],padding:".1rem .3rem"}},Object.values(m.line_name).join())}),o.a.createElement(r.Icon,{color:"action"},"arrow_right")),o.a.createElement(c.a,{open:E,theme:m.theme,lineName:m.line_name,onUpdate:function(e,t){"name"===e&&s({type:"SET_LINE_NAME",name:Object.values(t)}),"theme"===e&&s({type:"SET_THEME",theme:t})},onClose:function(){return y(!1)}}),o.a.createElement(r.Divider,null),o.a.createElement(h,null),o.a.createElement(r.Divider,null),"shmetro"===t?o.a.createElement(g,null):o.a.createElement(d,null))},h=function(){var e=Object(l.useTranslation)().t,t=m(),n=o.a.useContext(u.b),a=n.param,i=n.dispatch;return o.a.useMemo((function(){return o.a.createElement(r.ListItem,null,o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"directions")),o.a.createElement(r.ListItemText,{primary:e("design.direction.button"),secondary:e("design.direction."+a.direction)}),o.a.createElement(r.Divider,{orientation:"vertical",flexItem:!0,className:t.dividerVertical}),o.a.createElement(r.Button,{variant:"outlined",color:"primary",onClick:function(){return i({type:"SET_DIRECTION"})}},e("design.direction.switch")))}),[t.dividerVertical,a.direction])},d=function(){var e=Object(l.useTranslation)().t,t=o.a.useContext(u.b),n=t.param,a=t.dispatch;return o.a.useMemo((function(){return o.a.createElement(r.ListItem,null,o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"looks_one")),o.a.createElement(r.ListItemText,{primary:e("design.platform")}),o.a.createElement(r.TextField,{value:n.platform_num,onChange:function(e){return a({type:"SET_PLATFORM",platform:e.target.value})}}))}),[n.platform_num])},g=function(){var e=Object(l.useTranslation)().t,t=m(),n=Object(a.useContext)(u.b),i=n.param,c=n.dispatch,s=function(e,t){c(t?{type:"SET_PLATFORM",platform:""}:{type:"SET_PLATFORM",platform:!1})};return Object(a.useMemo)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.ListItem,null,o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"looks_one")),o.a.createElement(r.ListItemText,{primary:e("design.platform")}),o.a.createElement(r.ListItemSecondaryAction,null,o.a.createElement(r.Switch,{color:"primary",checked:!1!==i.platform_num,onChange:s}))),o.a.createElement(r.Collapse,{in:!1!==i.platform_num,unmountOnExit:!0},o.a.createElement(r.List,{component:"div",disablePadding:!0,className:t.nestedList},o.a.createElement(r.ListItem,null,o.a.createElement(r.TextField,{placeholder:e("design.platform"),value:i.platform_num,onChange:function(e){return c({type:"SET_PLATFORM",platform:e.target.value})}})))))}),[i.platform_num,t.nestedList])},f=o.a.lazy((function(){return n.e(64).then(n.bind(null,99))})),p=o.a.lazy((function(){return n.e(63).then(n.bind(null,100))})),E=function(){var e=Object(a.useContext)(u.a).rmgStyle;return o.a.createElement(r.Grid,{container:!0,spacing:3,justify:"center",alignItems:"flex-start"},o.a.createElement(r.Grid,{item:!0,xs:12,sm:10,md:7,lg:5},o.a.createElement(r.Paper,null,o.a.createElement(r.List,{component:"div",disablePadding:!0},o.a.createElement(s,null),"mtr"===e&&o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(r.LinearProgress,null)},o.a.createElement(r.Divider,null),o.a.createElement(f,null)),"gzmtr"===e&&o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(r.LinearProgress,null)},o.a.createElement(r.Divider,null),o.a.createElement(p,null))))))};t.default=E},61:function(e,t,n){var a={"./README.md":[66,7,58],"./barcelona":[25,9,1],"./barcelona.ts":[25,9,1],"./beijing":[26,9,12],"./beijing.ts":[26,9,12],"./changsha":[27,9,23],"./changsha.ts":[27,9,23],"./chengdu":[28,9,32],"./chengdu.ts":[28,9,32],"./chongqing":[29,9,33],"./chongqing.ts":[29,9,33],"./dongguan":[30,9,2],"./dongguan.ts":[30,9,2],"./edinburgh":[31,9,3],"./edinburgh.ts":[31,9,3],"./foshan":[32,9,4],"./foshan.ts":[32,9,4],"./glasgow":[33,9,5],"./glasgow.ts":[33,9,5],"./guangzhou":[34,9,6],"./guangzhou.ts":[34,9,6],"./hangzhou":[35,9,7],"./hangzhou.ts":[35,9,7],"./hongkong":[36,9,8],"./hongkong.ts":[36,9,8],"./kaohsiung":[37,9,9],"./kaohsiung.ts":[37,9,9],"./london":[38,9,10],"./london.ts":[38,9,10],"./macao":[39,9,11],"./macao.ts":[39,9,11],"./madrid":[40,9,13],"./madrid.ts":[40,9,13],"./nanjing":[41,9,14],"./nanjing.ts":[41,9,14],"./newtaipei":[42,9,15],"./newtaipei.ts":[42,9,15],"./oslo":[43,9,16],"./oslo.ts":[43,9,16],"./other":[44,9,17],"./other.ts":[44,9,17],"./paris":[45,9,18],"./paris.ts":[45,9,18],"./qingdao":[46,9,19],"./qingdao.ts":[46,9,19],"./sanfrancisco":[47,9,20],"./sanfrancisco.ts":[47,9,20],"./seoul":[48,9,21],"./seoul.ts":[48,9,21],"./shanghai":[49,9,22],"./shanghai.ts":[49,9,22],"./shenzhen":[50,9,24],"./shenzhen.ts":[50,9,24],"./stockholm":[51,9,25],"./stockholm.ts":[51,9,25],"./taipei":[52,9,26],"./taipei.ts":[52,9,26],"./tianjin":[53,9,27],"./tianjin.ts":[53,9,27],"./tokyo":[54,9,28],"./tokyo.ts":[54,9,28],"./toronto":[55,9,29],"./toronto.ts":[55,9,29],"./tyneandwear":[56,9,30],"./tyneandwear.ts":[56,9,30],"./xian":[57,9,31],"./xian.ts":[57,9,31]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[2]).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id=61,e.exports=o},62:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(6),i=n(2),l=n(8),c=n(1),u=n(4),m=n(10),s=[{id:"barcelona",country:"ES",name:{en:"Barcelona","zh-Hans":"\u5df4\u585e\u7f57\u90a3","zh-HK":"\u5df4\u585e\u9686\u62ff","zh-TW":"\u5df4\u585e\u9686\u7d0d"}},{id:"beijing",country:"CN",name:{en:"Beijing",zh:"\u5317\u4eac"}},{id:"changsha",country:"CN",name:{en:"Changsha","zh-Hans":"\u957f\u6c99","zh-Hant":"\u9577\u6c99"}},{id:"chengdu",country:"CN",name:{en:"Chengdu",zh:"\u6210\u90fd"}},{id:"chongqing",country:"CN",name:{en:"Chongqing","zh-Hans":"\u91cd\u5e86","zh-Hant":"\u91cd\u6176"}},{id:"dongguan",country:"CN",name:{en:"Dongguan","zh-Hans":"\u4e1c\u839e","zh-Hant":"\u6771\u839e"}},{id:"edinburgh",country:"GBSCT",name:{en:"Edinburgh",ga:"D\xf9n \xc8ideann","zh-Hans":"\u7231\u4e01\u5821","zh-Hant":"\u611b\u4e01\u5821"}},{id:"foshan",country:"CN",name:{en:"Foshan",zh:"\u4f5b\u5c71"}},{id:"glasgow",country:"GBSCT",name:{en:"Glasgow",ga:"Glaschu",zh:"\u683c\u62c9\u65af\u54e5"}},{id:"guangzhou",country:"CN",name:{en:"Guangzhou","zh-Hans":"\u5e7f\u5dde","zh-Hant":"\u5ee3\u5dde"}},{id:"hangzhou",country:"CN",name:{en:"Hangzhou",zh:"\u676d\u5dde"}},{id:"hongkong",country:"HK",name:{en:"Hong Kong",zh:"\u9999\u6e2f"}},{id:"kaohsiung",country:"TW",name:{en:"Kaohsiung",zh:"\u9ad8\u96c4"}},{id:"london",country:"GBENG",name:{en:"London","zh-Hans":"\u4f26\u6566","zh-Hant":"\u502b\u6566"}},{id:"macao",country:"MO",name:{en:"Macao",pt:"Macau","zh-Hans":"\u6fb3\u95e8","zh-Hant":"\u6fb3\u9580"}},{id:"madrid",country:"ES",name:{en:"Madrid","zh-Hans":"\u9a6c\u5fb7\u91cc","zh-Hant":"\u99ac\u5fb7\u91cc"}},{id:"nanjing",country:"CN",name:{en:"Nanjing",zh:"\u5357\u4eac"}},{id:"newtaipei",country:"TW",name:{en:"New Taipei",zh:"\u65b0\u5317"}},{id:"oslo",country:"NO",name:{en:"Oslo","zh-Hans":"\u5965\u65af\u9646","zh-Hant":"\u5967\u65af\u9678"}},{id:"paris",country:"FR",name:{en:"Paris",zh:"\u5df4\u9ece"}},{id:"qingdao",country:"CN",name:{en:"Qingdao","zh-Hans":"\u9752\u5c9b","zh-Hant":"\u9752\u5cf6"}},{id:"sanfrancisco",country:"US",name:{en:"San Francisco","zh-Hans":"\u65e7\u91d1\u5c71","zh-HK":"\u4e09\u85e9\u5e02","zh-TW":"\u820a\u91d1\u5c71"}},{id:"seoul",country:"KR",name:{en:"Seoul (Metropolitan Area)",ko:"\uc11c\uc6b8(\uc218\ub3c4\uad8c)","zh-Hans":"\u9996\u5c14\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u9996\u723e\uff08\u9996\u90fd\u5708\uff09"}},{id:"shanghai",country:"CN",name:{en:"Shanghai",zh:"\u4e0a\u6d77"}},{id:"shenzhen",country:"CN",name:{en:"Shenzhen",zh:"\u6df1\u5733"}},{id:"stockholm",country:"SE",name:{en:"Stockholm","zh-Hans":"\u65af\u5fb7\u54e5\u5c14\u6469","zh-Hant":"\u65af\u5fb7\u54e5\u723e\u6469"}},{id:"taipei",country:"TW",name:{en:"Taipei",zh:"\u53f0\u5317"}},{id:"tianjin",country:"CN",name:{en:"Tianjin",zh:"\u5929\u6d25"}},{id:"tokyo",country:"JP",name:{en:"Tokyo (Greater Tokyo Area)",ja:"\u6771\u4eac\uff08\u9996\u90fd\u570f\uff09","zh-Hans":"\u4e1c\u4eac\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u6771\u4eac\uff08\u9996\u90fd\u5708\uff09"}},{id:"toronto",country:"CA",name:{en:"Toronto","zh-Hans":"\u591a\u4f26\u591a","zh-Hant":"\u591a\u502b\u591a"}},{id:"tyneandwear",country:"GBENG",name:{en:"Tyne and Wear","zh-Hans":"\u6cf0\u6069-\u5a01\u5c14","zh-HK":"\u6cf0\u5a01","zh-TW":"\u6cf0\u6069-\u5a01\u723e"}},{id:"xian",country:"CN",name:{en:"Xi'an",zh:"\u897f\u5b89"}},{id:"other",country:"UN",name:{en:"Customise","zh-Hans":"\u81ea\u5b9a\u4e49","zh-Hant":"\u81ea\u8a02"}}],h=Object(i.makeStyles)((function(){return Object(i.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:28,width:28,minWidth:0,marginRight:8,border:"solid",padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),d=o.a.memo((function(e){var t=h(),l=Object(r.useTranslation)(),s=l.t,d=l.i18n,f=o.a.useState(e.theme[2]),p=Object(u.a)(f,2),E=p[0],y=p[1],b=function(e){var t=o.a.useState([]),r=Object(u.a)(t,2),i=r[0],l=r[1],m=e[0]?n(61)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(a.useEffect)((function(){"undefined"!==typeof e[0]&&("other"===e[0]?m.then((function(t){l(t.map((function(t,n){return 0===n?Object(c.a)({},t,{colour:e[2],fg:e[3]||"#fff"}):Object(c.a)({},t)})))})):m.then((function(e){return l(e)})))}),[e.toString()]),i}(e.theme);Object(a.useEffect)((function(){if(0!==b.length&&!b.filter((function(t){return t.id===e.theme[1]})).length){var t=[e.theme[0],b[0].id,b[0].colour,b[0].fg||"#fff"];e.onUpdate("theme",t)}}),[b]);Object(a.useEffect)((function(){y(e.theme[2])}),[e.theme[2]]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.ListItem,null,o.a.createElement(i.ListItemIcon,null,o.a.createElement(i.Icon,null,"location_city")),o.a.createElement(g,{value:e.theme[0],onChange:function(t){var n=e.theme.map((function(e,n){return 0===n?t.target.value:e}));e.onUpdate("theme",n)}})),o.a.createElement(i.ListItem,null,o.a.createElement(i.ListItemIcon,null,o.a.createElement(i.Icon,null,"subway")),o.a.createElement(i.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:s("colour.line"),onChange:function(t){var n=t.target.value,a=[e.theme[0],n,b.filter((function(e){return e.id===n}))[0].colour,b.filter((function(e){return e.id===n}))[0].fg||"#fff"];e.onUpdate("theme",a)},value:e.theme[1],disabled:"other"===e.theme[0]},b.map((function(e){return o.a.createElement(i.MenuItem,{key:e.id,value:e.id},o.a.createElement("span",{className:t.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||"#fff"}},Object(m.b)(e.name,d.languages)))})))),o.a.createElement(i.ListItem,null,o.a.createElement("div",{className:t.buttonContainer},o.a.createElement("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;if(y(n),"other"!==e.theme[0]){var a=["other",e.theme[1],n,e.theme[3]];e.onUpdate("theme",a)}else{var o=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",o)}},className:t.inputColour,style:{opacity:0}}),o.a.createElement("label",{htmlFor:"input-color"},o.a.createElement(i.Tooltip,{title:s("colour.tooltip"),"aria-label":"colour picker"},o.a.createElement(i.Button,{className:t.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||"#fff"},variant:"contained",component:"span"}," ")))),o.a.createElement(i.TextField,{error:!(null===E||void 0===E?void 0:E.match(/^#[0-9a-fA-f]{6}$/g)),style:{width:"100%",marginRight:5},variant:"outlined",label:s("colour.colour"),onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-f]{0,6}$/))if(y(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=["other",e.theme[1],n,e.theme[3]];e.onUpdate("theme",a)}else{var o=["other",e.theme[1],e.theme[2],e.theme[3]];e.onUpdate("theme",o)}else if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var r=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",r)}},value:null===E||void 0===E?void 0:E.toUpperCase()}),o.a.createElement(i.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:s("colour.fg"),onChange:function(t){var n=["other","other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||"#fff"},o.a.createElement(i.MenuItem,{key:"#fff",value:"#fff"},s("colour.fgWhite")),o.a.createElement(i.MenuItem,{key:"#000",value:"#000"},s("colour.fgBlack")))))}),(function(e,t){return e.theme.toString()===t.theme.toString()})),g=function(e){var t=Object(r.useTranslation)(),n=t.t,l=t.i18n,c=h(),u=Object(a.useMemo)((function(){return s.map((function(e){return o.a.createElement(i.MenuItem,{key:e.id,value:e.id},o.a.createElement("span",{className:c.cityItem},o.a.createElement(p,{code:e.country}),o.a.createElement("span",null,Object(m.b)(e.name,l.languages))))}))}),[]);return o.a.createElement(i.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:n("colour.city"),value:e.value,onChange:e.onChange},u)},f=Object(i.makeStyles)((function(){return Object(i.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function p(e){var t=Object(r.useTranslation)().i18n,n=f(),a=[];return a=2===e.code.length?e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):["1F3F4"].concat(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})),"E007F"),["zh-CN","zh-Hans"].includes(t.language)&&"TW"===e.code&&(a=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?o.a.createElement("img",{src:"/rmg-test-page"+"/images/flags/".concat(a.join("-"),".svg"),className:n.img,alt:"Flag of ".concat(e.code)}):o.a.createElement("span",null,String.fromCodePoint.apply(String,Object(l.a)(a.map((function(e){return parseInt(e,16)})))))}var E=Object(i.makeStyles)((function(e){return Object(i.createStyles)({paperRoot:{width:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"}})})),y=o.a.memo((function(e){var t=E(),n=Object(r.useTranslation)().t,a=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)},l=function(){e.onClose()};return o.a.createElement(i.Dialog,{onClose:l,open:e.open},o.a.createElement(i.DialogTitle,null,n("colour.title")),o.a.createElement(i.DialogContent,{dividers:!0},o.a.createElement(i.List,null,o.a.createElement(i.ListItem,{className:t.listItemPaper},o.a.createElement(i.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]}},o.a.createElement(i.Icon,{className:t.iconRoot},"edit"),o.a.createElement(i.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||"#fff"},onChange:function(e){return a(e.target.value,0)},autoFocus:!0}),o.a.createElement(i.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||"#fff"},onChange:function(e){return a(e.target.value,1)}}))),o.a.createElement(d,{theme:e.theme,onUpdate:e.onUpdate}))),o.a.createElement(i.DialogActions,null,o.a.createElement(i.Button,{onClick:l,color:"primary"},n("dialog.done"))))}),(function(e,t){return e.open===t.open&&e.lineName.toString()===t.lineName.toString()&&e.theme.toString()===t.theme.toString()}));t.a=y}}]);
//# sourceMappingURL=panelDesign.9e425604.chunk.js.map