const { defineConfig } = require('@vue/cli-service')
const UnoCSS = require('@unocss/webpack').default
const { name } = require('./package.json')

const port = 2334

// https://staven630.github.io/vue-cli4-config/
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: (config) => {
    config.plugins = [...config.plugins, new UnoCSS()]
    return {
      output: {
        // 把子应用打包成 umd 库格式
        library: `${name}-[name]`,
        libraryTarget: 'umd',
      },
    }
  },
})
