<template>
  <div class="flex">
    <left-menu :isCollapse="isCollapse"></left-menu>
    <section class="right-content xms-flex-wrap">
      <div class="xms-flex-headerOrBottom">
        <top-menu :isCollapse.sync="isCollapse" :user="user"></top-menu>
      </div>
      <div class="xms-flex-middle">
        <Consult :showRight="true" :showConsult="false"></Consult>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" replace></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  import LeftMenu from './components/LeftMenu'
  import TopMenu from './components/TopMenu'
  import Consult from '@/views/front/components/Consult'

  export default {
    name: 'BackStateIndex',
    data() {
      return {
        isCollapse: false,
        user: null
      }
    },
    components: {LeftMenu, TopMenu, Consult},
    mounted() {
      this.$store.dispatch('getUser', true).then((data) => {
        this.user = data
        if ((data.companyAuth === this.$const.AUTH_STATUS.AUTH_IS_FAIL || data.companyAuth === this.$const.AUTH_STATUS.AUTH_IS_NONE) &&
          (data.personAuth === this.$const.AUTH_STATUS.AUTH_IS_FAIL || data.personAuth === this.$const.AUTH_STATUS.AUTH_IS_NONE)) {
          setTimeout(() => {
            this.gsCertification()
          }, 500)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import '~@/assets/css/base';
  //右边模块
  .flex {
    height: 100%;
  }

  .right-content {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    overflow-x: auto;
  }
</style>
