exports.ids=[10],exports.modules={107:function(t,e,r){"use strict";r.r(e);var c=r(88),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},108:function(t,e,r){"use strict";var c=r(3);e.a={getGiftCate:(t=0,e=1)=>c.a.fetchGet(`gift/cate?times=${e}&cate_id=${t}`),getSeasonResc:(t=0)=>c.a.fetchGet(`gift/season?cate_id=${t}`),getBanner:(t=0)=>c.a.fetchGet(`gift/banner?cate_id=${t}`),getProductByCate:(t=0)=>c.a.fetchGet(`gift/list?cate_id=${t}`),getProductByPrice:(t=0,e=0,r=1,n=10)=>c.a.fetchGet(`gift/filter?from=${t}&to=${e}&page=${r}&size=${n}`)}},118:function(t,e){},142:function(t,e,r){"use strict";var c=r(84),n={props:{giftCate:Object,topid:Number},data:()=>({}),methods:{priceClick(t){t.currentTarget.dataset.price.split("-")}},components:{Button:c.a}},d=r(1);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.giftCate,(function(e,c){return t._ssrNode('<div id="anchor-2" class="section cate-section van-hairline--top" data-v-89715e18>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-89715e18>'+t._ssrEscape(t._s(e.name))+"</div> "),e.sub?t._ssrNode('<ul class="scene-list" data-v-89715e18>',"</ul>",t._l(e.sub,(function(e,c){return t._ssrNode("<li data-v-89715e18>","</li>",[r("nuxt-link",{attrs:{to:"/gift/list?cate_id="+e.id+"&pid="+t.topid+"&type=product"}},[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit bold"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))])])],1)],1)})),0):t._e()],2)})),t._ssrNode(" "),t._ssrNode('<div id="anchor-3" class="section cate-section van-hairline--top" data-v-89715e18>',"</div>",[t._ssrNode('<div class="title font18 center bold" data-v-89715e18>按价格选择</div> '),t._ssrNode('<ul class="btn-wrap-list" data-v-89715e18>',"</ul>",[t._ssrNode('<li data-price="0-100" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=0-100&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"~100 元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="100-200" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=100-200&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"100~200元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="200-300" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=200-300&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"200~300元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="300-400" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=300-400&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"300~400元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="400-500" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=400-500&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"400~500元"}})],1)],1),t._ssrNode(" "),t._ssrNode('<li data-price="500-600" data-v-89715e18>',"</li>",[r("nuxt-link",{attrs:{to:"/gift/list?name=500-600&type=price&pid="+t.topid}},[r("Button",{attrs:{name:"500~600元"}})],1)],1)],2)],2)],2)}),[],!1,(function(t){var e=r(107);e.__inject__&&e.__inject__(t)}),"89715e18","526db354");e.a=component.exports},158:function(t,e,r){"use strict";r.r(e);var c=r(118),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},197:function(t,e,r){"use strict";r.r(e);var c=r(97),n=r(108),d=r(142),o={watchQuery:["cate_id","name"],layout:"main",components:{pageProductList:c.a,Cate:d.a},data:()=>({curName:"季节推荐",pid:0,productsData:[{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"}]}),async asyncData({app:t,query:e,store:r,error:c}){let{cate_id:d,pid:o,name:l,type:_}=e;d=d||0,o=Number(o||0);let f=null;if("product"===_)f=await n.a.getProductByCate(d),l=l||f.name;else if("price"===_){const t=(l=l||"0-100").split("-");f=await n.a.getProductByPrice(t[0],t[1]),console.log(f)}return{productListData:f,giftListData:await n.a.getGiftCate(o),curName:l,pid:o,loading:!1}}},l=r(1);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gift-list-container"},[t._ssrNode('<div class="cur-name font16 bold" data-v-2a79ba1c>'+t._ssrEscape(t._s(t.curName))+"</div> "),t.productListData?r("pageProductList",{staticClass:"gift-product-list-wrap",attrs:{loading:t.loading,productsData:t.productListData.product||t.productListData.data}}):t._e(),t._ssrNode(" "),r("Cate",{attrs:{giftCate:t.giftListData,topid:t.pid}})],2)}),[],!1,(function(t){var e=r(158);e.__inject__&&e.__inject__(t)}),"2a79ba1c","565eb0e3");e.default=component.exports},76:function(t,e){},77:function(t,e){},78:function(t,e,r){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=r(1);var component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[t._ssrNode('<div hover-class="hover-class" class="img" data-v-010df862>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-010df862>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-010df862>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-010df862>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(79);e.__inject__&&e.__inject__(t)}),"010df862","272b27e8");e.a=component.exports},79:function(t,e,r){"use strict";r.r(e);var c=r(76),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},80:function(t,e){},81:function(t,e){},84:function(t,e,r){"use strict";var c={props:{to:String,type:{type:String,default:"black"},name:{type:String,default:"查看更多"}},data:()=>({})},n=r(1);var component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"btn-hover-class",expression:"'btn-hover-class'"}],staticClass:"mgoi-button-wrap van-hairline--surround",class:[t.type]},[t._ssrNode('<div class="icon" data-v-5cc0ccb0>',"</div>",[t._t("icon")],2),t._ssrNode(" "),t.to?r("nuxt-link",{attrs:{to:t.to}},[t._v(t._s(t.name))]):r("span",{staticClass:"font16"},[t._v(t._s(t.name))])],2)}),[],!1,(function(t){var e=r(85);e.__inject__&&e.__inject__(t)}),"5cc0ccb0","b3cb3278");e.a=component.exports},85:function(t,e,r){"use strict";r.r(e);var c=r(77),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},87:function(t,e,r){"use strict";r.r(e);var c=r(80),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},88:function(t,e){},90:function(t,e,r){"use strict";var c=r(75),n={props:{counts:{type:Number,default:8}},components:{ContentLoader:c.ContentLoader}},d=r(1);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,c){return t._ssrNode("<li data-v-f8c7220a>","</li>",[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"f8c7220a","683f239a");e.a=component.exports},93:function(t,e,r){"use strict";r.r(e);var c=r(81),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},97:function(t,e,r){"use strict";var c=r(90),n=r(78),d={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:()=>({}),components:{ProductListLoading:c.a,ProductItem:n.a},watch:{productsData:function(){console.log(1111)}},data:()=>({})},o=r(1);var component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[t._ssrNode('<div class="filter-wrap"><div class="product-num font12">'+(t.productsData?'<span><i class="font18">'+t._ssrEscape(t._s(t.productsData.length))+"</i> 件商品</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.loading?r("ProductListLoading"):t._ssrNode("<div>","</div>",[t.productsData&&t.productsData.length>0?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):t._ssrNode("<div>暂无数据</div>")])],1)],2)}),[],!1,(function(t){var e=r(93);e.__inject__&&e.__inject__(t)}),null,"4be0e4da");e.a=component.exports}};
//# sourceMappingURL=9c32c861c298e28d134b.js.map