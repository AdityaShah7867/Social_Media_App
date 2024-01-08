import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import { getItem } from '../utils/asyncStorage.js';
import Navbar from '../Components/Navbar.jsx';
import Bottombar from '../Components/Bottombar.jsx';
import Friends from '../screens/Friends.jsx';
import Post from '../screens/Post.jsx';
import Updates from '../screens/Updates.jsx';
import Profile from '../screens/Profile.jsx';
const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if(onboarded == 1){
        setShowOnboarding(false);
    }else{
        setShowOnboarding(true);
    }
  }
  if(showOnboarding == null){
    return null;
  }

  if(showOnboarding == true){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Friends" options={{headerShown: false}} component={Friends} />
          <Stack.Screen name="Post" options={{headerShown: false}} component={Post} />
          <Stack.Screen name="Updates" options={{headerShown: false}} component={Updates} />
          <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else{
    return (
      <NavigationContainer>
        
        <Navbar/>
        
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Friends" options={{headerShown: false}} component={Friends} />
          <Stack.Screen name="Post" options={{headerShown: false}} component={Post} />
          <Stack.Screen name="Updates" options={{headerShown: false}} component={Updates} />
          <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        </Stack.Navigator>

        <Bottombar/>

      </NavigationContainer>
    )
  }
  }


