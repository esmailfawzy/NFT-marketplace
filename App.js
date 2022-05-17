import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Text, View} from 'react-native';
import {Details, Home} from './screens';
import {HomeNav, AuthNav} from './navigation';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {
  const [goToHome, setGoToHome] = useState('AuthNav');

  const getData = async () => {
    let value = await AsyncStorage.getItem('loggedIn');
    if (value != null) {
      // value previously stored
      // value = JSON.parse(value);
      setGoToHome(value);
      console.log(`value from assync APP ${value}`);
    } else console.log("there's an error from app");
  };

  useEffect(() => {
    getData();
    // console.log(`go to home from navi ${goToHome}`);
  }, [goToHome]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'AuthNav'}
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen component={AuthNav} name="AuthNav" />
        <Stack.Screen component={HomeNav} name="HomeNav" /> */}

        {goToHome === 'AuthNav' ? (
          <Stack.Screen component={AuthNav} name="AuthNav" />
        ) : (
          <Stack.Screen component={HomeNav} name="HomeNav" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
