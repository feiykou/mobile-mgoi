exports.ids=[11],exports.modules={121:function(t,r){},123:function(t,r,e){"use strict";e.r(r);var c=e(121),n=e.n(c);for(var d in c)"default"!==d&&function(t){e.d(r,t,(function(){return c[t]}))}(d);r.default=n.a},125:function(t,r,e){"use strict";var c={props:{productData:Object,simple:{type:Boolean,default:!1}}},n=e(2);var component=Object(n.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-item"},[t._ssrNode('<div hover-class="hover-class" class="img" data-v-0d7bc0d8>',"</div>",[e("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[e("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._ssrNode(' <p hover-class="hover-class" class="tit font12" data-v-0d7bc0d8>'+t._ssrEscape(t._s(t.productData.name))+'</p> <p class="price font12" data-v-0d7bc0d8>'+t._ssrEscape("￥"+t._s(t.productData.price)+" 蚊")+"</p> "),t.simple?t._ssrNode('<div class="btn btn-animate btn-wrap font12" data-v-0d7bc0d8>',"</div>",[e("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()],2)}),[],!1,(function(t){var r=e(123);r.__inject__&&r.__inject__(t)}),"0d7bc0d8","272b27e8");r.a=component.exports},136:function(t,r){},137:function(t,r){},138:function(t,r){},168:function(t,r,e){"use strict";e.r(r);var c=e(136),n=e.n(c);for(var d in c)"default"!==d&&function(t){e.d(r,t,(function(){return c[t]}))}(d);r.default=n.a},169:function(t,r,e){"use strict";e.r(r);var c=e(137),n=e.n(c);for(var d in c)"default"!==d&&function(t){e.d(r,t,(function(){return c[t]}))}(d);r.default=n.a},170:function(t,r){let e=0;t.exports={tabBarAnimate:function(t){let mark=!0;const r=e-t.scrollTop;if(t.scrollTop<60){if(mark==this.isShowTab)return;this.isShowTab=!0}else if(Math.abs(r)>50){if(mark=r>0,e=t.scrollTop,mark==this.isShowTab)return;this.isShowTab=mark}}}},171:function(t,r,e){"use strict";e.r(r);var c=e(138),n=e.n(c);for(var d in c)"default"!==d&&function(t){e.d(r,t,(function(){return c[t]}))}(d);r.default=n.a},190:function(t,r,e){"use strict";e.r(r);var c=e(120),n={name:"cate-loading",props:{counts:{type:Number,default:3}},components:{ContentLoader:c.ContentLoader}},d=e(2);var o=Object(d.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"cate-box"},t._l(t.counts,(function(r,c){return t._ssrNode('<div class="cate-loader">',"</div>",[e("content-loader",{attrs:{height:134,width:125,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[e("rect",{attrs:{x:"47",y:"17",rx:"0",ry:"0",width:"28",height:"14"}}),t._v(" "),e("rect",{attrs:{x:"38.5",y:"46",rx:"0",ry:"0",width:"46",height:"46"}}),t._v(" "),e("rect",{attrs:{x:"0",y:"128.27",rx:"0",ry:"0",width:"125",height:"1"}})])],1)})),0)}),[],!1,(function(t){var r=e(168);r.__inject__&&r.__inject__(t)}),null,"11d69138").exports,l={props:{counts:{type:Number,default:8}},components:{ContentLoader:c.ContentLoader}};var _=Object(d.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ul",{staticClass:"product-list"},[t._l(t.counts,(function(r,c){return t._ssrNode("<li data-v-f8c7220a>","</li>",[e("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[e("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),e("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),e("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),e("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),e("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._ssrNode(" <li data-v-f8c7220a></li> <li data-v-f8c7220a></li> <li data-v-f8c7220a></li>")],2)}),[],!1,(function(t){var r=e(169);r.__inject__&&r.__inject__(t)}),"f8c7220a","683f239a").exports,h=e(39),v=(e(170),e(26),{watchQuery:["id"],layout:"main",data:()=>({cateData:null,productsData:null,crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",curCateId:0,curPriceIndex:0,isShowTab:!0}),components:{productItem:e(125).a,CateLoading:o,ProductListLoading:_},async asyncData({app:t,query:r,store:e,error:c}){const{id:n,name:d}=r;let o=null,l=null;o=await h.a.getProductsByCate(n),l=await h.a.getSonCate(n);let _=[],v={};return[].forEach((t,r)=>{v.name=t.name,v.id=t.id,_.push(v),v={}}),l||c({statusCode:404,message:"页面加载失败，请重新加载"}),{cateData:l,productsData:o.data,crumbArr:[{name:"产品分类",id:0},..._],curName:d,curCateId:n}},fetch({store:t,query:r}){console.log(t)},head(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},created(){},methods:{priceSort(t){const r=t.currentTarget.dataset.index;this.curPriceIndex=r,this.getProductsByCate(this.curCateId,r)},cateTap(t){const r=t.currentTarget.dataset.id,e=t.currentTarget.dataset.name;this.curName=e,this.crumbArr.push({id:r,name:e}),this._loadData(r)},crumbTap(t){const r=t.currentTarget.dataset.index;let e=this.crumbArr;e=e.slice(0,1*r+1),this.curName=e[r].name,this.crumbArr=e,this._loadData(e[r].id)},_loadData(t=0){this.curCateId=t,this.getSonCate(t),this.getProductsByCate(t)},getSonCate(t){this.cateData=null,h.a.getSonCate(t).then(t=>{setTimeout(()=>{this.cateData=t},600)})},getProductsByCate(t=0,r=0){this.productsData=null,h.a.getProductsByCate(t,r).then(t=>{setTimeout(()=>{this.productsData=t.data},600)})}}});var f=Object(d.a)(v,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"product-section product-list-container"},[e("el-breadcrumb",{staticClass:"font12",attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),t._l(t.crumbArr,(function(r,c){return e("el-breadcrumb-item",{key:c,staticClass:"crumb-item",attrs:{"data-index":c},nativeOn:{click:function(r){return t.crumbTap(r)}}},[t._v(t._s(r.name))])}))],2),t._ssrNode(" "),t._ssrNode('<div class="cate-container">',"</div>",[t._ssrNode('<div class="current-name">'+t._ssrEscape(t._s(t.curName))+"</div> "),t._ssrNode('<div class="cate-sec">',"</div>",[t.cateData?t._ssrNode('<ul class="cate-list">',"</ul>",[t._ssrNode(t._ssrList(t.cateData,(function(r,e){return"<li"+t._ssrAttr("data-id",r.id)+t._ssrAttr("data-name",r.name)+'><span class="font12">'+t._ssrEscape(t._s(r.name))+'</span> <div class="img"><img'+t._ssrAttr("src",r.img_url[0])+" alt></div></li>"})))],2):e("CateLoading")],1)],2),t._ssrNode(" "),t._ssrNode('<div class="product-wrap">',"</div>",[t._ssrNode('<div class="filter-wrap"><div class="product-num">'+(t.productsData?"<span>"+t._ssrEscape(t._s(t.productsData.length)+"件商品")+"</span>":"\x3c!----\x3e")+'</div> <dl class="filter-list"><dt>排序方式：</dt> <dd'+t._ssrAttr("data-index",1)+t._ssrClass(null,{active:1==t.curPriceIndex})+">价格高至低</dd> <dd"+t._ssrAttr("data-index",2)+t._ssrClass(null,{active:2==t.curPriceIndex})+">价格低至高</dd></dl></div> "),t._ssrNode('<div class="product-list">',"</div>",[t.productsData?t._ssrNode('<div class="product-item-wrap">',"</div>",t._l(t.productsData,(function(t,r){return e("productItem",{key:r,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):e("ProductListLoading")],1)],2)],2)}),[],!1,(function(t){var r=e(171);r.__inject__&&r.__inject__(t)}),null,"7a806a84");r.default=f.exports}};
//# sourceMappingURL=0ba147271ae1b4e2baab.js.map