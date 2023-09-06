import React from "react";
import { Modal,ActivityIndicator,StyleSheet ,View} from "react-native";
import Colors from "./colors";
function LoaderFullScreen({visible}){
    return(
        <Modal transparent={true} visible={visible}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color={Colors.PrimaryColor} />
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
    },
})
export default LoaderFullScreen