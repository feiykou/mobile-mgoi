(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{235:function(t,e,r){},236:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},o=(r(237),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),r("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),r("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?r("div",{staticClass:"btn btn-animate btn-wrap font12"},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"7e99ae87",null);e.a=component.exports},237:function(t,e,r){"use strict";var n=r(235);r.n(n).a},238:function(t,e,r){},239:function(t,e,r){},242:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(244),o=r.n(n),c=function(){return Math.random().toString(36).substring(2)},d={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,d=r.uniqueKey?r.uniqueKey+"-idClip":c(),l=r.uniqueKey?r.uniqueKey+"-idGradient":c();return t("svg",o()([data,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+l+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+d+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:d}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:l}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},244:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,o,c,d;for(o in b)if(t=a[o],e=b[o],t&&r.test(o))if("class"===o&&("string"==typeof t&&(d=t,a[o]=t={},t[d]=!0),"string"==typeof e&&(d=e,b[o]=e={},e[d]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(c in e)t[c]=n(t[c],e[c]);else if(Array.isArray(t))a[o]=t.concat(e);else if(Array.isArray(e))a[o]=[t].concat(e);else for(c in e)t[c]=e[c];else a[o]=b[o];return a}),{})}},245:function(t,e,r){"use strict";var n=r(238);r.n(n).a},247:function(t,e,r){"use strict";r(105);var n=r(242),o={props:{counts:{type:Number,default:8}},components:{ContentLoader:n.a}},c=(r(245),r(3)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return r("li",{key:n},[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li")],2)}),[],!1,null,"f8c7220a",null);e.a=component.exports},249:function(t,e,r){"use strict";var n=r(247),o=r(236),c={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:function(){return{}},components:{ProductListLoading:n.a,ProductItem:o.a}},d=(r(251),r(3)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[r("div",{staticClass:"filter-wrap"},[r("div",{staticClass:"product-num font12"},[t.productsData?r("span",[r("i",{staticClass:"font18"},[t._v(t._s(t.productsData.length))]),t._v(" 件商品")]):t._e()]),t._v(" "),r("dl",{staticClass:"filter-list"},[r("dt",[t._v("排序方式：")]),t._v(" "),r("dd",{attrs:{"data-index":1}},[t._v("价格高至低")]),t._v(" "),r("dd",{attrs:{"data-index":2}},[t._v("价格低至高")])])]),t._v(" "),r("div",{staticClass:"product-list"},[t.loading?r("ProductListLoading"):r("div",[t.productsData&&t.productsData.length>0?r("div",{staticClass:"product-item-wrap"},t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):r("div",[t._v("暂无数据")])])],1)])}),[],!1,null,null,null);e.a=component.exports},251:function(t,e,r){"use strict";var n=r(239);r.n(n).a},269:function(t,e,r){},314:function(t,e,r){"use strict";var n=r(269);r.n(n).a},356:function(t,e,r){"use strict";r.r(e);r(49);var n,o=r(8),c=r(107),d={layout:"main",watchQuery:["q"],data:function(){return{productsData:[],q:"",loading:!0}},components:{pageProductList:r(249).a},asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,q,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.app,r=e.query,e.store,n=e.error,q=r.q,o=[],"undefined"!=q){t.next=5;break}return t.abrupt("return",{productsData:[]});case 5:return t.next=7,c.a.searchResult(q);case 7:return(o=t.sent)||n({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{productsData:o.data,q:q,loading:!1});case 10:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),head:function(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},methods:{priceSort:function(t){var e=t.currentTarget.dataset.index;this.curPriceIndex=e,this.getProductsByCate(1,e)}}},l=(r(314),r(3)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-section news-list-container"},[e("div",{staticClass:"crumb-head-title van-hairline--bottom"},[e("thumb",{staticClass:"font12"},[e("thumb-item",[e("nuxt-link",{attrs:{to:"/"}},[this._v("首页")])],1),this._v(" "),e("thumb-item",[this._v("搜索结果")])],1)],1),this._v(" "),e("pageProductList",{attrs:{productsData:this.productsData,loading:this.loading}}),this._v(" "),e("cate-list")],1)}),[],!1,null,null,null);e.default=component.exports}}]);