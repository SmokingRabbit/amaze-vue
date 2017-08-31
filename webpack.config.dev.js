const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.config');

webpackBaseConfig.entry = {
    app: path.join(__dirname, 'example/index.js'),
    vender: ['vue', 'vue-router']
};

webpackBaseConfig.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'example/index.html'),
    inject: 'body',
    minify: {
        removeComments: true,
        collapseWhitespace: true
    }
}));

webpackBaseConfig.devServer = {
    contentBase: path.resolve(__dirname, './example'),
    hot: false,
    inline: false,
    progress: true,
    stats: {color: true},
    port: process.env.PORT || '9000',
    historyApiFallback: true
};

module.exports = webpackBaseConfig;
