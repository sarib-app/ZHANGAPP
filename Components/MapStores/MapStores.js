import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Modal, PermissionsAndroid, Linking } from 'react-native';
import MapView, { Marker, Callout, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // You can use any icon library you prefer

import Colors from '../GlobalStyles/colors';
const VENDOR_DATA = [
  {
    id: 1,
    name: 'Coffee Corner',
    rating:4.2,
    description:"Almando Is the best store ever which is created !",
    latitude: 37.411950,
    longitude: -122.100,
    bannerImage: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280',
  },
  {
    id: 2,
    name: 'Tea House',
    rating:4.2,
    description:"Almando Is the best store ever which is created !",
    latitude: 37.401900,
    longitude: -122.084,
    bannerImage: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280',
  },
  // Add more vendor data as needed
];

const MapStores = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [tracking, setTracking] = useState(false);

  const handleMarkerPress = (vendor) => {
    setSelectedStore(vendor);
    setModalVisible(true);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const startTracking = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.warn(error);
        },
        { enableHighAccuracy: true, distanceFilter: 10, fastestInterval: 5000 }
      );
      setTracking(true);
    }
  };

  const stopTracking = () => {
    Geolocation.stopObserving();
    setTracking(false);
  };

  const openGoogleMaps = () => {
    if (selectedStore) {
      const { latitude, longitude } = selectedStore;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            console.log("Can't handle URL: " + url);
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => console.error('An error occurred', err));
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.4219983,
          longitude: -122.084,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={tracking}
        onUserLocationChange={(event) => {
          if (tracking) {
            const { latitude, longitude } = event.nativeEvent.coordinate;
            setUserLocation({ latitude, longitude });
          }
        }}
      >
        {VENDOR_DATA.map((vendor) => (
          <Marker
            key={vendor.id}
            coordinate={{ latitude: vendor.latitude, longitude: vendor.longitude }}
            onPress={() => handleMarkerPress(vendor)}
          >
            <Image source={{ uri: vendor.bannerImage }} style={styles.markerImage} />
            <Callout>
              <Text style={styles.storeName}>{vendor.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={{alignItems:'center',backgroundColor:Colors.Dark,width:"100%",padding:20,borderTopRightRadius:20,borderTopLeftRadius:20}}> 
<View
style={{flexDirection:'row',alignItems:'center',marginLeft:50}}
>
<Image 
style={{width:100,height:100,borderRadius:8,marginLeft:0}}
source={{uri:selectedStore?.bannerImage}}
/>
<View style={{marginLeft:10}}>
<Text style={styles.modalTitle}>{selectedStore?.name}</Text>
<Text style={styles.modalDetail}>{selectedStore?.description}</Text>
<View style={{flexDirection:'row',alignItems:'center'}}>


<MaterialIcons name="star" size={18} color="#FFD700" />
                  <Text style={{color: '#FFD700'}}>{selectedStore?.rating}</Text>
</View>
<Text 
  onPress={()=> navigation.navigate("StoreDetailScreen")}
style={styles.ExtratXT}>See Store Detais</Text>

</View>

</View>
<View style={{flexDirection:'row',alignItems:'center',width:"80%",justifyContent:'space-between',margin:10}}>

 <TouchableOpacity style={styles.modalButton} onPress={openGoogleMaps}>
            <Text style={styles.modalButtonText}>Open in Google Maps</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.closeModalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeModalButtonText}>Close</Text>
          </TouchableOpacity> 
          </View>

          </View>

        </View>
      </Modal>

      <TouchableOpacity
        style={[styles.trackingButton, tracking ? styles.trackingButtonActive : {}]}
        onPress={tracking ? stopTracking : startTracking}
      >
        <Text style={styles.buttonText}>{tracking ? 'Stop Tracking' : 'Start Tracking'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#B7DFA1', // Customize the border color as needed
  },
  storeName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: '#B7DFA1', // Customize the store name color as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:Colors.FontColorI, // Customize the store name color as needed
    // marginLeft: 10,
  },
  ExtratXT:{
fontSize:16,
color:Colors.PrimaryColor,
textDecorationLine:'underline',
  },
  modalDetail:{
    color:Colors.inActive,
    width:"80%",
    // marginLeft: 10,
  },
  modalButton: {
    backgroundColor: '#B7DFA1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    // marginBottom: 10,
  },
  modalButtonText: {
    color: Colors.Dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeModalButton: {
    backgroundColor: Colors.danger,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    // marginTop: 10,
  },
  closeModalButtonText: {
    color: Colors.FontColorI,
    fontSize: 16,
    fontWeight: 'bold',
  },
  trackingButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#B7DFA1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  trackingButtonActive: {
    backgroundColor: '#FF0000', // Customize the active tracking button color as needed
  },
  buttonText: {
    color: '#161616',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapStores;
