import AsyncStorage from "@react-native-async-storage/async-storage";
const checkVendor = async ()=>{
const checkStatus = await AsyncStorage.getItem("LoginAs")
if(checkStatus == "Vendor"){
    return true;  }
    else{
        return false;
    }
    
}
export default checkVendor
