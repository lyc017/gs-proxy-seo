import Vue from 'vue'
import VueRouter from 'vue-router'
import  frontRouter from '@/router/front/index.js'
// console.log(123)
// import backstageRouter from './backstage/index' // 后台页面
// import frontRouter from './front/index' // 前台页面
//
// // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

let routes = [
  ...frontRouter
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
  // ...backstageRouter,
  // ...backstageRouter,
  // ...frontRouter // 放最后
]
let router = new VueRouter({
  mode: 'history',
  routes
})

// 验证是否登陆
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.hasOwnProperty('checkLogin') && to.meta.checkLogin === false) {
    // 如果访问的是不验证登陆的，直接进入下一个页面
    next()
  } else {
    console.log('需要校验')
    next()
    // store.dispatch('getToken').then((data) => {
    //   if (data) {
    //     next()
    //   } else {
    //     next({path: '/'})
    //   }
    // })
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
