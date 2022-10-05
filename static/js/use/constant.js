// 支付状态
const payStatus = {
  0: '待支付',
  1: '支付成功',
  2: '支付失败',
  3: '已失效',
  4: '已取消'
}

// 支付状态颜色
const payStatusClass = {
  0: 'col-orange',
  1: 'col-green',
  2: 'col-red',
  3: 'col-red',
  4: ''
}

// 订单类型
const orderType = {
  1: '新购',
  2: '升级',
  3: '续费'
}

// 开具类型
const openType = {
  1: '个人',
  2: '公司'
}

// 开票介质
const medium = {
  1: '纸质',
  2: '电子'
}

// 发票状态
const invoiceStatus = {
  0: '待申请',
  1: '待开票',
  2: '已开票'
}

const invoiceType = {
  1: '普通发票',
  2: '专用发票'
}

// 静态常量集合
const constMap = {
  payStatus: payStatus,
  orderType: orderType,
  openType: openType,
  medium: medium,
  invoiceStatus: invoiceStatus,
  invoiceType: invoiceType,
  payStatusClass: payStatusClass
}

export function constantInit(Vue) {
  Vue.prototype.gsConst = function (type, key, defaultValue) {
    let value = constMap[type][key]
    if (!value && defaultValue) {
      value = defaultValue
    }
    return value
  }
}
