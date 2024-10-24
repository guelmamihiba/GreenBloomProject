import { Module } from '@nestjs/common';
import { VasesService } from './vases.service';
import { VasesController } from './vases.controller';

@Module({
  providers: [VasesService],
  controllers: [VasesController]
})
export class VasesModule {}
