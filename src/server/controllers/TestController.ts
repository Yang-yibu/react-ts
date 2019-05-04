import { controller, interfaces, Router, inject, httpGet, TAGS, provideThrowable, TYPE } from "../ioc/ioc";


// 1. Router.IRouterContext
// 2. interfaces.Controller
// 3. @inject(TAGS.IndexService)
@controller('/test') // 控制器
@provideThrowable(TYPE.Controller, "TestController")
export default class TestController implements interfaces.Controller {
  @httpGet('/pages') // Action
  private async index(ctx: Router.IRouterContext, next: () => Promise<any>): Promise<any> {
    // ctx.body = await ctx.render('index');
    ctx.body = {
      code: 200,
      msg: '请求成功哈',
      data: '标题'
    }
  }
}
