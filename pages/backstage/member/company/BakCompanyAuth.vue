<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="打款认证"></gs-head>
    </div>
    <div class="xms-flex-middle pad-15 gs-content-padding">
      <div class="gs-border-radius-shadow pad-15 bgfff">
        <gs-tip msg="企业实名认证通过银行公对公转账的方式进行核实，请如实填写信息"></gs-tip>
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
                <el-form-item label="企业地址：" prop="addr">
                  <el-input type="text" v-model="ruleForm.addr" autocomplete="off" placeholder="企业注册地址"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="注册电话：">
                  <el-input type="text" v-model="ruleForm.registerPhone" autocomplete="off" placeholder="注册电话"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系电话：" prop="contactPhone">
                  <el-input type="text" v-model="ruleForm.contactPhone" autocomplete="off" placeholder="联系电话"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="开户银行：" prop="bank">
                  <el-input type="text" v-model="ruleForm.bank" autocomplete="off" placeholder="开户银行"
                            class="width-inline-300"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="银行账号：" prop="bankAccount">
                  <el-input type="text" v-model="ruleForm.bankAccount" autocomplete="off" placeholder="银行账号"
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
  </div>
</template>

<script>
  import {COMMON_REG} from '@/static/js/const/index'

  export default {
    name: 'BakCompanyAuth',
    data() {
      return {
        ruleForm: {
          companyName: '',
          creditCode: '',
          addr: '',
          registerPhone: '',
          contactPhone: '',
          bank: '',
          bankAccount: '',
          licenseImg: ''
        },
        rules: {
          companyName: [{required: true, message: '请输入企业名称', trigger: 'blur'}],
          creditCode: [{required: true, message: '请输入统一社会信用代码', trigger: 'blur'},
            {pattern: COMMON_REG.creditCode, message: '统一社会信用代码格式不对', trigger: 'blur'}],
          addr: [{required: true, message: '请输入企业地址', trigger: 'blur'}],
          contactPhone: [{required: true, message: '请输入联系电话', trigger: 'blur'}],
          bank: [{required: true, message: '请输入开户银行', trigger: 'blur'}],
          bankAccount: [{required: true, message: '请输入银行账号', trigger: 'blur'}]
        }
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      query() {
        this.$http.get('/authCompany/query', {showLoading: 1}).then(({status, data}) => {
          if (status === 200) {
            if (data.authCompany && data.authCompany.authType === 0) {
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
            this.messageConfirm('请确保企业信息真实有效，否则会导致认证失败。确认提交认证？', {
              type: 'warning',
              title: '认证确认',
              cancelButtonText: '取消',
              confirmButtonText: '确认'
            }).then(() => {
              this.ruleForm.authType = this.authType
              this.$http.form('/authCompany/add', this.ruleForm).then(({status, data}) => {
                if (status === 200) {
                  this.success('提交成功', () => {
                    this.$router.replace('/member/certification')
                  })
                }
              })
            })
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
