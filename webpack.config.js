webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname+"/public",
        filename: 'bundle.js'
    },
    devtool: "cheap-eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader?localIdentName=[name]__[local]__[hash:base64:7]" // creates style nodes from JS strings
                }, {
                    loader: "css-loader?localIdentName=[name]__[local]__[hash:base64:7]" // translates CSS into CommonJS
                }, {
                    loader: "less-loader?localIdentName=[name]__[local]__[hash:base64:7]" // compiles Less to CSS
                }]
            },
        ]
    },
    plugins: [
        extractLess
    ],
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }
};
