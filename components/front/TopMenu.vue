<template>
  <div class="front-top-menu">
    <div class="main-contain" >
      <div class="flex justify-between align-middle">
        <router-link to="/" class="ftm-logo " :class="{'animate__animated animate__swing': show}">
          <img alt="代理ip服务公司 LOGO" :src="require('@/static/img/logo/header-logo.png')"></img>
        </router-link>
        <div class="flex align-middle">
          <div class="ftm-menu flex">
            <router-link :to="item.path" :class="getActive(item)" v-for="(item, index) in menus"
                         :key="index">{{item.name}}
            </router-link>
          </div>
          <el-button type="primary" round size="small" v-if="token" @click="goToIndex('/index')">会员中心
          </el-button>
          <template v-else>
            <el-button type="primary" round size="small" @click="openLogin('register')">注册</el-button>
            <el-button type="primary" round size="small" @click="openLogin('login')">登录</el-button>
          </template>
        </div>
      </div>
    </div>

<!--    <login :show.sync="login.showSt" :resource="login.resource"></login>-->
  </div>
</template>

<script>
  import Login from '@/components/front/Login'

  export default {
    name: 'TopMenu',
    data() {
      return {
        current: '/',
        menus: [
          {name: '首页', path: '/'},
          {name: '购买代理', path: '/front/agent/buy'},
          {name: '文档中心', path: '/library/guide/http'},
          {name: '行业资讯', path: '/information'},
          {name: '关于我们', path: '/about'}
        ],
        login: {
          showSt: false,
          resource: ''
        },
        token: '',
        show: false // logo动画展示开关
      }
    },
    watch: {
      '$route'(to, from) {
        this.current = this.$route.fullPath
      }
    },
    mounted() {
    //   this.token = this.$store.getters.token()
      this.current = this.$route.fullPath
      this.show = true
    },
    components: {
      Login
    },
    methods: {
      openLogin(resource) {
        this.login = {
          showSt: true,
          resource
        }
      },
      goToIndex(url) {
        let token = this.$store.getters.token()
        if (token) {
          this.$router.push(url)
        } else {
          this.openLogin('login')
        }
      },
      getActive(item) {
        let classStr = ''
        if (this.current.indexOf('library') > -1) {
          // 文档中心
          if (item.path.indexOf('library') > -1) {
            classStr = 'active'
          }
        } else if (this.current.indexOf('information') > -1) {
          if (item.path.indexOf('information') > -1) {
            classStr = 'active'
          }
        } else {
          if (item.path === this.current) {
            classStr = 'active'
          }
        }
        return classStr
      }
    }

  }
</script>

<style scoped lang="less">
  .front-top-menu {
    padding: 21px 0;

    .ftm-logo {
      width: 192px;
      height: 48px;
      margin-left: -30px;
    }

    .ftm-menu {
      line-height: 48px;
      padding-right: 15px;

      a {
        padding: 0 25px;
        color: #787276;
        font-size: 16px;

        &.active {
          color: #383738;
          font-weight: bold;
        }
      }
    }

    .el-button {
      padding-left: 30px;
      padding-right: 30px;
      background: #3544FF;
    }

    .content {
      span {
        color: #787276;
        margin-right: 50px;
        cursor: pointer;
      }

      span:hover {
        color: #383738;
        font-weight: bold;
      }
    }
  }
</style>
