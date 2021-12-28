import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";

const Verify = () => {
    const router = useRouter()

    const verifyUser = async () => {            
        try {  
            console.log(router.query.uuid)          
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

    useEffect(() => verifyUser,[router.query.uuid])

    return (
        <div>    
                                                             
        </div>
    )
}

export default Verify