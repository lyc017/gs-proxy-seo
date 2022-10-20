<template>
  <el-dialog :title="dialog.formTitle"
             :visible="dialogFormVisible"
             :width="dialog.formWidth"
             custom-class="erp-dialog-wrap dialog-com-reset"
             @close="closeDialog"
             :close-on-click-modal="dialog.closeModal">
    <gs-tip :msg="'请如实填写贵公司银行账号收到【' + $const.COMPANY_INFO.name + '】的转账金额,连续错误次数不能超过3次，超过3次需要重新提交认证。'"></gs-tip>
    <div class="pad-15 bgfff">
      <div class="auth-confirm-form">
        <el-input placeholder="实际到账金额" v-model="price" clearable>
          <template slot="prepend">￥</template>
          <template slot="append">元</template>
        </el-input>
        <div class="auth-confirm-tip">剩余次数：{{count}}次</div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button :size="$const.FORM_ATTRIBUTES.size" @click="closeDialog">关 闭</el-button>
      <el-button :size="$const.FORM_ATTRIBUTES.size" type="primary" @click="check">确 认</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'AuthConfirm',
    data() {
      return {
        price: '',
        dialog: { // 弹框配置信息
          formTitle: '打款确认',
          formWidth: '600px',
          dialogFormVisible: false,
          closeModal: false
        },
        count: 0
      }
    },
    props: {
      dialogFormVisible: {
        type: Boolean,
        default: false
      },
      remainCount: {
        type: Number,
        default: 3
      },
      id: {
        type: Number,
        required: true
      }
    },
    watch: {
      'remainCount': {
        handler(newVale) {
          this.count = newVale
        },
        immediate: true
      }
    },
    methods: {
      check() {
        if (this.price === '') {
          this.alert('请输入实际到账金额')
          return false
        }

        if (!this.$const.COMMON_REG.decimal.test(this.price)) {
          this.alert('实际到账金额只能是数字且支持最多两位小数')
          return false
        }
        this.$http.post('/authCompany/check', {price: this.price, id: this.id}).then(({status, data}) => {
          if (status === 200) {
            if (data.code === 0) {
              this.success(data.msg, () => {
                this.$router.push('/member/certification')
              })
            } else if (data.code === 10010) {
              this.error(data.msg, () => {
                this.$router.push('/member/certification')
              })
            } else {
              this.alert(data.msg, () => {
                this.count = data.remainCount
              })
            }
          }
        })
      },
      closeDialog() {
        this.$emit('update:dialogFormVisible', false)
      }
    }
  }
</script>

<style lang="less" scoped>

  /deep/ .erp-dialog-wrap .el-dialog__body {
    max-height: 400px;
    overflow-y: auto;
  }

  .auth-confirm-form {
    margin: 30px auto;
    width: 240px;
  }

  .auth-confirm-tip {
    color: #999;
    text-align: center;
    margin-top: 8px;
    font-size: 12px;
  }
</style>
