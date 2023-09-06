import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';
import Colors from './colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('window').height; 
  const GlobalStyles = StyleSheet.create({ 
Container:{
    width:WindowWidth,
    height:WindowHeight,
    backgroundColor:Colors.BgColor,
    
    alignItems:'center'
},
Header:{
    width:WindowWidth,
    height:WindowHeight/18,
    backgroundColor:Colors.Dark,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
    // justifyContent:'center'
},
ViewCartButton:{
  width:WindowWidth/1.2,
  borderRadius:8,
  alignSelf:'center',
  // elevation:4,
  
  // shadowColor:Colors.Dark ,
  height:WindowHeight/18,
  backgroundColor:Colors.PrimaryColor,
  justifyContent:'center',
  alignItems:'center',
  // flexDirection:'row',
  // position:'absolute',
  position:'absolute',
  bottom:10
},
SmallBtn:{
 
  padding:20,
  backgroundColor:Colors.PrimaryColor,
  alignItems:'center',
  justifyContent:'center',
  paddingTop:10,
  paddingBottom:10,
  margin:10,
  borderRadius:10
},
Goback:{
fontSize:18,
color:Colors.PrimaryColor,
fontWeight:'bold',
textDecorationLine:'underline',
},
HeaderText:{
    color:Colors.FontColorI,
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10
},
BtnText:{
  color:Colors.FontColorI,
  fontSize:18,
  fontWeight:'bold'
},
TextInput:{
  width:WindowWidth/1.2,
  height:WindowHeight/15,
  borderRadius:10,
  borderColor:Colors.PrimaryColor,
  borderWidth:1,
  backgroundColor:Colors.bgIII
},
FeedVideoTitle:{
  color:Colors.FontColorI,
  fontWeight:'bold',
  marginLeft:5,
  marginTop:5
},
FeedCard:{
  width:WindowWidth,
  paddingBottom:20,
  // height:WindowHeight/2.8,
  backgroundColor:Colors.Dark,
  marginBottom:5
},
BottomFeedVidCard:{
  width:WindowWidth,
  alignSelf:"center",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
},
ShortsCard:{
  width:WindowWidth,
  height:WindowHeight/1.13,
  borderWidth:2,
  borderBottomColor:"white",
  flex:1,
  paddingBottom:20,
  // height:WindowHeight/2.8,
  backgroundColor:Colors.send,
  // alignContent:"center",
alignItems:"center"
  // justifyContent:'center'
  // marginBottom:7
},
TitleText:{
  color:Colors.FontColorI,
  fontWeight:'600',
  fontSize:18,
  marginLeft:15
 },

 textStyle:{
  color:Colors.FontColorI,
  fontWeight:'500',
  fontSize:14,
  // marginLeft:15
 },




  })
  export default GlobalStyles