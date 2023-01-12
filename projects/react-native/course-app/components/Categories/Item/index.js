import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const CategoriesItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.categoriesItem}
      onPress={() => navigation.navigate('Courses', {
        item: item
      })} >
      <ImageBackground style={styles.cardImage} source={require('../../../assets/images/course001.jpg')} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.categoryName}</Text>
        <Text style={styles.cardSubTitle}>17 Courses</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoriesItem: {
    width: '45%',
    height: 150,
    position: 'relative',
  },
  cardImage: {
    width: "100%",
    height: 150
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 13
  },
  cardSubTitle: {
    color: 'grey',
    fontSize: 10
  }
});

export default CategoriesItem;