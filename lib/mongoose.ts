import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = "mongodb+srv://shahed:Rzmwu5dCjq6PHlm6@retellai.b7drj.mongodb.net/main";

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
