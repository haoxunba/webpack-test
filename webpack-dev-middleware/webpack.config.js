const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// import webpack from 'webpack';
// const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true', 
        './src/index' 
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules: [
            // {test: /\.js?$/, exclude: /node_modules/, use: ['babel-loader']},
            // {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']}
        ]
    }
}