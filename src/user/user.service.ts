import { Injectable } from '@nestjs/common';
import { user } from '@src/rpc/bundle';
import _ from 'lodash';
import { DbService } from './../db/db.service';
import { TB_Reader } from './../db/entitys/TB_Reader.entity';
import { TB_ReaderType } from './../db/entitys/TB_ReaderType.entity';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}
  async login(data: user.ILoginReq): Promise<user.ILoginRsp> {
    return;
  }
  async registerUser(data: user.IregisterUserReq): Promise<user.userBaseRsp> {
    const {
      db: { RepoMap },
    } = this;
    const userif = await RepoMap.TB_Reader.findOne({ rdName: data.rdName });
    if (userif) {
      return new user.userBaseRsp({
        code: -1,
        msg: '用户存在',
        //@ts-ignore
        data: userif,
      });
    }
    const _rdType = await RepoMap.TB_ReaderType.findOne({
      rdTypeName: data.rdName,
    });
    let rdType;
    if (_rdType) rdType = _rdType;
    else {
      rdType = new TB_ReaderType();
      Object.assign(rdType, {
        rdType: _.random(1000, 99999),
        rdTypeName: data.rdName,
        CanLendQty: 100,
        CanLendDay: 100,
        CanContinueTimes: 100,
        PunishRate: 0.05,
        DateValid: 1,
      });
    }
    const userInfo = Object.assign(data, {
      rdID: _.random(1000, 99999),
      rdEmail: '',
      rdPhoto: '',
      rdType: rdType.rdType,
    }) as unknown as TB_Reader;
    await RepoMap.TB_Reader.save(userInfo);
    await RepoMap.TB_ReaderType.save(rdType);
    //@ts-ignore
    return new user.userBaseRsp({ code: 0, msg: '注册成功', data: userInfo });
  }

  async findUserById({ rdID }: user.IqueryUserByIdReq): Promise<TB_Reader> {
    const {
      db: {
        RepoMap: { TB_Reader },
      },
    } = this;
    const userInfo = await TB_Reader.findOne({ rdID: rdID });
    return userInfo;
  }
}
