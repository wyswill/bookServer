import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm';

@Entity()
export class TB_Book {
  @PrimaryColumn({ comment: '图书序号【标识列，主键】' })
  bkID: number;
  @Column({
    type: 'nvarchar',
    length: 20,
    comment: '图书编号或条码号（前文中的书号）',
  })
  bkCode: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    comment: '书名',
  })
  bkName: string;
  @Column({
    type: 'nvarchar',
    length: 30,
    comment: '作者',
  })
  bkAuthor: string;
  @Column({
    type: 'nvarchar',
    length: 50,
    comment: '出版社',
  })
  bkPress: string;
  @CreateDateColumn({ type: 'datetime', comment: '出版日期' })
  bkDatePress: Date;
  @Column({ type: 'nvarchar', length: 15, comment: 'ISBN 书号' })
  bkISBN: string;
  @Column({
    type: 'nvarchar',
    length: 30,
    comment: '分类号（如：TP316-21/123）',
  })
  bkCatalog: string;
  @Column({
    type: 'enum',
    enum: [0, 1, 2, 3, 4, 5],
    comment: '语言，0-中文，1-英文，2-日文，3-俄文，4-德文，5-法文',
  })
  bkLanguage: string;
  @Column({ type: 'int', comment: '页数' })
  bkPages: number;
  @Column({ type: 'int', comment: '价格' })
  bkPrice: number;
  @Column({ type: 'datetime', comment: '入馆日期' })
  bkDateIn: Date;
  @Column({ type: 'text', comment: '内容简介' })
  bkBrief: string;
  @Column({ type: 'text', comment: '图书封面照片' })
  bkCover: string;
  @Column({
    type: 'enum',
    enum: ['在馆', '借出', '遗失', '变卖', '销毁'],
    comment: '图书状态，在馆、借出、遗失、变卖、销毁',
  })
  bkStatus: string;
}
