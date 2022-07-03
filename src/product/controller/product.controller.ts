import { Controller, Get } from '@nestjs/common';

@Controller('products')
export default class ProductController {
  @Get('product')
  product(): string {
    return 'Hola Mundo';
  }
}
