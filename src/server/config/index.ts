// const { join } = require('path');
// const _ = require('lodash');

import { join } from  'path';
import { extend } from 'lodash';

let config = {
  "viewDir": join(__dirname, "..", "views"),
  "staticDir": join(__dirname, "..", "static")
}

// 会被清洗 测试
if (process.env.NODE_ENV == "development") {
  const localConfig = {
    baseURL: 'http://localhost:8080/web/index.php?r=',
    port: 3000,
    cacheMode: false,
  }
  config = extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
  const prodConfig = {
    baseURL: '',
    port: 8081,
    cacheMode: 'memory'
  }
  config = extend(config, prodConfig);
}

export default config;
