module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_variables.scss";'
      }
    }
  }
};
