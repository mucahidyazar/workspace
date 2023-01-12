import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import CategoryItem from './Item';
import Datas from '../../data/Courses';

const Categories = props => {
  return (
    <View style={styles.categories}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <Text style={styles.categoriesButton}>See All</Text>
      </View>
      <View style={styles.categoriesContainer}>
        {
          Datas.map((data, index) => (
            <CategoryItem
              key={index}
              item={data}
              navigation={props.navigation} />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    flex: 1
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30
  },
  categoriesTitle: {
    fontWeight: 'bold'
  },
  categoriesButton: {
    fontSize: 13,
    color: 'royalblue',
    fontWeight: 'bold'
  },
  categoriesContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});

export default Categories;