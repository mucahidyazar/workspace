import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

const Item = ({ item, navigation }) => {

  return (
    <TouchableOpacity
      style={styles.course}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Course', { course: item })}>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../../assets/images/course001.jpg')} />
      <Text style={styles.courseTitle}>{item.name}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  course: {
    width: '45%',
    height: 150,
    position: 'relative',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.05)'
  },
  courseTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'grey',
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.02)',
    padding: 5,
  }
});

export default Item;