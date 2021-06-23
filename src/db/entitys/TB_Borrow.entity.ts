import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TB_Book } from './TB_Book.entity';
import { TB_Reader } from './TB_Reader.entity';

@Entity()
export class TB_Borrow {
  @PrimaryColumn({ comment: '借书顺序号【主键】' })
  BorrowID: number;
  @OneToOne(type => TB_Reader)
  @JoinColumn()
  rdID: TB_Reader;
  @OneToOne(type => TB_Book)
  @JoinColumn()
  bkID: TB_Book;
  @Column({ type: 'int', comment: '续借次数（第一次借时，记为 0）' })
  ldContinueTimes: number;
  @Column({ type: 'datetime', comment: '借书日期' })
  ldDateOut: Date;
  @Column({ type: 'datetime', comment: '应还日期' })
  ldDateRetPlan: Date;
  @Column({ type: 'datetime', comment: '实际还书日期' })
  ldDateRetAct: Date;
  @Column({ type: 'int', comment: '超期天数' })
  ldOverDay: number;
  @Column({ type: 'int', comment: '超期金额（应罚款金额）' })
  ldOverint: number;
  @Column({ type: 'int', comment: '罚款金额' })
  ldPunishint: number;
  @Column({
    type: 'boolean',
    default: false,
    comment: '是否已经还书，缺省为 0-未还',
  })
  lsHasReturn: boolean;
  @Column({ type: 'nvarchar', length: 20, comment: '借书操作员' })
  OperatorLend: string;
  @Column({ type: 'nvarchar', length: 20, comment: '还书操作员' })
  OperatorRet: string;
}
