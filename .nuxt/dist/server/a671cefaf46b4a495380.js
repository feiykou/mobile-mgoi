exports.ids=[22],exports.modules={109:function(t,e,r){"use strict";var c=r(1);e.a={getThemeDetail(t){if(!(t<=0))return c.a.fetchGet(`theme/${t}/detail`)},getThemeList:t=>c.a.fetchGet(`theme/list/${t}`),getThemeCate:t=>c.a.fetchGet(`themeCate/sonCate/${t}`),getCateThumb:(t=0)=>c.a.fetchGet(`themeCate/crumb?id=${t}`)}},127:function(t,e){},169:function(t,e,r){"use strict";r.r(e);var c=r(127),n=r.n(c);for(var m in c)"default"!==m&&function(t){r.d(e,t,(function(){return c[t]}))}(m);e.default=n.a},207:function(t,e,r){"use strict";r.r(e);var c=r(30),n=r(109),m={layout:"main",data:()=>({catData:[],dogData:[],crumbArr:[{name:"产品分类",id:0}],curName:"产品分类",isShowTab:!0,thumbData:[]}),components:{mButton:c.a},created(){const t=this.$route.query.id;this.getCateThumb(t)},async asyncData({isDev:t,route:e,store:r,env:c,params:m,query:d,req:o,res:h,redirect:l,error:_}){const v=d.id||0;let f=await n.a.getThemeCate(v);return f||_({statusCode:404,message:"页面加载失败，请重新加载"}),{themeListData:f}},methods:{async getCateThumb(t){this.thumbData=await n.a.getCateThumb(t)}}},d=r(2);var component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"theme-box"},[t._ssrNode('<div class="crumb-head-title" data-v-412b2cc7>',"</div>",[r("thumb",{staticClass:"font12"},[r("thumb-item",[r("nuxt-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),t._l(t.thumbData,(function(e,c){return r("thumb-item",{key:c},[t.thumbData.length-1>c?r("nuxt-link",{attrs:{to:"/theme?id="+e.id}},[t._v(t._s(e.name))]):r("span",[t._v(t._s(e.name))])],1)}))],2)],1),t._ssrNode(" "),t._ssrNode('<div class="theme-wrap" data-v-412b2cc7>',"</div>",[t._ssrNode('<div class="main-tit font16" data-v-412b2cc7>文创主题</div> '),t._ssrNode('<ul class="theme-list" data-v-412b2cc7>',"</ul>",t._l(t.themeListData,(function(e,c){return t._ssrNode("<li data-v-412b2cc7>","</li>",[r("nuxt-link",{attrs:{to:"/theme/list?cate_id="+e.id}},[r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}}),t._v(" "),r("div",{staticClass:"tit-desc"},[r("p",{staticClass:"tit font14 bold"},[t._v(t._s(e.name))])])],1)],1)})),0)],2),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(169);e.__inject__&&e.__inject__(t)}),"412b2cc7","24ed78dd");e.default=component.exports}};
//# sourceMappingURL=a671cefaf46b4a495380.js.map