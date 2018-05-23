const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '../document/index.js'),
        vender: ['vue', 'vue-router']
    },
    output: {
        publicPath: '/',
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].[hash:8].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
         new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../document/index.html'),
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            favicon: path.join(__dirname, '../favicon.ico')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            filename: 'static/css/amaze-vue-docs.[hash:8].css',
            allChunks: true,
            disable: false
        }),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                vue: {
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            fallback:'vue-style-loader',
                            use: ['css-loader', 'less-loader']
                        })
                    }
                }
            }
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
                include: [path.resolve(__dirname, '../document'), path.resolve(__dirname, '../src/')],
                exclude: /node_modules/
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
                loader: 'url-loader'
            }
        ]
    }
}
