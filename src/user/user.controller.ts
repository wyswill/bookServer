import { UserService } from './user.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { user } from '@src/rpc/bundle';

@Controller('user')
export class UserController {
  constructor(protected readonly service: UserService) {}

  @GrpcMethod('book_service', 'login')
  async Login(data: user.ILoginReq) {
    return await this.service.login(data);
  }
  @GrpcMethod('book_service', 'registerUser')
  async registUser(data: user.IregisterUserReq) {
    return await this.service.registerUser(data);
  }
}
