(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{255:function(t,e,r){var content=r(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("c1d8bd3c",content,!0,{sourceMap:!1})},256:function(t,e,r){"use strict";var o={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=(r(257),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),r("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),r("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?r("div",{staticClass:"btn btn-animate btn-wrap font12"},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"7e99ae87",null);e.a=component.exports},257:function(t,e,r){"use strict";var o=r(255);r.n(o).a},258:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".mgoi-product-item .btn-wrap[data-v-7e99ae87]{margin-top:2.4vw;border-color:#32a2c5}.mgoi-product-item .btn-wrap a[data-v-7e99ae87]{color:#32a2c5}.mgoi-product-item.product-item[data-v-7e99ae87]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;width:29.333vw;margin-bottom:6.667vw;line-height:1.5;transition:none .2s cubic-bezier(.215,.61,.355,1);transition-property:opacity}.mgoi-product-item.product-item span[data-v-7e99ae87]{font-weight:700;position:relative;z-index:1}.mgoi-product-item.product-item .img[data-v-7e99ae87]{width:100%;height:29.333vw;margin-bottom:2.667vw;position:relative;z-index:1}.mgoi-product-item.product-item .img img[data-v-7e99ae87]{width:100%;height:100%}.mgoi-product-item.product-item .tit[data-v-7e99ae87]{min-height:9.6vw;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.mgoi-product-item.product-item .price[data-v-7e99ae87]{font-weight:700}",""])},259:function(t,e,r){var content=r(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("53d5e13f",content,!0,{sourceMap:!1})},261:function(t,e,r){var content=r(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("15d979a2",content,!0,{sourceMap:!1})},263:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(265),n=r.n(o),c=function(){return Math.random().toString(36).substring(2)},l={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,o=e.children,l=r.uniqueKey?r.uniqueKey+"-idClip":c(),d=r.uniqueKey?r.uniqueKey+"-idGradient":c();return t("svg",n()([data,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+d+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+l+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:l}},[o||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:d}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},265:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function o(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,n,c,l;for(n in b)if(t=a[n],e=b[n],t&&r.test(n))if("class"===n&&("string"==typeof t&&(l=t,a[n]=t={},t[l]=!0),"string"==typeof e&&(l=e,b[n]=e={},e[l]=!0)),"on"===n||"nativeOn"===n||"hook"===n)for(c in e)t[c]=o(t[c],e[c]);else if(Array.isArray(t))a[n]=t.concat(e);else if(Array.isArray(e))a[n]=[t].concat(e);else for(c in e)t[c]=e[c];else a[n]=b[n];return a}),{})}},266:function(t,e,r){"use strict";var o=r(259);r.n(o).a},267:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".product-list[data-v-f8c7220a]{display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;flex-wrap:wrap}.product-list li[data-v-f8c7220a]{width:41.333vw;margin-bottom:9.2vw}",""])},271:function(t,e,r){"use strict";r(107);var o=r(263),n={props:{counts:{type:Number,default:8}},components:{ContentLoader:o.a}},c=(r(266),r(3)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,o){return r("li",{key:o},[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li")],2)}),[],!1,null,"f8c7220a",null);e.a=component.exports},273:function(t,e,r){"use strict";var o=r(271),n=r(256),c={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:function(){return{}},components:{ProductListLoading:o.a,ProductItem:n.a}},l=(r(275),r(3)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[r("div",{staticClass:"filter-wrap"},[r("div",{staticClass:"product-num font12"},[t.productsData?r("span",[r("i",{staticClass:"font18"},[t._v(t._s(t.productsData.length))]),t._v(" 件商品")]):t._e()]),t._v(" "),r("dl",{staticClass:"filter-list"},[r("dt",[t._v("排序方式：")]),t._v(" "),r("dd",{attrs:{"data-index":1}},[t._v("价格高至低")]),t._v(" "),r("dd",{attrs:{"data-index":2}},[t._v("价格低至高")])])]),t._v(" "),r("div",{staticClass:"product-list"},[t.loading?r("ProductListLoading"):r("div",[t.productsData&&t.productsData.length>0?r("div",{staticClass:"product-item-wrap"},t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):r("div",[t._v("暂无数据")])])],1)])}),[],!1,null,null,null);e.a=component.exports},275:function(t,e,r){"use strict";var o=r(261);r.n(o).a},276:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".page-product-list .product-item-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-between}.page-product-list .product-item-wrap .product-item{width:41.333vw!important;margin-bottom:8vw}.page-product-list .product-item-wrap .product-item>.img{height:41.333vw!important}.page-product-list .filter-wrap{display:block;padding-bottom:2vw}",""])},290:function(t,e,r){var content=r(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("2d775c57",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";var o=r(6);e.a={getGiftCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.a.fetchGet("gift/cate?times=".concat(e,"&cate_id=").concat(t))},getSeasonResc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("gift/season?cate_id=".concat(t))},getBanner:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("gift/banner?cate_id=".concat(t))},getProductByCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("gift/list?cate_id=".concat(t))},getProductByPrice:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return o.a.fetchGet("gift/filter?from=".concat(t,"&to=").concat(e,"&page=").concat(r,"&size=").concat(n))}}},324:function(t,e,r){"use strict";r(110),r(107);var o=r(108),n={props:{giftCate:Object,topid:Number},data:function(){return{}},methods:{priceClick:function(t){t.currentTarget.dataset.price.split("-")}},components:{Button:o.a}},c=(r(339),r(3)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.giftCate,(function(e,o){return r("div",{key:o,staticClass:"section cate-section van-hairline--top",attrs:{id:"anchor-2"}},[r("div",{staticClass:"title font18 center bold"},[t._v(t._s(e.name))]),t._v(" "),e.sub?r("ul",{staticClass:"scene-list"},t._l(e.sub,(function(e,o){return r("li",{key:o},[r("nuxt-link",{attrs:{to:"/gift/list?cate_id="+e.id+"&pid="+t.topid+"&type=product"}},[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0):t._e()])})),t._v(" "),r("div",{staticClass:"section cate-section van-hairline--top",attrs:{id:"anchor-3"}},[r("div",{staticClass:"title font18 center bold"},[t._v("按价格选择")]),t._v(" "),r("ul",{staticClass:"btn-wrap-list"},[r("li",{attrs:{"data-price":"0-100"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=0-100&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"~100 元"}})],1)],1),t._v(" "),r("li",{attrs:{"data-price":"100-200"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=100-200&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"100~200元"}})],1)],1),t._v(" "),r("li",{attrs:{"data-price":"200-300"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=200-300&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"200~300元"}})],1)],1),t._v(" "),r("li",{attrs:{"data-price":"300-400"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=300-400&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"300~400元"}})],1)],1),t._v(" "),r("li",{attrs:{"data-price":"400-500"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=400-500&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"400~500元"}})],1)],1),t._v(" "),r("li",{attrs:{"data-price":"500-600"},on:{click:t.priceClick}},[r("nuxt-link",{attrs:{to:"/gift/list?name=500-600&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"500~600元"}})],1)],1)])])],2)}),[],!1,null,"89715e18",null);e.a=component.exports},339:function(t,e,r){"use strict";var o=r(290);r.n(o).a},340:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".section[data-v-89715e18]:after{border-color:#000!important}.cate-section[data-v-89715e18]{padding-bottom:12.8vw}.cate-section .title[data-v-89715e18]{padding:12vw 0 9.2vw}.scene-list[data-v-89715e18]{padding-bottom:7.467vw}.scene-list li[data-v-89715e18]{margin-bottom:.533vw}.scene-list li a[data-v-89715e18]{display:-webkit-box;display:-ms-flexbox;display:flex}.scene-list li .img[data-v-89715e18]{width:28.667vw;height:28.667vw;flex:0 0 28.667vw;margin-right:5.333vw}.scene-list li .tit-desc[data-v-89715e18]{flex:1}.scene-list li .tit[data-v-89715e18]{margin:2vw 0}.scene-list li .desc[data-v-89715e18]{color:#949494;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.btn-wrap-list[data-v-89715e18]{padding-top:8vw}.btn-wrap-list .btn-wrap[data-v-89715e18]{height:13.333vw;font-weight:700}.btn-wrap-list li[data-v-89715e18]{margin-bottom:4.267vw}",""])}}]);