import { comm } from '@src/rpc/bundle';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TB_ReaderType {
  @PrimaryColumn({
    type: 'int',
    comment: '读者类别【主键】',
  })
  rdType: number;
  @Column({
    type: 'enum',
    enum: comm.UserInfo.rdTypes,
    nullable: false,
    comment: '读者类别名称',
  })
  rdTypeName: string;
  @Column({ type: 'int', nullable: null, comment: '可借书数量' })
  CanLendQty: number;
  @Column({ type: 'int', nullable: null, comment: '可借书天数' })
  CanLendDay: number;
  @Column({ type: 'int', nullable: null, comment: '可续借次数' })
  CanContinueTimes: number;
  @Column({ type: 'float', nullable: false, comment: '罚款率' })
  PunishRate: number;
  @Column({
    type: 'smallint',
    nullable: false,
    comment: '证书有效期（年）【非空，0 表示永久有效】',
  })
  DateValid: number;
}
