import axios from "@/hooks/useAxios";
import toast from "react-hot-toast";
import * as Retell from "@/lib/AgentController"

export const Store = async function (payload: any) {
    const makeToStoreBatchCallPromise = new Promise<any>(async (resolve, reject) => {
        const response = await axios.post("/batch-calls/store", payload);
        if (response.data.success) {
            payload.recipientNumbers?.forEach((item: any) => {
                console.log(item, "HERE");
                Retell.storeBatchPhoneNumber(payload.from, item['phone number'])
            })
            return resolve(response.data);
        } else {
            return reject(response.data);
        }
    })
    await toast.promise(makeToStoreBatchCallPromise, {
        loading: "Processing...",
        success: "Batched successfully",
        error: "Oops! unable to create batch call.",
    })
}