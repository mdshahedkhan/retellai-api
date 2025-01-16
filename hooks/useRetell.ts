/* eslint-disable import/no-anonymous-default-export */
import Retell from "retell-sdk";

const RETELL_API_KEY = process.env.RETELL_API_KEY || ""

export default function () {
    return (new Retell({
        apiKey: RETELL_API_KEY,
    }));
}