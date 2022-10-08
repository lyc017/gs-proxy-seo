// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'


import {loginState, loginGetters, loginMutations, loginActions} from '@/store/login.js' // 作为插件使用
import backstage from '@/store/backStage/index.js'
import front from '@/store/front/index.js'

const store = () => new Vuex.Store({
  state: {
    loginState: loginState,
    ...backstage,
    ...front
  },
  getters: {
    ...loginGetters
  },
  mutations: {
    ...loginMutations
  },
  actions: {
    ...loginActions
  }
})


Vue.use(Vuex)

export default store
