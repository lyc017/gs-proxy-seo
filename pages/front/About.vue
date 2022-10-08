<template>
  <div class="about-wrap min-box-height">
    <div class="main-contain">
      <div class="flex justify-center">
        <div class="title">
          <div class="name">{{companyInfo.name}}</div>
          <div class="english">{{companyInfo.english}}</div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="subTitle">公司简介</div>
          <div class="info">{{companyInfo.introduction}}</div>
        </div>
        <div class="content">
          <div class="subTitle">缘起</div>
          <div class="info">{{companyInfo.origin}}</div>
        </div>
        <div class="content">
          <div class="subTitle">联系我们</div>
          <div class="info">
            <div class="flex">
              <span class="mg-t8">电子邮箱：<gs-copy :text="companyInfo.email"></gs-copy></span>
            </div>
            <div class="flex">
              <span class="mg-t8">客服QQ：<gs-copy :text="companyInfo.QQ"></gs-copy></span>
            </div>
            <div class="flex">
              <span class="mg-t8">客服电话：<gs-copy :text="companyInfo.phone"></gs-copy></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'About',
    head() {
      return this.$const.seo.ABOUT_MI
    },
    data() {
      return {
        companyInfo: {}
      }
    },
    mounted() {
      this.companyInfo = this.$const.COMPANY_INFO
    }
  }
</script>

<style scoped lang="less">
  .about-wrap {
    /deep/ .iconfont {
      font-size: 24px;
      margin-bottom: 10px;
    }

    background: white;

    .title {
      margin-top: 100px;

      .name {
        font-size: 32px;
      }

      .english {
        text-align: center;
      }
    }

    .content-wrap {
      padding: 50px 0 0 15px;

      .content {
        padding-bottom: 40px;

        .subTitle {
          font-size: 24px;
        }

        .info {
          margin-top: 10px;
          color: #666666;
          font-size: 18px;

          a {
            color: @mainBlue;
          }
        }
      }
    }
  }
</style>
