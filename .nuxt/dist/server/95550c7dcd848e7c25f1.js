exports.ids=[10],exports.modules={100:function(t,e,r){"use strict";var n={props:{size:{type:Number,default:1},dotTop:Number},data(){let t=this;return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,speed:400,spaceBetween:0,on:{slideChange(){t.curIndex=this.activeIndex},tap(){}}}}},created(){}},o=r(2);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"head-swiper"},[t._ssrNode('<div class="swiper-wrapper" data-v-2d574813>',"</div>",[t._l(t.size,(function(e,r){return t._t("slide_"+r)}))],2),t._ssrNode(" "+(t.size>1?'<div class="dot-wrap"'+t._ssrStyle(null,{marginTop:t.dotTop+"px"},null)+" data-v-2d574813>"+t._ssrList(t.size,(function(e,r){return"<div"+t._ssrClass(null,{active:r==t.curIndex})+" data-v-2d574813></div>"}))+"</div>":"\x3c!----\x3e"))],2)}),[],!1,(function(t){var e=r(102);e.__inject__&&e.__inject__(t)}),"2d574813","7a5b5b59");e.a=component.exports},102:function(t,e,r){"use strict";r.r(e);var n=r(92),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},103:function(t,e,r){"use strict";r.r(e);var n=r(93),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},107:function(t,e,r){"use strict";var n=r(100),o={props:{swiperData:{type:Array},dotTop:Number},components:{MBanner:n.a},data(){let t=this;return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,on:{slideChange(){t.curIndex=this.activeIndex},tap(){}}}}},created(){}},c=r(2);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"head-banner-wrap"},[r("m-banner",{attrs:{size:t.swiperData.length,dotTop:t.dotTop}},t._l(t.swiperData,(function(e,n){return r("div",{key:e.id,staticClass:"swiper-slide",attrs:{slot:"slide_"+n},slot:"slide_"+n},[e.mobile_imgs_url?r("div",{staticClass:"img-wrap"},[e.mobile_imgs_url.length>0?r("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:e.mobile_imgs_url[0]}}):t._e()],1):r("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":n>0,src:e}})],1)})),0)],1)}),[],!1,(function(t){var e=r(103);e.__inject__&&e.__inject__(t)}),"1ce2dca9","ac47d244");e.a=component.exports},116:function(t,e,r){"use strict";r.r(e);var n=r(96),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},117:function(t,e,r){"use strict";var n=r(1);e.a={getBanner:(t="b-1")=>n.a.fetchGet(`banner/name?name=${t}`)}},118:function(t,e){},160:function(t,e,r){"use strict";var n=r(7),o={props:{giftCate:Object,topid:Number},data:()=>({}),methods:{priceClick(t){t.currentTarget.dataset.price.split("-")}},components:{Button:n.a}},c=r(2);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.giftCate,(function(e,n){return t._ssrNode('<div id="anchor-2" class="section cate-section van-hairline--top" data-v-40a3ab54>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-40a3ab54>'+t._ssrEscape(t._s(e.name))+"</div> "),e.sub?t._ssrNode('<ul class="scene-list" data-v-40a3ab54>',"</ul>",t._l(e.sub,(function(e,n){return t._ssrNode("<li data-v-40a3ab54>","</li>",[r("nuxt-link",{attrs:{to:"/gift/list?id="+e.id}},[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0):t._e()],2)})),t._ssrNode(" "),t._ssrNode('<div id="anchor-3" class="section cate-section van-hairline--top" data-v-40a3ab54>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-40a3ab54>按价格选择</div> '),t._ssrNode('<ul class="btn-wrap-list" data-v-40a3ab54>',"</ul>",[t._ssrNode('<li data-price="0-100" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=0-100&type=price"}},[r("Button",{attrs:{name:"~100 元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="100-200" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=100-200&type=price"}},[r("Button",{attrs:{name:"100~200元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="200-300" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=200-300&type=price"}},[r("Button",{attrs:{name:"200~300元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="300-400" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=300-400&type=price"}},[r("Button",{attrs:{name:"300~400元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="400-500" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=400-500&type=price"}},[r("Button",{attrs:{name:"400~500元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="500-600" data-v-40a3ab54>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=500-600&type=price"}},[r("Button",{attrs:{name:"500~600元"}})],1)],1)],2)],2)],2)}),[],!1,(function(t){var e=r(116);e.__inject__&&e.__inject__(t)}),"40a3ab54","faa0f0a2");e.a=component.exports},167:function(t,e,r){"use strict";r.r(e);var n=r(118),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},205:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(86),c=r(91),d=r(107),l=r(160),_=r(32),v=r(117),f={layout:"main",data:()=>({column_id:0,bannerData:null,seasonData:null,giftListData:null,productAllData:[]}),async asyncData({app:t,query:e,store:r,error:n}){let{column_id:o,name:c}=e,d=await _.a.getGiftCate(),l=await v.a.getBanner("g-1");return l.error_code&&(l=null),d||n({statusCode:404,message:"页面加载失败，请重新加载"}),{giftListData:d,column_id:o,bannerData:l.items}},created(){this.getAllProduct()},methods:{getAllProduct(){this.loading=!0,_.a.getAllProduct().then(t=>{this.productAllData=t,this.loading=!1})}},components:{Button:n.a,productItem:o.a,pageProductList:c.a,HeadBanner:d.a,Cate:l.a}},m=r(2);var component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gift-container"},[t._ssrNode('<div class="gift-tit bold font24">礼物赠品</div> '),t._ssrNode('<div class="section index-section van-hairline--bottom">',"</div>",[t.bannerData?r("HeadBanner",{staticClass:"head-banner-wrap",attrs:{swiperData:t.bannerData}}):t._e(),t._ssrNode(" "),t._ssrNode('<ul class="btn-wrap-list">',"</ul>",[t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:1,expression:"1"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"提供包装"}})],1)]),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:2,expression:"2"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"按分类选择"}})],1)]),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:3,expression:"3"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"按价格选择"}})],1)])],2)],2),t._ssrNode(" "),t.seasonData?t._ssrNode('<div class="section cate-section van-hairline--bottom">',"</div>",[t._ssrNode('<div class="title font18 center bold">'+t._ssrEscape(t._s(t.seasonData.name))+"</div> "),t._ssrNode('<div class="product-list">',"</div>",t._l(t.seasonData.product,(function(t,e){return r("productItem",{key:e,attrs:{productData:t}})})),1)],2):t._e(),t._ssrNode(" "),t._ssrNode('<div id="anchor-1" class="section cate-section van-hairline--bottom">',"</div>",[t._ssrNode('<div class="title font18 center bold">礼品包装</div> '),t._ssrNode('<div class="gift-pack-wrap">',"</div>",[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._ssrNode(' <p class="info">\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      </p> '),r("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._ssrNode(' <p class="info">\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      </p>')],2)],2),t._ssrNode(" "),r("Cate",{attrs:{giftCate:t.giftListData}}),t._ssrNode(" "),t._ssrNode('<div class="section gift-product-section">',"</div>",[r("pageProductList",{attrs:{productsData:t.productAllData,loading:t.loading}})],1),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(167);e.__inject__&&e.__inject__(t)}),null,"6437b590");e.default=component.exports},83:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},o=r(2);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-2774cf50>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-2774cf50>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-2774cf50>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"2774cf50","385b9ca6");e.a=component.exports},87:function(t,e,r){"use strict";r.r(e);var n=r(83),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},88:function(t,e,r){"use strict";r.r(e);var n=r(84),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},89:function(t,e,r){"use strict";var n=r(82),o={props:{counts:{type:Number,default:8}},components:{ContentLoader:n.ContentLoader}},c=r(2);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return t._ssrNode("<li data-v-f8c7220a>","</li>",[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var e=r(88);e.__inject__&&e.__inject__(t)}),"f8c7220a","774f870e");e.a=component.exports},90:function(t,e,r){"use strict";r.r(e);var n=r(85),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},91:function(t,e,r){"use strict";var n=r(89),o=r(86),c={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:()=>({}),components:{ProductListLoading:n.a,ProductItem:o.a}},d=r(2);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[t._ssrNode('<div class="filter-wrap"><div class="product-num font12">'+(t.productsData?'<span><i class="font18">'+t._ssrEscape(t._s(t.productsData.length))+"</i> 件商品</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.loading?r("ProductListLoading"):t._ssrNode("<div>","</div>",[t.productsData&&t.productsData.length>0?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):t._ssrNode("<div>暂无数据</div>")])],1)],2)}),[],!1,(function(t){var e=r(90);e.__inject__&&e.__inject__(t)}),null,"ccde5224");e.a=component.exports},92:function(t,e){},93:function(t,e){},96:function(t,e){}};
//# sourceMappingURL=95550c7dcd848e7c25f1.js.map