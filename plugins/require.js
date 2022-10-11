import router from '@/router.js'
import store from '@/store/index.js'
import uri from '@/static/js/axios/uri'
import {loading, clearLoading, alert, error} from '@/static/js/use/toast.js'
import qs from 'qs'
const SHOW_LOADING = {
  HIDE: 0, // 不显示
  SHOW: 1, // 显示
  CONTINUED: 2 // 持续
}


/**
 * 请求前拦截器
 * @type {null}
 */
function interceptorReq(config, param) {
  if (param.apiHostKey) {
    config.baseURL = uri.getReqBaseUrl(param.apiHostKey)
    delete param.apiHostKey
  } else {
    config.baseURL = uri.getReqBaseUrl()
  }
  if (param.mock) {
    config.baseURL = ''
    delete param.mock
  }

  if (param.showLoading) {
    config.showLoading = param.showLoading
    loading()
    delete param.showLoading
  }

  return param
}

/**
 * 异常处理
 * @param response
 */
function responseError(response) {
  let message = '请求超时,请重新再试'
  if (response && response.status) {
    message = response.data.msg
  }

  error(message, () => {
    if (response && response.status === 401 && response.data.code === 10003) {
      store.commit('updateToken', '')
      router.replace({path: '/'})
    }
  })
}

/**
 * 文件上传
 * @param url
 * @param data 支持对象、FormData及文件流
 * @returns {Promise<unknown>}
 */
function upload(url, data, onUploadProgress) {
  let formData = new FormData()
  if (Object.prototype.toString.call(data) === '[object File]') {
    formData.append('file', data)
  } else if (data instanceof FormData) {
    formData = data
  } else {
    for (let key in data) {
      formData.append(key, data[key])
    }
  }

  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: false,
      timeout: 1000 * 60 * 5,
      onUploadProgress: function (progressEvent) { // 上传进度
        typeof onUploadProgress === 'function' && onUploadProgress(progressEvent)
      }
    }).then(res => {
      if (res && res.data && res.data.ok) {
        resolve(res.data)
      } else {
        alert(res.data && (res.data.errMsg), () => {
          reject(res.data)
        })
      }
    }).catch(err => {
      alert('系统异常' + JSON.stringify(err), () => {
        reject(err)
      })
    })
  })
}

/**
 * 下载
 * @param url
 * @param params
 */
function download(url, params) {
  let temp = document.createElement('form')
  temp.action = url
  temp.method = 'post'
  temp.style.display = 'none'
  if (params.hasOwnProperty('target')) {
    temp.target = params.target
    delete params.target
  }
  for (let key in params) {
    let opt = document.createElement('textarea')
    opt.name = key
    opt.value = params[key]
    temp.appendChild(opt)
  }
  document.body.appendChild(temp)
  temp.submit()
}

function axiosConfig($axios) {
  let config = {
    baseURL:'http://proxyapi.xms3.4846.com',
    timeout: 1000 * 20,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
  // 设置API的域名
  let service = $axios.create(config)
  service.setBaseURL('http://proxyapi.xms3.4846.com')
  service.interceptors.request.use(config => {
    // 表单提交时数据不做处理
    if (config.headers['Content-Type'] !== 'application/json') {
      if (config.method === 'post' && config.data) {
        config.data = qs.parse(config.data)
        let data = interceptorReq(config, config.data)
        config.data = qs.stringify(data, {indices: false})
      } else if (config.method === 'get' && config.params) {
        config.params = interceptorReq(config, config.params)
      }
    }
    return config
  }, error => {
    return Promise.error(error)
  })
  service.interceptors.response.use(response => {
    // 只有不是持续显示loading时
    let showLoading = response.config.showLoading || SHOW_LOADING.HIDE
    if (showLoading !== SHOW_LOADING.CONTINUED) {
      clearLoading()
    }
    return response
  }, error => {
    clearLoading()
    responseError(error.response)
    return error.response
  })
  console.log(service,'service')
  return service
  // let requestConfig = {}
  // // 设置API的域名
  // $axios.setBaseURL('http://proxyapi.xms3.4846.com')
  // // 设置请求拦截
  // $axios.onRequest((config) => {

  //   requestConfig = {
  //     baseURL: config.baseURL,
  //     url: config.url,
  //     method: config.method,
  //     data: config.data,
  //     headers: config.headers,
  //     params: config.params,
  //   }
  //

  //   config.headers['Content-Type'] = 'application/json'
  //   /* 如果你需要token */
  //   // const token = store.state.token || ''
  //   // if (token) {
  //   //   config.headers.Authorization = `Bearer ${token}`
  //   // }
  //   return config
  // })
  // // 设置响应拦截
  // $axios.onResponse((response) => {
  //   response.config.endTime = new Date().getTime()
  //   const status = response.status
  //
  //   if (+status === 200) {
  //     // 打印出每个接口的响应时间，如果慢了就捶后端，让他优化！！！
  //     console.info(response.config.url,'请求时间',response.config.endTime - response.config.startTime + 'ms'
  //     )
  //     // 用于调试
  //     if (process.env.DEBUG) {
  //       console.info('$axios.onResponse', response.data)
  //     }
  //     // 返回接口数据
  //     return response.data
  //   } else {
  //     // 如果请求失败的，打印出相应的错误信息，更好的修改。
  //     const responseConfig = response ? response.config : {}
  //     console.error('响应拦截报错提示： ', {
  //       url: responseConfig.baseURL + responseConfig.url,
  //       status: response.status,
  //       statusText: response.statusText,
  //       method: responseConfig.method,
  //       headers: responseConfig.headers,
  //       data: responseConfig.data,
  //       params: responseConfig.params,
  //       responseData: response.data,
  //     })
  //   }
  // })
  //

  // // 最后返回$axios对象
  // return $axios
}

function indexApi($axios) {
  return {
    get: (url, params) => {
      return $axios.get(url,params)
    },
  }
}

export default function({ $axios, store }, inject) {
  inject('http1', indexApi(axiosConfig($axios)))
}
