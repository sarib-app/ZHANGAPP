import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
ScrollView,
Pressable,
ImageBackground,
Alert
} from 'react-native';
import styles from './Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import Colors from '../GlobalStyles/colors';
import notificationIcon from '../../assets/images/notification.png'
import { FlatList } from 'react-native-gesture-handler';

// import BackBtn from '../GlobalStyles/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Notification() {



const navigation = useNavigation()

  const [notification,setNotification]=useState([])
 
  
  const data = notification 



  
//   async function getAsyncData () {
//     const user = await AsyncStorage.getItem('user')
//     const token = await AsyncStorage.getItem('token')
//     let userParsed=JSON.parse(user) 
//     if(token){
  
// getNotification(userParsed.id)
  
  
//     }
//   }




const notifsData=[
  {
    id:1,
    title:"Recieved JGK",
    body:'You have recieved 2.2 JGK',
    Idate:"23-02-2023"
  },
  {
    id:2,
    title:"Order Accepted",
    body:'Your order has been accepted, and in progress!',
    Idate:"23-02-2023"
  },
  {
    id:3,
    title:"Congratulations!",
    body:'You won daily login reward ! please collect now!You won daily login reward ! please collect now!',
    Idate:"23-02-2023"
  },
  {
    id:4,
    title:"Recieved JGK",
    body:'You have recieved 2.2 JGK, Loreum is pumn Ipsoaniol soilkil aksm smkmnajso  mmsnd smnaklsndasndlas, asdasd ',
    Idate:"23-02-2023"
  },
  {
    id:5,
    title:"Order Accepted",
    body:'Your order has been accepted, and in progress!You have recieved 2.2 JGK, Loreum is pumn Ipsoaniol soilkil aksm smkmnajso  mmsnd smnaklsndasndlas, asdasd',
    Idate:"23-02-2023"
  },
  {
    id:6,
    title:"Congratulations!",
    body:'You won daily login reward ! please collect now! You won daily login reward ! please collect now!',
    Idate:"23-02-2023"
  },
  {
    id:7,
    title:"Recieved JGK",
    body:'You have recieved 2.2 JGK, You won daily login reward ! please collect now!',
    Idate:"23-02-2023"
  },
  {
    id:8,
    title:"Order Accepted",
    body:'Your order has been accepted, and in progress!,.You won daily login reward ! please collect now!',
    Idate:"23-02-2023"
  },
  {
    id:9,
    title:"Congratulations!",
    body:'You won daily login reward ! please collect now!,You won daily login reward ! please collect now!',
    Idate:"23-02-4"
  }
  
]












function Notificationlist({item,index}){
  const [showDetail,setShowDetail]=useState(false)


return(
    <View style={[styles.TrickContainer,{}]}>
  
  
    <View style={{flexDirection:'row',alignItems:"center"}}>
    <View style={styles.IconWrapper}>
    
    <Image source={notificationIcon} style={{width:30,height:30,tintColor:Colors.PrimaryColor,margin:5}}/>

    
    </View>
    
    
    
    <View style={styles.InnerTricks}>
    <Text style={[styles.TextStyle,{color:Colors.PrimaryColor,fontWeight:'bold'}]}>{item.title}</Text>
    <Text style={styles.TextStyle}>{item.body}</Text>
    <Text style={styles.TextStyle}>{item.Idate}</Text>

    </View>
    
    
    </View>
    

   
   

    
    </View>
)
}




return (
    <ScrollView style={styles.Container}>
{/* <BackBtn/> */}

{/* <View style={styles.TrickContainer}>
<Text 
onPress={()=> setIsSelected(1)}
style={[styles.TextStyle,{color:selected===1 ? Colors.FontColorI:Colors.bgIII}]}>1st Refer</Text>
<Text
onPress={()=> setIsSelected(2)}


style={[styles.TextStyle,{color:selected===2 ? Colors.FontColorI:Colors.bgIII}]}>2nd Refer</Text>

</View> */}

<FlatList 
data={notifsData}
renderItem={({item,index})=>
<Notificationlist  item={item} index={index} 
/>

}
/>
{/* <View
style={{height:200,width:50}}
></View> */}


    </ScrollView>
  )
}
export default Notification;

