import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const TextXS = ({ style, children }) => {

  return (
    <Text style={{ ...style, ...styles.text }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 8,
    color: Colors.colorLight
  }
});

export default TextXS;