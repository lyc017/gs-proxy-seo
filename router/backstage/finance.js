// 财务管理
export default [
  {
      path: '/finance/recharge',
      name: 'Recharge',
      meta: {
        title: '充值中心'
      },
      component: () => import('@/views/backstage/finance/Recharge')
  },
  {
      path: '/finance/fillManage',
      name: 'FillManage',
      meta: {
        title: '发票管理'
      },
      component: () => import('@/views/backstage/finance/FillManage')
  },
  {
      path: '/finance/order/manage',
      name: 'OrderManage',
      meta: {
        title: '订单管理',
        keepAlive: true
      },
      component: () => import('@/views/backstage/finance/order/Manage')
  },
  {
      path: '/finance/order/detail/:id',
      name: 'OrderDetail',
      meta: {
        title: '订单详情'
      },
      props: true,
      component: () => import('@/views/backstage/finance/order/Detail')
  },
  {
      path: '/finance/order/confirm/:id',
      name: 'OrderConfirm',
      meta: {
        title: '订单支付'
      },
      props: true,
      component: () => import('@/views/backstage/finance/order/Confirm')
  },
  {
      path: '/finance/fillDetail/:id',
      name: 'FillDetail',
      meta: {
        title: '发票详情'
      },
      component: () => import('@/views/backstage/finance/FillDetail')
  },
  {
      path: '/finance/postAddress',
      name: 'PostAddress',
      meta: {
        title: '收件信息'
      },
      component: () => import('@/views/backstage/finance/PostAddress')
  }
]
