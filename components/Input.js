import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

const CustomInput = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={COLORS.gray}
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.base,
        color: COLORS.gray,
        // width: '100%',
        fontSize: SIZES.medium,
        paddingHorizontal: SIZES.base,
      }}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
