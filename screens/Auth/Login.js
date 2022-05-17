import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {assets, COLORS, FONTS, SIZES} from '../../constants';
import {
  AuthBtn,
  ConBtn,
  CustomInput,
  FocusedStatusBar,
  HomeHeader,
} from '../../components';
const Login = () => {
  const [passIcon, setPassIcon] = useState('eye-off-outline');
  const [logged, setLogged] = useState('');

  const storeLogged = async value => {
    // const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('loggedIn', value);
  };

  const getData = async () => {
    let value = await AsyncStorage.getItem('loggedIn');
    if (value != null) {
      // value previously stored
      // value = JSON.parse(value);
      setLogged(value);
      console.log(`value from assync ${value}`);
    } else console.log("there's an error from login");
  };

  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar background={COLORS.primary} />

      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: SIZES.font,
          }}>
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 120,
              height: 120,
              marginStart: SIZES.font,
            }}
          />

          {/* <Text
            style={{
              fontFamily: FONTS.bold,
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
            }}>
            Hi!
          </Text> */}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              zIndex: 0,
              padding: SIZES.font,
            }}>
            {/* google & facebook secion */}
            <View
              style={{
                marginBottom: SIZES.font * 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <ConBtn img={'facebook'} />
              {/* <Text
                style={{
                  fontSize: SIZES.medium,
                  color: COLORS.white,
                  fontFamily: FONTS.regular,
                }}>
                or
              </Text> */}
              <ConBtn img={'google'} />
            </View>
            {/* input section */}
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                fontSize: SIZES.medium,
                marginBottom: SIZES.base,
              }}>
              Email
            </Text>

            <CustomInput placeholder={'Email'} />

            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                fontSize: SIZES.medium,
                marginBottom: SIZES.base,
                marginTop: SIZES.font,
              }}>
              Password
            </Text>
            <View
              style={{
                // marginTop: SIZES.font,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderRadius: SIZES.base,
              }}>
              <CustomInput placeholder={'Password'} />
              <TouchableOpacity
                onPress={() =>
                  passIcon == 'eye-outline'
                    ? setPassIcon('eye-off-outline')
                    : setPassIcon('eye-outline')
                }
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginEnd: SIZES.font,
                }}>
                <MaterialCommunityIcons
                  name={passIcon}
                  color={COLORS.gray}
                  size={SIZES.large}
                />
              </TouchableOpacity>
            </View>

            <AuthBtn
              onPress={() => {
                // setLogged(true);
                storeLogged('HomeNav');
                console.log('con pressed');
                navigation.navigate('HomeNav', {
                  screen: 'Home',
                });
                // console.log(logged);
              }}
            />

            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.gray,
                fontSize: SIZES.small,
                marginTop: SIZES.font,
              }}>
              You don't have an account ?
              <Text
                onPress={() => {
                  navigation.navigate('Signup');
                }}
                style={{
                  fontFamily: FONTS.medium,
                  color: COLORS.white,
                  fontSize: SIZES.small,
                }}>
                {' Sign Up'}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
