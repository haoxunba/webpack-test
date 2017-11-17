import config from './webpack.config';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const compliler = webpack(config);

var server = new WebpackDevServer(compliler, {
    hot: true
})

server.listen(3000);