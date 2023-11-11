import mongoose, { Schema, Types } from 'mongoose';
export interface IAnimal {
    _id: string;
    name: string;
    type: string;
    age: number;
    location: string;
    gender: string;
    characteristics: Characteristics;
    zookeeper: Types.ObjectId;
}
export interface Characteristics {
    food: string[];
    colour: string;
    isDangerous: boolean;
    weight: number;
    enclosure: string;
}
export declare const AnimalSchema: Schema;
export declare const Animal: mongoose.Model<{
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
