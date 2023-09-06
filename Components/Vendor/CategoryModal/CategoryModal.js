import React from "react";
import { useEffect, useState } from "react";
import { Modal,View,TouchableOpacity,Text,StyleSheet } from "react-native";
import GETcatAsync from "../../GlobalCalls/GETCatAsyn";
import Colors from "../../GlobalStyles/colors";

const RenderCategoryModal = ({categoryModalVisible,callback}) => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
const getAsynCat = async ()=>{

    const AsyncCat = await GETcatAsync()
    setCategories(AsyncCat)
}
getAsynCat()
    },[])
    
    return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={categoryModalVisible}
    //   onRequestClose={() => setCategoryModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {categories.length >=1 ?
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Category</Text>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryItem}
              onPress={() => {
                callback(category);
                // setCategoryModalVisible(false);
              }}
            >
              <Text style={styles.categoryText}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
    :
    <Text style={styles.modalTitle}>Something went wrong please restart the app!</Text>    
    }

</View>
    </Modal>
  );
            }

  const styles = StyleSheet.create({
  
    categoryText: {
      color: Colors.FontColorI,
    },
 

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#333',
      borderRadius: 10,
      padding: 20,
      width: '80%',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.FontColorI,
      marginBottom: 20,
    },
    categoryItem: {
      paddingVertical: 10,
      borderBottomColor: Colors.FontColorI,
      borderBottomWidth: 1,
    },
  
  });
export default RenderCategoryModal