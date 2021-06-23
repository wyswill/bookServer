import { Injectable } from '@nestjs/common';
import { dbConfig } from '@src/util/config';
import { Connection, createConnection, Repository } from 'typeorm';
import { TB_Book } from './entitys/TB_Book.entity';
import { TB_Borrow } from './entitys/TB_Borrow.entity';
import { TB_Reader } from './entitys/TB_Reader.entity';
import { TB_ReaderType } from './entitys/TB_ReaderType.entity';
export type tabs = {
  TB_Book: TB_Book;
  TB_Borrow: TB_Borrow;
  TB_Reader: TB_Reader;
  TB_ReaderType: TB_ReaderType;
};
export type ObjectStrKey<T> = {
  [K in keyof T]: Repository<T[K]>;
};

@Injectable()
export class DbService {
  public RepoMap: ObjectStrKey<tabs> = {
    TB_Book: undefined,
    TB_Borrow: undefined,
    TB_Reader: undefined,
    TB_ReaderType: undefined,
  };
  constructor() {
    createConnection({
      type: 'mysql',
      database: dbConfig.database,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      entities: [`${__dirname}/entitys/*.entity{.ts,.js}`],
      synchronize: true,
      maxQueryExecutionTime: 1000,
    }).then((connection: Connection) => {
      Object.keys(this.RepoMap).forEach(
        key => (this.RepoMap[key] = connection.getRepository(key)),
      );
    });
  }
}
