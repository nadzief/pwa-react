(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1248:function(e,t,a){"use strict";a.r(t);var n=a(249),o=a(240),s=a(241),r=a(244),c=a(242),i=a(245),l=a(243),u=a(2),d=a.n(u),f=a(942),p=a(943),b=a(949),h=a(945),m=a(947),g=a(951),v=a(957),y=a(946),E=a(977),O=a(998),j=a(965),N=a(108),x=a(246),k=a(960),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleClick=function(e){e.preventDefault();var t={nama_category:a.state.nama_category};a.props.dispatch(Object(k.a)(t))},a.handleChange=function(e){return function(t){a.setState(Object(n.a)({},e,t.target.value))}},a.toggle=a.toggle.bind(Object(i.a)(a)),a.toggleFade=a.toggleFade.bind(Object(i.a)(a)),a.state={collapse:!0,fadeIn:!0,timeout:300,nama_category:""},a.handleClick=a.handleClick.bind(Object(i.a)(a)),a.handleCancel=a.handleCancel.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleCancel",value:function(){N.a.push("/category")}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(f.a,null,d.a.createElement(p.a,{xs:"12"},d.a.createElement(b.a,{timeout:this.state.timeout,in:this.state.fadeIn},d.a.createElement(h.a,null,d.a.createElement(m.a,null,d.a.createElement("i",{className:"fa fa-edit"})," Tambah Data",d.a.createElement("div",{className:"card-header-actions"},d.a.createElement(g.a,{color:"link",className:"card-header-action btn-setting"},d.a.createElement("i",{className:"icon-settings"})),d.a.createElement(g.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle},d.a.createElement("i",{className:"icon-arrow-up"})))),d.a.createElement(v.a,{isOpen:this.state.collapse,id:"collapseExample"},d.a.createElement(y.a,null,d.a.createElement("form",{onSubmit:this.handleClick,noValidate:!0},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},d.a.createElement(E.a,null,d.a.createElement(O.a,{for:"exampleEmail"},"Nama"),d.a.createElement(j.a,{type:"text",name:"nama_category",onChange:this.handleChange("nama_category"),value:this.state.nama_category,placeholder:"Nama"}))),d.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},d.a.createElement("div",{style:{float:"right"}},d.a.createElement("button",{type:"submit",className:"btn btn-primary data-submit"},"Submit"),"\xa0",d.a.createElement("button",{className:"btn btn-danger",onClick:this.handleCancel},"Cancel"))))))))))))}}]),t}(u.Component);t.default=Object(x.b)(function(e){return{}})(C)},938:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},942:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(2),r=a.n(s),c=a(66),i=a.n(c),l=a(936),u=a.n(l),d=a(937),f={tag:d.p,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},p=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,c=e.tag,i=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.l)(u()(t,s?"no-gutters":null,i?"form-row":"row"),a);return r.a.createElement(c,Object(n.a)({},l,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},943:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(938),r=a.n(s),c=a(2),i=a.n(c),l=a(66),u=a.n(l),d=a(936),f=a.n(d),p=a(937),b=u.a.oneOfType([u.a.number,u.a.string]),h=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:b,offset:b})]),m={tag:p.p,xs:h,sm:h,md:h,lg:h,xl:h,className:u.a.string,cssModule:u.a.object,widths:u.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(t,n){var o=e[t];if(delete l[t],o||""===o){var s=!n;if(r()(o)){var c,i=s?"-":"-"+t+"-",d=v(s,t,o.size);u.push(Object(p.l)(f()(((c={})[d]=o.size||""===o.size,c["order"+i+o.order]=o.order||0===o.order,c["offset"+i+o.offset]=o.offset||0===o.offset,c)),a))}else{var b=v(s,t,o);u.push(b)}}}),u.length||u.push("col");var d=Object(p.l)(f()(t,u),a);return i.a.createElement(c,Object(n.a)({},l,{className:d}))};y.propTypes=m,y.defaultProps=g,t.a=y},949:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(941),r=a(2),c=a.n(r),i=a(66),l=a.n(i),u=a(936),d=a.n(u),f=a(944),p=a(937),b=Object(s.a)({},f.Transition.propTypes,{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:p.p,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),h=Object(s.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function m(e){var t=e.tag,a=e.baseClass,s=e.baseClassActive,r=e.className,i=e.cssModule,l=e.children,u=e.innerRef,b=Object(o.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),h=Object(p.n)(b,p.c),m=Object(p.m)(b,p.c);return c.a.createElement(f.Transition,h,function(e){var o="entered"===e,f=Object(p.l)(d()(r,a,o&&s),i);return c.a.createElement(t,Object(n.a)({className:f},m,{ref:u}),l)})}m.propTypes=b,m.defaultProps=h,t.a=m},951:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(939),r=a(94),c=a(2),i=a.n(c),l=a(66),u=a.n(l),d=a(936),f=a.n(d),p=a(937),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,r=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,b=e.size,h=e.tag,m=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof g.children&&(g.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(p.l)(f()(r,{close:c},c||"btn",c||v,!!b&&"btn-"+b,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===h&&(h="a");var E=c?"Close":null;return i.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:y,ref:m,onClick:this.onClick,"aria-label":a||E}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={color:"secondary",tag:"button"},t.a=h},957:function(e,t,a){"use strict";var n,o=a(48),s=a(188),r=a(939),c=a(94),i=a(941),l=a(2),u=a.n(l),d=a(66),f=a.n(d),p=a(936),b=a.n(p),h=a(944),m=a(937),g=Object(i.a)({},h.Transition.propTypes,{isOpen:f.a.bool,children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),tag:m.p,className:f.a.node,navbar:f.a.bool,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.func,f.a.string,f.a.object])}),v=Object(i.a)({},h.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:m.e.Collapse}),y=((n={})[m.d.ENTERING]="collapsing",n[m.d.ENTERED]="collapse show",n[m.d.EXITING]="collapsing",n[m.d.EXITED]="collapse",n);function E(e){return e.scrollHeight}var O=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach(function(e){a[e]=a[e].bind(Object(r.a)(a))}),a}Object(c.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:E(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:E(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,r=t.className,c=t.navbar,l=t.cssModule,d=t.children,f=(t.innerRef,Object(s.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,g=Object(m.n)(f,m.c),v=Object(m.m)(f,m.c);return u.a.createElement(h.Transition,Object(o.a)({},g,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(t){var n=function(e){return y[e]||"collapse"}(t),s=Object(m.l)(b()(r,n,c&&"navbar-collapse"),l),f=null===p?null:{height:p};return u.a.createElement(a,Object(o.a)({},v,{style:Object(i.a)({},v.style,f),className:s,ref:e.props.innerRef}),d)})},t}(l.Component);O.propTypes=g,O.defaultProps=v,t.a=O},960:function(e,t,a){"use strict";a.d(t,"d",function(){return d}),a.d(t,"e",function(){return f}),a.d(t,"a",function(){return p}),a.d(t,"b",function(){return b}),a.d(t,"c",function(){return h});var n=a(247),o=a.n(n),s=a(44),r=a(248),c=a.n(r),i=a(108),l=a(148),u=a.n(l);function d(){return function(e){e({type:s.k,loading:!0});var t=c.a+"get/category/";return o.a.get(t).then(function(t){var a;e((a=t.data,{type:s.l,payload:{data:a}}))}).catch(function(t){e(function(e){return{type:s.j,payload:{error:e}}}(t))})}}function f(e){return function(t){t({type:s.h,loading:!0});var a=c.a+"get/category/".concat(e);return o.a.get(a).then(function(e){var a;t((a=e.data,{type:s.i,payload:{datas:a}}))}).catch(function(e){t(function(e){return{type:s.g,payload:{error:e}}}(e))})}}function p(e){return function(t){t({type:s.n,loading:!0});var a=c.a+"post/category";return o.a.post(a,e).then(function(e){t({type:s.o,payload:e.data}),u()({icon:"success",title:"Berhasil Tambah Data",button:!0}),i.a.push("/category")}).catch(function(e){t(function(e){return{type:s.m,payload:{error:e}}}(e))})}}function b(e){return function(t){t({type:s.b,loading:!0});var a=c.a+"delete/category/".concat(e);return o.a.delete(a).then(function(e){t({type:s.c,success:!0}),t(d())}).catch(function(e){t(function(e){return{type:s.a,payload:{error:e}}}(e))})}}function h(e){return function(t){t({type:s.e,loading:!0});var a=c.a+"edit/category";return o.a.post(a,e).then(function(e){t({type:s.f,payload:e.data}),u()({icon:"success",title:"Berhasil Edit Data",button:!0}),i.a.push("/category")}).catch(function(e){t(function(e){return{type:s.d,payload:{error:e}}}(e))})}}},965:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(939),r=a(94),c=a(2),i=a.n(c),l=a(66),u=a.n(l),d=a(936),f=a.n(d),p=a(937),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,m=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),E="form-control";b?(E+="-plaintext",y=u||"input"):"file"===s?E+="-file":g&&(E=d?null:"form-check-input"),m.size&&v.test(m.size)&&(Object(p.r)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var O=Object(p.l)(f()(t,l&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,E),a);return("input"===y||u&&"function"===typeof u)&&(m.type=s),m.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.r)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(y,Object(n.a)({},m,{ref:h,className:O}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},977:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(2),r=a.n(s),c=a(66),i=a.n(c),l=a(936),u=a.n(l),d=a(937),f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.p,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.row,c=e.disabled,i=e.check,l=e.inline,f=e.tag,p=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(d.l)(u()(t,!!s&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!c)&&"disabled"),a);return r.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},998:function(e,t,a){"use strict";var n=a(48),o=a(188),s=a(2),r=a.n(s),c=a(66),i=a.n(c),l=a(936),u=a.n(l),d=a(938),f=a.n(d),p=a(937),b=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),m={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:p.p,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,s=e.hidden,c=e.widths,i=e.tag,l=e.check,d=e.size,b=e.for,h=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];c.forEach(function(t,n){var o=e[t];if(delete h[t],o||""===o){var s,r=!n;if(f()(o)){var c,i=r?"-":"-"+t+"-";s=v(r,t,o.size),m.push(Object(p.l)(u()(((c={})[s]=o.size||""===o.size,c["order"+i+o.order]=o.order||0===o.order,c["offset"+i+o.offset]=o.offset||0===o.offset,c))),a)}else s=v(r,t,o),m.push(s)}});var g=Object(p.l)(u()(t,!!s&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,m,!!m.length&&"col-form-label"),a);return r.a.createElement(i,Object(n.a)({htmlFor:b},h,{className:g}))};y.propTypes=m,y.defaultProps=g,t.a=y}}]);
//# sourceMappingURL=23.72f501f3.chunk.js.map