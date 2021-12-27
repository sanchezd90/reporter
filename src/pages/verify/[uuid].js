import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";

const Verify = () => {
    const router = useRouter()

    const verifyUser = async () => {
        console.log("toy")
        console.log(router.query.uuid)
        try {
            if(router.query.uuid){
                const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/verify/${router.query.uuid}`,
                )
                if(response){
                    router.push("/calculadora")
                }else{
                    router.push("/")
                }
        }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => verifyUser,[])

    return (
        <div>        
        </div>
    )
}

export default Verify