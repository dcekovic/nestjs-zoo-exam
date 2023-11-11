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

export const AnimalSchema: Schema = new mongoose.Schema<IAnimal>({
  name: { type: String },
  type: { type: String },
  age: { type: Number },
  location: { type: String },
  gender: { type: String },
  characteristics: { type: Schema.Types.Mixed },
  zookeeper: { type: mongoose.Schema.Types.ObjectId, ref: 'Zookeeper'},
});

export const Animal = mongoose.model('Animal', AnimalSchema);