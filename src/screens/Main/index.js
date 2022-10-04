import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../LoginIn";
import TabScreens from "../TabScreens";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function Main(props) {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false,}} >
      <Stack.Screen name={'login'} component={Login}/>
      <Stack.Screen name={'tabScreens'} component={TabScreens}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Main;
