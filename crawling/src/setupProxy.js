import {createProxyMiddleware}  from "http-proxy-middleware"

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api/data", {
            target: "http://localhost",
            changeOrigin: true,
        })
    )
}