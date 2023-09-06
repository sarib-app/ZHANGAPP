import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet ,Switch} from 'react-native';
import Colors from '../GlobalStyles/colors';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CountryCode from './CountryCodes';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Registration = ({

}) => {
    
  const navigation = useNavigation()
   
  const [username, setUsername] = useState('');
  const [referCode, setReferCode] = useState('');
  const [index, setIndex] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pressed, setPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [countryCode, setCountryCode] = useState('92');
  const [isVendor, setIsVendor] = useState(false);
  const handleRegistration = () => {
    if (username && firstName && lastName && email && phone && password && confirmPassword) {
      if (password !== confirmPassword) {
        setErrorCode('confirmPassword');
        setErrorMessage('Passwords do not match');
      } else {
        AsyncStorage.setItem("Login","1")
navigation.navigate("BottomNavigation")
navigationRester("BottomNavigation")
        // registerUser();
        setLoading(true);
      }
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
  function registerUser() {
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("firstname", firstName);
    formdata.append("lastname", lastName);
    formdata.append("phone", countryCode+phone);
    formdata.append("password", password);
    formdata.append("password_confirmation", confirmPassword);
    formdata.append("role_id", "5");
    formdata.append("code", referCode);
    formdata.append("question", "hobby");
    formdata.append("answer", "no hobby");
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://earnflixapi.tradingtube.net/api/register", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        if(result.status === "200"){
              AsyncStorage.setItem("Login","1")
              AsyncStorage.setItem("user",JSON.stringify("user",result.user))

              // ControlLogin()
              setErrorCode()
        }
        else if(result.status === "401"){
         CheckError(result.error,result.message)
        }
      })
      .catch((error) => console.log('error', error))
      .finally(() => setLoading(false));
  }




  function checkReferCode (){
    setLoading(true)
    var formdata = new FormData();
formdata.append("referal_code", referCode);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://earnflixapi.tradingtube.net/api/checkcode", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status === "200"){
      setIndex(1)
setReferCode()
    }
    else if(result.status === "401"){
      CheckError(result.error,result.message)
    }
  })
  .catch(error => console.log('error', error))
  .finally(()=>setLoading(false));
  }

function CheckError(code,message){
  setErrorCode(code)
  setErrorMessage(message)
}

  function selectedCode(val) {
    setCountryCode(val);
    setShowCode(false);
  }


  function HandelIndex(){
    if(index === 0){
      if(referCode ){
        // checkReferCode()
      setIndex(1)

        setPressed(false)


      }
      else{
        setPressed(true)
      }
    }
    else{
      setIndex(0)
    }
  }

  return (
    <View style={[styles.container,{justifyContent:'flex-start'}]}>
      {/* <IonIcons name="md-person" size={80} color="white" /> */}
      <Text style={[styles.title,{alignSelf:"flex-start",marginBottom:-15}]}>Welcome</Text>
      <Text style={[styles.loginText,{alignSelf:"flex-start",marginBottom:0}]}>
To
</Text>

<Text style={[styles.buttonText,{alignSelf:"flex-start",marginBottom:30}]}>Register</Text>



{
  index === 0 ? 
  <>
  {errorCode === 'refer' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="person-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !referCode ? Colors.danger : 'transparent' }]}
          placeholder="referCode"
          placeholderTextColor="#999"
          onChangeText={(text) => setReferCode(text)}
          value={referCode}
        />
      </View>
      <Text
      onPress={()=> HandelIndex() }
      
      style={[styles.buttonText,{alignSelf:"flex-end",marginBottom:30}]}>{loading === true ? "Loading..":"Next"}</Text>
      <Text 
          selectable={true}
          selectionColor={Colors.SeconderyColor}
      style={[styles.loginText,{marginTop:0,alignSelf:'center'}]}>
        If you dont have any refer code try this one{' '}
        <Text
    
        style={{ color: Colors.PrimaryColor, fontSize: 15,fontWeight:'bold' }}>7M05LZ</Text></Text>
  
      

  </>:
  <>
  
  {errorCode === 'username' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="person-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !username ? Colors.danger : 'transparent' }]}
          placeholder="username"
          placeholderTextColor="#999"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      {errorCode === 'firstName' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="person-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !firstName ? Colors.danger : 'transparent' }]}
          placeholder="First Name"
          placeholderTextColor="#999"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
      </View>

      {errorCode === 'lastName' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="person-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !lastName ? Colors.danger : 'transparent' }]}
          placeholder="Last Name"
          placeholderTextColor="#999"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
      </View>

      {errorCode === 'email' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="mail-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !email ? Colors.danger : 'transparent' }]}
          placeholder="Email"
          placeholderTextColor="#999"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      {errorCode === 'phone' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons
          onPress={() => setShowCode(true)}
          name="chevron-down-sharp"
          size={24}
          color="white"
          style={styles.inputIcon}
        />
        <View
          style={[
            styles.input,
            { borderBottomColor: pressed === true && !phone ? Colors.danger : 'transparent', flexDirection: 'row', alignItems: 'center' },
          ]}
        >
          <Text style={styles.phoneCode}>{countryCode}</Text>
          <TextInput
            style={{ flex: 1, color: 'white' }}
            placeholder="Phone"
            keyboardType="numeric"
            placeholderTextColor="#999"
            onChangeText={(text) => setPhone(text)}
            value={phone}
          />
        </View>
      </View>

      {errorCode === 'password' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="key-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !password ? Colors.danger : 'transparent' }]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      {errorCode === 'confirmPassword' && <Text style={styles.errorText}>{errorMessage}</Text>}
      <View style={styles.inputContainer}>
        <IonIcons name="key-outline" size={24} color="white" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { borderBottomColor: pressed === true && !confirmPassword ? Colors.danger : 'transparent' }]}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>
      <Text
      onPress={()=> HandelIndex() }
      
      style={[styles.buttonText,{alignSelf:"flex-end"}]}>{loading === true ? "Loading..":"BACK"}</Text>
      <TouchableOpacity style={[styles.button,{marginTop:10}]} onPress={handleRegistration}>
        <Text style={styles.buttonText}>{loading === true ? 'Loading...' : 'Register'}</Text>
      </TouchableOpacity>

    
  
  
  </>
}

<View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Register as {isVendor === true ? "Vendor":"Customer"}</Text>
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

<Text style={[styles.loginText,{position:'absolute',bottom:10}]}>
        Already have an account?{' '}
        <Text 
        onPress={()=> navigation.navigate("Login")}
        style={{ color: Colors.PrimaryColor, fontSize: 15,fontWeight:'bold' }}>Login</Text>
      </Text>

      <CountryCode isVisible={showCode} onSelectBank={selectedCode} />
    </View>
  );
};


export default Registration;
