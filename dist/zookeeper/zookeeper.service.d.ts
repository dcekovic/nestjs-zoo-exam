import { IZookeeper } from './zookeeper.model';
import { Model, Types } from 'mongoose';
import { EditZookeeperDto } from './dto/request/edit-zookeeper.dto';
import { CreateZookeeperDto } from './dto/request/create-zookeeper.dto';
export declare class ZookeeperService {
    private readonly zookeeperModel;
    constructor(zookeeperModel: Model<IZookeeper>);
    addZookeeper(zookeeper: CreateZookeeperDto): Promise<IZookeeper>;
    editZookeeper(id: Types.ObjectId, zookeeper: EditZookeeperDto): Promise<IZookeeper>;
    getAllZookeepeers(): Promise<(import("mongoose").Document<unknown, {}, IZookeeper> & IZookeeper & {
        _id: Types.ObjectId;
    })[]>;
    deleteZookeeper(id: Types.ObjectId): Promise<IZookeeper>;
    getZookeeperById(id: Types.ObjectId): Promise<IZookeeper>;
}
