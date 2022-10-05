// 取消订单
function cancelOrder (Vue, obj, func) {
  Vue.messageConfirm('确定取消该订单?', {
  }).then(() => {
    Vue.$http.post('/payorder/cancel', {
      id: obj.id,
      showLoading: 1
    }).then(({status, data}) => {
      if (status === 200) {
        Vue.success('订单取消成功', () => {
          if (typeof (func) === 'function') {
            func()
          }
        })
      }
    })
  }).catch(() => {})
}

export default {
  cancelOrder
}
