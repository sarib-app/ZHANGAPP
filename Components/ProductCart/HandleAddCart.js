import AsyncStorage from "@react-native-async-storage/async-storage";

const HandleAddCart = async (cartItem) => {
    try {
      // Get existing cartData from AsyncStorage (if any)
      const existingCartData = await AsyncStorage.getItem("cartData");
  
      // Parse the existingCartData from JSON string to an array (if it exists)
      const cartDataArray = existingCartData ? JSON.parse(existingCartData) : [];
  
      // Check if a similar cart item (same product with same add-ons) already exists
      const existingCartItem = cartDataArray.find(
        (item) =>
          item.product.id === cartItem.product.id &&
          JSON.stringify(item.addOns) === JSON.stringify(cartItem.addOns)
      );
  
      if (existingCartItem) {
        // Update quantity and total price of the existing cart item
        existingCartItem.quantity += cartItem.quantity;
        existingCartItem.totalPrice += cartItem.totalPrice;
      } else {
        // Add the new cartItem to the cartDataArray
        cartDataArray.push(cartItem);
      }
  
      // Convert the updated cartDataArray back to a JSON string
      const updatedCartData = JSON.stringify(cartDataArray);
  
      // Save the updated cartData back to AsyncStorage
      await AsyncStorage.setItem("cartData", updatedCartData);
      const newCartData = await AsyncStorage.getItem("cartData");
     return "added"  
      // console.log("Data saved successfully!", newCartData);
    } catch (error) {
        console.log("Error while handling data: ", error);
        return "not added"
    }
  };

  export default HandleAddCart