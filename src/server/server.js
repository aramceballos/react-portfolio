import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import helmet from 'helmet';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';

dotenv.config();

const app = express();

app.use(express.json());

const { PORT, NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

const setResponse = (html, manifest) => {
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Aram Ceballos</title>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto+Slab:400,700|Roboto:400,500,700,900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id="app" style="height: 100vh;">${html}</div>
      <script src=${mainBuild} type="text/javascript"></script>
        <script src=${vendorBuild} type="text/javascript"></script>
    </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(serverRoutes())}
    </StaticRouter>,
  );

  res.send(setResponse(html, req.hashManifest));
};

app.get('*', renderApp);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Server listening on http://localhost:${PORT}`);
});
