

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer

import GetCartCount from '../ProductCart/GetCartCount';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useIsFocused } from '@react-navigation/native';
import Colors from './colors';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';
function Header ({isVendor}){
const navigation = useNavigation()
const focused = useIsFocused()
const [openSearch,setOpenSearch]=useState(false)
const [cartCount,setCartCount]=useState(0)
function onHideSearch(){
  setOpenSearch(false)
}
useEffect(()=>{
  get_CartCount()
},[focused])
async function get_CartCount(){
  const CartCount = await GetCartCount()
  setCartCount(CartCount)
 }
  return (
    <SafeAreaView style={GlobalStyles.Header}>
      <View
      style={{
      alignItems:'center',
      flexDirection:'row',
      marginLeft:10

    
  }}
      >
      <Fontisto 
        name='coffeescript'
                    size={21}
        color={ Colors.FontColorI}

        /> 
<Text
style={GlobalStyles.HeaderText}
>
  CoffeeOn.
</Text>
      </View>



      <View
      style={{
      alignItems:'center',
      flexDirection:'row',
      marginRight:10
    
  }}
      >
{
  isVendor=== false &&
        <>
    <View >

<MaterialIcons
onPress={()=> navigation.navigate("CartDetailScreen")}
name="add-shopping-cart" size={25} color={Colors.FontColorI} style={{marginRight:5}}
/>
<Text style={{color:Colors.PrimaryColor,marginTop:-5,position:'absolute',fontWeight:'bold',fontSize:15,bottom:-7,left:-10 ,backgroundColor:Colors.danger,borderRadius:1000,width:20,height:20,textAlign:'center'}}>{cartCount}</Text>
</View>
    <MaterialIcons
onPress={()=> navigation.navigate("SearchScreen")}
name="search" size={25} color={Colors.FontColorI} style={{marginRight:5}}
/>
</>
}
<Fontisto
onPress={()=>setOpenSearch(true)}
name='world'
size={25}
color={Colors.FontColorI}
style={{marginRight:5}}

/>



      </View>
{/* <YtSearchSuggestions 
shouldShow = {openSearch}
onHide={onHideSearch}

/> */}
    </SafeAreaView>
  );
};



export default Header;
