const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://gmall-h5-api.atguigu.cn',
    //             pathRewrite: { '^/api': '' }
    //         }
    //     }
    // },
})

module.exports = {
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn",
            },

        },
    },
};