import AsyncStorage from "@react-native-async-storage/async-storage";

async function CheckCartStatus(){
    const existingCartData = await AsyncStorage.getItem("cartData");
    const ParsedExisting = JSON.parse(existingCartData)
    if(ParsedExisting != null){
      if(ParsedExisting.length >= 1){
  
        return true
      }
      else{
        return false
  
      }
    }
    else{
      return false
    }
  
  }
  export default CheckCartStatus