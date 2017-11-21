const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBaseConfig = require('./webpack.config');


webpackBaseConfig.entry = {
    'amaze-vue': './src/index.js'
};

webpackBaseConfig.output.publicPath = './';

webpackBaseConfig.output = Object.assign(webpackBaseConfig.output, {
    libraryTarget: 'umd',
    library: 'amaze-vue'
});

webpackBaseConfig.externals = ['vue'];

webpackBaseConfig.plugins = webpackBaseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
]);

module.exports = webpackBaseConfig;