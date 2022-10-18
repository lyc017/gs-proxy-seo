// import {HTTP_ENV} from '@/static/js/const/index'
// import uri from '@/api/index'
// import qs from 'qs'
//
// const Mock = require('mockjs') // 引入mockjs
// Mock.XHR.prototype.withCredentials = true // 解决跨域请求登陆问题
//
// if (uri.env.type === HTTP_ENV.DEV || uri.env.type === HTTP_ENV.TEST) {
//   // 数据类型测试
//   Mock.mock('/api/testMock', { // 声明用mock随机生成的数据
//     'level|1-5': '★',
//     'price|1-100': 100,
//     'balance|1-100.2': 1,
//     'provinceObject|2': {
//       '310000': '上海市',
//       '320000': '江苏省',
//       '330000': '浙江省',
//       '340000': '安徽省'
//     },
//     'array1|1-10': [
//       'Mock.js'
//     ],
//     'foo1': 'Syntax Demo',
//     'name1': function () {
//       return this.foo
//     },
//     'regexp2|1-5': '/\\d{5,10}\\-/',
//     'regexp1': /\d{5,10}/,
//     id: '@id()',
//     natural: '@natural()',
//     cDate: '@date("yyyy-MM-dd")',
//     ctime: '@time("HH:mm:ss")',
//     cDatetime: '@datetime("yyyy-MM-dd HH:mm:ss")',
//     cNew: '@now',
//     word: '@word',
//     paragraph: '@paragraph',
//     cparagraph: '@cparagraph',
//     csentence: '@csentence',
//     cword: '@cword',
//     sentence: '@sentence',
//     title: '@title',
//     ctitle: '@ctitle',
//     url: '@url',
//     email: '@email',
//     ip: '@ip',
//     province: '@province',
//     city: '@city',
//     guid: '@guid'
//   })
//
//   const mockObject = {
//     'id': '@id()',
//     'userId': '@increment',
//     'originPrice|1-100.2': 1,
//     'discounts|1-100': 1,
//     'totalPrice|1-100.2': 1,
//     'balance|1-100.2': 1,
//     'payPrice|1-100.2': 1,
//     'payStatus|1': [0, 1, 2, 3, 4],
//     'invoiceStatus': 0,
//     'ctime': '@datetime("yyyy-MM-dd HH:mm:ss")',
//     'ptime': '@datetime("yyyy-MM-dd HH:mm:ss")',
//     'productId': '@guid',
//     'durationId': 2,
//     'productName|1': [
//       '隧道代理',
//       '动态代理'
//     ],
//     'concurrent': 5,
//     'survivalId': 1,
//     'survivalName': '每次请求换IP',
//     'proxyId': '@ip',
//     'bandwidth': '@increment(5)',
//     'orderTypeName|1': [
//       '新购',
//       '续费',
//       '升级'
//     ]
//   }
//
//   const mockData = Mock.mock({
//     'list|20-100': [mockObject]
//   })
//
//   /**
//    * 获取mock列表数据
//    * @param options
//    * @returns {{total: *, list: *}}
//    */
//   const getMock = function (options) {
//     const params = qs.parse(options.body)
//     let pageIndex = params.pageIndex || 1
//     let pageSize = params.pageSize || 10
//     let list = mockData.list
//     let total = list.length
//     let startNum = pageSize * (pageIndex - 1)
//     let endNum = pageSize * pageIndex
//     endNum = (endNum > total) ? total : endNum
//     return {
//       list: list.slice(startNum, endNum),
//       total: total
//     }
//   }
//
//   /**
//    * 添加mock数据
//    * @returns {*}
//    */
//   const addMock = function () {
//     let mockItem = Mock.mock(mockObject)
//     mockData.list.unshift(mockItem)
//     return mockItem
//   }
//
//   /**
//    * 删除mock数据
//    * @returns {*}
//    */
//   const removeMock = function (options) {
//     const params = qs.parse(options.body)
//     let ids = params.id
//     mockData.list = mockData.list.filter(item => ids.indexOf(item.id) === -1)
//     return ids
//   }
//
//   Mock.mock('/api/getMock', 'post', getMock)
//
//   Mock.mock('/api/addMock', 'post', addMock)
//
//   Mock.mock('/api/removeMock', 'post', removeMock)
// }
