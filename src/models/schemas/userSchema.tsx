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
    role: string;
}

const userSchema = new Schema({
    userId: {type: String, default: uuidv4, unique: true},
    fullName: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    grade: {type: Number, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'user'},
}, {
    timestamps: true,
})

userSchema.index({email: 1}, {unique: true})

const userModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default userModel;
