import router from '@/router.js'
import axios from 'axios'
import store from '@/store/index.js'
import uri from '@/api/index'
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
  let service = axios.create(config)
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
  return service
}

function indexApi(service) {
  return {
    post(url, data) {
      return service.post(url, data)
    },
    get(url, params) {
      return service.get(url, {params})
    },
    upload(url, data, onUploadProgress) { // 上传文件
      return upload(url, data, onUploadProgress)
    },
    download(url, params) { // 下载
      download(url, params)
    },
    form(url, fromData, method) { // 提交的参数提实体
      return service.request({
        url: uri.getReqBaseUrl() + url,
        method: method || 'post',
        data: fromData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}

export default function({ $axios, store }, inject) {
  inject('http', indexApi(axiosConfig()))
}
