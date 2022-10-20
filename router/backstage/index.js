import member from '@/router/backstage/member'
// import finance from './finance'
// import agent from '@/router/backstage/agent'
import manager from '@/router/backstage/manager'
import BackStage from '@/pages/backstage/Index'
import RightIndex from '@/pages/backstage/RightIndex'
export default [
  {
    path: '/index',
    name: 'BackStage',
    component: BackStage,
    children: [
      {
        path: '/index',
        name: 'RightIndex',
        meta: {
          title: '旋风云'
        },
        component: RightIndex,
        children: []
      },
      // {
      //   path: '/test',
      //   name: 'Test',
      //   meta: {
      //     title: '组件测试'
      //   },
      //   component: () => import('@/views/test/Index')
      // },
      // {
      //   path: '/mock',
      //   name: 'Mock',
      //   meta: {
      //     title: '模拟数据'
      //   },
      //   component: () => import('@/views/test/Mock')
      // },
      ...member,
      // ...finance,
      // ...agent,
      ...manager
    ]
  }
]
