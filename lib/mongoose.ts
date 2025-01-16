import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable');
}


const connectMongo = async () => {

    try {
        await mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
    } catch (error) {
        console.log(error)
    }
};

export default connectMongo;
