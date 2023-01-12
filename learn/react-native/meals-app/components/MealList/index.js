import React from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import MealItem from '../MealItem';
import { useSelector } from 'react-redux';

const MealList = (props) => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => props.navigation.navigate({
          routeName: 'MealDetail',
          params: {
            item: itemData.item,
            isFav: isFavorite
          }
        })} />
    )
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15
  }
});

export default MealList;