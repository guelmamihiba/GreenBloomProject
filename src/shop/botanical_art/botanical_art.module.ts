import { Module } from '@nestjs/common';
import { BotanicalArtService } from './botanical_art.service';
import { BotanicalArtController } from './botanical_art.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotanicalArt } from './botanical_art.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BotanicalArt])],
  controllers: [BotanicalArtController],
  providers: [BotanicalArtService],
})
export class BotanicalArtModule {}
