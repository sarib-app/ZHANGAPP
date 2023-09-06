import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EndPoints from "../../Auth/EndPoints";
import { Alert } from "react-native";
import { Platform } from "react-native";
const exception = {
    "error": "catch",
    "status": "401",
    "message": "Something Went Wrong"
}
async function UpdateProductCall(data) {
    // console.log("Prroooooffff", data.ProofImage.uri )
    try {
      // Convert the selectedLocations array to a comma-separated string
      const userdata = await AsyncStorage.getItem("user")
      const userParsed = JSON.parse(userdata)
        // Fetch authenticated user's liked videos
      
      // console.log(uri+ "  " + ext + "  " + type )
      
      const addOnsJoin = data.addOns.join(',');
      const variationsJoin = data.variations.join(',');


        if(userParsed){  
          console.log("hmm")
      var formdata = new FormData();
      formdata.append("title", data.productName);
      formdata.append("category_id", data.cid);
      formdata.append("description", data.productDescription);
      formdata.append("vendor_id",userParsed.vendor.id);
      formdata.append("price", data.productPrice);
      formdata.append("type","yes,no");
      {
        data.ProofImage &&
        formdata.append("image",  {
          uri:data.uri,
          name: `image.${data.ext}`,
          type:data.type,
        } );
      }
      formdata.append("add_on", addOnsJoin);
      formdata.append("variation", variationsJoin);  
      const apicall = await fetch(`https://zhang.tradingtube.net/api/update_product/${data.pid}`, {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      });
  
      const response = await apicall.json();
      console.log("Inside", response);
  
     
        return response
    
    }
    } catch (error) {
      console.error(error);
      return exception
    }   
  }
  
  export default UpdateProductCall;