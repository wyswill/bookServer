import { Injectable } from '@nestjs/common';
import { user } from '@src/rpc/bundle';
import { readerTypeConf } from '@src/util/const';
import _ from 'lodash';
import { DbService } from './../db/db.service';
import { TB_Reader } from './../db/entitys/TB_Reader.entity';
import { TB_ReaderType } from './../db/entitys/TB_ReaderType.entity';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}
  async login({ username, passowrd }: user.ILoginReq): Promise<user.ILoginRsp> {
    const userInfo = await this.db.RepoMap.TB_Reader.findOne({
      rdName: username,
    });

    if (userInfo && passowrd === userInfo.rdPwd) {
      //@ts-ignore
      return new user.LoginRsp({ code: 0, msg: '', data: userInfo });
    }

    return;
  }
  async registerUser(data: user.IregisterUserReq): Promise<user.userBaseRsp> {
    const {
      db: { RepoMap },
    } = this;
    const userif = await RepoMap.TB_Reader.findOne({ rdName: data.rdName });
    if (userif) {
      return new user.userBaseRsp({
        code: 0,
        msg: '注册成功',
        //@ts-ignore
        data: userif,
      });
    }
    // @ts-ignore
    const _rdType = await RepoMap.TB_ReaderType.findOne({
      rdTypeName: data.rdType,
    });
    let rdType;
    if (_rdType) rdType = _rdType;
    else {
      rdType = new TB_ReaderType();
      Object.assign(
        rdType,
        {
          rdType: _.random(1000, 99999),
          rdTypeName: data.rdType,
          PunishRate: 0.05,
          DateValid: 1,
        },
        readerTypeConf[data.rdType],
      );
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
  async findUserById({
    rdID,
  }: user.IqueryUserByIdReq): Promise<user.IuserBaseRsp> {
    const {
      db: {
        RepoMap: { TB_Reader },
      },
    } = this;
    const userInfo = await TB_Reader.findOne({ rdID: rdID });
    if (userInfo) {
      return new user.userBaseRsp({
        code: 0,
        msg: '',
        //@ts-ignore
        data: userInfo,
      });
    } else {
      return new user.userBaseRsp({
        code: -1,
        msg: '用户未找到',
        //@ts-ignore
        data: {},
      });
    }
  }
}
