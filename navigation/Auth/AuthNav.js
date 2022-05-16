import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {Login, SignUp} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={SignUp} name="Signup" />
    </Stack.Navigator>
  );
};

export default AuthNav;
