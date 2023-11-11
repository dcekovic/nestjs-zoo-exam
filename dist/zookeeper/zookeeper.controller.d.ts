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
import { ZookeeperService } from './zookeeper.service';
import { EditZookeeperDto } from './dto/request/edit-zookeeper.dto';
import { IZookeeper } from './zookeeper.model';
import { Types } from 'mongoose';
import { CreateZookeeperDto } from './dto/request/create-zookeeper.dto';
export declare class ZookeeperController {
    private readonly zookeeperService;
    constructor(zookeeperService: ZookeeperService);
    addZookeeper(zookeeper: CreateZookeeperDto): Promise<IZookeeper>;
    editZookeeper(zookeeper: EditZookeeperDto, id: Types.ObjectId): Promise<IZookeeper>;
    getAllZookeepers(): Promise<(import("mongoose").Document<unknown, {}, IZookeeper> & IZookeeper & {
        _id: Types.ObjectId;
    })[]>;
    deleteZookeeper(id: Types.ObjectId): Promise<IZookeeper>;
    getZookeeperById(id: Types.ObjectId): Promise<IZookeeper>;
}
