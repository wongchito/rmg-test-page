(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[66],{114:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(6),i=n(66),c=n(3),l=n(1),o=n(42),u=n(22),m=n(26),f=n(24),h=n(27),d=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).leftWideFactor=function(t){var e=0,a=n.stnList[t].transfer,r=a.type;return"l"===a.tick_direc&&["int3","osi11","osi12","osi21","osi31"].includes(r)&&(e+=.8),"osi22"===r&&(e+=.8),2===n.stnList[t].parents.length&&(e+=.4),2===n.stnList[n.stnList[t].parents[0]].children.length&&(e+=.4),e},n.rightWideFactor=function(t){var e=0,a=n.stnList[t].transfer,r=a.type;return"r"===a.tick_direc&&["int3","osi11","osi12","osi21","osi31"].includes(r)&&(e+=.8),"osi22"===r&&(e+=.8),2===n.stnList[t].children.length&&(e+=.4),2===n.stnList[n.stnList[t].children[0]].parents.length&&(e+=.4),e},n}return Object(h.a)(e,t),e}(o.a),p=n(4),g=function(t){var e=Object(a.useContext)(s.b).param.stn_list[t.stnId],n=Object(a.useMemo)((function(){var t=[];return e.branch.right.length&&t.push(1===e.children.indexOf(e.branch.right[1])?"SE":"NE"),e.branch.left.length&&t.push(1===e.parents.indexOf(e.branch.left[1])?"SW":"NW"),t}),[e.parents.toString(),e.children.toString(),JSON.stringify(e.branch)]),i=Object(a.useMemo)((function(){var t=n;return 0===t.length?"":t.includes("NW")&&t.includes("SE")||t.includes("NE")&&t.includes("SW")?"_bb":"_b"}),[n.toString()]),c=Object(a.useMemo)((function(){if(""===i)return 0;if("_bb"===i)return t.namePos?9.68:-9.68;var e=n;return e.includes("SE")||e.includes("SW")?t.namePos?9.68:0:e.includes("NE")||e.includes("NW")?t.namePos?0:-9.68:void 0}),[n.toString(),i,t.namePos]),l=Object(a.useMemo)((function(){if(""===i)return 0;if("_bb"===i)return t.namePos?-9.68:9.68;var e=n;return e.includes("SE")||e.includes("SW")?t.namePos?0:9.68:e.includes("NE")||e.includes("NW")?t.namePos?-9.68:0:void 0}),[i,t.namePos,n]),o=function(t){var n=t.type,a=t.info;switch(n){case"int3":case"osi31":return a[0].length<11?"int".concat(a[0].length+1):"int12";case"osi11":case"osi21":return"osi11";case"osi12":case"osi13":return"osi12";case"osi22":return"linestart"===e.parents[0]||"lineend"===e.children[0]?"osi22end":"osi12";default:return"stn"}}(e.transfer);return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",{style:{transform:"translateY(".concat(l,"px)")}},r.a.createElement(_,{variant:"osi22"!==e.transfer.type||"linestart"!==e.parents[0]&&"lineend"!==e.children[0]?e.transfer.type:"osi22end",stnTrans:e.transfer,stnState:t.stnState,namePos:t.namePos,end:"osi22end"===o?"linestart"===e.parents[0]?"left":"right":void 0}),o.includes("osi")&&r.a.createElement(b,{name:e.transfer.osi_names[0],stnState:t.stnState,variant:"osi22"!==e.transfer.type||"linestart"!==e.parents[0]&&"lineend"!==e.children[0]?e.transfer.type:"osi22end",tickDirec:e.transfer.tick_direc,namePos:t.namePos,end:"osi22end"===o?"linestart"===e.parents[0]?"left":"right":void 0})),r.a.createElement("use",{xlinkHref:"#"+o+i,className:(-1===t.stnState?"rmg-stn__mtr--pass":"rmg-stn__mtr--future")+(e.transfer.paid_area?" rmg-stn__mtr--paid-osi":" rmg-stn__mtr--unpaid-osi"),style:{transform:"translateY(".concat(c,"px)")+"scale(".concat("lineend"===e.children[0]?1:-1,",").concat(t.namePos?-1:1,")")}}),r.a.createElement("g",{style:{transform:"translateY(".concat(c,"px)")}},r.a.createElement(E,{name:e.name,namePos:t.namePos,stnState:t.stnState,facility:e.facility,nameDX:"osi22"===e.transfer.type&&"osi12"===o?"l"===e.transfer.tick_direc?3:-3:void 0})))},E=function(t){var e=Object(a.useRef)(null),n=Object(a.useState)({width:0,x:0}),s=Object(p.a)(n,2),i=s[0],c=s[1];Object(a.useEffect)((function(){return c(e.current.getBBox())}),[t.stnState,t.name.toString()]);var l=t.namePos?24.8125:-36.21875-11*(t.name[1].split("\\").length-1),o=t.nameDX?t.nameDX>0?"start":"end":"middle",u=t.nameDX?t.namePos?11.515625:-11.515625:0,m=t.nameDX?t.nameDX>0?t.nameDX+17.515625:-17.515625-i.width+t.nameDX:-(i.width+3)/2,f=""===t.facility?0:t.nameDX?t.nameDX<0?0:38.03125+t.nameDX:19.015625;return r.a.createElement("g",{textAnchor:o,style:{transform:"translateY(".concat(l+u,"px)")},className:"Name ".concat(-1===t.stnState?"Pass":0===t.stnState?"Current":"Future")},0===t.stnState&&r.a.createElement("rect",{id:"current_bg",x:i.x-3+(0===f?0:f-1),y:-11.8125,width:i.width+6+(0===f?0:1),height:33.03125+11*(t.name[1].split("\\").length-1)+2}),""!==t.facility&&r.a.createElement("use",{xlinkHref:"#"+t.facility,fill:-1===t.stnState?"var(--rmg-grey)":"var(--rmg-black)",x:m,y:5.5*(t.name[1].split("\\").length-1)-11.8125}),r.a.createElement("g",{ref:e,style:{transform:"translateX(".concat(f,"px)")}},r.a.createElement(y,{name:t.name,nameGap:17})))},y=r.a.memo((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("text",{className:"rmg-name__zh rmg-name__mtr--station"},t.name[0]),t.name[1].split("\\").map((function(e,n){return r.a.createElement("text",{key:n,className:"rmg-name__en rmg-name__mtr--station",dy:t.nameGap+11*n},e)})))}),(function(t,e){return t.name.toString()===e.name.toString()&&t.nameGap===e.nameGap})),_=function(t){switch(t.variant){case"int2":return r.a.createElement("g",null,r.a.createElement(v,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?180:0}));case"int3":case"osi31":return r.a.createElement(r.a.Fragment,null,t.stnTrans.info[0].map((function(e,n){return r.a.createElement("g",{key:n,style:{transform:"translateY(".concat(t.namePos?-18*(t.stnTrans.info[0].length-n):18*(n+1),"px)")}},r.a.createElement(v,{intInfo:e,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90}))})));case"osi11":case"osi21":return r.a.createElement("g",{style:{transform:"translateY(".concat(t.namePos?-26:26,"px)")}},r.a.createElement(v,{intInfo:t.stnTrans.info[1][0],stnState:t.stnState,rotation:t.namePos?180:0}));case"osi12":case"osi13":return r.a.createElement(r.a.Fragment,null,t.stnTrans.info[1].map((function(e,n){return r.a.createElement("g",{key:n,style:{transform:"translateY(".concat(t.namePos?-8-18*(t.stnTrans.info[1].length-n):8+18*(n+1),"px)")}},r.a.createElement(v,{intInfo:e,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90}))})));case"osi22":return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",null,r.a.createElement(v,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?0:180,nameDX:"r"===t.stnTrans.tick_direc?3:-3})),t.stnTrans.info[1].map((function(e,n){return r.a.createElement("g",{key:n,style:{transform:"translateY(".concat(t.namePos?-8-18*(t.stnTrans.info[1].length-n):8+18*(n+1),"px)")}},r.a.createElement(v,{intInfo:e,stnState:t.stnState,rotation:"r"===t.stnTrans.tick_direc?-90:90}))})));case"osi22end":return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",null,r.a.createElement(v,{intInfo:t.stnTrans.info[0][0],stnState:t.stnState,rotation:t.namePos?180:0})),t.stnTrans.info[1].map((function(e,n){return r.a.createElement("g",{key:n,style:{transform:"translate(".concat("left"===t.end?-41:41,"px,").concat(t.namePos?18*n:-18*(t.stnTrans.info[1].length-1-n),"px)")}},r.a.createElement(v,{intInfo:e,stnState:t.stnState,rotation:"left"===t.end?90:-90}))})));default:return r.a.createElement(r.a.Fragment,null)}},v=function(t){var e=t.intInfo[4].split("\\").length,n=t.intInfo[5].split("\\").length,s=function(t){switch(t){case 90:return-24;case-90:return 24;default:return 0}}(t.rotation),i=function(t){switch(t){case 0:return 30.953125;case 180:return-37.703125-10*(e-1)-7*(n-1);default:return 5.953125-(19.65625+10*(e-1)+7*(n-1)-1)/2}}(t.rotation),c=function(e){switch(e){case 90:return"end";case-90:return"start";default:return t.nameDX?t.nameDX>0?"start":"end":"middle"}}(t.rotation);return Object(a.useMemo)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("use",{xlinkHref:"#inttick",stroke:t.intInfo[2],style:{transform:"rotate(".concat(t.rotation,"deg)")},className:"rmg-line rmg-line__mtr rmg-line__change"+(-1===t.stnState?" rmg-line__pass":"")}),r.a.createElement("g",{textAnchor:c,style:{transform:"translate(".concat(s+(t.nameDX||0),"px,").concat(i,"px)")},className:"Name ".concat(-1===t.stnState?"Pass":"Future")},t.intInfo[4].split("\\").map((function(t,e){return r.a.createElement("text",{key:e,className:"rmg-name__zh IntName",dy:10*e},t)})),t.intInfo[5].split("\\").map((function(t,n){return r.a.createElement("text",{key:e+n,className:"rmg-name__en IntName",dy:10*e-1+7*n},t)}))))}),[t.intInfo.toString(),t.rotation,t.stnState])},b=function(t){var e=function(e){switch(e){case"osi11":case"osi21":return"l"===t.tickDirec?"end":"start";case"osi22":return"l"===t.tickDirec?"start":"end";default:return"middle"}}(t.variant),n=function(e){switch(e){case"osi11":case"osi21":return"l"===t.tickDirec?-13:13;case"osi22":return"l"===t.tickDirec?13:-13;case"osi22end":return"left"===t.end?-41:41;default:return 0}}(t.variant),a=function(e){switch(e){case"osi11":case"osi21":return 8.34375+(t.namePos?-26:26)-12.515625-(t.namePos?10*(t.name[1].split("\\").length-1):0);case"osi12":return t.namePos?-70.6875-10*(t.name[1].split("\\").length-1):62.34375;case"osi22":return(t.namePos?-8:8)-(t.namePos?27:-27)+8.34375-12.515625-5*(t.name[1].split("\\").length-1);case"osi22end":return t.namePos?-26.6875-10*(t.name[1].split("\\").length-1):18.34375;default:return 0}}(t.variant);return r.a.createElement("g",{textAnchor:e,style:{transform:"translate(".concat(n,"px,").concat(a,"px)")},className:"Name ".concat(-1===t.stnState?"Pass":"Future")},r.a.createElement("text",{className:"rmg-name__zh rmg-name__mtr--osi"},t.name[0]),t.name[1].split("\\").map((function(t,e){return r.a.createElement("text",{key:e,className:"rmg-name__en rmg-name__mtr--osi",dy:12+10*e},t)})))},x=function(t,e){var n=0,a=t[e].transfer,r=a.type;return"l"===a.tick_direc&&["int3","osi11","osi12","osi21","osi31"].includes(r)&&(n+=.8),"osi22"===r&&(n+=.8),2===t[e].parents.length&&(n+=.4),2===t[t[e].parents[0]].children.length&&(n+=.4),n},S=function(t,e){var n=0,a=t[e].transfer,r=a.type;return"r"===a.tick_direc&&["int3","osi11","osi12","osi21","osi31"].includes(r)&&(n+=.8),"osi22"===r&&(n+=.8),2===t[e].children.length&&(n+=.4),2===t[t[e].children[0]].parents.length&&(n+=.4),n},k=function(){var t,e=r.a.useContext(s.b),n=e.param,a=e.branches,i=e.routes,u=e.deps,m=Object(o.b)(n.stn_list,x,S),f=r.a.useMemo((function(){return Object(o.c)("linestart","lineend",m)}),[JSON.stringify(m)]),h=r.a.useMemo((function(){return Object(o.c)(f.nodes[1],f.nodes.slice(-2)[0],m)}),[JSON.stringify(m)]),p=r.a.useMemo((function(){return console.log("computing x shares"),Object.keys(n.stn_list).reduce((function(t,e){return Object(l.a)({},t,Object(c.a)({},e,Object(o.f)(e,m,a)))}),{})}),[a.toString(),JSON.stringify(m)]),g=[n.svgWidth.railmap*n.padding/100,n.svgWidth.railmap*(1-n.padding/100)],E=Object.keys(p).reduce((function(t,e){return Object(l.a)({},t,Object(c.a)({},e,g[0]+p[e]/h.len*(g[1]-g[0])))}),{}),y=r.a.useMemo((function(){return d.getYShares(n.stn_list,a)}),[u]),_=Object.keys(y).reduce((function(t,e){return Object(l.a)({},t,Object(c.a)({},e,-y[e]*n.branch_spacing+(a[0].includes(e)?0:y[e]>0?-9.68:9.68)))}),{}),v=r.a.useMemo((function(){return Object(o.e)(n.current_stn_idx,i,n.direction)}),[n.current_stn_idx,n.direction,i.toString()]),b=r.a.useMemo((function(){return d.getNamePos(n.stn_list,f)}),[u,JSON.stringify(f)]),k=d.drawLine(a,v,n.stn_list,g,E,_,n.branch_spacing,f);return r.a.createElement("g",{id:"main",style:(t={},Object(c.a)(t,"--y-percentage",n.y_pc),Object(c.a)(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t)},r.a.createElement(P,{paths:k}),r.a.createElement(O,{xs:E,ys:_,stnStates:v,namePoss:b}))},P=r.a.memo((function(t){return r.a.createElement("g",{style:{fill:"none",strokeWidth:9.68}},r.a.createElement("g",{style:{stroke:"var(--rmg-grey)"}},t.paths.pass.map((function(t,e){return r.a.createElement("path",{key:e,d:t})}))),r.a.createElement("g",{style:{stroke:"var(--rmg-theme-colour)"}},t.paths.main.map((function(t,e){return r.a.createElement("path",{key:e,d:t})}))))}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),O=function(t){var e=r.a.useContext(s.b).param,n={};return Object.keys(t.namePoss).forEach((function(a){return n[a]=e.txt_flip?!t.namePoss[a]:t.namePoss[a]})),r.a.createElement("g",{id:"stn_icons"},Object.keys(e.stn_list).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(e){return r.a.createElement("g",{key:e,style:{transform:"translate(".concat(t.xs[e],"px,").concat(t.ys[e],"px)")}},r.a.createElement(g,{stnId:e,stnState:t.stnStates[e],namePos:n[e]}))})))},j=(e.default=function(){var t=a.useContext(s.b).param;return a.createElement(a.Fragment,null,a.createElement(j,null),a.createElement(i.a,{stripPc:t.strip_pc}),a.createElement(k,null))},a.memo((function(){return a.createElement("defs",null,a.createElement("g",{id:"airport",transform:"scale(0.5970084519)"},a.createElement("rect",{x:-29.33899,height:58.67798,width:58.67798}),a.createElement("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})),a.createElement("g",{id:"disney",transform:"scale(0.5970084519)"},a.createElement("rect",{x:-29.33899,width:58.67798,height:58.67798}),a.createElement("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})),a.createElement("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)"},a.createElement("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})),a.createElement("g",{id:"hsr",transform:"scale(0.5970084519)"},a.createElement("rect",{x:-29.33899,width:58.67798,height:58.67798}),a.createElement("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)"},a.createElement("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),a.createElement("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),a.createElement("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),a.createElement("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),a.createElement("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),a.createElement("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),a.createElement("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),a.createElement("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),a.createElement("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),a.createElement("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),a.createElement("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),a.createElement("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"}))),a.createElement("circle",{id:"stn",r:8,className:"rmg-stn__mtr"}),a.createElement("path",{id:"stn_b",className:"rmg-stn__mtr",d:"M -6.369803765,4.84 a 8,8 0 1,1 12.73960753,0 a 8,8 0 1,1 -12.73960758,0 Z"}),a.createElement("path",{id:"stn_bb",d:"M -6.369803765,4.84 a 8,8 0 1,1 12.73960753,0 a 8,8 0 0,1 0,9.68 a 8,8 0 1,1 -12.73960753,0 a 8,8 0 0,1 0,-9.68 Z",className:"rmg-stn__mtr"}),a.createElement("path",{id:"int2",d:"M -8,0 v 18 a 8,8 0 0,0 16,0 v -18 a 8,8 0 0,0 -16,0 Z",className:"rmg-stn__mtr"}),[3,4,5,6,7,8,9,10,11,12].map((function(t){var e=18*(t-1);return a.createElement(a.Fragment,{key:t},a.createElement("path",{id:"int".concat(t),d:"M -8,0 v ".concat(e," a 8,8 0 0,0 16,0 v -").concat(e," a 8,8 0 0,0 -16,0 Z"),className:"rmg-stn__mtr"}),a.createElement("path",{id:"int".concat(t,"_b"),className:"rmg-stn__mtr",d:"M -8,9.68 v ".concat(e," a 8,8 0 0,0 16,0 v -").concat(e," a 8,8 0 0,0 -1.630196235,-4.84 a 8,8 0 1,0 -12.73960758,0 a 8,8 0 0,0 -1.630196235,4.84 Z")}),a.createElement("path",{id:"int".concat(t,"_bb"),className:"rmg-stn__mtr",d:"M -8,19.36 v ".concat(e," a 8,8 0 0,0 16,0 v -").concat(e," a 8,8 0 0,0 -1.630196235,-4.84 a 8,8 0 0,0 0,-9.68 a 8,8 0 1,0 -12.73960758,0 a 8,8 0 0,0 0,9.68 a 8,8 0 0,0 -1.630196235,4.84 Z")}))})),a.createElement("g",{id:"osi11"},a.createElement("path",{d:"M 0,0 V 26"}),a.createElement("use",{xlinkHref:"#stn"}),a.createElement("use",{xlinkHref:"#stn",y:26})),a.createElement("g",{id:"osi11_b"},a.createElement("path",{d:"M 0,0 V 35.68"}),a.createElement("use",{xlinkHref:"#stn_b"}),a.createElement("use",{xlinkHref:"#stn",y:35.68})),a.createElement("g",{id:"osi11_bb"},a.createElement("path",{d:"M 0,0 V 45.36"}),a.createElement("use",{xlinkHref:"#stn_bb"}),a.createElement("use",{xlinkHref:"#stn",y:45.36})),a.createElement("g",{id:"osi12"},a.createElement("path",{d:"M 0,0 V 26"}),a.createElement("use",{xlinkHref:"#stn"}),a.createElement("use",{xlinkHref:"#int2",y:26})),a.createElement("g",{id:"osi12_b"},a.createElement("path",{d:"M 0,11 V 35.68"}),a.createElement("use",{xlinkHref:"#stn_b"}),a.createElement("use",{xlinkHref:"#int2",y:35.68})),a.createElement("g",{id:"osi12_bb"},a.createElement("path",{d:"M 0,11 V 45.36"}),a.createElement("use",{xlinkHref:"#stn_bb"}),a.createElement("use",{xlinkHref:"#int2",y:45.36})),a.createElement("g",{id:"osi22end"},a.createElement("path",{d:"M 0,0 H 41"}),a.createElement("use",{xlinkHref:"#stn"}),a.createElement("use",{xlinkHref:"#int2",x:41,y:-18})),a.createElement("g",{id:"osi22end_b"},a.createElement("path",{d:"M 0,9.68 H 41"}),a.createElement("use",{xlinkHref:"#stn_b"}),a.createElement("use",{xlinkHref:"#int2",x:41,y:-8.32})),a.createElement("path",{id:"inttick",d:"M 0,0 v 17",strokeLinecap:"round"}))})))},42:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return d}));var a=n(4),r=n(22),s=n(23),i=n(11),c=n(3),l=n(1),o=(n(15),function(t,e,n){return Object.keys(t).reduce((function(a,r){return Object(l.a)({},a,Object(c.a)({},r,t[r].children.reduce((function(a,s){return Object(l.a)({},a,Object(c.a)({},s,1+e(t,s)+n(t,r)))}),{})))}),{})}),u=function t(e,n,a){if(e===n)return{len:0,nodes:[e]};var r=[],s=[];Object.keys(a[e]).forEach((function(i){var c=t(i,n,a);c.len<0||(r.push(a[e][i]+c.len),c.nodes.unshift(e),s.push(c.nodes))}));var i=Math.max.apply(Math,r);return{len:i,nodes:s[r.indexOf(i)]}},m=function(t,e,n){var a=u("linestart","lineend",e);if(a.nodes.includes(t))return u(a.nodes[1],t,e).len;for(var r=n.filter((function(e){return e.includes(t)}))[0],s=t;!a.nodes.includes(s);)s=r[r.indexOf(s)-1];for(var i=t;!a.nodes.includes(i);)i=r[r.indexOf(i)+1];var c="linestart"===s,l=[];return c||"lineend"===i?c?(l[0]=0,l[1]=u(a.nodes[1],i,e).len,l[2]=u(r[1],t,e).len,l[3]=u(t,i,e).len):(l[0]=u(a.nodes[1],s,e).len,l[1]=u(s,a.nodes.slice(-2)[0],e).len,l[2]=u(s,t,e).len,l[3]=u(t,r.slice(-2)[0],e).len):(l[0]=u(a.nodes[1],s,e).len,l[1]=u(s,i,e).len,l[2]=u(s,t,e).len,l[3]=u(t,i,e).len),l[0]+l[2]*l[1]/(l[2]+l[3])},f=function(t,e,n){var a;return console.log("computing stations' states"),Object(i.a)(new Set((a=[]).concat.apply(a,Object(i.a)(e)))).reduce((function(a,r){return Object(l.a)({},a,Object(c.a)({},r,r===t?0:("r"===n?function(t,e,n){var a=!0,r=!1,s=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,o=l.indexOf(t),u=l.indexOf(e);if(-1!==o&&o<u)return!0}}catch(m){r=!0,s=m}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return!1}(t,r,e):function(t,e,n){var a=!0,r=!1,s=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,o=l.indexOf(t),u=l.indexOf(e);if(-1!==u&&u<o)return!0}}catch(m){r=!0,s=m}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return!1}(t,r,e))?1:-1))}),{})},h=function(){function t(e){var n=this;Object(r.a)(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathWeight=function(t,e){return n.stnList[t].children.includes(e)?1+n.rightWideFactor(t)+n.leftWideFactor(e):-1/0},this.pathTurnParams=function(t){var e=35-17.5*Math.sqrt(3),n=t-2*e;return{tr:35,dx_a:17.5,dy_a:e,dx_l:n*Math.sqrt(3),dy_l:n}},this.pathTurnSE=function(t){var e=n.pathTurnParams(t),a=e.tr,r=e.dx_a,s=e.dy_a,i=e.dx_l,c=e.dy_l;return"a ".concat(a,",").concat(a," 0 0,1 ").concat(r,",").concat(s," l ").concat(i,",").concat(c," a ").concat(a,",").concat(a," 0 0,0 ").concat(r,",").concat(s)},this.pathTurnNE=function(t){var e=n.pathTurnParams(t),a=e.tr,r=e.dx_a,s=e.dy_a,i=e.dx_l,c=e.dy_l;return"a ".concat(a,",").concat(a," 0 0,0 ").concat(r,",").concat(-s," l ").concat(i,",").concat(-c," a ").concat(a,",").concat(a," 0 0,1 ").concat(r,",").concat(-s)},this.stnList=e.stnList,this.criticalPath=e.criticalPath}return Object(s.a)(t,[{key:"getYShare",value:function(t,e){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var n=this.stnList[t].parents[0];if(n){if(1===this.stnList[n].children.length){var a=this.getYShare(n);return this.yShares[t]=a,a}var r=0===this.stnList[n].children.indexOf(t)?1:-1;return this.yShares[t]=r,r}return this.yShares[t]=0,0}},{key:"getNamePos",value:function(t){if("linestart"===t)return this.namePoss.linestart=!0,!0;var e=this.criticalPath.nodes.indexOf(t)%2;if(-1===e){var n=this.stnList[t].parents[0];if(2===this.stnList[n].children.length){var a=this.getNamePos(n);return this.namePoss[t]=a,a}var r=!this.getNamePos(n);return this.namePoss[t]=r,r}return this.namePoss[t]=1===e,1===e}},{key:"_linePath",value:function(t,e,n,r,s,i,c){var l=this,o=Object(a.a)([],3),u=o[0],m=o[1],f=o[2],h=[],d=this.pathTurnParams(i),p=d.dx_a+d.dx_l/2,g=(e[1]-e[0])/c.len*.8,E=((e[1]-e[0])/c.len-2*p)/2;return E+g<0&&console.warn("SVG width too small! ".concat(E+g)),t.forEach((function(e){var a=r[e],c=s[e];if(!m&&0!==m)return u=e,f=a,m=c,void(1===t.length?h.push("M ".concat(a,",").concat(c)):n[0].includes(e)?n[0].includes(t[1])?h.push("M ".concat(a,",").concat(c)):(r[t[1]]>0&&h.push("M ".concat(a,",").concat(c+9.68)),s[t[1]]<0&&h.push("M ".concat(a,",").concat(c-9.68))):h.push("M ".concat(a,",").concat(c)));c>m?(h.push("h ".concat(0===c?a-f-g*l.leftWideFactor(e)-E-2*p:g*l.rightWideFactor(u)+E)),h.push(l.pathTurnSE(i))):c<m&&(h.push("h ".concat(0===c?a-f-g*l.leftWideFactor(e)-E-2*p:g*l.rightWideFactor(u)+E)),h.push(l.pathTurnNE(i))),h.push("H ".concat(a)),u=e,f=a,m=c})),h.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}],[{key:"getYShares",value:function(t,e){console.log("computing y shares");var n=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.yShares||n.getYShare(t,e)})),n.yShares}},{key:"getNamePos",value:function(t,e){console.log("computing name position");var n=new this({stnList:t,criticalPath:e});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in n.namePoss||n.getNamePos(t)})),n.namePoss}},{key:"drawLine",value:function(t,e,n,a,r,s,i,c){var l=this,o={main:[],pass:[]};return t.forEach((function(u,m){var f=(u=u.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),h=u.filter((function(t){return e[t]<=0}));1===f.length&&(h=u),0===f.filter((function(t){return-1!==h.indexOf(t)})).length&&f.length&&(h[0]===u[0]?h.push(f[0]):f[0]===u[0]&&f[f.length-1]===u[u.length-1]&&h.length?(h=u,f=[]):h.unshift(f[f.length-1])),o.main.push(new l({stnList:n,criticalPath:c})._linePath(f,a,t,r,s,i,c)),o.pass.push(new l({stnList:n,criticalPath:c})._linePath(h,a,t,r,s,i,c))})),o}}]),t}(),d=function(t,e){var n={main:[],pass:[]};return t.forEach((function(t){var a=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return e[t]>=0})),r=t.filter((function(t){return e[t]<=0}));1===a.length&&(r=t),0===a.filter((function(t){return-1!==r.indexOf(t)})).length&&a.length&&(r[0]===t[0]?r.push(a[0]):a[0]===t[0]&&a[a.length-1]===t[t.length-1]&&r.length?(r=t,a=[]):r.unshift(a[a.length-1])),n.main.push(a),n.pass.push(r)})),n}},66:function(t,e,n){"use strict";var a=n(3),r=n(0),s=n.n(r);e.a=Object(r.memo)((function(t){var e;return s.a.createElement("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(e={width:"var(--rmg-svg-width)"},Object(a.a)(e,"--strip-percentage",t.stripPc),Object(a.a)(e,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),e)})}))}}]);
//# sourceMappingURL=railmapMTR.c388a1e5.chunk.js.map