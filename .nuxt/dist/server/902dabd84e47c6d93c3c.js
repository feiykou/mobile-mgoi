exports.ids=[13],exports.modules={110:function(t,e){},152:function(t,e,r){"use strict";r.r(e);var c=r(110),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},181:function(t,e,r){"use strict";r.r(e);var c=r(31);var n={watchQuery:["cate_id"],layout:"main",data:()=>({curName:"",listData:null}),components:{Button:r(29).a},watch:{$route:function({query:t}){const e=t.type;this.switchData(e)}},async asyncData({app:t,query:e,store:r,error:n}){const{type:o,cate_id:l}=e;if(!o||!l)return n({statusCode:404,message:"页面加载失败，请重新加载"});let d="";1===Number(o)&&(d="狗专区"),2===Number(o)&&(d="猫专区");let v=await c.a.getCategoryCate(0,Number(l));return v?{categoryListData:v,curName:d}:n({statusCode:404,message:"页面加载失败，请重新加载"})},created(){let t=this.$router.history.current.query.type;this.switchData(t)},methods:{switchData(t){this.listData=null,t?2===Number(t)?this.listData=this.dog:1===Number(t)&&(this.listData=this.cat):this.listData=this.cat}}},o=r(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pets-container"},[t._ssrNode('<div class="pets-tit font24 bold" data-v-694566c0>'+t._ssrEscape(t._s(t.curName))+"</div> "),t._ssrNode('<div class="pets-nav-list bold" data-v-694566c0>',"</div>",t._l(t.categoryListData,(function(e,c){return t._ssrNode('<div class="btn-wrap" data-v-694566c0>',"</div>",[r("a",{directives:[{name:"anchor",rawName:"v-anchor",value:"pets"+c,expression:"'pets'+index"}],attrs:{href:"javascript:void(0);"}},[r("Button",{staticClass:"anchor-btn",attrs:{name:e.name,type:"gray"}})],1)])})),0),t._ssrNode(" "),t._ssrNode('<ul class="pets-list" data-v-694566c0>',"</ul>",t._l(t.categoryListData,(function(e,c){return r("li",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"hover-class",expression:"'hover-class'"}],key:c,attrs:{id:"anchor-pets"+c}},[r("nuxt-link",{attrs:{to:e.link_url}},[r("div",{staticClass:"tit bold font18"},[r("span",[t._v(t._s(e.name))]),r("span",[t._v("LiPin")])]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}})],1)],1)})),0),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(152);e.__inject__&&e.__inject__(t)}),"694566c0","0d24f8aa");e.default=component.exports}};
//# sourceMappingURL=902dabd84e47c6d93c3c.js.map