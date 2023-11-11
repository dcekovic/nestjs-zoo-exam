import { IAnimal } from './animal.model';
import { Model, Types } from 'mongoose';
import { CreateAnimalDto } from './dto/request/create-animal.dto';
import { EditAnimalDto } from './dto/request/edit-animal.dto';
import { IZookeeper } from 'src/zookeeper/zookeeper.model';
import { AssignAnimalsToZookeeeperDto } from './dto/request/assign-zookeeper.dto';
export declare class AnimalService {
    private readonly animalModel;
    private readonly zookeeperModel;
    constructor(animalModel: Model<IAnimal>, zookeeperModel: Model<IZookeeper>);
    addAnimal(animal: CreateAnimalDto): Promise<IAnimal>;
    editAnimal(id: Types.ObjectId, animal: EditAnimalDto): Promise<IAnimal>;
    getAllAnimals(): Promise<(import("mongoose").Document<unknown, {}, IAnimal> & IAnimal & Required<{
        _id: string;
    }>)[]>;
    deleteAnimal(id: Types.ObjectId): Promise<IAnimal>;
    getAnimalById(id: Types.ObjectId): Promise<IAnimal>;
    assignAnimalsToZookeeper(zookeeperId: Types.ObjectId, assignBody: AssignAnimalsToZookeeeperDto): Promise<IZookeeper>;
}
