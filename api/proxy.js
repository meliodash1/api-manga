const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'https://api-manga.vercel.app/', // Substitua pela URL do servidor de destino
  changeOrigin: true,
});

export default (req, res) => {
  return proxy(req, res);
};