import mongoose, { Schema, Types } from 'mongoose';
export interface IZookeeper {
    _id: string;
    name: string;
    age: number;
    location: string;
    isActive: boolean;
    animals: [Types.ObjectId];
}
export declare const ZookeeperSchema: Schema;
export declare const Zookeeper: mongoose.Model<{
    [x: string]: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    [x: string]: any;
}> & {
    [x: string]: any;
} & Required<{
    _id: unknown;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    [x: string]: any;
}, mongoose.Document<unknown, {}, {
    [x: string]: any;
}> & {
    [x: string]: any;
} & Required<{
    _id: unknown;
}>>>;
