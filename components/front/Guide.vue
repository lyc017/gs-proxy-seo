<template>
  <div class="guide-wrap">
    <div v-for="(item, index) in list" :key="index">
      <div class="title">
        <i class="iconfont icon-proxy-chanpin"></i>
        <span>{{item.title}}</span>
      </div>
      <div class="code-list" v-if="item.list.length > 0">
        <span @click="handlerClick(item.path)" v-for="(item, index) in item.list" :key="index">{{item.name}}</span>
      </div>
      <div class="content" v-if="item.text !== ''" v-html="item.text"></div>
    </div>
    <div class="footer">
      Authorization: Basic NUUwMzM0MEI1NDkyMzEyNzpGOUY4QkNFMENGODA3RUM1
    </div>
  </div>
</template>

<script>
  import {GUIDE_LIST, LIBRARY_TYPE} from '@/static/js/front/library'

  export default {
    name: 'GuideComponent',
    data() {
      return {
        GUIDE_LIST
      }
    },
    props: {
      active: {
        type: String,
        default: LIBRARY_TYPE.TUNNEL_HTTP
      }
    },
    computed: {
      list() {
        let product = GUIDE_LIST.find(item => item.key === this.active)
        if (product) {
          return product.products
        }
        return []
      }
    },
    methods: {
      handlerClick(value) {
        this.$router.push({
          path: `/library/guide/${value}`
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/base';
  .guide-wrap {
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

    .code-list {
      margin-top: 15px;
      word-break: break-all;

      span {
        cursor: pointer;
        text-align: center;
        border: solid 1px #6F7F7E;
        width: 150px;
        line-height: 40px;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
      }

      span:hover {
        color: white;
        border: solid 1px @mainBlue;
        background: @mainBlue;
      }
    }

    .footer {
      margin-top: 15px;
      padding: 20px;
      background: #f3f7fb;
    }
  }
</style>
