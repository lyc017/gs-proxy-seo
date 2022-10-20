<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="修改密码"></gs-head>
    </div>
    <div class="xms-flex-middle gs-content-padding" v-if="user">
      <div class="gs-border-radius-shadow gs-background-white pad-15">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                 :size="$const.FORM_ATTRIBUTES.size" class="update-pwd-form">
          <el-form-item label="会员名：">{{user.loginName}}</el-form-item>
          <el-form-item label="旧密码：" prop="oldPwd">
            <el-input type="password" v-model="ruleForm.oldPwd" autocomplete="off" class="width-inline-300"></el-input>
          </el-form-item>
          <el-form-item label="新密码：" prop="loginPwd">
            <el-input type="password" v-model="ruleForm.loginPwd" autocomplete="off"
                      class="width-inline-300"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="loginPwd2">
            <el-input type="password" v-model="ruleForm.loginPwd2" autocomplete="off"
                      class="width-inline-300"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <gs-tip>
          <template v-slot:info>
            <ul>
              <li>A. 密码限制只能输入数字，大小写字母，@！._ 不能超过20位字符。</li>
              <li>B. 不要和用户名太相似，这样容易被人猜到。</li>
              <li>C. 不要用手机号、电话号码、生日、学号、身份证号等个人信息。</li>
            </ul>
          </template>
        </gs-tip>
      </div>
    </div>
  </div>
</template>

<script>
  const RULEFORM = {
    oldPwd: '',
    loginPwd: '',
    loginPwd2: ''
  }
  export default {
    name: 'UpdatePwd',
    data() {
      let validateOldPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入旧密码'))
        } else {
          callback()
        }
      }
      let validateNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else {
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (this.ruleForm.loginPwd !== '') {
          if (value === '') {
            callback(new Error('请再次输入密码'))
          } else if (value !== this.ruleForm.loginPwd) {
            callback(new Error('两次输入密码不一致!'))
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
      return {
        avatar: require('@/static/img/avatar_logo.png'),
        ruleForm: {...RULEFORM},
        user: null,
        rules: {
          oldPwd: [
            {required: true, validator: validateOldPass, trigger: 'blur'}
          ],
          loginPwd: [
            {required: true, validator: validateNewPass, trigger: 'blur'}
          ],
          loginPwd2: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.$store.dispatch('getUser').then((data) => {
        this.user = data
      })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updatePwd()
          } else {
            return false
          }
        })
      },
      updatePwd() {
        delete this.ruleForm.loginPwd2
        this.$http.post('/user/updatePwd', this.ruleForm).then(({status, data}) => {
          if (status === 200) {
            this.$confirm(data.msg, '提示', {
              confirmButtonText: '立即退出',
              cancelButtonText: '暂不退出',
              type: 'success'
            }).then(() => {
              this.logout()
            }).catch(() => {
              this.ruleForm = {...RULEFORM}
            })
          }
        })
      },
      logout() {
        this.$store.dispatch('logout').then((data) => {
          this.success(data.msg, () => {
            this.$router.push('/')
          })
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped lang="less">

  .update-pwd-form {
    padding: 20px 160px 40px;
  }
</style>
