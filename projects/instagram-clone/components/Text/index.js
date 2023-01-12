/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const TextComponent = ({ name, dark, light, style, size, color, children, center, onPress }) => {

  return (

    <Text
      onPress={onPress}
      style={{
        ...styles.text,
        fontSize: size,
        color: color,
        textAlign: center ? 'center' : 'auto',
        opacity: light ? 0.5 : 1,
        fontWeight: dark ? 'bold' : 'normal',
        ...style,
      }}>
      {name} {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {

  },
});

export default TextComponent;