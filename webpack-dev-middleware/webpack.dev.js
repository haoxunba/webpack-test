import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

module.exports = merge(common, {
  entry: [
    'webpack-hot-middleware/client?reload=true'
  ],
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})