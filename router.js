import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import  frontRouter from '@/router/front/index'
import  activeRouter from '@/router/active/index'
import backstageRouter from '@/router/backstage/index' // 后台页面

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let routes = [
  // {
  //   path: '',
  //   name: 'Index',
  //   meta: {
  //     title: '动态代理_隧道代理_隧道代理搭建-旋风云',
  //     checkLogin: false
  //   },
  //   component: front
  // }
  // ...indexRouter
  // {
  //   path: '',
  //   name: 'Index',
  //   meta: {
  //     title: '动态代理_隧道代理_隧道代理搭建-旋风云',
  //     checkLogin: false
  //   },
  //   component:index
  // },
  ...activeRouter,
  ...backstageRouter,
  ...frontRouter // 放最后
]
let router = new VueRouter({
  mode: 'history',
  routes
})

// 验证是否登陆
router.beforeEach((to, from, next) => {
  if (to.meta.hasOwnProperty('checkLogin') && to.meta.checkLogin === false) {
    // 如果访问的是不验证登陆的，直接进入下一个页面
    next()
  } else {
    store().dispatch('getToken').then((data) => {
      if (data) {
        next()
      } else {
        next({path: '/'})
      }
    })
  }
})


export function createRouter() {
  return router
}
// const router = new Router({
//   mode: 'history',
//   base: '/',
//   routes,
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       if (from.meta.keepAlive) {
//         from.meta.savedPosition = document.body.scrollTop
//       }
//       return { x: 0, y: to.meta.savedPosition || 0 }
//     }
//   }
// })



// export default router
