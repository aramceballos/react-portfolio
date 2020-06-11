const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const entry = ['./src/frontend/index.js'];

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  );
}

module.exports = {
  entry,
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: '[path].gz',
        }),
    isDev ? () => {} : new ManifestPlugin(),
    isDev
      ? () => {}
      : new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: path.resolve(
            __dirname,
            'src/server/public',
          ),
        }),
    new HTMLWebpackPlugin({
      template: 'public/index.html',
    }),
    new FaviconsWebpackPlugin('./public/favicon.ico'),
  ],
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              (chunk) =>
                chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name),
            );
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
};
