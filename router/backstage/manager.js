// 后台管理
import ArticleMg from '@/pages/backstage/manager/article/Index'
import CertificationMg from '@/pages/backstage/manager/certification/Index'
export default [
  {
      path: '/manager/article',
      name: 'ArticleMg',
      meta: {
        title: '资讯管理'
      },
      component: ArticleMg
  },
  {
    path: '/manager/certification',
    name: 'CertificationMg',
    meta: {
      title: '企业认证'
    },
    component: CertificationMg
  }
]
