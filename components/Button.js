import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({minWidth, fontSize, handlePress, props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export const AuthBtn = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.medium,
        borderRadius: SIZES.base,
        marginTop: SIZES.font * 2,
        borderWidth: 1,
        borderColor: COLORS.white,
      }}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          fontSize: SIZES.medium,
          textAlign: 'center',
        }}>
        Continue
      </Text>
    </TouchableOpacity>
  );
};

export const ConBtn = ({method, img}) => {
  return (
    <TouchableOpacity
      style={{
        width: '40%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.font,
        borderRadius: SIZES.base,
        marginBottom: SIZES.font,
        borderWidth: 1,
        borderColor: COLORS.white,
      }}>
      <MaterialCommunityIcons
        name={img}
        color={COLORS.white}
        size={SIZES.extraLarge}
      />
    </TouchableOpacity>
  );
};
