import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from './SigninScreen'
import SignupScreen from './SignupScreen'

import {Stack} from '../context/AuthContext'

const LogScreen = ()  => {
  return (
    
    // <Stack.Navigator
    //   initialRouteName="Signup"
    //   screenOptions={{ headerShown: false, headerTitle: false }}
    // >
      <>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        //  options={{ headerTintColor: 'red'}}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        // initialParams={{ user: 'me' }}
      />
      </>
    //  </Stack.Navigator>
  );
}

export { LogScreen };