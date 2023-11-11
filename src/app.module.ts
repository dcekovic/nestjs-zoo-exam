import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZookeeperModule } from './zookeeper/zookeeper.module';
import { AnimalModule } from './animal/animal.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ZookeeperModule,
    AnimalModule,
    MongooseModule.forRoot(
      'mongodb+srv://dautchekovikj:F3Ei%40ZWDKe7F7A%40@cluster0.dug6qbv.mongodb.net/zoo-db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
