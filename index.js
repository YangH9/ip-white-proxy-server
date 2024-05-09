const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const { port, ipList, proxyTarget } = require('./config')

const app = express()

const stripIPv4MappedIPv6 = address => (address.startsWith('::ffff:') ? address.substring(7) : address)

app.use((req, res, next) => {
  const ip = stripIPv4MappedIPv6(req.ip)
  if (ipList.find(i => i === ip)) {
    // res.status(200).send(`<h1>Hello World</h1>`)
    next()
  } else {
    res.status(403).send(`<h1>IP地址：${ip}，不在白名单中，访问被拒绝。</h1>`)
  }
})

app.use(
  createProxyMiddleware({
    target: proxyTarget,
    changeOrigin: true
  })
)

// 监听端口
app.listen(port, err => {
  if (err) {
    console.log(`Express服务启动失败，目标端口：${port}`)
  } else {
    console.log(`Express服务已启动，监听端口： ${port}`)
  }
})
