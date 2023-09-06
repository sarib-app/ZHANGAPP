import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,Image,ScrollView, ImageBackground ,TextInput,Alert} from 'react-native';
import WebView from 'react-native-webview';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Styles from './Styles';
// import profMale from '../../assets/Images/male.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import bggraph from '../../assets/Images/bggraph.png'
import Colors from '../GlobalStyles/colors';
import GoBack from '../GlobalStyles/GoBack';
// import ChangePasswordApi from '../DBCalls/ChangePasswordApi';
const ChangePassword = () => {


const iconColor = Colors.FontColorI
const [secureTextt,setSecureTxt]=useState(true)
const [isPressed,setIsPressed]=useState(false)
const [loading,setLoading]=useState(false)

const [user,setUser]=useState(
    {
        password:"",
        confirmPassword:"",
       
    }
)
async function ChangePasswordNow(){
  if(user.password && user.confirmPassword){



  // setLoading(true)
  // try {
  //   const data = await ChangePasswordApi(user);
  //   // console.log("Videos:", data);
  //   if(data.status === "401"){
  //     Alert.alert("Status",data.message)
  //   }
  //   else if(data.status === "200"){
  //     Alert.alert("Congratulations!",data.message)
  //   }
  //   else{
  //     Alert.alert("Oops!","Something went wrong please try againt later")
  //   }
  //   // Do something with the data
  // } catch (error) {
  //   console.error(error);
  // }
  // finally{
  //   setLoading(false)
  // }
}
else{
  setIsPressed(true)
}
}


  return (

    <View 
    style ={GlobalStyles.Container}
    >
         <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

<GoBack/>
{
  loading === true ?
<Text
style={Styles.SectionTitle}
>
 Loading
</Text>:
<Text
onPress={()=> ChangePasswordNow()}
style={Styles.SectionTitle}
>
 Save
</Text>
}
</View>
      <ScrollView
      contentContainerStyle={{alignItems:'center'}}
      
      >










<Text
style={[Styles.SectionTitle]}
>
  change Password
</Text>



<View
style={[Styles.CardWrapperALL,{paddingBottom:20}]}
>
<View style={[Styles.CardWrapperTextInput,{borderColor:user.password.length  <1 && isPressed === true ?Colors.danger:Colors.PrimaryColor,borderBottomWidth:1}]}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='lock'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>
<TextInput
value={user.password}
placeholderTextColor={Colors.FontColorII}
secureTextEntry={secureTextt}

style={[GlobalStyles.textStyle,{flex:1}]}
placeholder='Enter Old Password'
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    password: text
  })) }

/>
<Entypo
onPress={()=>setSecureTxt((p)=>!p)}

name={secureTextt === false ? "eye-with-line":"eye"} 
color={Colors.FontColorI}
size={17}
style={Styles.IconWrapper}

/>
</View>



<View style={[Styles.CardWrapperTextInput,{borderColor:user.confirmPassword.length <1  && isPressed === true ?Colors.danger:Colors.PrimaryColor,borderBottomWidth:1}]}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='lock'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>
<TextInput
value={user.confirmPassword}
placeholder='Enter New Password'
placeholderTextColor={Colors.FontColorII}
secureTextEntry={secureTextt}
style={[GlobalStyles.textStyle,{flex:1}]}
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    confirmPassword: text
  })) }

/>
<Entypo
onPress={()=>setSecureTxt((p)=>!p)}

name={secureTextt === false ? "eye-with-line":"eye"} 
color={Colors.FontColorI}
size={17}
style={Styles.IconWrapper}

/>
</View>







</View>











</ScrollView>

   </View>
  );
};

export default ChangePassword;
