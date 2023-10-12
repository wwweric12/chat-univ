import { Axios } from '../Axios';

export const Signin = async (data,callbackFunction)=>{
    const {email,password} =data;
    try{
    const res =await Axios.post(`/api/auth/sign-in`,{
        email,
        password
    });
    callbackFunction(res.data);
    }catch(error){
        alert(error.response.data);
    }

};