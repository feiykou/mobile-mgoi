(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{293:function(t,e,n){},334:function(t,e,n){"use strict";var r=n(293);n.n(r).a},358:function(t,e,n){"use strict";n.r(e);n(92),n(33),n(27),n(23),n(61);var r=n(12),c=n(50);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{curIndex:0}},created:function(){this.$store.dispatch("indexdata/getThemeData")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("indexdata",["themeData"])),methods:{onChange:function(t){this.curIndex=t}}},d=(n(334),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-swiper"},[n("van-swipe",{attrs:{"show-indicators":!1},on:{change:t.onChange}},[n("van-swipe-item",{staticClass:"swiper-item"},[n("ul",{staticClass:"list"},t._l(t.themeData,(function(t,e){return n("li",{key:e},[n("van-image",{staticClass:"img",attrs:{fit:"cover","lazy-load":"",src:t.mobile_imgs_url[0]}})],1)})),0)])],1),t._v(" "),n("div",{staticClass:"dot-wrap"},t._l(t.themeData,(function(e,r){return n("div",{key:r,class:{active:r==t.curIndex}})})),0)],1)}),[],!1,null,null,null);e.default=component.exports}}]);