exports.ids=[24],exports.modules={100:function(t,e,r){"use strict";r.r(e);var o=r(89),c=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=c.a},101:function(t,e,r){"use strict";r.r(e);var o=r(90),c=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=c.a},104:function(t,e,r){"use strict";var o=r(86),c=r(97);let n=null;var d={props:{options:Array,simple:{type:Boolean,default:!1}},components:{productItem:o.a,ScrollView:c.a},created(){n=this},data:()=>({curIndex:0})},l=r(2);var component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-list-box"},[r("scroll-view",[r("div",{staticClass:"product-list"},t._l(t.options,(function(e,o){return r("productItem",{key:o,staticClass:"swiper-slide",attrs:{simple:t.simple,productData:e}})})),1)])],1)}),[],!1,(function(t){var e=r(101);e.__inject__&&e.__inject__(t)}),"58d58a8e","2450ac90");e.a=component.exports},152:function(t,e){},189:function(t,e,r){"use strict";r.r(e);var o=r(152),c=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=c.a},216:function(t,e,r){"use strict";r.r(e);var o=r(104),c=r(7),n={components:{productList:o.a},props:{isTrigger:{type:Number,default:0}},created(){this.getRescProductData(),this.getNewsProductData(),this.$nextTick((function(){console.log(111)}))},computed:{...Object(c.mapState)("indexdata",["newsProductData","rescProductData"])},data:()=>({productAnimate:"",rescLoading:!0,newsLoading:!0}),watch:{isTrigger(t){}},methods:{...Object(c.mapActions)("indexdata",["getNewsProductData","getRescProductData"]),productTap(t){t.id&&uni.navigateTo({url:"/pages/product/product?id="+t.id,animationType:"zoom-out",animationDuration:2e3})},touchstartTap(){this.productAnimate="animate1"},touchendTap(){this.productAnimate=""}}},d=r(2);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-section-wrap index-product-wrap",on:{touchstart:t.touchstartTap,touchend:t.touchendTap}},[t._ssrNode('<div class="section-wrap">',"</div>",[t._ssrNode('<div class="item-wrap">',"</div>",[t._ssrNode('<div class="name font16">',"</div>",[t._ssrNode("推荐产品"),t._t("default")],2),t._ssrNode(" "),r("productList",{attrs:{options:t.rescProductData}})],2),t._ssrNode(" "),t._ssrNode('<div class="item-wrap">',"</div>",[t._ssrNode('<div class="name font16">上新产品</div> '),r("productList",{attrs:{options:t.newsProductData}})],2)],2)])}),[],!1,(function(t){var e=r(189);e.__inject__&&e.__inject__(t)}),null,"3772b619");e.default=component.exports},84:function(t,e){},86:function(t,e,r){"use strict";var o={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=r(2);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-d45e46e8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-d45e46e8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-d45e46e8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"d45e46e8","385b9ca6");e.a=component.exports},87:function(t,e,r){"use strict";r.r(e);var o=r(84),c=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=c.a},89:function(t,e){},90:function(t,e){},97:function(t,e,r){"use strict";var o={props:{scroll:{type:Boolean,default:!1}},data:()=>({curIndex:0,swiperOption:{slidesPerView:"auto",freeMode:!0,mousewheel:!0,touchEventsTarget:"container",scrollbar:{el:".swiper-scrollbar"}}}),created(){}},c=r(2);var component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:this.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[this._ssrNode('<div class="swiper-wrapper" data-v-8ce7d526>',"</div>",[this._ssrNode('<div class="swiper-slide" data-v-8ce7d526>',"</div>",[this._t("default")],2)]),this._ssrNode(" "+(this.scroll?'<div slot="scrollbar" class="swiper-scrollbar" data-v-8ce7d526></div>':'<div style="display: none;" data-v-8ce7d526><div slot="scrollbar" class="swiper-scrollbar" data-v-8ce7d526></div></div>'))],2)}),[],!1,(function(t){var e=r(100);e.__inject__&&e.__inject__(t)}),"8ce7d526","55b711bd");e.a=component.exports}};
//# sourceMappingURL=f20895d2f0898e3d06bd.js.map