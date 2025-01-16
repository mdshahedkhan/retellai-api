import {useRouter} from "next/navigation";
import {useEffect} from "react";
import axios from "@/hooks/useAxios";

export default function useAuth() {
    const router = useRouter();
    const makeRequest = async () => {
        try {
            // Replace with your API endpoint for checking authentication
            const response = await axios.get('/auth/me');
            if (response.data.isAuthenticated === false) {
                router.push('/logout');
            }
            if (!window.location.pathname.match(new RegExp("dashboard", "i"))){
                router.push('/dashboard');
            }

        } catch (error) {
            console.log(error)
            //router.push('/login');
        }
    };
    useEffect(() => {
        makeRequest()
    }, [router]);
}
