const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      color: true
    },
    compress: true,
    historyApiFallback: true,
    https: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
  ]
};


