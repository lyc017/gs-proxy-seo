<template>
  <el-dialog :visible="scanDialog"
             :width="dialog.formWidth"
             @close="closeDialog"
             :close-on-click-modal="dialog.closeModal">
    <div slot="title">
      {{dialog.formTitle}}<span class="title-tip">(请不要关闭或刷新页面)</span>
    </div>
    <div class="scan-upload">
      <div class="scan-qr-code">
        <vue-qr :text="qrCode" :margin="0" colorDark="#000" colorLight="#fff" :logoScale="0.3" :size="240"></vue-qr>
        <div class="scan-tip">请打开<span class="gs-success">{{authType === 1 ? '支付宝' : '微信'}}</span>，扫取上方二维码进行认证</div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    name: 'AuthScan',
    data() {
      return {
        dialog: {
          formTitle: '认证二维码',
          formWidth: '320px',
          closeModal: false
        }
      }
    },
    props: {
      scanDialog: { // 弹框是否显示
        type: Boolean,
        default: false
      },
      authType: { // 弹框是否显示
        type: Number,
        default: 1
      },
      keyStatus: {
        type: String
      },
      qrCode: { // 弹框是否显示
        type: String,
        default: 'https:/h5/upload/upload/appUploa?imgType='
      }
    },

    watch: {
      'scanDialog': {
        handler(newVale) {
          if (newVale) {
            this.getStatus()
          }
        },
        immediate: true
      }
    },
    methods: {
      getStatus() {
        if (this.scanDialog) {
          this.$http.get('/authPerson/getStatus', {key: this.keyStatus}).then(({data}) => {
            if (data.authStatus === this.$const.AUTH_STATUS.AUTH_SUCCESS) {
              this.success('恭喜您，认证成功', () => {
                this.$router.push('/member/certification')
              })
            } else if (data.authStatus === this.$const.AUTH_STATUS.AUTH_IS_DOING) {
              setTimeout(() => {
                this.getStatus()
              }, 1000)
            } else {
              this.error('很遗憾，认证失败', () => {
                this.closeDialog()
              })
            }
          })
        }
      },
      closeDialog() {
        this.$emit('update:scanDialog', false)
      }
    }
  }
</script>

<style lang="less" scoped>
  .title-tip {
    margin-left: 8px;
    color: red;
    font-size: 12px;
  }

  .scan-upload {
    .scan-qr-code {
      padding: 10px;
      border: 1px dashed #999;
      text-align: center;
    }

    .scan-tip {
      margin-top: 8px;
      font-size: 12px;
    }
  }
</style>
