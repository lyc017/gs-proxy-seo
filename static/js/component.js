import gsNoData from '@/components/GsNoData' // 暂无数据
import gsUpload from '@/components/GsUpload' // 上传
import gsImage from '@/components/GsImage' // 图片
import gsPreviewImage from '@/components/GsPreviewImage' // 查看大图
import gsPagination from '@/components/GsPagination' // 翻页
import gsCaptcha from '@/components/GsCaptcha' // 滑块验证码
import gsTip from '@/components/GsTip' // 提示
import gsHead from '@/components/GsHead' // 头部
import gsCode from '@/components/GsCode' // 头部
import gsEditor from '@/components/GsEditor' // 头部
import gsCopy from '@/components/GsCopy' // 复制
// 暂无数据
const GsNoData = {
  install: function (Vue) {
    Vue.component('gsNoData', gsNoData)
  }
}

// 上传
const GsUpload = {
  install: function (Vue) {
    Vue.component('gsUpload', gsUpload)
  }
}

// 图片
const GsImage = {
  install: function (Vue) {
    Vue.component('gsImage', gsImage)
  }
}

// 查看大图
const GsPreviewImage = {
  install: function (Vue) {
    Vue.component('gsPreviewImage', gsPreviewImage)
  }
}

// 翻页
const GsPagination = {
  install: function (Vue) {
    Vue.component('gsPagination', gsPagination)
  }
}

// 验证码
const GsCaptcha = {
  install: function (Vue) {
    Vue.component('gsCaptcha', gsCaptcha)
  }
}

// 提示信息
const GsTip = {
  install: function (Vue) {
    Vue.component('gsTip', gsTip)
  }
}

// 提示信息
const GsHead = {
  install: function (Vue) {
    Vue.component('gsHead', gsHead)
  }
}

// 代码提示
const GsCode = {
  install: function (Vue) {
    Vue.component('gsCode', gsCode)
  }
}

// 文本编辑器
const GsEditor = {
  install: function (Vue) {
    Vue.component('gsEditor', gsEditor)
  }
}

// 文本复制
const GsCopy = {
  install: function (Vue) {
    Vue.component('gsCopy', gsCopy)
  }
}

export default {
  GsNoData,
  GsUpload,
  GsImage,
  GsPreviewImage,
  GsPagination,
  GsCaptcha,
  GsTip,
  GsHead,
  GsCode,
  GsEditor,
  GsCopy
}
