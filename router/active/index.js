import Active from '@/pages/active/Index'
import ActiveIndex from '@/pages/active/ActiveIndex'
export default [
  {
    path: '/active/Index',
    name: 'Active',
    meta: {
      title: '动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: Active,
    children: [
      {
        path: '/active/index',
        name: 'ActiveIndex',
        meta: {
          title: '动态代理ip_隧道代理ip_爬虫代理-旋风云',
          checkLogin: false
        },
        component: ActiveIndex
      }
    ]
  }
]
