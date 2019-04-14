'use strict'
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除 目录
// const minify = require('html-minifier').minify;

console.log('********* 生产环境 **********');

module.exports = {
  output: {
    publicPath: "/",
    filename: "scripts/[name].[contenthash:5].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
      chunkFilename: 'styles/[id].css'
    }),
    new HTMLWebpackPlugin({
      title: 'CMS-React',
      filename: 'index.html',
      template: path.resolve(__dirname, '../', 'src/web/views/common/layout.html'),
      inject: true,
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    })
  ]
}
