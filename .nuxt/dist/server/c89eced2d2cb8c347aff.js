exports.ids=[2],exports.modules={117:function(t,e,n){"use strict";n.r(e);var c=n(84),l=n.n(c);for(var r in c)"default"!==r&&function(t){n.d(e,t,(function(){return c[t]}))}(r);e.default=l.a},153:function(t,e,n){"use strict";n.r(e);var c=n(83),l={data:()=>({newsData:[],newsDetail:null}),created(){this.getAllNews()},methods:{getAllNews(){this.newsDetail=null,c.a.getAllNews().then(t=>{console.log(t),this.newsData=t.data})},getNewsDetail(t){c.a.getNewsDetail(t).then(t=>{console.log(t),this.newsDetail=t})},newsClick(t){const e=t.currentTarget.dataset.id;this.getNewsDetail(e)},formalDate(t){const e=t.indexOf(" ");return t.substring(0,e)},backNewsClick(){this.newsDetail=null}}},r=n(1);var component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-box"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:"/images/about/recruit.jpg"}}),t._ssrNode(" "),t._l(t.newsData,(function(e,c){return t._ssrNode("<div"+t._ssrAttr("data-id",e.id)+' class="item" data-v-c62b12c0>',"</div>",[t._ssrNode('<div class="img-wrap" data-v-c62b12c0>',"</div>",[n("nuxt-link",{attrs:{to:"/news/"+e.id}},[n("m-image",{staticClass:"img-item",attrs:{src:e.mobile_imgs_url[0]}})],1)],1),t._ssrNode(" "),t._ssrNode('<div class="info-wrap" data-v-c62b12c0>',"</div>",[n("nuxt-link",{attrs:{to:"/news/"+e.id}},[n("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"date"},[t._v(t._s(e.create_time))])])],1)],2)}))],2)}),[],!1,(function(t){var e=n(117);e.__inject__&&e.__inject__(t)}),"c62b12c0","2cfc8fb9");e.default=component.exports},83:function(t,e,n){"use strict";var c=n(2);e.a={getAllNews:()=>c.a.fetchGet("/news/all"),getNewsDetail:(t=0)=>c.a.fetchGet(`/news/${t}`),getTopBottomData:t=>c.a.fetchGet(`news/topBottom/${t}`)}},84:function(t,e){}};
//# sourceMappingURL=c89eced2d2cb8c347aff.js.map