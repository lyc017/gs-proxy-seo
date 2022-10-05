export const HTTP_JAVA = {
  HttpClient: `import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.LayeredConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.auth.BasicScheme;
import org.apache.http.impl.client.BasicAuthCache;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;

public class HttpClientHttpDemo {
    // 代理服务器
    final static String PROXY_HOST = "proxy1.xuanfengyun.com";
    final static int PROXY_PORT = 28887;

    // 代理隧道验证信息
    final static String PROXY_USER = "X89EIPNC1T2L9M2G";
    final static String PROXY_PASS = "6P5K12MPDF4KWQB2";

    private static PoolingHttpClientConnectionManager cm = null;
    private static HttpHost httpHost = null;
    private static CredentialsProvider credsProvider = null;
    private static RequestConfig reqConfig = null;

    static {
        ConnectionSocketFactory plainsf = PlainConnectionSocketFactory.getSocketFactory();
        LayeredConnectionSocketFactory sslsf = SSLConnectionSocketFactory.getSocketFactory();

        Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()
            .register("http", plainsf)
            .register("https", sslsf)
            .build();

        cm = new PoolingHttpClientConnectionManager(registry);
        cm.setMaxTotal(20);
        cm.setDefaultMaxPerRoute(5);

        httpHost = new HttpHost(PROXY_HOST, PROXY_PORT);

        credsProvider = new BasicCredentialsProvider();
        credsProvider.setCredentials(new AuthScope(PROXY_HOST, PROXY_PORT),
                        new UsernamePasswordCredentials(PROXY_USER, PROXY_PASS));

        reqConfig = RequestConfig.custom()
            .setConnectionRequestTimeout(5000)
            .setConnectTimeout(5000)
            .setSocketTimeout(5000)
            .setExpectContinueEnabled(false)
            .setProxy(httpHost)
            .build();
    }

    public static void main(String[] args) {
        // 当目标页面为HTTPS协议，自Java8 Update 111起无法通过代理进行隧道传输，可如此设置解决问题：
        System.setProperty("jdk.http.auth.tunneling.disabledSchemes", "");

        String targetUrl = "https://www.xuanfengyun.com/remote_addr";

        HttpGet httpGet = new HttpGet(targetUrl);

        CloseableHttpResponse httpResp = null;

        try {
            httpGet.setConfig(reqConfig);
            // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
            httpGet.addHeader("Accept-Encoding", "gzip, deflate, sdch");

            CloseableHttpClient httpClient = HttpClients.custom()
                .setConnectionManager(cm)
                .setDefaultCredentialsProvider(credsProvider)
                .build();

            AuthCache authCache = new BasicAuthCache();
            authCache.put(httpHost, new BasicScheme());

            HttpClientContext context = HttpClientContext.create();
            context.setAuthCache(authCache);

            httpResp = httpClient.execute(httpGet, context);

            BufferedReader rd = new BufferedReader(new InputStreamReader(httpResp.getEntity().getContent()));

            String line = "";
            while((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (httpResp != null) {
                    httpResp.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}`,
  OkHttp: `import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.util.concurrent.TimeUnit;

import okhttp3.Authenticator;
import okhttp3.ConnectionPool;
import okhttp3.Credentials;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.Route;

public class OkHttpHttpDemo {
    // 代理服务器
    final static String PROXY_HOST = "proxy1.xuanfengyun.com";
    final static Integer PROXY_PORT = 28887;

    // 代理隧道验证信息
    final static String PROXY_USER = "X89EIPNC1T2L9M2G";
    final static String PROXY_PASS = "6P5K12MPDF4KWQB2";

    public static void main(String[] args) throws IOException {
        // 当目标页面为HTTPS协议，自Java8 Update 111起无法通过代理进行隧道传输，可如此设置解决问题：
        System.setProperty("jdk.http.auth.tunneling.disabledSchemes", "");

        String targetUrl = "https://www.xuanfengyun.com/remote_addr";

        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(PROXY_HOST, PROXY_PORT));

        Authenticator proxyAuthenticator = new Authenticator() {
            public Request authenticate(Route route, Response response) {
                String credential = Credentials.basic(PROXY_USER, PROXY_PASS);
                return response.request().newBuilder()
                        .header("Proxy-Authorization", credential)
                        .build();
            }
        };

        OkHttpClient client = new OkHttpClient().newBuilder()
                .connectTimeout(10, TimeUnit.SECONDS)
                .readTimeout(10, TimeUnit.SECONDS)
                .followRedirects(false)
                .followSslRedirects(false)
                .proxy(proxy)
                .proxyAuthenticator(proxyAuthenticator)
                .connectionPool(new ConnectionPool(5, 1, TimeUnit.SECONDS))
                .build();

        Request request = new Request.Builder()
                .url(targetUrl)
                // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
                .addHeader("Accept-Encoding", "gzip, deflate, sdch")
                .build();
        Response resp = client.newCall(request).execute();

        System.out.println(resp.body().string());
    }
}`,
  WebMagic: `import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.downloader.HttpClientDownloader;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.proxy.Proxy;
import us.codecraft.webmagic.proxy.SimpleProxyProvider;

/**
 * 基于WebMagic 0.7.3版本，关于WebMagic代理详细设置请看WebMagic官方文档
 **/
public class WebMagicHttpDemo implements PageProcessor {
    // 代理服务器
    final static String PROXY_HOST = "proxy1.xuanfengyun.com";
    final static int PROXY_PORT = 28887;

    // 代理隧道验证信息
    final static String PROXY_USER = "X89EIPNC1T2L9M2G";
    final static String PROXY_PASS = "6P5K12MPDF4KWQB2";

    private Site site = Site.me().setRetryTimes(3).setSleepTime(100)
    // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
        .addHeader("Accept-Encoding", "gzip, deflate, sdch");

    @Override
    public void process(Page page) {
        page.putField("html", page.getHtml());
    }

    @Override
    public Site getSite() {
        return site;
    }

    public static void main(String[] args) {
        String targetUrl = "https://www.xuanfengyun.com/remote_addr/";

        HttpClientDownloader httpClientDownloader = new HttpClientDownloader();
        httpClientDownloader.setProxyProvider(SimpleProxyProvider.from(
                                        new Proxy(PROXY_HOST, PROXY_PORT, PROXY_USER, PROXY_PASS)));

        Spider.create(new WebMagicHttpDemo()).setDownloader(httpClientDownloader).addUrl(targetUrl).thread(5).run();
    }
}`
}

export const HTTP_PYTHON = {
  urllib: `import gzip
from urllib import request

# 代理服务器
proxyHost = "proxy1.xuanfengyun.com"
proxyPort = "28887"

# 代理隧道验证信息
proxyUser = "X89EIPNC1T2L9M2G"
proxyPass = "6P5K12MPDF4KWQB2"

targetUrl = "https://www.xuanfengyun.com/remote_addr"

proxyMeta = "http://%(user)s:%(pass)s@%(host)s:%(port)s" % {
    "host" : proxyHost,
    "port" : proxyPort,
    "user" : proxyUser,
    "pass" : proxyPass,
}

proxy_handler = request.ProxyHandler({
    "http"  : proxyMeta,
    "https" : proxyMeta,
})

#auth = request.HTTPBasicAuthHandler()
#opener = request.build_opener(proxy_handler, auth, request.HTTPHandler)

opener = request.build_opener(proxy_handler)

# 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
headers = ('Accept-Encoding','gzip, deflate, sdch')
opener.addheaders = [headers]

request.install_opener(opener)
resp = request.urlopen(targetUrl).read()

# gzip解压缩
print (gzip.decompress(resp).decode('gbk'))`,
  aioHttp: `import aiohttp, asyncio

# 代理服务器
proxyHost = "proxy1.xuanfengyun.com"
proxyPort = "28887"

# 代理隧道验证信息
proxyUser = "X89EIPNC1T2L9M2G"
proxyPass = "6P5K12MPDF4KWQB2"

targetUrl = "https://www.xuanfengyun.com/remote_addr"

proxyServer = "http://%(user)s:%(pass)s@%(host)s:%(port)s" % {
    "host" : proxyHost,
    "port" : proxyPort,
    "user" : proxyUser,
    "pass" : proxyPass,
}

async def entry():
    conn = aiohttp.TCPConnector(verify_ssl=False)

    # 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
    async with aiohttp.ClientSession(headers={"Accept-Encoding": "gzip, deflate, sdch"}, connector=conn) as session:
        async with session.get(targetUrl, proxy=proxyServer) as resp:
            body = await resp.read()

            print(resp.status)
            print(body)

loop = asyncio.get_event_loop()
loop.run_until_complete(entry())
loop.run_forever()`
}

export const HTTP_C = {
  c: `// 代理服务器
string proxyHost = "proxy1.xuanfengyun.com";
string proxyPort = "28887";

// 代理隧道验证信息
string proxyUser = "X89EIPNC1T2L9M2G";
string proxyPass = "6P5K12MPDF4KWQB2";

string targetUrl = "https://www.xuanfengyun.com/remote_addr";

// 设置代理服务器
var proxy         = new WebProxy();
proxy.Address     = new Uri(string.Format("{0}:{1}", proxyHost, proxyPort));
proxy.Credentials = new NetworkCredential(proxyUser, proxyPass);

ServicePointManager.Expect100Continue = false;

var request = WebRequest.Create(targetUrl) as HttpWebRequest;

request.AllowAutoRedirect = true;
request.KeepAlive = true;
request.Method    = "GET";
request.Proxy     = proxy;

// 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
request.Headers.Add("Accept-Encoding", "gzip, deflate, sdch");

using (var response = request.GetResponse() as HttpWebResponse)
using (var sr = new StreamReader(response.GetResponseStream(), Encoding.UTF8))
{
    string htmlStr = sr.ReadToEnd();
}`
}

export const HTTP_DELPHI = {
  delphi: `interface

uses
    Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
    Dialogs, StdCtrls, IDHTTP;

type
    TForm1 = class(TForm)
        Button1: TButton;
        procedure Button1Click(Sender: TObject);
    private
        { Private declarations }
    public
        { Public declarations }
    end;

var
    Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
const
    // 代理服务器
    proxyServer = 'proxy1.xuanfengyun.com';
    proxyPort = 28887;

    // 代理隧道验证信息
    proxyUser = 'X89EIPNC1T2L9M2G';
    proxyPass = '6P5K12MPDF4KWQB2';

    targetUrl  = 'https://www.xuanfengyun.com/remote_addr';
var
    IDHTTP1 : TIDHTTP;
begin
    Application.ProcessMessages;
    IDHTTP1 := TIDHTTP.Create(nil);
    with IDHTTP1 do
    begin
        AllowCookies := True;
        HandleRedirects := True;
        ProxyParams.BasicAuthentication := True;
        ProxyParams.ProxyServer := proxyServer;
        ProxyParams.ProxyPort := proxyPort;
        ProxyParams.ProxyUsername := proxyUser;
        ProxyParams.ProxyPassword := proxyPass;
        // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
        Request.AcceptEncoding := 'gzip, deflate, sdch';
        IDHTTP1.Get(targetUrl);
    end;
end;

end.`
}

export const HTTP_GO = {
  go: `package main

import (
    "net/url"
    "net/http"
    "bytes"
    "fmt"
    "io/ioutil"
)

// 代理服务器
const proxyServer = "proxy1.xuanfengyun.com:28887"

// 代理隧道验证信息
const proxyUser  = "X89EIPNC1T2L9M2G";
const proxyPass  = "6P5K12MPDF4KWQB2";

type XFYProxy struct {
    AppID string
    AppSecret string
}

func (p XFYProxy) ProxyClient() http.Client {
    proxyUrl, _ := url.Parse("http://"+ p.AppID +":"+ p.AppSecret +"@"+ proxyServer)
    return http.Client{Transport: &http.Transport{Proxy: http.ProxyURL(proxyUrl)}}
}

func main()  {
    targetUrl := "https://www.xuanfengyun.com/remote_addr"

    // 初始化 proxy http client
    client := XFYProxy{AppID: proxyUser, AppSecret: proxyPass}.ProxyClient()

    request, _ := http.NewRequest("GET", targetUrl, bytes.NewBuffer([]byte(\`\`)))

    // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
    request.Header.Add("Accept-Encoding", "gzip, deflate, sdch")

    response, err := client.Do(request)

    if err != nil {
        panic("failed to connect: " + err.Error())
    } else {
        bodyByte, err := ioutil.ReadAll(response.Body)
        if err != nil {
            fmt.Println("读取 Body 时出错", err)
            return
        }
        response.Body.Close()

        body := string(bodyByte)

        fmt.Println("Response Status:", response.Status)
        fmt.Println("Response Header:", response.Header)
        fmt.Println("Response Body:\\n", body)
    }
}   `
}

export const HTTP_NODEJS = {
  http: `const http = require("http");
const url  = require("url");

const urlParsed   = url.parse(targetUrl);

// 代理服务器
const proxyHost = "proxy1.xuanfengyun.com";
const proxyPort = "28887";

// 代理隧道验证信息
const proxyUser = "X89EIPNC1T2L9M2G";
const proxyPass = "6P5K12MPDF4KWQB2";

const targetUrl = "https://www.xuanfengyun.com/remote_addr";

const base64    = new Buffer(proxyUser + ":" + proxyPass).toString("base64");

const options = {
    host    : proxyHost,
    port    : proxyPort,
    path    : targetUrl,
    method  : "GET",
    headers : {
        "Host"                : urlParsed.hostname,
        // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
        "Accept-Encoding"     : "gzip, deflate, sdch",
        "Proxy-Authorization" : "Basic " + base64
    }
};

http
    .request(options, function(res) {
        console.log("got response: " + res.statusCode);
    })
    .on("error", function(err) {
        console.log(err);
    })
    .end()
;  `,
  request: `const request = require("request");

// 代理服务器
const proxyHost = "proxy1.xuanfengyun.com";
const proxyPort = 28887;

// 代理隧道验证信息
const proxyUser = "X89EIPNC1T2L9M2G";
const proxyPass = "6P5K12MPDF4KWQB2";

const targetUrl = "https://www.xuanfengyun.com/remote_addr";

const proxyUrl = "http://" + proxyUser + ":" + proxyPass + "@" + proxyHost + ":" + proxyPort;

const proxiedRequest = request.defaults({'proxy': proxyUrl});

const options = {
    url     : targetUrl,
    headers : {
        // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
        "Accept-Encoding"     : "gzip, deflate, sdch"
    }
};

proxiedRequest
    .get(options, function (err, res, body) {
        console.log("got response: " + res.statusCode);
    })
    .on("error", function (err) {
        console.log(err);
    })
; `
}

export const HTTP_PHP = {
  curl: `// 代理服务器
$proxyServer = "proxy1.xuanfengyun.com:28887";

// 隧道身份信息
$proxyUser   = "X89EIPNC1T2L9M2G";
$proxyPass   = "6P5K12MPDF4KWQB2";

$targetUrl = "https://www.xuanfengyun.com/remote_addr";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);

curl_setopt($ch, CURLOPT_HTTPPROXYTUNNEL, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// 设置代理服务器
curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
curl_setopt($ch, CURLOPT_PROXY, $proxyServer);

// 设置隧道验证信息
curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_PROXYUSERPWD, "{$proxyUser}:{$proxyPass}");

curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727;)");
// 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate, sdch');

curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);

curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
//$info = curl_getinfo($ch);

curl_close($ch);

var_dump($result);`,
  stream: `// 代理服务器
$proxyServer = "proxy1.xuanfengyun.com:28887";

// 隧道身份信息
$proxyUser   = "X89EIPNC1T2L9M2G";
$proxyPass   = "6P5K12MPDF4KWQB2";

$targetUrl = "https://www.xuanfengyun.com/remote_addr";

$proxyAuth = base64_encode("{$proxyUser}:{$proxyPass}");

// 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
$headers = implode("\\r\\n", [
    "Proxy-Authorization: Basic {$proxyAuth}",
    "Accept-Encoding: gzip, deflate, sdch"
]);

$options = [
    "http" => [
        "proxy"  => $proxyServer,
        "header" => $headers,
        "method" => "GET",
    ],
];

$context = stream_context_create($options);

$result = file_get_contents($url, false, $context);

var_dump($result);  `
}

export const HTTP_SELENIUM = {
  phantomJSJava: `import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang.StringUtils;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

public class PhantomJSDriverDemo {
    // 代理服务器
    final static String PROXY_HOST = "proxy1.xuanfengyun.com";
    final static int PROXY_PORT = 28887;

    // 代理隧道验证信息
    final static String PROXY_USER = "X89EIPNC1T2L9M2G";
    final static String PROXY_PASS = "6P5K12MPDF4KWQB2";

    // 本机phantomjs的存储路径
    final static String PHANTOMJS_BINARY_PATH = "D:/phantomjs-2.1.1-windows/bin/phantomjs.exe";

    public static WebDriver getPhantomjsDriver() {
        return getPhantomjsDriver("", 0);
    }

    public static WebDriver getPhantomjsDriver(String proxyIp, int proxyPort) {
        System.setProperty("phantomjs.binary.path", PHANTOMJS_BINARY_PATH);

        WebDriver driver = null;
        DesiredCapabilities cap = DesiredCapabilities.phantomjs();

        if ((StringUtils.isNotBlank(proxyIp)) && (proxyPort != 0)) {
            String proxyIpAndPort = proxyIp + ":" + proxyPort;

            Proxy proxy = new Proxy();
            proxy.setHttpProxy(proxyIpAndPort).setFtpProxy(proxyIpAndPort).setSslProxy(proxyIpAndPort);

            cap.setCapability("avoidProxy", true);
            cap.setCapability("onlyProxySeleniumTraffic", true);

            System.setProperty("http.nonProxyHosts", "localhost");

            cap.setCapability("proxy", proxy);
        }

        driver = new PhantomJSDriver(cap);

        driver.manage().timeouts().implicitlyWait(5L, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        return driver;
    }

    public static WebDriver getPhantomjsDriver() {
        System.setProperty("phantomjs.binary.path", PHANTOMJS_BINARY_PATH);

        WebDriver driver = null;
        ArrayList cliArgsCap = new ArrayList();

        cliArgsCap.add("--proxy=" + PROXY_HOST + ":" + PROXY_PORT);
        cliArgsCap.add("--proxy-auth=" + PROXY_USER + ":" + PROXY_PASS);
        cliArgsCap.add("--proxy-type=http");

        DesiredCapabilities capabilities = DesiredCapabilities.phantomjs();

        capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_CLI_ARGS, cliArgsCap);

        driver = new PhantomJSDriver(capabilities);
        driver.manage().timeouts().implicitlyWait(5L, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        return driver;
    }

    public static void main(String[] args) {
        WebDriver driver = getPhantomjsDriver();

        driver.get("https://www.xuanfengyun.com/remote_addr");

        System.out.println(driver.getPageSource());
    }
}`,
  firefoxDriverJava: `import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.Platform;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.gargoylesoftware.htmlunit.DefaultCredentialsProvider;
import com.gargoylesoftware.htmlunit.WebClient;

public class HtmlUnitDriverProxyDemo {
    // 代理服务器
    final static String PROXY_SERVER = "proxy1.xuanfengyun.com:28887";

    // 代理隧道验证信息
    final static String PROXY_USER = "5E03340B54923127";
    final static String PROXY_PASS = "F9F8BCE0CF805EC5";

    public static void main(String[] args) throws JSONException {
        HtmlUnitDriver driver = getHtmlUnitDriver();

        driver.get("https://www.xuanfengyun.com/remote_addr");

        String title = driver.getTitle();
        System.out.println(title);
    }

    public static HtmlUnitDriver getHtmlUnitDriver() {
        HtmlUnitDriver driver = null;

        Proxy proxy = new Proxy();
        // 设置代理服务器地址
        proxy.setHttpProxy(PROXY_SERVER);

        DesiredCapabilities capabilities = DesiredCapabilities.htmlUnit();
        capabilities.setCapability(CapabilityType.PROXY, proxy);
        capabilities.setJavascriptEnabled(true);
        capabilities.setPlatform(Platform.WIN8_1);

        driver = new HtmlUnitDriver(capabilities) {
            @Override
            protected WebClient modifyWebClient(WebClient client) {
                DefaultCredentialsProvider creds = new DefaultCredentialsProvider();
                creds.addCredentials(PROXY_USER, PROXY_PASS);
                client.setCredentialsProvider(creds);
                return client;
            }
        };

        driver.setJavascriptEnabled(true);

        return driver;
    }
}    `,
  phantomJSPython: `from selenium import webdriver

# 代理服务器
proxyHost = "proxy1.xuanfengyun.com"
proxyPort = "28887"

# 代理隧道验证信息
proxyUser = "X89EIPNC1T2L9M2G"
proxyPass = "6P5K12MPDF4KWQB2"

service_args = [
    "--proxy-type=http",
    "--proxy=%(host)s:%(port)s" % {
        "host" : proxyHost,
        "port" : proxyPort,
    },
    "--proxy-auth=%(user)s:%(pass)s" % {
        "user" : proxyUser,
        "pass" : proxyPass,
    },
]

# 要访问的目标页面
targetUrl = "https://www.xuanfengyun.com/remote_addr"

phantomjs_path = r"./phantomjs"

driver = webdriver.PhantomJS(executable_path=phantomjs_path, service_args=service_args)
driver.get(targetUrl)

print driver.title
print driver.page_source.encode("gbk")

driver.quit() `
}

export const SOCK_JAVA = {
  HttpClient: `import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Authenticator;
import java.net.InetSocketAddress;
import java.net.PasswordAuthentication;
import java.net.Proxy;
import java.net.Socket;

import javax.net.ssl.SSLContext;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.protocol.HttpContext;
import org.apache.http.ssl.SSLContexts;

import com.gunshitech.httpinvoker.HttpInvokerConstants;

public class HttpClientSocksDemo {
    // 代理服务器
    final static String PROXY_HOST = "proxy1.xuanfengyun.com";
    final static int PROXY_PORT = 28887;

    // 代理隧道验证信息
    final static String PROXY_USER = "X89EIPNC1T2L9M2G";
    final static String PROXY_PASS = "6P5K12MPDF4KWQB2";

    private static PoolingHttpClientConnectionManager cm = null;

    static {
        Registry<ConnectionSocketFactory> reg = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("http", new SockConnectionSocketFactory())
        .register("https", new SockSSLConnectionSocketFactory(SSLContexts.createSystemDefault()))
                .build();

        cm = new PoolingHttpClientConnectionManager(reg);
        cm.setMaxTotal(20);
        cm.setDefaultMaxPerRoute(5);
    }

    public static void main(String[] args) {
        // 当目标页面为HTTPS协议，自Java8 Update 111起无法通过代理进行隧道传输，可如此设置解决问题：
        System.setProperty("jdk.http.auth.tunneling.disabledSchemes", "");

        String targetUrl = "https://www.xuanfengyun.com/remote_addr";

        HttpGet httpGet = new HttpGet(targetUrl);
        // 请求头加上压缩格式可以缩短请求响应时间，大幅节约成本
        httpGet.addHeader("Accept-Encoding", "gzip, deflate, sdch");

        CloseableHttpResponse httpResp = null;

        try {
            CloseableHttpClient httpClient = HttpClients.custom()
                .setConnectionManager(cm)
                .build();

            Authenticator.setDefault(new Authenticator() {
                protected  PasswordAuthentication  getPasswordAuthentication(){
                    return new PasswordAuthentication(PROXY_USER, PROXY_PASS.toCharArray());
                }
            });

            InetSocketAddress socksaddr = new InetSocketAddress(PROXY_HOST, PROXY_PORT);
            HttpClientContext context = HttpClientContext.create();
            context.setAttribute(HttpInvokerConstants.SOCK_PROXY, socksaddr);

            httpResp = httpClient.execute(httpGet, context);

            BufferedReader rd = new BufferedReader(new InputStreamReader(httpResp.getEntity().getContent()));

            String line = "";
            while ((line = rd.readLine()) != null) {
                System.out.println(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (httpResp != null) {
                    httpResp.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    static class SockConnectionSocketFactory extends PlainConnectionSocketFactory {

        @Override
        public Socket createSocket(final HttpContext context) throws IOException {
            InetSocketAddress socksaddr = (InetSocketAddress) context.getAttribute(HttpInvokerConstants.SOCK_PROXY);
            Proxy proxy = new Proxy(Proxy.Type.SOCKS, socksaddr);
            return new Socket(proxy);
        }

    }

    static class SockSSLConnectionSocketFactory extends SSLConnectionSocketFactory {

        public SockSSLConnectionSocketFactory(final SSLContext sslContext) {
            super(sslContext);
        }

        @Override
        public Socket createSocket(final HttpContext context) throws IOException {
            InetSocketAddress socksaddr = (InetSocketAddress) context.getAttribute(HttpInvokerConstants.SOCK_PROXY);
            Proxy proxy = new Proxy(Proxy.Type.SOCKS, socksaddr);
            return new Socket(proxy);
        }

    }
}`
}
