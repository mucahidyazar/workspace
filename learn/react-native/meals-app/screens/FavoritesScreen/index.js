import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import MealList from '../../components/MealList';
import DefaultText from '../../components/DefaultText';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite meals found. Start adding some!
        </DefaultText>
      </View>
    )
  }
  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation} />
  )
}

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Favorite Screen',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          //openDrawer() => Acik kalmasini saglar
          //toggleDrawer() => Acilir kapanirlik saglar
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;