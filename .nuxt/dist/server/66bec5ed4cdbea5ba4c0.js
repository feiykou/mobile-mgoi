exports.ids=[22],exports.modules={100:function(t,e,o){var content=o(104);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(5).default;t.exports.__inject__=function(t){r("c1d8bd3c",content,!0,t)}},102:function(t,e,o){"use strict";var r={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=o(1);var component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-item mgoi-product-item"},[t._ssrNode('<div hover-class="hover-class" class="img" data-v-7e99ae87>',"</div>",[o("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[o("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-7e99ae87>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-7e99ae87>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-7e99ae87>',"</div>",[o("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=o(103);e.__inject__&&e.__inject__(t)}),"7e99ae87","385b9ca6");e.a=component.exports},103:function(t,e,o){"use strict";o.r(e);var r=o(100),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},104:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".mgoi-product-item .btn-wrap[data-v-7e99ae87]{margin-top:2.4vw;border-color:#32a2c5}.mgoi-product-item .btn-wrap a[data-v-7e99ae87]{color:#32a2c5}.mgoi-product-item.product-item[data-v-7e99ae87]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;width:29.333vw;margin-bottom:6.667vw;line-height:1.5;transition:none .2s cubic-bezier(.215,.61,.355,1);transition-property:opacity}.mgoi-product-item.product-item span[data-v-7e99ae87]{font-weight:700;position:relative;z-index:1}.mgoi-product-item.product-item .img[data-v-7e99ae87]{width:100%;height:29.333vw;margin-bottom:2.667vw;position:relative;z-index:1}.mgoi-product-item.product-item .img img[data-v-7e99ae87]{width:100%;height:100%}.mgoi-product-item.product-item .tit[data-v-7e99ae87]{min-height:9.6vw;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.mgoi-product-item.product-item .price[data-v-7e99ae87]{font-weight:700}",""])},106:function(t,e,o){var content=o(117);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(5).default;t.exports.__inject__=function(t){r("6cfcd53c",content,!0,t)}},107:function(t,e,o){var content=o(122);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(5).default;t.exports.__inject__=function(t){r("02fee6db",content,!0,t)}},116:function(t,e,o){"use strict";o.r(e);var r=o(106),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},117:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".swiper-wrap{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;overflow-x:scroll;-webkit-overflow-scrolling:touch}.swiper-wrap::-webkit-scrollbar{display:none}",""])},118:function(t,e,o){"use strict";var r={data:()=>({})},n=o(1);var component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._ssrNode('<div class="swiper-wrap">',"</div>",[this._t("default")],2)])}),[],!1,(function(t){var e=o(116);e.__inject__&&e.__inject__(t)}),null,"5736ec2c");e.a=component.exports},121:function(t,e,o){"use strict";o.r(e);var r=o(107),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},122:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".no-display[data-v-148111b4]{display:none}.product-list-box[data-v-148111b4]{position:relative}.product-list-box .product-list[data-v-148111b4]{display:-webkit-box;display:-ms-flexbox;display:flex}.product-list-box .swiper-slide[data-v-148111b4]{margin-right:4vw}",""])},123:function(t,e,o){"use strict";var r=o(102),n=o(118);let c=null;var d={props:{options:Array,simple:{type:Boolean,default:!1}},components:{productItem:r.a,scrollSwiper:n.a},created(){c=this},data:()=>({curIndex:0})},l=o(1);var component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-list-box"},[o("scrollSwiper",[o("div",{staticClass:"product-list"},t._l(t.options,(function(e,r){return o("productItem",{key:r,staticClass:"swiper-slide",attrs:{simple:t.simple,productData:e}})})),1)])],1)}),[],!1,(function(t){var e=o(121);e.__inject__&&e.__inject__(t)}),"148111b4","2450ac90");e.a=component.exports},164:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(5).default;t.exports.__inject__=function(t){r("b5a62eb6",content,!0,t)}},223:function(t,e,o){"use strict";o.r(e);var r=o(164),n=o.n(r);for(var c in r)"default"!==c&&function(t){o.d(e,t,(function(){return r[t]}))}(c);e.default=n.a},224:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".loading[data-v-3530fc93]{margin:.667vw 0 2.667vw}.index-section-wrap[data-v-3530fc93]{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;box-sizing:border-box;height:100%}.index-section-wrap.screen-sm-max .news-wrap[data-v-3530fc93]{padding-top:10.667vw}.section-wrap[data-v-3530fc93]{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:center;flex:1;padding:2.667vw 0 2.667vw 8.533vw;background-color:#fff;margin-top:-4vw}.section-wrap .name[data-v-3530fc93]{margin-bottom:5.6vw}.news-wrap[data-v-3530fc93]{padding-top:4vw;margin-top:2.667vw;margin-bottom:-6.667vw}.grid-wrap[data-v-3530fc93]{width:100%;box-sizing:border-box;margin-top:1.333vw}",""])},253:function(t,e,o){"use strict";o.r(e);var r=o(123),n=o(8),c={components:{productList:r.a},props:{isTrigger:{type:Number,default:0}},created(){this.getRescProductData(),this.getNewsProductData()},computed:{...Object(n.mapState)("indexdata",["newsProductData","rescProductData"])},data:()=>({productAnimate:"",rescLoading:!0,newsLoading:!0,data1:[{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/p1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/p1.png",text:"Grid"}]}),watch:{isTrigger(t){}},methods:{...Object(n.mapActions)("indexdata",["getNewsProductData","getRescProductData"]),productTap(t){t.id&&uni.navigateTo({url:"/pages/product/product?id="+t.id,animationType:"zoom-out",animationDuration:2e3})},touchstartTap(){this.productAnimate="animate1"},touchendTap(){this.productAnimate=""}}},d=o(1);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index-section-wrap",on:{touchstart:t.touchstartTap,touchend:t.touchendTap}},[t._ssrNode('<div class="section-wrap" data-v-3530fc93>',"</div>",[t._ssrNode('<div class="item-wrap" data-v-3530fc93>',"</div>",[t._ssrNode('<div class="name font16" data-v-3530fc93>',"</div>",[t._ssrNode("推荐产品"),t._t("default")],2),t._ssrNode(" "),o("productList",{attrs:{options:t.rescProductData}})],2),t._ssrNode(" "),t._ssrNode('<div class="item-wrap" data-v-3530fc93>',"</div>",[t._ssrNode('<div class="name font16" data-v-3530fc93>上新产品</div> '),o("productList",{attrs:{options:t.newsProductData}})],2)],2)])}),[],!1,(function(t){var e=o(223);e.__inject__&&e.__inject__(t)}),"3530fc93","3772b619");e.default=component.exports}};
//# sourceMappingURL=66bec5ed4cdbea5ba4c0.js.map