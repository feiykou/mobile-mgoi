(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{268:function(t,e,n){"use strict";var r=n(6);e.a={getThemeDetail:function(t){if(!(t<=0))return r.a.fetchGet("theme/".concat(t,"/detail"))},getThemeList:function(t){return r.a.fetchGet("theme/list/".concat(t))}}},269:function(t,e,n){},313:function(t,e,n){"use strict";var r=n(269);n.n(r).a},347:function(t,e,n){"use strict";n.r(e);n(41);var r,c=n(5),o=n(108),m=n(268),l={layout:"main",watchQuery:["id"],data:function(){return{catData:[],dogData:[],crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",isShowTab:!0}},components:{mButton:o.a},created:function(){},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isDev,e.route,e.store,e.env,e.params,n=e.query,e.req,e.res,e.redirect,r=e.error,c=n.id||0,t.next=4,m.a.getThemeList(c);case 4:return(o=t.sent)||r({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{themeListData:o});case 7:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),methods:{}},v=(n(313),n(3)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-box"},[n("div",{staticClass:"crumb-head-title van-hairline--bottom"},[n("thumb",{staticClass:"font12"},[n("thumb-item",[n("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("thumb-item",[n("nuxt-link",{attrs:{to:"/special"}},[t._v("猫")])],1),t._v(" "),n("thumb-item",[t._v("文创")])],1)],1),t._v(" "),n("div",{staticClass:"theme-wrap"},[n("div",{staticClass:"main-tit font16 bold"},[t._v("文创主题")]),t._v(" "),n("ul",{staticClass:"theme-list"},t._l(t.themeListData,(function(e,r){return n("li",{key:r},[n("nuxt-link",{attrs:{to:"/theme/"+e.id}},[n("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),n("div",{staticClass:"tit-desc"},[n("p",{staticClass:"tit font14 bold"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0)]),t._v(" "),n("cate-list")],1)}),[],!1,null,"1ac7105b",null);e.default=component.exports}}]);