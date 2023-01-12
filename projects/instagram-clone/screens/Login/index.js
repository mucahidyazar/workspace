/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Container from '../../components/LoginTemplate';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Introduction = props => {

  const [securePassword, setSecurePassword] = useState(true);

  const user = {
    username: 'mucahidyazar@gmail.com',
    password: '1234567',
  }

  const [username, setUsername] = useState('mucahidyazar@gmail.com');
  const [password, setPassword] = useState('1234567');

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <TextInput
              placeholder="Phone number, email or username"
              style={styles.formInput}
              value={username}
              onChangeText={text => setUsername(text)} />
          </View>
          <View style={styles.formGroup}>
            <TextInput
              secureTextEntry={securePassword}
              placeholder="Password"
              style={styles.formInput}
              value={password}
              onChangeText={text => setPassword(text)} />
            <Icon name={securePassword ? "eye" : "eye-slash"} style={styles.inputIcon} onPress={() => setSecurePassword(!securePassword)} />
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Home')}>
            <Text style={{ ...styles.button, ...styles.buttonLogin }}>
              Loginn
            </Text>
          </TouchableOpacity>
          <Text style={styles.lightText}>Forgot your login details? <Text style={styles.boldText} onPress={() => props.navigation.navigate('LoginHelp')}>Get help signing in.</Text></Text>
        </View>
        <View style={styles.moreContent}>
          <Text style={styles.loginWith}>Log in with Facebook</Text>
          <Text style={styles.moreOr}>OR</Text>
          <Text style={styles.lightText}>Don't have an account? <Text style={styles.boldText} onPress={() => props.navigation.navigate('CreateNewAccount')}>Sign up.</Text></Text>
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '2%',
  },
  form: {
  },
  formGroup: {
    paddingVertical: 10,
    position: 'relative',
  },
  formInput: {
    padding: 10,
  },
  inputIcon: {
    position: 'absolute',
    top: '50%',
    right: '5%',
  },
  button: {
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  buttonLogin: {
    backgroundColor: 'royalblue',
    marginVertical: '5%',
  },
  lightText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
  boldText: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
  moreContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '25%',
    marginTop: '10%',
  },
  loginWith: {
    color: 'royalblue',
    fontWeight: 'bold',
  },
  moreOr: {
    color: 'rgba(0,0,0,0.7)'
  },
});

export default Introduction;