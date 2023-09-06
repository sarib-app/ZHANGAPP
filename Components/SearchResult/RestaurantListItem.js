import React from 'react';
import { View, Text, Image, StyleSheet ,Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../GlobalStyles/colors';
import { useNavigation } from '@react-navigation/native';
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height;
const RestaurantListItem = ({ restaurant }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate("StoreDetailScreen")}
    style={styles.container}>
      <Image source={{ uri: restaurant.banner }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>
        <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
        {/* Add more restaurant details as needed */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:WindowWidth/1.02,
    borderRadius:8,
    alignSelf:"center",
    backgroundColor:Colors.Dark,
    marginBottom:10,
    padding: 10,
    elevation:2,
    shadowColor:Colors.Dark,
    // borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:Colors.PrimaryColor
  },
  description: {
    color: Colors.lightTxt,
    width:"80%"
  },
  rating: {
    marginTop: 5,
    color: "yellow  ",
  },
});

export default RestaurantListItem;
