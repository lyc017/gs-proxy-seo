<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="打款确认"></gs-head>
    </div>
    <div class="xms-flex-middle pad-15 gs-content-padding">
      <div class="gs-border-radius-shadow pad-15 bgfff">
        <gs-tip
          :msg="'企业实名认证审核中，【' + $const.COMPANY_INFO.name + '】会在1~3个工作日给贵公司银行账号转一笔金额随机的账款，请在收到款项后，进行打款确认'"></gs-tip>
        <div class="cert-auth-form">
          <el-form label-width="150px" :size="$const.FORM_ATTRIBUTES.size" v-if="authCompany !== null">
            <el-row>
              <el-col :span="12">
                <el-form-item label="企业名称：">
                  {{authCompany.companyName || '-'}}
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="统一社会信用代码：">
                  {{authCompany.creditCode || '-'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="企业地址：">
                  {{authCompany.addr || '-'}}
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="注册电话：">
                  {{authCompany.registerPhone || '-'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系电话：">
                  {{authCompany.contactPhone || '-'}}
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="开户银行：">
                  {{authCompany.bank || '-'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="银行账号：" prop="bankAccount">
                  {{authCompany.bankAccount || '-'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" v-if="authCompany.licenseImg">
                <el-form-item label="执照预览：">
                  <div class="image-preview">
                    <gs-image :src="authCompany.licenseImg" :srcList="[authCompany.licenseImg]"
                              :close="false"></gs-image>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="mg-t15 text-center">
              <el-button type="primary" @click="dialogFormVisible = true" class="width-inline-240">打款确认</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <auth-confirm :dialogFormVisible.sync="dialogFormVisible" :remainCount="remainCount"
                  :id="authCompany.id"></auth-confirm>
  </div>
</template>

<script>
  import AuthConfirm from '@/components/backstage/member/AuthConfirm'

  export default {
    name: 'BakCompanyAuthConfirm',
    data() {
      return {
        dialogFormVisible: false,
        authCompany: {
          id: 0
        },
        remainCount: 3
      }
    },
    mounted() {
      this.query()
    },
    components: {
      AuthConfirm
    },
    methods: {
      query() {
        this.$http.get('/authCompany/query').then(({status, data}) => {
          if (status === 200) {
            this.authCompany = data.authCompany
            this.remainCount = data.remainCount
          }
        })
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
