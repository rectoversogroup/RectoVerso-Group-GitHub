import mongoose, { Schema, Document, models, model, Types } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  provider: Types.ObjectId;
  images: string[];
  approved: boolean;
}

const ServiceSchema: Schema<IService> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  provider: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  images: [{ type: String }],
  approved: { type: Boolean, default: false },
});

export default models.Service || model<IService>('Service', ServiceSchema);
