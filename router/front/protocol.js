// 协议
import NetworkSecurity from '@/pages/front/protocol/NetworkSecurity'
import UserRegister from '@/pages/front/protocol/UserRegister'
import UserPrivacy from '@/pages/front/protocol/UserPrivacy'
export default [
  {
    path: '/protocol/networkSecurity',
    name: 'NetworkSecurity',
    meta: {
      title: '网络安全协议_动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: NetworkSecurity
  },
  {
    path: '/protocol/userRegister',
    name: 'UserRegister',
    meta: {
      title: '用户注册协议_动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: UserRegister
  },
  {
    path: '/protocol/userPrivacy',
    name: 'UserPrivacy',
    meta: {
      title: '用户隐私协议_动态代理_隧道代理_隧道代理搭建-旋风云',
      checkLogin: false
    },
    component: UserPrivacy
  }
]
