(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(t,e,o){"use strict";var n=o(2);e.a={getAllNews:function(){return n.a.fetchGet("/news/all")},getNewsDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n.a.fetchGet("/news/".concat(t))},getTopBottomData:function(t){return n.a.fetchGet("news/topBottom/".concat(t))}}},345:function(t,e,o){},377:function(t,e,o){"use strict";var n=o(345);o.n(n).a},404:function(t,e,o){"use strict";o.r(e);o(88),o(128),o(45);var n,r=o(4),c=o(334),l={components:{},data:function(){return{detailData:null,topBottomData:null,curId:0,isShowTab:!0}},asyncData:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){var o,n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.params,n=e.error,r=Number(o.id),t.next=4,c.a.getNewsDetail(r);case 4:return(l=t.sent)||n({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{detailData:l});case 7:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),head:function(){return this.$seo("".concat(this.detailData.name," - 唔该"),"正处于萌芽阶段")},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},created:function(){this.curId=Number(this.$route.params.id),this._loadData()},watch:{$route:function(t,e){this.curId=t.params.id,this._loadData()}},methods:{_loadData:function(){this.getTopBottom(this.curId)},getTopBottom:function(t){var e=this;c.a.getTopBottomData(t).then((function(t){e.topBottomData=t}))},formalDate:function(t){var e=t.indexOf(" ");return t.substring(0,e)}}},d=(o(377),o(6)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("Header",{staticClass:"header-box",staticStyle:{height:"60px"},attrs:{curNavIndex:3,show:t.isShowTab}}),t._v(" "),o("el-breadcrumb",{staticClass:"font12",attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/about"}}},[t._v("新闻")]),t._v(" "),o("el-breadcrumb-item",{staticClass:"crumb-item"},[t._v("新闻详情")])],1),t._v(" "),o("div",{staticClass:"column-box"},[o("div",{staticClass:"head-con"},[o("div",{staticClass:"img-box"},[o("div",{staticClass:"img-bg",style:{backgroundImage:"url("+t.detailData.mobile_imgs_url[0]+")"}}),t._v(" "),o("img",{attrs:{src:t.detailData.mobile_imgs_url[0],alt:""}})]),t._v(" "),o("div",{staticClass:"info-wrap"},[o("div",{staticClass:"title"},[t._v(t._s(t.detailData.name))]),t._v(" "),o("div",{staticClass:"description font12"},[t._v(t._s(t.detailData.introduce))])])]),t._v(" "),o("div",{staticClass:"section-wrap"},[o("div",{staticClass:"detail"},[o("div",{domProps:{innerHTML:t._s(t.detailData.content)}})]),t._v(" "),t.topBottomData?o("div",{staticClass:"page-wrap"},[o("div",{staticClass:"page"},[o("span",[t._v("上一篇：")]),t._v(" "),t.topBottomData.prev_info?o("nuxt-link",{attrs:{to:"/news/"+t.topBottomData.prev_info.id}},[t._v(t._s(t.topBottomData.prev_info.name))]):o("i",[t._v("没有了")])],1),t._v(" "),o("div",{staticClass:"page"},[o("span",[t._v("下一篇：")]),t._v(" "),t.topBottomData.next_info?o("nuxt-link",{attrs:{to:"/news/"+t.topBottomData.next_info.id}},[t._v(t._s(t.topBottomData.next_info.name))]):o("i",[t._v("没有了")])],1)]):t._e()])]),t._v(" "),o("Footer")],1)}),[],!1,null,"5e22f614",null);e.default=component.exports}}]);