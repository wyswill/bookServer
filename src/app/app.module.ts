/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 15:46:46
 */
import { Module } from '@nestjs/common';
import { DbModule } from '@src/db/db.module';
import { RpcQueryModule } from '@src/rpc-query/rpc-query.module';
import { UserModule } from '@src/user/user.module';
import { AppService } from './app.service';

@Module({
  imports: [RpcQueryModule, DbModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
