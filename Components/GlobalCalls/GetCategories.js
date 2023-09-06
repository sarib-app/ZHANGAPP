import React from "react";
import { Alert } from "react-native";

    import baseUrl from "../Auth/Url";
import EndPoints from "../Auth/EndPoints";
const exception = {
    "error": "catch",
    "status": "401",
    "message": "Something Went Wrong"
}
async function GetCategories(){
    try{
        
        const apicall = await fetch(`${baseUrl}${EndPoints.fetchCat}`, {
          method: 'POST',
          redirect: 'follow'
        });
    
        const categories = await apicall.json();
      //   console.log("Inside", user);
    
        
      return categories
      
    }catch{
return exception
    }
}
export default GetCategories