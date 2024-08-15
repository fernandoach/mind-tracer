import mongoose from 'mongoose';
import userModel from './schemas/userSchema';
import dotenv from 'dotenv';
import idbModel from './schemas/idbModel';

dotenv.config();

const {mongoServer, mongoDbName} = process.env;

const mongoURI = `${mongoServer}/${mongoDbName}`;

const connection = async () => {
    try {
        if (!mongoose.modelNames().includes('User')) {
            await userModel.init();
        }
        if (!mongoose.modelNames().includes('Idb')) {
            await idbModel.init();
        }
        await mongoose.connect(mongoURI)
    } catch (error: any) {
        throw new Error(error)
    }
}

const disconnect = async () => {
    try {
        mongoose.connection.close()
    } catch (error: any) {
        throw new Error(error)
    }
}

export { connection, disconnect };