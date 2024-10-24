import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AccessoriesSuppliesModule } from './shop/accessories-supplies/accessories-supplies.module';

@Module({
  // imports: [AccessoriesSuppliesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
