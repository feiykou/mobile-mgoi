(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){"use strict";var r={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(n(235),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item"},[n("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[n("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),n("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),n("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?n("div",{staticClass:"btn btn-animate btn-wrap font12"},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"7aac9801",null);e.a=component.exports},235:function(t,e,n){"use strict";var r=n(232);n.n(r).a},237:function(t,e,n){},238:function(t,e,n){},239:function(t,e,n){"use strict";var r={props:{to:String,type:{type:String,default:"black"},name:{type:String,default:"查看更多"}},data:function(){return{}}},c=(n(241),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mgoi-button-wrap van-hairline--surround black",class:[t.type]},[n("div",{staticClass:"icon"},[t._t("icon")],2),t._v(" "),t.to?n("nuxt-link",{attrs:{to:t.to}},[t._v(t._s(t.name))]):n("span",{staticClass:"font16"},[t._v(t._s(t.name))])],1)}),[],!1,null,"cb695024",null);e.a=component.exports},241:function(t,e,n){"use strict";var r=n(233);n.n(r).a},243:function(t,e,n){},245:function(t,e,n){"use strict";var r={data:function(){return{}}},c=(n(249),n(3)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"swiper-wrap"},[this._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},249:function(t,e,n){"use strict";var r=n(237);n.n(r).a},250:function(t,e,n){"use strict";var r=n(238);n.n(r).a},252:function(t,e,n){"use strict";var r=n(234),c=n(245),o={props:{options:Array,simple:{type:Boolean,default:!1}},components:{productItem:r.a,scrollSwiper:c.a},created:function(){this},data:function(){return{curIndex:0}}},l=(n(250),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list-box"},[n("scrollSwiper",[n("div",{staticClass:"product-list"},t._l(t.options,(function(e,r){return n("productItem",{key:r,staticClass:"swiper-slide",attrs:{simple:t.simple,productData:e}})})),1)])],1)}),[],!1,null,"148111b4",null);e.a=component.exports},271:function(t,e,n){"use strict";var r=n(21);e.a={getThemeDetail:function(t){if(!(t<=0))return r.a.fetchGet("theme/".concat(t,"/detail"))},getThemeList:function(t){return r.a.fetchGet("theme/list/".concat(t))}}},278:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},279:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},280:function(t,e,n){"use strict";var r=n(243);n.n(r).a},283:function(t,e,n){},298:function(t,e,n){"use strict";n(104);var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,thumbCurIndex:0,hoverClass:"",ratio:1,swiperOption:{spaceBetween:10,navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}},created:function(){var t=Number(window.innerWidth),e=window.devicePixelRatio;this.thumbW=t*e/750*158/e},mounted:function(){},methods:{slideChange:function(t){this.curIndex=t,this.thumbCurIndex=t,this.$refs.swiperThumbs.swipeTo(t)},thumbSlideChange:function(t){this.curIndex=t,this.thumbCurIndex=t},btnClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.curIndex,n=this.swiperData.length;e=0===t?e<=0?n-1:--e:e>=n?0:++e,this.$refs.swiper.swipeTo(e),this.$refs.swiperThumbs.swipeTo(e)},thumbTap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.swiper.swipeTo(t),this.$refs.swiperThumbs.swipeTo(t),this.curIndex=t,this.thumbCurIndex=t}}},c=(n(280),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-container"},[r("van-swipe",{ref:"swiper",staticClass:"product-head-swiper",attrs:{"show-indicators":!1},on:{change:t.slideChange}},t._l(t.swiperData,(function(t){return r("van-swipe-item",{key:t.id,staticClass:"swipe-item"},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:t}})],1)})),1),t._v(" "),r("van-swipe",{ref:"swiperThumbs",staticClass:"thumb-swiper",attrs:{loop:!1,width:t.thumbW,"show-indicators":!1},on:{change:t.thumbSlideChange}},t._l(t.swiperData,(function(e,n){return r("van-swipe-item",{key:e.id,staticClass:"thumb-item",class:{active:t.thumbCurIndex==n},on:{click:function(e){return t.thumbTap(n)}}},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:e}}),t._v(" "),r("div",{staticClass:"border-class"})],1)})),1),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",on:{click:function(e){return t.btnClick(0)}}},[r("img",{attrs:{src:n(278),alt:""}})]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",on:{click:function(e){return t.btnClick(1)}}},[r("img",{attrs:{src:n(279),alt:""}})])],1)}),[],!1,null,"0d7a433d",null);e.a=component.exports},322:function(t,e,n){"use strict";var r=n(283);n.n(r).a},355:function(t,e,n){"use strict";n.r(e);var r,c,o=n(17),l=(n(104),n(49),n(8)),d=n(239),v=n(271),h=(n(106),n(298)),m=n(252),f=(r={layout:"main",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},components:{mButton:d.a,banner:h.a,productList:m.a},data:function(){return{activeName:"first",isShowTab:!0,themeData:null,productData:null,rescProduct:[],currentIndex:0,centerDialogVisible:!1}},created:function(){},mounted:function(){},asyncData:(c=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,c=Number(n.id),t.next=4,v.a.getThemeDetail(c);case 4:return o=t.sent,console.log(o),o||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{themeData:o});case 8:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),head:function(){return this.$seo("- 唔该","正处于萌芽阶段")}},Object(o.a)(r,"validate",(function(t){var e=t.params;return/^\d+$/.test(e.id)})),Object(o.a)(r,"methods",{buyBtnTap:function(t){this.centerDialogVisible=!this.centerDialogVisible},dotTap:function(t){var e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange:function(t){this.currentIndex=Number(t)},handleClick:function(t,e){console.log(t,e)},payTap:function(t){var e=t.currentTarget.dataset.type;if(1==e){var n=t.currentTarget.dataset.url;window.location.href=n}}}),r),A=(n(322),n(3)),component=Object(A.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box product-box"},[n("div",{staticClass:"main-screen-wrap",staticStyle:{"padding-top":"65px","margin-top":"-65px"}},[n("div",{staticClass:"crumb-head-title van-hairline--bottom"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("thumb-item",[n("nuxt-link",{attrs:{to:"/special"}},[t._v("猫")])],1),t._v(" "),n("thumb-item",[t._v("文创")])],1)],1),t._v(" "),n("div",{staticClass:"main-wrap"},[n("h1",{staticClass:"tit font14"},[t._v(t._s(t.themeData.name))]),t._v(" "),n("div",{staticClass:"con",domProps:{innerHTML:t._s(t.themeData.content)}})]),t._v(" "),n("div",{staticClass:"btn-box"},[n("mButton",{attrs:{type:"primary",name:"立即购买"}})],1)]),t._v(" "),t.themeData.product.length>0?n("div",{staticClass:"relative-product"},[n("div",{staticClass:"filter-wrap"},[n("div",{staticClass:"product-num"},[n("span",[t._v(t._s(t.themeData.product.length)+"件商品")])]),t._v(" "),n("dl",{staticClass:"filter-list"},[n("dt",[t._v("排序方式：")]),t._v(" "),n("dd",{attrs:{"data-index":1}},[t._v("价格高至低")]),t._v(" "),n("dd",{attrs:{"data-index":2}},[t._v("价格低至高")])])]),t._v(" "),n("div",{staticClass:"product-list"},t._l(t.themeData.product,(function(t,e){return n("productItem",{key:e,attrs:{productData:t,simple:!0}})})),1)]):t._e(),t._v(" "),n("cate-list")],1)}),[],!1,null,null,null);e.default=component.exports}}]);