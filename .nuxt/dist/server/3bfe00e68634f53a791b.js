exports.ids=[24],exports.modules={149:function(t,e){},182:function(t,e,r){"use strict";r.r(e);var n=r(149),o=r.n(n);for(var d in n)"default"!==d&&function(t){r.d(e,t,(function(){return n[t]}))}(d);e.default=o.a},206:function(t,e,r){"use strict";r.r(e);var n=r(5),o={components:{},props:{},created(){this.$store.dispatch("indexdata/getColumnData")},computed:{...Object(n.mapState)("indexdata",["columnData"])},methods:{columnTap(t){const e=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/column/column?id="+e})},formalDate(t){const e=t.indexOf(" ");return t.substring(0,e)}},data:()=>({})},d=r(1);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-section-wrap index-column-section"},[t._ssrNode('<div class="section-wrap" data-v-569a8e9a>',"</div>",[t._ssrNode('<div class="item-wrap" data-v-569a8e9a>',"</div>",t._l(t.columnData,(function(e,n){return t._ssrNode("<div"+t._ssrAttr("data-id",e.id)+' hover-class="hover-class"'+t._ssrAttr("hover-stay-time",100)+t._ssrClass("item animate-hover-class",0==n?"big-item":"")+" data-v-569a8e9a>","</div>",[e.mobile_imgs_url.length>0?r("m-image",{staticClass:"img img-wrap",attrs:{src:e.mobile_imgs_url[0]}}):t._e(),t._ssrNode(' <div class="info-wrap" data-v-569a8e9a><div'+t._ssrClass("title",0==n?"font16":"font12")+" data-v-569a8e9a>"+t._ssrEscape(t._s(e.name))+"</div> <div"+t._ssrClass("description",0==n?"":"font12")+" data-v-569a8e9a>"+t._ssrEscape(t._s(t.formalDate(e.create_time)))+"</div></div>")],2)})),0),t._ssrNode(" "),t._ssrNode('<div class="more-btn-wrap" data-v-569a8e9a>',"</div>",[r("nuxt-link",{staticClass:"btn font14",attrs:{to:"/column"}},[t._v("查看更多")])],1)],2)])}),[],!1,(function(t){var e=r(182);e.__inject__&&e.__inject__(t)}),"569a8e9a","0b399a9c");e.default=component.exports}};
//# sourceMappingURL=3bfe00e68634f53a791b.js.map