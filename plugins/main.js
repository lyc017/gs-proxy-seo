// 主入口----设置不需要在服务端渲染的内容
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@/static/css/iconfont/iconfont.css'
import * as Base64 from 'js-base64'
import util from '@/static/js/util/index.js'
import animate from '../node_modules/animate.css/animate.css'
import useIndex from '@/static/js/use/index'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$util = util
Vue.prototype.Base64 = Base64
Vue.use(animate)
Vue.use(useIndex)
