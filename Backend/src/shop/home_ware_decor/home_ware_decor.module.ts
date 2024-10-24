import { Module } from '@nestjs/common';
import { HomewareController } from './home_ware_decor.controller';

@Module({
  controllers: [HomewareController]
})
export class HomeWareDecorModule {}
