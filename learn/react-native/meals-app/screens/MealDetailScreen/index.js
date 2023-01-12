import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import DefaultText from '../../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleFavorite
} from '../../store/actions/mealAction';

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>
      {props.children}
    </DefaultText>
  </View>
}

const MealDetailScreen = props => {

  const avaiableMeals = useSelector(state => state.meals.meals);

  const item = props.navigation.getParam('item');
  const id = item.id;

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  useEffect(() => {
    props.navigation.setParams({
      toggleFav: toggleFavoriteHandler
    })
  }, [item])

  const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === id));
  useEffect(() => {
    props.navigation.setParams({
      isFav: currentMealIsFavorite
    });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{item.duration}m</DefaultText>
        <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        item.ingredients.map((ingredient, index) => (
          <ListItem key={index}>{ingredient}</ListItem>
        ))
      }
      <Text style={styles.title}>Steps</Text>
      {
        item.steps.map((step, index) => (
          <ListItem key={index}>{step}</ListItem>
        ))
      }
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam('item');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFavorite} />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;