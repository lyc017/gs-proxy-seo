import {HTTP_ENV} from '../const/index'

export default {
  env: {
    type: HTTP_ENV.DEV,
    [HTTP_ENV.PROD]: {
      gs_url: '//proxyapi.xuanfengyun.com', // 动态代理
      image_url: 'http://testimg.lxc.gunshitech.com' // 图片上传
    },
    [HTTP_ENV.TEST]: { // 测试
      gs_url: '//proxyapi.xms3.4846.com', // 动态代理
      image_url: 'http://testimg.lxc.gunshitech.com' // 图片上传
    },
    [HTTP_ENV.DEV]: { // 本地
      gs_url: '//proxyapi.xms3.4846.com', // 动态代理
      image_url: 'http://testimg.lxc.gunshitech.com' // 图片上传
    }
  },
  getReqBaseUrl(apiHostKey) {
    apiHostKey = apiHostKey || 'gs_url' // 默认成gs_url接口
    if (window.location.href.indexOf('local.') > -1) {
    } else if (window.location.href.indexOf('xms3.') > -1) {
      this.env.type = HTTP_ENV.TEST
    } else {
      this.env.type = HTTP_ENV.PROD
    }

    let url = this.env[this.env.type][apiHostKey]
    if (url.indexOf('http') === -1) {
      url = window.location.protocol + url
    }
    return url
  }
}