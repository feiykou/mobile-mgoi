(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{250:function(t,e,n){},291:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},292:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},293:function(t,e,n){"use strict";var r=n(250);n.n(r).a},294:function(t,e,n){},310:function(t,e,n){"use strict";var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,thumbCurIndex:0,hoverClass:"",swiperOption:{navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:1,freeMode:!0,slideToClickedSlide:!0}}},methods:{slideChange:function(){var t=this.swiper.activeIndex;this.curIndex=t,this.thumbCurIndex=t,this.swiperThumb.slideTo(t)},thumbSlideChange:function(){},slideTap:function(){},thumbTap:function(){var t=this.swiperThumb.clickedIndex;this.swiper.slideTo(t),this.swiperThumb.slideTo(t)}}},o=(n(293),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-container"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.swiperOption,expression:"swiperOption",arg:"swiper"}],ref:"swiperTop",staticClass:"head-swiper",on:{slideChange:t.slideChange,tap:t.slideTap}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(t){return r("div",{key:t.id,staticClass:"swiper-slide",style:{backgroundImage:"url("+t+")"}})})),0)]),t._v(" "),r("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperThumb",value:t.swiperOptionThumbs,expression:"swiperOptionThumbs",arg:"swiperThumb"}],ref:"swiperThumbs",staticClass:"thumb-swiper",on:{tap:t.thumbTap,slideChange:t.thumbSlideChange}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(e,n){return r("div",{key:e.id,staticClass:"swiper-slide",class:{active:t.thumbCurIndex==n},style:{backgroundImage:"url("+e+")"}},[r("div",{staticClass:"border-class"})])})),0)]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[r("img",{attrs:{src:n(291),alt:""}})]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",attrs:{slot:"button-next"},slot:"button-next"},[r("img",{attrs:{src:n(292),alt:""}})])])}),[],!1,null,"6c71e108",null);e.a=component.exports},339:function(t,e,n){"use strict";var r=n(294);n.n(r).a},361:function(t,e,n){"use strict";n.r(e);n(89),n(90),n(107),n(25),n(22),n(92);var r,o=n(58),c=(n(105),n(31),n(5)),l=n(108),v=n(310),d=n(258),h=n(106),m={layout:"main",components:{banner:v.a,productList:d.a,Button:h.a},data:function(){return{activeName:"first",isShowTab:!0,productData:null,rescProduct:[],currentIndex:0,tabTop:0,propVal:[],centerDialogVisible:!1,buyShow:!1,shareShow:!1}},created:function(){this.$nextTick((function(){this.getTabTop()}))},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,v,d,h,m,f,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,c=Number(n.id),t.next=4,Promise.all([l.a.getProductDetail(c),l.a.getRescProduct(5,5,c)]);case 4:return v=t.sent,d=Object(o.a)(v,2),h=d[0],m=d[1],f=[],h.prop&&h.prop.length>0&&(C=h.prop[0].prop_value)&&(f=C.split(",")),h.content=h.content.replace(/\<img/g,'<img style="width:100%;"'),h||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{productData:h,propVal:f,rescProduct:m});case 13:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return this.$seo("".concat(this.productData.name," - 唔该"),"正处于萌芽阶段")},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},methods:{getTabTop:function(){this.tabTop=document.getElementById("defail-tab-wrap").offsetTop+68},setScrollTop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;document.documentElement.scrollTop?document.documentElement.scrollTop=t:document.body.scrollTop=t},changeTab:function(t){this.setScrollTop(this.tabTop)},buyBtnTap:function(t){this.centerDialogVisible=!this.centerDialogVisible},dotTap:function(t){var e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange:function(t){this.currentIndex=Number(t)},handleClick:function(t,e){console.log(t,e)},payTap:function(t){var e=t.currentTarget.dataset.type;if(1==e){var n=t.currentTarget.dataset.url;window.location.href=n}},showBuyLink:function(){this.buyShow=!0},showShareLink:function(){this.shareShow=!0},closeShare:function(){this.shareShow=!1,console.log(1)},closeBuy:function(){this.buyShow=!1,console.log(2)}}},f=(n(339),n(4)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box product-box product-detail-container"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/product","hover-class":"hover-class"}},[t._v("产品列表")])],1),t._v(" "),n("thumb-item",[t._v(t._s(t.productData.name))])],1),t._v(" "),n("div",{staticClass:"index-content"},[n("banner",{attrs:{swiperData:t.productData.mobile_imgs_url}}),t._v(" "),n("div",{staticClass:"product-info"},[n("div",{staticClass:"label"},[t._v("新商品")]),t._v(" "),n("div",{staticClass:"title font20"},[t._v(t._s(t.productData.name))]),t._v(" "),n("div",{staticClass:"price font18"},[t._v("￥"+t._s(t.productData.price))]),t._v(" "),n("div",{staticClass:"attr-wrap font12"},[n("div",{staticClass:"item"},[t._v("\n\t\t\t\t  "+t._s(t.productData.introduce)+"\n\t\t\t\t")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"item"},[n("span",[t._v("在库状态：")]),t._v(t._s(t.productData.stock>0?"有货":"缺货")+"\n\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"action-wrap"},[n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"点击购买",type:"primary"},on:{btnClick:t.showBuyLink}},[n("i",{staticClass:"iconfont font20",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"小程序购买",type:"white"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"回到首页",type:"white"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap share-btn-wrap van-hairline--top"},[n("Button",{attrs:{name:"分享",type:"black"},on:{btnClick:t.showShareLink}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1)])],1),t._v(" "),n("div",{staticClass:"defail-wrap"},[n("van-tabs",{staticClass:"detail-btn-tab",attrs:{border:!1,"title-active-color":"#0f0f0f","title-inactive-color":"#0f0f0f",sticky:"",animated:"",swipeable:"",id:"defail-tab-wrap",color:"#0f0f0f"},on:{change:t.changeTab,click:t.changeTab}},[n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("商品详情")]),t._v(" "),n("div",{staticClass:"defail-info",domProps:{innerHTML:t._s(t.productData.content)}})]),t._v(" "),n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("尺寸/规格")]),t._v("\n        内容 2")]),t._v(" "),n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("注意事项")]),t._v("\n        内容 3\n        ")])],1),t._v(" "),n("div",{staticClass:"gift-info-container"},[n("div",{staticClass:"gift-wrap"},[n("h3",{staticClass:"tit"},[t._v("礼品包装")]),t._v(" "),n("div",{staticClass:"gift-con"},[n("p",{staticClass:"txt"},[t._v("は毎日の暮らしにあわせた使いやすい本格派の庖丁です。種類が多く専門的で「どれを選んだらよいか」分かりづらい庖丁を、まずこれだけ揃えれば充分という")]),t._v(" "),n("div",{staticClass:"img-wrap"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}})],1)])])]),t._v(" "),n("div",{staticClass:"relative-wrap"},[t._m(1),t._v(" "),n("productList",{attrs:{options:t.rescProduct}})],1)],1),t._v(" "),n("cate-list"),t._v(" "),n("van-popup",{staticClass:"popup-class",attrs:{duration:.2,transition:"slide-fade",position:"center"},model:{value:t.buyShow,callback:function(e){t.buyShow=e},expression:"buyShow"}},[n("div",{staticClass:"buy-link-wrap"},[n("div",{staticClass:"tit"},[n("span",{staticClass:"font16"},[t._v("支付选择")]),t._v(" "),n("i",{on:{click:t.closeBuy}},[t._v("关闭")])]),t._v(" "),n("ul",{staticClass:"buy-list-wrap"},[n("li",{staticClass:"van-hairline--top"},[n("span",{staticClass:"text"},[t._v("淘宝")]),t._v(" "),n("Button",{staticClass:"buy-btn-item",attrs:{name:"前往淘宝购买",type:"primary",font:"font14",to:"/"}})],1),t._v(" "),n("li",{staticClass:"van-hairline--top"},[n("span",{staticClass:"text"},[t._v("微信小程序")]),t._v(" "),n("Button",{staticClass:"buy-btn-item",attrs:{name:"微信小程序",type:"primary",font:"font14"}})],1),t._v(" "),n("li",{staticClass:"van-hairline--top"},[n("span",{staticClass:"text"},[t._v("小红书")]),t._v(" "),n("Button",{staticClass:"buy-btn-item",attrs:{name:"小红书",type:"primary",font:"font14",to:"/"}})],1)])])]),t._v(" "),n("van-popup",{staticClass:"share-popup-class",attrs:{duration:.2,transition:"slide-fade",position:"center"},model:{value:t.shareShow,callback:function(e){t.shareShow=e},expression:"shareShow"}},[n("div",{staticClass:"share-link-wrap"},[n("div",{staticClass:"tit van-hairline--bottom"},[n("span",{staticClass:"font16"},[t._v("分享页面")]),t._v(" "),n("i",{on:{click:t.closeShare}},[t._v("关闭")])]),t._v(" "),n("ul",{staticClass:"share-list-wrap"},[n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在微信上分享")])]),t._v(" "),n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在推特上分享")])]),t._v(" "),n("li",{staticClass:"van-hairline--bottom"},[n("img",{attrs:{src:"/images/share/s3.png",alt:""}}),t._v(" "),n("span",{staticClass:"text"},[t._v("在LINE上分享")])])]),t._v(" "),n("Button",{staticClass:"copy-link-btn",attrs:{name:"复制页面链接",type:"black",font:"font14",to:"/"}})],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("商品编号：")]),this._v("1111769388\n\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label font16 bold"},[e("span",[this._v("相关产品")])])}],!1,null,null,null);e.default=component.exports}}]);