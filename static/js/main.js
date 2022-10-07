// import '@/assets/css/iconfont/iconfont.css'
// import '@/assets/css/theme/index.css' // element样式

import Vue from 'vue'
import '@/static/css/common.less' // 全局样式
// import App from './App'
// import router from './router'
// import store from '@/store/index'
// import component from '@/assets/js/component'
// import uri from '@/assets/js/axios/uri'
// import util from '@/assets/js/util/index'
// import useIndex from '@/assets/js/use/index'
// import directive from '@/assets/js/directive/index'
import constIndex from '@/static/js/const/index'
//

// import VueQr from 'vue-qr'
// import * as Base64 from 'js-base64'
import animate from 'animate.css'
// import {
//   Avatar,
//   Card,
//   Container,
//   Header,
//   Aside,
//   Main,
//   Alert,
//   Row,
//   Col,
//   Button,
//   Input,
//   InputNumber,
//   Select,
//   Option,
//   OptionGroup,
//   Radio,
//   RadioGroup,
//   RadioButton,
//   Checkbox,
//   CheckboxButton,
//   CheckboxGroup,
//   Tree,
//   Link,
//   Tag,
//   Menu,
//   Submenu,
//   Empty,
//   Switch,
//   MenuItem,
//   MenuItemGroup,
//   Tabs,
//   TabPane,
//   Table,
//   TableColumn,
//   Tooltip,
//   Pagination,
//   Dialog,
//   Form,
//   FormItem,
//   Cascader,
//   MessageBox,
//   Message,
//   Loading,
//   DatePicker,
//   TimePicker,
//   Popover,
//   Upload,
//   Image,
//   Breadcrumb,
//   BreadcrumbItem,
//   InfiniteScroll,
//   Icon,
//   Drawer,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Autocomplete,
//   Progress,
//   Collapse,
//   CollapseItem,
//   Popconfirm,
//   Steps,
//   Step,
//   Timeline,
//   TimelineItem,
//   Carousel,
//   CarouselItem,
//   Scrollbar,
//   Badge,
//   PageHeader,
//   Result
// } from 'element-ui' // elementUi框架
// import VueWeChatTitle from 'vue-wechat-title'
// import http from '@/assets/js/axios/http'
// import '@/assets/js/mock/index'
// import MetaInfo from 'vue-meta-info'
// Vue.use(MetaInfo)
// Vue.prototype.Base64 = Base64
//
// if (uri.env.type === 'dev' || uri.env.type === 'test') {
//   // new VConsole()
// }
Vue.use(animate)
// Vue.use(useIndex)
// Vue.use(directive)
// // 全局组件
// for (let key in component) {
//   Vue.use(component[key])
// }
// Vue.use(VueQr)
// Vue.use(VueWeChatTitle)
// Vue.prototype.uri = uri
Vue.prototype.$const = constIndex
// Vue.prototype.$util = util
// Vue.prototype.$http = http // 请求
// Vue.config.productionTip = false
// Vue.use(Avatar).use(Empty)
// Vue.use(Scrollbar).use(Carousel).use(CarouselItem)
// Vue.use(Card).use(Container).use(Header).use(Aside).use(Main)
// Vue.use(Alert).use(Row).use(Col).use(Button).use(Input).use(InputNumber).use(Select).use(Option).use(OptionGroup)
//   .use(Form).use(FormItem).use(Radio).use(RadioGroup).use(RadioButton).use(Badge)
// Vue.use(Radio).use(RadioGroup).use(RadioButton).use(Checkbox).use(CheckboxButton).use(CheckboxGroup)
// Vue.use(Tree).use(Tag).use(Link)
// Vue.use(Menu).use(Submenu).use(Switch).use(MenuItem).use(MenuItemGroup)
// Vue.use(Tabs).use(TabPane).use(PageHeader)
// Vue.use(Table).use(TableColumn)
// Vue.use(Pagination)
// Vue.use(Dialog)
// Vue.use(Cascader)
// Vue.use(Loading)
// Vue.use(DatePicker)
// Vue.use(TimePicker)
// Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Image)
// Vue.use(Breadcrumb).use(BreadcrumbItem).use(InfiniteScroll)
// Vue.use(Icon).use(Dropdown).use(DropdownMenu).use(DropdownItem).use(Autocomplete)
// Vue.use(Upload)
// Vue.use(Drawer)
// Vue.use(Progress)
// Vue.use(Popconfirm)
// Vue.use(Collapse).use(CollapseItem).use(Steps).use(Step).use(Timeline).use(TimelineItem).use(Result)
// Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$messagebox = MessageBox
//
// // eslint-disable-next-line no-new
// export default new Vue({
//   el: '#app',
//   store,
//   router,
//   render: h => h(App),
//   mounted() {
//     document.dispatchEvent(new Event('render-event'))
//   }
// })
