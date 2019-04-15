

import { IIndex } from "../interface/IIndex";
import { Model } from "../models/User";
import { provide, TYPES, TAGS, inject } from '../ioc/ioc';

@provide(TAGS.IndexService)
export class IndexService implements IIndex {
  private safeRequest;
  constructor(@inject(TYPES.SafeRequest) safeRequest) {
    this.safeRequest = safeRequest;
  }
  private userStorage: Model.User[] = [
    {
      email: 'aaa@qq.com',
      name: 'a'
    }
  ]
  public getUser(id: string): Model.User {
    let result: Model.User;
    console.log('响应库：', this.safeRequest);
    result = this.userStorage[id];
    // result = await this.safeRequest.fetch('xx', {}, function () {})
    return result;
  }
}