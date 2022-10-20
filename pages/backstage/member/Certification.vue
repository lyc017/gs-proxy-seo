<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="实名认证" :showRight="false">
        <template v-slot:right>
          <el-button type="text" icon="el-icon-view" :size="$const.FORM_ATTRIBUTES.size">查看认证记录</el-button>
        </template>
      </gs-head>
    </div>
    <div class="xms-flex-middle gs-content-padding">
      <gs-tip msg="据《中华人民共和国网络安全法》等网络安全相关法律法规规定，按网监、公安等有关监管单位要求，云计算资源用户须完成用户实名认证。"></gs-tip>
      <template v-if="personAuth">
        <div class="gs-border-radius-shadow pad-15 cert-list">
          <div class="cert-list-img">
            <el-image :src="require('@/static/img/account/personal.png')">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <ul class="cert-list-info">
            <li><h3 class="gs-success">恭喜，您已完成个人实名认证</h3></li>
            <li>认证途径：{{personAuth.authType === 1 ? '支付宝' : '微信'}}</li>
            <li>真实姓名：{{personAuth.trueName}}</li>
            <li>证件号码：{{personAuth.cardID.substring(0,10) + '****' + personAuth.cardID.substring(14,18)}}</li>
            <li>手机号码：{{user && user.phone}}</li>
          </ul>
        </div>
      </template>
      <template v-else-if="authCompany">
        <template v-if="authCompany.authStatus === $const.AUTH_STATUS.AUTH_SUCCESS">
          <div class="gs-border-radius-shadow pad-15 cert-list">
            <div class="cert-list-img">
              <el-image :src="require('@/static/img/account/company.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <ul class="cert-list-info">
              <li><h3 class="gs-success">恭喜，您已完成企业认证</h3></li>
              <li>企业名称：{{authCompany.companyName}}</li>
              <li>统一社会信用代码：{{authCompany.creditCode}}</li>
              <template v-if="authCompany.authType === 0">
                <li>开户银行：{{authCompany.bank}}</li>
                <li>银行账号：{{authCompany.bankAccount}}</li>
              </template>
              <template v-if="authCompany.authType === 1 || authCompany.authType === 2">
                <li>法人姓名：{{authCompany.trueName}}</li>
                <li>法人身份证号：{{authCompany.cardID}}</li>
              </template>
            </ul>
          </div>
        </template>
        <template v-else-if="authCompany.authStatus === $const.AUTH_STATUS.AUTH_IS_DOING
        || authCompany.authStatus === $const.AUTH_STATUS.AUTH_IS_PAID
        || authCompany.authStatus === $const.AUTH_STATUS.AUTH_IS_E4F">
          <div class="gs-border-radius-shadow pad-15 cert-list">
            <div class="cert-list-img">
              <el-image :src="require('@/static/img/account/company.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <ul class="cert-list-info">
              <li><h3 class="orange-color">企业认证进行中</h3></li>
              <li>企业名称：{{authCompany.companyName}}</li>
              <li>统一社会信用代码：{{authCompany.creditCode}}</li>
              <template v-if="authCompany.authType === 0">
                <li>开户银行：{{authCompany.bank}}</li>
                <li>银行账号：{{authCompany.bankAccount}}</li>
              </template>
              <template v-if="authCompany.authType === 1 || authCompany.authType === 2">
                <li>法人姓名：{{authCompany.trueName}}</li>
                <li>法人身份证号：{{authCompany.cardID}}</li>
              </template>
            </ul>
            <div class="cert-list-operator">
              <template v-if="authCompany.authStatus === $const.AUTH_STATUS.AUTH_IS_PAID">
                <el-button @click="$router.push('/member/certification/company/bakConfirm')"
                           :size="$const.FORM_ATTRIBUTES.medium" type="primary">打款确认
                </el-button>
              </template>
              <template v-else>
                企业信息审核中，请耐心等待
              </template>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="gs-border-radius-shadow pad-15 cert-list">
            <div class="cert-list-img">
              <el-image :src="require('@/static/img/account/personal.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <ul class="cert-list-info">
              <li><h3>个人认证</h3></li>
              <li>适用于个人用户</li>
              <li>可申请增值税普通发票</li>
              <li>可通过支付宝、微信进行认证</li>
            </ul>
            <div class="cert-list-operator">
              <el-button @click="$router.push('/member/certification/memberAuth')" :size="$const.FORM_ATTRIBUTES.medium"
                         type="primary">立即认证
              </el-button>
            </div>
          </div>
          <div class="gs-border-radius-shadow pad-15 cert-list">
            <div class="cert-list-img">
              <el-image :src="require('@/static/img/account/company.png')">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <ul class="cert-list-info">
              <li><h3 class="gs-error">企业认证失败</h3></li>
              <li>企业名称：{{authCompany.companyName}}</li>
              <li>统一社会信用代码：{{authCompany.creditCode}}</li>
              <template v-if="authCompany.authType === 0">
                <li>开户银行：{{authCompany.bank}}</li>
                <li>银行账号：{{authCompany.bankAccount}}</li>
              </template>
              <template v-if="authCompany.authType === 1 || authCompany.authType === 2">
                <li>法人姓名：{{authCompany.trueName}}</li>
                <li>法人身份证号：{{authCompany.cardID}}</li>
              </template>
            </ul>
            <div class="cert-list-operator">
              <el-button @click="$router.push('/member/certification/companyAuth')"
                         :size="$const.FORM_ATTRIBUTES.medium"
                         type="primary">重新认证
              </el-button>
            </div>
          </div>
        </template>
      </template>
      <template v-else>
        <div class="gs-border-radius-shadow pad-15 cert-list">
          <div class="cert-list-img">
            <el-image :src="require('@/static/img/account/personal.png')">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <ul class="cert-list-info">
            <li><h3>个人认证</h3></li>
            <li>适用于个人用户</li>
            <li>可申请增值税普通发票</li>
            <li>可通过支付宝、微信进行认证</li>
          </ul>
          <div class="cert-list-operator">
            <el-button @click="$router.push('/member/certification/memberAuth')" :size="$const.FORM_ATTRIBUTES.medium"
                       type="primary">立即认证
            </el-button>
          </div>
        </div>
        <div class="gs-border-radius-shadow pad-15 cert-list">
          <div class="cert-list-img">
            <el-image :src="require('@/static/img/account/company.png')">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <ul class="cert-list-info">
            <li><h3>企业认证</h3></li>
            <li>适用于合作商家、个人用户</li>
            <li>可申请增值税普通发票与专用发票</li>
            <li>可通过企业四要素、打款进行认证</li>
          </ul>
          <div class="cert-list-operator">
            <el-button @click="$router.push('/member/certification/companyAuth')" :size="$const.FORM_ATTRIBUTES.medium"
                       type="primary">立即认证
            </el-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Certification',
    data() {
      return {
        personAuth: 0,
        authCompany: null
      }
    },
    computed: {
      ...mapState({
        user: state => state.loginState.user
      })
    },
    mounted() {
      this.query()
    },
    methods: {
      query() {
        this.$http.get('/authCompany/query', {showLoading: 1}).then(({status, data}) => {
          if (status === 200) {
            this.personAuth = data.personAuth
            this.authCompany = data.authCompany
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .cert-list {
    padding: 20px 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-bottom: 15px;

    .cert-list-img {
      width: 120px;
      height: 120px;
      margin-right: 50px;
      flex-grow: 0;
      flex-shrink: 1;
    }

    .cert-list-info {
      font-size: 13px;
      line-height: 1.8;
      flex-grow: 1;
      flex-shrink: 0;
    }
  }
</style>
