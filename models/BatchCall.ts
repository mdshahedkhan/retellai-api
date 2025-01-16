import mongoose, {Document, Model, Schema} from "mongoose";
import {IUser} from "@/models/User";
import {ICallNumber} from "@/models/CallNumber";

export interface IBatchCall extends Document {
    batch_call_name: string;
    from: string;
    recipients: string;
    usersId: IUser | mongoose.Types.ObjectId;
    call_numbers: ICallNumber[] | mongoose.Types.ObjectId[]
}


const BatchCallMigrationSchema: Schema<IBatchCall> = new Schema<IBatchCall>({
    batch_call_name: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true
    },
    recipients: {
        type: String,
        required: true
    },
    call_numbers: [{
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "call_numbers",
    }],
    usersId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
}, {timestamps: true});


const instance: Model<IBatchCall> = mongoose.models.batch_calls || mongoose.model("batch_calls", BatchCallMigrationSchema);
export default instance;