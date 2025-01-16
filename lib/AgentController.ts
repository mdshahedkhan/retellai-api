import useRetell from "@/hooks/useRetell";
import axiosInstance from "@/hooks/useAxios";

const client = useRetell()
export const getAllAgents = async () => {
    return client.agent.list();
}

export const deleteAgent = async (agentId: string) => {
    console.log(agentId);
    return client.agent.delete(agentId);
}


export const createNewAgent = async (agentName: string) => {
    return client.agent.create({
        response_engine: {
            llm_id: 'llm_f8a203954e2b312d71c6980907ad',
            type: 'retell-llm',
        },
        agent_name: agentName,
        voice_id: '11labs-Adrian',
        voicemail_message: "Hello World!",
    });
}


export const getAgent = async (agentId: string) => {
    return client.agent.retrieve(agentId);
}

export const updateAgent = async (agentId: string, options: object) => {
    return client.agent.update(agentId, options);
}

export const getHistories = async function () {
    // @ts-ignore
    return client.call.list();
}


export const getVoiceList = function () {
    return client.voice.list();
}

export const getRetellLLMs = function () {
    return client.llm.list();
}
export const getRetellLLM = function (ll_id: string) {
    return client.llm.retrieve(ll_id);
}

export const getBatchCalls = async function () {
    return axiosInstance.get("/batch-calls");
}
export const getPhoneNumbers = async function () {
    return client.phoneNumber.list();
}
export const storeBatchPhoneNumber = async function (fromNumber: string, toNumber: string) {
    return client.call.createPhoneCall({
        from_number: fromNumber,
        to_number: toNumber,
    });
}