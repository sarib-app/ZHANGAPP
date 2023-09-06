

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Colors from './colors';
import styles from '../Notification/Styles';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';

function ViewCart (){
const navigation = useNavigation()
const [openSearch,setOpenSearch]=useState(false)

function onHideSearch(){
  setOpenSearch(false)
}
  return (
    <TouchableOpacity 
onPress={()=> navigation.navigate("CartDetailScreen")}
style={GlobalStyles.ViewCartButton}>
    
      
   
<Text
style={[GlobalStyles.HeaderText,{color:Colors.Dark}]}
>
  View Cart Detail
</Text>
      



   
    </TouchableOpacity>
  );
};



export default ViewCart;
