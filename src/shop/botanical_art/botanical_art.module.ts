import { Module } from '@nestjs/common';
import { BotanicalArtService } from './botanical_art.service';
import { BotanicalArtController } from './botanical_art.controller';

@Module({
  providers: [BotanicalArtService],
  controllers: [BotanicalArtController]
})
export class BotanicalArtModule {}
