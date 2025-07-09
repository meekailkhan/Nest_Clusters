import { Controller, Post,Body} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { CreateUserDto } from 'lib/dtos/create-user.dto';


@Controller('user')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('user')
  async createUser(@Body() body:CreateUserDto){
    return this.gatewayService.forwardCreateUserReq(body)
  }

}
