(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[54],{81:function(e,t,n){"use strict";n.r(t);var a=n(4),l=n(0),r=n(6),i=n(2),c=n(5),o=Object(i.makeStyles)((function(e){return Object(i.createStyles)({nestedList:{paddingLeft:e.spacing(5)},slider:{width:168,marginLeft:8,marginRight:8}})}));t.default=l.memo((function(){return l.createElement(l.Fragment,null,l.createElement(i.Divider,null),l.createElement(u,null))}));var u=function(){var e=Object(r.useTranslation)().t,t=o(),n=l.useContext(c.b),u=n.param,m=n.dispatch,s=l.useState(!1),d=Object(a.a)(s,2),p=d[0],E=d[1];return l.useMemo((function(){return l.createElement(l.Fragment,null,l.createElement(i.ListItem,{button:!0,onClick:function(){return E((function(e){return!e}))}},l.createElement(i.ListItemIcon,null,l.createElement(i.Icon,null,"open_with")),l.createElement(i.ListItemText,{primary:e("layout.directionGZ.title")}),p?l.createElement(i.Icon,{color:"action"},"expand_less"):l.createElement(i.Icon,{color:"action"},"expand_more")),l.createElement(i.Collapse,{in:p,unmountOnExit:!0},l.createElement(i.List,{component:"div",disablePadding:!0,className:t.nestedList},l.createElement(i.ListItem,null,l.createElement(i.ListItemText,{primary:e("layout.directionGZ.horizontal")}),l.createElement(i.Slider,{className:t.slider,value:u.direction_gz_x,onChange:function(e,t){return m({type:"SET_DIRECTION_GZ_X",value:t})},step:.01,marks:[{value:0,label:e("layout.directionGZ.left")},{value:100,label:e("layout.directionGZ.right")}],valueLabelDisplay:"auto"})),l.createElement(i.Divider,{variant:"middle"}),l.createElement(i.ListItem,null,l.createElement(i.ListItemText,{primary:e("layout.directionGZ.vertical")}),l.createElement(i.Slider,{className:t.slider,value:u.direction_gz_y,onChange:function(e,t){return m({type:"SET_DIRECTION_GZ_Y",value:t})},step:.01,marks:[{value:0,label:e("layout.directionGZ.top")},{value:100,label:e("layout.directionGZ.bottom")}],valueLabelDisplay:"auto"})))))}),[u.direction_gz_x,u.direction_gz_y,p,t.nestedList,t.slider])}}}]);
//# sourceMappingURL=panelLayoutGZMTR.f5ee13e6.chunk.js.map