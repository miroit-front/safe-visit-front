const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  const HR = 'http://123.143.44.130:8086'
  const VISIT = 'http://123.143.44.130:8084'


  app.use(
    createProxyMiddleware('/reservation/get-list',{ //방문예약 조회 api
      target: VISIT,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/notice/list',{ // 공지사항 목록 api
      target: HR,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/notice/find-by-id',{ // 공지사항 상세 api
      target: HR,
      changeOrigin: true,
    })
  );
};