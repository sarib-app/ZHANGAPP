import {
   
    Alert,
    PermissionsAndroid,
  } from 'react-native';

const PermissionGallery=async ()=>{
    if (Platform.OS === 'ios') {
        SelectFromGallery();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message:
                'Application needs access to your storage to download File',
            }
          );
  
  
          const grantedRead = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message:
                'Application needs access to your storage to upload file',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED && grantedRead === PermissionsAndroid.RESULTS.GRANTED) {
            // Start downloading
return true            
  
          } else {
            // If permission denied then show alert
            return false            

            Alert.alert('Error','Storage Permission Not Granted');
          }
        } catch (err) {
          // To handle permission related exception
          return "error"            

        }
      }
   }
   export default PermissionGallery