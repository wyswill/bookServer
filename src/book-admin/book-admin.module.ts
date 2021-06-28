import { Module } from '@nestjs/common';
import { BookAdminService } from './book-admin.service';
import { BookAdminController } from './book-admin.controller';

@Module({
  providers: [BookAdminService],
  controllers: [BookAdminController]
})
export class BookAdminModule {}
