const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'public/index.html',
    }),
    new FaviconsWebpackPlugin('./public/favicon.ico'),
  ],
  devServer: {
    port: 5000,
    historyApiFallback: true,
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
