import {
    StyleSheet,
    Dimensions
} from 'react-native'
import { Button } from 'react-native-paper';
import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    Container: {
        width: WindowWidth,
        height: WindowHeight,
        backgroundColor: Colors.BgColor,
        // alignItems: "center",

    },
    HeaderText:{
        color:Colors.FontColorI,
        fontWeight:'bold',
        fontSize:30,
        marginLeft:15,
        // marginTop:10,
    },
    TrickContainer:{
        width:WindowWidth/1.1,
        // height:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:Colors.placeHolder,
        alignSelf:"center",
        paddingTop:15,
        paddingBottom:15,

        // marginBottom:15,
        alignItems:'center'
    },
    IconWrapper:{

        backgroundColor:Colors.Light,
        width:50,
        height:50,
        borderRadius:1000,
borderWidth:0.5,
// borderColor:Colors.PrimaryColor,
        justifyContent:'center',
        alignItems:'center'
      
      },

      InnerTricks:{
        width:WindowWidth/1.7,
        marginLeft:15,
        // height:20,
        
    },
    TransactionText:{
        
        fontWeight:"bold",
        fontSize:16 
        },
       ModalDetail:{
        width:WindowWidth,
        height:WindowHeight/2.5,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:Colors.BgColorII,
        alignSelf:'flex-end'
       },
       ModalHeader:{
        alignSelf:"center",
        margin:10,
        // justifyContent:'space-evenly',
        width:WindowWidth/1.1,
        // backgroundColor:'red',
        // padding:10,
        borderBottomWidth:1,

        borderColor:Colors.PrimaryColor
       },
       ModalTitles:{
        color:Colors.FontColorI,
        fontWeight:'bold',
        fontSize:16,
        marginLeft:15

       },
       ModalBelowTitles:{
        color:Colors.FontColorI,
        fontWeight:'400',
        fontSize:16,
        marginLeft:15

       },
       ChatBox:{
        maxWidth:WindowWidth/1.6,
        padding:10,
        backgroundColor:Colors.BgColorII,
        borderRadius:10,
        margin:10
       },
       chatTxt:{
        color:Colors.FontColorI
       },
       InputBox:{
        width:WindowWidth/1.2,
        height:WindowHeight/14,
        alignItems:'center',
        padding:10,
        backgroundColor:Colors.Dark,
        borderRadius:10,
        position:'absolute',
        bottom:50,
        alignSelf:'center'
       },
       InputBoxIv:{
        width:WindowWidth/1.2,
        height:WindowHeight/14,
        // padding:10,
        borderWidth:1,
        backgroundColor:Colors.BgColor,
        borderRadius:10,
        alignSelf:'center'
       },
       

TicketBox:{
    justifyContent:"center",
    alignItems:"center",
    width:WindowWidth/1.1,
    // height:WindowHeight/3.5,
    backgroundColor:Colors.BgColor,
    padding:20,
    alignSelf:"center",
    marginTop:40,
    borderRadius:20,
    elevation:10,
    shadowColor:Colors.bgIv       
},


       OptionBox:{
        justifyContent:"center",
        alignItems:"center",
        width:WindowWidth/1.2,
        height:WindowHeight/3.5,
        backgroundColor:Colors.bgIv,
        alignSelf:"center",
        marginTop:40,
        borderRadius:20,
        elevation:10,
        shadowColor:Colors.PrimaryColor       
    },


});

export default styles