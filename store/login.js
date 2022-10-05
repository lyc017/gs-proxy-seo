// import http from '@/static/js/axios/http'
// import {GS_TOKEN} from '@/static/js/const/index'
// import {getCookie} from '@/static/js/use/cookie'
//
export const loginState = {
  token: '',
  user: '' // 账号信息
}
//
// export const loginGetters = {
//   // 获取token数据
//   token: (state) => () => {
//     return state.loginState.token || getCookie(GS_TOKEN.gs_proxy_token)
//   }
// }
//
// export const loginMutations = {
//   updateToken(state, token) {
//     state.loginState.token = token
//   },
//   updateUser(state, user) {
//     state.loginState.user = user
//   }
// }
//
// export const loginActions = {
//   getToken(context) {
//     return new Promise((resolve) => {
//       let token = context.getters.token()
//       resolve(token)
//     })
//   },
//   getUser(context, isUpdate = false) {
//     return new Promise((resolve, reject) => {
//       if (isUpdate || !context.state.loginState.user) {
//         http.get('/user/main').then(({status, data}) => {
//           if (status === 200) {
//             let userInfo = data.userInfo
//             let vipName = '普通会员'
//             let ratio = ''
//             if (data.vip && data.vip.name) {
//               vipName = data.vip.name
//               ratio = data.vip.ratio
//             }
//             userInfo.concurrentNum = data.concurrentNum
//             userInfo.paySum = data.paySum
//             userInfo.vipName = vipName
//             userInfo.ratio = ratio
//             context.commit('updateUser', userInfo)
//             resolve(userInfo)
//           }
//         }).catch((err) => {
//           reject(err)
//         })
//       } else {
//         resolve(context.state.loginState.user)
//       }
//     })
//   },
//   logout(context) {
//     return new Promise((resolve, reject) => {
//       http.get('/logout', {
//         showLoading: 1
//       }).then(({status, data}) => {
//         if (status === 200) {
//           context.commit('updateToken', '')
//           resolve(data)
//         }
//       }).catch((err) => {
//         reject(err)
//       })
//     })
//   }
// }
