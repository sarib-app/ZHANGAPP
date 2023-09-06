

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './GlobalStyles';
import IonIcon from 'react-native-vector-icons/Ionicons'
import Colors from './colors';


function GoBack (){
const navigation = useNavigation()
  return (
    <TouchableOpacity
onPress={()=>  navigation.goBack()}

>
  <IonIcon 
  name='arrow-back'
  color={Colors.PrimaryColor}
  size={28}
  />
{/* <Text
style={GlobalStyles.Goback}
>
Go Back</Text> */}
    </TouchableOpacity>
  );
};



export default GoBack;
