// 首页
export const INDEX_MI = {
  title: '动态代理_隧道代理_隧道代理搭建-旋风云',
  meta: [
    {name: 'keywords', content: '动态代理_隧道代理_隧道代理搭建'},
    {name: 'description', content: '旋风云隧道代理是基于高性能主机构建的动态代理服务器，隧道代理搭建支持云端自动切换全国各地ip，功能强大、使用简单，是数据采集的利器'}
  ]
}

// 购买代理
export const AGENT_MI = {
  title: '动态代理ip_隧道代理ip_爬虫代理-旋风云',
  meta: [
    {name: 'keywords', content: '动态代理ip_隧道代理ip_爬虫代理'},
    {name: 'description', content: '旋风云隧道代理ip是基于高性能主机构建的服务器提供的动态代理ip，支持云端自动切换全国各地ip，可用于爬虫代理，功能强大、使用简单，是数据采集的利器'}
  ]
}

// 文档中心-接入指南
export const LIBRARY_MI = {
  title: '接入指南文档中心_代理ip动态_代理隧道-旋风云',
  meta: [
    {name: 'keywords', content: '接入指南文档中心_代理ip动态_代理隧道'},
    {name: 'description', content: '旋风云文档中心，提供代理服务产品接入指南，帮助您快速在项目或软件中接入动态代理。旋风云提供稳定优质的HTTP隧道、SOCKS隧道、动态代理、爬虫代理'}
  ]
}

// 文档中心-服务说明
export const LIBRARY_FW_MI = {
  title: '服务说明文档中心_动态代理的实现_动态国内ip代理-旋风云',
  meta: [
    {name: 'keywords', content: '服务说明文档中心_动态代理的实现_动态国内ip代理'},
    {name: 'description', content: '旋风云文档中心，提供代理服务产品服务说明，帮助您快速在项目或软件中接入动态代理。旋风云提供稳定优质的HTTP隧道、SOCKS隧道、动态代理、爬虫代理'}
  ]
}

// 文档中心-常见问题
export const LIBRARY_WT_MI = {
  title: '常见问题文档中心_代理ip动态_动态http代理-旋风云',
  meta: [
    {name: 'keywords', content: '常见问题文档中心_代理ip动态_动态http代理'},
    {name: 'description', content: '旋风云文档中心，提供代理服务产品常见问题，解决您使用代理服务产品中遇到的问题。旋风云提供稳定优质的HTTP隧道、SOCKS隧道、动态代理、爬虫代理'}
  ]
}

export const LIBRARY_JR_CODE = (code) => {
  return {
    title: `${code}接入指南文档中心_${code}动态代理_${code}隧道代理-旋风云`,
    meta: [
      {name: 'keywords', content: `${code}接入指南文档中心_${code}动态代理_${code}隧道代理`},
      {
        name: 'description',
        content: `旋风云文档中心，提供代理服务产品${code}接入指南，帮助您快速在${code}项目中接入动态代理。旋风云提供稳定优质的HTTP隧道、SOCKS隧道、动态代理、爬虫代理`
      }
    ]
  }
}

const codeArray = ['java', 'python', 'nodejs', 'js', 'ts']
// 文档中心-接入指南-代码接入指南
export const LIBRARY_JR_MI = (type, code) => {
  if (type === 'guide') { // 接入指南
    let librarySeo = LIBRARY_MI
    codeArray.forEach(item => {
      if (code.toLowerCase().indexOf(item) > -1) {
        librarySeo = LIBRARY_JR_CODE(item)
      }
    })
    return librarySeo
  } else if (type === 'service') {
    return LIBRARY_FW_MI
  } else if (type === 'question') {
    return LIBRARY_WT_MI
  } else if (type === 'protocol') {
    return ABOUT_MI
  } else {
    return LIBRARY_JR_CODE(code)
  }
}

// 行业资讯列表
export const INFORMATION_MI_LIST = {
  title: '行业资讯_动态ip代理地址_代理的动态ip-旋风云',
  meta: [
    {name: 'keywords', content: '行业资讯_动态ip代理地址_代理的动态ip'},
    {name: 'description', content: '旋风云行业资讯专区，为您提供云计算行业第一手新闻资讯。旋风云提供稳定优质的HTTP隧道、SOCKS隧道、动态代理、爬虫代理'}
  ]
}

// 行业资讯-详情
export const INFORMATION_MI_DETAIL = (title, content) => {
  return {
    title: `${title}-旋风云`,
    meta: [
      {name: 'keywords', content: title},
      {name: 'description', content}
    ]
  }
}

// 关于我们
export const ABOUT_MI = {
  meta: [
    {name: 'robots', content: 'nofollow'}
  ]
}

export default {
  INDEX_MI,
  AGENT_MI,
  LIBRARY_JR_MI,
  INFORMATION_MI_DETAIL,
  INFORMATION_MI_LIST,
  ABOUT_MI
}
