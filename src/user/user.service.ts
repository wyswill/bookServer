import { Injectable } from '@nestjs/common';
import { user, comm } from '@src/rpc/bundle';
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
    const userInfo = await TB_Reader.findOne({ rdID });
    if (userInfo && !userInfo.isDel) {
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
  async addUserInfo(userInfo: comm.IUserInfo): Promise<user.IaddUserInfoRsp> {
    const { TB_Reader } = this.db.RepoMap;
    if (!userInfo.rdID) {
      return new user.addUserInfoRsp({
        code: -1,
        msg: '修改失败，没有该用户',
        data: {} as unknown as comm.UserInfo,
      });
    }
    let _info = await TB_Reader.findOne({ rdID: userInfo.rdID });
    if (_info) {
      _info = Object.assign(_info, userInfo);
      await TB_Reader.save(_info);
      return new user.addUserInfoRsp({
        code: 0,
        msg: '修改成功',
        data: _info as unknown as comm.UserInfo,
      });
    } else {
      return new user.addUserInfoRsp({
        code: -1,
        msg: '修改失败，没有该用户',
        data: {} as unknown as comm.UserInfo,
      });
    }
  }
  async removeUserById(
    info: user.queryUserByIdReq,
  ): Promise<user.IremoveUserByIdRsp> {
    let { data, code } = await this.findUserById(info);
    if (code === 0) {
      //@ts-ignore
      data.isDel = true;
      //@ts-ignore
      await this.db.RepoMap.TB_Reader.save(data);
      return new user.removeUserByIdRsp({
        code: 0,
        msg: '删除成功',
      });
    } else {
      return new user.removeUserByIdRsp({
        code: -1,
        msg: '删除失败',
      });
    }
  }
  async addReaderTypeById({
    rdID,
    rdType,
  }: user.addReaderTypeByIdReq): Promise<user.queryUserByIdRsp> {
    const { TB_ReaderType, TB_Reader } = this.db.RepoMap;
    const { code, data: _user } = await this.findUserById({ rdID });
    if (code !== 0) {
      //@ts-ignore
      return { code: -1, msg: '用户未找到', data: {} };
    }
    const _type = await TB_ReaderType.findOne({ rdType });
    if (!_type) {
      //@ts-ignore
      return { code: -1, msg: '类型未找到', data: {} };
    }
    _user.rdType = rdType;
    //@ts-ignore
    await TB_Reader.save(_user);
    //@ts-ignore
    return { code: 0, msg: '添加成功', data: _type };
  }
}
