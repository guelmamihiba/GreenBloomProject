import { Module } from '@nestjs/common';
import { TerrariumsService } from './terrarium.service';
import { TerrariumsController } from './terrarium.controller';

@Module({
  providers: [TerrariumsService],
  controllers: [TerrariumsController]
})
export class TerrariumModule {}
