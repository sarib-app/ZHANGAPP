import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const exception = {
    "error": "catch",
    "status": "401",
    "message": "Something Went Wrong"
}
async function GetVendorData(data) {
    // console.log(data)
    try {
      // Convert the selectedLocations array to a comma-separated string
      const userdata = await AsyncStorage.getItem("user")
      const userParsed = JSON.parse(userdata)
        // Fetch authenticated user's liked videos
        if(userParsed){  

      const apicall = await fetch(`https://zhang.tradingtube.net/api/fetchvendorwithid/${userParsed.vendor.id}`, {
        method: 'POST',
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
  
  export default GetVendorData;