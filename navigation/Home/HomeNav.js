import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {Details, Home} from '../../screens';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
};

export default HomeNav;
