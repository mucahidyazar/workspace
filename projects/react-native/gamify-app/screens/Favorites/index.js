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

const Favorites = props => {

  const starFull = require('../../assets/images/starFull.png');
  const starEmpty = require('../../assets/images/starEmpty.png');

  const games = [
    {
      name: 'Call of Duty: WWII',
      image: require('../../assets/images/game-1.png'),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, alias dolore. Nobis fugiat ipsum saepe dignissimos at quidem expedita molestias.',
      point: 5
    },
    {
      name: 'Call of Duty: WWII',
      image: require('../../assets/images/game-2.png'),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, alias dolore. Nobis fugiat ipsum saepe dignissimos at quidem expedita molestias.',
      point: 3
    },
    {
      name: 'Call of Duty: WWII',
      image: require('../../assets/images/game-3.png'),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, alias dolore. Nobis fugiat ipsum saepe dignissimos at quidem expedita molestias.',
      point: 4
    },
    {
      name: 'Call of Duty: WWII',
      image: require('../../assets/images/game-4.png'),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, alias dolore. Nobis fugiat ipsum saepe dignissimos at quidem expedita molestias.',
      point: 1
    },
    {
      name: 'Call of Duty: WWII',
      image: require('../../assets/images/game-5.png'),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, alias dolore. Nobis fugiat ipsum saepe dignissimos at quidem expedita molestias.',
      point: 2
    },
  ]

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
    <Container style={{
      paddingHorizontal: 5
    }}>
      <ScrollView>
        <View style={styles.bestOfferGames}>
          {
            games.map((game, index) => (
              <View style={styles.bestGame} key={index}>
                <View style={{ width: '100%', height: 250, overflow: 'hidden' }}>
                  <Image source={game.image} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.bestGameContent}>
                  <TextXL>{game.name}</TextXL>
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

Favorites.navigationOptions = navData => {

  return {
    headerTransparent: false,
    cardShadowEnabled: true,
    headerTitle: 'Favorites',
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
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bestGame: {
    width: '50%',
    marginVertical: 7
  },
  bestGameContent: {
    justifyContent: 'space-evenly'
  },
  gamePoint: {
    flexDirection: 'row'
  }
});

export default Favorites;