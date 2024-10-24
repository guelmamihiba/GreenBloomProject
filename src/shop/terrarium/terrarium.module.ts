import { Module } from '@nestjs/common';
import { TerrariumService } from './terrarium.service';
import { TerrariumController } from './terrarium.controller';

@Module({
  providers: [TerrariumService],
  controllers: [TerrariumController]
})
export class TerrariumModule {}
