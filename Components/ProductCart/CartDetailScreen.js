import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../GlobalStyles/colors';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
const CartDetailScreen = () => {
  const navigation =useNavigation()
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

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

  const handleDeleteItem = async (itemIndex, itemPrice) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
    // Save the updated cart items to AsyncStorage if needed
    try {
      await AsyncStorage.setItem('cartData', JSON.stringify(updatedCartItems));
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  
    // Update the total bill by subtracting the item price
    setTotalBill((prevTotalBill) => prevTotalBill - itemPrice);
    // Update the total bill by subtracting the item price
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
        <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(index, item.totalPrice)}
      >
        <Icon name="trash" size={20} color="#161616" />
      </TouchableOpacity>
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
      ScreenName={"Confirm Cart Detail"}
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
        <Text style={styles.priceText}>Subtotal: ${totalBill.toFixed(2)}</Text>
        <Text style={styles.priceText}>GST (10%): ${calculateGST().toFixed(2)}</Text>
        <Text style={styles.priceText}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
      </View>
      <TouchableOpacity 

      onPress={()=> {
        console.log(cartItems)
        navigation.navigate("OrderTakenScreen")}}
      style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed to Payment - Total: ${calculateTotalPrice().toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CartDetailScreen
