(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1013:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={children:i.a.node,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,size:i.a.string,tag:d.p,listTag:d.p,"aria-label":i.a.string},b=function(e){var a,t=e.className,r=e.listClassName,o=e.cssModule,i=e.size,c=e.tag,m=e.listTag,b=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),p=Object(d.l)(u()(t),o),f=Object(d.l)(u()(r,"pagination",((a={})["pagination-"+i]=!!i,a)),o);return l.a.createElement(c,{className:p,"aria-label":b},l.a.createElement(m,Object(s.a)({},g,{className:f})))};b.propTypes=m,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=b},1014:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={active:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,disabled:i.a.bool,tag:d.p},b=function(e){var a=e.active,t=e.className,r=e.cssModule,o=e.disabled,i=e.tag,c=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(d.l)(u()(t,"page-item",{active:a,disabled:o}),r);return l.a.createElement(i,Object(s.a)({},c,{className:m}))};b.propTypes=m,b.defaultProps={tag:"li"},a.a=b},1015:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={"aria-label":i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,next:i.a.bool,previous:i.a.bool,first:i.a.bool,last:i.a.bool,tag:d.p},b=function(e){var a,t=e.className,r=e.cssModule,o=e.next,i=e.previous,c=e.first,m=e.last,b=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),p=Object(d.l)(u()(t,"page-link"),r);i?a="Previous":o?a="Next":c?a="First":m&&(a="Last");var f,h=e["aria-label"]||a;i?f="\u2039":o?f="\u203a":c?f="\xab":m&&(f="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),g.href||"a"!==b||(b="button"),(i||o||c||m)&&(v=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||f),l.a.createElement("span",{className:"sr-only",key:"sr"},h)]),l.a.createElement(b,Object(s.a)({},g,{className:p,"aria-label":h}),v)};b.propTypes=m,b.defaultProps={tag:"a"},a.a=b},1220:function(e,a,t){"use strict";t.r(a);var s=t(230),n=t(231),r=t(234),l=t(232),o=t(233),i=t(4),c=t.n(i),u=t(947),d=t(948),m=t(950),b=t(952),g=t(951),p=t(955),f=t(984),h=t(1013),v=t(1014),j=t(1015),E=t(977),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(l.a)(a).call(this,e))).state={results:E},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(m.a,null,c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Inventori"),c.a.createElement(g.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",md:"2"},c.a.createElement(p.a,{color:"primary"},c.a.createElement("i",{className:"icon-plus"})," Add Barang "))),c.a.createElement("br",null),c.a.createElement(u.a,null,c.a.createElement(d.a,{xs:"12",md:"12"},c.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Nama"),c.a.createElement("th",null,"Kategori"),c.a.createElement("th",null,"Stok"),c.a.createElement("th",null,"Harga"))),c.a.createElement("tbody",null,E.data.map(function(e,a){return c.a.createElement("tr",{key:a},c.a.createElement("td",null,e.nama),c.a.createElement("td",null,e.kategori),c.a.createElement("td",null,e.stok),c.a.createElement("td",null,e.harga))}))))),c.a.createElement("nav",null,c.a.createElement(h.a,null,c.a.createElement(v.a,null,c.a.createElement(j.a,{previous:!0,tag:"button"},"Prev")),c.a.createElement(v.a,{active:!0},c.a.createElement(j.a,{tag:"button"},"1")),c.a.createElement(v.a,null,c.a.createElement(j.a,{tag:"button"},"2")),c.a.createElement(v.a,null,c.a.createElement(j.a,{tag:"button"},"3")),c.a.createElement(v.a,null,c.a.createElement(j.a,{tag:"button"},"4")),c.a.createElement(v.a,null,c.a.createElement(j.a,{next:!0,tag:"button"},"Next")))))))))}}]),a}(i.Component);a.default=k},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},947:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={tag:d.p,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},b=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,c=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.l)(u()(a,r?"no-gutters":null,i?"form-row":"row"),t);return l.a.createElement(o,Object(s.a)({},c,{className:m}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},948:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(944),l=t.n(r),o=t(4),i=t.n(o),c=t(141),u=t.n(c),d=t(942),m=t.n(d),b=t(943),g=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:g,offset:g})]),f={tag:b.p,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(a,s){var n=e[a];if(delete c[a],n||""===n){var r=!s;if(l()(n)){var o,i=r?"-":"-"+a+"-",d=v(r,a,n.size);u.push(Object(b.l)(m()(((o={})[d]=n.size||""===n.size,o["order"+i+n.order]=n.order||0===n.order,o["offset"+i+n.offset]=n.offset||0===n.offset,o)),t))}else{var g=v(r,a,n);u.push(g)}}}),u.length||u.push("col");var d=Object(b.l)(m()(a,u),t);return i.a.createElement(o,Object(s.a)({},c,{className:d}))};j.propTypes=f,j.defaultProps=h,a.a=j},950:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={tag:d.p,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,c=e.outline,m=e.tag,b=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.l)(u()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(c?"border":"bg")+"-"+r),t);return l.a.createElement(m,Object(s.a)({},g,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},951:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={tag:d.p,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),c=Object(d.l)(u()(a,"card-body"),t);return l.a.createElement(o,Object(s.a)({},i,{className:c,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},952:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={tag:d.p,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.l)(u()(a,"card-header"),t);return l.a.createElement(r,Object(s.a)({},o,{className:i}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},955:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(945),l=t(87),o=t(4),i=t.n(o),c=t(141),u=t.n(c),d=t(942),m=t.n(d),b=t(943),g={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,l=e.className,o=e.close,c=e.cssModule,u=e.color,d=e.outline,g=e.size,p=e.tag,f=e.innerRef,h=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,j=Object(b.l)(m()(l,{close:o},o||"btn",o||v,!!g&&"btn-"+g,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),c);h.href&&"button"===p&&(p="a");var E=o?"Close":null;return i.a.createElement(p,Object(s.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:j,ref:f,onClick:this.onClick,"aria-label":t||E}))},a}(i.a.Component);p.propTypes=g,p.defaultProps={color:"secondary",tag:"button"},a.a=p},977:function(e){e.exports={data:[{id:1,nama:"BMW",kategori:"525",harga:"3908",stok:"6779",img:"https://thenypost.files.wordpress.com/2019/09/junk-food-turns-kid-blind.jpg?quality=90&strip=all&w=618&h=410&crop=1"},{id:2,nama:"Audi",kategori:"S4",harga:"1001",stok:"4790",img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/15/istock-855098134.jpg?w968h681"},{id:3,nama:"Rolls-Royce",kategori:"Phantom",harga:"661",stok:"5966",img:"https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg"},{id:4,nama:"Toyota",kategori:"Prius",harga:"4088",stok:"400",img:"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2017/12/06/why-sugar-and-why-so-much-who-investigates-the-food-industry-s-sweet-tooth/7624387-1-eng-GB/Why-sugar-and-why-so-much-WHO-investigates-the-food-industry-s-sweet-tooth_wrbm_large.jpg"},{id:5,nama:"Volkswagen",kategori:"riolet",harga:"2518",stok:"7685",img:"https://www.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg"},{id:6,nama:"Buick",kategori:"Skylark",harga:"160",stok:"266",img:"https://img.apmcdn.org/ef7e3a8404d7a963b9d9371cd0ad129cefa838d9/uncropped/b9ffa6-20190618-new-fair-food28.jpg"},{id:7,nama:"Hyundai",kategori:"Equus",harga:"2466",stok:"9002",img:"https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/sodium-salt-1083487948.jpg"},{id:8,nama:"Mazda",kategori:"RX-8",harga:"34835",stok:"2082",img:"https://duyt4h9nfnj50.cloudfront.net/resized/bulk_actions_image_f80ebd9b-fe0a-402b-9bef-d92745d50da2-w550-d2.jpg"},{id:9,nama:"Mitsubishi",kategori:"Outlander Sport",harga:"178102",stok:"130",img:"https://serafinamia.com/wp-content/uploads/2018/09/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg"},{id:10,nama:"Ferrari",kategori:"F430",harga:"204595",stok:"279",img:"https://assets3.thrillist.com/v1/image/2842782/size/gn-gift_guide_variable_c.jpg"}]}},984:function(e,a,t){"use strict";var s=t(44),n=t(180),r=t(4),l=t.n(r),o=t(141),i=t.n(o),c=t(942),u=t.n(c),d=t(943),m={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:d.p,responsiveTag:d.p,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},b=function(e){var a=e.className,t=e.cssModule,r=e.size,o=e.bordered,i=e.borderless,c=e.striped,m=e.dark,b=e.hover,g=e.responsive,p=e.tag,f=e.responsiveTag,h=e.innerRef,v=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(d.l)(u()(a,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!i&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!b&&"table-hover"),t),E=l.a.createElement(p,Object(s.a)({},v,{ref:h,className:j}));if(g){var k=Object(d.l)(!0===g?"table-responsive":"table-responsive-"+g,t);return l.a.createElement(f,{className:k},E)}return E};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b}}]);
//# sourceMappingURL=18.82ce4499.chunk.js.map