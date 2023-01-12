import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Colors from '../../constants/Colors';

const Container = ({ children, style }) => (
  <View style={styles.outside}>
    <View style={{ ...styles.container, ...style }}>
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.png')} />
      {children}
    </View>
  </View >
);

const styles = StyleSheet.create({
  outside: {
    flex: 1,
    position: 'relative'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.colorBlue,
    zIndex: 2,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.05
  },
});

export default Container;