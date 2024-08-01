import mongoose from 'mongoose';

const {mongoServer, mongoDbName} = process.env;

const mongoURI = `${mongoServer}/${mongoDbName}`;
console.log(mongoURI)

const connection = mongoose.connect(mongoURI).then( mongoose => {
    console.log("Mongoose connected")
    return mongoose
}).catch(err => {
    console.log(err)
})

const disconnect = mongoose.connection.close().then(() => {
    console.log('Mongoose disconnected')
}).catch(err => {
    console.log(err)
}); 

export { connection, disconnect };