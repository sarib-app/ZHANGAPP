import AsyncStorage from "@react-native-async-storage/async-storage";

async function GetCartCount(){
    const existingCartData = await AsyncStorage.getItem("cartData");
    const ParsedExisting = JSON.parse(existingCartData)
    console.log('sss',ParsedExisting.length)
    if(ParsedExisting != null){
      if(ParsedExisting.length >= 1){
  
        return ParsedExisting.length
      }
      else{
        return 0
  
      }
    }
    else{
      return 0
    }
  
  }
  export default GetCartCount