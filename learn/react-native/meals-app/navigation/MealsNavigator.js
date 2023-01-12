import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//Acilir Menu
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}

const MealsNavigator = createStackNavigator({
  //Kisa Yontem
  Categories: CategoriesScreen,
  //Uzun Yontem
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  MealDetail: MealDetailScreen
}, {
  initialRouteName: 'Categories',
  defaultNavigationOptions: defaultStackNavOptions
});



const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})



const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-restaurant'
          size={25}
          color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor
    }
  }
}



const MealsFavTabNavigator = Platform.OS === 'android'
  //Android icin daha ozel bir bottom tab kullanmak istedik yoksa alttaki de calisiyor.
  ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
    //Efekt ekler alt menuye
    //shifting true olursa navigationOptions da ayarladigimiz tabColor sadece active oldugunda gozukur. Flase olursa her zaman

    //Shifting kullanmazsak tab color rengini bu sekilde ayarlayabiliriz.
    barStyle: {
      backgroundColor: 'red'
    }
  }
  )
  : createBottomTabNavigator(
    tabScreenConfig, {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans-bold'
      },
      activeTintColor: 'white'
    }
  }
  );



const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
}, {
  // navigationOptions: {
  //   drawerLabel: 'Filters!!!'
  // },
  defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
})

export default createAppContainer(MainNavigator);