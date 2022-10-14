<template>
  <div class="xms-flex-wrap min-box-height library-wrap">
    <div class="main-contain">
      <div class="left">
        <div class="left-top">
          {{headerTab.section}}
        </div>
        <div class="left-bottom">
          <div v-for="(item, index) in headerTab.list" :key="index">
            <span @click="$router.replace({path: item.path})"
                  :class="{'active' : (code === item.key) || (item.alias && item.alias.length > 0 && item.alias.indexOf(code) > -1)}">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-top flex justify-center">
          <div v-for="(tab, index) in HEADER_TAB" :key="index">
            <span @click="$router.replace(tab.path)"
                  :class="{'active': tabActive === tab.code}">{{tab.name}}</span>
            <label v-if="index !== HEADER_TAB.length-1"></label>
          </div>
        </div>
        <div class="right-bottom">
          <template v-if="tabActive === TAB.service">
            <Service :active="code" ></Service>
          </template>
          <template v-else-if="tabActive === TAB.guide">
            <template v-if="code === LIBRARY_TYPE.TUNNEL_SOCKS || code === LIBRARY_TYPE.TUNNEL_HTTP">
              <Guide :active="code"></Guide>
            </template>
            <template v-else>
              <code-guide :code="code"></code-guide>
            </template>
          </template>
          <template v-else-if="tabActive === TAB.question">
            <Question :active="code"></Question>
          </template>
          <template v-else-if="tabActive === TAB.protocol">
            <Protocol :active="code"></Protocol>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {TAB, HEADER_TAB, LIBRARY_TYPE} from '@/static/js/front/library'
  import Service from '@/components/front/Service'
  import Guide from '@/components/front/Guide'
  import Question from '@/components/front/Question'
  import CodeGuide from '@/components/front/CodeGuide'
  import Protocol from '@/components/front/Protocol'
  export default {
    name: 'Library',
    metaInfo() {
      return this.$const.seo.LIBRARY_JR_MI(this.$route.params.type, this.$route.params.code)
    },
    data() {
      return {
        TAB,
        HEADER_TAB,
        LIBRARY_TYPE,
        tabs: Object.keys(TAB),
        tabActive: '',
        code: ''
      }
    },
    watch: {
      // 利用watch方法检测路由变化：
      '$route': function (to) {
        if (to.params.type) {
          this.tabActive = to.params.type
        }
        if (to.params.code) {
          this.code = to.params.code
        }
      }
    },
    computed: {
      headerTab() {
        return HEADER_TAB.find(item => item.code === this.tabActive)
      }
    },
    asyncData({route}){
      let obj = {}
      if (route.params.type) {
        obj.tabActive = route.params.type
      }
      if (route.params.code) {
        obj.code = route.params.code
      }
      return obj
    },
    mounted() {
    },
    methods: {
    },
    components: {
      Protocol,
      Service,
      Guide,
      Question,
      CodeGuide
    }

  }
</script>

<style scoped lang="less">
  .library-wrap {
    background: white;

    .main-contain {
      padding: 15px 0 15px 15px;
      display: flex;
      flex-grow: 1;

      .left {
        padding: 15px 15px;
        width: 200px;
        text-align: center;
        flex-shrink: 0;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

        .left-top {
          font-size: 20px;
          padding-bottom: 15px;
          border-bottom: solid 1px #E5E9ED;
        }

        .left-bottom {
          span {
            font-size: 16px;
            color: #666666;
            display: inline-block;
            margin-top: 10px;
            cursor: pointer;
          }

          span.active {
            color: @mainBlue;
          }
        }
      }

      .right {
        width: 100%;
        margin-left: 15px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

        .right-top {
          border-bottom: solid 1px #E5E9ED;
          padding: 15px 0;

          span {
            font-size: 20px;
            margin: 0px 20px;
            cursor: pointer;
          }

          span.active {
            color:  @mainBlue;
          }

          label {
            border-right: solid 1px #E5E9ED;
          }
        }
      }
    }
  }
</style>
