import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import MealList from '../../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../../components/DefaultText';

const CategoryMealScreen = props => {


  const catId = props.navigation.getParam('categoryId');

  const avaiableMeals = useSelector(state => state.meals.filteredMeals);

  if (avaiableMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No meals found, maybe check your filters?
        </DefaultText>
      </View>
    )
  }

  return (
    <MealList
      listData={avaiableMeals}
      navigation={props.navigation} />
  )
}

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealScreen;