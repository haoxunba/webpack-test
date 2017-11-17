
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
const webpack = require('webpack');
import config from './webpack.config.js';

const app = express();

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.use(WebpackHotMiddleware(compiler,{
    path: '/__webpack_hmr',
}));

app.listen(3000)