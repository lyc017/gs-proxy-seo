<template>
  <div class="question-wrap">
    <el-card class="box-card" v-for="(item, index) in list" :key="index">
      <div slot="header" class="clearfix">
        <span class="question">{{item.question}}</span>
      </div>
      <div class="answer" @click="hopRouting($event)" v-html="item.answer"></div>
    </el-card>

    <login :show.sync="login.showSt" :resource="login.resource" :path="login.path"></login>

  </div>
</template>

<script>
  import {QUESTION_LIST} from '@/static/js/front/library'
  import Login from '@/components/front/Login'

  export default {
    name: 'QuestionComponent',
    data() {
      return {
        login: {
          path: '',
          showSt: false,
          resource: ''
        }
      }
    },
    props: {
      active: {
        type: String,
        default: ''
      }
    },
    computed: {
      list() {
        let product = QUESTION_LIST.find(v => v.key === this.active)
        if (product) {
          return product.products
        }
        return []
      }
    },
    components: {
      Login
    },
    methods: {
      hopRouting(e) {
        let target = e.target
        if (target.nodeName.toLowerCase() === 'a' &&
          (target.getAttribute('data-type') === 'fill' || target.getAttribute('data-type') === 'buy')) {
          let token = this.$store.getters.token()
          if (token) {
            this.$router.push(target.getAttribute('data-href'))
          } else {
            this.login = {
              showSt: true,
              resource: 'login',
              path: target.getAttribute('data-href')
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .question-wrap {
    /deep/ .box-card {
      margin-bottom: 15px;
      box-shadow: none;

      .el-card__header {
        background: #f3f7fb;
      }

      .question {
        color: #333333
      }

      .answer {
        line-height: 2;
        color: #666666;

      }
    }

    padding: 20px;
  }
</style>
