exports.ids=[8],exports.modules={107:function(t,e){},132:function(t,e,c){"use strict";var r={props:{swiperData:{type:Array}},data:()=>({curIndex:0})},n=c(1);var component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("van-swipe",{staticClass:"head-swiper",attrs:{"show-indicators":!1}},[t._l(t.swiperData,(function(e,r){return c("van-swipe-item",{key:e.id,staticClass:"swipe-item"},[c("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),c("div",{staticClass:"info-wrap"},[c("div",{staticClass:"title",class:0==r?"font16":""},[t._v(t._s(e.name))]),t._v(" "),c("div",{staticClass:"description",class:0==r?"":"font12"},[t._v(t._s(e.introduce))])])],1)})),t._v(" "),t.swiperData.length>1?c("div",{staticClass:"dot-wrap"},t._l(t.swiperData,(function(e,r){return c("div",{key:r,class:{active:r==t.curIndex}})})),0):t._e()],2)}),[],!1,(function(t){var e=c(96);e.__inject__&&e.__inject__(t)}),"607e3c5a","690aec11");e.a=component.exports},145:function(t,e,c){"use strict";c.r(e);var r=c(107),n=c.n(r);for(var o in r)"default"!==o&&function(t){c.d(e,t,(function(){return r[t]}))}(o);e.default=n.a},169:function(t,e,c){"use strict";c.r(e);var r=c(86),n=c(132),o=(c(4),{layout:"main",watchQuery:["id"],components:{rescColumn:n.a},data:()=>({headRescData:[],cateId:0,isShowTab:!0,curColumn:"最新专栏"}),created(t){this.$store.dispatch("cate/getColumnCate"),this.$route.query.q&&this.search(this.$route.query.q)},head(){return this.$seo("专栏列表 - 唔该","正处于萌芽阶段")},computed:{id(){return Number(this.$route.query.id)}},async asyncData({query:t,error:e}){const c=await r.a.getRescColumn(),n=0|t.id,o=await r.a.getColumns(n);return o||e({statusCode:404,message:"页面加载失败，请重新加载"}),{headRescData:c,columnData:o.data}},fetch:({store:t})=>t.dispatch("cate/getColumnCate"),watch:{$route:function(t,e){t.query.q&&this.search(t.query.q)}},methods:{formalDate(t){const e=t.indexOf(" ");return t.substring(0,e)},search(q){r.a.search(q).then(t=>{this.columnData=t.data})}}}),d=c(1);var component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container column-list-container"},[c("thumb",{staticClass:"font12"},[c("thumb-item",[c("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),c("thumb-item",[c("nuxt-link",{attrs:{to:"/special"}},[t._v("每月特辑")])],1),t._v(" "),c("thumb-item",[t._v("圣诞特别篇")])],1),t._ssrNode(" "),t._ssrNode('<div class="head-img-wrap" data-v-3e10d9a2>',"</div>",[c("van-image",{staticClass:"img",attrs:{fit:"cover",src:"http://mgoiweb.cn/upload/20190912/bb5f3181ad0f6d6d8d1a4a806329da29.jpg"}}),t._ssrNode(' <div class="tit-desc" data-v-3e10d9a2><div class="tit font16 bold" data-v-3e10d9a2>流蕙刺绣 - 刺绣吊牌 生动活泼</div> <div class="desc" data-v-3e10d9a2>刺绣吊牌刺绣吊牌刺绣吊牌刺绣刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌吊牌刺绣吊牌</div></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="content-box" data-v-3e10d9a2>',"</div>",[t._ssrNode('<div class="column-list-box" data-v-3e10d9a2>',"</div>",[t._ssrNode('<div class="list-tit font15 bold van-hairline--bottom" data-v-3e10d9a2>饮食篇</div> '),t._l(t.columnData,(function(e,r){return t._ssrNode("<div"+t._ssrAttr("data-id",e.id)+' class="item van-hairline--bottom" data-v-3e10d9a2>',"</div>",[c("nuxt-link",{staticClass:"item-wrap",attrs:{to:"/column/"+e.id}},[c("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),c("div",{staticClass:"tit-desc"},[c("div",{staticClass:"desc"},[t._v(t._s(t.formalDate(e.create_time)))]),t._v(" "),c("div",{staticClass:"tit font14"},[t._v(t._s(e.name))])])],1)],1)}))],2),t._ssrNode(" "),t._ssrNode('<div class="column-list-box" data-v-3e10d9a2>',"</div>",[t._ssrNode('<div class="list-tit font15 bold van-hairline--bottom" data-v-3e10d9a2>外出篇</div> '),t._l(t.columnData,(function(e,r){return t._ssrNode("<div"+t._ssrAttr("data-id",e.id)+' class="item van-hairline--bottom" data-v-3e10d9a2>',"</div>",[c("nuxt-link",{staticClass:"item-wrap",attrs:{to:"/column/"+e.id}},[c("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),c("div",{staticClass:"tit-desc"},[c("div",{staticClass:"desc"},[t._v(t._s(t.formalDate(e.create_time)))]),t._v(" "),c("div",{staticClass:"tit font14"},[t._v(t._s(e.name))])])],1)],1)}))],2)],2)],2)}),[],!1,(function(t){var e=c(145);e.__inject__&&e.__inject__(t)}),"3e10d9a2","58bd753d");e.default=component.exports},80:function(t,e){},86:function(t,e,c){"use strict";var r=c(26);e.a={getSonCate:(t=0)=>r.a.fetchGet(`columnCate/sonCate?cateId=${t}`),getRescColumn:(t=2,e=1,c=0)=>r.a.fetchGet(`column/resc?rescId=${t}&count=${e}&id=${c}`),getColumns:(t=0,e=1,c=10)=>r.a.fetchGet(`column/${t}?page=${e}&size=${c}`),getColumnDetail:(t=0)=>r.a.fetchGet(`column/detail/${t}`),getTopBottomData:t=>r.a.fetchGet(`column/topBottom/${t}`),search:(q="")=>r.a.fetchGet(`column/search?q=${q}`)}},96:function(t,e,c){"use strict";c.r(e);var r=c(80),n=c.n(r);for(var o in r)"default"!==o&&function(t){c.d(e,t,(function(){return r[t]}))}(o);e.default=n.a}};
//# sourceMappingURL=a80733ebbd865c272987.js.map