import mongoose, {Model, Schema} from "mongoose";


export interface ICallNumber {
    from_number: string;
    to_number: string;
    dynamic_variable1: string
    dynamic_variable2: string
}

const CallNumberMigrationSchema: Schema<ICallNumber> = new Schema<ICallNumber>({
    from_number: {
        required: true,
        type: String
    },
    to_number: {
        required: true,
        type: String
    },
    dynamic_variable1: {
        required: true,
        type: String
    },
    dynamic_variable2: {
        required: true,
        type: String
    },
}, {timestamps: true});


const instance: Model<ICallNumber> = mongoose.models.call_numbers || mongoose.model("call_numbers", CallNumberMigrationSchema);
export default instance