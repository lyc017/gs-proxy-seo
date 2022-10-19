<template>
<!--  <el-upload-->
<!--    :action="action"-->
<!--    :file-list="fileList"-->
<!--    :list-type="listType"-->
<!--    :headers="headers"-->
<!--    :show-file-list="false"-->
<!--    :accept="ACCEPT_TYPE[fileType]"-->
<!--    :on-preview="imagePreview"-->
<!--    :on-success="imageSuccess"-->
<!--    :on-progress="imageProgress"-->
<!--    :on-error="imageError"-->
<!--    :on-remove="imageRemove"-->
<!--    :before-upload="imageBeForeUpload"-->
<!--    :multiple="multiple"-->
<!--    :drag="drag"-->
<!--    :disabled="disabled"-->
<!--    :data="sendExtraData"-->
<!--    ref="myUpload"-->
<!--    v-show="show"-->
<!--  >-->
<!--    <slot name="upload">-->
<!--      <div :class="{'gs-upload-wrap' : listType === 'text'}" :style="styleObject">-->
<!--        <i class="el-icon-plus"></i>-->
<!--      </div>-->
<!--    </slot>-->
<!--  </el-upload>-->
</template>
<script>
  // import {mapState} from 'vuex'
  // import {UPLOAD_URL, FILE_TYPE, ACCEPT_TYPE, DEFAULT_SIZE} from '@/static/js/const/upload'

  export default {
    name: 'GsUpload',
    data() {
      return {
        // ACCEPT_TYPE,
        num: 0,
        fileList: [] // 数据数组
      }
    },
    props: {
      // action: { // 请求地址 默认为defaultUrl
      //   type: String,
      //   default: UPLOAD_URL.UPLOAD_IMG
      // },
      // listType: { // 文件列表的类型
      //   type: String,
      //   default: 'text'
      // },
      // width: { // 按钮宽度
      //   type: Number,
      //   default: DEFAULT_SIZE.width
      // },
      // height: { // 按钮高度
      //   type: Number,
      //   default: DEFAULT_SIZE.height
      // },
      // radius: { // 按钮圆角
      //   type: Number,
      //   default: DEFAULT_SIZE.radius
      // },
      // headers: {
      //   type: Object,
      //   default() {
      //     return {}
      //   }
      // },
      // extraData: { // 额外的参数
      //   type: Object,
      //   default() {
      //     return {}
      //   }
      // },
      // multiple: { // 是否支持多选
      //   type: Boolean,
      //   default: false
      // },
      // disabled: { // 是否禁用
      //   type: Boolean,
      //   default: false
      // },
      // drag: { // 是否支持拖拽
      //   type: Boolean,
      //   default: false
      // },
      // imgType: { // 图片类型，只有传图片时需要，没传默认IMG_C
      //   type: String,
      //   default: 'IMG_I'
      // },
      // fileType: {// 上传的文件类型,默认是图片
      //   type: String,
      //   default: FILE_TYPE.IMAGE
      // },
      // show: { // 是否显示上传按钮，暂时只有编辑器集成不需要显示
      //   type: Boolean,
      //   default: true
      // },
      // callbackType: { // 指接口返回的数据格式,默认是JSON
      //   type: String,
      //   default: 'JSON' // APP
      // }
    },
    computed: {
      // ...mapState({
      //   card: state => state.card
      // }),
      // sendExtraData() {
      //   return {
      //     ...this.extraData
      //   }
      // },
      // styleObject() { // 自定义样式
      //   if (this.listType === 'text') {
      //     return {
      //       'border-radius': `${this.radius}px`,
      //       width: `${this.width}px`,
      //       height: `${this.height}px`
      //     }
      //   } else {
      //     return {}
      //   }
      // }
    },
    methods: {
      // // 预览
      // imagePreview(file) {
      //   this.$emit('preview', file)
      // },
      // // 成功
      // imageSuccess(response, file, fileList) {
      //   // 清空fileList里的数据，暂时只有新增交易那边需要
      //   this.num++
      //   if (this.num === fileList.length) {
      //     this.num = 0
      //     this.$refs.myUpload.clearFiles()
      //   }
      //   response = this.responseTransform(response) // 转换返回后的数据格式
      //   file.response = response
      //   if (!response.ok) {
      //     this.alert(file.response.errMsg)
      //     this.$emit('fail', response, file, fileList)
      //     return
      //   }
      //   this.$emit('success', response, file, fileList)
      // },
      // responseTransform(response) {
      //   if (this.callbackType !== 'JSON') {
      //     let str = 'parent.callback('
      //     let index = response.indexOf(str) + str.length
      //     let strs = response.substring(index, response.indexOf(');')).split(',')
      //     let imgUrl = strs[1].substring(2, strs[1].length - 1)
      //     let imgObject = {
      //       imgUrl: imgUrl,
      //       oriUrl: strs[2].substring(2, strs[2].length - 1),
      //       imgWidth: (strs[3].substring(2, strs[3].length - 1).split('x')[0]).trim(),
      //       imgHeight: (strs[3].substring(2, strs[3].length - 1).split('x')[1]).trim()
      //     }
      //     if (imgUrl.indexOf('http') === -1) {
      //       imgObject.errMsg = imgUrl
      //       imgObject.ok = false
      //     } else {
      //       imgObject.ok = true
      //     }
      //     return imgObject
      //   }
      //   return response
      // },
      // // 移除
      // imageRemove(file, fileList) {
      //   this.$emit('remove', file, fileList)
      // },
      // // 异常
      // imageError(err, file, fileList) {
      //   this.$emit('error', err, file, fileList)
      // },
      // // 上传之前
      // imageBeForeUpload(file) {
      //   this.$emit('before', file)
      // },
      // imageProgress(event, file, fileList) {
      //   // console.log('event:%o', event)
      //   // console.log('file:%o', file)
      //   // console.log('fileList:%o', fileList)
      //   this.$emit('progress', file)
      // }
    }
  }
</script>

<style lang="less" scoped>
  /deep/ .gs-upload-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px dashed #c0ccda;

    .el-icon-plus {
      font-size: 32px;
      color: #8c939d;
    }
  }

  .gs-upload-wrap:hover {
    border-color: @mainBlue;
    color: @mainBlue;
  }
</style>
