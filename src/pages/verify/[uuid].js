import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import Cookies from "universal-cookie";

const Verify = () => {
    const router = useRouter()        

    useEffect(()=>{
        const cookies = new Cookies();
        async function verify(){                      
            try {  
                console.log(router.query.uuid)          
                if(router.query.uuid){
                    const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/verify/${router.query.uuid}`,
                    )
                    if(response){
                        cookies.set('user',response.data.token)
                        router.push("/calculadora")
                    }else{
                        router.push("/")
                    }
            }
            } catch (error) {
                console.log(error);
            }              
        }
        verify(),
        []
    })

    return (
        <div>                                                                 
        </div>
    )
}

export default Verify