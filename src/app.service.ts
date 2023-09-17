import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  @Get('/')
  getHello(): string {
    return "<a href='/api' style='margin:0 50% auto'>Api Gestion de produit</a>";
  }

  // getIndex():
}
