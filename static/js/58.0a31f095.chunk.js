(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1003:function(e,a,t){"use strict";var n=t(247),l=t.n(n),c="GET_DATA_REQUEST",r="GET_DATA_SUCCESS",o="GET_DATA_FAILED",i="GET_DATA_BY_ID_REQUEST",s="GET_DATA_BY_ID_SUCCESS",m="GET_DATA_BY_ID_FAILED",u="POST_DATA_REQUEST",d="POST_DATA_SUCCESS",p="POST_DATA_FAILED",E="DELETE_DATA_REQUEST",f="DELETE_DATA_SUCCESS",h="DELETE_DATA_FAILED",b="EDIT_DATA_REQUEST",v="EDIT_DATA_FAILED",g=t(248),y=t.n(g),_=t(108),D=t(148),T=t.n(D);function A(){return function(e){e({type:c,loading:!0});var a=y.a+"get/data/";return l.a.get(a).then(function(a){var t;e((t=a.data,{type:r,payload:{data:t}}))}).catch(function(a){e(function(e){return{type:o,payload:{error:e}}}(a))})}}function N(e){return function(a){a({type:i,loading:!0});var t=y.a+"get/data/".concat(e);return l.a.get(t).then(function(e){var t;a((t=e.data,{type:s,payload:{datas:t}}))}).catch(function(e){a(function(e){return{type:m,payload:{error:e}}}(e))})}}function S(e){return function(a){a({type:u,loading:!0});var t=y.a+"post/data/";return l.a.post(t,e).then(function(e){a({type:d,payload:e.data}),T()({icon:"success",title:"Berhasil Tambah Data",button:!0}),_.a.push("/data")}).catch(function(e){a(function(e){return{type:p,payload:{error:e}}}(e))})}}function O(e){return function(a){a({type:E,loading:!0});var t=y.a+"delete/data/".concat(e);return l.a.delete(t).then(function(e){a({type:f,success:!0}),a(A())}).catch(function(e){a(function(e){return{type:h,payload:{error:e}}}(e))})}}function j(e){return function(a){a({type:b,loading:!0});var t=y.a+"edit/data/";return l.a.post(t,e).then(function(e){T()({icon:"success",title:"Berhasil Edit Data",button:!0}),_.a.push("/data")}).catch(function(e){a(function(e){return{type:v,payload:{error:e}}}(e))})}}t.d(a,"d",function(){return A}),t.d(a,"e",function(){return N}),t.d(a,"a",function(){return S}),t.d(a,"b",function(){return O}),t.d(a,"c",function(){return j})},1292:function(e,a,t){"use strict";t.r(a);var n=t(240),l=t(241),c=t(244),r=t(242),o=t(245),i=t(243),s=t(2),m=t.n(s),u=t(942),d=t(943),p=t(949),E=t(945),f=t(947),h=t(951),b=t(957),v=t(946),g=t(952),y=t.n(g),_=t(953),D=t(249),T=t(1277),A=t(1276),N=t(108),S=t(246),O=t(1003),j=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).handleCancel=function(e){e.preventDefault(),N.a.push("/data")},t.handleClick=function(e,a){e.preventDefault(),t.props.dispatch(Object(O.c)(a,t.props.id)),console.log(a,t.props.id)},t.handleChange=function(e){return function(a){a.preventDefault(),t.setState(Object(D.a)({},e,a.target.value))}},t.state={datas:[]},t.handleClick=t.handleClick.bind(Object(o.a)(t)),t.handleCancel=t.handleCancel.bind(Object(o.a)(t)),t.handleChange=t.handleChange.bind(Object(o.a)(t)),t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=Object(_.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch(Object(O.e)(this.props.id));case 2:console.log(this.props.initialize(this.state.datas));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(_.a)(y.a.mark(function e(a){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,a.datas.datas.datas;case 3:e.t1=e.sent,e.t2={datas:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.submitting,a=function(e){var a=e.input,t=e.type,n=e.id,l=e.meta,c=l.touched,r=l.error;return"checkbox"===t?m.a.createElement("div",{className:"checkbox"},c&&r&&m.a.createElement("span",{className:"error-text",style:{color:"red"}},r)):m.a.createElement("div",{className:"form-group"},m.a.createElement("input",Object.assign({},a,{id:n,type:t,className:"form-control"})),c&&r&&m.a.createElement("span",{className:"error-text",style:{color:"red"}},r))};return console.log(this.props.initialValues),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-12 col-lg-12"},m.a.createElement("form",{onSubmit:this.handleClick},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-sm-6 col-lg-6 col-md-6"},m.a.createElement("label",null," First Name "),m.a.createElement(T.a,{name:"first_name",type:"text",component:a,className:"form-control",defaultValue:this.props.initialValues.first_name})),m.a.createElement("div",{className:"col-sm-6 col-lg-6 col-md-6"},m.a.createElement("label",null,"Last Name"),m.a.createElement(T.a,{name:"last_name",type:"text",component:a,className:"form-control"})),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("br",null),m.a.createElement("label",null,"Email"),m.a.createElement(T.a,{name:"email",type:"email",component:a,className:"form-control"})),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("br",null),m.a.createElement("label",null," Gender "),m.a.createElement(T.a,{type:"select",name:"gender",component:"select",className:"form-control"},m.a.createElement("option",null," -- Silakan Pilih -- "),m.a.createElement("option",{value:"Male"}," Male "),m.a.createElement("option",{value:"Female"}," Female ")),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("label",null,"IP Address"),m.a.createElement(T.a,{name:"ip_address",type:"text",component:a,placeholder:"ip address",className:"form-control"})),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("br",null),m.a.createElement("label",null," Size "),m.a.createElement(T.a,{name:"size",type:"select",className:"form-control",component:"select"},m.a.createElement("option",null," -- Silakan Pilih -- "),m.a.createElement("option",{value:"XS"}," XS "),m.a.createElement("option",{value:"S"}," S "),m.a.createElement("option",{value:"M"}," M "),m.a.createElement("option",{value:"L"}," L "),m.a.createElement("option",{value:"XL"}," XL "),m.a.createElement("option",{value:"2XL"}," 2XL "),m.a.createElement("option",{value:"3XL"}," 3XL ")),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("label",null," Title "),m.a.createElement(T.a,{name:"title",type:"select",className:"form-control",component:"select"},m.a.createElement("option",null," -- Silakan Pilih -- "),m.a.createElement("option",{value:"Dr"}," Dr "),m.a.createElement("option",{value:"Honorable"}," Honorable "),m.a.createElement("option",{value:"Mr"}," Mr "),m.a.createElement("option",{value:"Mrs"}," Mrs "),m.a.createElement("option",{value:"Ms"}," Ms "),m.a.createElement("option",{value:"Rev"}," Rev ")),m.a.createElement("br",null)),m.a.createElement("div",{className:"col-sm-12 col-lg-12 col-md-12"},m.a.createElement("div",{style:{float:"right"}},m.a.createElement("button",{type:"submit",disabled:e,className:"btn btn-primary data-submit"},"Submit"),"\xa0",m.a.createElement("button",{className:"btn btn-danger",onClick:this.handleCancel},"Cancel")))))))}}]),a}(m.a.Component);var k=Object(S.b)(function(e){return{initialValues:{first_name:e.data.datas.datas&&e.data.datas.datas.map(function(e){return e.first_name}),last_name:e.data.datas.datas&&e.data.datas.datas.map(function(e){return e.last_name}),email:e.data.datas.datas&&e.data.datas.datas.map(function(e){return e.email})},datas:e.data}})(Object(A.a)({form:"FormData",enableReinitialize:!0,keepDirtyOnReinitialize:!0})(j)),C=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(c.a)(this,Object(r.a)(a).call(this,e))).toggle=t.toggle.bind(Object(o.a)(t)),t.toggleFade=t.toggleFade.bind(Object(o.a)(t)),t.state={collapse:!0,fadeIn:!0,timeout:300,idForm:t.props.match.params.id},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleFade",value:function(){this.setState(function(e){return{fadeIn:!e}})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(p.a,{timeout:this.state.timeout,in:this.state.fadeIn},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement("i",{className:"fa fa-edit"})," Edit Data",m.a.createElement("div",{className:"card-header-actions"},m.a.createElement(h.a,{color:"link",className:"card-header-action btn-setting"},m.a.createElement("i",{className:"icon-settings"})),m.a.createElement(h.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle},m.a.createElement("i",{className:"icon-arrow-up"})))),m.a.createElement(b.a,{isOpen:this.state.collapse,id:"collapseExample"},m.a.createElement(v.a,null,m.a.createElement(k,{id:this.state.idForm}))))))))}}]),a}(s.Component);a.default=Object(S.b)(function(e){return{dataForm:e.form.data}})(C)}}]);
//# sourceMappingURL=58.0a31f095.chunk.js.map