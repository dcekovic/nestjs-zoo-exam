/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/request/create-animal.dto';
import { EditAnimalDto } from './dto/request/edit-animal.dto';
import { IAnimal } from './animal.model';
import { Types } from 'mongoose';
import { IZookeeper } from 'src/zookeeper/zookeeper.model';
import { AssignAnimalsToZookeeeperDto } from './dto/request/assign-zookeeper.dto';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    addAnimal(animal: CreateAnimalDto): Promise<IAnimal>;
    editAnimal(animal: EditAnimalDto, id: Types.ObjectId): Promise<IAnimal>;
    getAllAnimals(): Promise<(import("mongoose").Document<unknown, {}, IAnimal> & IAnimal & Required<{
        _id: string;
    }>)[]>;
    deleteAnimal(id: Types.ObjectId): Promise<IAnimal>;
    getAnimalById(id: Types.ObjectId): Promise<IAnimal>;
    assignAnimalsToZookeeper(assignBody: AssignAnimalsToZookeeeperDto, zookeeperId: Types.ObjectId): Promise<IZookeeper>;
}
