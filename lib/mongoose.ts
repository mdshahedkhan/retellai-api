import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
}


const connectMongo = async () => {

    const connection = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);

    return (await connection).Connection;
};

export default connectMongo;
