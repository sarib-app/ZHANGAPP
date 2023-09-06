import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../GlobalStyles/colors';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const OrderDetailScreen = ({route}) => {
  const navigation =useNavigation()
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const { orderItem } = route.params;


  useEffect(() => {
    // Fetch cart items from AsyncStorage here
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const cartData = await AsyncStorage.getItem('cartData');
      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        setCartItems(parsedCartData);
        setTotalBill(calculateSubtotal(parsedCartData));
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateGST = () => {
    const GSTPercentage = 0.1; // 10% GST
    return totalBill * GSTPercentage;
  };



  const renderCartItem = ({ item, index }) => (
    <View style={styles.cartItemContainer}>
      <Image source={{ uri: item.product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.productDescription}>{item.product.description}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.productPrice}>Price: {item.product.Price}</Text>
        <Text style={styles.quantityText}>  Quantity: {item.quantity}</Text>
        </View>

        <View style={styles.addOnsContainer}>
     
              <Text style={styles.addOnsText}>Add-ons:</Text>
          <View style={styles.addOnsOptions}>
            {item.addOns.sugar && <Text style={styles.addOnOptionText}>Sugar</Text>}
            {item.addOns.brownSugar && <Text style={styles.addOnOptionText}>Brown Sugar</Text>}
            {/* Add more add-ons here if needed */}
          </View>
         
        
        </View>
        <Text style={styles.totalPriceText}>Total Price: {item.totalPrice}</Text>
     
      </View>

    </View>
  );

  const calculateTotalPrice = () => {
    const GST = calculateGST();
    return totalBill + GST;
  };

  return (
    <View style={styles.container}>
      <HeaderScreens
      ScreenName={"Order Detail Screen"}
      />
      <View
      style={{}}
      >

      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.priceDetails}>
      <Text style={[styles.priceText,{color:Colors.PrimaryColor,fontSize:20}]}>Order {orderItem.status}</Text>

        <Text style={styles.priceText}>Subtotal: ${totalBill.toFixed(2)}</Text>
        <Text style={styles.priceText}>GST (10%): ${calculateGST().toFixed(2)}</Text>
        <Text style={styles.priceText}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
      </View>
 
    </View>
  );
};



export default OrderDetailScreen
