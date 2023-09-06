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
async function PostProduct(data) {
    // console.log(data)
    try {
      // Convert the selectedLocations array to a comma-separated string
      const userdata = await AsyncStorage.getItem("user")
      const userParsed = JSON.parse(userdata)
        // Fetch authenticated user's liked videos
        const uri =
        Platform.OS === "android"
          ? data.image.uri
          :data.image.uri.replace("file://", "");
      const filename = data.image.uri.split("/").pop();
      const match = /\.(\w+)$/.exec( String(filename));
      const ext = match?.[1];
      const type = match ? `image/${match[1]}` : `image`;
      
      console.log(uri+ "  " + ext + "  " + type )
      
      const addOnsJoin = data.addOns.join(',');
      const variationsJoin = data.variations.join(',');


        if(userParsed){  
      var formdata = new FormData();
      formdata.append("title", data.productName);
      formdata.append("category_id", data.cid);
      formdata.append("description", data.productDescription);
      formdata.append("vendor_id",userParsed.vendor.id);
      formdata.append("price", data.productPrice);
      formdata.append("type","data.productInfo");
      formdata.append("image",  {
        uri:uri,
        name: `image.${ext}`,
        type:type,
      } );
      formdata.append("add_on", addOnsJoin);
      formdata.append("variation", variationsJoin);  
      const apicall = await fetch(`https://zhang.tradingtube.net/api/post_product`, {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      });
  
      const response = await apicall.json();
    //   console.log("Inside", user);
  
     
        return response
    
    }
    } catch (error) {
      console.error(error);
      return exception
    }
  }
  
  export default PostProduct;