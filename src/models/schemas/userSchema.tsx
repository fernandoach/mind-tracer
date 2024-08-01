import { randomUUID, UUID } from 'crypto';
import mongoose, { Schema, Document, Model} from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface IUser extends Document {
    userId: string;
    fullName: string;
    gender: string;
    age: number;
    grade: number;
    email: string;
    password: string;
}

const userSChema = new Schema({
    userId: {type: String, default: uuidv4, unique: true},
    fullName: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    grade: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const userModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSChema);

export default userModel;
