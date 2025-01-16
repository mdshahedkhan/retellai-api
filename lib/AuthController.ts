import axios from "@/hooks/useAxios";
import toast from "react-hot-toast";

export const AuthController = {
    async login(email: string, password: string) {
        const makeRequest = new Promise(async (resolve, reject) => {
            try {
                const response: any = await axios.post("/auth/login", {email: email, password: password})
                console.log(response.data)
                return resolve(response)
            }catch (error) {
                return reject(error)
            }
        })

        await toast.promise(makeRequest, {
            loading: "Processing...",
            success: "Logged in successfully!",
            error: "Something went wrong!",
        })
        return makeRequest
    },

    async logout() {
        const response = await axios.post("/auth/logout")
        console.log(response)
    }

}