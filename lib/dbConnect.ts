import mongoose from 'mongoose';

export async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI || '';
  
  if (!MONGODB_URI) {
    throw new Error('Veuillez spécifier MONGODB_URI dans les variables d\'environnement.');
  }
  
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(MONGODB_URI);
}
