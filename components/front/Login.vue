<template>
  <div>
    <el-dialog
      :visible.sync="showSt"
      :show-close="false"
      :close-on-click-modal="false"
      custom-class="gps-login-dialog"
    >
      <div class="gps-login flex justify-center flex-wrap">
        <el-image :src="require('@/static/img/logo/logo.png')" class="gl-logo" fit="cover"></el-image>
        <div class="gl-body">
          <h4>
            <template v-if="mode == 'login'">用户登录</template>
            <template v-else-if="mode == 'register'">用户注册</template>
            <template v-else>找回密码</template>
          </h4>
          <el-form ref="form" :model="form">
            <template v-if="mode == 'login'">
              <el-form-item label="账号">
                <el-input v-model="form.loginName" placeholder="请输入用户名或手机号" clearable
                          @blur="getRemberPassword"></el-input>
              </el-form-item>
              <el-form-item class="gb-two">
                <div slot="label" class="flex  justify-between">
                  <div>密码</div>
                  <a class="light" @click="goForget">忘记密码?</a>
                </div>
                <div class="password-mode">
                  <el-input type="text" readonly autocomplete="off" class="em-hide-input"></el-input>
                  <el-input v-model="form.loginPwd" show-password clearable name="password" class="em-input"></el-input>
                </div>
              </el-form-item>
              <div class="gl-handler">
                <el-button type="primary" class="gl-login full-btn" @click="submit">立即登录</el-button>
                <div class="flex justify-between gl-other">
                  <div>
                    <el-checkbox v-model="isRemember"></el-checkbox>
                    记住密码
                  </div>
                  <div>没有帐户? <a @click="goRegister">去注册</a></div>
                </div>
              </div>
            </template>
            <template v-else>
              <el-form-item label="用户名" v-if="mode == 'register'">
                <el-input v-model="form.loginName" maxlength="20" type="text" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="form.phone" clearable type="text"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <div class="flex gl-code">
                  <el-input v-model="form.token" type="text" clearable></el-input>
                  <div class="gl-code-btn">
                    <gs-captcha :phone="form.phone"></gs-captcha>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="密码">
                <div class="password-mode">
                  <el-input type="text" readonly autocomplete="off" class="em-hide-input"></el-input>
                  <el-input v-model="form.loginPwd" show-password maxlength="20" clearable name="password"
                            class="em-input"></el-input>
                </div>
              </el-form-item>
              <div class="gl-agreement" v-if="mode == 'register'">
                <el-checkbox v-model="agreement"></el-checkbox>
                阅读并同意
                <router-link to="/library/protocol/register" target="_blank">《{{$const.COMPANY_INFO.productName}}用户注册协议》
                </router-link>
              </div>
              <div class="gl-handler">
                <template v-if="mode == 'register'">
                  <el-button type="primary" class="gl-login full-btn" @click="submit" >立即注册
                  </el-button>
                </template>
                <template v-else>
                  <el-button type="primary" class="gl-login full-btn" @click="submit">设置新密码</el-button>
                </template>
                <div class="flex justify-center gl-other">
                  <div>已经有帐户了? <a @click="goLogin">去登录</a></div>
                </div>
              </div>
            </template>
          </el-form>
        </div>
        <div class="gl-close" @click="close"><i class="el-icon-close"></i></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        showSt: false,
        mode: '', // login登录 register注册 forget忘记密码
        form: {
          loginName: '',
          phone: '',
          loginPwd: '',
          token: ''
        },
        isRemember: true, // 是否记住密码
        agreement: false, // 用户注册协议
        readonlySt: true
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      resource: {
        type: String,
        default: 'login'
      },
      path: { // 登陆后跳转的地址
        type: String,
        default: '/index'
      }
    },
    watch: {
      show: {
        handler() {
          this.showSt = this.show
          this.mode = this.resource
          this.isRemember = true
          this.reset()
        },
        immediate: true
      },
      resource: {
        handler() {
          this.mode = this.resource
        },
        immediate: true
      },
      mode: {
        handler() {
          this.reset()
        },
        immediate: true
      }
    },
    components: {},
    methods: {
      // 重置
      reset() {
        this.form = Object.assign({}, this.form, {
          loginName: '',
          phone: '',
          loginPwd: '',
          token: ''
        })
      },
      // 验证
      getPhone(type, value, name = '手机号') {
        //  手机号 type 1判断格式
        let reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/
        let status = true
        if (value === '') {
          this.alert('请输入' + name)
          status = false
        } else if (!reg.test(value) && type === 1) {
          this.alert(name + '格式错误')
          status = false
        }
        return status
      },
      getPassword(type, value, name = '密码') {
        //  手机号 type 1判断格式
        let reg = /^[A-Za-z0-9@!._]+$/
        let status = true
        if (value === '') {
          this.alert('请输入' + name)
          status = false
        } else if (!reg.test(value) && type === 1) {
          this.alert(name + '格式错误:只能输入数字，大小写字母，@！._ ')
          status = false
        }
        return status
      },
      getParams() {
        let obj = JSON.parse(JSON.stringify(this.form))
        let url = ''
        let params = {
          showLoading: 1
        }
        let newObj = {}
        if (this.mode === 'login') {
          if (!this.getPhone(0, obj.loginName, '账号')) return false
          if (!this.getPassword(0, obj.loginPwd)) return false
          url = '/login'
          newObj = {
            loginName: obj.loginName,
            t: (new Date()).getTime()
          }
        } else {
          url = '/user/resetPwd'
          if (this.mode === 'register') {
            if (obj.loginName === '') {
              this.alert('请输入用户名')
              return false
            } else if (obj.loginName.length < 2 || obj.loginName.length > 20) {
              this.alert('用户名格式错误：必须是2~20个字符')
              return false
            }
            url = '/user/add'
            params.loginName = obj.loginName
          }
          if (!this.getPhone(1, obj.phone)) return false
          if (obj.token === '') {
            this.alert('请输入验证码')
            return false
          }
          if (!this.getPassword(1, obj.loginPwd)) return false
          newObj = {
            phone: obj.phone,
            token: obj.token
          }
        }
        newObj.loginPwd = this.$util.encrypt(obj.loginPwd)
        return {
          params: Object.assign(params, newObj),
          url
        }
      },
      // 存取密码
      getRemberPassword() {
        let name = this.Base64.encode('ln_' + this.form.loginName)
        let password = localStorage.getItem(name)
        if (password) {
          this.form.loginPwd = this.Base64.decode(password)
          this.isRemember = true
        } else {
          this.form.loginPwd = ''
        }
      },
      setRemberPassword() {
        let name = this.Base64.encode('ln_' + this.form.loginName)
        let password = this.Base64.encode(this.form.loginPwd)
        if (this.isRemember) {
          localStorage.setItem(name, password)
        } else {
          this.clearRemberPassword(name)
        }
      },
      clearRemberPassword(name) {
        // 清楚缓存
        localStorage.removeItem(name)
      },
      // 登录
      goLogin() {
        this.mode = 'login'
      },
      // 忘记密码
      goForget() {
        this.mode = 'forget'
      },
      // 注册
      goRegister() {
        this.mode = 'register'
      },
      submit() {
        let obj = this.getParams()
        if (obj) {
          if (this.mode === 'register' && !this.agreement) {
            this.alert(`请先阅读并同意《${this.$const.COMPANY_INFO.productName}用户注册协议》`)
            return false
          }
          this.$http.post(obj.url, obj.params).then(({status, data}) => {
            if (status === 200) {
              this.success(data.msg, () => {
                if (this.mode === 'login') {
                  this.setRemberPassword()
                  this.$store.commit('updateToken', obj.params.loginName)
                  this.$router.push(this.path)
                } else {
                  if (this.mode === 'forget') this.clearRemberPassword(this.Base64.encode('ln_' + this.form.phone))
                  this.goLogin()
                }
              })
            }
          })
        }
      },
      close() {
        this.$emit('update:show', false)
      }
    }

  }
</script>

<style scoped lang="less">
  @import '~@/static/css/front/login';

</style>
