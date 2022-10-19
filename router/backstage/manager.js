// 财务管理
export default [
  {
      path: '/manager/article',
      name: 'ArticleMg',
      meta: {
        title: '资讯管理'
      },
      component: () => import('@/views/backstage/manager/article/Index')
  },
  {
    path: '/manager/certification',
    name: 'CertificationMg',
    meta: {
      title: '企业认证'
    },
    component: () => import('@/views/backstage/manager/certification/Index')
  }
]
