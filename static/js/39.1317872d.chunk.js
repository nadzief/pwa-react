(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1008:function(e,a,t){"use strict";var s=t(44),r=t(180),l=t(4),n=t.n(l),c=t(141),o=t.n(c),i=t(942),m=t.n(i),p=t(973),d=t.n(p),u=t(943),g={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:u.p,value:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object},E=function(e){var a=e.children,t=e.className,l=e.barClassName,c=e.cssModule,o=e.value,i=e.max,p=e.animated,g=e.striped,E=e.color,b=e.bar,N=e.multi,v=e.tag,f=Object(r.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),h=d()(o)/d()(i)*100,O=Object(u.l)(m()(t,"progress"),c),T=Object(u.l)(m()("progress-bar",b&&t||l,p?"progress-bar-animated":null,E?"bg-"+E:null,g||p?"progress-bar-striped":null),c),y=N?a:n.a.createElement("div",{className:T,style:{width:h+"%"},role:"progressbar","aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":i,children:a});return b?y:n.a.createElement(v,Object(s.a)({},f,{className:O,children:y}))};E.propTypes=g,E.defaultProps={tag:"div",value:0,max:100},a.a=E},1029:function(e,a,t){!function(e){"use strict";function a(e){var a=this,t={ABOVE:"above",BELOW:"below",CHARTJS_TOOLTIP:"chartjs-tooltip",NO_TRANSFORM:"no-transform",TOOLTIP_BODY:"tooltip-body",TOOLTIP_BODY_ITEM:"tooltip-body-item",TOOLTIP_BODY_ITEM_COLOR:"tooltip-body-item-color",TOOLTIP_BODY_ITEM_LABEL:"tooltip-body-item-label",TOOLTIP_BODY_ITEM_VALUE:"tooltip-body-item-value",TOOLTIP_HEADER:"tooltip-header",TOOLTIP_HEADER_ITEM:"tooltip-header-item"},s={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},t="_canvas-"+(e()+e());return a._chart.canvas.id=t,t}())+"-tooltip"},r=document.getElementById(s.TOOLTIP);if(r||((r=document.createElement("div")).id=s.TOOLTIP,r.className=t.CHARTJS_TOOLTIP,this._chart.canvas.parentNode.appendChild(r)),0!==e.opacity){if(r.classList.remove(t.ABOVE,t.BELOW,t.NO_TRANSFORM),e.yAlign?r.classList.add(e.yAlign):r.classList.add(t.NO_TRANSFORM),e.body){var l=e.title||[],n=document.createElement(s.DIV);n.className=t.TOOLTIP_HEADER,l.forEach(function(e){var a=document.createElement(s.DIV);a.className=t.TOOLTIP_HEADER_ITEM,a.innerHTML=e,n.appendChild(a)});var c=document.createElement(s.DIV);c.className=t.TOOLTIP_BODY;var o=e.body.map(function(e){return e.lines});o.forEach(function(a,r){var l=document.createElement(s.DIV);l.className=t.TOOLTIP_BODY_ITEM;var n=e.labelColors[r],o=document.createElement(s.SPAN);if(o.className=t.TOOLTIP_BODY_ITEM_COLOR,o.style.backgroundColor=n.backgroundColor,l.appendChild(o),a[0].split(":").length>1){var i=document.createElement(s.SPAN);i.className=t.TOOLTIP_BODY_ITEM_LABEL,i.innerHTML=a[0].split(": ")[0],l.appendChild(i);var m=document.createElement(s.SPAN);m.className=t.TOOLTIP_BODY_ITEM_VALUE,m.innerHTML=a[0].split(": ").pop(),l.appendChild(m)}else{var p=document.createElement(s.SPAN);p.className=t.TOOLTIP_BODY_ITEM_VALUE,p.innerHTML=a[0],l.appendChild(p)}c.appendChild(l)}),r.innerHTML="",r.appendChild(n),r.appendChild(c)}var i=this._chart.canvas.getBoundingClientRect(),m=this._chart.canvas.offsetTop,p=this._chart.canvas.offsetLeft,d=p+e.caretX,u=m+e.caretY,g=e.width/2;d+g>i.width?d-=g:d<g&&(d+=g),r.style.opacity=1,r.style.left=d+"px",r.style.top=u+"px"}else r.style.opacity=0}var t=a;e.CustomTooltips=a,e.customTooltips=t,Object.defineProperty(e,"__esModule",{value:!0})}(a)},1247:function(e,a,t){"use strict";t.r(a);var s=t(230),r=t(231),l=t(234),n=t(232),c=t(233),o=t(235),i=t(4),m=t.n(i),p=t(1019),d=t(947),u=t(948),g=t(950),E=t(952),b=t(951),N=t(1008),v=t(967),f=t(955),h=t(1029),O=t(1065),T=Object(i.lazy)(function(){return t.e(47).then(t.bind(null,1030))}),y=Object(O.getStyle)("--primary"),x=Object(O.getStyle)("--success"),w=Object(O.getStyle)("--warning"),C=Object(O.getStyle)("--danger"),_=[{data:[65,59,84,84,51,55,40],label:"facebook"},{data:[1,13,9,17,34,41,38],label:"twitter"},{data:[78,81,80,45,34,12,40],label:"linkedin"},{data:[35,23,56,22,97,23,64],label:"google"}],L=function(e){var a=_[e],t={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:a.data,label:a.label}]};return function(){return t}},j={tooltips:{enabled:!1,custom:h.CustomTooltips},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},k=[{data:[35,23,56,22,97,23,64],label:"New Clients"},{data:[65,59,84,84,51,55,40],label:"Recurring Clients"},{data:[35,23,56,22,97,23,64],label:"Pageviews"},{data:[65,59,84,84,51,55,40],label:"Organic"},{data:[78,81,80,45,34,12,40],label:"CTR"},{data:[1,13,9,17,34,41,38],label:"Bounce Rate"}],I=function(e,a){var t=k[e],s={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:a||"#c2cfd6",data:t.data,label:t.label}]};return function(){return s}},M={tooltips:{enabled:!1,custom:h.CustomTooltips},responsive:!0,maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}};function R(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var P=[],S=[],A=[],B=0;B<=27;B++)P.push(R(50,200)),S.push(R(80,100)),A.push(65);var D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(n.a)(a).call(this,e))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.toggle=t.toggle.bind(Object(o.a)(Object(o.a)(t))),t.onRadioBtnClick=t.onRadioBtnClick.bind(Object(o.a)(Object(o.a)(t))),t.state={dropdownOpen:!1,radioSelected:2},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(d.a,null,m.a.createElement(u.a,{xs:"6",sm:"6",lg:"3"},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(T,{dataBox:function(){return{variant:"facebook",friends:"89k",feeds:"459"}}},m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:L(0),options:j,height:90}))))),m.a.createElement(u.a,{xs:"6",sm:"6",lg:"3"},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(T,{dataBox:function(){return{variant:"twitter",followers:"973k",tweets:"1.792"}}},m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:L(1),options:j,height:90}))))),m.a.createElement(u.a,{xs:"6",sm:"6",lg:"3"},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(T,{dataBox:function(){return{variant:"linkedin",contacts:"500+",feeds:"292"}}},m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:L(2),options:j,height:90}))))),m.a.createElement(u.a,{xs:"6",sm:"6",lg:"3"},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(T,{dataBox:function(){return{variant:"google-plus",followers:"894",circles:"92"}}},m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:L(3),options:j,height:90})))))),m.a.createElement(d.a,null,m.a.createElement(u.a,null,m.a.createElement(g.a,null,m.a.createElement(E.a,null,"Traffic "," & "," Sales"),m.a.createElement(b.a,null,m.a.createElement(d.a,null,m.a.createElement(u.a,{xs:"12",md:"6",xl:"6"},m.a.createElement(d.a,null,m.a.createElement(u.a,{sm:"6"},m.a.createElement("div",{className:"callout callout-info"},m.a.createElement("small",{className:"text-muted"},"New Clients"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"9,123"),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:I(0,y),options:M,width:100,height:30})))),m.a.createElement(u.a,{sm:"6"},m.a.createElement("div",{className:"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},"Recurring Clients"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"22,643"),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:I(1,C),options:M,width:100,height:30}))))),m.a.createElement("hr",{className:"mt-0"}),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Monday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"34"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"78"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Tuesday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"56"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"94"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Wednesday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"12"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"67"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Thursday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"43"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"91"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Friday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"22"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"73"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Saturday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"53"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"82"}))),m.a.createElement("div",{className:"progress-group mb-4"},m.a.createElement("div",{className:"progress-group-prepend"},m.a.createElement("span",{className:"progress-group-text"},"Sunday")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"info",value:"9"}),m.a.createElement(N.a,{className:"progress-xs",color:"danger",value:"69"}))),m.a.createElement("div",{className:"legend text-center"},m.a.createElement("small",null,m.a.createElement("sup",{className:"px-1"},m.a.createElement(v.a,{pill:!0,color:"info"},"\xa0")),"New clients \xa0",m.a.createElement("sup",{className:"px-1"},m.a.createElement(v.a,{pill:!0,color:"danger"},"\xa0")),"Recurring clients"))),m.a.createElement(u.a,{xs:"12",md:"6",xl:"6"},m.a.createElement(d.a,null,m.a.createElement(u.a,{sm:"6"},m.a.createElement("div",{className:"callout callout-warning"},m.a.createElement("small",{className:"text-muted"},"Pageviews"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"78,623"),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:I(2,w),options:M,width:100,height:30})))),m.a.createElement(u.a,{sm:"6"},m.a.createElement("div",{className:"callout callout-success"},m.a.createElement("small",{className:"text-muted"},"Organic"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h4"},"49,123"),m.a.createElement("div",{className:"chart-wrapper"},m.a.createElement(p.c,{data:I(3,x),options:M,width:100,height:30}))))),m.a.createElement("hr",{className:"mt-0"}),m.a.createElement("ul",null,m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-user progress-group-icon"}),m.a.createElement("span",{className:"title"},"Male"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"43%")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"warning",value:"43"}))),m.a.createElement("div",{className:"progress-group mb-5"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-user-female progress-group-icon"}),m.a.createElement("span",{className:"title"},"Female"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"37%")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"warning",value:"37"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-globe progress-group-icon"}),m.a.createElement("span",{className:"title"},"Organic Search"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",m.a.createElement("span",{className:"text-muted small"},"(56%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"success",value:"56"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-social-facebook progress-group-icon"}),m.a.createElement("span",{className:"title"},"Facebook"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",m.a.createElement("span",{className:"text-muted small"},"(15%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"success",value:"15"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-social-twitter progress-group-icon"}),m.a.createElement("span",{className:"title"},"Twitter"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",m.a.createElement("span",{className:"text-muted small"},"(11%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"success",value:"11"}))),m.a.createElement("div",{className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("i",{className:"icon-social-linkedin progress-group-icon"}),m.a.createElement("span",{className:"title"},"LinkedIn"),m.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",m.a.createElement("span",{className:"text-muted small"},"(8%)"))),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(N.a,{className:"progress-xs",color:"success",value:"8"}))),m.a.createElement("div",{className:"divider text-center"},m.a.createElement(f.a,{color:"link",size:"sm",className:"text-muted","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"show more"},m.a.createElement("i",{className:"icon-options"})))))))))))}}]),a}(i.Component);a.default=D},952:function(e,a,t){"use strict";var s=t(44),r=t(180),l=t(4),n=t.n(l),c=t(141),o=t.n(c),i=t(942),m=t.n(i),p=t(943),d={tag:p.p,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),o=Object(p.l)(m()(a,"card-header"),t);return n.a.createElement(l,Object(s.a)({},c,{className:o}))};u.propTypes=d,u.defaultProps={tag:"div"},a.a=u},955:function(e,a,t){"use strict";var s=t(44),r=t(180),l=t(945),n=t(87),c=t(4),o=t.n(c),i=t(141),m=t.n(i),p=t(942),d=t.n(p),u=t(943),g={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:u.p,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(l.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],l=e.block,n=e.className,c=e.close,i=e.cssModule,m=e.color,p=e.outline,g=e.size,E=e.tag,b=e.innerRef,N=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof N.children&&(N.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+m,f=Object(u.l)(d()(n,{close:c},c||"btn",c||v,!!g&&"btn-"+g,!!l&&"btn-block",{active:a,disabled:this.props.disabled}),i);N.href&&"button"===E&&(E="a");var h=c?"Close":null;return o.a.createElement(E,Object(s.a)({type:"button"===E&&N.onClick?"button":void 0},N,{className:f,ref:b,onClick:this.onClick,"aria-label":t||h}))},a}(o.a.Component);E.propTypes=g,E.defaultProps={color:"secondary",tag:"button"},a.a=E},967:function(e,a,t){"use strict";var s=t(44),r=t(180),l=t(4),n=t.n(l),c=t(141),o=t.n(c),i=t(942),m=t.n(i),p=t(943),d={color:o.a.string,pill:o.a.bool,tag:p.p,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,l=e.color,c=e.innerRef,o=e.pill,i=e.tag,d=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),u=Object(p.l)(m()(a,"badge","badge-"+l,!!o&&"badge-pill"),t);return d.href&&"span"===i&&(i="a"),n.a.createElement(i,Object(s.a)({},d,{className:u,ref:c}))};u.propTypes=d,u.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=u},973:function(e,a){var t=NaN,s="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,c=/^0o[0-7]+$/i,o=parseInt,i=Object.prototype.toString;function m(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(m(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=m(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var p=n.test(e);return p||c.test(e)?o(e.slice(2),p?2:8):l.test(e)?t:+e}}}]);
//# sourceMappingURL=39.1317872d.chunk.js.map