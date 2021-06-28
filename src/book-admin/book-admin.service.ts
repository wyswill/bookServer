import { comm, book } from '@rpc/bundle';
import { Injectable } from '@nestjs/common';
import { DbService } from '@src/db/db.service';

@Injectable()
export class BookAdminService {
  constructor(private readonly db: DbService) {}

  async addBookInfo(data: comm.BookInfo): Promise<book.IaddBookInfoRsp> {
    return;
  }
}
