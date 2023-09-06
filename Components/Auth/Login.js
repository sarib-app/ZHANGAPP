import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Switch, Alert  } from 'react-native';
import Colors from '../GlobalStyles/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CountryCode from './CountryCodes';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginVendor from '../GlobalCalls/LoginVendor';
import LoginUser from '../GlobalCalls/LoginUser';

const Login = (  {

}) => {
  const [Phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [isVendor, setIsVendor] = useState(false); // State to track Vendor or Customer selection

  const [countryCod, setcountryCode] = useState("92");
const navigation = useNavigation()





  const handleLogin = (
  
  ) => {
    if (Phone && password) {
      // LoginAsCustomer();
      setLoading(true)
      if(isVendor){
        LoginAsVendor()
      }
      else{
        LoginAsCustomer()
      }
      // setLoading(true); 
    } else {
      setPressed(true);
    }
  };
  function navigationRester(title) {
    navigation.reset({
      index: 0,
      routes: [{ name: title }],
    });
  }

  async function LoginAsVendor(){

const data = await LoginVendor(Phone,password)
console.log('data',JSON.stringify(data))
setLoading(false)

if(data.status==="401"){
  Alert.alert(data.error)
  CatchErrors(data.error, data.message);
}
else if(data.status === "200"){
  AsyncStorage.setItem("user",JSON.stringify(data))
  AsyncStorage.setItem("Login","1")
  AsyncStorage.setItem("LoginAs","Vendor")
  navigation.navigate("BottomNavigation")
  navigationRester("BottomNavigation")
}
  }

 async function LoginAsCustomer() {
    const data = await LoginUser(countryCod+Phone,password)
    console.log('data',JSON.stringify(data))
    setLoading(false)
    
    if(data.status==="401"){
      // Alert.alert(data.error,data.mess)
      CatchErrors(data.error, data.message);
    }
    else if(data.status === "200"){
  AsyncStorage.setItem("user",JSON.stringify(data))
    
      AsyncStorage.setItem("Login","1")
      AsyncStorage.setItem("LoginAs","Customer")
    
      navigation.navigate("BottomNavigation")
      navigationRester("BottomNavigation")
    }
    

  }

  function CatchErrors(code, message) {
    setErrorCode(code);
    setErrorMessage(message);
  }


function selectedCode(val){
setcountryCode(val)
setShowCode(false)
}

  return (
    <View style={styles.container}>
      <IonIcons name="person-circle" size={80} color="white" style={{marginTop:40}} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to continue</Text>
      {errorCode === 'Phone' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <IonIcons 
        onPress={()=> setShowCode(true)}
        name="chevron-down-sharp" size={24} color="white" style={styles.inputIcon} />
        <View style={[styles.input, { borderBottomColor: pressed === true && !Phone ? Colors.danger : 'transparent' ,flexDirection:'row',alignItems:"center"}]}
>
        <Text style={styles.PhoneCode}>{countryCod}</Text>

        <TextInput
          style={{flex:1,color: 'white',
        }}
          placeholder="Phone"
          keyboardType="numeric"
          placeholderTextColor="#999"
          onChangeText={(text) => setPhone(text)}
          value={Phone}
          />
          </View>
      </View>
      {errorCode === 'password' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <View style={styles.inputContainer}>
        <IonIcons name="lock-closed" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !password ? Colors.danger : 'transparent', }]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
     
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>{loading === true ? 'Loading...' : 'Login'}</Text>
      </TouchableOpacity>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Login as {isVendor === true ? "Vendor":"Customer"}</Text>
        <View style={styles.toggleWrapper}>
          <Text style={[styles.toggleOption, isVendor && styles.activeToggleOption]}>Vendor</Text>
          <Switch
            value={isVendor}
            onValueChange={() => setIsVendor(!isVendor)}
            trackColor={{ false: Colors.inActive, true: Colors.inActive }}
            thumbColor={isVendor ? Colors.deposit : Colors.send}
            style={styles.toggleSwitch}
          />
          <Text style={[styles.toggleOption, !isVendor && styles.activeToggleOption]}>Customer</Text>
        </View>
      </View>
      <Text style={styles.signupText}>If you don't have an account, please  
      <Text
      onPress={()=> navigation.navigate("Registration")}
      style={{color:Colors.PrimaryColor,fontSize:15,fontWeight:"bold"}}
      >

      {" "}Sign Up
      </Text>
      
      </Text>
      <CountryCode 
      isVisible={showCode}
      onSelectBank={selectedCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  PhoneCode:{
color:Colors.FontColorI,
fontSize:16,
// marginRight:5,
fontWeight:'bold'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
    marginBottom: 40,
  },
  errorText: {
    fontSize: 12,
    color: Colors.danger,
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleText: {
    color: Colors.FontColorI,
    fontSize: 18,
    margin: 10,
    fontWeight:"bold"
  },
  toggleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.FontColorI,
    borderRadius: 20,
    overflow: 'hidden',
  },
  toggleOption: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.Dark,
  },
  activeToggleOption: {
    color: Colors.Dark,
    backgroundColor: Colors.PrimaryColor,
    shadowColor:Colors.Dark,
    elevation:2,
    borderRadius: 20,
  },
  toggleSwitch: {
    marginHorizontal: -10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#B7DFA1',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  signupText: {
    position:'absolute',
    bottom:0,
    color: 'white',
    fontSize: 14,
    marginTop: 20,
  },
});

export default Login;
