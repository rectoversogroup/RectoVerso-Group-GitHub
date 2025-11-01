import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'client' | 'prestataire' | 'recruteur' | 'formateur' | 'admin';
  location?: string;
  skills?: string[];
  premium?: boolean;
  paymentMethod?: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'prestataire', 'recruteur', 'formateur', 'admin'], default: 'client', required: true },
  location: { type: String },
  skills: [{ type: String }],
  premium: { type: Boolean, default: false },
  paymentMethod: { type: String },
});

export default models.User || model<IUser>('User', UserSchema);
