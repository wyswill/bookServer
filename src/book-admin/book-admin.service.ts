import { Injectable } from '@nestjs/common';
import { book, comm } from '@rpc/bundle';
import { DbService } from '@src/db/db.service';
import { genUUID } from '@src/util';
import _ from 'lodash';

@Injectable()
export class BookAdminService {
  constructor(private readonly db: DbService) {}

  async addBookInfo(data: comm.BookInfo): Promise<book.IdelBookRsp> {
    const { TB_Book } = this.db.RepoMap;
    data.bkID = _.random(1000, 9999);
    data.bkCode = genUUID(data.bkName);
    //@ts-ignore
    await TB_Book.save(data);
    return { code: 0, msg: '添加成功过', data: true };
  }

  async findBookById({
    bkID,
  }: book.queryBookById): Promise<book.addBookInfoRsp> {
    const { TB_Book } = this.db.RepoMap;
    const bkInfo = await TB_Book.findOne({ bkID });
    //@ts-ignore
    if (bkInfo) return { code: 0, msg: '书籍信息找到', data: bkInfo };
    //@ts-ignore
    else return { code: -1, msg: '信息未找到', data: {} };
  }
}
