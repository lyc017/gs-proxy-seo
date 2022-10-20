<template>
  <section class="active-main" alt="代理ip服务公司">
    <top-menu mode="active"></top-menu>
    <div class="im-box">
      <Consult></Consult>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
    </div>
  </section>
</template>

<script>
  import topMenu from '@/components/front/TopMenu'
  import Consult from '@/components/front/Consult'

  export default {
    name: 'Active',
    metaInfo() {
      return this.$const.seo.INDEX_MI
    },
    data() {
      return {
        bottomSt: true
      }
    },
    components: {topMenu, Consult},
    mounted() {},
    methods: {}
  }
</script>

<style scoped lang="less">
  @import '~@/static/css/front/index';
  @import '~@/static/css/active/index';
</style>
