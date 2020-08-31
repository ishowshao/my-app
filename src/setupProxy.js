const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/invoice-server',
        createProxyMiddleware({
            target: 'https://shaoxia.co',
            changeOrigin: true,
        })
    );
};