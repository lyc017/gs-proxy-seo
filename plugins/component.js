import Vue from 'vue'
import GsNoData from '@/components/GsNoData' // 暂无数据
import GsUpload from '@/components/GsUpload' // 上传
import GsImage from '@/components/GsImage' // 图片
import GsPreviewImage from '@/components/GsPreviewImage' // 查看大图
import GsPagination from '@/components/GsPagination' // 翻页
import GsCaptcha from '@/components/GsCaptcha' // 滑块验证码
import GsTip from '@/components/GsTip' // 提示
import GsHead from '@/components/GsHead' // 头部
import GsCode from '@/components/GsCode' // 头部
import GsEditor from '@/components/GsEditor' // 头部
import GsCopy from '@/components/GsCopy' // 复制
let arr = {
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
for (let key in arr) {
  Vue.component(key,arr[key])
}
