// import member from './member'
// import finance from './finance'
// import agent from './agent'
// import manager from './manager'
export default [
  {
    path: '/index',
    name: 'BackStage',
    component: () => import('@/views/backstage/Index'),
    children: [
      {
        path: '/index',
        name: 'RightIndex',
        meta: {
          title: '旋风云'
        },
        component: () => import('@/views/backstage/RightIndex'),
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
      // ...member,
      // ...finance,
      // ...agent,
      // ...manager
    ]
  }
]
