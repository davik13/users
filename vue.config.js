module.export = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4098',
        changeOrigin: true,
      },
    },
  },
};
