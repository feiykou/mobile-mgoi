exports.ids=[26],exports.modules={151:function(t,e){},188:function(t,e,n){"use strict";n.r(e);var r=n(151),c=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=c.a},217:function(t,e,n){"use strict";n.r(e);var r=n(7),c={components:{banner:n(105).a},data:()=>({curIndex:0}),created(){this.$store.dispatch("indexdata/getThemeData")},computed:{...Object(r.mapState)("indexdata",["themeData"])},methods:{onChange(t){this.curIndex=t}}},l=n(2);var component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-swiper"},[e("banner",{attrs:{size:1}},[e("div",{staticClass:"swiper-slide",attrs:{slot:"slide_0"},slot:"slide_0"},[e("ul",{staticClass:"list"},this._l(this.themeData,(function(t,n){return e("li",{key:n},[e("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:t.mobile_imgs_url[0]}})],1)})),0)])])],1)}),[],!1,(function(t){var e=n(188);e.__inject__&&e.__inject__(t)}),null,"ecfa831a");e.default=component.exports}};
//# sourceMappingURL=81fda943c296a5eb38c3.js.map