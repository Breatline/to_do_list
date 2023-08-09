const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');


module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./src"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
})