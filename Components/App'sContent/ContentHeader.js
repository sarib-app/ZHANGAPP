import React, { useState } from 'react';
import {

  Text,
  Image,
  View,

 
} from 'react-native';
import styles from './Styles';

import Colors from '../GlobalStyles/colors';
function ContentHeader({icon,width,height,title}) {




  return (


<>


{/* <BackBtn/> */}
<View style={{margin:15, flexDirection:'row',alignItems:'center'}}>
<Image source={icon}
style={{width:width,height:height,tintColor:Colors.FontColorI,marginRight:10}} />
<View style={{alignItems:"flex-start"}}>
<Text style={styles.HeaderTitle}>{title}</Text>
<Text style={{color:Colors.placeHolder}}>Added at 20-12-2022</Text>
</View>
</View>

</>

  )
}
export default ContentHeader;

