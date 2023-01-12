import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Container from '../../components/Container';
import TextXLL from '../../components/Textes/TextXLL'
import TextXL from '../../components/Textes/TextXL'
import TextS from '../../components/Textes/TextS'
import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import { useSelector } from 'react-redux';

const BestOffer = props => {

  const bestOfferGames = useSelector(state => state.main.bestOfferGames);

  const starFull = require('../../assets/images/starFull.png');
  const starEmpty = require('../../assets/images/starEmpty.png');

  const setStarsHandler = (value) => {
    let points = []
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        points = [...points, <Image key={i} source={starFull} />]
      } else if (value < 5) {
        points = [...points, <Image key={i} source={starEmpty} />]
      }
    }
    return points;
  }

  return (
    <Container>
      <ScrollView>
        <View style={styles.bestOfferGames}>
          {
            bestOfferGames.map((game, index) => (
              <View style={styles.bestGame} key={index}>
                <View style={{ width: 120, height: 120, overflow: 'hidden' }}>
                  <Image source={game.image} style={{ width: '100%' }} />
                </View>
                <View style={styles.bestGameContent}>
                  <TextXL>{game.name}</TextXL>
                  <TextS>{game.shortDescription}</TextS>
                  <View style={styles.gamePoint}>
                    {
                      setStarsHandler(game.point)
                    }
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </Container>
  )
};

BestOffer.navigationOptions = navData => {

  return {
    headerTransparent: false,
    cardShadowEnabled: true,
    headerTitle: 'Best Offer Games',
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-person"
          onPress={() => {
            //openDrawer() => Acik kalmasini saglar
            //toggleDrawer() => Acilir kapanirlik saglar
            navData.navigation.navigate('Profile');
          }} />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  bestOfferGames: {
    paddingHorizontal: '5%'
  },
  bestGame: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  bestGameContent: {
    width: '62%',
    justifyContent: 'space-evenly'
  },
  gamePoint: {
    flexDirection: 'row'
  }
});

export default BestOffer;