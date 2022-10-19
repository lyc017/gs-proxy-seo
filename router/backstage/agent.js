// 财务管理
export default [
  {
    path: '/agent/buy',
    name: 'AgentBuy',
    meta: {
      title: '购买代理'
    },
    component: () => import('@/views/backstage/agent/Buy')
  },
  {
    path: '/agent/manage/:type',
    name: 'AgentManage',
    meta: {
      title: '代理管理'
    },
    component: () => import('@/views/backstage/agent/Manage')
  }
]
