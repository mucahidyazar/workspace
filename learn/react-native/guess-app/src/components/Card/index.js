import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{
      ...styles.card,
      ...style
    }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
})

export default Card;