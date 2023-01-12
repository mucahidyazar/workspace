/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const Modal = ({ width, children, onClick }) => {
  return (
    <View style={styles.outside} onPress={onClick}>
      <View style={styles.body}>
        {children}
        <TouchableOpacity activeOpacity={0.7} onPress={onClick} style={styles.bodyDeactive} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outside: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  bodyDeactive: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  }
});

export default Modal;