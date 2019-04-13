# OWN

## 任务

```
先把webpack的开发环境
x1.自动刷新
2.跨域
x3.cssnext编译 拆分独立css
4.将jsx打包成独立的js
5.拆分独立的react环境库
6.引入react-router redux

上线环境：“
1.压缩打包合并MD5
2.优化项目 这里搞起来
```

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

[ 博客：从零配置Webpack4.0搭建一个React工程 ](https://laclys.github.io/2018/04/09/从零配置Webpack4.0搭建一个React工程/)

[React+Webpack快速上手指南](https://www.jianshu.com/p/418e48e0cef1)

[babel 中文网](https://www.babeljs.cn/docs/)
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