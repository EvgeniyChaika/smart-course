'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';
console.log("---------------" + NODE_ENV + "--------------");
const output = path.join(__dirname, './target/static');

module.exports = function createWebpackConfig() {
    let config = {};

    config.entry = path.resolve(__dirname, './src/index.js');
    config.output = {
        path: output,
        filename: `[name]${isDev ? '' : '.[hash]'}.bundle.js`,
        publicPath: isDev ? '/' : '/receipts/'
    };
    config.cache = true;
    config.resolve = {
        extensions: ['.js', '.jsx']
    };
    if (isDev) {
        config.watch = true;
        config.watchOptions = {
            aggregateTimeout: 100,
            ignored: /node_modules/,
            poll: 500
        };
    } else {
        config.watch = false;
    }
    config.module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: isProd
                        }
                    }
                })
            },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                minimize: isProd
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(ico|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: "[name].[ext]"
                        }
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=5000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$|\.mp3(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }
    ;
    // if (isDev) {
    //     config.module.rules.push({
    //         test: /\.(js|jsx)$/,
    //         enforce: "pre",
    //         use: [
    //             "eslint-loader"
    //         ]
    //     })
    // }
    config.devtool = isDev ? 'source-map' : false;
    if (isDev) {
        config.devServer = {
            host: 'localhost',
            port: '9797',
            proxy: {
                '/**': {
                    target: 'http://localhost:7777/',
                    secure: false
                }
            },
            watchOptions: {
                aggregateTimeout: 100,
                ignored: /node_modules/,
                poll: 500
            },
            stats: {
                warnings: false
            }
        };
    }
    config.plugins = [
        new ExtractTextPlugin({
            filename: isDev ? '[name].[hash].css' : '[name].css',
            allChunks: true,
            disable: isDev
        }),
    ];
    config.plugins.push(
        new HtmlWebpackPlugin({
            inject: true,
            favicon: 'src/images/favicon/favicon.ico',
            template: __dirname + '/src/html/index.html'
        }),
        new webpack.DefinePlugin([{
            NODE_ENV: JSON.stringify("NODE_ENV")
        }])
    );
    if (isProd) {
        config.plugins.push(
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: true
                }
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.NoErrorsPlugin())
    }
    return config;
}();