const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.config.docs');

webpackBaseConfig.output.path = path.join(__dirname, 'dist');

webpackBaseConfig.plugins = webpackBaseConfig.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('develop')
        }
    })
]);

webpackBaseConfig.devServer = {
    contentBase: path.resolve(__dirname, '../document'),
    hot: true,
    inline: false,
    progress: true,
    stats: {
        color: true
    },
    port: process.env.PORT || '8099',
    historyApiFallback: true
};

module.exports = webpackBaseConfig;
