import AsyncStorage from "@react-native-async-storage/async-storage";
const GETcatAsync = async ()=>{
const cat = await AsyncStorage.getItem("categories")
const ParsedCategories = JSON.parse(cat)
if(ParsedCategories){
    // console.log(ParsedCategories)
    return ParsedCategories; 

}
    else{
        return [];
    }
    
}
export default GETcatAsync
