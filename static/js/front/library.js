import {
  HTTP_C,
  HTTP_DELPHI,
  HTTP_GO,
  HTTP_NODEJS,
  HTTP_JAVA,
  HTTP_PYTHON,
  HTTP_PHP,
  HTTP_SELENIUM,
  SOCK_JAVA
} from './code'
// 一级头部菜单
export const TAB = {
  service: 'service',
  guide: 'guide',
  question: 'question',
  protocol: 'protocol'
}

// 二级菜单
export const LIBRARY_TYPE = {
  Q_BUY: 'buy',
  Q_RENEW: 'Q_RENEW',
  Q_FEATURE: 'feature',
  Q_FAIL: 'fail',
  Q_FINANCE: 'finance',
  TUNNEL: 'tunnel',
  TUNNEL_HTTP: 'http',
  TUNNEL_HTTP_JAVA: 'httpJava',
  TUNNEL_HTTP_C: 'httpC',
  TUNNEL_HTTP_DELPHI: 'httpDelphi',
  TUNNEL_HTTP_GO: 'httpGo',
  TUNNEL_HTTP_NODE: 'httpNode',
  TUNNEL_HTTP_PYTHON: 'httpPython',
  TUNNEL_HTTP_PHP: 'httpPhp',
  TUNNEL_HTTP_SELENIUM: 'httpSelenium',
  TUNNEL_SOCKS: 'sock',
  TUNNEL_SOCKS_JAVA: 'sockJava',
  C_REGISTER: 'register',
  C_PRIVACY: 'privacy',
  C_SECURITY: 'security'
}

export const LIBRARY_TYPE_NAME = {
  Q_BUY: '购买类问题',
  Q_RENEW: '续费类问题',
  Q_FEATURE: '功能类问题',
  Q_FAIL: '错误类问题',
  Q_FINANCE: '财务类问题',
  TUNNEL: '隧道代理',
  TUNNEL_HTTP: '隧道代理(HTTP)',
  TUNNEL_SOCKS: '隧道代理(SOCKS5)',
  C_REGISTER: '注册协议',
  C_PRIVACY: '隐私协议',
  C_SECURITY: '安全协议'
}

export const GUIDE_CODE = {
  Python: 'Python',
  Java: 'Java',
  C: 'C#',
  DELPHI: 'Delphi',
  GO: 'Go',
  Node: 'NodeJs',
  Php: 'PHP',
  PhpCurl: 'curl',
  PhpStream: 'stream',
  Selenium: 'Selenium',
  SeleniumPhantomJsJava: 'PhantomJS(Java)',
  SeleniumFirefoxDriverJava: 'FirefoxDriver(Java)',
  SeleniumPhantomJsPython: 'PhantomJS(Python)',
  SeleniumChromePython: 'Chrome(Python)',
  NodeHttp: 'http',
  NodeRequest: 'request',
  HttpClientName: 'HttpClient(4.5+)',
  HttpClientValue: 'HttpClient',
  OkHttp: 'OkHttp',
  WebMagic: 'WebMagic',
  urllib: 'urllib',
  aioHttp: 'aioHttp'
}

export const GUIDE_TEXT = {
  verification: '<div>隧道代理拥有两种授权模式：</div>\n' +
    '<div>● 请求头（默认）</div>\n' +
    '<div>通过用户名/密码的形式进行身份认证，该认证信息最终会转换为『Authorization』协议头跟随请求一起发出。为支持请求部分目标网站也需要『Authorization』协议头的情况，平台亦支持通过增加『Proxy-Authorization』或『X-XFY-Authorization』协议头进行隧道身份验证。</div>\n' +
    '<div>● 绑定IP（白名单）</div>\n' +
    '<div>只须绑定用户发起请求的服务器IP即可。一条代理隧道可以绑定多个IP。</div>',
  step: '<div>1、在旋风云注册账号后，前往会员中心的 “购买代理” 页中选购隧道代理产品。</div>\n' +
    '<div>2、完成支付后，在会员中心控制台的 “代理管理” 页中会看到已经购买到的隧道代理。</div>\n' +
    '<div>3、每一条代理隧道都拥有独立的 “代理账号” 及 “代理密钥”，分别对应代理验证授权的 “用户名” 及 “密码”。</div>\n' +
    '<div>4、通过浏览器使用隧道代理，请设置浏览器代理的服务器地址及端口。设置并保存配置后，在浏览器中打开任意网址，会弹出一个授权验证窗口，输入隧道的 “代理账号” 及 “代理密钥” 后，确认即可。</div>\n' +
    '<div>5、在代码中使用隧道代理时，如果代码的请求方法不支持以用户名/密码的形式设置身份认证信息，则需要手动为每个请求增加<span class="main-blue"> 『Proxy-Authorization』或『X-XFY-Authorization』</span>协议头，其值为<span class="main-blue">『Basic&lt;base64&gt;』</span>。其中<span class="main-blue">『&lt;base64&gt;』</span> 为 “代理账号” 和 “代理密钥” 通过 ”:“ 拼接后，再经由BASE64编码得到的字符串。 正确设置后，发出的请求都将包含如下格式的协议头信息：</div>'
}

export const GUIDE_CODE_LIST = {
  TUNNEL_HTTP: [
    {
      name: GUIDE_CODE.C,
      value: GUIDE_CODE.C,
      path: LIBRARY_TYPE.TUNNEL_HTTP_C
    },
    {
      name: GUIDE_CODE.DELPHI,
      value: GUIDE_CODE.DELPHI,
      path: LIBRARY_TYPE.TUNNEL_HTTP_DELPHI
    },
    {
      name: GUIDE_CODE.GO,
      value: GUIDE_CODE.GO,
      path: LIBRARY_TYPE.TUNNEL_HTTP_GO
    },
    {
      name: GUIDE_CODE.Java,
      value: GUIDE_CODE.Java,
      path: LIBRARY_TYPE.TUNNEL_HTTP_JAVA
    },
    {
      name: GUIDE_CODE.Node,
      value: GUIDE_CODE.Node,
      path: LIBRARY_TYPE.TUNNEL_HTTP_NODE
    },
    {
      name: GUIDE_CODE.Python,
      value: GUIDE_CODE.Python,
      path: LIBRARY_TYPE.TUNNEL_HTTP_PYTHON
    },
    {
      name: GUIDE_CODE.Php,
      value: GUIDE_CODE.Php,
      path: LIBRARY_TYPE.TUNNEL_HTTP_PHP
    },
    {
      name: GUIDE_CODE.Selenium,
      value: GUIDE_CODE.Selenium,
      path: LIBRARY_TYPE.TUNNEL_HTTP_SELENIUM
    }
  ],
  TUNNEL_SOCKS: [
    {
      name: GUIDE_CODE.Java,
      value: GUIDE_CODE.Java,
      path: LIBRARY_TYPE.TUNNEL_SOCKS_JAVA
    }
  ]
}

export const GUIDE_CODE_LAN = {
  [LIBRARY_TYPE.TUNNEL_HTTP_C]: [
    {name: GUIDE_CODE.C, value: GUIDE_CODE.C, code: HTTP_C.c}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_DELPHI]: [
    {name: GUIDE_CODE.DELPHI, value: GUIDE_CODE.DELPHI, code: HTTP_DELPHI.delphi}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_GO]: [
    {name: GUIDE_CODE.GO, value: GUIDE_CODE.GO, code: HTTP_GO.go}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_NODE]: [
    {name: GUIDE_CODE.NodeHttp, value: GUIDE_CODE.NodeHttp, code: HTTP_NODEJS.http},
    {name: GUIDE_CODE.NodeRequest, value: GUIDE_CODE.NodeRequest, code: HTTP_NODEJS.request}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_JAVA]: [
    {name: GUIDE_CODE.HttpClientName, value: GUIDE_CODE.HttpClientValue, code: HTTP_JAVA.HttpClient},
    {name: GUIDE_CODE.OkHttp, value: GUIDE_CODE.OkHttp, code: HTTP_JAVA.OkHttp},
    {name: GUIDE_CODE.WebMagic, value: GUIDE_CODE.WebMagic, code: HTTP_JAVA.WebMagic}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_PYTHON]: [
    {name: GUIDE_CODE.urllib, value: GUIDE_CODE.urllib, code: HTTP_PYTHON.urllib},
    {name: GUIDE_CODE.aioHttp, value: GUIDE_CODE.aioHttp, code: HTTP_PYTHON.aioHttp}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_PHP]: [
    {name: GUIDE_CODE.PhpCurl, value: GUIDE_CODE.PhpCurl, code: HTTP_PHP.curl},
    {name: GUIDE_CODE.PhpStream, value: GUIDE_CODE.PhpStream, code: HTTP_PHP.stream}
  ],
  [LIBRARY_TYPE.TUNNEL_HTTP_SELENIUM]: [
    {
      name: GUIDE_CODE.SeleniumPhantomJsJava,
      value: GUIDE_CODE.SeleniumPhantomJsJava,
      code: HTTP_SELENIUM.phantomJSJava
    },
    {
      name: GUIDE_CODE.SeleniumFirefoxDriverJava,
      value: GUIDE_CODE.SeleniumFirefoxDriverJava,
      code: HTTP_SELENIUM.firefoxDriverJava
    },
    {
      name: GUIDE_CODE.SeleniumPhantomJsPython,
      value: GUIDE_CODE.SeleniumPhantomJsPython,
      code: HTTP_SELENIUM.phantomJSPython
    }
  ],
  [LIBRARY_TYPE.TUNNEL_SOCKS_JAVA]: [
    {name: GUIDE_CODE.HttpClientName, value: GUIDE_CODE.HttpClientValue, code: SOCK_JAVA.HttpClient}
  ]
}

export const GUIDE_TYPE = {
  TUNNEL_HTTP: [
    {title: '代码接入指南', list: GUIDE_CODE_LIST.TUNNEL_HTTP, text: '', key: LIBRARY_TYPE_NAME.TUNNEL_HTTP},
    {title: '隧道验证方式', list: [], text: GUIDE_TEXT.verification},
    {title: '服务接入步骤', list: [], text: GUIDE_TEXT.step}
  ],
  TUNNEL_SOCKS: [
    {title: '代码接入指南', list: GUIDE_CODE_LIST.TUNNEL_SOCKS, text: '', key: LIBRARY_TYPE_NAME.TUNNEL_HTTP},
    {title: '隧道验证方式', list: [], text: GUIDE_TEXT.verification},
    {title: '服务接入步骤', list: [], text: GUIDE_TEXT.step}
  ]
}

export const HEADER_TAB = [
  {
    name: '服务说明',
    section: '产品类型',
    code: TAB.service,
    path: '/library/' + TAB.service + '/' + LIBRARY_TYPE.TUNNEL,
    list: [{
      name: '隧道代理',
      key: LIBRARY_TYPE.TUNNEL,
      alias: [],
      path: '/library/' + TAB.service + '/' + LIBRARY_TYPE.TUNNEL
    }]
  },
  {
    name: '接入指南',
    section: '产品类型',
    code: TAB.guide,
    path: '/library/' + TAB.guide + '/' + LIBRARY_TYPE.TUNNEL_HTTP,
    list: [
      {
        name: '隧道代理(HTTP)',
        key: LIBRARY_TYPE.TUNNEL_HTTP,
        alias: [LIBRARY_TYPE.TUNNEL_HTTP_PYTHON, LIBRARY_TYPE.TUNNEL_HTTP_JAVA, LIBRARY_TYPE.TUNNEL_HTTP_C,
          LIBRARY_TYPE.TUNNEL_HTTP_DELPHI, LIBRARY_TYPE.TUNNEL_HTTP_SELENIUM, LIBRARY_TYPE.TUNNEL_HTTP_PHP,
          LIBRARY_TYPE.TUNNEL_HTTP_NODE, LIBRARY_TYPE.TUNNEL_HTTP_GO],
        path: '/library/' + TAB.guide + '/' + LIBRARY_TYPE.TUNNEL_HTTP
      },
      {
        name: '隧道代理(SOCKS5)',
        key: LIBRARY_TYPE.TUNNEL_SOCKS,
        alias: [LIBRARY_TYPE.TUNNEL_SOCKS_JAVA],
        path: '/library/' + TAB.guide + '/' + LIBRARY_TYPE.TUNNEL_SOCKS
      }
    ]
  },
  {
    name: '常见问题',
    section: '问题类型',
    code: TAB.question,
    path: '/library/' + TAB.question + '/' + LIBRARY_TYPE.Q_BUY,
    list: [
      {
        name: '购买类问题',
        key: LIBRARY_TYPE.Q_BUY,
        alias: [],
        path: '/library/' + TAB.question + '/' + LIBRARY_TYPE.Q_BUY
      },
      {
        name: '功能类问题',
        key: LIBRARY_TYPE.Q_FEATURE,
        alias: [],
        path: '/library/' + TAB.question + '/' + LIBRARY_TYPE.Q_FEATURE
      },
      {name: '错误类问题', key: LIBRARY_TYPE.Q_FAIL, path: '/library/' + TAB.question + '/' + LIBRARY_TYPE.Q_FAIL},
      {name: '财务类问题', key: LIBRARY_TYPE.Q_FINANCE, path: '/library/' + TAB.question + '/' + LIBRARY_TYPE.Q_FINANCE}
    ]
  },
  {
    name: '合同协议',
    section: '合同协议',
    code: TAB.protocol,
    path: '/library/' + TAB.protocol + '/' + LIBRARY_TYPE.C_REGISTER,
    list: [
      {name: '注册协议', key: LIBRARY_TYPE.C_REGISTER, path: '/library/' + TAB.protocol + '/' + LIBRARY_TYPE.C_REGISTER},
      {name: '隐私协议', key: LIBRARY_TYPE.C_PRIVACY, path: '/library/' + TAB.protocol + '/' + LIBRARY_TYPE.C_PRIVACY},
      {name: '安全协议', key: LIBRARY_TYPE.C_SECURITY, path: '/library/' + TAB.protocol + '/' + LIBRARY_TYPE.C_SECURITY}
    ]
  }]

export const SECTION_NAME = {
  [TAB.service]: '产品类型',
  [TAB.guide]: '产品类型',
  [TAB.question]: '问题类型',
  [TAB.protocol]: '合同协议'
}

export const PRODUCT_LIST = {
  service: [{name: LIBRARY_TYPE_NAME.TUNNEL, key: LIBRARY_TYPE.TUNNEL, path: '/library/' + TAB.service + '/index'}],
  guide: [
    {name: LIBRARY_TYPE_NAME.TUNNEL_HTTP, key: LIBRARY_TYPE.TUNNEL_HTTP, path: '/library/' + TAB.guide + '/index'},
    {name: LIBRARY_TYPE_NAME.TUNNEL_SOCKS, key: LIBRARY_TYPE.TUNNEL_SOCKS, path: '/library/' + TAB.guide + '/index'}
  ],
  question: [
    {name: LIBRARY_TYPE_NAME.Q_BUY, key: LIBRARY_TYPE.Q_BUY, path: '/library/' + TAB.question + '/index'},
    {name: LIBRARY_TYPE_NAME.Q_FEATURE, key: LIBRARY_TYPE.Q_FEATURE, path: '/library/' + TAB.question + '/index'},
    {name: LIBRARY_TYPE_NAME.Q_FAIL, key: LIBRARY_TYPE.Q_FAIL, path: '/library/' + TAB.question + '/index'},
    {name: LIBRARY_TYPE_NAME.Q_FINANCE, key: LIBRARY_TYPE.Q_FINANCE, path: '/library/' + TAB.question + '/index'}
  ],
  protocol: [
    {name: LIBRARY_TYPE_NAME.C_REGISTER, key: LIBRARY_TYPE.C_REGISTER, path: '/library/' + TAB.protocol + '/index'},
    {name: LIBRARY_TYPE_NAME.C_PRIVACY, key: LIBRARY_TYPE.C_PRIVACY, path: '/library/' + TAB.protocol + '/index'},
    {name: LIBRARY_TYPE_NAME.C_SECURITY, key: LIBRARY_TYPE.C_SECURITY, path: '/library/' + TAB.protocol + '/index'}
  ]
}
export const QUESTIONS = {
  Q_BUY: [
    {
      question: '1. 在哪里购买？可以先试用吗？',
      answer:
        '<div>我们为新用户提供了4小时免费试用，另外我们还提供了包天的套餐，用户可购买体验。' +
        '<a class="main-blue" data-type="buy" data-href="/agent/buy">进入购买页面&gt;</a>' +
        '</div>'
    },
    {question: '2. 购买后可以退款吗？', answer: '<div>由于产品提供免费测试，所以一经出售，概不退款；</div>\n' + '如有特殊情况，可联系客服。'},
    {
      question: '3. 各购买/续费周期分别是多少天？',
      answer:
        '<div>包月是按自然月算的：28~31天，比如3月3日购买的4月3日到期，3月31日购买的4月30日到期；</div>\n' +
        '<div>包年是按自然年算的，平年365天，闰年366天；</div>\n' +
        '<div>半年是183天。</div>'
    }
  ],
  Q_RENEW: [
    {question: '可以免费试用吗？', answer: '我们为新用户提供了一次4小时的免费体验以及两次2小时的免费体验。'},
    {question: '可以免费试用吗？', answer: '我们为新用户提供了一次4小时的免费体验以及两次2小时的免费体验。'},
    {question: '可以免费试用吗？', answer: '我们为新用户提供了一次4小时的免费体验以及两次2小时的免费体验。'},
    {question: '可以免费试用吗？', answer: '我们为新用户提供了一次4小时的免费体验以及两次2小时的免费体验。'}
  ],
  Q_FEATURE: [
    {
      question: '1. 为什么隧道代理不需要获取IP？',
      answer:
        '<div>因为隧道代理是云端自动更换IP，所以不需要用户手动更换IP，也就不需要获取IP。</div>\n' +
        '<div>隧道代理会将用户发送的请求转发到不同的代理IP。</div>'
    },
    {question: '2. 并发数是什么意思？ ', answer: '并发数是指一秒内可发起的总请求数。'},
    {
      question: '3. 高匿名、匿名和透明代理有什么区别？',
      answer:
        '<div>一、透明代理\n' +
        '<div>使用透明爬虫代理，对方服务器可以知道你使用了代理，并且也知道你的真实IP。</div>\n' +
        '<div>透明爬虫代理访问对方服务器所带的HTTP头信息如下：</div>\n' +
        '<div>REMOTE_ADDR = 代理服务器IP</div>\n' +
        '<div>HTTP_VIA = 代理服务器IP</div>\n' +
        '<div>HTTP_X_FORWARDED_FOR = 你的真实IP</div>\n' +
        '<div>二、匿名代理</div>\n' +
        '<div>匿名代理隐藏了你的真实IP，但是向访问对象透露了你是使用代理服务器访问他们的。</div>\n' +
         '<div>REMOTE_ADDR = 代理服务器IP</div>\n' +
        '<div>HTTP_VIA = 代理服务器IP</div>\n' +
        '<div>HTTP_X_FORWARDED_FOR = 代理服务器IP</div>\n' +
        '<div>三、混肴代理</div>\n' +
        '<div>如上，与匿名代理相同，如果使用了混淆代理，别人还是能知道你在用代理，但是会得到一个假的IP地址，伪装的更逼真。</div>\n' +
        '<div>混淆代理访问对方服务器所带的HTTP头信息如下：</div>\n' +
        '<div>REMOTE_ADDR = 代理服务器IP</div>\n' +
        '<div>HTTP_VIA = 代理服务器IP</div>\n' +
        '<div>HTTP_X_FORWARDED_FOR = 随机的伪装IP</div>\n' +
        '<div>四、高匿名代理</div>\n' +
        '<div>使用高匿名代理，对方服务器不知道你使用了代理，更不知道你的真实IP。</div>\n' +
        '<div>高匿名爬虫代理访问对方服务器所带的HTTP头信息如下：</div>\n' +
        '<div>REMOTE_ADDR = 代理服务器IP</div>\n' +
        '<div>HTTP_VIA 不显示</div>\n' +
        '<div>HTTP_X_FORWARDED_FOR 不显示高匿名爬虫代理隐藏了你的真实IP，同时访问对象也不知道你使用了代理，因此隐蔽度最高。</div>'
    }
  ],
  Q_FAIL: [
    {
      question: '1. 云服务器返回”400 Bad Request“是什么问题？ ',
      answer:
        '<div>客户端错误，如：请求行过长（目前最长支持4096字节）、请求头部过长（目前最长支持8192字节）等；</div>\n' +
        '<div>如果是旋风云返回的错误码，都会增加X-XFY-Response: true的响应头，下同。</div>'
    },
    {question: '2. 云服务器返回”402 Payment Required“是什么问题？ ', answer: '产品过期了，请续费。'},
    {
      question: '3. 云服务器返回”407 Proxy Authentication Required“是什么问题？ ',
      answer:
        '<div>代理账号或密钥错误</div>\n' +
        '<div>所发出的请求中，未包含或者包含了错误的『Authorization』、『Proxy-Authorization』或『X-XFY-Authorization』头，可使用 WireShark 抓包检查发出的请求头。</div>'
    },
    {question: '4. 云服务器返回”429 Too Many Requests“是什么问题？ ', answer: '同一时间并发数过多，超出了购买的隧道代理总并发数。可在后台升级产品增加并发数。'},
    {question: '5. 云服务器返回”500 Internal Server Error“是什么问题？ ', answer: '服务器内部错误，请重试或者联系客服。'}
  ],
  Q_FINANCE: [
    {
      question: '1. 可以开发票吗？ ',
      answer:
        '<div>可以开发票哦，购买后可直接在会员中心—财务管理—订单管理;' +
        '<a class="main-blue" data-type="fill" data-href="/finance/order/manage">去申请发票&gt;</a></div>\n' +
        '<div>普票提供电子发票，您可自己在会员中心—财务管理—发票管理中下载；</div>\n' +
        '<div>专票提供纸质发票，我们会在5个工作日内开具发票并寄送到贵公司。</div>'
    },
    {question: '2. 订单申请发票是否有时间限制？ ', answer: '有时间限制。订单支付后请在一年内申请发票。'}
  ]
}

export const QUESTION_LIST = [
  {
    key: LIBRARY_TYPE.Q_BUY,
    products: QUESTIONS.Q_BUY
  },
  {
    key: LIBRARY_TYPE.Q_RENEW,
    products: QUESTIONS.Q_RENEW
  },
  {
    key: LIBRARY_TYPE.Q_FEATURE,
    products: QUESTIONS.Q_FEATURE
  },
  {
    key: LIBRARY_TYPE.Q_FAIL,
    products: QUESTIONS.Q_FAIL
  },
  {
    key: LIBRARY_TYPE.Q_FINANCE,
    products: QUESTIONS.Q_FINANCE
  }
]

export const GUIDE_LIST = [
  {
    section: SECTION_NAME.GUIDE,
    typeName: LIBRARY_TYPE_NAME.TUNNEL_HTTP,
    key: LIBRARY_TYPE.TUNNEL_HTTP,
    products: GUIDE_TYPE.TUNNEL_HTTP
  },
  {
    section: SECTION_NAME.GUIDE,
    typeName: LIBRARY_TYPE_NAME.TUNNEL_SOCKS,
    key: LIBRARY_TYPE.TUNNEL_SOCKS,
    products: GUIDE_TYPE.TUNNEL_SOCKS
  }
]

export const SERVICE_TEXT = {
  speciality: '<div>无须切换IP，每一个请求使用一个随机IP。</div>\n' +
    '<div>隧道代理有并发请求限制，默认每秒只允许 5 个并发。如果需要更多并发数，请额外购买。</div>',
  introduction: '<div>隧道代理基于HTTP或者SOCKS5协议，支持HTTP/HTTPS/SOCKS5协议的数据接入。</div>\n' +
    '<div>平台在云端维护一个全局IP池供隧道代理使用，池中的IP会不间断更新，以保证IP池中有足够多的IP供用户使用。</div>\n' +
    '<div>动态版隧道代理会为每个请求从IP池中挑选一个随机IP。</div>',
  advantage: '自有数据节点，网络稳定，速度快。\n' +
    '<div>百万级别IP池，海量IP可用。</div>\n' +
    '<div>毫秒级别更换IP，响应迅速。</div>\n' +
    '<div>无须频繁更换代理服务器地址和端口号，方便快捷。</div>'
}

export const SERVICE_TYPE_LIST = [
  {title: '产品特性', text: SERVICE_TEXT.speciality},
  {title: '产品说明', text: SERVICE_TEXT.introduction},
  {title: '资源优势', text: SERVICE_TEXT.advantage}
]
