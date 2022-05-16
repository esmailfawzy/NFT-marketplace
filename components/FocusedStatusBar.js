import {StatusBar} from 'react-native';
import React from 'react';

import {useIsFocused} from '@react-navigation/core';
const FocusedStatusBar = props => {
  const isFoucsed = useIsFocused();

  return isFoucsed ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
