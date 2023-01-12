/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/LoginTemplate';

const Introduction = props => {

  return (
    <Container>
      <View style={styles.buttons}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Create')}><Text style={{ ...styles.button, ...styles.buttonCreate }}>
          Create New Account
        </Text></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('Login')}><Text style={{ ...styles.button, ...styles.buttonLogin }}>
          Login
        </Text></TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  buttonCreate: {
    backgroundColor: 'royalblue',
    marginBottom: '5%',
  },
  buttonLogin: {
    color: 'royalblue',
    fontWeight: 'bold',
  },
});

export default Introduction;