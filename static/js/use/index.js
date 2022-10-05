import {toastInit, messageConfirm} from './toast'
import {constantInit} from './constant'
import {nameInit} from './name'
import {numInit} from './num'
import {cookieInit} from './cookie'
/* eslint-disable */
const common = {}
common.install = function (Vue, options) {

  // 实名认证
  Vue.prototype.gsCertification = function (message) {
    if (!(typeof message === 'string' && message)) {
      message = '根据相关法律规定，使用云服务前必须先进行实名认证'
    }
    messageConfirm(message, {
      type: 'warning',
      title: '实名认证',
      confirmButtonText: '立即认证',
      cancelButtonText: '暂不认证'
    }).then(() => {
      this.$router.push({
        path: '/member/certification'
      })
    }).catch(() => {

    })
  }

  // 弹框
  toastInit(Vue)
  // 常量
  constantInit(Vue)
  // 名称展示
  nameInit(Vue)
  // 数字处理
  numInit(Vue)
  // cookie处理
  cookieInit(Vue);
};

export default common
