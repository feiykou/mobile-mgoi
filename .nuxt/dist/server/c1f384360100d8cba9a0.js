exports.ids=[18],exports.modules={116:function(t,e,r){"use strict";var c=r(2);e.a={getAlbumList:(t=0)=>(t<=0&&(t=0),c.a.fetchGet(`album/list/${t}`)),getSpecialDetail:t=>c.a.fetchGet(`album/${t}/detail`)}},129:function(t,e){},166:function(t,e,r){"use strict";r.r(e);var c=r(129),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a},188:function(t,e,r){"use strict";r.r(e);var c=r(116),n={layout:"main",data:()=>({}),components:{productItem:r(83).a},async asyncData({app:t,params:e,store:r,error:n}){const d=Number(e.id);let o=await c.a.getSpecialDetail(d);return console.log(o),o||n({statusCode:404,message:"页面加载失败，请重新加载"}),{specialData:o}},fetch({store:t,query:e}){},head(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},methods:{}},d=r(1);var component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-section product-list-container"},[t._ssrNode('<div class="crumb-head-title van-hairline--bottom">',"</div>",[r("thumb",{staticClass:"font12"},[r("thumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),r("thumb-item",[r("nuxt-link",{attrs:{to:"/special"}},[t._v("每月特辑")])],1),t._v(" "),r("thumb-item",[t._v("圣诞特别篇")])],1)],1),t._ssrNode(" "),t._ssrNode('<div class="special-content">',"</div>",[t._ssrNode('<h1 class="tit">'+t._ssrEscape(t._s(t.specialData.name))+'</h1> <div class="con">'+t._s(t.specialData.content)+"</div> "),t.specialData.product?t._ssrNode('<div class="relative-product">',"</div>",[t._ssrNode('<div class="filter-wrap"><div class="product-num"><span>'+t._ssrEscape(t._s(t.specialData.product.length)+"件商品")+'</span></div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",t._l(t.specialData.product,(function(t,e){return r("productItem",{key:e,attrs:{productData:t,simple:!0}})})),1)],2):t._e()],2),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(166);e.__inject__&&e.__inject__(t)}),null,"12446ff5");e.default=component.exports},81:function(t,e){},83:function(t,e,r){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=r(1);var component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item mgoi-product-item"},[r("nuxt-link",{staticClass:"img-link",attrs:{to:"/product/"+t.productData.id}},[t.productData.main_img_url.length>0?r("van-image",{staticClass:"img img-wrap",attrs:{fit:"cover","hover-class":"hover-class","lazy-load":"",src:t.productData.main_img_url[0]}}):t._e()],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-d45e46e8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-d45e46e8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-d45e46e8>',"</div>",[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var e=r(84);e.__inject__&&e.__inject__(t)}),"d45e46e8","385b9ca6");e.a=component.exports},84:function(t,e,r){"use strict";r.r(e);var c=r(81),n=r.n(c);for(var d in c)"default"!==d&&function(t){r.d(e,t,(function(){return c[t]}))}(d);e.default=n.a}};
//# sourceMappingURL=c1f384360100d8cba9a0.js.map