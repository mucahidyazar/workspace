import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';

const Intro = props => {

  setTimeout(() => {
    props.navigation.replace('Login');
  }, 1000);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.png')} />
      <Image style={{ opacity: 1 }} source={require('../../assets/images/logo.png')} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.05
  }
});

export default Intro;