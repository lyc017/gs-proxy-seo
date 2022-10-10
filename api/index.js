// import http from '@/static/js/axios/http'
// console.log(http)
export default ($axios) => {
  return {
    getData: () => $axios.get('/main/information/get?id=15'),
    // 有参数的情况
    postData: data => $axios.post('/api/get_index_data', data),
    // ...your other api function
  }
}
