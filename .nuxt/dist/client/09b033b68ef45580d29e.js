(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{331:function(t,e,n){},362:function(t,e,n){"use strict";var c=n(331);n.n(c).a},399:function(t,e,n){"use strict";n.r(e);n(88);var c={data:function(){return{activeName:"about",isShowTab:!0}},created:function(){this.setTab(this.$route.hash)},watch:{$route:function(t){var e=t.hash;this.setTab(e)}},methods:{handleClick:function(t,e){this.activeName=t.name},setTab:function(t){if(t){var e="";switch(t){case"#news":e="news";break;case"#recruit":e="recruit";break;case"#contact":e="contact";break;default:e="about"}this.activeName=e}}},components:{}},r=(n(362),n(6)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header",{staticClass:"header-box",staticStyle:{height:"70px"},attrs:{curNavIndex:4,show:t.isShowTab}}),t._v(" "),n("div",{staticClass:"about-wrap"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"唔该理念",name:"about"}},[n("div",{staticClass:"about-item"},[n("nuxt-child")],1)]),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该新闻",name:"news"}},[n("nuxt-child",{attrs:{name:"news"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"唔该招聘",name:"recruit"}},[n("nuxt-child",{attrs:{name:"recruit"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"联系唔该",name:"contact"}},[n("nuxt-child",{attrs:{name:"contact"}})],1)],1)],1),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);