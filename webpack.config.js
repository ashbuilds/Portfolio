

webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


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
                test:/\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(?:css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?module&localIdentName=[name]__[local]__[hash:base64:7]!less-loader?module&localIdentName=[name]__[local]__[hash:base64:7]'
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
        extensions: ['.less','.jsx', '.js', '.json']
    }
};
