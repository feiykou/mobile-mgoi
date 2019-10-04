exports.ids=[13],exports.modules={100:function(t,e){},113:function(t,e,r){"use strict";var c={props:{swiperData:{type:Array}},data:()=>({curIndex:0,thumbCurIndex:0,hoverClass:"",swiperOption:{spaceBetween:10,navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}),created(){console.log(this)},mounted(){},methods:{slideChange(t){this.curIndex=t,this.thumbCurIndex=t},btnClick(t=0){let e=this.curIndex;const r=this.swiperData.length;e=0===t?e<=0?r-1:--e:e>=r?0:++e,this.$refs.swiper.swipeTo(e)},thumbTap(t=0){this.$refs.swiper.swipeTo(t),this.curIndex=t,this.thumbCurIndex=t}}},n=r(1);var component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"banner-container"},[c("van-swipe",{ref:"swiper",staticClass:"product-head-swiper",attrs:{"show-indicators":!1},on:{change:t.slideChange}},t._l(t.swiperData,(function(t){return c("van-swipe-item",{key:t.id,staticClass:"swipe-item"},[c("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:t}})],1)})),1),t._ssrNode(" "),t._ssrNode('<div class="thumb-swiper" data-v-524a60c2>',"</div>",t._l(t.swiperData,(function(e,r){return t._ssrNode("<div"+t._ssrClass("thumb-item",{active:t.thumbCurIndex==r})+" data-v-524a60c2>","</div>",[c("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:e}}),t._ssrNode(' <div class="border-class" data-v-524a60c2></div>')],2)})),0),t._ssrNode(" "),c("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",on:{click:function(e){return t.btnClick(0)}}},[t._ssrNode("<img"+t._ssrAttr("src",r(96))+" alt data-v-524a60c2>")]),t._ssrNode(" "),c("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",on:{click:function(e){return t.btnClick(1)}}},[t._ssrNode("<img"+t._ssrAttr("src",r(97))+" alt data-v-524a60c2>")])],2)}),[],!1,(function(t){var e=r(98);e.__inject__&&e.__inject__(t)}),"524a60c2","2d8b64a0");e.a=component.exports},130:function(t,e,r){"use strict";r.r(e);var c=r(100),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},149:function(t,e,r){"use strict";r.r(e);var c=r(92),n=r(25),o=r(113),d=r(79),l={layout:"main",validate:({params:t})=>/^\d+$/.test(t.id),components:{banner:o.a,productList:d.a},data:()=>({activeName:"first",isShowTab:!0,themeData:null,productData:null,rescProduct:[],currentIndex:0,propVal:[],centerDialogVisible:!1}),created(){},mounted(){},async asyncData({params:t,error:e}){const r=Number(t.id);console.log(r);let[o,d]=await Promise.all([c.a.getThemeDetail(r),n.a.getRescProduct(5,5,r)]),l=o.product,v=[];if(l.prop&&l.prop.length>0){let t=l.prop[0].prop_value;t&&(v=t.split(","))}return console.log(l),l||e({statusCode:404,message:"页面加载失败，请重新加载"}),{productData:l,propVal:v,rescProduct:d}},head(){return this.$seo(`${this.productData.name} - 唔该`,"正处于萌芽阶段")},validate:({params:t})=>/^\d+$/.test(t.id),methods:{buyBtnTap(t){this.centerDialogVisible=!this.centerDialogVisible},dotTap(t){const e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange(t){this.currentIndex=Number(t)},handleClick(t,e){console.log(t,e)},payTap(t){const e=t.currentTarget.dataset.type;if(1==e){const e=t.currentTarget.dataset.url;window.location.href=e}}}},v=r(1);var component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container box product-box"},[r("thumb",{staticClass:"font12"},[r("thumb-item",[r("nuxt-link",{attrs:{to:"/theme","hover-class":"hover-class"}},[t._v("主题列表")])],1),t._v(" "),r("thumb-item",[t._v(t._s(t.productData.name))])],1),t._ssrNode(" "),t._ssrNode('<div class="index-content" data-v-b07c33fa>',"</div>",[r("banner",{attrs:{swiperData:t.productData.mobile_imgs_url}}),t._ssrNode(' <div class="product-info" data-v-b07c33fa><div class="label" data-v-b07c33fa>新商品</div> <div class="title font20" data-v-b07c33fa>'+t._ssrEscape(t._s(t.productData.name))+'</div> <div class="price font18" data-v-b07c33fa>'+t._ssrEscape("￥"+t._s(t.productData.price))+'</div> <div class="attr-wrap font12" data-v-b07c33fa><div class="item" data-v-b07c33fa>'+t._ssrEscape("\n\t\t\t\t  "+t._s(t.productData.introduce)+"\n\t\t\t\t")+'</div> <div class="item" data-v-b07c33fa><text data-v-b07c33fa>商品编号：</text>1111769388\n\t\t\t\t</div> <div class="item" data-v-b07c33fa><text data-v-b07c33fa>在库状态：</text>'+t._ssrEscape(t._s(t.productData.stock>0?"有货":"缺货")+"\n\t\t\t\t")+'</div></div></div> <div class="action-wrap" data-v-b07c33fa><div data-type="1"'+t._ssrAttr("data-url",t.productData.link_url)+' hover-class="btn-hover-class"'+t._ssrAttr("hover-stay-time",600)+' class="btn font18" data-v-b07c33fa>\n\t\t\t\t\t淘宝购买\n\t\t\t\t</div> <div data-type="2" hover-class="btn-code-hover-class"'+t._ssrAttr("hover-stay-time",600)+' class="btn font18 btn-fff" data-v-b07c33fa>小程序购买</div></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="defail-wrap" data-v-b07c33fa>',"</div>",[t._ssrNode('<div class="detail-tit" data-v-b07c33fa><text data-v-b07c33fa>商品详情</text></div> <div class="defail-info" data-v-b07c33fa>'+t._s(t.productData.content)+"</div> "),t._ssrNode('<div class="relative-wrap" data-v-b07c33fa>',"</div>",[t._ssrNode('<div class="label font16 bold" data-v-b07c33fa><text data-v-b07c33fa>相关产品</text></div> '),r("productList",{attrs:{options:t.rescProduct}})],2)],2)],2)}),[],!1,(function(t){var e=r(130);e.__inject__&&e.__inject__(t)}),"b07c33fa","845b2080");e.default=component.exports},71:function(t,e){},72:function(t,e){},73:function(t,e){},74:function(t,e,r){"use strict";r.r(e);var c=r(71),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},75:function(t,e){},76:function(t,e,r){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=r(1);var component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item"},[t._ssrNode('<div hover-class="hover-class" class="img" data-v-0d7bc0d8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-0d7bc0d8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-0d7bc0d8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-0d7bc0d8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(74);e.__inject__&&e.__inject__(t)}),"0d7bc0d8","272b27e8");e.a=component.exports},77:function(t,e,r){"use strict";r.r(e);var c=r(72),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},78:function(t,e,r){"use strict";r.r(e);var c=r(73),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},79:function(t,e,r){"use strict";var c=r(76),n={data:()=>({asideWidth:"100%"})},o=r(1);var d=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{attrs:{width:this.asideWidth}},[e("div",{staticClass:"swiper-wrap"},[this._t("default")],2)])],1)}),[],!1,(function(t){var e=r(77);e.__inject__&&e.__inject__(t)}),null,"7efcbd51").exports;let l=null;var v={props:{options:Array,dotType:{type:String,default:"dot"}},components:{productItem:c.a,scrollSwiper:d},created(){l=this},data:()=>({curIndex:0})};var f=Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-list-box"},[e("scrollSwiper",[e("div",{staticClass:"product-list"},this._l(this.options,(function(t,r){return e("productItem",{key:r,staticClass:"swiper-slide",attrs:{productData:t}})})),1)])],1)}),[],!1,(function(t){var e=r(78);e.__inject__&&e.__inject__(t)}),"c0b6568a","31309ff3");e.a=f.exports},92:function(t,e,r){"use strict";var c=r(2);e.a={getThemeDetail(t){if(!(t<=0))return c.a.fetchGet(`theme/${t}/detail`)},getThemeList:t=>c.a.fetchGet(`theme/list/${t}`)}},96:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},97:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},98:function(t,e,r){"use strict";r.r(e);var c=r(75),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a}};
//# sourceMappingURL=a1c55a6921523539de95.js.map