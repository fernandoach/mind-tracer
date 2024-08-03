import mongoose from 'mongoose';
import userModel from './schemas/userSchema';

const {mongoServer, mongoDbName} = process.env;

const mongoURI = `${mongoServer}/${mongoDbName}`;
console.log(mongoURI)

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