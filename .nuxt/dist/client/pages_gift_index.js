(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{263:function(t,e,n){},265:function(t,e,n){},307:function(t,e,n){"use strict";var r=n(263);n.n(r).a},309:function(t,e,n){"use strict";var r=n(265);n.n(r).a},337:function(t,e,n){"use strict";n.r(e);n(105),n(89),n(49);var r,c=n(8),o=n(106),d=n(236),l=n(253),v={props:{swiperData:{type:Array}},data:function(){return{curIndex:0}},created:function(){},methods:{onChange:function(t){this.curIndex=t}}},m=(n(307),n(3)),f=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-swiper"},[n("van-swipe",{attrs:{"show-indicators":!1,duration:360},on:{change:t.onChange}},t._l(t.swiperData,(function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{fit:"cover",src:t}})],1)})),1),t._v(" "),n("div",{staticClass:"swiper-nav-wrap swiper-dot-wrap"},t._l(t.swiperData,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0)],1)}),[],!1,null,"ea056bf6",null).exports,w=n(300),_=n(299),h=n(109),C={layout:"main",data:function(){return{column_id:0,bannerData:{},seasonData:{},giftListData:{},productAllData:[],productsData:[{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"}]}},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,d,l,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,n=e.query,e.store,r=e.error,c=n.cate_id,o=n.column_id,n.name,c=Number(c||1),t.next=5,_.a.getBanner(c);case 5:return d=t.sent,t.next=8,_.a.getSeasonResc(c);case 8:return l=t.sent,t.next=11,_.a.getGiftCate(c);case 11:return(v=t.sent)||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{bannerData:d,seasonData:l,giftListData:v,cate_id:c,column_id:o});case 14:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),created:function(){this.getAllProduct()},validate:function(t){var e=t.query;return/^[1-9]\d*$/.test(e.column_id)&&/^[1-9]\d*$/.test(e.cate_id)},methods:{getAllProduct:function(){var t=this,e=this.column_id||0;this.loading=!0,h.a.getProductByCategory(e,1,100).then((function(e){t.productAllData=e.data,t.loading=!1}))}},components:{Button:o.a,productItem:d.a,pageProductList:l.a,HeadBanner:f,Cate:w.a}},D=(n(309),Object(m.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gift-container"},[n("div",{staticClass:"gift-tit bold"},[t._v("唔该礼物赠品")]),t._v(" "),n("div",{staticClass:"section index-section van-hairline--bottom"},[n("HeadBanner",{staticClass:"head-banner-wrap",attrs:{swiperData:t.bannerData.mobile_imgs_url}}),t._v(" "),n("ul",{staticClass:"btn-wrap-list"},[n("li",[n("a",{directives:[{name:"anchor",rawName:"v-anchor",value:1,expression:"1"}],attrs:{href:"javascript:void(0);"}},[n("Button",{attrs:{name:"提供包装"}})],1)]),t._v(" "),n("li",[n("a",{directives:[{name:"anchor",rawName:"v-anchor",value:2,expression:"2"}],attrs:{href:"javascript:void(0);"}},[n("Button",{attrs:{name:"按场景选择"}})],1)]),t._v(" "),n("li",[n("a",{directives:[{name:"anchor",rawName:"v-anchor",value:3,expression:"3"}],attrs:{href:"javascript:void(0);"}},[n("Button",{attrs:{name:"按价格选择"}})],1)])])],1),t._v(" "),n("div",{staticClass:"section cate-section van-hairline--bottom"},[n("div",{staticClass:"title font18 center bold"},[t._v(t._s(t.seasonData.name))]),t._v(" "),n("div",{staticClass:"product-list"},t._l(t.seasonData.product,(function(t,e){return n("productItem",{key:e,attrs:{productData:t}})})),1)]),t._v(" "),n("div",{staticClass:"section cate-section van-hairline--bottom",attrs:{id:"anchor-1"}},[n("div",{staticClass:"title font18 center bold"},[t._v("礼品包装")]),t._v(" "),n("div",{staticClass:"gift-pack-wrap"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._v(" "),n("p",{staticClass:"info"},[t._v("\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      ")]),t._v(" "),n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._v(" "),n("p",{staticClass:"info"},[t._v("\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      ")])],1)]),t._v(" "),n("Cate",{attrs:{giftCate:t.giftListData,topid:t.cate_id}}),t._v(" "),n("div",{staticClass:"section gift-product-section"},[n("pageProductList",{attrs:{productsData:t.productAllData,loading:t.loading}})],1),t._v(" "),n("cate-list")],1)}),[],!1,null,null,null));e.default=D.exports}}]);