(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{242:function(t,e,n){},259:function(t,e,n){"use strict";var c=n(242);n.n(c).a},260:function(t,e,n){"use strict";var c=n(6);e.a={getGiftCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.fetchGet("gift/cate?times=".concat(e,"&cate_id=").concat(t))},getSeasonResc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("gift/season?cate_id=".concat(t))},getBanner:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("gift/banner?cate_id=".concat(t))},getProductByCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("gift/list?cate_id=".concat(t))},getProductByPrice:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return c.a.fetchGet("gift/filter?from=".concat(t,"&to=").concat(e,"&page=").concat(n,"&size=").concat(r))}}},271:function(t,e,n){},296:function(t,e,n){"use strict";n(109),n(107);var c=n(108),r={props:{giftCate:Object,topid:Number},data:function(){return{}},methods:{priceClick:function(t){t.currentTarget.dataset.price.split("-")}},components:{Button:c.a}},o=(n(259),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.giftCate,(function(e,c){return n("div",{key:c,staticClass:"section cate-section van-hairline--top",attrs:{id:"anchor-2"}},[n("div",{staticClass:"title font18 center bold"},[t._v(t._s(e.name))]),t._v(" "),e.sub?n("ul",{staticClass:"scene-list"},t._l(e.sub,(function(e,c){return n("li",{key:c},[n("nuxt-link",{attrs:{to:"/gift/list?cate_id="+e.id+"&pid="+t.topid+"&type=product"}},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0):t._e()])})),t._v(" "),n("div",{staticClass:"section cate-section van-hairline--top",attrs:{id:"anchor-3"}},[n("div",{staticClass:"title font18 center bold"},[t._v("按价格选择")]),t._v(" "),n("ul",{staticClass:"btn-wrap-list"},[n("li",{attrs:{"data-price":"0-100"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=0-100&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"~100 元"}})],1)],1),t._v(" "),n("li",{attrs:{"data-price":"100-200"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=100-200&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"100~200元"}})],1)],1),t._v(" "),n("li",{attrs:{"data-price":"200-300"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=200-300&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"200~300元"}})],1)],1),t._v(" "),n("li",{attrs:{"data-price":"300-400"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=300-400&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"300~400元"}})],1)],1),t._v(" "),n("li",{attrs:{"data-price":"400-500"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=400-500&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"400~500元"}})],1)],1),t._v(" "),n("li",{attrs:{"data-price":"500-600"},on:{click:t.priceClick}},[n("nuxt-link",{attrs:{to:"/gift/list?name=500-600&type=price&pid="+t.topid}},[n("Button",{attrs:{name:"500~600元"}})],1)],1)])])],2)}),[],!1,null,"89715e18",null);e.a=component.exports},315:function(t,e,n){"use strict";var c=n(271);n.n(c).a},345:function(t,e,n){"use strict";n.r(e);n(109),n(92),n(107),n(91),n(41);var c,r=n(5),o=n(246),l=n(260),d=n(296),f={watchQuery:["cate_id","name"],layout:"main",components:{pageProductList:o.a,Cate:d.a},data:function(){return{curName:"季节推荐",pid:0}},asyncData:(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,c,r,o,d,f,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.app,n=e.query,e.store,e.error,c=n.cate_id,r=n.pid,o=n.name,d=n.type,c=c||0,r=Number(r||0),f=null,"product"!==d){t.next=13;break}return t.next=8,l.a.getProductByCate(c);case 8:f=t.sent,o=o||f.name,f.content=f.content.replace(/<img/g,"<img style='width: 100%; margin: 20px 0;'"),t.next=20;break;case 13:if("price"!==d){t.next=20;break}return v=(o=o||"0-100").split("-"),t.next=18,l.a.getProductByPrice(v[0],v[1]);case 18:f=t.sent,console.log(f);case 20:return t.next=22,l.a.getGiftCate(r);case 22:return m=t.sent,console.log(f),t.abrupt("return",{productListData:f,giftListData:m,curName:o,pid:r,loading:!1});case 25:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)})},v=(n(315),n(3)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gift-list-container"},[n("div",{staticClass:"cur-name font16 bold"},[t._v(t._s(t.curName))]),t._v(" "),t.productListData.content?n("div",{staticClass:"gift-content"},[n("div",{domProps:{innerHTML:t._s(t.productListData.content)}})]):t._e(),t._v(" "),t.productListData?n("pageProductList",{staticClass:"gift-product-list-wrap",attrs:{loading:t.loading,productsData:t.productListData.product||t.productListData.data}}):t._e(),t._v(" "),n("Cate",{attrs:{giftCate:t.giftListData,topid:t.pid}}),t._v(" "),n("cate-list")],1)}),[],!1,null,"118e6bef",null);e.default=component.exports}}]);