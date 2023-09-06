import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
import Colors from '../GlobalStyles/colors';
import QR from '../../assets/images/QR.png'

const OrderTakenScreen = () => {

  return (
    <View style={styles.container}>
      <HeaderScreens
      ScreenName={"Order In Progress"}
      />

      <View style={styles.CardWrapper}>

      <View style={styles.orderSummary}>
        <Text style={styles.orderIdText}>Order ID: #212321</Text>
        <Text style={styles.totalBillText}>Status: IN PROGRESS</Text>
        <Text style={styles.totalBillText}>Total Bill: $200</Text>
        <Text style={styles.totalBillText}>Estimated Time 25 Min</Text>

      </View>
    
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.showAddressButton}>
          <Text style={styles.showAddressButtonText}>Show Address on map</Text>
          <MaterialIcon name="location-on" size={20} color="#161616" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.showAddressOnMapButton}>
          <Text style={styles.showAddressOnMapButtonText}>Call Vendor</Text>
        <Icon name="phone" size={24} color={Colors.Dark} style={styles.icon} />
        </TouchableOpacity>
      </View>
      </View>

  <View style={styles.CardWrapper}>

<Text style={styles.QrText}>Show the QR to Vendor</Text>
<Image 
source={QR}
style={{width:200,height:200,tintColor:Colors.FontColorI}}
/>

  </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BgColor, // Dark background color
  },
  QrText:{
   color:Colors.FontColorI,
   fontSize:22,
   fontWeight:'bold' 
  },
  CardWrapper:{
    margin:20,
    color:Colors.Dark,
    padding:20,
    width:'100%',
    backgroundColor:Colors.Dark,
    shadowColor:Colors.Dark,
    elevation:4,
    alignItems:"center"
  },
  orderSummary: {
    backgroundColor: '#B7DFA1', // Primary color for order summary background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  orderDetails: {
    backgroundColor: '#F5F5F5', // Light background color for order details
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  orderIdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161616', // Dark background color
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#161616', // Dark background color
    marginBottom: 5,
  },
  totalBillText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#161616', // Dark background color
    marginBottom: 10,
  },
  receiveOrderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B7DFA1', // Primary color for receive order text
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
    width: '80%',
  },
  showAddressButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Show Address" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAddressButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
    fontSize: 16,
  },
  showAddressOnMapButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Show Address on Map" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '48%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showAddressOnMapButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default OrderTakenScreen;
