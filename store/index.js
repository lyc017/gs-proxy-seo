// 状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {loginState, loginGetters, loginMutations, loginActions} from '@/store/login.js' // 作为插件使用
import backstage from '@/store/backStage/index.js' // 后台
import front from '@/store/front/index.js' // 前台
import  {initState, initGetters, initMutations, initActions} from '@/store/init.js' // 初始函数

let store

const initStore = () => {
  return store || (store = new Vuex.Store({
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
  }))
}
export default initStore
