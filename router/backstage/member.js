// 会员中心
import Certification from '@/pages/backstage/member/Certification'
import Account from '@/pages/backstage/member/Account'
import UpdatePwd from '@/pages/backstage/member/UpdatePwd'
import UpdateMobile from '@/pages/backstage/member/UpdateMobile'
import MemberAuth from '@/pages/backstage/member/person/MemberAuth'
import CompanyAuth from '@/pages/backstage/member/company/CompanyAuth'
import CertAuth from '@/pages/backstage/member/person/CertAuth'
import BakCompanyAuth from '@/pages/backstage/member/company/BakCompanyAuth'
import E4fCompanyAuth from '@/pages/backstage/member/company/E4fCompanyAuth'
import BakCompanyAuthConfirm from '@/pages/backstage/member/company/BakCompanyAuthConfirm'
export default [
  {
    path: '/member/certification',
    name: 'Certification',
    meta: {
      title: '实名认证'
    },
    component: Certification
  },
  {
    path: '/member/account',
    name: 'Account',
    meta: {
      title: '账号管理'
    },
    component: Account
  },
  {
    path: '/member/updatePwd',
    name: 'UpdatePwd',
    meta: {
      title: '修改密码'
    },
    component: UpdatePwd
  },
  {
    path: '/member/updateMobile',
    name: 'UpdateMobile',
    meta: {
      title: '修改绑定手机'
    },
    component: UpdateMobile
  },
  {
    path: '/member/certification/memberAuth',
    name: 'MemberAuth',
    meta: {
      title: '个人认证'
    },
    component: MemberAuth
  },
  {
    path: '/member/certification/companyAuth',
    name: 'CompanyAuth',
    meta: {
      title: '企业认证'
    },
    component: CompanyAuth
  },
  {
    path: '/member/certification/person/:authType',
    name: 'CertAuth',
    meta: {
      title: '个人认证'
    },
    component: CertAuth
  },
  {
    path: '/member/certification/company/bak',
    name: 'BakCompanyAuth',
    meta: {
      title: '打款认证'
    },
    component: BakCompanyAuth
  },
  {
    path: '/member/certification/company/e4f',
    name: 'E4fCompanyAuth',
    meta: {
      title: '企业四要素'
    },
    component: E4fCompanyAuth
  },
  {
    path: '/member/certification/company/bakConfirm',
    name: 'BakCompanyAuthConfirm',
    meta: {
      title: '打款确认'
    },
    component: BakCompanyAuthConfirm
  }
]
