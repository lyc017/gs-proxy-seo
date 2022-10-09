// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'


import {loginState, loginGetters, loginMutations, loginActions} from '@/store/login.js' // 作为插件使用
import backstage from '@/store/backStage/index.js' // 后台
import front from '@/store/front/index.js' // 前台
import  {initState, initGetters, initMutations, initActions} from '@/store/init.js' // 初始函数

const store = () => new Vuex.Store({
  state: {
    loginState: loginState,
    ...backstage,
    ...front,
    ...initState
  },
  getters: {
    ...loginGetters,
    ...initGetters
  },
  mutations: {
    ...loginMutations,
    ...initMutations
  },
  actions: {
    ...loginActions,
    ...initActions
  }
})


Vue.use(Vuex)

export default store
