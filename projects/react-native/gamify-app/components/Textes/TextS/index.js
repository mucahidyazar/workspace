import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const TextS = ({ style, children }) => {

  return (
    <Text style={{ ...styles.text, ...style }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: Colors.colorLight
  }
});

export default TextS;