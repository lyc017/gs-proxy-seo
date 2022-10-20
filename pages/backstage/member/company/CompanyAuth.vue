<template>
  <div class="xms-flex-wrap">
    <div class="xms-flex-headerOrBottom gs-top-padding gs-border-radius-shadow">
      <gs-head msg="企业认证"></gs-head>
    </div>
    <div class="xms-flex-middle gs-content-padding">
      <gs-tip msg="据《中华人民共和国网络安全法》等网络安全相关法律法规规定，按网监、公安等有关监管单位要求，云计算资源用户须完成用户实名认证。"></gs-tip>
      <div class="gs-border-radius-shadow pad-15 cert-list" @click="$router.push('/member/certification/company/e4f')">
        <div class="cert-list-img cert-list-card">
          <el-image :src="require('@/static/img/account/type-e4f.png')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>企业四要素<span class="orange-color">（即时完成）</span></h3></li>
          <li class="mg-t4">请提前准备好您的个人身份信息、营业执照</li>
          <li>需法人本人支付宝或微信扫码效验</li>
        </ul>
      </div>
      <div class="gs-border-radius-shadow pad-15 cert-list" @click="$router.push('/member/certification/company/bak')">
        <div class="cert-list-img cert-list-card">
          <el-image :src="require('@/static/img/account/type-man.png')">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <ul class="cert-list-info">
          <li><h3>打款认证<span class="orange-color">（1~3个工作日）</span></h3></li>
          <li class="mg-t4">请提前准备好企业的营业执照照片、企业对公账户</li>
          <li>{{$const.COMPANY_INFO.name}}会在1~3个工作日给贵公司对公账号转一笔金额随机的账款，请在收到款项后，进行打款确认</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CompanyAuth'
  }
</script>

<style scoped lang="less">
  .cert-list {
    padding: 30px 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    margin-bottom: 15px;

    .cert-list-img {
      width: 60px;
      height: 60px;
      margin-right: 30px;
      flex-grow: 0;
      flex-shrink: 1;
    }

    .cert-list-card {
      height: 46px;
    }

    .cert-list-info {
      font-size: 13px;
      line-height: 1.8;
      flex-grow: 1;
      flex-shrink: 0;
      cursor: pointer;
    }
  }
</style>
