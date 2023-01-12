import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator, AuthNavigator } from './ShopNavigator';
import StartupScreen from '../screens/StartupScreen';



const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      ###Iceriye bu Stackin parcasini olmasini istedigimiz ekranlari screenleri koyacagiz istedigimiz
      <MyStack.NavigationContainer>

      </MyStack.NavigationContainer>
    </NavigationContainer>
  );

  return <NavigationContainer></NavigationContainer>
};

export default AppNavigator;
