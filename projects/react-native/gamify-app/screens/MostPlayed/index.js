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

const MostPlayed = props => {

  const mostPlayedGames = useSelector(state => state.main.mostPlayedGames);

  return (
    <Container style={{
      paddingHorizontal: '5%'
    }}>
      <ScrollView>
        <View style={styles.videoContainer}>
          {
            mostPlayedGames.map((game, index) => (
              <View style={styles.mostPlayedContainer} key={index}>
                <Image style={styles.mostPlayedImage} source={game.image} />
                <View style={styles.mostPlayedButton}>
                  <Ionicons name="ios-play-circle" size={30} color={Colors.colorLight} />
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </Container>
  )
};

MostPlayed.navigationOptions = navData => {

  return {
    headerTransparent: false,
    cardShadowEnabled: true,
    headerTitle: 'Most Played',
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
  mostPlayedContainer: {
    width: '100%',
    height: 100,
    marginVertical: 10,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'black'
  },
  mostPlayedImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mostPlayedButton: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MostPlayed;