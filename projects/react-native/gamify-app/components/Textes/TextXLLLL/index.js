import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const TextXLLLL = ({ style, children }) => {

  return (
    <Text style={{ ...styles.text, ...style }}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: Colors.colorLight
  }
});

export default TextXLLLL;