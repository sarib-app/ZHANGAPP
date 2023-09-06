

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer


import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from './colors';
// import YtSearchSuggestions from '../Search/YtSearchSuggestions';

function HeaderScreens ({ScreenName}){
const navigation = useNavigation()
const [openSearch,setOpenSearch]=useState(false)

function onHideSearch(){
  setOpenSearch(false)
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
      <Ionicons 
      onPress={()=> navigation.goBack()}
        name='arrow-back'
                    size={21}
        color={ Colors.FontColorI}

        /> 
<Text
style={GlobalStyles.HeaderText}
>
  {ScreenName}
</Text>
      </View>



   
    </SafeAreaView>
  );
};



export default HeaderScreens;
