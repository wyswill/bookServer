import path from 'path';
import { promisify } from 'util';
import { book, comm } from '../src/rpc/bundle';
import RpcQuery from './base';
const rq = new RpcQuery({
  host: 'localhost:50051',
  packge: 'book',
});
const client = rq.getClient<book.book_service>();
client.registerUser = promisify(client.registerUser);
client.queryUserById = promisify(client.queryUserById);
client.addUserInfo = promisify(client.addUserInfo);
client.removeUserById = promisify(client.removeUserById);
client.addReaderTypeById = promisify(client.addReaderTypeById);
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
  const res = await client.addReaderTypeById({ rdID: 3059, rdType: 84959 });
  console.log(res);
}
mainTest();
