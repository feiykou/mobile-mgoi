(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{235:function(t,e,r){},236:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(r(237),r(3)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),r("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),r("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?r("div",{staticClass:"btn btn-animate btn-wrap font12"},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"010df862",null);e.a=component.exports},237:function(t,e,r){"use strict";var n=r(235);r.n(n).a},238:function(t,e,r){},244:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(247),c=r.n(n),o=function(){return Math.random().toString(36).substring(2)},d={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,d=r.uniqueKey?r.uniqueKey+"-idClip":o(),l=r.uniqueKey?r.uniqueKey+"-idGradient":o();return t("svg",c()([data,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+l+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+d+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:d}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:l}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},247:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,c,o,d;for(c in b)if(t=a[c],e=b[c],t&&r.test(c))if("class"===c&&("string"==typeof t&&(d=t,a[c]=t={},t[d]=!0),"string"==typeof e&&(d=e,b[c]=e={},e[d]=!0)),"on"===c||"nativeOn"===c||"hook"===c)for(o in e)t[o]=n(t[o],e[o]);else if(Array.isArray(t))a[c]=t.concat(e);else if(Array.isArray(e))a[c]=[t].concat(e);else for(o in e)t[o]=e[o];else a[c]=b[c];return a}),{})}},248:function(t,e,r){"use strict";var n=r(238);r.n(n).a},251:function(t,e,r){"use strict";r(105);var n=r(244),c={props:{counts:{type:Number,default:8}},components:{ContentLoader:n.a}},o=(r(248),r(3)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return r("li",{key:n},[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li")],2)}),[],!1,null,"f8c7220a",null);e.a=component.exports},267:function(t,e,r){},268:function(t,e,r){},311:function(t,e,r){"use strict";var n=r(267);r.n(n).a},312:function(t,e,r){"use strict";var n=r(268);r.n(n).a},338:function(t,e,r){"use strict";r.r(e);r(89),r(49);var n,c=r(8),o=(r(105),r(244)),d={name:"cate-loading",props:{counts:{type:Number,default:3}},components:{ContentLoader:o.a}},l=(r(311),r(3)),f=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cate-box"},t._l(t.counts,(function(e,n){return r("div",{key:n,staticClass:"cate-loader"},[r("content-loader",{attrs:{height:134,width:125,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"47",y:"17",rx:"0",ry:"0",width:"28",height:"14"}}),t._v(" "),r("rect",{attrs:{x:"38.5",y:"46",rx:"0",ry:"0",width:"46",height:"46"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"128.27",rx:"0",ry:"0",width:"125",height:"1"}})])],1)})),0)}),[],!1,null,null,null).exports,h=r(251),m=r(108),v=(r(50),r(236)),y=r(110),_={watchQuery:["id"],layout:"main",data:function(){return{cateData:null,productsData:null,crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",curCateId:0,curPriceIndex:0,isShowTab:!0}},components:{productItem:v.a,CateLoading:f,ProductListLoading:h.a,cateList:y.a},asyncData:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o,d,l,f,h,v,y,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,r=e.query,n=e.store,c=e.error,o=r.id,d=r.name,l=null,f=null,t.next=5,m.a.getProductsByCate(o);case 5:return l=t.sent,t.next=8,m.a.getSonCate(o);case 8:return f=t.sent,h=n.state.cate.crumbCate,v=[],y={},_=[{name:"产品分类",id:0}],h.forEach((function(t,e){d||h.length-1!==e||(d=t.name),y.name=t.name,y.id=t.id,v.push(y),y={}})),d||(d="产品分类"),f||c({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{cateData:f,productsData:l.data,crumbArr:[].concat(_,v),curName:d,curCateId:o});case 15:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),fetch:function(t){var e=t.store,r=t.query.id||0;e.dispatch("cate/getParentCate",r)},head:function(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},created:function(){},methods:{priceSort:function(t){var e=t.currentTarget.dataset.index;this.curPriceIndex=e,this.getProductsByCate(this.curCateId,e)},cateTap:function(t){var e=t.currentTarget.dataset.id,r=t.currentTarget.dataset.name;this.curName=r,this.crumbArr.push({id:e,name:r}),this._loadData(e)},crumbTap:function(t){var e=t.currentTarget.dataset.index,r=this.crumbArr;r=r.slice(0,1*e+1),this.curName=r[e].name,this.crumbArr=r,this._loadData(r[e].id)},_loadData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.curCateId=t,this.getSonCate(t),this.getProductsByCate(t)},getSonCate:function(t){var e=this;this.cateData=null,m.a.getSonCate(t).then((function(t){setTimeout((function(){e.cateData=t}),600)}))},getProductsByCate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.productsData=null,m.a.getProductsByCate(e,r).then((function(e){setTimeout((function(){t.productsData=e.data}),600)}))}}},C=(r(312),Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-section product-list-container"},[r("thumb",{staticClass:"font12"},[r("thumb-item",[t._v("首页")]),t._v(" "),t._l(t.crumbArr,(function(e,n){return r("thumb-item",{key:n,attrs:{"data-index":n},nativeOn:{click:function(e){return t.crumbTap(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2),t._v(" "),r("div",{staticClass:"cate-container"},[r("div",{staticClass:"current-name font25"},[t._v(t._s(t.curName))]),t._v(" "),r("div",{staticClass:"cate-sec"},[t.cateData?r("ul",{staticClass:"cate-list"},t._l(t.cateData,(function(e,n){return r("li",{key:n,attrs:{"data-id":e.id,"data-name":e.name},on:{click:t.cateTap}},[r("span",{staticClass:"font12"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"img"},[r("img",{attrs:{src:e.img_url[0],alt:""}})])])})),0):r("CateLoading")],1)]),t._v(" "),r("div",{staticClass:"product-wrap"},[r("div",{staticClass:"filter-wrap"},[r("div",{staticClass:"product-num font12"},[t.productsData?r("span",[r("i",{staticClass:"font18"},[t._v(t._s(t.productsData.length))]),t._v("件商品")]):t._e()]),t._v(" "),r("dl",{staticClass:"filter-list font12"},[r("dt",[t._v("排序方式：")]),t._v(" "),r("dd",{class:{active:1==t.curPriceIndex},attrs:{"data-index":1},on:{click:t.priceSort}},[t._v("价格高至低")]),t._v(" "),r("dd",{class:{active:2==t.curPriceIndex},attrs:{"data-index":2},on:{click:t.priceSort}},[t._v("价格低至高")])])]),t._v(" "),r("div",{staticClass:"product-list"},[t.productsData?r("div",{staticClass:"product-item-wrap"},t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):r("ProductListLoading")],1)]),t._v(" "),r("cate-list")],1)}),[],!1,null,null,null));e.default=C.exports}}]);