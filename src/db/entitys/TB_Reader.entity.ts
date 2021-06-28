import {
  Column,
  CreateDateColumn,
  Entity, PrimaryColumn
} from 'typeorm';

@Entity()
export class TB_Reader {
  @PrimaryColumn({ type: 'int', comment: '读者编号/借书证号【主键】' })
  rdID: number;
  @Column({
    type: 'nvarchar',
    length: 20,
    nullable: false,
    comment: '读者姓名',
  })
  rdName: string;
  @Column({
    type: 'enum',
    enum: [1, 2],
    nullable: false,
    comment: '读者姓别',
  })
  rdSex: string;
  @Column({ type: 'int', nullable: true, comment: 'TB_ReaderType' })
  rdType: number;

  @Column({
    type: 'nvarchar',
    length: 20,
    nullable: false,
    comment: '单位代码/单位名称',
  })
  rdDept: string;
  @Column({
    type: 'nvarchar',
    length: 25,
    nullable: false,
    comment: '电话号码',
  })
  rdPhone: string;
  @Column({
    type: 'nvarchar',
    length: 25,
    nullable: false,
    comment: '电子邮箱',
  })
  rdEmail: string;
  @CreateDateColumn({
    type: 'datetime',
    nullable: false,
    comment: '读者登记日期/办证日期',
  })
  rdDateReg: Date;
  @Column({ type: 'text', nullable: false, comment: '读者照片' })
  rdPhoto: string;
  @Column({
    type: 'enum',
    enum: ['有效', '挂失', '注销'],
    comment: '证件状态，3 个：有效、挂失、注销',
  })
  rdStatus: string;
  @Column({ type: 'int', default: 0, comment: '已借书数量(缺省值 0)' })
  rdBorrowQty: number;
  @Column({
    type: 'nvarchar',
    length: 20,
    nullable: false,
    comment: '读者密码(初值 123)，可加密存储',
    default: '123',
  })
  rdPwd: string;
  @Column({
    type: 'varchar',
    comment:
      '管理角色，0-读者、1-借书证管理、2-图书管理、4-借阅管理、8-系统管理，可组合',
  })
  rdAdminRoles: string;
  @Column({ default: false, comment: '是否删除' })
  isDel: boolean;
}
