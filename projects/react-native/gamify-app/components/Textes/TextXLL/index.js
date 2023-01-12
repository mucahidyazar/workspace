import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const TextXLL = ({ style, children }) => {

  return (
    <Text style={{ ...styles.text, ...style }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: Colors.colorLight
  }
});

export default TextXLL;