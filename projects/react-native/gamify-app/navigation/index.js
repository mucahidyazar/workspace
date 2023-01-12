import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

//SCREENS
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Tutorial from '../screens/Tutorial';
import Home from '../screens/Home';
import GameDetail from '../screens/GameDetail';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import BestOffer from '../screens/BestOffer';
import MostPlayed from '../screens/MostPlayed';
import RecentlyAdded from '../screens/RecentlyAdded';
import Categories from '../screens/Categories';
import Colors from '../constants/Colors';

const StackNavigator = createStackNavigator({
  Intro: Intro,
  Login: Login,
  Home: Home,
  GameDetail: GameDetail,
  ForgotPassword: ForgotPassword,
  Profile: Profile,
  Search: Search,
  Tutorial: Tutorial,
  BestOffer: BestOffer,
  MostPlayed: MostPlayed,
  Favorites: Favorites
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: ''
  }
});

// const StackNavigationForDrawer = createStackNavigator({
//   Home: Home,
//   StackNavigator: StackNavigator
// });

const DrawerNavigation = createDrawerNavigator({
  //Drawerda gozukmesin diye null gosteriyoruz. Bu sayede Stacki navigation ve Drawer navigationu bagliyoruz.
  stackNavigationLink: {
    screen: StackNavigator,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-home" size={25} color={Colors.colorLight} />
    }
  },
  MostPlayed: {
    screen: MostPlayed,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-play" size={25} color={Colors.colorLight} />
    }
  },
  BestOffer: {
    screen: BestOffer,
    navigationOptions: {
      drawerIcon: <Ionicons name="logo-game-controller-b" size={25} color={Colors.colorLight} />
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-barcode" size={25} color={Colors.colorLight} />
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-heart" size={25} color={Colors.colorLight} />
    }
  },
  RecentlyAdded: {
    screen: RecentlyAdded,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-link" size={25} color={Colors.colorLight} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerIcon: <Ionicons name="ios-person" size={25} color={Colors.colorLight} />
    }
  },
  Logout: {
    screen: 'Logout',
    navigationOptions: {
      drawerIcon: <Ionicons name="md-power" size={25} color={Colors.colorLight} />
    }
  },
}, {
  drawerBackgroundColor: Colors.colorBlue,
  contentOptions: {
    labelStyle: {
      color: 'white',
    },
  },
});

export default createAppContainer(DrawerNavigation);
