(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{241:function(t,e,n){},246:function(t,e,n){"use strict";var c=n(20);e.a={getSonCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("columnCate/sonCate?cateId=".concat(t))},getRescColumn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return c.a.fetchGet("column/resc?rescId=".concat(t,"&count=").concat(e,"&id=").concat(n))},getColumns:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return c.a.fetchGet("column/".concat(t,"?page=").concat(e,"&size=").concat(n))},getColumnDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("column/detail/".concat(t))},getTopBottomData:function(t){return c.a.fetchGet("column/topBottom/".concat(t))},search:function(){var q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.a.fetchGet("column/search?q=".concat(q))},getColumnCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.fetchGet("columnCate/cateList?times=".concat(e,"&cate_id=").concat(t))},getColumnList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("column/list/".concat(t))},getColumnCrumb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return c.a.fetchGet("columnCate/crumb?cate_id=".concat(t))}}},260:function(t,e,n){"use strict";var c=n(241);n.n(c).a},273:function(t,e,n){},298:function(t,e,n){"use strict";var c={props:{swiperData:{type:Array}},data:function(){return{curIndex:0}}},r=(n(260),n(3)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-swipe",{staticClass:"head-swiper",attrs:{"show-indicators":!1}},[t._l(t.swiperData,(function(e,c){return n("van-swipe-item",{key:e.id,staticClass:"swipe-item"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"title",class:0==c?"font16":""},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"description",class:0==c?"":"font12"},[t._v(t._s(e.introduce))])])],1)})),t._v(" "),t.swiperData.length>1?n("div",{staticClass:"dot-wrap"},t._l(t.swiperData,(function(e,c){return n("div",{key:c,class:{active:c==t.curIndex}})})),0):t._e()],2)}),[],!1,null,"607e3c5a",null);e.a=component.exports},315:function(t,e,n){"use strict";var c=n(273);n.n(c).a},353:function(t,e,n){"use strict";n.r(e);n(143),n(49);var c,r=n(8),o=(n(105),n(246)),l={layout:"main",watchQuery:["cate_id"],components:{rescColumn:n(298).a},data:function(){return{headRescData:[],cateId:0,crumbData:[],curCateData:null,isShowTab:!0,curColumn:"最新专栏"}},created:function(t){var e=Number(this.$route.query.cate_id||0);this.getCrumb(e)},validate:function(t){var e=t.query;return/^\d+$/.test(e.cate_id)},head:function(){return this.$seo("专栏列表 - 唔该","正处于萌芽阶段")},asyncData:(c=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,c,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,c=e.error,r=0|n.cate_id,t.next=4,o.a.getColumnList(r);case 4:return(l=t.sent)||c({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{columnData:l});case 7:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),methods:{formalDate:function(t){var e=t.indexOf(" ");return t.substring(0,e)},getCrumb:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o.a.getColumnCrumb(e).then((function(e){e.length>0&&(t.curCateData=e[e.length-1]),t.crumbData=e}))},search:function(q){var t=this;o.a.search(q).then((function(e){t.columnData=e.data}))}}},m=(n(315),n(3)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container column-list-container"},[2==t.crumbData.length?n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/column"}},[t._v("专栏")])],1),t._v(" "),n("thumb-item",[t._v(t._s(t.crumbData[t.crumbData.length-1].name))])],1):n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1)],1),t._v(" "),t.curCateData?n("div",{staticClass:"head-img-wrap"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:t.curCateData.img_url[0]}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("div",{staticClass:"tit font16 bold center"},[t._v(t._s(t.curCateData.name))])])],1):t._e(),t._v(" "),n("div",{staticClass:"content-box"},t._l(t.columnData,(function(e,c){return n("div",{key:c,staticClass:"column-list-box"},[n("div",{staticClass:"list-tit font15 bold van-hairline--bottom"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.column,(function(c,r){return n("div",{key:r,staticClass:"item van-hairline--bottom",attrs:{"data-id":e.id}},[n("nuxt-link",{staticClass:"item-wrap",attrs:{to:"/column/"+c.id}},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:c.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("div",{staticClass:"tit"},[t._v(t._s(c.name))]),t._v(" "),n("div",{staticClass:"desc font12"},[t._v(t._s(t.formalDate(c.create_time)))])])],1)],1)}))],2)})),0),t._v(" "),n("cate-list")],1)}),[],!1,null,"e5459f68",null);e.default=component.exports}}]);