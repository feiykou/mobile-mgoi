exports.ids=[11],exports.modules={131:function(t,e){},132:function(t,e,n){"use strict";var r=n(133),d=n.n(r);e.default=d.a},133:function(t,e){},134:function(t,e){},135:function(t,e,n){"use strict";var r=n(136),d=n.n(r);e.default=d.a},136:function(t,e){},137:function(t,e){},138:function(t,e){},168:function(t,e,n){"use strict";n.r(e);var r=n(131),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},169:function(t,e,n){"use strict";var r=n(179),d=n(132),c=n(1);var component=Object(c.a)(d.default,r.a,r.b,!1,(function(t){var e=n(170);e.__inject__&&e.__inject__(t)}),"64d3708d","720daea7");e.default=component.exports},170:function(t,e,n){"use strict";n.r(e);var r=n(134),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},171:function(t,e,n){"use strict";var r=n(178),d=n(135),c=n(1);var component=Object(c.a)(d.default,r.a,r.b,!1,(function(t){var e=n(172);e.__inject__&&e.__inject__(t)}),"7b4726fa","246eeef1");e.default=component.exports},172:function(t,e,n){"use strict";n.r(e);var r=n(137),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},173:function(t,e,n){"use strict";n.r(e);var r=n(138),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},178:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-section-wrap footer-wrap"},[e("Footer",{staticClass:"bottom-info",attrs:{bgColor:"#fff"}})],1)},d=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return d}))},179:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"index-section-wrap font12",staticStyle:{"padding-top":"70px"}},[this._ssrNode('<div class="section-wrap" data-v-64d3708d><div class="tit" data-v-64d3708d>唔该</div> <div class="con" data-v-64d3708d><div class="p" data-v-64d3708d>唔，是一种声音，有你、我之意<br data-v-64d3708d>该，是一种约定，有完备之意</div> <div class="p" data-v-64d3708d>在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div> <div class="p" data-v-64d3708d>取名唔该意在表达“唔该”在服务过程中怎么做都无法表达您对宠物热爱的一份感激</div> <div class="p" data-v-64d3708d>唔，是一种声音，有你、我之意<br data-v-64d3708d>该，是一种约定，有完备之意</div> <div class="p" data-v-64d3708d>在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div></div></div>')])},d=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return d}))},180:function(t,e,n){"use strict";n.r(e);var r={props:{swiperData:{type:Array}},data:()=>({curIndex:0}),created(){},methods:{onChange(t){this.curIndex=t}}},d=n(1);var c=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-swiper"},[n("van-swipe",{attrs:{"show-indicators":!1,duration:360},on:{change:t.onChange}},t._l(t.swiperData,(function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{fit:"cover","lazy-load":e>0,src:t.img_url[0]||t}})],1)})),1),t._ssrNode(' <div class="dot-wrap" style="padding-top: 65px;" data-v-3698bd16>'+t._ssrList(t.swiperData,(function(e,n){return"<div"+t._ssrClass(null,{active:n==t.curIndex})+" data-v-3698bd16></div>"}))+"</div>")],2)}),[],!1,(function(t){var e=n(168);e.__inject__&&e.__inject__(t)}),"3698bd16","4328dae3").exports,o=n(169),l=n(171),v=n(7),f=({component:component,option:option})=>{return()=>({component:component(),delay:400,loading:{mounted(){this.load()},data:()=>({}),render:t=>t("loading",{props:{height:"300px"}}),methods:{load(){}}}})},_={components:{headSwiper:c,company:o.default,bottom:l.default,theme:f({component:()=>n.e(25).then(n.bind(null,203))}),products:f({component:()=>n.e(22).then(n.bind(null,202))}),special:f({component:()=>n.e(23).then(n.bind(null,200))}),column:f({component:()=>n.e(24).then(n.bind(null,201))})},data:()=>({leftBarScale:0,curIndex:0,bannerLen:7,bannerData:[],scondCateData:[]}),created(){this.letBaranimate()},fetch:({store:t})=>t.dispatch("cate/getCategoryCate"),async asyncData({error:t}){let[e]=await Promise.all([v.a.getIndexBanner()]);return e||t({statusCode:404,message:"页面加载失败，请重新加载"}),{bannerData:e}},methods:{backTop(t){this.$refs.swiper.swipeTo(t||0)},letBaranimate(){let t=this.curIndex+1,e=1/this.bannerLen.toFixed(2),n=Math.floor(100*e*t)/100;t==this.bannerLen&&(n=1),this.leftBarScale=n},indexChange(t){this.curIndex=t,this.letBaranimate()}}};var h=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container index-container"},[n("Header",{staticClass:"header-box",attrs:{curNavIndex:0,show:!0}}),t._ssrNode(" "),n("van-swipe",{ref:"swiper",staticClass:"swiper-box",attrs:{"show-indicators":!1,duration:400,loop:!1,vertical:""},on:{change:t.indexChange}},[n("van-swipe-item",[n("headSwiper",{attrs:{swiperData:t.bannerData}})],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("theme")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("products")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("special")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("column")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("company")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("bottom")],1)],1),t._ssrNode(' <div class="line-wrap"><div class="line"'+t._ssrStyle(null,{transform:"translate3d(0px, 0px, 0px) scaleX(1) scaleY("+t.leftBarScale+")"},null)+"></div></div> "),n("cate-list",{attrs:{type:"swiper"},on:{swiper:t.backTop}})],2)}),[],!1,(function(t){var e=n(173);e.__inject__&&e.__inject__(t)}),null,"829660a0");e.default=h.exports}};
//# sourceMappingURL=9e02de06d675fd43a40b.js.map