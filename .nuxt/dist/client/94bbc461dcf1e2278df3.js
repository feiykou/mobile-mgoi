(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{250:function(t,e,n){},256:function(t,e,n){"use strict";var r=n(3);e.a={getThemeDetail:function(t){if(!(t<=0))return r.a.fetchGet("theme/".concat(t,"/detail"))},getThemeList:function(t){return r.a.fetchGet("theme/list?cate_id=".concat(t))},getThemeCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.a.fetchGet("themeCate/".concat(t,"?times=").concat(e))},getCateThumb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("themeCate/crumb?id=".concat(t))},getCurCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("themeCate?id=".concat(t))}}},290:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},291:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},292:function(t,e,n){"use strict";var r=n(250);n.n(r).a},297:function(t,e,n){},311:function(t,e,n){"use strict";var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,thumbCurIndex:0,hoverClass:"",swiperOption:{navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:1,freeMode:!0,slideToClickedSlide:!0}}},methods:{slideChange:function(){var t=this.swiper.activeIndex;this.curIndex=t,this.thumbCurIndex=t,this.swiperThumb.slideTo(t)},thumbSlideChange:function(){},slideTap:function(){},thumbTap:function(){var t=this.swiperThumb.clickedIndex;this.swiper.slideTo(t),this.swiperThumb.slideTo(t)}}},o=(n(292),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-container"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.swiperOption,expression:"swiperOption",arg:"swiper"}],ref:"swiperTop",staticClass:"head-swiper",on:{slideChange:t.slideChange,tap:t.slideTap}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(t){return r("div",{key:t.id,staticClass:"swiper-slide",style:{backgroundImage:"url("+t+")"}})})),0)]),t._v(" "),r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperThumb",value:t.swiperOptionThumbs,expression:"swiperOptionThumbs",arg:"swiperThumb"}],ref:"swiperThumbs",staticClass:"thumb-swiper",on:{tap:t.thumbTap,slideChange:t.thumbSlideChange}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(e,n){return r("div",{key:e.id,staticClass:"swiper-slide",class:{active:t.thumbCurIndex==n},style:{backgroundImage:"url("+e+")"}},[r("div",{staticClass:"border-class"})])})),0)]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{attrs:{src:n(290),alt:""}})]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:n(291),alt:""}})])])}),[],!1,null,"6c71e108",null);e.a=component.exports},344:function(t,e,n){"use strict";var r=n(297);n.n(r).a},362:function(t,e,n){"use strict";n.r(e);var r,o,c=n(8),l=(n(92),n(90),n(31),n(5)),h=n(59),v=n(256),d=(n(107),n(311)),m=n(251),A=(r={layout:"main",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},components:{mButton:h.a,banner:d.a,PageProductList:m.a},data:function(){return{activeName:"first",isShowTab:!0,themeData:null,productData:null,rescProduct:[],currentIndex:0,centerDialogVisible:!1,buyShow:!1,shareShow:!1,pLoading:!0}},asyncData:(o=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,o=Number(n.id),t.next=4,v.a.getThemeDetail(o);case 4:return(c=t.sent)||r({statusCode:404,message:"页面加载失败，请重新加载"}),c.content=c.content.replace(/<img/g,"<img style='width:100%;'"),c.content=c.content.replace(/<p/g,"<p style='line-height:1.6;padding-bottom:10px;text-align:jusity;'"),t.abrupt("return",{themeData:c,pLoading:!1});case 9:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),head:function(){return this.$seo("- 唔该","正处于萌芽阶段")}},Object(c.a)(r,"validate",(function(t){var e=t.params;return/^\d+$/.test(e.id)})),Object(c.a)(r,"methods",{showBuyLink:function(){this.buyShow=!0},showShareLink:function(){this.shareShow=!0},closeShare:function(){this.shareShow=!1},closeBuy:function(){this.buyShow=!1}}),r),w=(n(344),n(4)),component=Object(w.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box product-box"},[n("thumb",[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("thumb-item",[n("nuxt-link",{attrs:{to:"/theme"}},[t._v("猫")])],1),t._v(" "),n("thumb-item",[t._v(t._s(t.themeData.name))])],1),t._v(" "),n("div",{staticClass:"main-wrap"},[n("h1",{staticClass:"tit font24"},[t._v(t._s(t.themeData.name))]),t._v(" "),n("div",{staticClass:"con",domProps:{innerHTML:t._s(t.themeData.content)}})]),t._v(" "),n("div",{staticClass:"theme-btn-wrap"},[n("div",{staticClass:"btn-wrap"},[t.themeData.product_id?n("Button",{attrs:{name:"点击购买",type:"primary",to:"/product/"+t.themeData.product_id},on:{btnClick:t.showBuyLink}},[n("i",{staticClass:"iconfont font20",attrs:{slot:"icon"},slot:"icon"},[t._v("")])]):n("Button",{attrs:{name:"敬请期待",type:"gray"},on:{btnClick:t.showBuyLink}},[n("i",{staticClass:"iconfont font20",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap share-btn-wrap van-hairline--top"},[n("Button",{attrs:{name:"分享",type:"black"},on:{btnClick:t.showShareLink}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1)]),t._v(" "),n("PageProductList",{staticClass:"theme-detail-product",attrs:{productsData:t.themeData.product,loading:t.pLoading}}),t._v(" "),n("cate-list"),t._v(" "),n("van-popup",{staticClass:"share-popup-class",attrs:{duration:.2,transition:"slide-fade",position:"center"},model:{value:t.shareShow,callback:function(e){t.shareShow=e},expression:"shareShow"}},[n("div",{staticClass:"share-link-wrap"},[n("div",{staticClass:"tit van-hairline--bottom"},[n("span",{staticClass:"font16"},[t._v("分享页面")]),t._v(" "),n("i",{on:{click:t.closeShare}},[t._v("关闭")])]),t._v(" "),n("ul",{staticClass:"share-list-wrap"},[n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在微信上分享")])]),t._v(" "),n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在推特上分享")])]),t._v(" "),n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在LINE上分享")])])]),t._v(" "),n("Button",{staticClass:"copy-link-btn",attrs:{name:"复制页面链接",type:"black",font:"font14",to:"/"}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);