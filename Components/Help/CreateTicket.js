import React, { useState } from 'react';
import {
  Text,
  Image,
  View,

Modal,
TextInput,
Dimensions,
Alert
} from 'react-native';
import styles from './Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import Colors from '../GlobalStyles/colors';

const WindowHeight = Dimensions.get('window').height;

function CreateTicket({IsVisible,onHideModal,onSubmitTicket}) {
    const [isKeyOpen,setIsKeyOpen] = useState(false)
const [title,setTitle] = useState("")
const [body,setBody] = useState("")
const [isPressed,setIsPressed] = useState(false)

const [loading,setLoading] = useState(false)

const navigation = useNavigation()

function onPressSubmit(){
    if(title !="" && body !=""){
        onSubmit()
    }
    else{
        setIsPressed(true)
    }
}


function onSubmit(){
    setLoading(true)
    var formdata = new FormData();
    formdata.append("therapist_id", "24");
    formdata.append("title", title);
    formdata.append("body", body);
    formdata.append("status", "pending");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`https://chillcassa.tradingtube.net/api/post_ticket`, requestOptions)
      .then(response => response.json())
      .then(result =>{
        if(result.status==="200"){
        Alert.alert("Thankyou","Your complain has been registered we will contact you soon.")  
        onSubmitTicket()  
        setLoading(false)
        setTitle("")
        setBody("")
        setIsPressed(false)
        }
        else{
            setLoading(false)
        }
        console.log(result)})
      .catch(error =>{
        setLoading(false)
        console.log('error', error)});


    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'X-RapidAPI-Key': 'b281e0484cmshec7026cff924c90p13f209jsn24440453a64c',
    //         'X-RapidAPI-Host': 'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code?phoneNumber=+923206226173&verifyCode=5544', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));







}

return (
    <Modal
    visible={IsVisible}
    transparent={true}
    animationType="slide"
    >
    <SafeAreaView style={[styles.Container,{justifyContent:"center",backgroundColor:'rgba(0,0,0,0.9)'}]}>





<View  style={styles.TicketBox}>



<Text 
style={[styles.ModalTitles,{margin:20}]}>Please tell us about your problem</Text>


<View style={[styles.InputBoxIv,{borderColor: isPressed === true && title === ""? Colors.danger:Colors.PrimaryColor }]}>
<TextInput
placeholder='Enter Problem Title here'
placeholderTextColor={Colors.placeHolder}
style={{flex:1,color:Colors.Dark}}
cursorColor={Colors.PrimaryColor}
value={title}
onChangeText={(e)=> setTitle(e)}
/>
  
</View>

<View style={[styles.InputBoxIv,{height:150,marginTop:10,borderColor: isPressed === true && body === ""? Colors.danger:Colors.PrimaryColor}]}>
<TextInput
placeholder='Describe your problem'
placeholderTextColor={Colors.placeHolder}
style={{flex:1,color:Colors.Dark}}
numberOfLines={4}
multiline={true}
cursorColor={Colors.PrimaryColor}
value={body}
onChangeText={(e)=> setBody(e)}

/>
  
</View>
<View>
    <View style={{alignItems:'center'}}>
{
    loading === false ?
    <Text 
    onPress={()=> onPressSubmit()}
    style={{color:Colors.send,fontSize:24,fontWeight:"bold"}}>Submit</Text>
:
<Text 
style={{color:Colors.send,fontSize:20,fontWeight:"bold"}}>Loading... Please wait.</Text>
}
    <Text
    onPress={()=> onHideModal()}
    style={{color:Colors.danger,fontSize:15,fontWeight:"bold"}}>Close</Text>

    </View>

</View>

</View>
    </SafeAreaView>
    </Modal>
  )

}
export default CreateTicket;

