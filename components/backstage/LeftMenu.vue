<template>
  <div class="left-menu">
    <div @click="$router.push('/')" class="header-wrap">
      <div class="header-logo" :class="{'header-mini-logo':isCollapse}"></div>
    </div>
    <el-menu
      :default-active="active"
      :default-openeds="defaultOpeneds"
      class="left-menu-list"
      :collapse="isCollapse"
    >
      <template v-for="item in list">
        <template v-if="item.list && item.list.length > 0">
          <el-submenu :index="item.name" :key="item.name" :disabled="item.disabled" v-if="!item.hide">
            <template slot="title">
              <i :class="item.icon" class="lm-icon"></i><span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item :index="sec.name" v-for="(sec,secIndex) in item.list" @click="route" :route="sec.to"
                          :key="secIndex" :disabled="sec.disabled" v-if="!sec.hide">
              <span slot="title">{{sec.name}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.name" @click="route" :route="item.to" :disabled="item.disabled" :key="item.name">
            <i :class="item.icon" class="lm-icon"></i><span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>

    <template v-if="showTest">
      <el-menu default-active="4" class="left-menu-list left-menu-demo" :collapse="isCollapse">
        <el-menu-item index="4" @click="route" :route="test.to" :disabled="test.disabled">
          <i :class="test.icon" class="lm-icon"></i>
          <span slot="title">{{test.name}}</span>
        </el-menu-item>
      </el-menu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'LeftMenu',
    data() {
      return {
        showTest: false,
        test: {
          name: '组件测试',
          to: {path: '/test'},
          icon: 'el-icon-setting',
          disabled: false
        },
        title: '动态代理',
        active: '',
        defaultOpeneds: ['动态代理', '会员中心', '财务管理'],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        isAdmin: false // 管理员权限
      }
    },
    props: {
      isCollapse: {
        type: Boolean, // 是否展示
        default: false
      }
    },
    mounted() {
      this.showTest = window.location.href.indexOf('local.') > -1
      this.$store.dispatch('getUser', true).then((data) => {
        this.isAdmin = data.isAdmin === 1
        this.getActiveIndex(this.list)
      })
    },
    watch: {
      '$route'() {
        // 路由变化时,获取active
        this.getActiveIndex(this.list)
      }
    },
    computed: {
      list() {
        return [
          {
            name: '首页',
            to: {path: '/index'},
            icon: 'el-icon-menu',
            disabled: false
          },
          {
            name: '动态代理',
            disabled: false,
            icon: 'el-icon-s-data',
            list: [
              {
                name: '购买代理',
                to: {path: '/agent/buy'},
                disabled: false
              },
              {
                name: '按时代理',
                to: {path: '/agent/manage/1'},
                disabled: false
              },
              {
                name: '按量代理',
                to: {path: '/agent/manage/2'},
                disabled: false
              }
            ]
          },
          {
            name: '会员中心',
            disabled: false,
            icon: 'el-icon-user-solid',
            list: [
              {
                name: '账号管理',
                to: {path: '/member/account'},
                disabled: false
              },
              {
                name: '实名认证',
                to: {path: '/member/certification'},
                disabled: false
              }
            ]
          },
          {
            name: '财务管理',
            icon: 'el-icon-s-ticket',
            disabled: false,
            list: [
              {
                name: '充值中心',
                to: {path: '/finance/recharge'},
                disabled: false
              },
              {
                name: '订单管理',
                to: {path: '/finance/order/manage'},
                disabled: false
              },
              {
                name: '发票管理',
                to: {path: '/finance/fillManage'},
                disabled: false
              },
              {
                name: '收件信息',
                to: {path: '/finance/postAddress'},
                disabled: false
              }
            ]
          },
          {
            name: '后台管理',
            icon: 'el-icon-s-home',
            disabled: false,
            hide: !this.isAdmin,
            list: [
              {
                name: '行业资讯',
                to: {path: '/manager/article'},
                disabled: false,
                hide: !this.isAdmin
              },
              {
                name: '企业认证',
                to: {path: '/manager/certification'},
                disabled: false,
                hide: !this.isAdmin
              }
            ]
          }
        ]
      }
    },
    methods: {
      getActiveIndex(list) {
        let route = this.$route
        if (list && list.length > 0) {
          for (let item of list) {
            if (item.list && item.list.length > 0) {
              this.getActiveIndex(item.list)
            } else {
              // 判断路由的path是否相同
              if (item.to.path && route.path === item.to.path) {
                this.active = item.name
                break
              }

              // 兼容路由用name的情况
              if (item.to.name && route.name === item.to.name) {
                this.active = item.name
                break
              }
            }
          }
        }
      },
      route(to) {
        this.$router.push(to.route)
      }
    }
  }
</script>

<style scoped lang="less">
  //左边菜单目录
  .left-menu {
    display: flex;
    flex-direction: column;

    .header-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      height: 50px;

      .header-logo {
        display: block;
        cursor: pointer;
        width: 200px;
        height: 50px;
        margin: 5px 0px;
        background-color: #fff;
        background-size: 100% 100%;
        background-image: url('~@/static/img/logo/header-logo.png')
      }

      .header-mini-logo {
        display: block;
        width: 40px;
        height: 40px;
        background-color: #fff;
        background-size: 100% 100%;
        background-image: url('~@/static/img/logo/logo.png')
      }
    }

    .left-menu-list {
      box-shadow: 1px 7px 7px 0 rgb(0 0 0 / 5%);
      flex-grow: 1;
      flex-shrink: 0;
      border: none;

      .lm-icon {
        font-size: 20px;
      }
    }

    .left-menu-demo {
      flex-grow: 0;
      flex-shrink: 1;
    }

    .left-menu-list:not(.el-menu--collapse) {
      width: @leftMenuWidth;

      .lm-icon {
        font-size: 16px;
        margin: -1px 4px 0 0;
      }
    }
  }
</style>
