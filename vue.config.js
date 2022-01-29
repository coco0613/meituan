// vue.config.js
module.exports = {
    lintOnSave: false,
    //rem 适配
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ rootValue: 37.5 }),
                ],
            },
        },
    },
};