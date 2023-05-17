import React from 'react'
import {} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Detail from './pages/Detail';
import HomePage from './pages/HomePage';

const Stack = createNativeStackNavigator();

function App () {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name = "HomePage" component={HomePage} />
      <Stack.Screen options={{headerShown : false}} name= "Detail" component={Detail} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App