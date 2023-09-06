import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer
import Colors from '../GlobalStyles/colors';

const AddToCartModal = ({ product, visible, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addOns, setAddOns] = useState({ sugar: false, brownSugar: false });

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = product.Price * quantity;
  const handleAddToCart = () => {
    // Calculate total price based on quantity and product price

// console.log(totalPrice)
    // // Prepare the cart item object
    const cartItem = {
      product,
      quantity,
      totalPrice,
      addOns,
    };

    // Add the cartItem to the cart or perform the necessary action here
    onAddToCart(cartItem);

    // Close the modal after adding to cart
    onClose();
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.modalContainer}>
        {product && (
          <View style={styles.modalContent}>
            <View style={styles.productDetails}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
              <Text style={styles.productPrice}>Price: ${totalPrice}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.quantityInput}
                  keyboardType="numeric"
                  value={quantity.toString()}
                  onChangeText={(text) => setQuantity(parseInt(text) || 0)}
                />
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.addOnsContainer}>
              <Text style={styles.addOnsText}>Add-ons:</Text>
              <View style={styles.addOnsOptions}>
                <TouchableOpacity
                  style={[styles.addOnOption, addOns.sugar && styles.addOnOptionSelected]}
                  onPress={() => setAddOns({ ...addOns, sugar: !addOns.sugar })}
                >
                  <Text style={[styles.addOnOptionText,addOns.sugar && {color:Colors.Dark}]}>Sugar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.addOnOption, addOns.brownSugar && styles.addOnOptionSelected]}
                  onPress={() => setAddOns({ ...addOns, brownSugar: !addOns.brownSugar })}
                >
                  <Text style={[styles.addOnOptionText,addOns.brownSugar && {color:Colors.Dark}]}>Brown Sugar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
              <Icon name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#161616', // Dark background color
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  productDetails: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.FontColorI, // Primary color for product name
  },
  productDescription: {
    marginVertical: 5,
    textAlign: 'center',
    color: Colors.lightTxt, // Primary color for product description
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#B7DFA1', // Primary color for product price
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: Colors.FontColorI,
    borderRadius: 20,
    padding: 8,
  },
  quantityButtonText: {
    color: '#B7DFA1',
    fontSize: 16,
  },
  quantityInput: {
    width: 60,
    borderColor: Colors.FontColorI,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 8,
    marginHorizontal: 10,
    color: '#B7DFA1', // Primary color for quantity input
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#B7DFA1',
    marginVertical: 20,
  },
  addOnsContainer: {
    marginBottom: 20,
  },
  addOnsText: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.FontColorI, // Primary color for add-ons text
  },
  addOnsOptions: {
    flexDirection: 'row',
  },
  addOnOption: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#B7DFA1', // Primary color for add-on option
  },
  addOnOptionSelected: {
    backgroundColor: '#B7DFA1', // Primary color for selected add-on option
    color: '#161616', // Dark background color
  },
  addOnOptionText: {
    fontWeight: 'bold',
    color: Colors.FontColorI, // Primary color for add-on option text
  },
  addToCartButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Add to Cart" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default AddToCartModal;
