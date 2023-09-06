import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import Styles from './Styles';
import onShare from './onShare';

const InviteEarn = ({show,onHide}) => {
const navigation =  useNavigation()
const iconColor = Colors.FontColorI



  return (

    <View 
    style={Styles.Container}
    >
       
<Modal
visible={show}
animationType='slide'
transparent={true}
>


    <View style={Styles.BottomContainer}>
<Text
style={Styles.InviteTitleTxt}
>
Invite & Earn 
</Text>

<View
style={Styles.inviteTopCopyBox}
>
<Text 
style={[Styles.BtnTxt,{marginLeft:10}]}
>
    ZXPH20
</Text>
<View
style={Styles.CopyButton}
>
<Text 
style={[Styles.BtnTxt,{marginLeft:10}]}
>
    Copy!
</Text>

</View>
</View>


<Text
style={Styles.SubTxt}
>
    Earn 1 TTC coin on inviting your friend to EarnFlix! You will get your reward if your friend succesfully register with your reffered code and earn atleast 2 TTC! Hurry up and enjoy free earning!.
   

</Text>


<Pressable
onPress={()=>{
    console.log(" i am working")
    onShare()}}
style={Styles.InvitationButton}
>
<Text 
style={[Styles.BtnTxt,{fontSize:17}]}
>
    Click To Share
</Text>

</Pressable>

<Text 
  onPress={()=> {
    onHide()}}
style={[Styles.BtnTxt,{fontSize:13,margin:10,color:Colors.FontColorI}]}
>
    Not Now
</Text>
    </View>



</Modal>

   </View>
  );
};

export default InviteEarn;
