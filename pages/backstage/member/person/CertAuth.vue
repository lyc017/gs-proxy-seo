  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head :msg="title"></gs-head>
    </div>
    <div class="xms-flex-middle pad-15 gs-content-padding">
      <div class="gs-border-radius-shadow pad-15 bgfff">
        <gs-tip msg="据《中华人民共和国网络安全法》等网络安全相关法律法规规定，按网监、公安等有关监管单位要求，云计算资源用户须完成用户实名认证。"></gs-tip>
        <div class="cert-auth-form">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="真实姓名：" prop="trueName">
              <el-input type="text" v-model="ruleForm.trueName" autocomplete="off"
                        class="width-inline-240" :size="$const.FORM_ATTRIBUTES.size"></el-input>
            </el-form-item>
            <el-form-item label="身份证号：" prop="cardID">
              <el-input type="text" v-model="ruleForm.cardID" autocomplete="off"
                        class="width-inline-240" :size="$const.FORM_ATTRIBUTES.size"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                         :size="$const.FORM_ATTRIBUTES.size" class="width-inline-240">提交审核
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <gs-tip>
          <template v-slot:info>
            <ul>
              <li>1、当前账号剩余免费认证机会还有 <span class="orange-color">{{freeAuthRemainCount}}</span> 次，超出免费认证次数将收取每次 <span
                class="orange-color">1</span> 元认证费用；
              </li>
              <li>2、请确保姓名、身份证号码完全正确，请勿使用他人身份信息进行认证，否则会认证失败；</li>
              <li>3、请勿使用虚假信息认证，否则{{$const.COMPANY_INFO.name}}有权注销您的实名认证申请。</li>
            </ul>
          </template>
        </gs-tip>
      </div>
    </div>

    <auth-scan :scanDialog.sync="scan.scanDialog" :authType="authType" :keyStatus="scan.key" :qrCode="scan.qrCode"></auth-scan>
  </div>
</template>

<script>
  import {COMMON_REG} from '@/static/js/const/index'
  import AuthScan from '@/components/backstage/member/AuthScan'

  export default {
    name: 'CertAuth',
    data() {
      return {
        authType: parseInt(this.$route.params.authType),
        ruleForm: {
          trueName: '',
          cardID: ''
        },
        freeAuthRemainCount: 2,
        scan: {
          key: '',
          qrCode: '', // 认证二维码
          scanDialog: false
        },
        rules: {
          trueName: [{required: true, message: '请输入真实姓名', trigger: 'blur'}],
          cardID: [{required: true, message: '请输入身份证号', trigger: 'blur'},
            {pattern: COMMON_REG.idCard, message: '身份证号格式不对', trigger: 'blur'}]
        }
      }
    },
    computed: {
      title() {
        return this.authType === 1 ? '支付宝认证' : '微信认证'
      }
    },
    mounted() {
      this.authCompanyQuery()
    },
    methods: {
      authCompanyQuery() {
        this.$http.get('/authCompany/query').then(({status, data}) => {
          if (status === 200) {
            this.freeAuthRemainCount = data.freeAuthRemainCount
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageConfirm('请确保真实姓名与身份证号完全匹配，否则会导致认证失败', {
              type: 'warning',
              title: '认证确认',
              cancelButtonText: '取消',
              confirmButtonText: '确认'
            }).then(() => {
              this.ruleForm.authType = this.authType
              this.$http.form('/authPerson/generateQRCode', this.ruleForm).then(({status, data}) => {
                if (status === 200) {
                  this.scan.qrCode = data.qrCodeUrl
                  this.scan.key = data.key
                  this.scan.scanDialog = true
                }
              })
            })
          } else {
            return false
          }
        })
      }
    },
    components: {
      AuthScan
    }
  }
</script>

<style scoped lang="less">
  .cert-auth-form {
    margin: 80px 0 80px 150px;
  }

  .wx-auth {
    margin: 50px 0;
  }
</style>
