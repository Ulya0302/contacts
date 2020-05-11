module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      "/api": {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      "/user-api": {
        target: 'https://randomuser.me/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/user-api': ''
        }
      }
    }
  },
};
