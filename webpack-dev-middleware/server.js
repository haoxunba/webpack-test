
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
const webpack = require('webpack');
import config from './webpack.dev.js';

const app = express();

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}))

app.use(WebpackHotMiddleware(compiler,{
}));

app.listen(3000)