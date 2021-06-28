import { BookAdminService } from './book-admin.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { book, comm } from '@rpc/bundle';
@Controller()
export class BookAdminController {
  constructor(protected readonly service: BookAdminService) {}
  @GrpcMethod('book_service', 'addBookInfo')
  async addBookInfo(data: comm.BookInfo) {
    return await this.service.addBookInfo(data);
  }
}
