import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,Image,ScrollView, ImageBackground,TouchableHighlight, Pressable, TouchableOpacity } from 'react-native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Styles from './Styles';
import profMale from '../../assets/images/male.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InviteEarn from '../Invite&earn/InviteEarn';
import { useIsFocused } from '@react-navigation/native';
import Tos from '../App\'sContent/Tos';
import PrivacyPolicy from '../App\'sContent/PrivacyPolicy';
const Profile = () => {
  const focused=useIsFocused()
const navigation =  useNavigation()
const [showPrivacy, setShowPrivacy] = useState(false);
const [showTos, setShowTos] = useState(false);
const [user,setUser]=useState(
  {
      id:"userr.id",
      email:"userr.email",
      firstname:"Shawn",
      Lastname:"Dr",
      Phone:"userr.phone",
      username:"userr.username"
  }
)
const iconColor = Colors.FontColorI
const [showIvitationModal,setShowInvitationModal]=useState(false)


function onHideInvitation(){
  setShowInvitationModal(false)
    
}
function navigationRester(title) {
  navigation.reset({
    index: 0,
    routes: [{ name: title }],
  });
}
function onHideTos(){
  setShowTos((p)=> !p)
  }
  function onHidePrivacy(){
    setShowPrivacy((p)=> !p)
  
  }
  return (

    <View 
    style ={GlobalStyles.Container}
    >
      <ScrollView
      contentContainerStyle={{alignItems:'center'}}
      
      >
   {
    user !=null &&
<View style={Styles.CardWrapperTop}>
 

  <View
  style={{flexDirection:'row',alignItems:'center'}}
  >

<Image
source = {profMale}
style={{width:40,height:40,borderRadius:1000}}

/>

<Text
style={GlobalStyles.TitleText}

>
  {user.firstname+" "+user.Lastname} 
</Text>
</View>
<TouchableHighlight
onPress={()=> navigation.navigate("ProfileDetails", user)}

>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

</TouchableHighlight>


</View>

}

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
  Change Password
</Text>
</View>
<TouchableHighlight
onPress={()=> navigation.navigate("ChangePassword")}

>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>
</TouchableHighlight>

</View>

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
  Total JGK
</Text>
</View>
<Text
style={GlobalStyles.textStyle}
>
  100
</Text>
</View>
<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='share'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  Invite & Earn
</Text>
</View>
<TouchableHighlight
onPress={()=>setShowInvitationModal(true)}

>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>
</TouchableHighlight>

</View>

{/* <View style={Styles.CardWrapperBottom}>

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
  Favourite
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

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
  Notifications
</Text>
</View>

<TouchableHighlight
onPress={()=> navigation.navigate("Notification")}
>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>
</TouchableHighlight>

</View> */}


</View>





<View
style={Styles.CardWrapperALL}
>



<Pressable 
onPress={()=> navigation.navigate("HelpCenter")}
style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<FontAwesome5
name='headset'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  Help Center
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

</Pressable>


<TouchableOpacity 
onPress={()=> navigation.navigate("AboutUs")}

style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialIcons
name='privacy-tip'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  About Us
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

</TouchableOpacity>

<TouchableOpacity 
onPress={()=> setShowPrivacy(true)}

style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialIcons
name='privacy-tip'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  Privacy Policy
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

</TouchableOpacity>



<TouchableOpacity 
onPress={()=> setShowTos(true)}
style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >

<MaterialIcons
name='privacy-tip'
color={Colors.FontColorI}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={GlobalStyles.textStyle}
>
  Terms & Conditions
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={Colors.FontColorI}
/>

</TouchableOpacity>



</View>







<View
style={Styles.CardWrapperALL}
>



<TouchableOpacity 
onPress={()=> {
  navigation.navigate("Login")
  navigationRester("Login")
  AsyncStorage.clear()
}}
style={Styles.CardWrapperBottom}>

<View


  style={{flexDirection:'row',alignItems:'center'}}
  >


<Ionicons
name='log-out-outline'
color={Colors.danger}
size={22}
style={Styles.IconWrapper}
/>
<Text
style={[GlobalStyles.textStyle,{color:Colors.danger}]}
>
  Log Out 
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={'transparent'}
/>

</TouchableOpacity>



</View>

<View
style={Styles.CardWrapperALL}
>



<View style={Styles.CardWrapperBottom}>

<View
  style={{flexDirection:'row',alignItems:'center'}}
  >


<MaterialCommunityIcons
name='delete-empty'
color={Colors.danger}
size={20}
style={Styles.IconWrapper}

/>
<Text
style={[GlobalStyles.textStyle,{color:Colors.danger}]}
>
  Delete Account
</Text>
</View>

<Ionicons 
name='chevron-forward'
size={20}
color={'transparent'}
/>

</View>



</View>

<Text
style={{color:Colors.FontColorII}}
>Version 1.0.0</Text>

<View style={{width:100,height:200}}>

</View>
{
  showIvitationModal === true &&
<InviteEarn 
show={showIvitationModal}
onHide={onHideInvitation}
/>
}

<PrivacyPolicy
isVisible={showPrivacy}
onHide={onHidePrivacy}
/>
<Tos 
isVisible={showTos}
onHide={onHideTos}
/>
</ScrollView>



   </View>
  );
};

export default Profile;
