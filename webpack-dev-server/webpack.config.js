import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/dev-server',
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