import React,{useState,useEffect} from "react";
import { View,Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Registration from "../Auth/Registration";
import Login from "../Auth/Login";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { useNavigation } from "@react-navigation/native";
function Router(){
    const navigation = useNavigation()
const [index,setIndex]=useState(4)
    useEffect(()=>{
        GetAsyncStorage()
    },[])
    

    async function GetAsyncStorage(){
        const value = await AsyncStorage.getItem("Login")
        if(value){
            // setIndex(3)
            // console.log("worked")
            navigation.navigate("BottomNavigation")
            navigationRester("BottomNavigation")
        }else{
            // setIndex(1)
            navigation.navigate("Login")

            navigationRester("Login")
        }
    }
    function navigationRester(title) {
        navigation.reset({
          index: 0,
          routes: [{ name: title }],
        });
      }
return(
    <View>
        <Text>Loading...</Text>
    </View>
)

    // function RouteControler(){
     
    //    if(index === 1){
    //     setIndex(2)
    //    }
    //    else if(index === 2){
    //     setIndex(1)
    //    }
    //    else if(index === 3){
    //     setIndex(1)
    //    }

    // }


    // function ControlLogin(){
    //     setIndex(3)
    // }

    // if(index === 1){
    //     return(
    //         <Login
    //         RouteControler={RouteControler}
    //         ControlLogin={ControlLogin}
            
    //         />

    //     )
    // }
    // else if(index === 2){
    //     return(
    //         <Registration 
    //         RouteControler={RouteControler}
    //         ControlLogin={ControlLogin}
            
    //         />

    //     )
    // }
    // else if(index === 3){
    //     return(
    //         <BottomNavigation
    //         RouteControler={RouteControler}
    //         />

    //         )
    // }
    // else{
    //     return(
    //         <View>
    //         <Text>
    //             Loading...
    //         </Text>
    //     </View>
    //     )
    // }

}
export default Router