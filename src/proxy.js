const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', //proxy가 필요한 path prameter를 입력한다.
    createProxyMiddleware({
      target: 'http://123.143.44.130:8084/', //타겟이 되는 서버url를 입력해준다.
      changeOrigin: true,
    })
  );

};