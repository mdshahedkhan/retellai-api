import {verifyAuth} from "@/lib/auth";
import {NextApiRequest, NextApiResponse} from "next";
import BatchCall from "@/models/BatchCall";
import CallNumber from "@/models/CallNumber";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        const Auth = verifyAuth(request, response)
        const callNumbers = request.body.recipientNumbers.map((item: any) => {
            return {
                from_number: request.body.from,
                to_number: item["phone number"],
                dynamic_variable1: item["dynamic variable1"],
                dynamic_variable2: item["dynamic variable2"],
            }
        });
        console.log(callNumbers)
        const callNumberResult = await CallNumber.insertMany(callNumbers);
        console.log(callNumberResult)
        const callNumberResultIds = callNumberResult.map(callNumber => callNumber._id)
        const batchCall = await BatchCall.create({
            batch_call_name: request.body.batch_call_name,
            from: request.body.from,
            recipients: request.body.recipients,
            userId: Auth?.id,
            callNumbers: callNumberResultIds
        })
        response.status(201).json({
            success: true,
            content: {
                batchCall,
                callNumberResult,
            },
            message: "Batch call has been successfully saved",
        });
    } catch (error: any) {
        response.status(200).json({error: error.message, success: false});
    }
}