(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{256:function(t,e,n){"use strict";var r=n(3);e.a={getThemeDetail:function(t){if(!(t<=0))return r.a.fetchGet("theme/".concat(t,"/detail"))},getThemeList:function(t){return r.a.fetchGet("theme/list?cate_id=".concat(t))},getThemeCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.a.fetchGet("themeCate/".concat(t,"?times=").concat(e))},getCateThumb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("themeCate/crumb?id=".concat(t))},getCurCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("themeCate?id=".concat(t))}}},285:function(t,e,n){},286:function(t,e,n){},287:function(t,e,n){},336:function(t,e,n){"use strict";var r=n(285);n.n(r).a},337:function(t,e,n){"use strict";var r=n(286);n.n(r).a},338:function(t,e,n){"use strict";var r=n(287);n.n(r).a},358:function(t,e,n){"use strict";n.r(e);n(31);var r,c,o=n(5),l=n(59),m={props:{options:Object,to:String,img:String},data:function(){return{}}},d=(n(336),n(4)),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.options?n("div",{staticClass:"lr-component"},[n("nuxt-link",{staticClass:"wrap",attrs:{to:t.to}},[n("van-image",{staticClass:"img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.img}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("div",{staticClass:"tit font15 bold"},[t._v(t._s(t.options.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.options.introduce))])])],1)],1):t._e()}),[],!1,null,"2e80d8c0",null).exports,h={props:{options:Object},data:function(){return{}},components:{LrItem:v}},_=(n(337),Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.options?n("div",{staticClass:"theme-list-component van-hairline--top"},[n("div",{staticClass:"tit font22 center bold"},[t._v(t._s(t.options.name))]),t._v(" "),n("p",{staticClass:"desc-txt"},[t._v(t._s(t.options.description))]),t._v(" "),n("van-image",{staticClass:"main-img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.options.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"product-list-wrap"},t._l(t.options.product,(function(t,e){return n("lr-item",{key:e,staticClass:"list-item",attrs:{options:t,img:t.main_img_url[0],to:"/product/"+t.id}})})),1),t._v(" "),n("Button",{staticClass:"entry-detail-btn",attrs:{to:"/theme/"+t.options.id,name:"进入"+t.options.name+"详情",type:"black"}})],1):t._e()}),[],!1,null,"368b9846",null).exports),f=n(251),C=n(256),D={layout:"main",watchQuery:["cate_id"],data:function(){return{cateData:null,productData:[],themeData:[],pLoading:!0,allData:null,thumbData:[],rescCateData:null}},components:{mButton:l.a,TCateList:_,PageProductList:f.a,LrItem:v},created:function(){var t=this.$route.query.cate_id;this.getThemeAndProduct(t),this.getCateThumb(t)},validate:function(t){var e=t.query;return/^\d+$/.test(e.cate_id)},asyncData:(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isDev,e.route,e.store,e.env,e.params,n=e.query,e.req,e.res,e.redirect,r=e.error,c=n.cate_id,t.next=4,C.a.getCurCate(c);case 4:return(o=t.sent)||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{cateData:o});case 7:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),watch:{$route:function(t){var e=t.query.cate_id;this.getCateThumb(e),this.getThemeAndProduct(e)}},methods:{getThemeAndProduct:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.getThemeList(e);case 2:n=t.sent,this.productData=n.product,this.themeData=n.theme,this.pLoading=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),getCateThumb:function(t){var e=this;C.a.getCateThumb(t).then((function(t){t&&t.length>0&&e.getRescCate(t[0].id),e.thumbData=t}))},getRescCate:function(t){var e=this;C.a.getThemeCate(t,0).then((function(t){e.rescCateData=t}))}}},w=(n(338),Object(d.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-box theme-list-container"},[n("thumb",[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),t._l(t.thumbData,(function(e,r){return n("thumb-item",{key:r},[t.thumbData.length-1>r?n("nuxt-link",{attrs:{to:"/theme?id="+e.id}},[t._v(t._s(e.name))]):n("span",[t._v(t._s(e.name))])],1)}))],2),t._v(" "),n("div",{staticClass:"head-tit font24 bold"},[t._v("唔该文创创意之"+t._s(t.cateData.name))]),t._v(" "),n("div",{staticClass:"theme-list-wrap"},[n("div",{staticClass:"section van-hairline--bottom"},[n("div",{staticClass:"head-img"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:t.cateData.mobile_imgs_url[0]}})],1),t._v(" "),n("p",{staticClass:"desc-txt"},[t._v("\n        "+t._s(t.cateData.introduce)+"\n      ")])]),t._v(" "),t._l(t.themeData,(function(t,e){return n("div",{key:e},[n("TCateList",{attrs:{options:t}})],1)})),t._v(t._s(t.pLoading)+"\n    "),t._v(" "),n("PageProductList",{staticClass:"product-list-wrap",attrs:{productsData:t.productData,loading:t.pLoading}}),t._v(" "),n("div",{staticClass:"resc-cate"},[n("div",{staticClass:"resc-tit font22 center bold"},[t._v("推荐文创分类")]),t._v(" "),n("div",{staticClass:"list-wrap"},t._l(t.rescCateData,(function(t,e){return n("lr-item",{key:e,staticClass:"list-item",attrs:{options:t,img:t.mobile_imgs_url[0],to:"/theme/list?cate_id="+t.id}})})),1)])],2),t._v(" "),n("cate-list")],1)}),[],!1,null,null,null));e.default=w.exports}}]);