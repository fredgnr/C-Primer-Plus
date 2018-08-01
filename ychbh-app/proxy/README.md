# 黄柏河项目中间人代理服务器

使用方法：

1. 将所有远程的 REST API 地址改为本地 `127.0.0.1` 地址。
2. 将 `$.ajax` 请求中的 `data` 字段设置为一个 JavaScript 对象，不要使用 `JSON.Stringify` 函数序列化。