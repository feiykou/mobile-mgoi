(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{243:function(t,e,n){},244:function(t,e,n){},246:function(t,e,n){},251:function(t,e,n){"use strict";n(105);var r={props:{size:{type:Number,default:1},dotTop:Number},data:function(){var t=this;return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,speed:400,spaceBetween:0,on:{slideChange:function(){t.curIndex=this.activeIndex},tap:function(){}}}}},created:function(){}},c=(n(253),n(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"head-swiper"},[n("div",{staticClass:"swiper-wrapper"},[t._l(t.size,(function(e,n){return t._t("slide_"+n)}))],2),t._v(" "),t.size>1?n("div",{staticClass:"dot-wrap",style:{marginTop:t.dotTop+"px"}},t._l(t.size,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0):t._e()])}),[],!1,null,"2d574813",null);e.a=component.exports},252:function(t,e,n){"use strict";var r=n(3);e.a={getSonCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("columnCate/sonCate?cateId=".concat(t))},getRescColumn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r.a.fetchGet("column/resc?rescId=".concat(t,"&count=").concat(e,"&id=").concat(n))},getColumns:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return r.a.fetchGet("column/".concat(t,"?page=").concat(e,"&size=").concat(n))},getColumnDetail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("column/detail/".concat(t))},getTopBottomData:function(t){return r.a.fetchGet("column/topBottom/".concat(t))},search:function(){var q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.fetchGet("column/search?q=".concat(q))},getColumnCate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.a.fetchGet("columnCate/cateList?times=".concat(e,"&cate_id=").concat(t))},getColumnList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("column/list/".concat(t))},getColumnCrumb:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.fetchGet("columnCate/crumb?cate_id=".concat(t))}}},253:function(t,e,n){"use strict";var r=n(243);n.n(r).a},254:function(t,e,n){"use strict";var r=n(244);n.n(r).a},256:function(t,e,n){"use strict";n(105);var r=n(251),c={props:{swiperData:{type:Array},dotTop:Number},components:{MBanner:r.a},data:function(){var t=this;return{curIndex:0,swiperOption:{slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,on:{slideChange:function(){t.curIndex=this.activeIndex},tap:function(){}}}}},created:function(){}},o=(n(254),n(4)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-banner-wrap"},[n("m-banner",{attrs:{size:t.swiperData.length,dotTop:t.dotTop}},t._l(t.swiperData,(function(e,r){return n("div",{key:e.id,staticClass:"swiper-slide",attrs:{slot:"slide_"+r},slot:"slide_"+r},[e.img_url?n("div",[e.img_url.length>0?n("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:e.img_url[0]}}):t._e()],1):n("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":r>0,src:e}})],1)})),0)],1)}),[],!1,null,"d72c5a74",null);e.a=component.exports},266:function(t,e,n){"use strict";var r=n(246);n.n(r).a},267:function(t,e,n){},308:function(t,e,n){"use strict";var r={props:{swiperData:{type:Array}},data:function(){return{curIndex:0}}},c=(n(266),n(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-swipe",{staticClass:"head-swiper",attrs:{"show-indicators":!1}},[t._l(t.swiperData,(function(e,r){return n("van-swipe-item",{key:e.id,staticClass:"swipe-item"},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"title",class:0==r?"font16":""},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"description",class:0==r?"":"font12"},[t._v(t._s(e.introduce))])])],1)})),t._v(" "),t.swiperData.length>1?n("div",{staticClass:"dot-wrap"},t._l(t.swiperData,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0):t._e()],2)}),[],!1,null,"607e3c5a",null);e.a=component.exports},318:function(t,e,n){"use strict";var r=n(267);n.n(r).a},364:function(t,e,n){"use strict";n.r(e);n(31);var r,c=n(5),o=n(252),l=n(308),d=n(106),v=n(256),m={layout:"main",components:{rescColumn:l.a,Button:d.a,HeadBanner:v.a},data:function(){return{headRescData:[],cateId:0,isShowTab:!0,curColumn:"最新专栏"}},head:function(){return this.$seo("专栏列表 - 唔该","正处于萌芽阶段")},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.query,n=e.error,t.next=3,o.a.getColumnCate();case 3:return(r=t.sent)||n({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{columnData:r});case 6:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),fetch:function(t){t.store}},f=(n(318),n(4)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container box"},[t._m(0),t._v(" "),n("div",{staticClass:"pets-nav-list bold"},[n("div",{staticClass:"btn-wrap"},[n("a",{directives:[{name:"anchor",rawName:"v-anchor",value:"column_0",expression:"'column_0'"}],attrs:{href:"javascript:void(0);"}},[n("Button",{staticClass:"anchor-btn",attrs:{font:"font14",name:"猫专栏",type:"gray"}})],1)]),t._v(" "),n("div",{staticClass:"btn-wrap"},[n("a",{directives:[{name:"anchor",rawName:"v-anchor",value:"column_1",expression:"'column_1'"}],attrs:{href:"javascript:void(0);"}},[n("Button",{staticClass:"anchor-btn",attrs:{font:"font14",name:"狗专栏",type:"gray"}})],1)])]),t._v(" "),n("div",{staticClass:"column-content content-box"},t._l(t.columnData,(function(e,r,c){return n("div",{key:r,staticClass:"column-list-box",attrs:{id:"anchor-column_"+c}},[e.sub?n("div",{staticClass:"column-list"},[n("div",{staticClass:"divider-tit column-tit bold"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.sub,(function(r,c){return n("div",{key:c,staticClass:"item",attrs:{"data-id":e.id}},[n("nuxt-link",{staticClass:"item-wrap",attrs:{to:"/column/list?cate_id="+r.id}},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:r.img_url[0]}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("div",{staticClass:"tit font14 bold"},[t._v(t._s(r.name))]),t._v(" "),n("div",{staticClass:"desc"},[t._v(t._s(r.description))])])],1)],1)}))],2):t._e()])})),0),t._v(" "),n("cate-list")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tit"},[e("span",{staticClass:"font24"},[this._v("专栏")])])}],!1,null,"7fe4da40",null);e.default=component.exports}}]);