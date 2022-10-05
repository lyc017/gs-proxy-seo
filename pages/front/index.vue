<template>
<!--  <div>123</div>-->
  <div className="index-main" alt="代理ip服务公司">
<!--    首页12345-->
<!--&lt;!&ndash;    <top-menu></top-menu>&ndash;&gt;-->
<!--    <div className="im-box">-->
<!--&lt;!&ndash;      <Consult></Consult>&ndash;&gt;-->
<!--&lt;!&ndash;      <keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;        <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;      </keep-alive>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>&ndash;&gt;-->
<!--    </div>-->
    <bottom-menu v-if="bottomSt"></bottom-menu>
  </div>
</template>

<script>
  // import topMenu from '@/views/front/components/TopMenu'
  // import Consult from './components/Consult'
  import BottomMenu from '@/components/front/BottomMenu'
  // import eventBus from '@/eventBus.js'
  //
  export default {
    name: 'Index',
  //   metaInfo() {
  //     return this.$const.seo.INDEX_MI
  //   },
    data() {
      return {
        bottomSt: true
      }
    },
  //   watch: {
  //     '$route': {
  //       handler(to) {
  //         this.bottomSt = to.name !== 'FrontIndex'
  //       },
  //       immediate: true
  //     }
  //   },
    components: {
      // topMenu,
      // Consult,
      BottomMenu
    },
  //   mounted() {
  //     if (this.$route.name === 'FrontIndex') {
  //       this.bottomSt = false
  //       eventBus.$on('updateBottom', this.updateBottomHandle)
  //     }
  //   },
  //   beforeDestroy() {
  //     if (this.$route.name === 'FrontIndex') {
  //       eventBus.$off('updateBottom', this.updateBottomHandle)
  //     }
  //   },
  //   methods: {
  //     updateBottomHandle(value) {
  //       this.bottomSt = !(value !== 3)
  //     }
  //   }
  }
</script>

<!--<style scoped lang="less">-->
<!--  /*@import '~@/assets/css/front/index';*/-->
<!--</style>-->
