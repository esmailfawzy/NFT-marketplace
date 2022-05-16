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
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {assets, COLORS, FONTS, SIZES} from '../../constants';
import {
  AuthBtn,
  ConBtn,
  CustomInput,
  FocusedStatusBar,
  HomeHeader,
} from '../../components';

const SignUp = () => {
  const [passIcon, setPassIcon] = useState('eye-off-outline');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <FocusedStatusBar background={COLORS.primary} />

      <ScrollView contentContainerStyle={{flex: 1}}>
        {/* Logo section */}
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            marginStart: SIZES.font * 2,
          }}
        />

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
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: COLORS.white,
                fontSize: SIZES.small,
                marginBottom: SIZES.font,
              }}>
              Continue with
            </Text>
            <View
              style={{
                marginBottom: SIZES.font * 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <ConBtn img={'facebook'} />

              <ConBtn img={'google'} />
            </View>
            {/* input section */}
            <View style={{marginBottom: SIZES.font}}>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  color: COLORS.white,
                  fontSize: SIZES.medium,
                  marginBottom: SIZES.base,
                }}>
                Name
              </Text>

              <CustomInput
                onChangeText={val => {
                  console.log(val);
                }}
                placeholder={'Name'}
              />
            </View>

            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                fontSize: SIZES.medium,
                marginBottom: SIZES.base,
              }}>
              Email
            </Text>

            <CustomInput
              placeholder={'Email'}
              onChangeText={val => {
                console.log(val);
              }}
            />

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

            <AuthBtn onPress={() => alert('Continue pressed')} />
            {/* Navigation section */}
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: COLORS.gray,
                fontSize: SIZES.small,
                marginTop: SIZES.font,
              }}>
              Already have an account ?
              <Text
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={{
                  fontFamily: FONTS.medium,
                  color: COLORS.white,
                  fontSize: SIZES.small,
                }}>
                {' Log in'}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
