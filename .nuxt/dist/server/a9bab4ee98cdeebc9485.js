exports.ids=[11],exports.modules={141:function(t,e){},142:function(t,e,n){"use strict";var r=n(143),d=n.n(r);e.default=d.a},143:function(t,e){},144:function(t,e){},145:function(t,e){},175:function(t,e,n){"use strict";n.r(e);var r=n(141),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},176:function(t,e,n){"use strict";var r=n(183),d=n(142),c=n(1);var component=Object(c.a)(d.default,r.a,r.b,!1,(function(t){var e=n(177);e.__inject__&&e.__inject__(t)}),"64d3708d","720daea7");e.default=component.exports},177:function(t,e,n){"use strict";n.r(e);var r=n(144),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},178:function(t,e,n){"use strict";n.r(e);var r=n(145),d=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=d.a},183:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"index-section-wrap font12",staticStyle:{"padding-top":"70px"}},[this._ssrNode('<div class="section-wrap" data-v-64d3708d><div class="tit" data-v-64d3708d>唔该</div> <div class="con" data-v-64d3708d><div class="p" data-v-64d3708d>唔，是一种声音，有你、我之意<br data-v-64d3708d>该，是一种约定，有完备之意</div> <div class="p" data-v-64d3708d>在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div> <div class="p" data-v-64d3708d>取名唔该意在表达“唔该”在服务过程中怎么做都无法表达您对宠物热爱的一份感激</div> <div class="p" data-v-64d3708d>唔，是一种声音，有你、我之意<br data-v-64d3708d>该，是一种约定，有完备之意</div> <div class="p" data-v-64d3708d>在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div></div></div>')])},d=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return d}))},184:function(t,e,n){"use strict";n.r(e);var r={props:{swiperData:{type:Array}},data:()=>({curIndex:0}),created(){},methods:{onChange(t){this.curIndex=t}}},d=n(1);var c=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-swiper"},[n("van-swipe",{attrs:{"show-indicators":!1,duration:360},on:{change:t.onChange}},t._l(t.swiperData,(function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{fit:"cover",src:t.img_url[0]||t}})],1)})),1),t._ssrNode(' <div class="dot-wrap" style="padding-top: 65px;" data-v-63a9c75b>'+t._ssrList(t.swiperData,(function(e,n){return"<div"+t._ssrClass(null,{active:n==t.curIndex})+" data-v-63a9c75b></div>"}))+"</div>")],2)}),[],!1,(function(t){var e=n(175);e.__inject__&&e.__inject__(t)}),"63a9c75b","4328dae3").exports,o=n(176),footer=n(35),l=n(6),v=({component:component,option:option})=>{return()=>({component:component(),delay:400,loading:{mounted(){this.load()},data:()=>({}),render:t=>t("loading",{props:{height:"300px"}}),methods:{load(){}}}})},f={components:{headSwiper:c,company:o.default,bottom:footer.a,theme:v({component:()=>n.e(25).then(n.bind(null,204))}),products:v({component:()=>n.e(22).then(n.bind(null,207))}),special:v({component:()=>n.e(23).then(n.bind(null,205))}),column:v({component:()=>n.e(24).then(n.bind(null,206))})},data:()=>({leftBarScale:0,curIndex:0,bannerLen:7,bannerData:[],scondCateData:[]}),created(){this.letBaranimate()},fetch:({store:t})=>t.dispatch("cate/getCategoryCate"),async asyncData({error:t}){let[e]=await Promise.all([l.a.getIndexBanner()]);return e||t({statusCode:404,message:"页面加载失败，请重新加载"}),{bannerData:e}},methods:{backTop(t){this.$refs.swiper.swipeTo(t||0)},letBaranimate(){let t=this.curIndex+1,e=1/this.bannerLen.toFixed(2),n=Math.floor(100*e*t)/100;t==this.bannerLen&&(n=1),this.leftBarScale=n},indexChange(t){this.curIndex=t,this.letBaranimate()}}};var _=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container index-container"},[n("Header",{staticClass:"header-box",attrs:{curNavIndex:0,show:!0}}),t._ssrNode(" "),n("van-swipe",{ref:"swiper",staticClass:"swiper-box",attrs:{"show-indicators":!1,duration:400,loop:!1,vertical:""},on:{change:t.indexChange}},[n("van-swipe-item",[n("headSwiper",{attrs:{swiperData:t.bannerData}})],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("theme")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("products")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("special")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("column")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("company")],1),t._v(" "),n("van-swipe-item",{staticClass:"index-swiper-slide"},[n("bottom")],1)],1),t._ssrNode(' <div class="line-wrap"><div class="line"'+t._ssrStyle(null,{transform:"translate3d(0px, 0px, 0px) scaleX(1) scaleY("+t.leftBarScale+")"},null)+"></div></div> "),n("cate-list",{attrs:{type:"swiper"},on:{swiper:t.backTop}})],2)}),[],!1,(function(t){var e=n(178);e.__inject__&&e.__inject__(t)}),null,"829660a0");e.default=_.exports}};
//# sourceMappingURL=a9bab4ee98cdeebc9485.js.map