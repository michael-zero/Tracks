import React, {useContext} from 'react';
import { Text } from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

//TELAS
import AccountScreen from './src/screens/AccountScreen'

import TrackCreateScreen from './src/screens/TrackCreateScreen'

import {MainFlow} from './src/screens/MainFlow'
import {LogScreen} from './src/screens/LogScreen'

import {setNavigator} from './src/navigationRef'

//Context
import {Provider as AuthProvider, Stack} from './src/context/AuthContext'
import {Context as AuthContext} from './src/context/AuthContext'
import SignupScreen from './src/screens/SignupScreen'



const Tab =  createBottomTabNavigator()
// const Stack = createStackNavigator()
            

const switchNavigator = createSwitchNavigator({
   loginFlow: () => 
                <Stack.Navigator>     
                  <Stack.Screen name="Signup" component={SignupScreen}/>
                  <Stack.Screen name="Account" component={AccountScreen}/>
               </Stack.Navigator>,
  //  TrackOutros: () =>
  //    <Tab.Navigator>
  //       <Tab.Screen name="trackList" component={MainFlow} />
  //       <Tab.Screen name="track-create" component={TrackCreateScreen}/>
  //       <Tab.Screen name="account" component={AccountScreen}/>
  //    </Tab.Navigator>
     
   
  // mainFlow: Track
 
})



const App =  createAppContainer(switchNavigator);

export default () => {
  return ( 
    <AuthProvider>
      <NavigationContainer>
        
              <App ref={(navigator) => {setNavigator(navigator)}}/>
         
       
      </NavigationContainer>
     
    </AuthProvider>)
  
  }

// const App = () => {
//   const {state} = useContext(AuthContext)
//    console.log(state)
//   return (
//   <Text>aham</Text>
//   )
// }

// export default () => {
//   const state = null
 
//   return (
//       <AuthProvider>
//             <NavigationContainer>
//                 <Stack.Navigator>
//                   {state ? (
//                     <>
//                       <Text>Logado</Text>
//                     </>
//                   ) : (
               
//                     <Stack.Screen name="SignUp" component={SignupScreen} />
//                   )}
//                 </Stack.Navigator>
//     </NavigationContainer>
//       </AuthProvider>
//     )
// }
