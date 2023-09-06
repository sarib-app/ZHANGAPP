import React from "react";
import { Alert } from "react-native";

    import baseUrl from "../Auth/Url";
import EndPoints from "../Auth/EndPoints";
const exception = {
    "error": "catch",
    "status": "401",
    "message": "Something Went Wrong"
}
async function LoginUser(phone,password){
    try{
        var formdata = new FormData();
        formdata.append("phone_number", phone);
        formdata.append("password", password)    
        const apicall = await fetch(`${baseUrl}${EndPoints.userLogin}`, {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        });
    
        const vendor = await apicall.json();
      //   console.log("Inside", user);
    
        
      return vendor
      
    }catch{
return exception
    }
}
export default LoginUser