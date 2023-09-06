import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';

import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const Styles = StyleSheet.create({ 
BottomBar:{
//    backgroundColor:Colors.Dark,
   width:WindowWidth,
//    height:WindowHeight/15,
  //  borderRadius:30,
   position:'absolute',
   bottom:30.5,
//    flexDirection:'row',
  //  alignSelf:'center',
//    alignItems:'center',
//    justifyContent:'space-evenly'
},



  })
  export default Styles