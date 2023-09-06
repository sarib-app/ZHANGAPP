import React, { useState,useEffect,useRef } from 'react';
import {
  Text,
  View,
Pressable,
Modal,
TextInput,
Dimensions,
FlatList
} from 'react-native';
import styles from './Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';


import Colors from '../GlobalStyles/colors';

const WindowHeight = Dimensions.get('window').height;

function ChatDetail({IsVisible,onHideModal,item}) {

const flatlistRef = useRef();
const [isKeyOpen,setIsKeyOpen] = useState(false)
const [chat,setChat]=useState([])
const [ChatInput,setChatInput]=useState([])





useEffect(()=>{
getChat()
},[])




const onScrollDown=()=>{
    flatlistRef.current.scrollToEnd({animating: true});
  
  }

    function getChat(){
        var formdata = new FormData();
        formdata.append("ticket_id", item.id);
        
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`https://chillcassa.tradingtube.net/api/fetch_reply_by_ticketid`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status === "200"){
                setChat(result.Reply)
                if(result.Reply.length > 5){
                  const timer = setTimeout(() => {
                    onScrollDown()
                }, 1000);
                //   setStartCounter(true)
                  return () => clearTimeout(timer);
                }
            
            }
            console.log(result)})
          .catch(error => console.log('error', error));
    }

function sendChat(){

const Obj ={
    "ticket_id": item.id,
  "sender_id": item.user_id,
    "sender_type": "User",
    "body": ChatInput
}
setChat(p=>[...p,Obj])
{chat.length > 5 && 
onScrollDown()}

    setChatInput("")
    var formdata = new FormData();
    formdata.append("ticket_id", item.id);
    formdata.append("sender_id", item.user_id);
    formdata.append("sender_type", "User");
    formdata.append("body", ChatInput);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`https://chillcassa.tradingtube.net/api/post_reply`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status === "200"){
            getChat()
        }
        console.log(result)})
      .catch(error => console.log('error', error));
}


const navigation = useNavigation()


function ChatList({item}){
    return(

<View style={[styles.ChatBox,
{
    alignSelf:item.sender_type === "Admin" ? 'flex-end':'flex-start',
    backgroundColor: item.sender_type === "Admin" ?Colors.inActive: Colors.PrimaryColor
}
    ]}>
    <Text style={[styles.chatTxt,{color:item.sender_type === "Admin" ?Colors.FontColorI: Colors.Dark}]}>
        {item.body}
    </Text>
</View>


    )
}


return (
    <Modal
    visible={IsVisible}
    transparent={true}
    animationType="slide"
    >
    <SafeAreaView style={styles.Container}>
    <Pressable
    onPress={()=> onHideModal()}
    
    style={{flexDirection:"row",marginTop:10,alignSelf:'flex-start',left:15,alignItems:'center'}}>
      {/* <Image  source={gobackIcon}
      style={{width:12,height:15}}
      /> */}
    <Text style={{color:Colors.PrimaryColor}}> Go Back</Text>
    </Pressable>
<Text 
onPress={()=> onHideModal()}
style={styles.HeaderText}>Inbox</Text>
<Text style={styles.ModalBelowTitles}>Ticket #{item.id}</Text>
<Text style={[styles.ModalBelowTitles,{color:Colors.deposit}]}>status: {item.status}</Text>

<Text style={[styles.ModalTitles,{color:Colors.PrimaryColor}]}>Title:</Text>
<Text style={styles.ModalTitles}>{item.title}.</Text>

<View 
style={styles.ModalHeader}
/>




{/* 
<View style={styles.ChatBox}>
    <Text style={styles.chatTxt}>
        I have been trying since mporning and i have requested 20000 since thursday its still not in my account where is my money.
    </Text>
</View>


<View style={[styles.ChatBox,{alignSelf:'flex-end',backgroundColor:Colors.bgIII}]}>
    <Text style={styles.chatTxt}>
        Sir Please be patient we are trying our best to deliver your requested amount to you soon we have been involved in some trouble please be patient.
    </Text>
</View> */}


 {
    chat.length > 0 ?
<FlatList 
ref={flatlistRef}

data={chat}
renderItem={({item})=>
<ChatList  item={item} 
/>


}

/>:
<Text

style={{color:Colors.FontColorI,fontWeight:'400',fontSize:17,alignSelf:"center",marginTop:200}}
>You have no chats yet</Text>
}



<View 
style={{width:100,height:item.status==="closed"?0:90}}
/>
{
    item.status != "closed" &&
<View style={[styles.InputBox,{bottom:isKeyOpen===true ? WindowHeight/2.5:50,flexDirection:"row"}]}>
<TextInput
placeholder='Enter Your Reply here'
placeholderTextColor={Colors.placeHolder}
style={{flex:1,color:Colors.FontColorI}}
cursorColor={Colors.PrimaryColor}
onPressIn={()=> setIsKeyOpen(true)}
onEndEditing={()=> setIsKeyOpen(false)}
value={ChatInput}
onChangeText={(e)=>setChatInput(e)}
/>
  <Text
  onPress={()=> sendChat()}
  style={{color:Colors.FontColorI,fontWeight:'bold',fontSize:17}}>Send</Text>
</View>
}


    </SafeAreaView>
    </Modal>
  )
}
export default ChatDetail;

