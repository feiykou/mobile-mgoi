exports.ids=[13],exports.modules={132:function(e,t,r){"use strict";var d=r(1);t.a={getThemeDetail(e){if(!(e<=0))return d.a.fetchGet(`theme/${e}/detail`)},getThemeList:e=>d.a.fetchGet(`theme/list/${e}`)}},133:function(e,t){},163:function(e,t,r){"use strict";r.r(t);var d=r(133),c=r.n(d);for(var o in d)"default"!==o&&function(e){r.d(t,e,(function(){return d[e]}))}(o);t.default=c.a},192:function(e,t,r){"use strict";r.r(t);var d=r(132),c={data:()=>({catData:[],dogData:[],crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",isShowTab:!0}),components:{},created(){},async asyncData({isDev:e,route:t,store:r,env:c,params:o,query:n,req:l,res:v,redirect:_,error:m}){let[f,h]=await Promise.all([d.a.getThemeList(3),d.a.getThemeList(4)]);return f||m({statusCode:404,message:"页面加载失败，请重新加载"}),{catData:f,dogData:h}},methods:{}},o=r(2);var component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"theme-section"},[r("Header",{staticClass:"header-box",staticStyle:{height:"70px"},attrs:{curNavIndex:0,show:e.isShowTab}}),e._ssrNode(" "),e._ssrNode('<div class="theme-box" data-v-2e9cee1f>',"</div>",[e._ssrNode('<div class="theme-wrap" data-v-2e9cee1f>',"</div>",[e._ssrNode('<div class="title font16 bold" data-v-2e9cee1f>猫的场景</div> '),e._ssrNode('<ul class="theme-list" data-v-2e9cee1f>',"</ul>",e._l(e.dogData,(function(t,d){return e._ssrNode("<li data-v-2e9cee1f>","</li>",[e._ssrNode('<div class="img" data-v-2e9cee1f>',"</div>",[r("nuxt-link",{attrs:{to:"/theme/"+t.id}},[r("img",{attrs:{src:t.main_img_url[0],alt:""}})])],1),e._ssrNode(" "),e._ssrNode('<p class="tit" data-v-2e9cee1f>',"</p>",[r("nuxt-link",{attrs:{to:"/theme/"+t.id}},[e._v(e._s(t.name))])],1)],2)})),0)],2),e._ssrNode(" "),e._ssrNode('<div class="theme-wrap" data-v-2e9cee1f>',"</div>",[e._ssrNode('<div class="title font16 bold" data-v-2e9cee1f>狗的场景</div> '),e._ssrNode('<ul class="theme-list" data-v-2e9cee1f>',"</ul>",[e._l(e.catData,(function(t,d){return e._ssrNode("<li data-v-2e9cee1f>","</li>",[e._ssrNode('<div class="img" data-v-2e9cee1f>',"</div>",[r("nuxt-link",{attrs:{to:"/theme/"+t.id}},[r("img",{attrs:{src:t.main_img_url[0],alt:""}})])],1),e._ssrNode(" "),e._ssrNode('<p class="tit" data-v-2e9cee1f>',"</p>",[r("nuxt-link",{attrs:{to:"/theme/"+t.id}},[e._v(e._s(t.name))])],1)],2)})),e._ssrNode(" <li data-v-2e9cee1f></li>")],2)],2)],2)],2)}),[],!1,(function(e){var t=r(163);t.__inject__&&t.__inject__(e)}),"2e9cee1f","24ed78dd");t.default=component.exports}};
//# sourceMappingURL=c15eff456d39808b44d1.js.map