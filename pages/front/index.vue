<template>
  <div class="index-main" alt="代理ip服务公司">
    <top-menu></top-menu>
    <div class="im-box">
      <Consult></Consult>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
    </div>
    <bottom-menu v-if="bottomSt"></bottom-menu>
  </div>
</template>

<script>
  import topMenu from '@/components/front/TopMenu'
  import Consult from '@/components/front/Consult'
  import BottomMenu from '@/components/front/BottomMenu'
  import eventBus from '@/static/js/eventBus.js'
  export default {
    name: 'Index',
    data() {
      return {
        bottomSt: true
      }
    },
    watch: {
      '$route': {
        handler(to) {
          this.bottomSt = to.name !== 'FrontIndex'
        },
        immediate: true
      }
    },
    components: {
      topMenu,
      Consult,
      BottomMenu
    },
    mounted() {
      if (this.$route.name === 'FrontIndex') {
        this.bottomSt = false
        eventBus.$on('updateBottom', this.updateBottomHandle)
      }
    },
    beforeDestroy() {
      if (this.$route.name === 'FrontIndex') {
        eventBus.$off('updateBottom', this.updateBottomHandle)
      }
    },
    methods: {
      updateBottomHandle(value) {
        this.bottomSt = !(value !== 3)
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/front/index';
</style>
