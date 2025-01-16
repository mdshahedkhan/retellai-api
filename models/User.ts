import mongoose, {Model, Document, Schema} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    retell_ai_api_key: string;
}

const UserMigrationSchema: Schema<IUser> = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    retell_ai_api_key: {
        type: String,
        required: false,
    }
}, {timestamps: true});


const instance: Model<IUser> = mongoose.models.users || mongoose.model('users', UserMigrationSchema);

export default instance