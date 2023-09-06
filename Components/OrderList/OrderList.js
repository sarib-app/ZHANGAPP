import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ORDERS_DATA = [
  {
    id: '1',
    status: 'In Progress',
    items: [
      {
        id: '101',
        name: 'Latte Dark',
        quantity: 2,
        addOns: ['Sugar', 'Brown Sugar'],
        totalPrice: 13.0,
      },
      // Add more items for the order if needed
    ],
    totalBill: 13.0,
  },
  {
    id: '2',
    status: 'Cancelled',
    items: [
      {
        id: '201',
        name: 'Smooth Cap',
        quantity: 1,
        addOns: ['Sugar'],
        totalPrice: 8.9,
      },
      // Add more items for the order if needed
    ],
    totalBill: 8.9,
  },
  {
    id: '3',
    status: 'Completed',
    items: [
      {
        id: '301',
        name: 'Isponiol Beans',
        quantity: 3,
        addOns: ['Brown Sugar'],
        totalPrice: 27.0,
      },
      // Add more items for the order if needed
    ],
    totalBill: 27.0,
  },
  // Add more orders if needed
];

const OrderList = () => {
    const navigation = useNavigation()
  const [orders, setOrders] = useState(ORDERS_DATA);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOrders = (status) => {
    setSelectedFilter(status);
    if (status === 'All') {
      setOrders(ORDERS_DATA);
    } else {
      const filteredOrders = ORDERS_DATA.filter((order) => order.status === status);
      setOrders(filteredOrders);
    }
  };

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity 
    style={styles.orderItemContainer} onPress={() => navigation.navigate("OrderDetailScreen", { orderItem: item })}>
      <Text style={styles.orderIdText}>Order ID: {item.id}</Text>
      <Text style={styles.statusText}>Status: {item.status}</Text>
      <Text style={styles.totalBillText}>Total Bill: ${item.totalBill.toFixed(2)}</Text>
      <Icon name="chevron-right" size={20} color="black" style={styles.forwardIcon} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'All' && styles.selectedFilterButton]}
          onPress={() => filterOrders('All')}
        >
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'In Progress' && styles.selectedFilterButton]}
          onPress={() => filterOrders('In Progress')}
        >
          <Text style={styles.filterButtonText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'Cancelled' && styles.selectedFilterButton]}
          onPress={() => filterOrders('Cancelled')}
        >
          <Text style={styles.filterButtonText}>Cancelled</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, selectedFilter === 'Completed' && styles.selectedFilterButton]}
          onPress={() => filterOrders('Completed')}
        >
          <Text style={styles.filterButtonText}>Completed</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616', // Dark background color
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  selectedFilterButton: {
    backgroundColor: Colors.inActive, // Primary color for selected filter button
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#B7DFA1', // Primary color for filter button text
    fontWeight: 'bold',
  },
  flatListContent: {
    padding: 16,
  },
  orderItemContainer: {
    backgroundColor: '#B7DFA1', // Primary color for order item container
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
  },
  orderIdText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161616', // Dark background color
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
  },
  forwardIcon: {
    position: 'absolute',

    right: 16,
    top: '50%',
    transform: [{ translateY: 0 },{translateX:-10}], // To vertically center the icon
  },
});

export default OrderList;
