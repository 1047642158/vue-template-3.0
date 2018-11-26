'use strict'
const path = require('path')
module.exports = {
    productionSourceMap: false,
    baseUrl: process.env.baseUrl,
    outputDir: process.env.outputDir,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
            types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
        } else {
            // 为开发环境修改配置...
            const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
            types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production' ? 'error' : false
}
// 添加css 全局变量
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/css/variable.styl')
            ]
        })
}
