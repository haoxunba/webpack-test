const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index' 
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins:[
        new HtmlWebpackPlugin(),
    ],
    module:{
        rules: [
            {test: /\.js?$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|gif|jpeg)$/, use: ['file-loader']}
        ]
    }
}