const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackBaseConfig = require('./webpack.config');

webpackBaseConfig.entry = {
    app: path.join(__dirname, 'example/index.js'),
    vender: ['vue', 'vue-router']
};

webpackBaseConfig.plugins = webpackBaseConfig.plugins.concat([
    new HtmlWebpackPlugin({
        title: 'amaze-vue',
        filename: 'index.html',
        template: path.join(__dirname, 'example/index.html'),
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vender', filename: 'vender.js'}),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('develop')
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
]);

webpackBaseConfig.devServer = {
    contentBase: path.resolve(__dirname, './example'),
    hot: true,
    inline: false,
    progress: true,
    stats: {
        color: true
    },
    port: process.env.PORT || '9000',
    historyApiFallback: true
};

module.exports = webpackBaseConfig;
