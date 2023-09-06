import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PaymentCheckoutScreen = ({  }) => {
    const totaBill = 200
  // Function to handle the payment process
  const handlePayment = () => {
    // Implement your payment logic here
    // For example, you can integrate with a payment gateway
    // and handle the payment process accordingly
    alert(`Payment successful for Total Bill: $${totalBill.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paymentText}>Please make payment for the following amount:</Text>
      <TouchableOpacity style={styles.buttonContainer} >
      <FontAwesome name={"trash"} size={140} color="#161616" />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#B7DFA1', // Primary color for the button
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        borderRadius: 10,
        margin: 5,
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616', // Dark background color
  },
  paymentText: {
    fontSize: 18,
    color: '#B7DFA1', // Primary color for payment text
    textAlign: 'center',
    marginBottom: 20,
  },
  totalBillText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B7DFA1', // Primary color for total bill text
  },
  paymentButton: {
    backgroundColor: '#B7DFA1', // Primary color for "Pay Now" button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  paymentButtonText: {
    color: '#161616', // Dark background color
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PaymentCheckoutScreen;
