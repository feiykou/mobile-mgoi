(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(t,e,n){"use strict";var c=n(3);e.a={getAllNews:function(){return c.a.fetchGet("/news/all")},getNewsDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("/news/".concat(t))},getTopBottomData:function(t){return c.a.fetchGet("news/topBottom/".concat(t))}}},213:function(t,e,n){},246:function(t,e,n){"use strict";var c=n(213);n.n(c).a},279:function(t,e,n){"use strict";n.r(e);var c=n(212),l={data:function(){return{newsData:[],newsDetail:null}},created:function(){this.getAllNews()},methods:{getAllNews:function(){var t=this;this.newsDetail=null,c.a.getAllNews().then((function(e){console.log(e),t.newsData=e.data}))},getNewsDetail:function(t){var e=this;c.a.getNewsDetail(t).then((function(t){console.log(t),e.newsDetail=t}))},newsClick:function(t){var e=t.currentTarget.dataset.id;this.getNewsDetail(e)},formalDate:function(t){var e=t.indexOf(" ");return t.substring(0,e)},backNewsClick:function(){this.newsDetail=null}}},r=(n(246),n(2)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-box"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/about/recruit.jpg"}}),t._v(" "),t._l(t.newsData,(function(e,c){return n("div",{key:c,staticClass:"item",attrs:{"data-id":e.id}},[n("div",{staticClass:"img-wrap"},[n("nuxt-link",{attrs:{to:"/news/"+e.id}},[n("m-image",{staticClass:"img-item",attrs:{src:e.mobile_imgs_url[0]}})],1)],1),t._v(" "),n("div",{staticClass:"info-wrap"},[n("nuxt-link",{attrs:{to:"/news/"+e.id}},[n("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(e.create_time))])])],1)])}))],2)}),[],!1,null,"c62b12c0",null);e.default=component.exports}}]);