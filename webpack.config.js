

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const themeDark = {
    "baseColor": "#242a3b",
    "baseText": "#ffffff",
    "baseShade": "#191c28",
    "primaryColor": "#4BAB86"
};

const config = {
    name:"TheAsia",
    entry: __dirname+'/src/app.js',
    output: {
        path: __dirname+"/.build/assets",
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test:/\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test:/\.(?:css|less)$/,///(?!.*\.dark\.less$)^.+\.(?:css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?modules',
                            options: {
                                sourceMap: true,
                                importLoader: true,
                                localIdentName:'[name]__[local]__[hash:base64:7]'
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                importLoader: true,
                            }
                        }
                    ],
                    fallback: 'style-loader',
                }),
                exclude: /\.(eot|woff|woff2|ttf|svg|jpe?g|png|gif)(\?[\s\S]+)?$/
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
                loader: 'url-loader?limit=1000&name=./fonts/[name].[ext]?[hash:base64:5]#icomoon',
                exclude:/\.(jpe?g|png|gif)$/i
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            //         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json','.less']
    }
};


const nodeExternals = require('webpack-node-externals');


const serverConfig = {
    name: 'TheAsia',
    target: 'node',
    externals: [nodeExternals()],
    entry: [
        __dirname+'/index.js'
    ],
    output: {
        path: path.join(__dirname, '/.build'),
        filename: 'server.build.js',
        publicPath: './',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test:/\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test:/\.(?:css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?locals',
                            options: {
                                sourceMap: false,
                                localIdentName:'[name]__[local]__[hash:base64:7]'
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: false,
                                modifyVars:themeDark
                            }
                        }
                    ],
                    fallback: 'style-loader',
                }),
                exclude: /\.(eot|woff|woff2|ttf|svg|jpe?g|png|gif)(\?[\s\S]+)?$/
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
                loader: 'url-loader?limit=1000&name=fonts/[name].[ext]?[hash:base64:5]#icomoon',
                exclude:/\.(jpe?g|png|gif)$/i
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: [
            //         'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            //         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            //     ]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'assets/bundle.dark.css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify("production")
        }
    }),
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json','.less']
    }
};


module.exports = [serverConfig,config];

// plugins: [
//     new webpack.DefinePlugin({
//         "process.env": {
//             BROWSER: JSON.stringify(true),
//             NODE_ENV: JSON.stringify("production")
//         }
//     }),
// ],