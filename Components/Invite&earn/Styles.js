import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';

import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const Styles = StyleSheet.create({ 

Container:{
width:WindowWidth,
height:WindowHeight,
backgroundColor:"transparent",

},
BottomContainer:{
  width:WindowWidth,
  height:WindowHeight/2.3,
  backgroundColor:Colors.Dark,
  borderRadius:12,
  position:'absolute',
  bottom:50,
  alignItems:'center'

},
InviteTitleTxt:{
  color:Colors.FontColorI,
  fontSize:18,
  fontWeight:'bold',
  margin:20
},
inviteTopCopyBox:{
  width:WindowWidth/1.2,
  // paddingTop:20,
  // paddingBottom:20,
  backgroundColor:Colors.FontColorI,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:'space-between',
  borderRadius:10,
},
CopyButton:{
  height:50,
  width:65,
  backgroundColor:Colors.PrimaryColor,
  borderRadius:8,
  justifyContent:"center",
  shadowColor:Colors.Dark,
  elevation:6

},
SubTxt:{
  color:Colors.FontColorI,
  textAlign:"center",
  margin:20
},
InvitationButton:{
  width:WindowWidth/1.7,
  paddingTop:20,
  paddingBottom:20,
  backgroundColor:Colors.PrimaryColor,
  alignItems:'center',
  justifyContent:"center",
  borderRadius:10,
},
BtnTxt:{
  color:Colors.Dark,
  fontWeight:'bold',
}


  })
  export default Styles