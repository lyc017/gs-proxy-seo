<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="企业四要素"></gs-head>
    </div>
    <div class="xms-flex-middle pad-15 gs-content-padding">
      <div class="gs-border-radius-shadow pad-15 bgfff">
        <gs-tip msg="进行企业四要素认证，请准备好公司营业执照，需法人扫码实名认证"></gs-tip>
        <div class="cert-auth-form">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px"
                   :size="$const.FORM_ATTRIBUTES.size">
            <el-row>
              <el-col :span="12">
                <el-form-item label="企业名称：" prop="companyName">
                  <el-input type="text" v-model="ruleForm.companyName" autocomplete="off" placeholder="请填写企业名称"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="统一社会信用代码：" prop="creditCode">
                  <el-input type="text" v-model="ruleForm.creditCode" autocomplete="off"
                            placeholder="请填写营业执照号码/统一社会信用代码"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="法人姓名：" prop="trueName">
                  <el-input type="text" v-model="ruleForm.trueName" autocomplete="off" placeholder="法人姓名"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="法人身份证号码：" prop="cardID">
                  <el-input type="text" v-model="ruleForm.cardID" autocomplete="off" placeholder="法人身份证号码"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="营业执照：" required>
                  <gs-upload @success="uploadImg">
                    <template v-slot:upload>
                      <div class="el-upload-dragger" style="width: 300px"><i class="el-icon-upload"></i>
                        <div class="el-upload__text"><em>点击立即上传</em></div>
                      </div>
                    </template>
                  </gs-upload>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-if="ruleForm.licenseImg">
                <el-form-item label="执照预览：">
                  <div class="image-preview">
                    <gs-image :src="ruleForm.licenseImg" :drag="true" :srcList="[ruleForm.licenseImg]"
                              @delete="ruleForm.licenseImg = ''"></gs-image>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="mg-t15 text-center">
              <el-button type="primary" @click="submitForm('ruleForm')" class="width-inline-240">提交认证</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <e4f-auth-type :dialogFormVisible.sync="dialogFormVisible" @success="e4fAuth"></e4f-auth-type>

    <auth-scan :scanDialog.sync="scan.scanDialog" :authType="ruleForm.authType" :keyStatus="scan.key"
               :qrCode="scan.qrCode"></auth-scan>
  </div>
</template>

<script>
  import {COMMON_REG} from '@/static/js/const/index'
  import E4fAuthType from '@/components/backstage/member/E4fAuthType'
  import AuthScan from '@/components/backstage/member/AuthScan'

  export default {
    name: 'E4fCompanyAuth',
    data() {
      return {
        dialogFormVisible: false,
        ruleForm: {
          companyName: '',
          creditCode: '',
          authType: 1,
          trueName: '',
          cardID: '',
          licenseImg: ''
        },
        scan: {
          key: '',
          qrCode: '', // 认证二维码
          scanDialog: false
        },
        rules: {
          companyName: [{required: true, message: '请输入企业名称', trigger: 'blur'}],
          creditCode: [{required: true, message: '请输入统一社会信用代码', trigger: 'blur'},
            {pattern: COMMON_REG.creditCode, message: '统一社会信用代码格式不对', trigger: 'blur'}],
          trueName: [{required: true, message: '请输入法人姓名', trigger: 'blur'}],
          cardID: [{required: true, message: '请输入法人身份证号码', trigger: 'blur'},
            {pattern: COMMON_REG.idCard, message: '法人身份证号码格式不对', trigger: 'blur'}]
        }
      }
    },
    components: {
      E4fAuthType,
      AuthScan
    },
    mounted() {
      this.query()
    },
    methods: {
      query() {
        this.$http.get('/authCompany/query', {showLoading: 1}).then(({status, data}) => {
          if (status === 200) {
            if (data.authCompany && (data.authCompany.authType === 1 || data.authCompany.authType === 2)) {
              delete data.authCompany.id
              this.ruleForm = {...this.ruleForm, ...data.authCompany}
            }
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.ruleForm.licenseImg === '') {
              this.alert('请上传营业执照')
              return false
            }
            this.dialogFormVisible = true
          }
        })
      },
      e4fAuth(authType) {
        this.ruleForm.authType = authType
        this.$http.form('/authCompany/add', this.ruleForm).then(({status, data}) => {
          if (status === 200) {
            this.scan.qrCode = data.qrCodeUrl
            this.scan.key = data.key
            this.scan.scanDialog = true
          }
        })
      },
      uploadImg(response) {
        if (response.ok) {
          this.ruleForm.licenseImg = response.imgUrl
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .cert-auth-form {
    margin: 30px 0;
  }

  .image-preview {
    height: 100px;
    width: 100px;
  }
</style>
