(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{274:function(t,e,c){},316:function(t,e,c){"use strict";var n=c(274);c.n(n).a},342:function(t,e,c){"use strict";c.r(e);c(105),c(104),c(88),c(49);var n,r=c(8),o=c(253),d=c(299),m=c(300),l={watchQuery:["cate_id","name"],layout:"main",components:{pageProductList:o.a,Cate:m.a},data:function(){return{curName:"季节推荐",pid:0,productsData:[{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"},{id:3,main_img_url:["http://www.mgoi.net/upload/20190514/8aacfb9762a04ca840cf360703a7e7d8.jpg","http://www.mgoi.net/upload/20190514/506b5ae2761780cc83c8662df2c88418.jpg"],name:"铜制铃铛",price:"2324.00"}]}},asyncData:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){var c,n,r,o,m,l,w,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.app,c=e.query,e.store,e.error,n=c.cate_id,r=c.pid,o=c.name,m=c.type,n=n||0,r=Number(r||0),l=null,"product"!==m){t.next=12;break}return t.next=8,d.a.getProductByCate(n);case 8:l=t.sent,o=o||l.name,t.next=19;break;case 12:if("price"!==m){t.next=19;break}return w=(o=o||"0-100").split("-"),t.next=17,d.a.getProductByPrice(w[0],w[1]);case 17:l=t.sent,console.log(l);case 19:return t.next=21,d.a.getGiftCate(r);case 21:return f=t.sent,t.abrupt("return",{productListData:l,giftListData:f,curName:o,pid:r,loading:!1});case 23:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},w=(c(316),c(3)),component=Object(w.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"gift-list-container"},[c("div",{staticClass:"cur-name font16 bold"},[t._v(t._s(t.curName))]),t._v(" "),t.productListData?c("pageProductList",{attrs:{loading:t.loading,productsData:t.productListData.product||t.productListData.data}}):t._e(),t._v(" "),c("Cate",{attrs:{giftCate:t.giftListData,topid:t.pid}})],1)}),[],!1,null,"06c70226",null);e.default=component.exports}}]);