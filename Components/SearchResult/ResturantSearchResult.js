import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import RestaurantListItem from './RestaurantListItem';
import Colors from '../GlobalStyles/colors';
import HeaderScreens from '../GlobalStyles/HeaderScreens';
const restaurants = [
    { id: 1, name: 'Store 1', banner: 'https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg', rating: 4.5, description: 'A trendy coffee spot with a wide variety of drinks.' },
    { id: 2, name: 'Store 2', banner: 'https://oceanlodgeflorida.com/wp-content/uploads/2019/11/coffee-shop-1149155_1920.jpg', rating: 4.2, description: 'A cozy cafe offering delicious pastries and desserts.' },
    { id: 3, name: 'Store 3', banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZEPOtAMa9PG9CpF-Rm9ig_RaCGiW0MKw2HYeOeGLbEfz5qQM2nluTWvACREPnSR8FS8&usqp=CAU', rating: 4.8, description: 'A modern coffee house with a relaxing ambiance.' },
    // Add more stores here
  ];
const ResturantSearchResult = ({ route }) => {
//   const { restaurants } = route.params;

  return (
    <View style={styles.container}>
        <HeaderScreens
        ScreenName={"Search Result"}
        />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RestaurantListItem restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BgColor,
  },
});

export default ResturantSearchResult;
