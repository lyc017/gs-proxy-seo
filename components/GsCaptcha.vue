<template>
  <div>
    <el-button type="primary" @click="sentTokenCaptcha" :disabled="!code.isShowCode">
      {{getCodeText}}
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: {
          isShowCode: true, // 是否可以获取验证码
          second: 60 // 倒计时
        }
      }
    },
    props: {
      phone: {
        type: String,
        required: true
      }
    },
    computed: {
      getCodeText() { // 按钮文本
        let text = '获取验证码'
        if (!this.code.isShowCode) {
          text = `${this.code.second}秒后获取`
        }
        if (this.code.second === 60) {
          text = '获取验证码'
        }
        return text
      }
    },
    methods: {
      // 显示腾讯验证码
      sentTokenCaptcha() {
        if (this.phone === '') {
          this.alert('手机号码不能为空')
          return false
        }

        if (!this.$const.COMMON_REG.mobile.test(this.phone)) {
          this.alert('手机号格式不正确')
          return false
        }

        if (this.code.isShowCode) {
          // eslint-disable-next-line
          new TencentCaptcha(
            '2019662301',
            this.sendToken, {}
          ).show()
        }
      },
      // 发送验证码
      sendToken(res) {
        if (res && res.ticket !== '' && res.ticket !== null) {
          this.$http.post('/phoneToken/sendToken', {
            phone: this.phone,
            qqTicket: res.ticket,
            qqRandstr: res.randstr
          }).then(({status, data}) => {
            if (status === 200) {
              if (data && data.code === '2') {
                this.alert('本次验证码采用语音的方式发送，请注意接听来电')
              } else {
                this.success('验证码发送成功')
              }
              this.initSecond()
            }
          })
        }
      },
      // 倒计时
      initSecond() {
        this.code.isShowCode = false
        if (this.code.second === 0) {
          this.code.isShowCode = true
          this.code.second = 60
        } else {
          this.code.second--
          setTimeout(() => {
            this.initSecond()
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
