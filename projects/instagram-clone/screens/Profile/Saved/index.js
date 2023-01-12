/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const Saved = props => {

  return (
    <View style={styles.container}>
      <Text>Saved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

Saved.navigationOptions = navData => {

  return {
    
  }
}

export default Saved;