/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";

const Intro = props => {

  setTimeout(() => {
    props.navigation.navigate('Introduction');
  }, 2000);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/images/server/logo.png')} />
      </View>
      <View style={styles.introText}>
        <Text style={styles.introFrom}>from</Text>
        <LinearTextGradient
          style={{ fontWeight: "bold", textTransform: 'uppercase' }}
          locations={[0, 1]}
          colors={["orange", "purple"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text>facebook</Text>
        </LinearTextGradient>
      </View>
    </View>
  )
}

Intro.navigationOptions = () => {

  return {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  logoContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  introText: {
    alignItems: 'center'
  },
  introFrom: {
    color: 'rgba(0,0,0, 0.5)'
  },
  introFacebook: {

  }
});

export default Intro;