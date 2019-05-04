const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-modules-eval-source-map',
  mode: 'development',
  devServer: {
    port: '8080',
    host: 'localhost',
    proxy: {
      '/api': 'http://localhost:3000',
      '/test': 'http://localhost:3000',
    },
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    // publicPath: '/',
    stats: {
      color: true,
     
    },
    compress: true,
    historyApiFallback: true,
    https: false,
    quiet: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
    new HTMLWebpackPlugin({
      title: 'CMS DEV',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/web/views/common/layout.html'),
      // chunks: ['vendors', 'commons', 'index'],
    }),
  ]
};


