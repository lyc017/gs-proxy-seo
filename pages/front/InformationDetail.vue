<template>
  <div class="information-detail-wrap min-box-height" v-if="information">
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mg-t15">
        <el-breadcrumb-item :to="{ path: '/information' }">行业资讯</el-breadcrumb-item>
        <el-breadcrumb-item>{{information.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title">{{information.title}}</div>
      <div class="info flex">
        <label>栏目：行业资讯</label>
        <div>
          <i class="el-icon-date mg-r8"></i>
          <span>{{information.ctime}}</span>
        </div>
      </div>
      <div class="content" v-html="information.content"></div>
      <div class="bottom">
        <div class="more">
          <a @click="getInformation(pre)">上一篇：{{pre ? pre.title : '没有了'}}</a>
          <a @click="getInformation(last)">下一篇：{{last ? last.title : '没有了'}}</a>
        </div>
      </div>
      <div class="recommend">
        <div class="recommend-title">
          <i class="el-icon-document"></i>
          <span>推荐阅读</span>
        </div>
        <div class="recommend-content">
          <div @click="getInformation(item.id)" v-for="(item, index) in recommends" :key="index">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InformationDetail',
    data() {
      return {
        information: null,
        recommends: [],
        pre: null,
        last: null
      }
    },
    async asyncData({ route, $http}){
      let res1 = await $http.get(`/main/information/get?id=${route.params.id}`)
      return {
        information: res1.data.information,
        recommends: res1.data.recommends,
        pre: res1.data.pre,
        last: res1.data.last
      }
    },
    methods: {
      getInformation(mode) {
        if (mode && mode.id) {
          this.$router.replace(`/information/detail/${mode.id}`)
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .information-detail-wrap {
    background: white;

    .main {
      /deep/ .el-breadcrumb {
        font-size: 16px;

        .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
          color: #606266 !important;
          font-weight: normal;
        }

        .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link:hover {
          color: @mainBlue !important;
        }

        .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
          color: #303133;
        }
      }

      padding: 15px;
      width: 1200px;
      margin: 0 auto;

      .title {
        margin-top: 30px;
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 14px;
      }

      .info {
        background: #f3f7fb;
        color: #6F7F7E;
        padding: 10px;

        label {
          margin-right: 40px;
        }
      }

      /deep/ .content {
        margin-top: 25px;

        .ql-align-center {
          text-align: center;
        }

        img {
          max-width: 1000px;
          margin: 10px;
        }
      }

      .bottom {
        margin-top: 25px;
        border-top: 1px solid #F3F7FB;

        .more {
          margin-top: 25px;

          a {
            height: 30px;
            display: flex;
          }

          a:hover {
            color: @mainBlue;
          }
        }
      }

      .recommend {
        background: #f3f7fb;
        padding: 15px;
        margin-top: 15px;
        color: #666666;

        .recommend-content {
          margin-top: 10px;
          line-height: 1.8;

          div {
            cursor: pointer;
          }

          div:hover {
            color: @mainBlue;
          }
        }
      }
    }
  }
</style>
