(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{225:function(t,e,n){},226:function(t,e,n){},227:function(t,e,n){},228:function(t,e,n){"use strict";var r=n(225);n.n(r).a},229:function(t,e,n){},230:function(t,e,n){"use strict";var r={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(n(228),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item"},[n("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[n("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),n("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),n("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?n("div",{staticClass:"btn btn-animate btn-wrap font12"},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"0d7bc0d8",null);e.a=component.exports},231:function(t,e,n){"use strict";var r=n(226);n.n(r).a},232:function(t,e,n){"use strict";var r=n(227);n.n(r).a},233:function(t,e,n){"use strict";var r=n(230),c={data:function(){return{}}},o=(n(231),n(3)),l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"swiper-wrap"},[this._t("default")],2)])}),[],!1,null,null,null).exports,d={props:{options:Array,dotType:{type:String,default:"dot"}},components:{productItem:r.a,scrollSwiper:l},created:function(){this},data:function(){return{curIndex:0}}},v=(n(232),Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-list-box"},[e("scrollSwiper",[e("div",{staticClass:"product-list"},this._l(this.options,(function(t,n){return e("productItem",{key:n,staticClass:"swiper-slide",attrs:{productData:t}})})),1)])],1)}),[],!1,null,"c0b6568a",null));e.a=v.exports},246:function(t,e,n){"use strict";var r=n(4);e.a={getThemeDetail:function(t){if(!(t<=0))return r.a.fetchGet("theme/".concat(t,"/detail"))},getThemeList:function(t){return r.a.fetchGet("theme/list/".concat(t))}}},250:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},251:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},252:function(t,e,n){"use strict";var r=n(229);n.n(r).a},254:function(t,e,n){},267:function(t,e,n){"use strict";var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,thumbCurIndex:0,hoverClass:"",swiperOption:{spaceBetween:10,navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}},created:function(){console.log(this)},mounted:function(){},methods:{slideChange:function(t){this.curIndex=t,this.thumbCurIndex=t},btnClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.curIndex,n=this.swiperData.length;e=0===t?e<=0?n-1:--e:e>=n?0:++e,this.$refs.swiper.swipeTo(e)},thumbTap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.swiper.swipeTo(t),this.curIndex=t,this.thumbCurIndex=t}}},c=(n(252),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-container"},[r("van-swipe",{ref:"swiper",staticClass:"product-head-swiper",attrs:{"show-indicators":!1},on:{change:t.slideChange}},t._l(t.swiperData,(function(t){return r("van-swipe-item",{key:t.id,staticClass:"swipe-item"},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:t}})],1)})),1),t._v(" "),r("div",{staticClass:"thumb-swiper"},t._l(t.swiperData,(function(e,n){return r("div",{key:e.id,staticClass:"thumb-item",class:{active:t.thumbCurIndex==n},on:{click:function(e){return t.thumbTap(n)}}},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:e}}),t._v(" "),r("div",{staticClass:"border-class"})],1)})),0),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",on:{click:function(e){return t.btnClick(0)}}},[r("img",{attrs:{src:n(250),alt:""}})]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",on:{click:function(e){return t.btnClick(1)}}},[r("img",{attrs:{src:n(251),alt:""}})])],1)}),[],!1,null,"524a60c2",null);e.a=component.exports},285:function(t,e,n){"use strict";var r=n(254);n.n(r).a},306:function(t,e,n){"use strict";n.r(e);var r,c,o=n(21),l=(n(82),n(100),n(31),n(22),n(83),n(49)),d=(n(99),n(48),n(6)),v=n(246),f=n(101),h=n(267),A=n(233),m=(r={layout:"main",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},components:{banner:h.a,productList:A.a},data:function(){return{activeName:"first",isShowTab:!0,themeData:null,productData:null,rescProduct:[],currentIndex:0,propVal:[],centerDialogVisible:!1}},created:function(){},mounted:function(){},asyncData:(c=Object(d.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,d,h,A,m,C,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,c=Number(n.id),console.log(c),t.next=5,Promise.all([v.a.getThemeDetail(c),f.a.getRescProduct(5,5,c)]);case 5:return o=t.sent,d=Object(l.a)(o,2),h=d[0],A=d[1],m=h.product,C=[],m.prop&&m.prop.length>0&&(_=m.prop[0].prop_value)&&(C=_.split(",")),console.log(m),m||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{productData:m,propVal:C,rescProduct:A});case 15:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),head:function(){return this.$seo("".concat(this.productData.name," - 唔该"),"正处于萌芽阶段")}},Object(o.a)(r,"validate",(function(t){var e=t.params;return/^\d+$/.test(e.id)})),Object(o.a)(r,"methods",{buyBtnTap:function(t){this.centerDialogVisible=!this.centerDialogVisible},dotTap:function(t){var e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange:function(t){this.currentIndex=Number(t)},handleClick:function(t,e){console.log(t,e)},payTap:function(t){var e=t.currentTarget.dataset.type;if(1==e){var n=t.currentTarget.dataset.url;window.location.href=n}}}),r),C=(n(285),n(3)),component=Object(C.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box product-box"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/theme","hover-class":"hover-class"}},[t._v("主题列表")])],1),t._v(" "),n("thumb-item",[t._v(t._s(t.productData.name))])],1),t._v(" "),n("div",{staticClass:"index-content"},[n("banner",{attrs:{swiperData:t.productData.mobile_imgs_url}}),t._v(" "),n("div",{staticClass:"product-info"},[n("div",{staticClass:"label"},[t._v("新商品")]),t._v(" "),n("div",{staticClass:"title font20"},[t._v(t._s(t.productData.name))]),t._v(" "),n("div",{staticClass:"price font18"},[t._v("￥"+t._s(t.productData.price))]),t._v(" "),n("div",{staticClass:"attr-wrap font12"},[n("div",{staticClass:"item"},[t._v("\n\t\t\t\t  "+t._s(t.productData.introduce)+"\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"item"},[n("text",[t._v("商品编号：")]),t._v("1111769388\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"item"},[n("text",[t._v("在库状态：")]),t._v(t._s(t.productData.stock>0?"有货":"缺货")+"\n\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"action-wrap"},[n("div",{staticClass:"btn font18",attrs:{"data-type":"1","data-url":t.productData.link_url,"hover-class":"btn-hover-class","hover-stay-time":600},on:{click:t.payTap}},[t._v("\n\t\t\t\t\t淘宝购买\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"btn font18 btn-fff",attrs:{"data-type":"2","hover-class":"btn-code-hover-class","hover-stay-time":600},on:{click:t.payTap}},[t._v("小程序购买")])])],1),t._v(" "),n("div",{staticClass:"defail-wrap"},[n("div",{staticClass:"detail-tit"},[n("text",[t._v("商品详情")])]),t._v(" "),n("div",{staticClass:"defail-info",domProps:{innerHTML:t._s(t.productData.content)}}),t._v(" "),n("div",{staticClass:"relative-wrap"},[n("div",{staticClass:"label font16 bold"},[n("text",[t._v("相关产品")])]),t._v(" "),n("productList",{attrs:{options:t.rescProduct}})],1)])],1)}),[],!1,null,"b07c33fa",null);e.default=component.exports}}]);