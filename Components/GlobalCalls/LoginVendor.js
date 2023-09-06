import React from "react";
import { Alert } from "react-native";
const exception = {
    "error": "catch",
    "status": "401",
    "message": "Something Went Wrong"
}
async function LoginVendor(phone,password){
    try{
        var formdata = new FormData();
        formdata.append("phone_number", phone);
        formdata.append("password", password)    
        const apicall = await fetch(`https://zhang.tradingtube.net/api/login_vendor`, {
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
export default LoginVendor