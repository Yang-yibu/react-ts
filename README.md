# OWN

## 任务

```
先把webpack的开发环境
x 1.自动刷新
x 2.跨域
x 3.cssnext编译 拆分独立css
x 4.将 jsx 打包成独立的 js
x 5.拆分独立的 react 环境库
6.引入 react-router redux

上线环境：
1.压缩打包合并 MD5
2.优化项目 这里搞起来

前端组件库用Ant Design
```

## 优化

### optimize-css-assets-webpack-plugin

？


## 环境搭建

```bash
# -d 显示下载进度
$ npm install -d --save-dev

# 启动服务，监听文件变化
$ npm install --save-dev webpack-dev-server

$ webpack-dev-server --devtool eval --progress --colors --hot --content-base build
```

## 参考资料

[ GitBook: React Webpack ](https://fakefish.github.io/react-webpack-cookbook/index.html)
> react-webpack-cookbook 3 4 年前

[ 博客：从零配置Webpack4.0搭建一个React工程 ](https://laclys.github.io/2018/04/09/从零配置Webpack4.0搭建一个React工程/)

[React+Webpack快速上手指南](https://www.jianshu.com/p/418e48e0cef1)

[babel 中文网](https://www.babeljs.cn/docs/)

[ koa2-connect-history-api-fallback ](https://www.npmjs.com/package/koa2-connect-history-api-fallback)
> koa2的一个中间件，用于处理 vue-router使用 history 模式返回 index.html，让koa2支持SPA应用程序


[webpack4 生产环境 自己压缩](https://webpack.docschina.org/guides/production/#minification-%E5%8E%8B%E7%BC%A9-)

[webpack4之 splitChunksPlugin 拆拆拆--项目实践](https://juejin.im/post/5c00916f5188254caf186f80)

[vue-cli 解析](https://juejin.im/post/5b2872516fb9a00e8626e34f)

[webpack 基础概念](https://github.com/chemdemo/chemdemo.github.io/issues/13)
## 待解决问题

```bash
# webpack development 有时候不会生成 dist 文件，但是服务启动后，可以访问

# webpack-dev-server 不会输出文件到 dist
# DevServer 会把 Webpack 构建出的文件保存在内存中，在要访问输出的文件时，必须通过 HTTP 服务访问
```

```js
// 拆分 React 独立文件的时候
// 在 html-webpack-plugin 中配置 页面中不插入任何脚本
new HTMLWebpackPlugin({
  title: 'CMS DEV',
  filename: 'index.html',
  template: path.resolve(__dirname, 'src/web/views/common/layout.html'),
  chunks: ['vendors', 'commons', 'index'],
})
```


## 错误日志

```bat

ERROR in ./src/web/app/main.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (D:\yaning\learnCode\yideng_project\underLine\own\node_modules\babel-loader\lib\index.js:10:11)

    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
 @ multi webpack/hot/dev-server webpack-dev-server/client?http://localhost:8080 ./src/web/app/main.jsx main[2]

```

```bash
# React cli 中
# "babel-core": "7.0.0-bridge.0"
```

```bash
# 报错
$ npm run server:dev
```

```bash
$ npm run build
# webpack.output.publicPath 没有设置 静态资源报错  dist/static
net::ERR_ABORTED 404 (Not Found)
```

```bat
# 安装 gulp-tslint 的时候，没有安装 tslint

$ cnpm install --save-dev gulp-tslint
\ [0/1] Installing gulp-tslint@*[npminstall:get] retry GET http://registry.npm.taobao.org/gulp-tslint/download/gulp-tslint-8.1.4.tgz after 100ms, retry left 4, error: ResponseError: socket hang up (req "error"), GET https://cdn.npm.taobao.org/gulp-tslint/-/gulp-tslint-8.1.4.tgz -1 (connected: true, keepalive socket: false, agent status: {"createSocketCount":1,"createSocketErrorCount":0,"closeSocketCount":1,"errorSocketCount":0,"timeoutSocketCount":1,"requestCount":0,"freeSockets":{},"sockets":{},"requests":{}})
headers: {}
√ Installed 1 packages
√ Linked 6 latest versions
√ Run 0 scripts
peerDependencies WARNING gulp-tslint@* requires a peer of tslint@>=5.0.0-dev but none was installed
√ All packages installed (4 packages installed from npm registry, used 43s, speed 602.58B/s, json 7(11.32kB), tarball 14.14kB)
```

```bat
:: 没有配置 tslint 的规则

Tried to lint D:\yaning\learnCode\yideng_project\underLine\own\src\server\app.ts but found no valid, enabled rules for this file type and file path in the resolved configuration.

:: 修改 
添加 tslint.json ; 
{
  "extends": [],
  "rules": {
    // 禁止使用 var 当时用了 var 会报错
    "no-var-keyword": true
  }
}
```

```
无法使用 JSX，除非提供了 "--jsx" 标志。ts(17004)

在 tsconfig.json 中添加 "jsx": "react"
```