import { Injectable } from '@nestjs/common';
import { IAnimal } from './animal.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateAnimalDto } from './dto/request/create-animal.dto';
import { EditAnimalDto } from './dto/request/edit-animal.dto';
import { IZookeeper } from 'src/zookeeper/zookeeper.model';
import { AnimalResponseDto } from './dto/response/animal-response.dto';
import { ZookeeperAnimalResponseDto } from './dto/response/zookeeper-animal-response.dto';
import { AssignAnimalsToZookeeeperDto } from './dto/request/assign-zookeeper.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel('Animal')
    private readonly animalModel: Model<IAnimal>,
    @InjectModel('Zookeeper')
    private readonly zookeeperModel: Model<IZookeeper>
  ) { }


  async addAnimal(animal: CreateAnimalDto): Promise<IAnimal> {
    const newAnimal = new this.animalModel({});
    newAnimal.name = animal.name;
    newAnimal.type = animal.type;
    newAnimal.age = animal.age;
    newAnimal.location = animal.location;
    newAnimal.gender = animal.gender;
    newAnimal.characteristics = animal.characteristics;
    newAnimal.zookeeper = animal.zookeeperId;
    const updatedAnimal = (await newAnimal.save());
    
    const zookeeper = await this.zookeeperModel.findById(animal.zookeeperId);
    zookeeper.animals.push((await updatedAnimal).id);
    zookeeper.save();

    return updatedAnimal.populate('zookeeper');
  }

  editAnimal(id: Types.ObjectId, animal: EditAnimalDto): Promise<IAnimal> {
    try {
      return this.animalModel.findByIdAndUpdate(id, animal);
    } catch (error) {
      return error;
    }
  }

  getAllAnimals(): Promise<(import("mongoose").Document<unknown, {}, IAnimal> & IAnimal & Required<{ _id: string; }>)[]> {
    return this.animalModel.find({});
  }

  async deleteAnimal(id: Types.ObjectId): Promise<IAnimal> {
    return await this.animalModel.findByIdAndDelete(id);
  }

  getAnimalById(id: Types.ObjectId): Promise<IAnimal> {
    return this.animalModel.findById(id).populate('zookeeper');
  }

  async assignAnimalsToZookeeper(zookeeperId: Types.ObjectId, assignBody: AssignAnimalsToZookeeeperDto): Promise<IZookeeper> {
    const zookeeper = await this.zookeeperModel.findById(zookeeperId);
    let missing = assignBody.animals.filter(item => zookeeper.animals.indexOf(item) < 0);
    missing.forEach(animalId => {
      zookeeper.animals.push(new Types.ObjectId(animalId))
    })
    zookeeper.save();

    const linkedAnimals = await this.animalModel.find({
      '_id': {
        $in: [
          assignBody.animals
        ]
      }
    });

    linkedAnimals.forEach(animal => {
      animal.zookeeper = zookeeperId;
      animal.save();
    });

    return zookeeper.populate('animals');
  }
}

