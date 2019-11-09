import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

const Container = ({children, backgroundColor, style}) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({backgroundColor});
  }
  return (
    <SafeAreaView style={[containerStyles, style]}>{children}</SafeAreaView>
  );
};

export default Container;
