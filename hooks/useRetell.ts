import {config} from "@/constraints/config"
import Retell from "retell-sdk";


export default function () {
    return (new Retell({
        apiKey: config.RETELL_API_KEY,
    }));
}