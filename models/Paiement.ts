import mongoose, { Schema, Document, models, model, Types } from 'mongoose';

export interface IPaiement extends Document {
  user: Types.ObjectId;
  type: 'premium' | 'formation' | 'service';
  amount: number;
  method: string;
  status: 'en attente' | 'confirmé' | 'échoué';
}

const PaiementSchema: Schema<IPaiement> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['premium', 'formation', 'service'], required: true },
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  status: { type: String, enum: ['en attente', 'confirmé', 'échoué'], default: 'en attente' },
});

export default models.Paiement || model<IPaiement>('Paiement', PaiementSchema);
