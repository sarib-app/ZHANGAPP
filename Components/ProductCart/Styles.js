import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../GlobalStyles/colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#161616', // Dark background color
    },
    flatListContent: {
      padding: 16,
    },
    cartItemContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      backgroundColor:Colors.Dark,
      width:'100%',
      padding:10,
      borderRadius:14
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 5,
    },
    productDetails: {
      marginLeft: 16,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#B7DFA1', // Primary color for product name
    },
    productDescription: {
      marginVertical: 5,
      color: Colors.lightTxt, // Primary color for product description
    },
    productPrice: {
      fontWeight: 'bold',
      color: Colors.FontColorI, // Primary color for product price
    },
    quantityText: {
      color: Colors.FontColorI, // Primary color for quantity text
    },
    totalPriceText: {
      color: '#B7DFA1', // Primary color for total price text
    },
    addOnsContainer: {
      marginVertical: 5,
    },
    addOnsText: {
      fontWeight: 'bold',
      color: Colors.FontColorI, // Primary color for add-ons text
    },
    addOnsOptions: {
      flexDirection: 'row',
    },
    addOnOptionText: {
      borderWidth: 1,
      borderColor: '#B7DFA1', // Primary color for add-on option border
      borderRadius: 5,
      paddingVertical: 2,
      paddingHorizontal: 10,
      marginRight: 5,
      color: '#B7DFA1', // Primary color for add-on option text
    },
    deleteButton: {
      backgroundColor: '#B7DFA1', // Primary color for delete button
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      width:50,
      borderRadius: 5,
      // alignSelf: 'flex-end',
    },
    priceDetails: {
      paddingHorizontal: 16,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#B7DFA1', // Primary color for separator
    },
    priceText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.FontColorI, // Primary color for price text
      marginBottom: 5,
    },
    proceedButton: {
      backgroundColor: '#B7DFA1', // Primary color for "Proceed to Payment" button
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
      alignSelf: 'center',
    },
    proceedButtonText: {
      color: '#161616', // Dark background color
      fontWeight: 'bold',
    },
  });

  export default styles