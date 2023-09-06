import React, { useState } from 'react';
import {

  Modal,
  Text,
  Pressable,
  Image
 
} from 'react-native';
import styles from './Styles';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import privacy_icon from '../../assets/images/privacy_icon.png'
import ContentHeader from './ContentHeader';
import ContentBottom from './ContentBottom';
import IonIcon from 'react-native-vector-icons/Ionicons'
import Colors from '../GlobalStyles/colors';
function PrivacyPolicy({
  isVisible,
onHide

}) {

const navigation = useNavigation()








  return (
    <Modal

    visible={isVisible}
     transparent={true}
     animationType="slide"
     
     
    >

    <SafeAreaView style={styles.Container}>
    <Pressable
    onPress={()=> onHide()}
    
    style={{flexDirection:"row",marginTop:10,alignSelf:'flex-start',left:15,alignItems:'center'}}>
       <IonIcon 
  name='arrow-back'
  color={Colors.PrimaryColor}
  size={28}
  />
    <Text style={{color:Colors.PrimaryColor}}> Go Back</Text>
    </Pressable>


<ContentHeader 
icon = {privacy_icon}
width = {47}
height = {52}
title = {"Privacy and Policy"}
// onHide ={ onHide}
/>

<ContentBottom
title="Privacy & Policy"
onHide={onHide}
/>


    </SafeAreaView>
    </Modal>

  )
}
export default PrivacyPolicy;

