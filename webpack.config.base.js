const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title:"my app",
            template: "src/assets/index.html"
        }),
    ],
 };

