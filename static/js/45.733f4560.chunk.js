(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1189:function(e,a,t){"use strict";var l=t(44),s=t(180),n=t(949),r=t(4),i=t.n(r),c=t(141),o=t.n(c),m=t(942),u=t.n(m),f=t(943),d=t(964),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.p,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,p=e.toggle,g=e.children,b=e.transition,E=e.fade,k=e.innerRef,y=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(f.l)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),c),O=Object(f.l)(u()("close",t),c),j=Object(n.a)({},d.a.defaultProps,b,{baseClass:E?b.baseClass:"",timeout:E?b.timeout:0});return i.a.createElement(d.a,Object(l.a)({},y,j,{tag:o,className:v,in:h,role:"alert",innerRef:k}),p?i.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:p},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=h,g.defaultProps=p,a.a=g},1252:function(e,a,t){"use strict";t.r(a);var l=t(230),s=t(231),n=t(234),r=t(232),i=t(233),c=t(235),o=t(4),m=t.n(o),u=t(947),f=t(948),d=t(950),h=t(952),p=t(951),g=t(1189),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(r.a)(a).call(this,e))).state={visible:!0},t.onDismiss=t.onDismiss.bind(Object(c.a)(Object(c.a)(t))),t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),m.a.createElement(g.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),m.a.createElement(g.a,{color:"success"},"This is a success alert \u2014 check it out!"),m.a.createElement(g.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),m.a.createElement(g.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),m.a.createElement(g.a,{color:"info"},"This is a info alert \u2014 check it out!"),m.a.createElement(g.a,{color:"light"},"This is a light alert \u2014 check it out!"),m.a.createElement(g.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null," use ",m.a.createElement("code",null,".alert-link")," to provide links")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"primary"},"This is a primary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"secondary"},"This is a secondary alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"success"},"This is a success alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"danger"},"This is a danger alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"warning"},"This is a warning alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"info"},"This is a info alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"light"},"This is a light alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),m.a.createElement(g.a,{color:"dark"},"This is a dark alert with ",m.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),m.a.createElement(u.a,null,m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"additional content")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"success"},m.a.createElement("h4",{className:"alert-heading"},"Well done!"),m.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),m.a.createElement("hr",null),m.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),m.a.createElement(f.a,{xs:"12",md:"6"},m.a.createElement(d.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Alerts"),m.a.createElement("small",null,"dismissing")),m.a.createElement(p.a,null,m.a.createElement(g.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),a}(o.Component);a.default=b},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},947:function(e,a,t){"use strict";var l=t(44),s=t(180),n=t(4),r=t.n(n),i=t(141),c=t.n(i),o=t(942),m=t.n(o),u=t(943),f={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},d=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,c=e.form,o=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(u.l)(m()(a,n?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(i,Object(l.a)({},o,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},948:function(e,a,t){"use strict";var l=t(44),s=t(180),n=t(944),r=t.n(n),i=t(4),c=t.n(i),o=t(141),m=t.n(o),u=t(942),f=t.n(u),d=t(943),h=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:h,offset:h})]),g={tag:d.p,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},k=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach(function(a,l){var s=e[a];if(delete o[a],s||""===s){var n=!l;if(r()(s)){var i,c=n?"-":"-"+a+"-",u=E(n,a,s.size);m.push(Object(d.l)(f()(((i={})[u]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),t))}else{var h=E(n,a,s);m.push(h)}}}),m.length||m.push("col");var u=Object(d.l)(f()(a,m),t);return c.a.createElement(i,Object(l.a)({},o,{className:u}))};k.propTypes=g,k.defaultProps=b,a.a=k},964:function(e,a,t){"use strict";var l=t(44),s=t(180),n=t(949),r=t(4),i=t.n(r),c=t(141),o=t.n(c),m=t(942),u=t.n(m),f=t(961),d=t(943),h=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.p,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,c=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.n)(h,d.c),g=Object(d.m)(h,d.c);return i.a.createElement(f.Transition,p,function(e){var s="entered"===e,f=Object(d.l)(u()(r,t,s&&n),c);return i.a.createElement(a,Object(l.a)({className:f},g,{ref:m}),o)})}g.propTypes=h,g.defaultProps=p,a.a=g}}]);
//# sourceMappingURL=45.733f4560.chunk.js.map