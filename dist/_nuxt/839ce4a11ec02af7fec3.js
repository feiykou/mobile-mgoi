(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{233:function(t,e,n){"use strict";var o=n(20);e.a={getAllNews:function(){return o.a.fetchGet("/news/all")},getNewsDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("/news/".concat(t))},getTopBottomData:function(t){return o.a.fetchGet("news/topBottom/".concat(t))}}},251:function(t,e,n){},289:function(t,e,n){"use strict";var o=n(251);n.n(o).a},309:function(t,e,n){"use strict";n.r(e);n(78),n(94),n(39);var o,r=n(8),c=n(233),l={layout:"main",components:{},data:function(){return{detailData:null,topBottomData:null,curId:0,isShowTab:!0}},asyncData:(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,o=e.error,r=Number(n.id),t.next=4,c.a.getNewsDetail(r);case 4:return(l=t.sent)||o({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{detailData:l});case 7:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),head:function(){return this.$seo("".concat(this.detailData.name," - 唔该"),"正处于萌芽阶段")},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},created:function(){this.curId=Number(this.$route.params.id),this._loadData()},watch:{$route:function(t,e){this.curId=t.params.id,this._loadData()}},methods:{_loadData:function(){this.getTopBottom(this.curId)},getTopBottom:function(t){var e=this;c.a.getTopBottomData(t).then((function(t){e.topBottomData=t}))},formalDate:function(t){var e=t.indexOf(" ");return t.substring(0,e)}}},d=(n(289),n(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/about","hover-class":"hover-class"}},[t._v("新闻列表")])],1),t._v(" "),n("thumb-item",[t._v("新闻详情")])],1),t._v(" "),n("div",{staticClass:"column-box"},[n("div",{staticClass:"head-con"},[n("div",{staticClass:"img-box"},[n("div",{staticClass:"img-bg",style:{backgroundImage:"url("+t.detailData.mobile_imgs_url[0]+")"}}),t._v(" "),n("img",{attrs:{src:t.detailData.mobile_imgs_url[0],alt:""}})]),t._v(" "),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"title"},[t._v(t._s(t.detailData.name))]),t._v(" "),n("div",{staticClass:"description font12"},[t._v(t._s(t.detailData.introduce))])])]),t._v(" "),n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"detail"},[n("div",{domProps:{innerHTML:t._s(t.detailData.content)}})]),t._v(" "),t.topBottomData?n("div",{staticClass:"page-wrap"},[n("div",{staticClass:"page"},[n("span",[t._v("上一篇：")]),t._v(" "),t.topBottomData.prev_info?n("nuxt-link",{attrs:{to:"/news/"+t.topBottomData.prev_info.id}},[t._v(t._s(t.topBottomData.prev_info.name))]):n("i",[t._v("没有了")])],1),t._v(" "),n("div",{staticClass:"page"},[n("span",[t._v("下一篇：")]),t._v(" "),t.topBottomData.next_info?n("nuxt-link",{attrs:{to:"/news/"+t.topBottomData.next_info.id}},[t._v(t._s(t.topBottomData.next_info.name))]):n("i",[t._v("没有了")])],1)]):t._e()])]),t._v(" "),n("cate-list")],1)}),[],!1,null,"1b643bef",null);e.default=component.exports}}]);