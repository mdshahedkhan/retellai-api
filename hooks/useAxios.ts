// hooks/axiosConfig.ts
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    }
});

export default axiosInstance;
