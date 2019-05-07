const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpack = require('friendly-errors-webpack-plugin');

const config = {
  port: '8080',
  host: 'localhost'
}

module.exports = {
  devtool: 'cheap-modules-eval-source-map',
  mode: 'development',
  devServer: {
    port: config.port,
    host: config.host,
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
    new FriendlyErrorsWebpack({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${config.host}:${config.port}`],
        notes: ['Some additional notes to be displayed upon successful compilation']
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        console.table(error);
      }
    })
  ]
};


