const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: 'https://api.example.com', // Substitua pela URL do servidor de destino
  changeOrigin: true,
});

export default (req, res) => {
  return proxy(req, res);
};