import React, { useState } from 'react';
import {

  Text,
View,
SafeAreaView,
Image,
ImageBackground,
Pressable,
ScrollView
} from 'react-native';
import styles from './Styles';


import { useNavigation } from '@react-navigation/native';
import Abouts_Us from '../../assets/images/Abouts_Us.png'
import ContentHeader from './ContentHeader';
import Colors from '../GlobalStyles/colors';
import SettingsTit from '../../assets/images/SettingsTit.png'



function AboutUs() {
const navigation = useNavigation()
function LowerCart(){


const textStyle={color:Colors.FontColorI,margin:10,textAlign:'center',fontSize:15}

    return(
      <View style={styles.LowerCart}>
        <View style={{flexDirection:'row',margin:15,alignItems:'center'}}>
    
        <Image 
        source={SettingsTit}
        style={{width:20,height:20,marginRight:10}}
        />
      <Text style={styles.L_Cart_Title}>About Us</Text>
      </View>
    {/* <View style={styles.InnerLowerCart}> */}
        <ScrollView>

        <Text style={textStyle}>
        PL-Share Wealth Partners offer financial plans for all clients through our professional planning platform. We are dedicated to creating you a brighter financial future, and a financial plan is a great first step. Having a comprehensive financial plan can help you better understand the probability of retiring successfully on your terms, what you are invested in, your financial goals, and your current investment allocation, using historical market data as well as current information. All of these give a better understanding of where your financial future is headed.

What Is a Financial Plan?
A financial plan is a document comprising of current money situation and long-term monetary goals, as well as strategies to achieve those goals. A financial plan begins with an in-depth evaluation of the current financial state of the market and future expectations. This plan takes into account past historical market data while running thousands of financial setups to help identify how and when you can reach your financial goals.
          </Text>
    
    </ScrollView>
    
    <View style={{height:100,width:20}}>

</View>
    {/* </View> */}
    </View>
    
    )
    }



  return (
    <SafeAreaView style={styles.Container}>


<ContentHeader 
icon ={Abouts_Us}
width={51}
height={49}
title={"Abouts Us"}
/>


<LowerCart/>


    </SafeAreaView>
  )
}
export default AboutUs;

