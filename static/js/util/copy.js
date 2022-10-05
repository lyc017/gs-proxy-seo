import Clipboard from 'clipboard'
import { success, error } from '@/assets/js/use/toast'

// 默认配置
const defaultConfig = {
  text: '',
  className: 'wechat-copy',
  successTip: '复制成功',
  errorTip: '该浏览器不支持自动复制',
  success: () => {
    // 回调函数
  }
}

/**
 * 参数param可为字符串或对象，如果需要回调函数，必须使用对象传值
 * @param param
 */
export function copy (param) {
  let config = {}
  param = param || {}
  if (typeof param === 'string') {
    config = Object.assign({}, defaultConfig, {text: param})
  } else {
    config = Object.assign({}, defaultConfig, param)
  }

  let clipboard = new Clipboard('.' + config.className, {
    text: function () {
      return config.text
    }
  })

  clipboard.on('success', e => {
    success(config.successTip, () => {
      config.success()
      clipboard.destroy()
    })
  })

  clipboard.on('error', e => {
    // 不支持复制
    error(config.errorTip, () => {
      // 释放内存
      clipboard.destroy()
    })
  })
}
