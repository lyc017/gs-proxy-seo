// 主入口----设置不需要在服务端渲染的内容
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@/static/css/iconfont/iconfont.css'
import * as Base64 from 'js-base64'
import util from '@/static/js/util/index.js'
import animate from '../node_modules/animate.css/animate.css'
import component from '@/plugins/component'
import useIndex from '@/static/js/use/index'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.prototype.$util = util
Vue.prototype.Base64 = Base64
Vue.use(animate)
// 全局组件
console.log(component,'component')
for (let key in component) {
  Vue.use(component[key])
}
Vue.use(useIndex)
