<template>
  <div class="service-wrap">
    <div v-for="(item, index) in list" :key="index">
      <div class="title">
        <i class="iconfont icon-proxy-chanpin"></i>
        <span>{{item.title}}</span>
      </div>
      <div class="content" v-html="item.text"></div>
    </div>
  </div>
</template>

<script>
  import {SERVICE_TYPE_LIST} from '@/static/js/front/library'

  export default {
    name: 'ServiceComponent',
    data() {
      return {
        list: SERVICE_TYPE_LIST
      }
    },
    props: {
      active: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .service-wrap {
    padding: 20px;

    .title {
      font-size: 18px;

      .iconfont {
        font-size: 20px;
      }
    }

    .content {
      color: #333333;
      font-size: 14px;
      line-height: 30px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
</style>
