exports.ids=[11],exports.modules={140:function(t,e,r){"use strict";r.r(e);var c=r(98),n=r.n(c);for(var o in c)"default"!==o&&function(t){r.d(e,t,(function(){return c[t]}))}(o);e.default=n.a},167:function(t,e,r){"use strict";r.r(e);var c=r(31);var n={watchQuery:["cate_id"],layout:"main",data:()=>({curName:"",listData:null}),watch:{$route:function({query:t}){const e=t.type;this.switchData(e)}},async asyncData({app:t,query:e,store:r,error:n}){const{type:o,cate_id:l}=e;if(!o||!l)return n({statusCode:404,message:"页面加载失败，请重新加载"});let d="";1===Number(o)&&(d="狗专区"),2===Number(o)&&(d="猫专区");let v=await c.a.getCategoryCate(0,Number(l));return v?{categoryListData:v,curName:d}:n({statusCode:404,message:"页面加载失败，请重新加载"})},created(){let t=this.$router.history.current.query.type;this.switchData(t)},methods:{switchData(t){this.listData=null,t?2===Number(t)?this.listData=this.dog:1===Number(t)&&(this.listData=this.cat):this.listData=this.cat}}},o=r(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pets-container"},[t._ssrNode('<div class="pets-tit font24 bold" data-v-3e2a3ff8>'+t._ssrEscape(t._s(t.curName))+"</div> "),t._ssrNode('<ul class="pets-list" data-v-3e2a3ff8>',"</ul>",t._l(t.categoryListData,(function(e,c){return r("li",{directives:[{name:"hover-class",rawName:"v-hover-class",value:"hover-class",expression:"'hover-class'"}],key:c,staticClass:"van-hairline--bottom"},[r("nuxt-link",{attrs:{to:e.link_url}},[r("div",{staticClass:"tit bold font14"},[t._v(t._s(e.name))]),t._v(" "),r("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),r("van-image",{staticClass:"img",attrs:{fit:"cover",src:e.mobile_imgs_url[0]}})],1)],1)})),0),t._ssrNode(" "),r("cate-list")],2)}),[],!1,(function(t){var e=r(140);e.__inject__&&e.__inject__(t)}),"3e2a3ff8","0d24f8aa");e.default=component.exports},98:function(t,e){}};
//# sourceMappingURL=4b833f94e8b0e8f170f9.js.map