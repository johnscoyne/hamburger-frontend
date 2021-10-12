import express from 'express';
import { createConnection } from 'typeorm';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import routes from './routes';
import { options } from './db';
import setupData from './demo';

const configPath = path.resolve(__dirname, '../webpack.config.js');
const config = require(configPath);

const compiler = webpack(config);

createConnection(options).then(() => {
  const app = express();
  app.use(express.json());
  routes({ app });
  return setupData().then(() => {
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }));
    app.use(express.static(__dirname + '/public'));
    app.use(webpackHotMiddleware(compiler))
    app.listen(3000);
  });
});
