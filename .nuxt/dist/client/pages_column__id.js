(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(t,e,n){"use strict";var o=n(20);e.a={getSonCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("columnCate/sonCate?cateId=".concat(t))},getRescColumn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return o.a.fetchGet("column/resc?rescId=".concat(t,"&count=").concat(e,"&id=").concat(n))},getColumns:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return o.a.fetchGet("column/".concat(t,"?page=").concat(e,"&size=").concat(n))},getColumnDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("column/detail/".concat(t))},getTopBottomData:function(t){return o.a.fetchGet("column/topBottom/".concat(t))},search:function(){var q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.a.fetchGet("column/search?q=".concat(q))},getColumnCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.a.fetchGet("columnCate/cateList?times=".concat(e,"&cate_id=").concat(t))},getColumnList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("column/list/".concat(t))},getColumnCrumb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return o.a.fetchGet("columnCate/crumb?cate_id=".concat(t))}}},277:function(t,e,n){},320:function(t,e,n){"use strict";var o=n(277);n.n(o).a},345:function(t,e,n){"use strict";n.r(e);n(89),n(90),n(105),n(49);var o,c=n(8),r=n(250),l={layout:"main",data:function(){return{detailData:null,topBottomData:null,rescData:[],curId:0,isShowTab:!0}},asyncData:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,o=e.error,c=Number(n.id),t.next=4,r.a.getColumnDetail(c);case 4:return(l=t.sent)||o({statusCode:404,message:"页面加载失败，请重新加载"}),l.content=l.content.replace(/<img/g,"<img style='width:100%;'"),l.content=l.content.replace(/<p/g,"<p style='line-height:1.6;padding-bottom:10px;'"),t.abrupt("return",{detailData:l});case 9:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),fetch:function(t){return t.store.dispatch("cate/getColumnCate")},head:function(){return this.$seo("".concat(this.detailData.name," - 唔该"),"正处于萌芽阶段")},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},created:function(){this.curId=Number(this.$route.params.id),this._loadData()},watch:{$route:function(t,e){this.curId=t.params.id,this._loadData()}},methods:{_loadData:function(){this.getTopBottom(this.curId),this.getRescData()},getTopBottom:function(t){var e=this;r.a.getTopBottomData(t).then((function(t){e.topBottomData=t}))},getRescData:function(){var t=this;r.a.getRescColumn(3,3,this.curId).then((function(e){t.rescData=e}))},formalDate:function(t){var e=t.indexOf(" ");return t.substring(0,e)}}},v=(n(320),n(3)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/column","hover-class":"hover-class"}},[t._v("专栏列表")])],1),t._v(" "),n("thumb-item",[t._v("专栏详情")])],1),t._v(" "),n("div",{staticClass:"column-box"},[n("div",{staticClass:"head-con"},[n("div",{staticClass:"img-box"},[n("div",{staticClass:"img-bg",style:{backgroundImage:"url("+t.detailData.mobile_imgs_url[0]+")"}}),t._v(" "),n("img",{attrs:{src:t.detailData.mobile_imgs_url[0],alt:""}})]),t._v(" "),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"title"},[t._v(t._s(t.detailData.name))]),t._v(" "),n("div",{staticClass:"description font12"},[t._v(t._s(t.detailData.introduce))])])]),t._v(" "),n("div",{staticClass:"section-wrap"},[n("div",{staticClass:"detail"},[n("div",{domProps:{innerHTML:t._s(t.detailData.content)}})]),t._v(" "),t.topBottomData?n("div",{staticClass:"page-wrap"},[n("div",{staticClass:"page"},[n("span",[t._v("上一篇：")]),t._v(" "),t.topBottomData.prev_info?n("nuxt-link",{attrs:{to:"/column/"+t.topBottomData.prev_info.id}},[t._v(t._s(t.topBottomData.prev_info.name))]):n("i",[t._v("没有了")])],1),t._v(" "),n("div",{staticClass:"page"},[n("span",[t._v("下一篇：")]),t._v(" "),t.topBottomData.next_info?n("nuxt-link",{attrs:{to:"/column/"+t.topBottomData.next_info.id}},[t._v(t._s(t.topBottomData.next_info.name))]):n("i",[t._v("没有了")])],1)]):t._e(),t._v(" "),n("div",{staticClass:"relative-wrap"},[n("div",{staticClass:"title"},[t._v("相关推荐")]),t._v(" "),n("div",{staticClass:"con"},[n("div",{staticClass:"list"},t._l(t.rescData,(function(e,o){return n("div",{key:o,staticClass:"list-item"},[n("nuxt-link",{attrs:{to:"`/column/${item.id}`"}},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"tit font12"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1)],1)})),0)])])])]),t._v(" "),n("cate-list")],1)}),[],!1,null,"0e315b7f",null);e.default=component.exports}}]);