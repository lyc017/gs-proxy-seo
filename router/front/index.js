// import protocolRouter from './protocol'
// import headerRouter from './header'
import index from '@/pages/front/index.vue'
// import index from '@/pages/front/index.vue'
export default [
  // ...protocolRouter,
  // ...headerRouter,

  {
    path: '',
    name: 'Index',
    meta: {
      title: '动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: index,
    children: [
    // {
    //   path: '/front/agent/buy',
    //   name: 'FrontAgentBuy',
    //   meta: {
    //     title: '动态代理ip_隧道代理ip_爬虫代理-旋风云',
    //     checkLogin: false
    //   },
    //   component: () => import('@/views/front/AgentBuy')
    // },
    // {
    //   path: '/library/:type/:code',
    //   name: 'LibraryGuide',
    //   meta: {
    //     title: '常见问题文档中心_代理ip动态_动态http代理-旋风云',
    //     checkLogin: false
    //   },
    //   component: () => import('@/views/front/Library')
    // },
    // {
    //   path: '/information',
    //   name: 'Information',
    //   meta: {
    //     title: '行业资讯_动态ip代理地址_代理的动态ip-旋风云',
    //     checkLogin: false
    //   },
    //   component: () => import('@/views/front/Information')
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   meta: {
    //     title: '关于我们_动态代理的实现_动态国内ip代理-旋风云',
    //     checkLogin: false
    //   },
    //   component: () => import('@/views/front/About')
    // },
    // {
    //   path: '/information/detail/:id',
    //   name: 'InformationDetail',
    //   meta: {
    //     title: '服务说明文档中心_动态代理的实现_动态国内ip代理-旋风云',
    //     checkLogin: false
    //   },
    //   component: () => import('@/views/front/InformationDetail')
    // },
      {
        path: '*',
        name: 'FrontIndex',
        meta: {
          title: '动态代理_隧道代理_隧道代理搭建-旋风云',
          checkLogin: false
        },
        component: index
      }
    ]
  }
]
