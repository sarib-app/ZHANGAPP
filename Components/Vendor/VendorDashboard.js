import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
const VendorDashboard = () => {
    const navigation = useNavigation()
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  const DashboardOption = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.optionCard} onPress={onPress}>
      <View style={styles.optionIconContainer}>
        <Icon name={icon} size={40} color={Colors.PrimaryColor} />
      </View>
      <Text style={styles.optionTitle}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Status: <Text style={{color:isOnline?Colors.PrimaryColor:Colors.danger}}>{isOnline ? 'Online' : 'Offline'}</Text> </Text>
        
        <Switch value={isOnline} 
        trackColor={{ false: Colors.inActive, true: Colors.inActive }}
        thumbColor={isOnline ? Colors.PrimaryColor : Colors.FontColorI}
        
        onValueChange={toggleOnlineStatus} />
      </View>

      <View style={styles.optionsContainer}>
        <DashboardOption
          icon="add-outline"
          title="Add Products"
          onPress={() => {navigation.navigate("AddProductScreen")} /* Add logic for navigating to Add Products screen */}
        />
        <DashboardOption
          icon="create-outline"
          title="Update/Del Products"
          onPress={() => {navigation.navigate("ProductList")} /* Add logic for navigating to Add Products screen */}
        />
        <DashboardOption
          icon="information-circle-outline"
          title="Add/Update Store Information"
          onPress={() => {navigation.navigate("AddStoreDetails")}  /* Add logic for navigating to Store Information screen */}
        />
        <DashboardOption
          icon="document-outline"
          title="Add Document"
          onPress={() => {navigation.navigate("Add_Document")}  /* Add logic for navigating to Add Document screen */}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BgColor,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:Colors.FontColorI
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.Dark,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  optionIconContainer: {
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.FontColorI,
  },
});

export default VendorDashboard;
