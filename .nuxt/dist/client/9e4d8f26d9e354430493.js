(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{243:function(t,e,n){},275:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx6WWQQ3DMAxFX6XdVwiBMAiDUAiFUAiDMAiFUAiDUAiDUAbexc26zU3sLlJUKdGTFf9vu4gIkQ30QIpCCRBgioIPBS8R6KrQKCJEwBlYgOQGNSEC3PKZE3xqtNYNAjeN1n+cV6BWIz1/7irgXaN1bnAj9sO8L4Cjglc3+C12BFytldwg0Cl0LybOI3YVtKxVBUtiW/vEew3AWb/1tRF7AWZ3mXnE3pGsbK0SWBV7D5TI27agWageMOtXc4uVVbdjLOfMkSRZNTiFwKgRrD7jsl6pjw4h0FvMe2C1fbhmYRQ81pAPj4C/ho7Cg+XjQ2M8Av7MkkjhTlsfR3+Oso+jfSa3mWbtH57VNE2riRpfaDPdtNCjESkAAAAASUVORK5CYII="},276:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAtCAYAAACecFpJAAAACXBIWXMAAAsSAAALEgHS3X78AAABE0lEQVRIx7WWUQ2DQBBE39VAcdCTgAQkIAEJSKiESqgEJCABCZVQB9cPtg1QuNtJ2ksOvl4m7M7OEoAGeKaUJoQTgKeBUQFPwA24hBA6xFMBD1OuUkp47vyADkjAVQINnhTVJdiY6l0CDR4NjipYGzhKoMF3gxsVjFakUQINvppqp4KVqT4k0OA+Z4p85TJWPBV83ANne69PsV8HpvCAu1b0TQIMW1N4wbi1Iu75m5Pio6qAK1O4wa0VVfD9rYMKfqqrQKt+KuA7zKLSx6/4lNqwnBKl8a0yj/Eo9bwjVSvR0Rp0UzMnu8FKnuyVQC5G4+9WwMKPw//XnLrOs370gMXttFPEYz+WwMFT/j1w8v5pLO8LUyiWzX4KdYQAAAAASUVORK5CYII="},277:function(t,e,n){"use strict";var r=n(243);n.n(r).a},280:function(t,e,n){},295:function(t,e,n){"use strict";n(107);var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,thumbCurIndex:0,hoverClass:"",ratio:1,thumbW:0,swiperOption:{spaceBetween:10,navigation:{nextEl:".button-next",prevEl:".button-prev"}},swiperOptionThumbs:{slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0}}},created:function(){var t=Number(window.innerWidth),e=window.devicePixelRatio;this.thumbW=t*e/750*158/e},mounted:function(){},methods:{slideChange:function(t){this.curIndex=t,this.thumbCurIndex=t,this.$refs.swiperThumbs.swipeTo(t)},thumbSlideChange:function(t){this.curIndex=t,this.thumbCurIndex=t},btnClick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.curIndex,n=this.swiperData.length;e=0===t?e<=0?n-1:--e:e>=n?0:++e,this.$refs.swiper.swipeTo(e),this.$refs.swiperThumbs.swipeTo(e)},thumbTap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.swiper.swipeTo(t),this.$refs.swiperThumbs.swipeTo(t),this.curIndex=t,this.thumbCurIndex=t}}},o=(n(277),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-container"},[r("van-swipe",{ref:"swiper",staticClass:"product-head-swiper",attrs:{"show-indicators":!1},on:{change:t.slideChange}},t._l(t.swiperData,(function(t){return r("van-swipe-item",{key:t.id,staticClass:"swipe-item"},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:t}})],1)})),1),t._v(" "),r("van-swipe",{ref:"swiperThumbs",staticClass:"thumb-swiper",attrs:{loop:!1,width:t.thumbW,"show-indicators":!1}},t._l(t.swiperData,(function(e,n){return r("van-swipe-item",{key:e.id,staticClass:"thumb-item",class:{active:t.thumbCurIndex==n},on:{click:function(e){return t.thumbTap(n)}}},[r("van-image",{staticClass:"full-img",attrs:{fit:"cover",src:e}}),t._v(" "),r("div",{staticClass:"border-class"})],1)})),1),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-prev",on:{click:function(e){return t.btnClick(0)}}},[r("img",{attrs:{src:n(275),alt:""}})]),t._v(" "),r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"button-wrap button-next",on:{click:function(e){return t.btnClick(1)}}},[r("img",{attrs:{src:n(276),alt:""}})])],1)}),[],!1,null,"299dfd12",null);e.a=component.exports},320:function(t,e,n){"use strict";var r=n(280);n.n(r).a},348:function(t,e,n){"use strict";n.r(e);n(91),n(92),n(109),n(27),n(23),n(94);var r,o=n(59),c=(n(107),n(41),n(5)),l=n(110),v=n(295),d=n(294),h=n(108),f={layout:"main",components:{banner:v.a,productList:d.a,Button:h.a},data:function(){return{activeName:"first",isShowTab:!0,productData:null,rescProduct:[],currentIndex:0,tabTop:0,propVal:[],centerDialogVisible:!1}},created:function(){this.$nextTick((function(){this.getTabTop()}))},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,v,d,h,f,m,A;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.error,c=Number(n.id),t.next=4,Promise.all([l.a.getProductDetail(c),l.a.getRescProduct(5,5,c)]);case 4:return v=t.sent,d=Object(o.a)(v,2),h=d[0],f=d[1],m=[],h.prop&&h.prop.length>0&&(A=h.prop[0].prop_value)&&(m=A.split(",")),h.content=h.content.replace(/\<img/g,'<img style="width:100%;"'),h||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{productData:h,propVal:m,rescProduct:f});case 13:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return this.$seo("".concat(this.productData.name," - 唔该"),"正处于萌芽阶段")},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},methods:{getTabTop:function(){this.tabTop=document.getElementById("defail-tab-wrap").offsetTop+68},setScrollTop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;document.documentElement.scrollTop?document.documentElement.scrollTop=t:document.body.scrollTop=t},changeTab:function(t){this.setScrollTop(this.tabTop)},buyBtnTap:function(t){this.centerDialogVisible=!this.centerDialogVisible},dotTap:function(t){var e=t.currentTarget.dataset.index;this.currentIndex=Number(e),this.$refs.banner.setActiveItem(this.currentIndex)},bannerChange:function(t){this.currentIndex=Number(t)},handleClick:function(t,e){console.log(t,e)},payTap:function(t){var e=t.currentTarget.dataset.type;if(1==e){var n=t.currentTarget.dataset.url;window.location.href=n}}}},m=(n(320),n(3)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box product-box product-detail-container"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/product","hover-class":"hover-class"}},[t._v("产品列表")])],1),t._v(" "),n("thumb-item",[t._v(t._s(t.productData.name))])],1),t._v(" "),n("div",{staticClass:"index-content"},[n("banner",{attrs:{swiperData:t.productData.mobile_imgs_url}}),t._v(" "),n("div",{staticClass:"product-info"},[n("div",{staticClass:"label"},[t._v("新商品")]),t._v(" "),n("div",{staticClass:"title font20"},[t._v(t._s(t.productData.name))]),t._v(" "),n("div",{staticClass:"price font18"},[t._v("￥"+t._s(t.productData.price))]),t._v(" "),n("div",{staticClass:"attr-wrap font12"},[n("div",{staticClass:"item"},[t._v("\n\t\t\t\t  "+t._s(t.productData.introduce)+"\n\t\t\t\t")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"item"},[n("span",[t._v("在库状态：")]),t._v(t._s(t.productData.stock>0?"有货":"缺货")+"\n\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"action-wrap"},[n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"淘宝购买",type:"primary"}},[n("i",{staticClass:"iconfont font20",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"小程序购买",type:"white"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("Button",{attrs:{name:"回到首页",type:"white"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1),t._v(" "),n("div",{staticClass:"btn-wrap share-btn-wrap van-hairline--top"},[n("Button",{attrs:{name:"分享",type:"black"}},[n("i",{staticClass:"iconfont font18",attrs:{slot:"icon"},slot:"icon"},[t._v("")])])],1)])],1),t._v(" "),n("div",{staticClass:"defail-wrap"},[n("van-tabs",{staticClass:"detail-btn-tab",attrs:{border:!1,"title-active-color":"#0f0f0f","title-inactive-color":"#0f0f0f",sticky:"",animated:"",swipeable:"",id:"defail-tab-wrap",color:"#0f0f0f"},on:{change:t.changeTab,click:t.changeTab}},[n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("商品详情")]),t._v(" "),n("div",{staticClass:"defail-info",domProps:{innerHTML:t._s(t.productData.content)}})]),t._v(" "),n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("尺寸/规格")]),t._v("\n        内容 2")]),t._v(" "),n("van-tab",[n("div",{staticClass:"font14",attrs:{slot:"title"},slot:"title"},[t._v("注意事项")]),t._v("\n        内容 3")])],1),t._v(" "),n("div",{staticClass:"gift-info-container"},[n("div",{staticClass:"gift-wrap"},[n("h3",{staticClass:"tit"},[t._v("礼品包装")]),t._v(" "),n("div",{staticClass:"gift-con"},[n("p",{staticClass:"txt"},[t._v("は毎日の暮らしにあわせた使いやすい本格派の庖丁です。種類が多く専門的で「どれを選んだらよいか」分かりづらい庖丁を、まずこれだけ揃えれば充分という")]),t._v(" "),n("p",{staticClass:"img-wrap"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/cover1@icon.jpg"}})],1)])])]),t._v(" "),n("div",{staticClass:"relative-wrap"},[t._m(1),t._v(" "),n("productList",{attrs:{options:t.rescProduct}})],1)],1),t._v(" "),n("cate-list")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("span",[this._v("商品编号：")]),this._v("1111769388\n\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label font16 bold"},[e("span",[this._v("相关产品")])])}],!1,null,null,null);e.default=component.exports}}]);