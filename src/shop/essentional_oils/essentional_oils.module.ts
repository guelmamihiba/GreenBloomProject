import { Module } from '@nestjs/common';
import { EssentionalOilsService } from './essentional_oils.service';
import { EssentionalOilsController } from './essentional_oils.controller';

@Module({
  providers: [EssentionalOilsService],
  controllers: [EssentionalOilsController]
})
export class EssentionalOilsModule {}
