import { Module } from '@nestjs/common';
import { EssentialOilsService } from './essentional_oils.service';
import { EssentialOilsController } from './essentional_oils.controller';

@Module({
  providers: [EssentialOilsService],
  controllers: [EssentialOilsController]
})
export class EssentionalOilsModule {}
