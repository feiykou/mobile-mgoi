exports.ids=[25],exports.modules={163:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(5).default;t.exports.__inject__=function(t){r("55d4ec9e",content,!0,t)}},221:function(t,e,n){"use strict";n.r(e);var r=n(163),l=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,(function(){return r[t]}))}(d);e.default=l.a},222:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".head-swiper{position:relative;height:100%}.head-swiper .img,.head-swiper .swiper-item,.head-swiper .van-swipe{width:100%;height:100%}.list{display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-between;height:100%}.list>li{box-sizing:border-box;height:50%;width:49.733vw}.list>li .img{width:100%;height:100%}.list>li:first-child,.list>li:nth-child(2){padding-bottom:.267vw}.list>li:nth-child(3),.list>li:nth-child(4){padding-top:.267vw}",""])},252:function(t,e,n){"use strict";n.r(e);var r=n(8),l={data:()=>({curIndex:0}),created(){this.$store.dispatch("indexdata/getThemeData")},computed:{...Object(r.mapState)("indexdata",["themeData"])},methods:{onChange(t){this.curIndex=t}}},d=n(1);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-swiper"},[n("van-swipe",{attrs:{"show-indicators":!1},on:{change:t.onChange}},[n("van-swipe-item",{staticClass:"swiper-item"},[n("ul",{staticClass:"list"},t._l(t.themeData,(function(t,e){return n("li",{key:e},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:t.mobile_imgs_url[0]}})],1)})),0)])],1),t._ssrNode(' <div class="dot-wrap">'+t._ssrList(t.themeData,(function(e,n){return"<div"+t._ssrClass(null,{active:n==t.curIndex})+"></div>"}))+"</div>")],2)}),[],!1,(function(t){var e=n(221);e.__inject__&&e.__inject__(t)}),null,"ecfa831a");e.default=component.exports}};
//# sourceMappingURL=1ef833f12657a33561b8.js.map