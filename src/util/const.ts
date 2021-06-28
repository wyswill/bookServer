import { comm } from '@src/rpc/bundle';
export const readerTypeConf = {
  [comm.UserInfo.rdTypes.teacher]: {
    CanLendQty: 15,
    CanLendDay: 90,
    CanContinueTimes: 100,
  },
  [comm.UserInfo.rdTypes.student]: {
    CanLendQty: 8,
    CanLendDay: 30,
    CanContinueTimes: 30,
  },
};
