import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import Colors from '../../constants/colors';
import TitleText from '../TitleText';

const Header = ({ title }) => {
  return (
    <View style={{
      ...styles.header,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}>
      <TitleText>{title}</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerIOS: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    borderBottomColor: 'transparent',
  }
});

export default Header;