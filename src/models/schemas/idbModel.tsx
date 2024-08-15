import mongoose, { Schema, Document, Model} from 'mongoose';
import userModel from './userSchema'


interface IIdb extends Document {
  user: typeof userModel;
  respuesta: string[];
  total: number;
  clasificacion: number;
}

const idbSchema = new Schema<IIdb>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  respuesta: [{ type: String, required: true }],
  total: { type: Number, default: 0, required: true },
  clasificacion: { type: Number, default: 0, required: true },
});

const idbModel = mongoose.models.Idb || mongoose.model<IIdb>('Idb', idbSchema);

export default idbModel;
