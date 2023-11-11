import { Injectable, Type } from '@nestjs/common';
import { IZookeeper } from './zookeeper.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { EditZookeeperDto } from './dto/request/edit-zookeeper.dto';
import { CreateZookeeperDto } from './dto/request/create-zookeeper.dto';

@Injectable()
export class ZookeeperService {
  constructor(
    @InjectModel('Zookeeper')
    private readonly zookeeperModel: Model<IZookeeper>,
  ) { }

  async addZookeeper(zookeeper: CreateZookeeperDto): Promise<IZookeeper> {
    const zkeeper = new this.zookeeperModel({});
    zkeeper.age = zookeeper.age;
    zkeeper.name = zookeeper.name;
    zkeeper.location = zookeeper.location;
    zkeeper.isActive = zookeeper.isActive;
    zookeeper.animals.forEach(animalId => {
      zkeeper.animals.push(new Types.ObjectId(animalId))
    })

    const result = await zkeeper.save();
    return result;
  }

  async editZookeeper(id: Types.ObjectId, zookeeper: EditZookeeperDto): Promise<IZookeeper> {
    try {
      const zkeeper = await this.zookeeperModel.findById(id);
      zkeeper.age = zookeeper.age;
      zkeeper.name = zookeeper.name;
      zkeeper.location = zookeeper.location;
      zkeeper.isActive = zookeeper.isActive;
      zookeeper.animals.forEach(animalId => {
        if (zookeeper.animals.includes(animalId) === false) {
          zkeeper.animals.push(new Types.ObjectId(animalId))
        }
      })
      const result = await zkeeper.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getAllZookeepeers(): Promise<(import("mongoose").Document<unknown, {}, IZookeeper> & IZookeeper & { _id: Types.ObjectId; })[]> {
    return await this.zookeeperModel.find({});
  }

  async deleteZookeeper(id: Types.ObjectId): Promise<IZookeeper> {
    try {
      return await this.zookeeperModel.findByIdAndDelete(id);
    } catch (error) {
      return await error;
    }
  }

  getZookeeperById(id: Types.ObjectId): Promise<IZookeeper>{
    return this.zookeeperModel.findById(id).populate('animals');
  }
}
