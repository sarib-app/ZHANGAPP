import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList,Alert ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer
import Colors from '../../GlobalStyles/colors';
import IonIcon from 'react-native-vector-icons/Ionicons';


import { useIsFocused } from '@react-navigation/native';
import HeaderScreens from '../../GlobalStyles/HeaderScreens';
import { useNavigation } from '@react-navigation/native';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import GetProduct from '../../GlobalCalls/Vendor/GetProduct';
import EndPoints from '../../Auth/EndPoints';
const ProductList = ({ route }) => {
  const focused = useIsFocused()

const [storeData,setStoreData]=useState([])
const [loading,setLoading]=useState(true)
const [ErrorMessage,setErrorMessage]=useState("No data found")

const navigation = useNavigation()
    
const handleDeleteProduct = () => {
    Alert.alert(
      'Delete Product',
      'Are you sure you want to delete this product?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            // Perform the deletion logic here
            // ...
          },
        },
      ],
      { cancelable: false }
    );
  };
  
  // Sample store data (Replace this with the actual data from the selected store)
  // const storeData = {
  //   id: 1,
  //   name: 'Store 1',
  //   banner: 'https://oceanlodgeflorida.com/wp-content/uploads/2019/11/coffee-shop-1149155_1920.jpg',
  //   rating: 4.5,
  //   description: 'A trendy coffee spot with a wide variety of drinks.',
  //   isOpen: true,
  //   products: [
  //       { id: 1, name: 'Latte Dark', image: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280', description: 'Dark Latte: Pure Black beans with oil',Price:"6.5" },
  //       { id: 2, name: 'Smooth Cap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/1200px-Latte_and_dark_coffee.jpg', description: 'Light Shot: Makes your mood charm',Price:"8.9" },
  //       { id: 3, name: 'Isponiol Beans', image: 'https://post.healthline.com/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-800x728.jpg', description: 'Brown Isponiol, Gives you wingss',Price:"9.0" },
  //   ],
  // };



  useEffect(()=>{

const getData = async ()=>{

  const data = await GetProduct()
  setLoading(false)
  if(data.status = "200"){
    setStoreData(data.data)
    // console.log(data.data)
  } else{
    setErrorMessage(data.message)
  }

}
getData()

  },[])

  const RenderProductItem = ({ item }) => 
  {
return(
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: EndPoints.imageBaseUrl+item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>CAD ${item.price}</Text>
        <View style={{flexDirection:'row',marginTop:10}}>
        <TouchableOpacity
        onPress={()=> handleDeleteProduct()}
        style={styles.addToCartButton}>
          <Icon name="delete-sweep" size={24} color={Colors.danger} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> navigation.navigate("UpdateProduct",{item:item})}
        style={styles.addToCartButton}>
          <IonIcon name="create-outline" size={24} color={Colors.PrimaryColor} />
        </TouchableOpacity>
        </View>

      </View>
    </TouchableOpacity>
  );
}

  return (
    <View style={styles.container}>
    <ScrollView
    nestedScrollEnabled={true}
    >
    <HeaderScreens
    ScreenName={"Update or Delete Products"}
    />

    

        <Text style={styles.sectionTitle}>Your Products</Text>

        {
          loading === false ? 

      <View style={styles.productsContainer}>
        {
          storeData.length >= 1 ?
        <FlatList
          data={storeData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=>{
            return(
<RenderProductItem item={item}  />
            )
          }}
        />
:
<Text style={{alignSelf:'center',color:Colors.FontColorI}}>{ErrorMessage}</Text>

      }

      </View>
        :
        <Text style={{alignSelf:'center',color:Colors.FontColorI}}>Loading....</Text>
        }

    </ScrollView>
  

</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616', // Dark background color
  },
  storeBanner: {
    width: '100%',
    height: 200,
  },
  storeInfoContainer: {
    padding: 20,
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.FontColorI, // Primary color for store name
  },
  storeRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  storeRating: {
    marginLeft: 5,
    color: '#FFD700', // Gold color for rating stars
  },
  storeDescription: {
    marginTop: 10,
    color: Colors.lightTxt, // Primary color for store description
  },
  storeStatus: {
    marginTop: 10,
    color: '#B7DFA1', // Primary color for store status (Open/Closed)
  },
  productsContainer: {
    marginLeft: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:20,
    color: '#B7DFA1', // Primary color for section titles
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: 'black', // Black color for product cards
    borderRadius: 10,
    padding: 10,
    marginVertical: 8, // Adjust the vertical margin as per your preference
    marginHorizontal: 4, // Adjust the horizontal margin as per your preference
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.FontColorI, // Primary color for product name
  },
  productDescription: {
    color: Colors.lightTxt, // Primary color for product description
  },
  productPrice: {
    color: '#B7DFA1', // Primary color for product price
    marginTop: 5,
    fontWeight:'bold'
  },
  addToCartButton: {
    backgroundColor: Colors.BgColor, // Primary color for add to cart button
    paddingVertical: 8,
    width:"40%",
    marginLeft:10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductList;