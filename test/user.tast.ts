import path from 'path';
import { promisify } from 'util';
import { book, comm } from '../src/rpc/bundle';
import RpcQuery from './base';
const rq = new RpcQuery({
  host: 'localhost:50051',
  packge: 'book',
});
const client = rq.getClient<book.book_service>();
// 读者测试
client.registerUser = promisify(client.registerUser);
client.queryUserById = promisify(client.queryUserById);
client.addUserInfo = promisify(client.addUserInfo);
client.removeUserById = promisify(client.removeUserById);
client.addReaderTypeById = promisify(client.addReaderTypeById);
client.modiReaderTypeByid = promisify(client.modiReaderTypeByid);
// 书籍测试
client.addBookInfo = promisify(client.addBookInfo);

async function mainTest() {
  // const res = await client.registerUser({
  //   rdName: 'wyswill',
  //   rdSex: comm.UserInfo.Sex.girl,
  //   rdPhone: '15717827650',
  //   rdPwd: '3123123',
  //   rdDept: '312312',
  //   rdAdminRoles: '0',
  //   rdType: comm.UserInfo.rdTypes.student,
  // });
  // const res = await client.queryUserById({ rdID: 3059 });
  // const res = await client.addUserInfo({
  //   rdID: 3059,
  //   rdName:"wyswillfasd",
  //   rdSex:comm.UserInfo.Sex.boy,
  // });
  // const res = await client.removeUserById({ rdID: 3059 });
  // const res = await client.addReaderTypeById({ rdID: 3059, rdType: 84959 });
  // const res = await client.modiReaderTypeByid({
  //   rdType: 84959,
  //   rdTypeInfo: new comm.readerType({
  //     CanLendQty: 123,
  //     CanLendDay: 312,
  //     CanContinueTimes: 21,
  //     PunishRate: 0.032,
  //     DateValid: 2,
  //   }),
  // });
  const res = await client.addBookInfo({
    bkName: 'test',
    bkAuthor: 'wyswill',
    bkPress: 'yahaha',
    bkISBN: 'ISBN',
    bkCatalog: 'TP316-21/123',
    bkLanguage: comm.BookInfo.BKLANGUAGE.cn,
    bkPages: 30,
    bkPrice: 200,
    bkDateIn: Date.now().toString(),
    bkBrief: '3123',
    bkStatus: comm.BookInfo.BKSTATUS.in,
  });
  console.log(res);
}
mainTest();
