<template>
  <div class="update-mobile-wrap xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="修改绑定手机"></gs-head>
    </div>
    <el-card class="box-card">
      <el-steps :active="stepIndex">
        <el-step title="短信验证" description="填写新手机号验证"></el-step>
        <el-step title="完成" description="修改成功"></el-step>
      </el-steps>
      <div class="um-account">
        <el-form ref="submitForm" :model="form" :rules="rules" :size="$const.FORM_ATTRIBUTES.size" label-width="220px" v-if="stepIndex === 1">
          <el-form-item label="手机号：" prop="phone">
            <el-input class="width-inline-300" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="token">
            <el-input placeholder="请输入手机验证码" class="width-inline-200" v-model="form.token"></el-input>
            <gs-captcha class="width-inline-100" :phone="form.phone"></gs-captcha>
          </el-form-item>
          <el-form-item>
            <el-button @click="sendToken" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
        <div v-if="stepIndex === 2">
          <el-result icon="success" title="手机号修改成功">
            <template slot="extra">
              <el-button @click="$router.go(-1)" type="primary">返回</el-button>
            </template>
          </el-result>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
const MOBILE_FORM = {
  phone: '',
  token: ''
}
export default {
  name: 'UpdateMobile',
  data () {
    return {
      stepIndex: 1,
      form: {...MOBILE_FORM},
      rules: {
        phone: [{required: true, message: '请输入手机号', trigger: 'blur'}],
        token: [{required: true, message: '请输入手机验证码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    sendToken () {
      this.$refs.submitForm.validate((valid) => {
        if (valid) {
          this.$http.post('/user/updatePhone', this.form).then(({status, data}) => {
            if (status === 200) {
              this.stepIndex = 2
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .update-mobile-wrap{
    /deep/.el-result .icon-success{
      fill: @mainBlue;
    }
    .box-card{
      margin: 15px;
    }
    .um-account{
      margin-top: 50px;
    }
  }
</style>
