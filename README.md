# ip-white-proxy-server

前端开发环境 ip 白名单代理服务

## 安装依赖

```
npm install
```

## 修改配置

```
config.json

{
  "port": 3000, // 代理端口，访问的目标端口
  "ipList": ['127.0.0.1', '::1'] // ip白名单，允许访问的ip列表
  "proxyTarget": "http://localhost:8080" // 代理url，本地项目的url
}
```

## 启动服务

```
npm start
```

## 快捷启动

> 创建一个 bat 文件，写入下列命令

```
D:
cd "D:\ip-white-proxy-server"
cmd /c npm start
```

> D: // 切换到项目所在盘符

> cd "D:\ip-white-proxy-server" // 切换到项目所在目录
