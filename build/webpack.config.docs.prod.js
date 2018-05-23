const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.config.docs');
const cleanWebpackPlugin = require('clean-webpack-plugin');

webpackBaseConfig.output.path = path.join(__dirname, '../docs');
webpackBaseConfig.output.publicPath = './';

webpackBaseConfig.plugins = webpackBaseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new cleanWebpackPlugin(
        [
            'docs/static/js/app.*.js',
            'docs/static/js/vender.*.js',
            'docs/static/css/amaze-vue-docs.*.css'
        ],　
        {
            root: __dirname,
            verbose: true,
            dry:false
        }
    )
]);

module.exports = webpackBaseConfig;
