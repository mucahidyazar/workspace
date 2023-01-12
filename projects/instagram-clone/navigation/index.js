/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//SCREENS
import IntroScreen from '../screens/Intro';
import IntroductionScreen from '../screens/Introduction';
import LoginScreen from '../screens/Login';
import LoginHelpScreen from '../screens/LoginHelp';
import CreateScreen from '../screens/Create';
import NameAndPasswordScreen from '../screens/Create/NameAndPassword';
import AddYourBirthdayScreen from '../screens/Create/AddYourBirthday';
import WelcomeScreen from '../screens/Create/Welcome';
import CameraScreen from '../screens/Camera';

//HOMEPAGE SCREENS
import HomePageScreen from '../screens/Home';
import ActivityPageScreen from '../screens/Home/Activity';
import MessagesPageScreen from '../screens/Home/Messages';
import MessageDetailPageScreen from '../screens/Home/Messages/MessageDetail';
import MessageRequestsPageScreen from '../screens/Home/Messages/MessageRequests';
import SearchPageScreen from '../screens/Home/Search';
import AdvanceSearchPageScreen from '../screens/Home/Search/AdvanceSearch';

//PROFILE NAVIGATION
import ProfilePageScreen from '../screens/Profile';
import ArchivePageScreen from '../screens/Profile/Archive';
import SavedPageScreen from '../screens/Profile/Saved';
import CloseFriendsPageScreen from '../screens/Profile/CloseFriends';
import DiscoverPageScreen from '../screens/Profile/Discover';
import PostPageScreen from '../screens/Profile/Post';
import LikesPageScreen from '../screens/Profile/Likes';

//SETTINGS NAVIGATIONS
import SettingsPageScreen from '../screens/Settings';

//PROFILE
import FollowingPageScreen from '../screens/Profile/Following';

const loginStackNavigator = createStackNavigator({
  Intro: {
    screen: IntroScreen,
  },
  Introduction: IntroductionScreen,
  Login: LoginScreen,
  LoginHelp: LoginHelpScreen,
  Create: CreateScreen,
  NameAndPassword: NameAndPasswordScreen,
  AddYourBirthday: AddYourBirthdayScreen,
  Welcome: WelcomeScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: () => null,
    headerLeft: () => null,
  },
});

const homeStackNavigator = createStackNavigator({
  loginStackNavigator,
  Home: HomePageScreen,
  Messages: MessagesPageScreen,
  MessageDetail: MessageDetailPageScreen,
  MessageRequests: MessageRequestsPageScreen,
  AdvanceSearch: AdvanceSearchPageScreen,
  Camera: CameraScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: "",
  },
});

const profileStackNavigator = createStackNavigator({
  Profile: ProfilePageScreen,
  Following: FollowingPageScreen,
}, {
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitle: "",
  },
});

const homeTabNavigator = createBottomTabNavigator({
  Home: {
    screen: homeStackNavigator,
    navigationOptions: ({navigation}) => {
      let { routeName } = navigation.state.routes[navigation.state.index];

      if (
        routeName === 'loginStackNavigator' || routeName === 'MessageDetail' ||  routeName === 'MessageRequestDetail' || routeName === 'Messages' || routeName === 'Camera') {
        return {
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-home' : 'ios-home'} size={30} />,
          tabBarVisible: false,
        };
      }
      return {
        tabBarLabel: () => null,
        tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-home' : 'ios-home'} size={30} />,
      };
    },
  },
  Search: {
    screen: SearchPageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-search' : 'ios-search'} size={30} />,
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-add-circle-outline' : 'ios-add-circle-outline'} size={30} />,
    },
  },
  Activity: {
    screen: ActivityPageScreen,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-heart' : 'ios-heart'} size={30} />,
    },
  },
  Profile: {
    screen: profileStackNavigator,
    navigationOptions:{
      tabBarLabel: () => null,
      tabBarIcon: () => <Icon name={Platform.OS === 'android' ? 'md-person' : 'ios-person'} size={30} />,
    },
  },
});

const homeDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: homeTabNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },
  Profile: {
    screen: profileStackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },
  Likes: {
    screen: LikesPageScreen,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },
  Post: PostPageScreen,
  Archive: {
    screen: ArchivePageScreen,
    navigationOptions: (navData) => {

      return {
        drawerLabel: () => (
          <View style={styles.drawerIconContainer} onPress={() => navData.navigation.navigate('Archive')}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-archive" : "ios-archive"} />
            <Text>Archive</Text>
          </View>
        )
      };
    },
  },
  Saved: {
    screen: SavedPageScreen,
    navigationOptions: (navData) => {

      return {
        drawerLabel: () => (
          <View style={styles.drawerIconContainer} onPress={() => navData.navigation.navigate('Saved')}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-save" : "ios-save"} />
            <Text>Saved</Text>
          </View>
        )
      };
    },
  },
  CloseFriends: {
    screen: CloseFriendsPageScreen,
    navigationOptions: (navData) => {

      return {
        drawerLabel: () => (
          <View style={styles.drawerIconContainer} onPress={() => navData.navigation.navigate('CloseFriends')}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-people" : "ios-people"} />
            <Text>Close Friends</Text>
          </View>
        )
      };
    },
  },
  Discover: {
    screen: DiscoverPageScreen,
    navigationOptions: (navData) => {

      return {
        drawerLabel: () => (
          <View style={styles.drawerIconContainer} onPress={() => navData.navigation.navigate('Discover')}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-paw" : "ios-paw"} />
            <Text>Discover People</Text>
          </View>
        )
      };
    },
  },
  Settings: {
    screen: SettingsPageScreen,
    navigationOptions: (navData) => {

      return {
        drawerLabel: () => (
          <View style={styles.drawerIconContainer} onPress={() => navData.navigation.navigate('Settings')}>
            <Icon style={styles.drawerIcon} name={Platform.OS === 'android' ? "md-settings" : "ios-settings"} />
            <Text>Settings</Text>
          </View>
        ),
      };
    },
  },
}, {
  drawerPosition: 'right',
  drawerType: 'slide',
  navigationOptions: {
    swipeEnabled: true,
  },
  overlayColor: 'transparent',
  itemsContainerStyle: {
    position: 'relative',
  }
});

const styles = StyleSheet.create({
  drawerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  drawerIcon: {
    fontSize: 30,
    marginRight: Dimensions.get('window').width / 100 * 5,
  },
});

export default createAppContainer(homeDrawerNavigator);