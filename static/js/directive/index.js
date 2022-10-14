import {copy} from '@/static/js/util/copy'
const vueDirective = {}
vueDirective.install = function (Vue) {
  // 复制文本
  Vue.directive('copy', {
    inserted: function (el, binding, vnode) {
      let className = 'copy'
      el.className = el.className + ' ' + className
      el.handler = () => {
        copy({
          text: binding.value,
          className: className
        })
      }
      el.addEventListener('click', el.handler)
    },
    unbind: function (el) {
      el.removeEventListener('click', el.handler)
    }
  })
// 金额
  Vue.directive('enterMoney', {
    bind(el, binding) {
      let flag = true
      let value = 0
      const target = el instanceof HTMLInputElement ? el : el.querySelector('input')
      target.addEventListener('compositionstart', e => {
        // 文字的输入之前
        flag = false
      })
      target.addEventListener('compositionend', e => {
        // 文字的输入之后
        flag = true
      })
      el.inputHandler = (e) => {
        if (flag && value !== Number(e.target.value)) {
          let tgValue = String(e.target.value)
          if (binding.value === 0) {
            e.target.value = tgValue.replace(/[^0-9]/g, '')
          } else if (binding.value === 1) {
            e.target.value = tgValue.replace(/^(\d*\.?\d{0,1}).*/, '$1')
          } else if (binding.value === 3) {
            e.target.value = tgValue.replace(/^(\d*\.?\d{0,3}).*/, '$1')
          } else {
            e.target.value = tgValue.replace(/^(\d*\.?\d{0,2}).*/, '$1')
          }
          value = Number(e.target.value)
          e.target.dispatchEvent(new Event('input'))
        }
      }
      el.blurHandler = (e) => {
        if (e.target.value[e.target.value.length - 1] === '.') {
          e.target.value = String(e.target.value.replace(/[^0-9]/g, ''))
          e.target.dispatchEvent(new Event('input'))
        }
      }
      target.addEventListener('input', el.inputHandler)
      target.addEventListener('blur', el.blurHandler)
    },
    unbind: function (el) {
      el.removeEventListener('input', el.inputHandler)
      el.removeEventListener('blur', el.blurHandler)
    }
  })
}
export default vueDirective
