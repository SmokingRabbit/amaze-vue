const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'amaze-vue.css',
            allChunks: true,
            disable: false
        })
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src/'),
                exclude: [/node_modules/, path.resolve(__dirname, 'src/components/code/src/lib/highlight.js')]
            },
            {
                 test: /\.vue|js$/,
                 enforce: 'pre',
                 include: path.resolve(__dirname, 'src'),
                 exclude: /node_modules/,
                 use: [{
                     loader: 'eslint-loader',
                     options: {
                         formatter: require('eslint-friendly-formatter')
                     }
                 }]
            },
            {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')({
                                        browsers: ['Android >= 4', 'Explorer >= 8', 'iOS >= 6']
                                    })
                                ]
                            }
                        },
                        'less-loader'
                    ],
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=static/[name].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=static/fonts/[name].[ext]'
            }
        ]
    }
}
