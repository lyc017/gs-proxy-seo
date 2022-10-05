// 处理数据展示
export function nameInit(Vue) {
  // 完整展示字段，没有数据时展示-
  Vue.prototype.completeName = function (value) {
    return value || '-'
  }
}
