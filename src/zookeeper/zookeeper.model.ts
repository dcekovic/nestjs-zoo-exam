import mongoose, { Schema, Types } from 'mongoose';

export interface IZookeeper {
  _id: string;
  name: string;
  age: number;
  location: string;
  isActive: boolean;
  animals: [Types.ObjectId];
}

export const ZookeeperSchema: Schema = new mongoose.Schema<IZookeeper>({
  name: { type: String },
  age: { type: Number },
  location: { type: String },
  isActive: { type: Boolean },
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal'}],
});

export const Zookeeper = mongoose.model('Zookeeper', ZookeeperSchema);
