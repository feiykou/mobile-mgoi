exports.ids=[14],exports.modules={100:function(t,e,r){"use strict";r.r(e);var c=r(89),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},101:function(t,e,r){"use strict";r.r(e);var c=r(90),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},104:function(t,e,r){"use strict";var c=r(86),o=r(97);let n=null;var d={props:{options:Array,simple:{type:Boolean,default:!1}},components:{productItem:c.a,ScrollView:o.a},created(){n=this},data:()=>({curIndex:0})},l=r(2);var component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list-box"},[r("scroll-view",[r("div",{staticClass:"product-list"},t._l(t.options,(function(e,c){return r("productItem",{key:c,staticClass:"swiper-slide",attrs:{simple:t.simple,productData:e}})})),1)])],1)}),[],!1,(function(t){var e=r(101);e.__inject__&&e.__inject__(t)}),"58d58a8e","2450ac90");e.a=component.exports},121:function(t,e){},165:function(t,e,r){"use strict";r.r(e);var c=r(121),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},195:function(t,e,r){"use strict";r.r(e);var c=r(33);var o=r(30),n=r(97),d=r(104),l={watchQuery:["cate_id"],layout:"main",data:()=>({curName:"",themeData:[],productData:null,giftData:null,productListData:[]}),components:{Button:o.a,ScrollView:n.a,ProductList:d.a},async asyncData({app:t,query:e,store:r,error:o}){let{type:n,cate_id:d}=e;if(d=Number(d),!n||!d)return o({statusCode:404,message:"页面加载失败，请重新加载"});let l="";1===Number(n)&&(l="狗专区"),2===Number(n)&&(l="猫专区");let v=await c.a.getWenResc(d),_=await c.a.getProdutcResc(d),f=await c.a.getGiftResc(d);return v?{themeData:v,curName:l,productData:_,giftData:f}:o({statusCode:404,message:"页面加载失败，请重新加载"})}},v=r(2);var component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pets-container"},[t._ssrNode('<div class="pets-tit font24 bold" data-v-d1025b92>'+t._ssrEscape(t._s(t.curName))+"</div> "),t.themeData.length>0?t._ssrNode('<div class="pets-section-scroll" data-v-d1025b92>',"</div>",[t._ssrNode('<div class="pets-sub-tit font16 bold" data-v-d1025b92>文创</div> '),r("scroll-view",{staticClass:"wen-scroll-view"},[r("ul",{staticClass:"wen-list"},t._l(t.themeData,(function(e,c){return r("li",{key:c},[r("nuxt-link",{staticClass:"wrap",attrs:{to:e.link_url}},[r("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0)])],2):t._e(),t._ssrNode(" "),t._l(t.productData,(function(e,c){return t._ssrNode('<div class="pets-section pets-product-section van-hairline--top" data-v-d1025b92>',"</div>",[t._ssrNode('<div class="cate-tit font16 bold" data-v-d1025b92>'+t._ssrEscape(t._s(e.name))+'</div> <p class="cate-desc" data-v-d1025b92>'+t._ssrEscape(t._s(e.description))+"</p> "),r("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:e.mobile_imgs_url[0]}}),t._ssrNode(" "),r("product-list",{staticClass:"product-list-wrap",attrs:{options:e.product}}),t._ssrNode(" "),r("Button",{staticClass:"cate-btn",attrs:{type:"blue",font:"font12",to:e.link_url}})],2)})),t._ssrNode(" "),t.giftData?t._ssrNode('<div class="pets-section van-hairline--top" data-v-d1025b92>',"</div>",[t._ssrNode('<div class="cate-tit font16 bold" data-v-d1025b92>'+t._ssrEscape(t._s(t.giftData.name))+"</div> "),r("van-image",{staticClass:"gift-img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.giftData.mobile_imgs_url[0]}}),t._ssrNode(' <p class="cate-desc" data-v-d1025b92>'+t._ssrEscape(t._s(t.giftData.description))+"</p> "),t._ssrNode('<div class="btn-cate-wrap" data-v-d1025b92>',"</div>",[r("Button",{attrs:{to:t.giftData.link_url,font:"font12"}})],1)],2):t._e(),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(165);e.__inject__&&e.__inject__(t)}),"d1025b92","07be0474");e.default=component.exports},84:function(t,e){},86:function(t,e,r){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},o=r(2);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-d45e46e8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-d45e46e8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-d45e46e8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"d45e46e8","385b9ca6");e.a=component.exports},87:function(t,e,r){"use strict";r.r(e);var c=r(84),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},89:function(t,e){},90:function(t,e){},97:function(t,e,r){"use strict";var c={props:{scroll:{type:Boolean,default:!1}},data:()=>({curIndex:0,swiperOption:{slidesPerView:"auto",freeMode:!0,mousewheel:!0,touchEventsTarget:"container",scrollbar:{el:".swiper-scrollbar"}}}),created(){}},o=r(2);var component=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:this.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[this._ssrNode('<div class="swiper-wrapper" data-v-8ce7d526>',"</div>",[this._ssrNode('<div class="swiper-slide" data-v-8ce7d526>',"</div>",[this._t("default")],2)]),this._ssrNode(" "+(this.scroll?'<div slot="scrollbar" class="swiper-scrollbar" data-v-8ce7d526></div>':'<div style="display: none;" data-v-8ce7d526><div slot="scrollbar" class="swiper-scrollbar" data-v-8ce7d526></div></div>'))],2)}),[],!1,(function(t){var e=r(100);e.__inject__&&e.__inject__(t)}),"8ce7d526","55b711bd");e.a=component.exports}};
//# sourceMappingURL=a573d1b02aefd8d6e8c8.js.map