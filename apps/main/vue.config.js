const { defineConfig } = require('@vue/cli-service')
const UnoCSS = require('@unocss/webpack').default

const port = 2333

// https://staven630.github.io/vue-cli4-config/
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port,
  },
  configureWebpack: (config) => {
    config.plugins = [...config.plugins, new UnoCSS()]
  },
})
