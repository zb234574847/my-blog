const webpack = require('webpack');


module.exports = {
    configureWebpack: {
           plugins: [
              new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery",
                Popper: ['popper.js', 'default']
              })
           ]
    }
    //,
    // publicPath: '/',
    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: 'http://localhost:8081',
    //             changeOrigin: true,
    //             ws: true,
    //             pathRewrite: {
    //               '^/': ''
    //             }
    //         }
    //     }
    // }
}