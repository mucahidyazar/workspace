import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import Container from '../../components/Container';
import Colors from '../../constants/Colors';
import TextS from '../../components/Textes/TextS';

const user = {
  email: 'mucahidyazar@gmail.com',
  password: '05369120161'
}

const Login = props => {

  const [email, setEmail] = useState('mucahidyazar@gmail.com');
  const [password, setPassword] = useState('05369120161');

  const getLoginHandler = () => {
    if (email === user.email && password === user.password) {
      props.navigation.navigate('Tutorial');
    }
  }

  return (
    <Container style={{
      paddingHorizontal: 20,
      justifyContent: 'space-evenly'
    }}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <TextS style={styles.label}>Email adress</TextS>
          <TextInput
            placeholder="Your email"
            placeholderTextColor={Colors.colorLight}
            style={styles.input}
            value={email}
            onChangeText={() => { }} />
        </View>
        <View style={styles.formGroup}>
          <TextS style={styles.label}>Password</TextS>
          <TextInput
            placeholder="Your password"
            placeholderTextColor={Colors.colorLight}
            style={styles.input}
            value={password}
            onChangeText={() => { }} />
        </View>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={
            () => props.navigation.navigate('ForgotPassword')
          }>
          <TextS>Forgot password?</TextS>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            style={styles.button}
            color={Colors.colorGreen}
            title='Sign In'
            onPress={getLoginHandler} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TextS>New user? <TextS style={{ color: Colors.colorGreen }}>Sign up</TextS> here</TextS>
        <TextS style={{ width: 200, textAlign: 'center' }}>By creating an account, you agree to our Terms of Service and Privacy Policy</TextS>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  form: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-evenly'
  },
  label: {
    color: Colors.colorGreen
  },
  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorGreen,
    color: Colors.colorLight
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  footer: {
    alignItems: 'center',
    height: '20%',
    justifyContent: 'space-evenly'
  }
});

export default Login;