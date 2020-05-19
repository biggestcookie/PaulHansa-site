module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_variables.scss";'
      }
    }
  }
};
