exports.ids=[23],exports.modules={109:function(t,e,r){"use strict";var c=r(1);e.a={getThemeDetail(t){if(!(t<=0))return c.a.fetchGet(`theme/${t}/detail`)},getThemeList:t=>c.a.fetchGet(`theme/list/${t}`),getThemeCate:t=>c.a.fetchGet(`themeCate/sonCate/${t}`),getCateThumb:(t=0)=>c.a.fetchGet(`themeCate/crumb?id=${t}`)}},132:function(t,e){},133:function(t,e){},134:function(t,e){},174:function(t,e,r){"use strict";r.r(e);var c=r(132),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},175:function(t,e,r){"use strict";r.r(e);var c=r(133),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},176:function(t,e,r){"use strict";r.r(e);var c=r(134),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},193:function(t,e,r){"use strict";r.r(e);var c=r(30),o={props:{options:Object,to:String},data:()=>({})},n=r(2);var d=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.options?r("div",{staticClass:"lr-component"},[r("nuxt-link",{staticClass:"wrap",attrs:{to:t.to}},[r("van-image",{staticClass:"img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.options.main_img_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("div",{staticClass:"tit font15 bold"},[t._v(t._s(t.options.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(t.options.introduce))])])],1)],1):t._e()}),[],!1,(function(t){var e=r(174);e.__inject__&&e.__inject__(t)}),"5cf5fbee","0e25624a").exports,l={props:{options:Object},data:()=>({}),components:{LrItem:d}};var _=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.options?r("div",{staticClass:"theme-list-component van-hairline--top"},[t._ssrNode('<div class="tit font22 center bold" data-v-32ed6cc4>'+t._ssrEscape(t._s(t.options.name))+'</div> <p class="desc-txt" data-v-32ed6cc4>'+t._ssrEscape(t._s(t.options.description))+"</p> "),r("van-image",{staticClass:"main-img",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.options.mobile_imgs_url[0]}}),t._ssrNode(" "),t._ssrNode('<div class="product-list-wrap" data-v-32ed6cc4>',"</div>",t._l(t.options.product,(function(t,e){return r("lr-item",{key:e,staticClass:"list-item",attrs:{options:t,to:"/product/"+t.id}})})),1)],2):t._e()}),[],!1,(function(t){var e=r(175);e.__inject__&&e.__inject__(t)}),"32ed6cc4","730b0f3d").exports,v=r(96),f=r(109),m={layout:"main",watchQuery:["cate_id"],data:()=>({cateData:null,productData:[],themeData:[],pLoading:!0,allData:null,thumbData:[]}),components:{mButton:c.a,TCateList:_,PageProductList:v.a},created(){const t=this.$route.query.cate_id;this.solveProduct(),this.getCateThumb(t)},validate:({query:t})=>(console.log(t),/^\d+$/.test(t.cate_id)),watch:{$route:function(){console.log(1111),this.getCateThumb(cate_id)}},async asyncData({isDev:t,route:e,store:r,env:c,params:o,query:n,req:d,res:l,redirect:_,error:v}){const m=n.cate_id;let h=await f.a.getThemeList(m);console.log(h),(!h||h.length<=0)&&v({statusCode:404,message:"页面加载失败，请重新加载"});let D={name:h.name,mobile_imgs_url:h.mobile_imgs_url,introduce:h.introduce};return{themeData:h.theme,cateData:D,allData:h}},methods:{solveProduct(){let t=this.allData,e=[];if(t&&t.theme.length>0&&(t.theme.forEach(data=>{e=e.concat(data.product)}),e.length>0)){let t=[],r=-1,c=[];e.forEach((e,o)=>{-1==(r=t.indexOf(e.id))&&(t.push(e.id),c.push(e))}),e=c}this.productData=e,this.pLoading=!1},async getCateThumb(t){this.thumbData=await f.a.getCateThumb(t),console.log(this.thumbData)}}};var h=Object(n.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-box theme-list-container"},[t._ssrNode('<div class="head-tit font16 bold" data-v-e04be844>'+t._ssrEscape("唔该文创创意之"+t._s(t.cateData.name))+"</div> "),t._ssrNode('<div class="crumb-head-title" data-v-e04be844>',"</div>",[r("thumb",{staticClass:"font14"},[r("thumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),t._l(t.thumbData,(function(e,c){return r("thumb-item",{key:c},[t.thumbData.length-1>c?r("nuxt-link",{attrs:{to:"/theme?id="+e.id}},[t._v(t._s(e.name))]):r("span",[t._v(t._s(e.name))])],1)}))],2)],1),t._ssrNode(" "),t._ssrNode('<div class="theme-list-wrap" data-v-e04be844>',"</div>",[t._ssrNode('<div class="section van-hairline--bottom" data-v-e04be844>',"</div>",[t._ssrNode('<div class="head-img" data-v-e04be844>',"</div>",[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:t.cateData.mobile_imgs_url[0]}})],1),t._ssrNode(' <p class="desc-txt" data-v-e04be844>'+t._ssrEscape("\n        "+t._s(t.cateData.introduce)+"\n      ")+"</p>")],2),t._ssrNode(" "),t._l(t.themeData,(function(e,c){return t._ssrNode("<div data-v-e04be844>","</div>",[r("TCateList",{attrs:{options:e}})],1)})),t._ssrNode(" "),r("PageProductList",{staticClass:"product-list-wrap",attrs:{productsData:t.productData,loading:t.pLoading}})],2),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(176);e.__inject__&&e.__inject__(t)}),"e04be844","c595193a");e.default=h.exports},84:function(t,e){},85:function(t,e){},86:function(t,e,r){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},o=r(2);var component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-d45e46e8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-d45e46e8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-d45e46e8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(87);e.__inject__&&e.__inject__(t)}),"d45e46e8","385b9ca6");e.a=component.exports},87:function(t,e,r){"use strict";r.r(e);var c=r(84),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},88:function(t,e){},91:function(t,e,r){"use strict";r.r(e);var c=r(85),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},92:function(t,e,r){"use strict";var c=r(83),o={props:{counts:{type:Number,default:8}},components:{ContentLoader:c.ContentLoader}},n=r(2);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,c){return t._ssrNode("<li data-v-f8c7220a>","</li>",[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var e=r(91);e.__inject__&&e.__inject__(t)}),"f8c7220a","774f870e");e.a=component.exports},95:function(t,e,r){"use strict";r.r(e);var c=r(88),o=r.n(c);for(var n in c)"default"!==n&&function(t){r.d(e,t,(function(){return c[t]}))}(n);e.default=o.a},96:function(t,e,r){"use strict";var c=r(92),o=r(86),n={props:{productsData:Array,loading:{type:Boolean,default:!0}},data:()=>({}),components:{ProductListLoading:c.a,ProductItem:o.a}},d=r(2);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap page-product-list"},[t._ssrNode('<div class="filter-wrap"><div class="product-num font12">'+(t.productsData?'<span><i class="font18">'+t._ssrEscape(t._s(t.productsData.length))+"</i> 件商品</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.loading?r("ProductListLoading"):t._ssrNode("<div>","</div>",[t.productsData&&t.productsData.length>0?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):t._ssrNode("<div>暂无数据</div>")])],1)],2)}),[],!1,(function(t){var e=r(95);e.__inject__&&e.__inject__(t)}),null,"ccde5224");e.a=component.exports}};
//# sourceMappingURL=635da2e48843c37ad4b3.js.map