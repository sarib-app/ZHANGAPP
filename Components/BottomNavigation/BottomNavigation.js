import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../Home/Home';
import Profile from '../Porfile/Porfile';
import Colors from '../GlobalStyles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileVendor from '../Porfile/ProfileVendor';
import Header from '../GlobalStyles/Header';
import Notification from '../Notification/notification';
import OrderList from '../OrderList/OrderList';
import MapStores from '../MapStores/MapStores';
import VendorDashboard from '../Vendor/VendorDashboard';
import checkVendor from '../GlobalCalls/CheckIsVendor';
import LoaderFullScreen from '../GlobalStyles/LoaderFullScreen';
import GetCategories from '../GlobalCalls/GetCategories';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const [isVendor,setIsVendor]=useState(false)
  const [visibleLoader,setVisibleLoader]= useState(true)

  useEffect(()=>{
    const checkingVendor =async()=>{

      const VendorVal = await checkVendor()
      console.log(VendorVal)
      setIsVendor(VendorVal)
      setVisibleLoader(false)
    }

    const getCategories =async()=>{

      const VendorVal = await GetCategories()
      if(VendorVal.status==="200"){
        // console.log(VendorVal)
      AsyncStorage.setItem("categories",JSON.stringify(VendorVal.Categorys))

      }
     
    }
    getCategories()
    checkingVendor()
  },[])
  return (

<>

<Header
isVendor={isVendor}
/>
{
  visibleLoader === false ?
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,

        
        tabBarStyle: {
          backgroundColor: Colors.Dark,
          borderTopWidth: 0,
        
        
        },
    })}
    tabBarOptions={{
        activeTintColor: Colors.FontColorI, // Color of the active tab label and icon
        inactiveTintColor: Colors.inActive, // Color of the inactive tab label and icon
         // Background color of the tab bar
      }}
    
    >
      {
        isVendor ?
      <Tab.Screen name="Dashboard" component={VendorDashboard} 
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
        <Fontisto 
        name='coffeescript'
                    size={20}
        color={ color}

        />        
       ),}}
      />
:
<Tab.Screen name="Home" component={Home} 
options={{
  tabBarLabel: 'Explore',
  tabBarIcon: ({ color, size }) => (
  <Fontisto 
  name='coffeescript'
              size={20}
  color={ color}

  />        
 ),}}
/>

    }

{
  isVendor === false &&

<Tab.Screen name="MapStores" component={MapStores} 
      options={{
        tabBarLabel: 'Stores',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
    name='storefront'
    size={25}
    color={color}
    />        
       ),}}
      />
}


<Tab.Screen name="Notifications" component={Notification} 
      options={{
        tabBarLabel: 'Notifcations',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
    name='bell-outline'
    size={25}
    color={color}
    />        
       ),}}


      
      />



<Tab.Screen name="OrderList" component={OrderList} 
      options={{
        tabBarLabel: 'Orders',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
    name='order-bool-ascending-variant'
    size={25}
    color={color}
    />        
       ),}}


      
      />
{
  isVendor===true ?
  <Tab.Screen name="Profile" component={ProfileVendor} 
  
  options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color, size }) => (
      <Ionicons 
      name='settings'
      size={20}
      color={ color}
       
      
      />      
      ),}}
      />
    :
    <Tab.Screen name="Profile" component={Profile} 
  
    options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <Ionicons 
        name='settings'
        size={20}
        color={ color}
        
        
        />      
        ),}}
        />
    
    }
   
    </Tab.Navigator>

:
    <LoaderFullScreen 
    visible={visibleLoader}
    />

  }

    </>
 

  );
};


export default BottomNavigation;
