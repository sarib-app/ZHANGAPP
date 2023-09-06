import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,Image,ScrollView, ImageBackground ,TextInput,Alert} from 'react-native';
import WebView from 'react-native-webview';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Styles from './Styles';
import profMale from '../../assets/images/male.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../GlobalStyles/colors';
import GoBack from '../GlobalStyles/GoBack';
import { useRoute } from '@react-navigation/native';
// import UpdateWithId from '../DBCalls/UpdateWithId';
const ProfileDetails = () => {

// const route = useRoute()
// const userr = route.params
const iconColor = Colors.FontColorI
const [loading,setLoading]=useState(false)
const [user,setUser]=useState(
    {
        id:1,
        email:"userr.email",
        firstname:"userr.firstname",
        Lastname:"userr.lastname",
        Phone:"userr.phone",
        username:"userr.username"
    }
)


function handleUpdate(){
if(user.email.length > 0 && user.firstname.length > 0 && user.Lastname.length > 0){
  // PostData()
  Alert.alert("Data Posyed Successfully!")

}
}
// const PostData = async () => {
//   setLoading(true)
//   try {
//     const data = await UpdateWithId(user);
//     // console.log("Videos:", data);
//     if(data.status === "401"){
//       Alert.alert("Status",data.Error)
//     }
//     else if(data.status === "200"){
//       Alert.alert("Congratulations!","Profile Updated Successfully!")
//     }
//     else{
//       Alert.alert("Oops!","Something went wrong please try againt later")
//     }
//     // Do something with the data
//   } catch (error) {
//     console.error(error);
//   }
//   finally{
//     setLoading(false)
//   }
// };



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
onPress={()=> handleUpdate()}
style={Styles.SectionTitle}
>
 Save
</Text>
}

</View>
      <ScrollView
      contentContainerStyle={{alignItems:'center'}}
      >


<View
style={{alignItems:"center"}}
>

<Image
source = {profMale}
style={{width:100,height:100,borderRadius:1000,margin:20,alignSelf:'center'}}

/>
<Text
style={{color:Colors.FontColorI,fontSize:18,fontWeight:"600"}}
>
  {user.username}
</Text>
</View>




<Text
style={Styles.SectionTitle}
>
  History
</Text>

<View

style={Styles.CardWrapperALL}
>
<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5 
name='lock'
size={18}
color={iconColor}
style={Styles.IconWrapper}
/>
<Text
style={GlobalStyles.textStyle}
>
  Total JGK
</Text>
</View>
<Text
style={GlobalStyles.textStyle}
>
  100
</Text>


</View>

{/* 
<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<Fontisto
name='favorite'
color={iconColor}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  Total Withdraws
</Text>
</View>

<Text
style={GlobalStyles.textStyle}
>
  20
</Text>

</View> */}



{/* <View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialCommunityIcons
name='bell-outline'
size={20}
color={Colors.FontColorI}
style={Styles.IconWrapper}
/>

<Text
style={GlobalStyles.textStyle}
>
  Total Deposit
</Text>
</View>

<Text
style={GlobalStyles.textStyle}
>
  30
</Text>

</View> */}


<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialCommunityIcons
name='bell-outline'
size={20}
color={Colors.FontColorI}
style={Styles.IconWrapper}
/>

<Text
style={GlobalStyles.textStyle}
>
  Refferal Earnings
</Text>
</View>

<Text
style={Styles.SectionTitle}
>
  3 TTC
</Text>

</View>



<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialCommunityIcons
name='bell-outline'
size={20}
color={Colors.FontColorI}
style={Styles.IconWrapper}
/>

<Text
style={GlobalStyles.textStyle}
>
  Invited Person
</Text>
</View>

<Text
style={Styles.SectionTitle}
>
  30
</Text>

</View>

</View>






<Text
style={Styles.SectionTitle}
>
  Update Profile
</Text>



<View
style={Styles.CardWrapperALL}
>
<View style={[Styles.CardWrapperTextInput,{borderColor:user.email.length <1 ?Colors.danger:Colors.PrimaryColor,borderBottomWidth:1}]}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='share'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>
<TextInput
value={user.email}
style={[GlobalStyles.textStyle,{flex:1}]}
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    email: text
  })) }

/>
<FontAwesome5
name='pencil-alt'
color={Colors.FontColorI}
size={14}
style={Styles.IconWrapper}

/>
</View>



<View style={[Styles.CardWrapperTextInput,{borderColor:user.firstname.length <1 ?Colors.danger:Colors.PrimaryColor,borderBottomWidth:1}]}>


<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='headset'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>

<TextInput
value={user.firstname}
style={[GlobalStyles.textStyle,{flex:1}]}
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    firstname: text
  })) }

/>
<FontAwesome5
name='pencil-alt'
color={Colors.FontColorI}
size={14}
style={Styles.IconWrapper}

/>

</View>



<View style={[Styles.CardWrapperTextInput,{borderColor:user.Lastname.length <1 ?Colors.danger:Colors.PrimaryColor,borderBottomWidth:1}]}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialIcons
name='privacy-tip'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>
<TextInput
value={user.Lastname}
style={[GlobalStyles.textStyle,{flex:1}]}
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    Lastname: text
  })) }

/>

<FontAwesome5
name='pencil-alt'
color={Colors.FontColorI}
size={14}
style={Styles.IconWrapper}

/>

</View>



<View style={[Styles.CardWrapperTextInput,{borderColor:user.Phone.length <1 ?Colors.danger:"transparent",borderBottomWidth:1}]}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >

<MaterialIcons
name='privacy-tip'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>

</View>
<TextInput
value={user.Phone}
style={[GlobalStyles.textStyle,{flex:1}]}
onChangeText={(text) =>  setUser((prevUser) => ({
    ...prevUser,
    Phone: text
  })) }
  editable={false}

/>
<Ionicons 
name='chevron-forward'
size={20}
color={'transparent'}
/>

</View>



</View>










<View style={{width:100,height:250}}>

</View>

</ScrollView>

   </View>
  );
};

export default ProfileDetails;
