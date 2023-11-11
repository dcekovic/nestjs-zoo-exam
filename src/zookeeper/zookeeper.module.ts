import { Module } from '@nestjs/common';
import { ZookeeperService } from './zookeeper.service';
import { ZookeeperController } from './zookeeper.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ZookeeperSchema } from './zookeeper.model';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Zookeeper', schema: ZookeeperSchema }]),
  ],
  controllers: [ZookeeperController],
  providers: [ZookeeperService],
})
export class ZookeeperModule {}
