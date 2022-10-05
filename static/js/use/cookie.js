export function getCookie (name) {
  let cookie = document.cookie// 获取cookie字符串
  let cookieArray = cookie.split('; ')// 分割
  for (let i = 0; i < cookieArray.length; i++) {
    let arr = cookieArray[i].split('=')
    if (arr[0] === name) {
      return arr[1]
    }
  }
  return ''
}
/**
 * 写cookie的内容
 * @param {Object} callback
 */
export function setCookie (name, value) {
  let day = 30
  let exp = new Date()
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

export function cookieInit (Vue) {
  Vue.prototype.setCookie = function (name, value) {
    return setCookie(name, value)
  }

  Vue.prototype.getCookie = function (name) {
    return getCookie(name)
  }
}
