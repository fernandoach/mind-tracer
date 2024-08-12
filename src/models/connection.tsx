import mongoose from 'mongoose';
import userModel from './schemas/userSchema';
import dotenv from 'dotenv';

dotenv.config();

const {mongoServer, mongoDbName} = process.env;

const mongoURI = `${mongoServer}/${mongoDbName}`;

const connection = async () => {
    try {
        await mongoose.connect(mongoURI)
        await userModel.init();
    } catch (error) {
        console.log(error)
    }
}

const disconnect = async () => {
    try {
        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

export { connection, disconnect };