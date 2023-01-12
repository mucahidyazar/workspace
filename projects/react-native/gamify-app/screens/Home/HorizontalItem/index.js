import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import TextM from '../../../components/Textes/TextM';

const HorizontalItem = ({ image, name }) => {

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.contentFour}>
      <Image style={styles.horizontalImage} source={image} />
      <TextM>{name}</TextM>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contentFour: {
    width: '100%',
  },
  horizontalImage: {
    width: '100%',
    height: 100
  }
});

export default HorizontalItem;