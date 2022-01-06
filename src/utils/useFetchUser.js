import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";

export const useFetchUser = ({    
    setUser,        
}) => {    
    const cookies = new Cookies();
    const fetch = async () => {  
        const userCookie = jwt.decode(cookies.get("user"));
        if(userCookie){            
            try {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/users/get`,
                    {
                    email:userCookie.user.email
                    }
                );      
                setUser(data.user);
                } catch (error) {
                console.log(error);
                }
            };                          
        }

    useEffect(fetch, []);
}

export default useFetchUser;