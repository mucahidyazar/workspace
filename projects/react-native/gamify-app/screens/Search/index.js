import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image,
  TextInput
} from 'react-native';
import Container from '../../components/Container';
import TextL from '../../components/Textes/TextL'
import TextS from '../../components/Textes/TextS'
import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';

const Search = props => (
  <Container style={{
    paddingHorizontal: 20
  }}>
    <TextInput
      style={{ padding: 10, marginTop: 20 }}
      placeholder='Type here'
      backgroundColor="white"
      placeholderTextColor="black" />
  </Container>
);

Search.navigationOptions = navData => {

  return {
    headerTransparent: false,
    cardShadowEnabled: true,
    headerTitle: 'Search',
    headerTitleAlign: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerStyle: {
      backgroundColor: Colors.colorBlue,
      borderBottomWidth: 5,
      borderBottomColor: 'rgba(0, 0, 0, 0.2)'
    },
    headerTintColor: Colors.colorLight,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            //openDrawer() => Acik kalmasini saglar
            //toggleDrawer() => Acilir kapanirlik saglar
            navData.navigation.toggleDrawer();
          }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({

});

export default Search;