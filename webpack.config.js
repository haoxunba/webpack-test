const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// import webpack from 'webpack';
// const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // appNew: './src/index.js',
        
        // 'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true', // "only" prevents reload on syntax errors
        './src/index' 
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    plugins:[
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules: [
            {test: /\.js?$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']}
        ]
    }
}