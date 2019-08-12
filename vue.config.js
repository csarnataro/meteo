const configureAPI = require('./src/server/configure')

module.exports = {
  devServer: {
    before: configureAPI,
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:3000/api',
        ws: true,
        changeOrigin: true
      }

    }
  }
}
