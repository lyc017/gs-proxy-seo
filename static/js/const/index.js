import * as seo from './seo'
// 开发的环境
export const HTTP_ENV = {
  PROD: 'production', // 生产
  TEST: 'test', // 测试
  DEV: 'development' // 开发
}

// 表单的常量
export const FORM_ATTRIBUTES = {
  medium: 'medium',
  small: 'small',
  mini: 'mini',
  size: 'small'
}

// 表格属性常量
export const TABLE_ATTRIBUTES = {
  border: true,
  stripe: true,
  size: 'small'
}

// 常用的正则
export const COMMON_REG = {
  landline: /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/, // 座机号
  idCard: /\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 身份证
  creditCode: /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/, // 统一社会信用代码
  number: /^[0-9]*$/, // 数字
  mobile: /^[1][2,3,4,5,6,7,8.9][0-9]{9}$/, // 手机号
  phone: /^0\d{2,3}-?\d{7,8}$/, // 电话
  int: /^\+?[1-9]\d*$/, // 正整数
  decimal: /^[0-9]+\.{0,1}[0-9]{0,2}$/, // 两位小数
  float: /^[0-9]+\.{0,1}[0-9]{0,1}$/, // 一位小数
  scoreNum: /^[-+]?[0-9]+$/, // 积分设置 分值 正负数
  email: /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/, // 邮箱
  qq: /^[1-9][0-9]{4,10}$/,
  sevenNum: /^\d{1,7}(\.\d{1,2})?$/ // 最多7位整数，两个小数
}

export const GS_TOKEN = {
  gs_proxy_token: 'user'
}

export const COMPANY_INFO = {
  name: '厦门棍石科技有限公司',
  english: 'Xiamen Stick Stone Technology Co., Ltd.',
  introduction: '旋风云专注为企业和开发者提供高品质的代理云服务，包括HTTP、HTTPS、Socks代理，赋能于大规模数据采集。',
  origin: '旋风云开发团队由几个有深厚技术经验的工程师组成，我们自运营的产品每天用到的代理数以万计，为了让更多的公司和团队能从这些代理中受益，旋风云由此诞生。自运营的产品自2012年起开始使用自己搭建的代理服务，代理服务经历了长达十几年的不断打磨，非常高效稳定。',
  email: 'xuanfengyun@gunshitech.com',
  weixin: '微信扫一扫',
  productName: '旋风云',
  QQ: '2677163252',
  phone: '18059807808',
  qHref: 'http://wpa.qq.com/msgrd?V=3&uin=2677163252&Site=QQ客服&Menu=yes',
  record: '闽ICP备2022004406号-2'
}

// 认证状态
export const AUTH_STATUS = {
  AUTH_IS_DOING: -1, // 待审核
  AUTH_IS_NONE: 0, // 未认证
  AUTH_SUCCESS: 1, // 认证成功
  AUTH_IS_FAIL: 2, // 认证失败
  AUTH_IS_PAID: 3, // 已打款
  AUTH_IS_E4F: 4 // 四要素
}

export default {
  HTTP_ENV,
  FORM_ATTRIBUTES,
  TABLE_ATTRIBUTES,
  COMMON_REG,
  GS_TOKEN,
  COMPANY_INFO,
  AUTH_STATUS,
  seo: seo
}
