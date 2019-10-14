module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '@/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    // 'swiper/dist/css/swiper.css',
    '@/static/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/components',
    '@/plugins/global',
    '@/plugins/vant',
    // '@/plugins/element-ui',
    // { src: '@/plugins/swiper', ssr: false }
  ],
  server: {
    // host: 'localhost',
    port: 3001, // default: 3000
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    prefix: '/api/',
    proxy: true // Can be also an object with default options
  },
  proxy: [
    ['/api', { target: 'http://www.mgoi.net/api/v1/', pathRewrite: { '^/api': '/api/v1/' } }]
  ],

  router: {
    extendRoutes (routes, resolve) {
      const aboutIndex = routes.findIndex(route => route.chunkName === 'pages/about/index')
      let aindex = routes[aboutIndex].children.findIndex(route => route.name === 'about-index')
      routes[aboutIndex].children[aindex] = {
        ...routes[aboutIndex].children[aindex],
        components: {
          default: routes[aboutIndex].children[aindex].component,
          contact: resolve(__dirname, 'components/about/contact.vue'),
          news: resolve(__dirname, 'components/about/news.vue'),
          recruit: resolve(__dirname, 'components/about/recruit.vue')
        },
        chunkNames: {
          contact: 'components/contact',
          news: 'components/news',
          recruit: 'components/recruit'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // transpile: [/^element-ui/],
    vendor: ['vant','axios'],
    babel: {
      // "plugins": [ 
      //     ["import", 
      //       { 
      //         "libraryName": "vant", 
      //         "libraryDirectory": "es", 
      //         "style": true 
      //       }
      //     ] 
      // ]
    },
    extractCSS: { allChunks: true },
    analyze: true, 
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      plugins: {
        "postcss-aspect-ratio-mini": {}, 
        "postcss-write-svg": { utf8: false }, 
        "postcss-cssnext": {},
        "postcss-px-to-viewport": { 
          viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['body','html','.index-swiper-slide','.el-dialog__wrapper','.v-modal','.set-size','.font12', '.font14', '.font15', '.font16', '.font18', '.font20', '.font24', '.font26', '.font34'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false // 允许在媒体查询中转换`px`         
        }
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}