import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
  Alert,
  PermissionsAndroid,
  Image
} from 'react-native';
import Colors from '../../GlobalStyles/colors';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PermissionGallery from '../../GlobalCalls/PermissionGalllery';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
const Add_Document = () => {
  const [Nic, setNic] = useState('');

  const [submit, setSubmit] = useState(false);

  const [ProofImage,setProofImage]=useState()
  const [ProofImageTemp,setProofImageTemp]=useState()




  const permissionForGallery=async ()=>{
  const isPermission = await PermissionGallery()
if(isPermission === true){
    SelectFromGallery()
}else if(isPermission === false){
    // Alert.alert("Something went ")

}else{
    Alert.alert("Something went wrong")
}
   }


   async function SelectFromGallery(){
    ImagePicker.launchImageLibrary({ mediaType: 'image', includeBase64: false, }, (response) => {
        if(response.didCancel !=true){
          setProofImage(response.assets[0])
          setProofImageTemp(response.assets[0].uri)
            
        }
        else{
            console.log("jedhfk")
        }
  
    })
   }



  const categories = [
    'Coffee',
    'Tea',
    // Add more categories here
  ];

 
  const handleAddProduct = () => {
    if( Nic  && ProofImage  
     
      ){
        Alert.alert("Processing")
      }
      else{
        setSubmit(true)
      }
    // ... Logic to add the product ...
  };



  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Send Document For Approval</Text>

     

<TextInput
      
        style={[styles.input, submit === true && !Nic && styles.dangerExpression ]}
        
        placeholder="NIC/PASSPORT"
        
        value={Nic}

        placeholderTextColor={Colors.FontColorII}
        
        onChangeText={setNic}
      
      />
      {/* Add Product Image Input */}
      
      {/* Add Product Price Input */}
      

<Text style={{color:Colors.FontColorI,fontSize:16,fontWeight:'bold',marginBottom:10}}>Upload NIC/PASSPORT Image</Text>
<TouchableOpacity 
onPress={()=>permissionForGallery()}
style={styles.imageContainer}
>
{
  ProofImageTemp ? <Image
  source={{uri:ProofImageTemp}}
  style={{width:300,height:150,marginLeft:10  }}
  />:
  <Icon 
  size={80}
  name='image'
  color={Colors.PrimaryColor}
  />
}

 

</TouchableOpacity>

   
    
    

 
      <TouchableOpacity style={styles.submitButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Send Request</Text>
      </TouchableOpacity>
      <Text style={[styles.addButtonText,{color:Colors.danger}]}>Your sent document will be verified and then your store will be live.</Text>

      <View style={{width:100,height:100}}>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: Colors.BgColor,
    height:WindowHeight,
    width:WindowWidth

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#B7DFA1',
    marginBottom: 20,
  },
  input: {
    backgroundColor: Colors.Dark,
    color: Colors.FontColorI,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
   
    marginBottom: 20,
  },
  imageContainer:{alignSelf:'center',backgroundColor:Colors.Dark,width:WindowWidth/1.15,height:WindowHeight/5,marginBottom:10,borderRadius:16,justifyContent:'center',alignItems:'center'},
  dangerExpression:{
    borderColor:Colors.danger,
    borderWidth:0.5,
  },
  categoryInput: {
    backgroundColor: '#333',
    color: Colors.FontColorI,
    borderRadius: 5,
    paddingVertical: 12,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  categoryText: {
    color: Colors.FontColorI,
  },
  addOnWrapper:{flexDirection:'row',alignItems:"center",width:WindowWidth/1.15,justifyContent:'space-between'},
  addButton: {
    backgroundColor: '#B7DFA1',
    borderRadius: 5,
    width:40,height:40,
    // paddingVertical: 10,
    // padding:10,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#161616',
    fontWeight: 'bold',
  },
  addOnsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  addOnItem: {
    backgroundColor: '#B7DFA1',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    color: '#161616',
  },
  variationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  variationItem: {
    backgroundColor: '#B7DFA1',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    color: '#161616',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.FontColorI,
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 10,
    borderBottomColor: Colors.FontColorI,
    borderBottomWidth: 1,
  },
  submitButton: {
    backgroundColor: Colors.PrimaryColor,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: Colors.Dark,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Add_Document;
