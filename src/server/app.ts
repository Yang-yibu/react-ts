
import { InversifyKoaServer } from "inversify-koa-utils";
import { Container, buildProviderModule } from "./ioc/ioc";

import "reflect-metadata";
import "./ioc/loader";
import errorHandler from "./utils/errorHandler";
import * as log4js from "log4js"; // 直接引入会报 没有默认导出 错误
import { join } from "path";
import co from "co";
import * as render from "koa-swig";
import * as serve from "koa-static";
import config from "./config";


log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'logs/solid.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
})

const container = new Container();

// 如何加载资源
container.load(buildProviderModule());

let server = new InversifyKoaServer(container);
server.setConfig(app => {
  // 静态资源
  app.context.render = co.wrap(render({
    root: join(config.viewDir),
    autoescape: true,
    cache: false,
    ext: 'html',
    varControls: [
      '[[', ']]'
    ],
    writeBody: false
  }))

  app.use(serve(config.staticDir));
}).setErrorConfig(app => {
    // 容错
    errorHandler.error(app, log4js.Logger);
  });

let app = server.build();
app.listen(3000, () => {
  console.log('Inversify 启动在 3000...');
})
