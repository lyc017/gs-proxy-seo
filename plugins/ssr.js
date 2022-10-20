// 主入口----设置需要在服务端渲染的
// import '@/static/css/iconfont/iconfont.css'
// import '@/static/css/theme/index.css' // element样式

import Vue from 'vue'
import '@/static/css/common.less' // 全局样式
import directive from '@/static/js/directive/index'
import constIndex from '@/static/js/const/index'

import VueWeChatTitle from 'vue-wechat-title'
Vue.use(directive)
Vue.use(VueWeChatTitle)
Vue.prototype.$const = constIndex





//

// import VueQr from 'vue-qr'




// import '@/static/js/mock/index'
// import MetaInfo from 'vue-meta-info'
// Vue.use(MetaInfo)

//
// if (uri.env.type === 'dev' || uri.env.type === 'test') {
//   // new VConsole()
// }




// Vue.use(VueQr)`

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
