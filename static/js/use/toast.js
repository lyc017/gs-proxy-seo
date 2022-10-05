import {Loading, Message, MessageBox} from 'element-ui'

// 获取提示配置
function getToastConfig(defaultConfig, message, callback) {
  if (typeof message === 'string') {
    defaultConfig.message = message
  } else {
    defaultConfig = Object.assign({}, defaultConfig, message)
  }

  if (typeof (callback) === 'function') {
    defaultConfig.onClose = callback
  }

  return defaultConfig
}

function getDuration(text) {
  let duration = 2000
  if (text) {
    let length = text.length
    if (length < 5) {
      duration = 1000
    } else if (length > 5 && length < 10) {
      duration = 2000
    } else if (length > 10) {
      duration = 3000
    }
  }
  return duration
}

/**
 * 提示
 * @param message 可以是对象或字符串
 *  * @param callback
 */
export function alert(message, callback, type) {
  type = type || 'warning'
  let config = getToastConfig({
    dangerouslyUseHTMLString: true,
    customClass: 'msg-info-index',
    type: type
  }, message, callback)

  config.duration = getDuration(config.message)
  Message(config)
}

/**
 * 成功
 * @param message
 * @param callback
 */
export function success(message, callback) {
  alert(message, callback, 'success')
}

/**
 * 失败
 * @param message
 * @param callback
 */
export function error(message, callback) {
  alert(message, callback, 'error')
}

/**
 * 显示加载中
 * @param message
 * @param callback
 */
let loadingInstance = null

export function loading(text) {
  text = text || '正在加载...'
  if (!loadingInstance) {
    loadingInstance = Loading.service({
      lock: true, // 是否锁屏
      fullscreen: false,
      text: text, // 加载动画的文字
      spinner: 'el-icon-loading', // 引入的loading图标
      body: true,
      customClass: 'loading-mask'
    })
  }
  return loadingInstance
}

// 清除提示
export function clearLoading() {
  if (loadingInstance) {
    loadingInstance.close()
    loadingInstance = null
  }
}

/**
 * 提示框
 * @param options
 * @returns {Promise<MessageBoxData>}
 */
export function messageBox(options) {
  const param = {
    type: 'error',
    confirmButtonText: '确定',
    showCancelButton: false,
    closeOnClickModal: false, // 是否可通过点击遮罩关闭 MessageBox
    title: '提示',
    message: ''
  }
  if (typeof options === 'object') Object.assign(param, options)
  if (typeof options === 'string') param.message = options
  return MessageBox(param)
}

/**
 * 确认框
 * @param message
 * @param options
 * @returns {Promise<MessageBoxData>}
 */
export function messageConfirm(message, options = {}) {
  const param = {
    type: 'warning',
    title: '提示'
  }
  Object.assign(param, options)
  return MessageBox.confirm(message, param)
}

export function toastInit(Vue) {
  Vue.prototype.alert = function (message, callback) {
    alert(message, callback)
  }

  Vue.prototype.success = function (message, callback) {
    success(message, callback)
  }

  Vue.prototype.error = function (message, callback) {
    error(message, callback)
  }

  Vue.prototype.loading = function (message) {
    return loading(message)
  }

  Vue.prototype.messageBox = function (options) {
    return messageBox(options)
  }

  Vue.prototype.messageConfirm = function (options) {
    return messageConfirm(options)
  }

  Vue.prototype.clearLoading = function () {
    clearLoading()
  }
}
