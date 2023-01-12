import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import TextM from '../../../components/Textes/TextM';

const VerticalItem = ({ image, name, navigation }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.contentOne}
      onPress={() => {
        navigation.navigate('GameDetail');
      }}>
      <Image style={styles.verticalImage} source={image} />
      <TextM>{name}</TextM>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contentOne: {
    width: '30%',
    overflow: 'hidden',
  },
  verticalImage: {
    width: '100%',
    height: 150,
    marginBottom: -10
  }
});

export default VerticalItem;