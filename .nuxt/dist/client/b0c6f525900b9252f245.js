(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){"use strict";var r=n(324);n.n(r).a},328:function(t,e,n){"use strict";var r={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(n(326),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item"},[n("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[n("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),n("p",{staticClass:"tit font14",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),n("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?n("div",{staticClass:"btn btn-animate btn-wrap font12"},[n("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"43d9d864",null);e.a=component.exports},329:function(t,e,n){"use strict";var r=n(325);n.n(r).a},330:function(t,e,n){"use strict";var r=n(328),c={props:{options:Array,dotType:{type:String,default:"dot"}},components:{productItem:r.a},created:function(){this},data:function(){return{curIndex:0,swiperOption:{spaceBetween:0,slidesPerView:"auto",on:{slideChange:function(){}}}}},methods:{slideChange:function(t){var e=this.swiper;this.curIndex=e.activeIndex}}},o=(n(329),n(6)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list-box"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.swiperOption,expression:"swiperOption",arg:"swiper"}],staticClass:"product-wrap",on:{slideChange:t.slideChange}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.options,(function(t,e){return n("productItem",{key:e,staticClass:"swiper-slide",attrs:{productData:t}})})),1)]),t._v(" "),"dot"==t.dotType?n("div",{staticClass:"dot-wrap"},t._l(t.options,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex,"no-display":t.options.length-3<r}})})),0):t._e()])}),[],!1,null,"e4fc21a6",null);e.a=component.exports},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},352:function(t,e,n){"use strict";var r=n(353),c=n.n(r);e.default=c.a},353:function(t,e){},354:function(t,e,n){},355:function(t,e,n){},356:function(t,e,n){"use strict";var r=n(357),c=n.n(r);e.default=c.a},357:function(t,e){},358:function(t,e,n){},359:function(t,e,n){},360:function(t,e,n){},376:function(t,e,n){"use strict";var r=n(349);n.n(r).a},377:function(t,e,n){"use strict";var r=n(350);n.n(r).a},378:function(t,e,n){"use strict";var r=n(351);n.n(r).a},379:function(t,e,n){"use strict";var r=n(387),c=n(352),o=(n(380),n(6)),component=Object(o.a)(c.default,r.a,r.b,!1,null,"1db339ae",null);e.default=component.exports},380:function(t,e,n){"use strict";var r=n(354);n.n(r).a},381:function(t,e,n){"use strict";var r=n(355);n.n(r).a},382:function(t,e,n){"use strict";var r=n(386),c=n(356),o=(n(383),n(6)),component=Object(o.a)(c.default,r.a,r.b,!1,null,"62b0837a",null);e.default=component.exports},383:function(t,e,n){"use strict";var r=n(358);n.n(r).a},384:function(t,e,n){"use strict";var r=n(359);n.n(r).a},385:function(t,e,n){"use strict";var r=n(360);n.n(r).a},386:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-section-wrap "},[n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"tit"},[t._v("唔该")]),t._v(" "),n("div",{staticClass:"con"},[n("div",{staticClass:"p"},[t._v("唔，是一种声音，有你、我之意"),n("br"),t._v("该，是一种约定，有完备之意")]),t._v(" "),n("div",{staticClass:"p"},[t._v("在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度")]),t._v(" "),n("div",{staticClass:"p"},[t._v("取名唔该意在表达“唔该”在服务过程中怎么做都无法表达您对宠物热爱的一份感激")]),t._v(" "),n("div",{staticClass:"p"},[t._v("唔，是一种声音，有你、我之意"),n("br"),t._v("该，是一种约定，有完备之意")]),t._v(" "),n("div",{staticClass:"p"},[t._v("在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度")])])])])}];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}))},387:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"index-section-wrap"},[e("view",{staticClass:"section-wrap footer-wrap"},[e("Footer",{staticClass:"bottom-info",attrs:{bgColor:"#fff"}})],1)])},c=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}))},388:function(t,e,n){"use strict";n.r(e);n(25),n(18),n(89);var r,c=n(46),o=(n(45),n(4)),l=null,d={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,on:{slideChange:function(){l.curIndex=this.activeIndex},tap:function(){}}}}},created:function(){l=this}},v=(n(376),n(6)),f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"head-swiper"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,(function(t){return n("div",{key:t.id,staticClass:"swiper-slide",style:{backgroundImage:"url("+t.img_url[0]+")"}})})),0),t._v(" "),n("div",{staticClass:"dot-wrap"},t._l(t.swiperData,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0)])}),[],!1,null,"7dea2b7e",null).exports,m=(n(128),{components:{productList:n(330).a},props:{rescProduct:{type:Object,default:function(){return{productData:[],resProductData:[]}}},isTrigger:{type:Number,default:0}},data:function(){return{productAnimate:"",rescLoading:!0,newsLoading:!0,data1:[{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/p1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/big1.png",text:"Grid"},{img_url:"/static/p1.png",text:"Grid"}]}},watch:{isTrigger:function(t){}},computed:{},methods:{productTap:function(t){t.id&&uni.navigateTo({url:"/pages/product/product?id="+t.id,animationType:"zoom-out",animationDuration:2e3})},touchstartTap:function(){this.productAnimate="animate1"},touchendTap:function(){this.productAnimate=""}}}),w=(n(377),Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-section-wrap product-wrap",on:{touchstart:t.touchstartTap,touchend:t.touchendTap}},[n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"name font16 bold"},[t._v("推荐"),t._t("default")],2),t._v(" "),n("productList",{attrs:{options:t.rescProduct.productData,dotType:"none"}})],1),t._v(" "),n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"name font16 bold"},[t._v("上新")]),t._v(" "),n("productList",{attrs:{options:t.rescProduct.resProductData,dotType:"none"}})],1)])])}),[],!1,null,"9e52c38e",null).exports),_={props:{giftCateData:Array},data:function(){return{swiperOption:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0},columnNum:2,curIndex:0}},created:function(){},methods:{slideChange:function(){var t=this.swiper;console.log(t),this.curIndex=t.activeIndex}},computed:{gridGroup:function(){var t=this,e=[],n=[];if(this.giftCateData&&this.giftCateData.forEach((function(r,c){n.push(r),c%t.columnNum==t.columnNum-1&&(e.push(n),n=[])})),n.length>0){if(this.columnNum>n.length)for(var i=0,r=n.length;i<this.columnNum-r;i++)n.push({seize:!0});e.push(n)}return n=null,console.log(e),e}}},h=(n(378),Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-section-wrap cate-section-wrap"},[n("div",{staticClass:"section-wrap"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:swiper",value:t.swiperOption,expression:"swiperOption",arg:"swiper"}],staticClass:"head-swiper",on:{slideChange:t.slideChange}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.gridGroup,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide swiper-item-wrap"},t._l(e,(function(e,r){return n("div",{key:r,staticClass:"cate-wrap"},[n("div",{staticClass:"name title font16"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"con-product"},[n("div",{staticClass:"content font12"},[t._v(t._s(e.introduce))]),t._v(" "),e.product_cate?n("div",{staticClass:"product-list"},t._l(e.product_cate,(function(t,e){return n("div",{key:e,staticClass:"item"},[n("img",{attrs:{src:t.main_img_url[0]}})])})),0):t._e()])])})),0)})),0)]),t._v(" "),n("div",{staticClass:"dot-wrap"},t._l(t.gridGroup.length,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0)])])}),[],!1,null,"4ad77939",null).exports),C=n(379),x={components:{},props:{columnData:{type:Array,default:function(){return[]}}},computed:{},methods:{columnTap:function(t){var e=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/column/column?id="+e})}},data:function(){return{}}},y=(n(381),Object(v.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-section-wrap"},[n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"item-wrap"},t._l(t.columnData,(function(e,r){return n("div",{key:r,staticClass:"item animate-hover-class",class:0==r?"big-item":"",attrs:{"data-id":e.id,"hover-class":"hover-class","hover-stay-time":100},on:{click:t.columnTap}},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:e.mobile_imgs_url[0],mode:"aspectFill"}})]),t._v(" "),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"title",class:0==r?"font16":""},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"description",class:0==r?"":"font12"},[t._v(t._s(e.introduce))])])])})),0),t._v(" "),n("div",{staticClass:"more-btn-wrap"},[n("text",{staticClass:"btn font15"},[t._v("查看更多")])])])])}),[],!1,null,"c8e27294",null).exports),D=n(382),O=null,I={props:{swiperData:{type:Array}},data:function(){return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,on:{slideChange:function(){O.curIndex=this.activeIndex},tap:function(){}}}}},created:function(){O=this}},T=(n(384),Object(v.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"head-swiper"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[n("ul",{staticClass:"list"},t._l(t.swiperData,(function(t,e){return n("li",{key:e,style:{backgroundImage:"url("+t.mobile_imgs_url[0]+")"}})})),0)])]),t._v(" "),n("div",{staticClass:"dot-wrap"},t._l(t.swiperData,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0)])}),[],!1,null,null,null).exports),k=n(161),P=null,S={layout:"main",components:{headSwiper:f,theme:T,products:w,cate:h,column:y,company:D.default,bottom:C.default},data:function(){return{isShowTab:!0,leftBarScale:0,curIndex:0,bannerLen:7,bannerData:[],rescThemeData:[],rescProduct:{},giftCateData:[],scondCateData:[],columnData:[],swiperOption:{direction:"vertical",slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,on:{slideChange:function(){P.curIndex=this.activeIndex,P.letBaranimate()},tap:function(){}}}}},created:function(){P=this,this.letBaranimate(),console.log(this)},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l,d,v,f,m,w,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.error,t.next=3,Promise.all([k.a.getIndexBanner(),k.a.getRescTheme(),k.a.getNewsProduct(),k.a.getRescProduct(),k.a.getColumn(),k.a.getGiftCate(98)]);case 3:return r=t.sent,o=Object(c.a)(r,6),l=o[0],d=o[1],v=o[2],f=o[3],m=o[4],w=o[5],l||n({statusCode:404,message:"页面加载失败，请重新加载"}),_={productData:v,resProductData:f},console.log(_),t.abrupt("return",{bannerData:l,rescThemeData:d,rescProduct:_,newsProductData:v,columnData:m,giftCateData:w});case 15:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),methods:{letBaranimate:function(){var t=this.curIndex+1,e=1/this.bannerLen.toFixed(2),n=Math.floor(100*e*t)/100;t==this.bannerLen&&(n=1),this.leftBarScale=n}}},j=(n(385),Object(v.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container index-container"},[n("Header",{staticClass:"header-box",staticStyle:{flex:"0 0 70px"},attrs:{curNavIndex:0,show:t.isShowTab}}),t._v(" "),n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"swiper-box"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[n("headSwiper",{attrs:{swiperData:t.bannerData}})],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("theme",{attrs:{swiperData:t.rescThemeData}})],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("products",{attrs:{rescProduct:t.rescProduct}})],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("cate",{attrs:{giftCateData:t.giftCateData}})],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("column",{attrs:{columnData:t.columnData}})],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("company")],1),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("bottom")],1)]),t._v(" "),n("view",{staticClass:"line-wrap"},[n("view",{staticClass:"line",style:{transform:"translate3d(0px, 0px, 0px) scaleX(1) scaleY("+t.leftBarScale+")"}})])])],1)}),[],!1,null,null,null));e.default=j.exports}}]);