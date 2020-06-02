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
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
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
