import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { ConsistentHasher } from './utils/consitent-hasher';
import {SERVICES} from './services.cofing';
import { CreateUserDto } from 'lib/dtos/create-user.dto';
import axios from 'axios'

@Injectable()
export class GatewayService {
  private hasher = new ConsistentHasher();

  async forwardCreateUserReq(createUserDto:CreateUserDto) :Promise<any> {
    const hashKey = createUserDto?.email;
    if(!hashKey){
      throw new HttpException('there is missing field of hash key',HttpStatus.BAD_REQUEST);
    }

    const serviceKey = this.hasher.getNode(hashKey)
    const finalUrl = new URL('/user', serviceKey).href;
    console.log('Target URL:', `${finalUrl}`);

    try{
      const respose = await axios.post(`${finalUrl}`,createUserDto)
      return respose.data
    }catch(error){
      throw new HttpException(
        `Service ${serviceKey} is failed: ${error.message}`,
        HttpStatus.BAD_GATEWAY
      )
    }
  }
}
