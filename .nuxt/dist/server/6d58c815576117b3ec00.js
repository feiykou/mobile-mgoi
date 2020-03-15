exports.ids=[24],exports.modules={105:function(t,e,r){"use strict";var n=r(1);e.a={getThemeDetail(t){if(!(t<=0))return n.a.fetchGet(`theme/${t}/detail`)},getThemeList:t=>n.a.fetchGet(`theme/list?cate_id=${t}`),getThemeCate:(t=0,e=1)=>n.a.fetchGet(`themeCate/${t}?times=${e}`),getCateThumb:(t=0)=>n.a.fetchGet(`themeCate/crumb?id=${t}`),getCurCate:(t=0)=>n.a.fetchGet(`themeCate?id=${t}`)}},130:function(t,e){},131:function(t,e){},132:function(t,e){},177:function(t,e,r){"use strict";r.r(e);var n=r(130),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},178:function(t,e,r){"use strict";r.r(e);var n=r(131),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},179:function(t,e,r){"use strict";r.r(e);var n=r(132),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},198:function(t,e,r){"use strict";r.r(e);var n=r(7),c={props:{options:Object,to:String,img:String},data:()=>({})},o=r(2);var d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.options?r("div",{staticClass:"lr-component"},[r("nuxt-link",{staticClass:"wrap",attrs:{to:t.to}},[r("van-image",{staticClass:"img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.img}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit font15 bold"},[t._v(t._s(t.options.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(t.options.introduce))])])],1)],1):t._e()}),[],!1,(function(t){var e=r(177);e.__inject__&&e.__inject__(t)}),"2e80d8c0","0e25624a").exports,l={props:{options:Object},data:()=>({}),components:{LrItem:d}};var _=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.options?r("div",{staticClass:"theme-list-component van-hairline--top"},[t._ssrNode('<div class="tit font22 center bold" data-v-368b9846>'+t._ssrEscape(t._s(t.options.name))+'</div> <p class="desc-txt" data-v-368b9846>'+t._ssrEscape(t._s(t.options.description))+"</p> "),r("van-image",{staticClass:"main-img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.options.mobile_imgs_url[0]}}),t._ssrNode(" "),t._ssrNode('<div class="product-list-wrap" data-v-368b9846>',"</div>",t._l(t.options.product,(function(t,e){return r("lr-item",{key:e,staticClass:"list-item",attrs:{options:t,img:t.main_img_url[0],to:"/product/"+t.id}})})),1),t._ssrNode(" "),r("Button",{staticClass:"entry-detail-btn",attrs:{to:"/theme/"+t.options.id,name:"进入"+t.options.name+"详情",type:"black"}})],2):t._e()}),[],!1,(function(t){var e=r(178);e.__inject__&&e.__inject__(t)}),"368b9846","730b0f3d").exports,v=r(91),m=r(105),f={layout:"main",watchQuery:["cate_id"],data:()=>({cateData:null,productData:[],themeData:[],pLoading:!0,allData:null,thumbData:[],rescCateData:null}),components:{mButton:n.a,TCateList:_,PageProductList:v.a,LrItem:d},created(){const t=this.$route.query.cate_id;this.getThemeAndProduct(t),this.getCateThumb(t)},validate:({query:t})=>/^\d+$/.test(t.cate_id),async asyncData({isDev:t,route:e,store:r,env:n,params:c,query:o,req:d,res:l,redirect:_,error:v}){const f=o.cate_id;let h=await m.a.getCurCate(f);return h||v({statusCode:404,message:"页面加载失败，请重新加载"}),{cateData:h}},watch:{$route:function(t){let e=t.query.cate_id;this.getCateThumb(e),this.getThemeAndProduct(e)}},methods:{async getThemeAndProduct(t){let e=await m.a.getThemeList(t);this.productData=e.product,this.themeData=e.theme,this.pLoading=!1},getCateThumb(t){m.a.getCateThumb(t).then(t=>{t&&t.length>0&&this.getRescCate(t[0].id),this.thumbData=t})},getRescCate(t){m.a.getThemeCate(t,0).then(t=>{this.rescCateData=t})}}};var h=Object(o.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-box theme-list-container"},[r("thumb",[r("thumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),t._l(t.thumbData,(function(e,n){return r("thumb-item",{key:n},[t.thumbData.length-1>n?r("nuxt-link",{attrs:{to:"/theme?id="+e.id}},[t._v(t._s(e.name))]):r("span",[t._v(t._s(e.name))])],1)}))],2),t._ssrNode(' <div class="head-tit font24 bold">'+t._ssrEscape("唔该文创创意之"+t._s(t.cateData.name))+"</div> "),t._ssrNode('<div class="theme-list-wrap">',"</div>",[t._ssrNode('<div class="section van-hairline--bottom">',"</div>",[t._ssrNode('<div class="head-img">',"</div>",[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:t.cateData.mobile_imgs_url[0]}})],1),t._ssrNode(' <p class="desc-txt">'+t._ssrEscape("\n        "+t._s(t.cateData.introduce)+"\n      ")+"</p>")],2),t._ssrNode(" "),t._l(t.themeData,(function(e,n){return t._ssrNode("<div>","</div>",[r("TCateList",{attrs:{options:e}})],1)})),t._ssrNode(t._ssrEscape(t._s(t.pLoading)+"\n    ")+" "),r("PageProductList",{staticClass:"product-list-wrap",attrs:{productsData:t.productData,loading:t.pLoading}}),t._ssrNode(" "),t._ssrNode('<div class="resc-cate">',"</div>",[t._ssrNode('<div class="resc-tit font22 center bold">推荐文创分类</div> '),t._ssrNode('<div class="list-wrap">',"</div>",t._l(t.rescCateData,(function(t,e){return r("lr-item",{key:e,staticClass:"list-item",attrs:{options:t,img:t.mobile_imgs_url[0],to:"/theme/list?cate_id="+t.id}})})),1)],2)],2),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(179);e.__inject__&&e.__inject__(t)}),null,"c595193a");e.default=h.exports},83:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=r(2);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-2774cf50>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-2774cf50>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-2774cf50>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"2774cf50","385b9ca6");e.a=component.exports},87:function(t,e,r){"use strict";r.r(e);var n=r(83),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},88:function(t,e,r){"use strict";r.r(e);var n=r(84),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},89:function(t,e,r){"use strict";var n=r(82),c={props:{counts:{type:Number,default:8}},components:{ContentLoader:n.ContentLoader}},o=r(2);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return t._ssrNode("<li data-v-f8c7220a>","</li>",[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var e=r(88);e.__inject__&&e.__inject__(t)}),"f8c7220a","774f870e");e.a=component.exports},90:function(t,e,r){"use strict";r.r(e);var n=r(85),c=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e.default=c.a},91:function(t,e,r){"use strict";var n=r(89),c=r(86),o={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:()=>({}),components:{ProductListLoading:n.a,ProductItem:c.a}},d=r(2);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[t._ssrNode('<div class="filter-wrap"><div class="product-num font12">'+(t.productsData?'<span><i class="font18">'+t._ssrEscape(t._s(t.productsData.length))+"</i> 件商品</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.loading?r("ProductListLoading"):t._ssrNode("<div>","</div>",[t.productsData&&t.productsData.length>0?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):t._ssrNode("<div>暂无数据</div>")])],1)],2)}),[],!1,(function(t){var e=r(90);e.__inject__&&e.__inject__(t)}),null,"ccde5224");e.a=component.exports}};
//# sourceMappingURL=6d58c815576117b3ec00.js.map