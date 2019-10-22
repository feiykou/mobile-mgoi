exports.ids=[9],exports.modules={106:function(t,e){},107:function(t,e,r){"use strict";r.r(e);var n=r(90),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},108:function(t,e,r){"use strict";var n=r(2);e.a={getGiftCate:(t=0,e=1)=>n.a.fetchGet(`gift/cate?times=${e}&cate_id=${t}`),getSeasonResc:(t=0)=>n.a.fetchGet(`gift/season?cate_id=${t}`),getBanner:(t=0)=>n.a.fetchGet(`gift/banner?cate_id=${t}`),getProductByCate:(t=0)=>n.a.fetchGet(`gift/list?cate_id=${t}`),getProductByPrice:(t=0,e=0,r=1,c=10)=>n.a.fetchGet(`gift/filter?from=${t}&to=${e}&page=${r}&size=${c}`)}},109:function(t,e){},142:function(t,e,r){"use strict";var n=r(29),c={props:{giftCate:Object,topid:Number},data:()=>({}),methods:{priceClick(t){t.currentTarget.dataset.price.split("-")}},components:{Button:n.a}},o=r(1);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.giftCate,(function(e,n){return t._ssrNode('<div id="anchor-2" class="section cate-section van-hairline--top" data-v-89715e18>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-89715e18>'+t._ssrEscape(t._s(e.name))+"</div> "),e.sub?t._ssrNode('<ul class="scene-list" data-v-89715e18>',"</ul>",t._l(e.sub,(function(e,n){return t._ssrNode("<li data-v-89715e18>","</li>",[r("nuxt-link",{attrs:{to:"/gift/list?cate_id="+e.id+"&pid="+t.topid+"&type=product"}},[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0):t._e()],2)})),t._ssrNode(" "),t._ssrNode('<div id="anchor-3" class="section cate-section van-hairline--top" data-v-89715e18>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-89715e18>按价格选择</div> '),t._ssrNode('<ul class="btn-wrap-list" data-v-89715e18>',"</ul>",[t._ssrNode('<li data-price="0-100" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=0-100&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"~100 元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="100-200" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=100-200&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"100~200元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="200-300" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=200-300&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"200~300元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="300-400" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=300-400&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"300~400元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="400-500" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=400-500&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"400~500元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="500-600" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=500-600&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"500~600元"}})],1)],1)],2)],2)],2)}),[],!1,(function(t){var e=r(107);e.__inject__&&e.__inject__(t)}),"89715e18","faa0f0a2");e.a=component.exports},151:function(t,e,r){"use strict";r.r(e);var n=r(106),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},152:function(t,e,r){"use strict";r.r(e);var n=r(109),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},182:function(t,e,r){"use strict";r.r(e);var n=r(29),c=r(81),o=r(92),d={props:{swiperData:{type:Array}},data:()=>({curIndex:0}),created(){},methods:{onChange(t){this.curIndex=t}}},l=r(1);var _=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"head-swiper"},[r("van-swipe",{attrs:{"show-indicators":!1,duration:360},on:{change:t.onChange}},t._l(t.swiperData,(function(t,e){return r("van-swipe-item",{key:e},[r("van-image",{attrs:{fit:"cover",src:t}})],1)})),1),t._ssrNode(' <div class="swiper-nav-wrap swiper-dot-wrap" data-v-ea056bf6>'+t._ssrList(t.swiperData,(function(e,r){return"<div"+t._ssrClass(null,{active:r==t.curIndex})+" data-v-ea056bf6></div>"}))+"</div>")],2)}),[],!1,(function(t){var e=r(151);e.__inject__&&e.__inject__(t)}),"ea056bf6","7a5b5b59").exports,v=r(142),f=r(108),m=r(31),h={layout:"main",data:()=>({column_id:0,bannerData:{},seasonData:{},giftListData:{},productAllData:[],productsData:[{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"}]}),async asyncData({app:t,query:e,store:r,error:n}){let{cate_id:c,column_id:o,name:d}=e;c=Number(c||1);let l=await f.a.getBanner(c),_=await f.a.getSeasonResc(c),v=await f.a.getGiftCate(c);return v||n({statusCode:404,message:"页面加载失败，请重新加载"}),{bannerData:l,seasonData:_,giftListData:v,cate_id:c,column_id:o}},created(){this.getAllProduct()},validate:({query:t})=>/^[1-9]\d*$/.test(t.column_id)&&/^[1-9]\d*$/.test(t.cate_id),methods:{getAllProduct(){let t=this.column_id||0;this.loading=!0,m.a.getProductByCategory(t,1,100).then(t=>{this.productAllData=t.data,this.loading=!1})}},components:{Button:n.a,productItem:c.a,pageProductList:o.a,HeadBanner:_,Cate:v.a}};var N=Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gift-container"},[t._ssrNode('<div class="gift-tit bold">唔该礼物赠品</div> '),t._ssrNode('<div class="section index-section van-hairline--bottom">',"</div>",[r("HeadBanner",{staticClass:"head-banner-wrap",attrs:{swiperData:t.bannerData.mobile_imgs_url}}),t._ssrNode(" "),t._ssrNode('<ul class="btn-wrap-list">',"</ul>",[t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:1,expression:"1"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"提供包装"}})],1)]),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:2,expression:"2"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"按场景选择"}})],1)]),t._ssrNode(" "),t._ssrNode("<li>","</li>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:3,expression:"3"}],attrs:{href:"javascript:void(0);"}},[r("Button",{attrs:{name:"按价格选择"}})],1)])],2)],2),t._ssrNode(" "),t._ssrNode('<div class="section cate-section van-hairline--bottom">',"</div>",[t._ssrNode('<div class="title font18 center bold">'+t._ssrEscape(t._s(t.seasonData.name))+"</div> "),t._ssrNode('<div class="product-list">',"</div>",t._l(t.seasonData.product,(function(t,e){return r("productItem",{key:e,attrs:{productData:t}})})),1)],2),t._ssrNode(" "),t._ssrNode('<div id="anchor-1" class="section cate-section van-hairline--bottom">',"</div>",[t._ssrNode('<div class="title font18 center bold">礼品包装</div> '),t._ssrNode('<div class="gift-pack-wrap">',"</div>",[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._ssrNode(' <p class="info">\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      </p> '),r("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}}),t._ssrNode(' <p class="info">\n        中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店中川政七商店\n      </p>')],2)],2),t._ssrNode(" "),r("Cate",{attrs:{giftCate:t.giftListData,topid:t.cate_id}}),t._ssrNode(" "),t._ssrNode('<div class="section gift-product-section">',"</div>",[r("pageProductList",{attrs:{productsData:t.productAllData,loading:t.loading}})],1),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(152);e.__inject__&&e.__inject__(t)}),null,"6437b590");e.default=N.exports},79:function(t,e){},80:function(t,e){},81:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=r(1);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[t._ssrNode('<div hover-class="hover-class" class="img" data-v-7e99ae87>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-7e99ae87>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-7e99ae87>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-7e99ae87>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(82);e.__inject__&&e.__inject__(t)}),"7e99ae87","385b9ca6");e.a=component.exports},82:function(t,e,r){"use strict";r.r(e);var n=r(79),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},83:function(t,e){},86:function(t,e,r){"use strict";r.r(e);var n=r(80),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},87:function(t,e,r){"use strict";var n=r(78),c={props:{counts:{type:Number,default:8}},components:{ContentLoader:n.ContentLoader}},o=r(1);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return t._ssrNode("<li data-v-f8c7220a>","</li>",[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var e=r(86);e.__inject__&&e.__inject__(t)}),"f8c7220a","774f870e");e.a=component.exports},89:function(t,e,r){"use strict";r.r(e);var n=r(83),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},90:function(t,e){},92:function(t,e,r){"use strict";var n=r(87),c=r(81),o={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:()=>({}),components:{ProductListLoading:n.a,ProductItem:c.a}},d=r(1);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[t._ssrNode('<div class="filter-wrap"><div class="product-num font12">'+(t.productsData?'<span><i class="font18">'+t._ssrEscape(t._s(t.productsData.length))+"</i> 件商品</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.loading?r("ProductListLoading"):t._ssrNode("<div>","</div>",[t.productsData&&t.productsData.length>0?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):t._ssrNode("<div>暂无数据</div>")])],1)],2)}),[],!1,(function(t){var e=r(89);e.__inject__&&e.__inject__(t)}),null,"ccde5224");e.a=component.exports}};
//# sourceMappingURL=f6cbee44b6185f022c7c.js.map