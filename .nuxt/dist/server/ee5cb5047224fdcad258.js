exports.ids=[4],exports.modules={128:function(t,e){},161:function(t,e,n){"use strict";n.r(e);var c=n(128),r=n.n(c);for(var l in c)"default"!==l&&function(t){n.d(e,t,(function(){return c[t]}))}(l);e.default=r.a},195:function(t,e,n){"use strict";n.r(e);var c={layout:"main",data:()=>({activeName:"about",isShowTab:!0}),created(){this.setTab(this.$route.hash)},watch:{$route:function(t){const e=t.hash;this.setTab(e)}},methods:{handleClick(t,e){this.activeName=t.name},setTab(t){if(!t)return;let e="";switch(t){case"#news":e="news";break;case"#recruit":e="recruit";break;case"#contact":e="contact";break;default:e="about"}this.activeName=e}},components:{}},r=n(2);var component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-wrap set-size"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"唔该理念",name:"about"}},[n("div",{staticClass:"about-item"},[n("nuxt-child")],1)]),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该新闻",name:"news"}},[n("nuxt-child",{attrs:{name:"news"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该招聘",name:"recruit"}},[n("nuxt-child",{attrs:{name:"recruit"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"联系唔该",name:"contact"}},[n("nuxt-child",{attrs:{name:"contact"}})],1)],1)],1)}),[],!1,(function(t){var e=n(161);e.__inject__&&e.__inject__(t)}),null,"1474c01c");e.default=component.exports}};
//# sourceMappingURL=ee5cb5047224fdcad258.js.map