
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const useSignup = () => {
  const[loading, setLoading] = useState(false)

  const signup = async({ fullName, email, password, confirmPassword, gender})=>{
    const success = handleInputErrors({fullName, email, password, confirmPassword, gender})
    if(!success) return;

    setLoading(true);


    try {
        const res = await fetch("http://localhost:5173/signup",{
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify({fullName, email, password, confirmPassword, gender})
        }

        )

        if(!res.ok){ throw new Error('Server error')}

        const data = await res.json()
        console.log(data);  
    } catch (error) {
        toast.error("Try error: ",error.message);
        console.log(error.message)
        return

    }finally{
        setLoading(false)
    }
  }
  
  return{loading, signup }
}



function handleInputErrors({fullName, email, password, confirmPassword, gender}){
    if(!fullName || !email || !password || !confirmPassword || !gender){
        toast.error( "Please fill all fields")
        return false
    }

    if(password !== confirmPassword){
        toast.error( "Passwords don't match")
        return false
    }

    if(password.length<8){
        toast.error("Password not of 8 characters")
        return false
    }


    return  true;
}

export default useSignup
