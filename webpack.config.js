

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    name:"client",
    entry: './App.js',
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
                test: /\.(?:css|less)$/,
                use: ExtractTextPlugin.extract({
                    loader: ['css-loader?importLoader=1&sourceMap&module&localIdentName=[name]__[local]__[hash:base64:7]','less-loader?importLoader=1&sourceMap&module&localIdentName=[name]__[local]__[hash:base64:7]'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({
            "process.env": {
                // Mainly used to require CSS files with webpack, which can happen only on browser
                // Used as `if (process.env.BROWSER)...`
                BROWSER: JSON.stringify(true),

                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify("production")

            }
        }),
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
};

const serverConfig = {
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, './.build'),
        filename: 'server.build.js',
        publicPath: '.build/',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test:/\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(?:css|less)$/,
                use: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:7]'
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json','.less']
    }
};

module.exports = [config, serverConfig];


/*

 {
 fallbackLoader: 'style-loader',
 loader: ['css-loader?sourceMap&module&localIdentName=[name]__[local]__[hash:base64:7]','less-loader?sourceMap&module&localIdentName=[name]__[local]__[hash:base64:7]'],
 }
* */
