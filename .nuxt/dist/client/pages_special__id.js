(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{232:function(t,e,n){},233:function(t,e,n){"use strict";var r={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(n(234),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item"},[n("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[n("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),n("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),n("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?n("div",{staticClass:"btn btn-animate btn-wrap font12"},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"7aac9801",null);e.a=component.exports},234:function(t,e,n){"use strict";var r=n(232);n.n(r).a},269:function(t,e,n){"use strict";var r=n(21);e.a={getAlbumList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<=0&&(t=0),r.a.fetchGet("album/list/".concat(t))},getSpecialDetail:function(t){return r.a.fetchGet("album/".concat(t,"/detail"))}}},282:function(t,e,n){},321:function(t,e,n){"use strict";var r=n(282);n.n(r).a},354:function(t,e,n){"use strict";n.r(e);n(104),n(49);var r,c=n(8),o=n(269),l={layout:"main",data:function(){return{}},components:{productItem:n(233).a},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,n=e.params,e.store,r=e.error,c=Number(n.id),t.next=4,o.a.getSpecialDetail(c);case 4:return l=t.sent,console.log(l),l||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{specialData:l});case 8:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),fetch:function(t){t.store,t.query},head:function(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},methods:{}},d=(n(321),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-section product-list-container"},[n("div",{staticClass:"crumb-head-title van-hairline--bottom"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("thumb-item",[n("nuxt-link",{attrs:{to:"/special"}},[t._v("每月特辑")])],1),t._v(" "),n("thumb-item",[t._v("圣诞特别篇")])],1)],1),t._v(" "),n("div",{staticClass:"special-content"},[n("h1",{staticClass:"tit"},[t._v(t._s(t.specialData.name))]),t._v(" "),n("div",{staticClass:"con",domProps:{innerHTML:t._s(t.specialData.content)}}),t._v(" "),t.specialData.product?n("div",{staticClass:"relative-product"},[n("div",{staticClass:"filter-wrap"},[n("div",{staticClass:"product-num"},[n("span",[t._v(t._s(t.specialData.product.length)+"件商品")])]),t._v(" "),n("dl",{staticClass:"filter-list"},[n("dt",[t._v("排序方式：")]),t._v(" "),n("dd",{attrs:{"data-index":1}},[t._v("价格高至低")]),t._v(" "),n("dd",{attrs:{"data-index":2}},[t._v("价格低至高")])])]),t._v(" "),n("div",{staticClass:"product-list"},t._l(t.specialData.product,(function(t,e){return n("productItem",{key:e,attrs:{productData:t,simple:!0}})})),1)]):t._e()]),t._v(" "),n("cate-list")],1)}),[],!1,null,null,null);e.default=component.exports}}]);