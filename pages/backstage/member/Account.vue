<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="账号管理" :showRight="false"></gs-head>
    </div>
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <div class="account-header">
        <div class="account-header-avatar">
          <el-image :src="avatar">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="account-header-info" v-if="user">
          <li><span>会员名：</span><gs-copy :text="user.loginName"></gs-copy></li>
          <li><span>认证状态：</span>
            <span v-if="user.personAuth === 1 || user.companyAuth === 1" class="gs-success"><i class="el-icon-circle-check mg-r8"></i>已认证</span>
            <span v-else @click="$router.push({path: '/member/certification'})" class="gs-error cursor-p"><i class="el-icon-warning-outline mg-r8"></i>未认证</span>
          </li>
          <li><span>会员等级：</span><span class="orange-color">{{user.vipName}}</span><span v-if="user.ratio" class="mg-l8">(享<span class="gs-error">{{user.ratio * 10}}折</span>优惠)</span></li>
          <li><span class="tip">提高等级会员，享受更高优惠，请联系客服</span></li>
        </ul>
      </div>
    </div>
    <div class="xms-flex-middle gs-content-padding">
      <div class="gs-border-radius-shadow gs-background-white pad-15">
        <div class="account-detail-list">
          <div class="account-detail-left">登录密码</div>
          <div class="account-detail-center">安全性高的密码可以使帐号更安全，建议您定期更换密码。</div>
          <div class="account-detail-right">
            <span class="bind-status gs-success"><i class="el-icon-circle-check mg-r8"></i>已设置</span>
            <el-button :size="$const.FORM_ATTRIBUTES.mini" type="primary" icon="el-icon-edit" @click="$router.push('/member/updatePwd')">修改</el-button>
          </div>
        </div>
        <div class="account-detail-list">
          <div class="account-detail-left">手机绑定</div>
          <div class="account-detail-center">您的验证手机：<span class="orange-color">{{user && user.phone}}</span>。若已丢失或停用，请立即更换。</div>
          <div class="account-detail-right">
            <span v-if="user && user.phone" class="bind-status gs-success"><i class="el-icon-circle-check mg-r8"></i>已设置</span>
            <span v-else class="bind-status gs-error"><i class="el-icon-warning-outline mg-r8"></i>未设置</span>
            <el-button :size="$const.FORM_ATTRIBUTES.mini" type="primary" icon="el-icon-edit" @click="$router.push('/member/updateMobile')">修改</el-button>
          </div>
        </div>
<!--        <div class="account-detail-list">-->
<!--          <div class="account-detail-left">邮箱绑定</div>-->
<!--          <div class="account-detail-center">您的验证邮箱：<span class="orange-color">inu******@163.com</span>。绑定认证后可用于邮箱找回密码、接收业务相关提醒等，保障您的账户更加安全。-->
<!--          </div>-->
<!--          <div class="account-detail-right">-->
<!--            <span class="bind-status gs-error"><i class="el-icon-warning-outline mg-r8"></i>未设置</span>-->
<!--            <el-button :size="$const.FORM_ATTRIBUTES.mini" type="primary" icon="el-icon-edit">修改</el-button>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Account',
    data() {
      return {
        avatar: require('@/static/img/avatar_logo.png'),
        user: null
      }
    },
    mounted() {
      this.$store.dispatch('getUser', true).then((data) => {
        this.user = data
      })
    }
  }
</script>

<style scoped lang="less">
  .account-header {
    padding: 20px 50px;
    display: flex;

    .account-header-avatar {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }

    .account-header-info {
      font-size: 15px;
      line-height: 1.8;

      .tip {
        font-size: 12px;
        color: #999;
        margin-left: 75px;
      }
    }
  }

  .account-detail-list {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 14px;
    background-color: #F3F7FB;
    margin-bottom: 15px;

    .account-detail-left {
      font-weight: bold;
      font-size: 16px;
      flex-shrink: 1;
      flex-grow: 0;
      margin-right: 50px;
    }

    .account-detail-center {
      color: #6F7F7E;
      flex-shrink: 0;
      flex-grow: 1;
    }

    .account-detail-right {
      display: flex;
      flex-shrink: 1;
      flex-grow: 0;

      .bind-status {
        display: flex;
        align-items: center;
        border-right: 1px solid #E5E9ED;
        padding-right: 15px;
        margin-right: 15px;

        i {
          font-size: 18px;
        }
      }
    }
  }
</style>
