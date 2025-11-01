import mongoose, { Schema, Document, models, model, Types } from 'mongoose';

export interface IFormation extends Document {
  title: string;
  domain: string;
  cost: number;
  instructor: Types.ObjectId;
  mode: 'en ligne' | 'présentiel';
  subvention: boolean;
}

const FormationSchema: Schema<IFormation> = new Schema({
  title: { type: String, required: true },
  domain: { type: String, required: true },
  cost: { type: Number, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mode: { type: String, enum: ['en ligne', 'présentiel'], required: true },
  subvention: { type: Boolean, default: false },
});

export default models.Formation || model<IFormation>('Formation', FormationSchema);
