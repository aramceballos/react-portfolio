import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res) => {
  res.send({
    its: 'working',
  });
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Server listening on http://localhost:${PORT}`);
});
