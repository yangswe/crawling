import {createProxyMiddleware}  from "http-proxy-middleware"

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api/data", {
            target: "https://ysw-crawling.fly.dev/api/data",
            changeOrigin: true,
        })
    )
}