import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './animal.model';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { ZookeeperSchema } from 'src/zookeeper/zookeeper.model';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Animal', schema: AnimalSchema }]),
      MongooseModule.forFeature([{ name: 'Zookeeper', schema: ZookeeperSchema }]),
    ],
    controllers: [AnimalController],
    providers: [AnimalService],
  })
  export class AnimalModule {}