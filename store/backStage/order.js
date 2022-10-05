// 状态管理器
export default {
  payStatus: [
    {
      value: 0,
      name: '待支付'
    },
    {
      value: 1,
      name: '支付成功'
    },
    {
      value: 2,
      name: '支付失败'
    },
    {
      value: 3,
      name: '已失效'
    },
    {
      value: 4,
      name: '已取消'
    }
  ],
  invoice: [
    {
      value: 2,
      name: '电子发票'
    },
    {
      value: 1,
      name: '纸质发票'
    }
  ],
  orderType: {
    1: '新购',
    2: '升级',
    3: '续费'
  },
  payType: {
    0: '余额',
    1: '支付宝',
    2: '微信'
  }
}
