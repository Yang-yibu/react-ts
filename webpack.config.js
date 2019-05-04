const path = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const FriendlyErrorsWebpack = require('friendly-errors-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除 目录

const _mode = argv.mode || 'development';
console.log('_mode: \n', _mode);

const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require('webpack-merge');

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
  entry: _entry,
  output: {
    path: path.join(__dirname, 'dist/static'),
    publicPath: "/",
    filename: 'scripts/[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /(react|react-dom|react-dom-router)/,
          name: 'vendors-react', // 分离包的名字
          chunks: 'all',
          priority: 100,
        },
        'vendorAnt': {
          test: /ant/,
          name: 'vendors-antD',
          chunks: 'all',
          priority: 95
        },
        'nodeVendors': {  // 异步加载公共包、组件等
          test: /node_modules/,
          chunks: 'all',
          name: 'node-module',
          priority: 90,
        },
        commons: { // 其他同步加载公共包
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          priority: 80,
        },
      }
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        include: [
          path.join(__dirname, './src')
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

    // new CleanWebpackPlugin(),
    // new HTMLWebpackPlugin({
    //   title: 'CMS DEV',
    //   filename: '../views/index.html',
    //   template: path.resolve(__dirname, 'src/web/views/common/layout.html'),
    //   // chunks: ['vendors', 'commons', 'index'],
    // }),
    // new FriendlyErrorsWebpack(),
     new DashboardPlugin(dashboard.setData)
  ]
}

module.exports = merge(webpackConfig, _mergeConfig);







