<template>
  <div class="code-guide-wrap">
    <span @click="$router.go(-1)" class="back"><i class="el-icon-arrow-left"></i>返回</span>
    <div class="code-list">
      <span @click="subCode = item.value" :class="{'active': subCode === item.value}"
            v-for="(item, index) in codeArray"
            :key="index">{{item.name}}</span>
    </div>
    <div v-for="(item, index) in codeArray" :key="index">
      <gs-code v-if="item.value === subCode" :code="item.code" :language="language"></gs-code>
    </div>
  </div>
</template>

<script>
  import {GUIDE_CODE_LAN, LIBRARY_TYPE} from '@/static/js/front/library'

  export default {
    name: 'CodeGuide',
    data() {
      return {
        subCode: '',
        GUIDE_CODE_LAN
      }
    },
    props: {
      code: {
        type: String,
        default: LIBRARY_TYPE.TUNNEL_HTTP_JAVA
      }
    },
    watch: {
      code: {
        handler() {
          let array = GUIDE_CODE_LAN[this.code]
          if (array && array.length > 0) {
            this.subCode = array[0].value
          }
        },
        immediate: true
      }
    },
    computed: {
      codeArray() {
        return GUIDE_CODE_LAN[this.code]
      },
      language() {
        if (this.code === LIBRARY_TYPE.TUNNEL_HTTP_PYTHON) {
          return 'language-python'
        } else if (this.code === LIBRARY_TYPE.TUNNEL_HTTP_C) {
          return 'language-cs'
        } else if (this.code === LIBRARY_TYPE.TUNNEL_HTTP_PHP) {
          return 'language-php'
        } else if (this.code === LIBRARY_TYPE.TUNNEL_HTTP_GO) {
          return 'language-go'
        } else if (this.code === LIBRARY_TYPE.TUNNEL_HTTP_NODE) {
          return 'language-javascript'
        } else {
          return 'language-java'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/base';
  .code-guide-wrap {
    padding: 20px;

    .back {
      color: @mainBlue;
      cursor: pointer;
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

      span.active {
        color: @mainBlue;
        border: @mainBlue 1px solid;
      }

      span:hover {
        color: white;
        border: solid 1px @mainBlue;
        background: @mainBlue;
      }
    }
  }
</style>
