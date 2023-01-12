import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from '../../components/CategoryGridTile';

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }} />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      style={{ width: '100%' }} />
  )
}

CategoriesScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Meal Categoriess',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
