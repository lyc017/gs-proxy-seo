import protocolRouter from './protocol'
import headerRouter from './header'
import index from '@/pages/front/Index.vue'
import FrontIndex from '@/pages/front/FrontIndex.vue'
import About from '@/pages/front/About.vue'
import Information from '@/pages/front/Information'
import InformationDetail from '@/pages/front/InformationDetail'
import Library from '@/pages/front/Library'
export default [
  {
    path: '',
    name: 'Index',
    meta: {
      title: '动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: index,
    children: [
      ...protocolRouter,
      ...headerRouter,
      {
        path: '/information',
        name: 'Information',
        meta: {
          checkLogin: false
        },
        component: Information
      },
      {
        path: '/about',

        name: 'About',
        meta: {
          title: '关于我们_动态代理的实现_动态国内ip代理-旋风云',
          checkLogin: false
        },
        component: About
      },
      {
        path: '/information/detail/:id',
        name: 'InformationDetail',
        meta: {
          checkLogin: false
        },
        component: InformationDetail
      },
      {
        path: '/library/:type/:code',
        name: 'LibraryGuide',
        meta: {
          title: '常见问题文档中心_代理ip动态_动态http代理-旋风云',
          checkLogin: false
        },
        component: () => Library
      },
      {
        path: '*',
        name: 'FrontIndex',
        meta: {
          title: '动态代理_隧道代理_隧道代理搭建-旋风云',
          checkLogin: false
        },
        component: FrontIndex
      }
    ]
  }
]
