const webpack = require('webpack')
export default {
  head: {
    title: '动态代理_隧道代理_隧道代理搭建-旋风云',
    // htmlAttrs: {
    //   lang: 'en'
    // },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '动态代理_隧道代理_隧道代理搭建'
      },
      {
        hid: 'description',
        name: 'description',
        content: '旋风云隧道代理是基于高性能主机构建的动态代理服务器，隧道代理搭建支持云端自动切换全国各地ip，功能强大、使用简单，是数据采集的利器'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo/logo.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: "@/plugins/main.js", ssr: false },
    { src: "@/plugins/component.js", ssr: false },
    '@/plugins/ssr.js',
    '@/plugins/require.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/router',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'

  ],
  styleResources: {
    less: ['./static/css/base.less']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  server:{
    post: 3000,
    host: 'local.4846.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    cache: true,
    parallel: true,
    analyze: true, // 请求分析
    loaders:  {
      vue: {
        prettify: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$' : 'jquery'
      })
    ],
    babel:{
      "plugins": [
        [
          "prismjs",
          {
            "languages": [
              "javascript",
              "css",
              "java",
              "cs",
              "php",
              "go",
              "python",
              "markup"
            ],
            "plugins": [
              "line-numbers"
            ],
            "theme": "okaidia",
            "css": true
          }
        ]
      ],
    }
  }
}
