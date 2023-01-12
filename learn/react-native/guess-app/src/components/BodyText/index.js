import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children, style }) => <Text style={{ ...styles.body, ...style }}>{children}</Text>

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
})

export default BodyText;