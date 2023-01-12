/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Container from '../../components/LoginTemplate';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Introduction = props => {

  const [securePassword, setSecurePassword] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Login Help</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Find your Account</Text>
        <Text style={styles.description}>Enter your Instagram username or the email or phone number linked to your account</Text>
        <View style={styles.formGroup}>
          <TextInput placeholder="Phone number, email or username" style={styles.formInput} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
          <Text style={{ ...styles.button, ...styles.buttonLogin }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.moreContent}>
        <Text style={styles.moreOr}>OR</Text>
        <Text style={styles.loginWith}>Log in with Facebook</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: '15%',
  },
  description: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
  },
  formGroup: {
    paddingVertical: 10,
    position: 'relative',
  },
  formInput: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'royalblue',
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  moreContent: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '25%',
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