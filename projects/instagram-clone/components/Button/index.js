/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Button = ({ name, color, style, onPress, width, height }) => {

  let buttonStyle;
  if (color) {
    buttonStyle = {
      color: 'white',
      backgroundColor: 'royalblue',
      fontWeight: 'bold',
    }
  } else {
    buttonStyle = {
      color: 'royalblue',
      fontWeight: 'bold',
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width, height}}>
      <Text style={{ ...styles.button, ...buttonStyle, ...style }}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
});

export default Button;