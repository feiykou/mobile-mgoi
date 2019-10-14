import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31954330 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _6771711a = () => interopDefault(import('..\\pages\\about\\index\\index.vue' /* webpackChunkName: "pages_about_index_index" */))
const _b5d8b0cc = () => interopDefault(import('..\\components\\about\\contact.vue' /* webpackChunkName: "components_contact" */))
const _6b2a3649 = () => interopDefault(import('..\\components\\about\\news.vue' /* webpackChunkName: "components_news" */))
const _5dbb6890 = () => interopDefault(import('..\\components\\about\\recruit.vue' /* webpackChunkName: "components_recruit" */))
const _7ce34209 = () => interopDefault(import('..\\pages\\column\\index.vue' /* webpackChunkName: "pages_column_index" */))
const _3647e812 = () => interopDefault(import('..\\pages\\pets.vue' /* webpackChunkName: "pages_pets" */))
const _9b4475f4 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages_product_index" */))
const _f78e2208 = () => interopDefault(import('..\\pages\\special\\index.vue' /* webpackChunkName: "pages_special_index" */))
const _06028eac = () => interopDefault(import('..\\pages\\theme\\index.vue' /* webpackChunkName: "pages_theme_index" */))
const _bfe85692 = () => interopDefault(import('..\\pages\\column\\list.vue' /* webpackChunkName: "pages_column_list" */))
const _28d535cf = () => interopDefault(import('..\\pages\\product\\news.vue' /* webpackChunkName: "pages_product_news" */))
const _2b3c32b1 = () => interopDefault(import('..\\pages\\column\\_id.vue' /* webpackChunkName: "pages_column__id" */))
const _adb11dd8 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages_news__id" */))
const _0e8550ee = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _15ee8064 = () => interopDefault(import('..\\pages\\special\\_id.vue' /* webpackChunkName: "pages_special__id" */))
const _380767d8 = () => interopDefault(import('..\\pages\\theme\\_id.vue' /* webpackChunkName: "pages_theme__id" */))
const _2548f0c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _31954330,
      children: [{
        path: "",
        components: {
          default: _6771711a,
          contact: _b5d8b0cc,
          news: _6b2a3649,
          recruit: _5dbb6890
        },
        name: "about-index"
      }]
    }, {
      path: "/column",
      component: _7ce34209,
      name: "column"
    }, {
      path: "/pets",
      component: _3647e812,
      name: "pets"
    }, {
      path: "/product",
      component: _9b4475f4,
      name: "product"
    }, {
      path: "/special",
      component: _f78e2208,
      name: "special"
    }, {
      path: "/theme",
      component: _06028eac,
      name: "theme"
    }, {
      path: "/column/list",
      component: _bfe85692,
      name: "column-list"
    }, {
      path: "/product/news",
      component: _28d535cf,
      name: "product-news"
    }, {
      path: "/column/:id",
      component: _2b3c32b1,
      name: "column-id"
    }, {
      path: "/news/:id?",
      component: _adb11dd8,
      name: "news-id"
    }, {
      path: "/product/:id",
      component: _0e8550ee,
      name: "product-id"
    }, {
      path: "/special/:id",
      component: _15ee8064,
      name: "special-id"
    }, {
      path: "/theme/:id",
      component: _380767d8,
      name: "theme-id"
    }, {
      path: "/",
      component: _2548f0c2,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
