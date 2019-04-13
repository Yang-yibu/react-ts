const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除 目录


const _mode = argv.mode || 'development';
console.log('_mode: \n', _mode);

// const _mergeConfig = require(`./config/webpack.${_mode}.js`);
// const merge = require('webpack-merge');

const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.entry.js');

let _entry = {};
for (let item of files) {
  // console.log('item: ', item);
  // 使用 path 模块解析路径，再截掉 .entry.js
  console.log('item: \n', path.parse(item));

  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)$/g.test(item) == true) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
  }
}

let webpackConfig = {
  // entry: [ path.resolve(__dirname, 'src/web/app/main.jsx') ],
  entry: _entry,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [
          path.join(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
    new HTMLWebpackPlugin({
      template: 'src/web/views/common/layout.html'
    })
  ]
}

module.exports = webpackConfig;







