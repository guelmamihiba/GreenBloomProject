import { Module } from '@nestjs/common';
import { HomeWareDecorController } from './home_ware_decor.controller';

@Module({
  controllers: [HomeWareDecorController]
})
export class HomeWareDecorModule {}
