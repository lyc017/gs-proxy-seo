// 会员中心
export default [
  {
    path: '/member/certification',
    name: 'Certification',
    meta: {
      title: '实名认证'
    },
    component: () => import('@/views/backstage/member/Certification')
  },
  {
    path: '/member/account',
    name: 'Account',
    meta: {
      title: '账号管理'
    },
    component: () => import('@/views/backstage/member/Account')
  },
  {
    path: '/member/updatePwd',
    name: 'UpdatePwd',
    meta: {
      title: '修改密码'
    },
    component: () => import('@/views/backstage/member/UpdatePwd')
  },
  {
    path: '/member/updateMobile',
    name: 'UpdateMobile',
    meta: {
      title: '修改绑定手机'
    },
    component: () => import('@/views/backstage/member/UpdateMobile')
  },
  {
    path: '/member/certification/memberAuth',
    name: 'MemberAuth',
    meta: {
      title: '个人认证'
    },
    component: () => import('@/views/backstage/member/person/MemberAuth')
  },
  {
    path: '/member/certification/companyAuth',
    name: 'CompanyAuth',
    meta: {
      title: '企业认证'
    },
    component: () => import('@/views/backstage/member/company/CompanyAuth')
  },
  {
    path: '/member/certification/person/:authType',
    name: 'CertAuth',
    meta: {
      title: '个人认证'
    },
    component: () => import('@/views/backstage/member/person/CertAuth')
  },
  {
    path: '/member/certification/company/bak',
    name: 'BakCompanyAuth',
    meta: {
      title: '打款认证'
    },
    component: () => import('@/views/backstage/member/company/BakCompanyAuth')
  },
  {
    path: '/member/certification/company/e4f',
    name: 'E4fCompanyAuth',
    meta: {
      title: '企业四要素'
    },
    component: () => import('@/views/backstage/member/company/E4fCompanyAuth')
  },
  {
    path: '/member/certification/company/bakConfirm',
    name: 'BakCompanyAuthConfirm',
    meta: {
      title: '打款确认'
    },
    component: () => import('@/views/backstage/member/company/BakCompanyAuthConfirm')
  }
]
