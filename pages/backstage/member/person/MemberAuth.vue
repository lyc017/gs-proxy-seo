<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="个人认证"></gs-head>
    </div>
    <div class="xms-flex-middle gs-content-padding">
      <div class="gs-border-radius-shadow pad-15 cert-list" @click="$router.push('/member/certification/person/1')">
        <div class="cert-list-img">
          <el-image :src="require('@/static/img/account/type-ali.png')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>支付宝认证<span class="orange-color">（强烈推荐）</span></h3></li>
          <li class="mg-t4">请提前准备好您的个人支付宝，扫码进行实名认证</li>
        </ul>
      </div>
      <div class="gs-border-radius-shadow pad-15 cert-list" @click="$router.push('/member/certification/person/2')">
        <div class="cert-list-img">
          <el-image :src="require('@/static/img/account/type-wechat.png')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>微信认证</h3></li>
          <li class="mg-t4">请提前准备好您的个人微信，扫码进行实名认证</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MemberAuth'
  }
</script>

<style scoped lang="less">
  .cert-list {
    padding: 30px 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-bottom: 15px;
    cursor: pointer;

    .cert-list-img {
      width: 60px;
      height: 60px;
      margin-right: 30px;
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
