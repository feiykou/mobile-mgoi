(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{306:function(t,e,n){},349:function(t,e,n){"use strict";var r=n(306);n.n(r).a},375:function(t,e,n){"use strict";n.r(e);n(91),n(32),n(25),n(22),n(60);var r=n(8),o=(n(105),n(258)),c=n(49);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={components:{productList:o.a},props:{isTrigger:{type:Number,default:0}},created:function(){this.getRescProductData(),this.getNewsProductData(),this.$nextTick((function(){console.log(111)}))},computed:f({},Object(c.c)("indexdata",["newsProductData","rescProductData"])),data:function(){return{productAnimate:"",rescLoading:!0,newsLoading:!0}},watch:{isTrigger:function(t){}},methods:f({},Object(c.b)("indexdata",["getNewsProductData","getRescProductData"]),{productTap:function(t){t.id&&uni.navigateTo({url:"/pages/product/product?id="+t.id,animationType:"zoom-out",animationDuration:2e3})},touchstartTap:function(){this.productAnimate="animate1"},touchendTap:function(){this.productAnimate=""}})},w=(n(349),n(4)),component=Object(w.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-section-wrap index-product-wrap",on:{touchstart:t.touchstartTap,touchend:t.touchendTap}},[n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"name font16"},[t._v("推荐产品"),t._t("default")],2),t._v(" "),n("productList",{attrs:{options:t.rescProductData}})],1),t._v(" "),n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"name font16"},[t._v("上新产品")]),t._v(" "),n("productList",{attrs:{options:t.newsProductData}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);