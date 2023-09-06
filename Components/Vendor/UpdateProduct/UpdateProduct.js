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
import PermissionGallery from '../../GlobalCalls/PermissionGalllery';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UpdateProductCall from '../../GlobalCalls/Vendor/UpdateProductCall';
import RenderCategoryModal from '../CategoryModal/CategoryModal';
import { useNavigation } from '@react-navigation/native';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
const UpdateProduct = ({route}) => {
  const navigation = useNavigation()
  const item = route.params
  // console.log(item)
  const [productName, setProductName] = useState(item.item.title);
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState(item.item.price);
  const [selectedCategory, setSelectedCategory] = useState(item.item.category_title);
  const [selectedCategoryID, setSelectedCategoryID] = useState(item.item.category_id);

  const [productInfo, setProductInfo] = useState('');
  const [productDescription, setProductDescription] = useState(item.item.description);
  const [addOnInput, setAddOnInput] = useState('');
  const [addOns, setAddOns] = useState(item.item.add_on);
  const [variationInput, setVariationInput] = useState('');
  const [variations, setVariations] = useState(item.item.variation);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [ProofImage,setProofImage]=useState()
  const [ProofImageTemp,setProofImageTemp]=useState()

  const [loading,setLoading]=useState(false)




  const permissionForGallery=async ()=>{
    const isPermission = await PermissionGallery()
  if
  (isPermission === true){
      SelectFromGallery()
  }
  else if(isPermission === false){
      // Alert.alert("Something went ")
  
  }
  else{
      Alert.alert("Something went wrong")
  }
     }
   async function SelectFromGallery(){
    ImagePicker.launchImageLibrary({ mediaType: 'image', includeBase64: false, }, (response) => {
        if(response.didCancel !=true){

      
          const uri = 
          Platform.OS === "android"
            ? response.assets[0].uri
            :response.assets[0].uri.replace("file://", "");
        const filename = response.assets[0].uri.split("/").pop();
        const match = /\.(\w+)$/.exec( String(filename));
        const ext = match?.[1];
        const type = match ? `image/${match[1]}` : `image`;

          setProofImage({
            uri:uri,
           ext:ext,
           type:type
          })
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

  const handleAddAddOn = () => {
    if (addOnInput.trim() !== '') {
      setAddOns([...addOns, addOnInput]);
      setAddOnInput('');
    }
  };

  const handleAddVariation = () => {
    if (variationInput.trim() !== '') {
      setVariations([...variations, variationInput]);
      setVariationInput('');
    }
  };
  const handleAddProduct = async () => {
    // ProofImage.uri
    if(productName  && productPrice && selectedCategory  && productDescription 
      && addOns.length>0 && variations.length>0 
      ){
        
        const data= {
          pid:item.item.id,
          cid:selectedCategoryID,
          productName:productName,
          productPrice:productPrice,
          selectedCategory:selectedCategory,
          productInfo:productInfo,
          productDescription:productDescription,
          addOns:addOns,
          variations:variations,
          uri:ProofImage?.uri,
          ext:ProofImage?.ext,
          type:ProofImage?.type,
          ProofImage:ProofImage
        }
        setLoading(true)
        const response = await UpdateProductCall(data)
        setLoading(false)
        if (response.status === "200") {
          navigation.navigate("BottomNavigation")

          Alert.alert("Success",response.message);

        } else {
          Alert.alert("Alert",response.message);
        }
      }
      else{
        setSubmit(true)
      }
    // ... Logic to add the product ...
  };



function CallBackCategory(val){
  setSelectedCategory(val.title)
  setSelectedCategoryID(val.id)
  setCategoryModalVisible(false)
}

  return (
    <ScrollView style={styles.container}>
      {/* {renderCategoryModal()} */}

      <Text style={styles.title}>Update Product</Text>

      <TextInput
        style={[styles.input, submit === true && !productName && styles.dangerExpression ]}
        placeholderTextColor={Colors.FontColorII}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
      />


<TextInput
      
        style={[styles.input, submit === true && !productPrice && styles.dangerExpression ]}
        
        placeholder="Product Price"
        
        value={productPrice}

        placeholderTextColor={Colors.FontColorII}
        
        onChangeText={setProductPrice}
      
      />
      {/* Update Product Image Input */}
      
      {/* Update Product Price Input */}
      

<Text style={{color:Colors.FontColorI,fontSize:18,fontWeight:'bold'}}>Add Image</Text>
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

      <TouchableOpacity
        style={styles.categoryInput}
        onPress={() => setCategoryModalVisible(true)}
      >
        <Text style={styles.categoryText}>
          {selectedCategory ? selectedCategory : 'Select Category'}
        </Text>
      </TouchableOpacity>

      {/* <TextInput
        placeholderTextColor={Colors.FontColorII}

        style={[styles.input, submit === true && !productInfo && styles.dangerExpression ]}
        placeholder="Product Information"
        value={productInfo}
        onChangeText={setProductInfo}
        multiline
      /> */}

      <TextInput
        style={[styles.input, submit === true && !productDescription && styles.dangerExpression ]}
        placeholderTextColor={Colors.FontColorII}

        placeholder="Product Description"
        value={productDescription}
        onChangeText={setProductDescription}
        multiline
      />

      {/* Add Add-Ons */}
      <View style={styles.addOnWrapper}>
      <TextInput
        style={[styles.input,{flex:1,marginBottom:0} ,submit === true && addOns.length<1 && styles.dangerExpression]}
        placeholder="Add-Ons"
        placeholderTextColor={Colors.FontColorII}

        value={addOnInput}
        onChangeText={setAddOnInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddAddOn}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      </View>
    
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddAddOn}>
        <Text style={styles.buttonText}>Add Add-On</Text>
      </TouchableOpacity> */}
      <View style={styles.addOnsContainer}>
        {addOns.map((addOn) => (
          <Text key={addOn} style={styles.addOnItem}>
            {addOn}
          </Text>
        ))}
      </View>
      <View style={styles.addOnWrapper}>
      {/* Add Variations */}
      <TextInput
        style={[styles.input,{flex:1,marginBottom:0},submit === true && variations.length<1 && styles.dangerExpression]}
        placeholder="Variations"
        placeholderTextColor={Colors.FontColorII}

        value={variationInput}
        onChangeText={setVariationInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddVariation}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
</View>

      <View style={styles.variationsContainer}>
        {variations.map((variation) => (
          <Text key={variation} style={styles.variationItem}>
            {variation}
          </Text>
        ))}
      </View>

      {/* Add Submit Button */}
      {
        loading === true ?
      <TouchableOpacity style={styles.submitButton} >
        <Text style={styles.addButtonText}>Loading....</Text>
      </TouchableOpacity>
:
<TouchableOpacity style={styles.submitButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Update Product</Text>
      </TouchableOpacity>
      }
      <View style={{width:100,height:100}}>

      </View>
      <RenderCategoryModal
      categoryModalVisible={categoryModalVisible}
      callback={CallBackCategory}
      />
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

export default UpdateProduct;
