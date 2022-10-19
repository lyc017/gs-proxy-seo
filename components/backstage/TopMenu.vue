<template>
  <div class="top-menu flex justify-between">
    <div>
      <span class="iconfont icon-proxy-size cursor-p"
            :class="{'icon-proxy-shouqicaidan':!isCollapse,'icon-proxy-zhankaicaidan':isCollapse}"
            @click="changeCollapse"></span>
    </div>
    <div class="flex align-middle">
      <span class="cursor-p" @click="$router.push('/member/account')">
        <span class="iconfont icon-proxy-yonghu"></span>
        <span class="mg-r20">{{user && user.loginName}}</span>
      </span>
      <span class="iconfont icon-proxy-tuichu font-size-18 mg-r8 cursor-p" @click="logout"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopMenu',
    data() {
      return {}
    },
    props: {
      isCollapse: {
        type: Boolean, // 是否展示
        default: true
      },
      user: Object
    },
    methods: {
      changeCollapse() {
        this.$emit('update:isCollapse', !this.isCollapse)
      },
      logout() {
        this.$store.dispatch('logout').then((data) => {
          this.success(data.msg, () => {
            this.$router.push('/')
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .icon-proxy-size {
    font-size: 32px;
  }

  .icon-proxy-yonghu {
    color: @mainBlue;
    font-size: 18px;
    vertical-align: middle;
  }

  .top-menu {
    height: 50px;
    top: 0;
    background: #fff;
    padding: 11px 15px;
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 5%);
  }
</style>
