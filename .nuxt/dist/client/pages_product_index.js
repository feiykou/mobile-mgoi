(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{225:function(t,e,r){},228:function(t,e,r){"use strict";var n=r(225);r.n(n).a},230:function(t,e,r){"use strict";var n={props:{productData:Object,simple:{type:Boolean,default:!1}}},c=(r(228),r(3)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item"},[r("div",{staticClass:"img",attrs:{"hover-class":"hover-class"}},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[r("img",{attrs:{src:t.productData.main_img_url[0]}})])],1),t._v(" "),r("p",{staticClass:"tit font12",attrs:{"hover-class":"hover-class"}},[t._v(t._s(t.productData.name))]),t._v(" "),r("p",{staticClass:"price font12"},[t._v("￥"+t._s(t.productData.price)+" 蚊")]),t._v(" "),t.simple?r("div",{staticClass:"btn btn-animate btn-wrap font12"},[r("nuxt-link",{attrs:{to:"/product/"+t.productData.id}},[t._v("立即购买")])],1):t._e()])}),[],!1,null,"0d7bc0d8",null);e.a=component.exports},242:function(t,e,r){},243:function(t,e,r){},244:function(t,e,r){},275:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,c,o,d;for(c in b)if(t=a[c],e=b[c],t&&r.test(c))if("class"===c&&("string"==typeof t&&(d=t,a[c]=t={},t[d]=!0),"string"==typeof e&&(d=e,b[c]=e={},e[d]=!0)),"on"===c||"nativeOn"===c||"hook"===c)for(o in e)t[o]=n(t[o],e[o]);else if(Array.isArray(t))a[c]=t.concat(e);else if(Array.isArray(e))a[c]=[t].concat(e);else for(o in e)t[o]=e[o];else a[c]=b[c];return a}),{})}},276:function(t,e,r){"use strict";var n=r(242);r.n(n).a},277:function(t,e,r){"use strict";var n=r(243);r.n(n).a},278:function(t,e){var r=0;t.exports={tabBarAnimate:function(t){var mark=!0,e=r-t.scrollTop;if(t.scrollTop<60){if(mark==this.isShowTab)return;this.isShowTab=!0}else if(Math.abs(e)>50){if(mark=e>0,r=t.scrollTop,mark==this.isShowTab)return;this.isShowTab=mark}}}},279:function(t,e,r){"use strict";var n=r(244);r.n(n).a},299:function(t,e,r){"use strict";r.r(e);r(82),r(48);var n,c=r(6),o=(r(99),r(275)),d=r.n(o),l=function(){return Math.random().toString(36).substring(2)},h={name:"ContentLoader",functional:!0,props:{width:{type:Number,default:400},height:{type:Number,default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,c=r.uniqueKey?r.uniqueKey+"-idClip":l(),o=r.uniqueKey?r.uniqueKey+"-idGradient":l();return t("svg",d()([data,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+o+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+c+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:c}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:o}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}},f={name:"cate-loading",props:{counts:{type:Number,default:3}},components:{ContentLoader:h}},m=(r(276),r(3)),v=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cate-box"},t._l(t.counts,(function(e,n){return r("div",{key:n,staticClass:"cate-loader"},[r("content-loader",{attrs:{height:134,width:125,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"47",y:"17",rx:"0",ry:"0",width:"28",height:"14"}}),t._v(" "),r("rect",{attrs:{x:"38.5",y:"46",rx:"0",ry:"0",width:"46",height:"46"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"128.27",rx:"0",ry:"0",width:"125",height:"1"}})])],1)})),0)}),[],!1,null,null,null).exports,y={props:{counts:{type:Number,default:8}},components:{ContentLoader:h}},_=(r(277),Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"product-list"},[t._l(t.counts,(function(e,n){return r("li",{key:n},[r("content-loader",{attrs:{height:371,width:222,speed:2,primaryColor:"#d4d4d4",secondaryColor:"#ecebeb"}},[r("rect",{attrs:{x:"0",y:"0",rx:"0",ry:"0",width:"222",height:"222"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"242.27",rx:"0",ry:"0",width:"190",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"268.27",rx:"0",ry:"0",width:"53",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"300.27",rx:"0",ry:"0",width:"110",height:"16"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"335.27",rx:"0",ry:"0",width:"234",height:"51"}})])],1)})),t._v(" "),r("li"),t._v(" "),r("li"),t._v(" "),r("li")],2)}),[],!1,null,"f8c7220a",null).exports),C=r(101),x=(r(278),r(95),{watchQuery:["id"],layout:"main",data:function(){return{cateData:null,productsData:null,crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",curCateId:0,curPriceIndex:0,isShowTab:!0}},components:{productItem:r(230).a,CateLoading:v,ProductListLoading:_},asyncData:(n=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,n,c,o,d,l,h,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.app,r=e.query,e.store,n=e.error,c=r.id,o=r.name,d=null,l=null,t.next=5,C.a.getProductsByCate(c);case 5:return d=t.sent,t.next=8,C.a.getSonCate(c);case 8:return l=t.sent,h=[],f={},m=[{name:"产品分类",id:0}],[].forEach((function(t,e){f.name=t.name,f.id=t.id,h.push(f),f={}})),l||n({statusCode:404,message:"页面加载失败，请重新加载"}),t.abrupt("return",{cateData:l,productsData:d.data,crumbArr:[].concat(m,h),curName:o,curCateId:c});case 14:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),fetch:function(t){var e=t.store;t.query;console.log(e)},head:function(){return this.$seo("产品列表 - 唔该","正处于萌芽阶段")},created:function(){},methods:{priceSort:function(t){var e=t.currentTarget.dataset.index;this.curPriceIndex=e,this.getProductsByCate(this.curCateId,e)},cateTap:function(t){var e=t.currentTarget.dataset.id,r=t.currentTarget.dataset.name;this.curName=r,this.crumbArr.push({id:e,name:r}),this._loadData(e)},crumbTap:function(t){var e=t.currentTarget.dataset.index,r=this.crumbArr;r=r.slice(0,1*e+1),this.curName=r[e].name,this.crumbArr=r,this._loadData(r[e].id)},_loadData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.curCateId=t,this.getSonCate(t),this.getProductsByCate(t)},getSonCate:function(t){var e=this;this.cateData=null,C.a.getSonCate(t).then((function(t){setTimeout((function(){e.cateData=t}),600)}))},getProductsByCate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.productsData=null,C.a.getProductsByCate(e,r).then((function(e){setTimeout((function(){t.productsData=e.data}),600)}))}}}),w=(r(279),Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-section product-list-container"},[r("thumb",{staticClass:"font12"},[r("thumb-item",[t._v("首页")]),t._v(" "),t._l(t.crumbArr,(function(e,n){return r("thumb-item",{key:n,attrs:{"data-index":n},nativeOn:{click:function(e){return t.crumbTap(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2),t._v(" "),r("div",{staticClass:"cate-container"},[r("div",{staticClass:"current-name"},[t._v(t._s(t.curName))]),t._v(" "),r("div",{staticClass:"cate-sec"},[t.cateData?r("ul",{staticClass:"cate-list"},t._l(t.cateData,(function(e,n){return r("li",{key:n,attrs:{"data-id":e.id,"data-name":e.name},on:{click:t.cateTap}},[r("span",{staticClass:"font12"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"img"},[r("img",{attrs:{src:e.img_url[0],alt:""}})])])})),0):r("CateLoading")],1)]),t._v(" "),r("div",{staticClass:"product-wrap"},[r("div",{staticClass:"filter-wrap"},[r("div",{staticClass:"product-num"},[t.productsData?r("span",[t._v(t._s(t.productsData.length)+"件商品")]):t._e()]),t._v(" "),r("dl",{staticClass:"filter-list"},[r("dt",[t._v("排序方式：")]),t._v(" "),r("dd",{class:{active:1==t.curPriceIndex},attrs:{"data-index":1},on:{click:t.priceSort}},[t._v("价格高至低")]),t._v(" "),r("dd",{class:{active:2==t.curPriceIndex},attrs:{"data-index":2},on:{click:t.priceSort}},[t._v("价格低至高")])])]),t._v(" "),r("div",{staticClass:"product-list"},[t.productsData?r("div",{staticClass:"product-item-wrap"},t._l(t.productsData,(function(t,e){return r("productItem",{key:e,staticClass:"product-item",attrs:{simple:!0,productData:t}})})),1):r("ProductListLoading")],1)])],1)}),[],!1,null,null,null));e.default=w.exports}}]);