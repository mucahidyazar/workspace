import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import TextXLLLL from '../../components/Textes/TextXLLLL';
import TextM from '../../components/Textes/TextM';
import TextS from '../../components/Textes/TextS';
import Colors from '../../constants/Colors';

const GameDetail = props => {

  const game = {
    name: 'Battlefiled V: Firestrome',
    image: require('../../assets/images/main-image.png'),
    studio: 'EA Games',
    description: 'Sint dolores consequatur numquam repellendus in iusto ratione minima ipsam placeat quisquam, libero iure quos, a est provident fuga voluptatem, nemo voluptas? Officia, repellendus fuga. Veritatis possimus quis voluptatibus! Dolor ex obcaecati, quisquam animi nisi commodi dolores recusandae. Unde quasi cupiditate deleniti, reprehenderit voluptatum sunt est hic placeat aspernatur minus provident laboriosam sapiente in autem suscipit repellat at porro quas ducimus! Perferendis est eum quis? At assumenda corrupti doloremque ex autem aspernatur aut esse perferendis expedita id laboriosam laudantium voluptatibus, minus soluta voluptate optio totam odio reiciendis itaque est veritatis quo sed excepturi! Praesentium quisquam quas fuga placeat officiis, voluptatibus maiores eveniet.',
    snapshots: [
      require('../../assets/images/screenshot-one.png'),
      require('../../assets/images/screenshot-two.png')
    ]
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.slider}>
          <View style={styles.image}>
            <LinearGradient
              colors={['transparent', 'rgba(35, 45, 59, 1)']}
              style={styles.sliderShadow}
            />
            <Image style={styles.imageself} source={game.image} />
            <TextXLLLL style={styles.imageText}>{game.name}</TextXLLLL>
          </View>
          <View style={styles.content}>
            <TextM style={styles.studio}>{game.studio}</TextM>
            <TextS style={{ lineHeight: 15 }}>{game.description}</TextS>
          </View>
          <View style={styles.snapshots}>
            <View style={styles.snapshotsHeader}>
              <TextM>Snapshots</TextM>
              <TextS style={{ color: Colors.colorRed }}>See all</TextS>
            </View>
            <ScrollView horizontal>
              <View style={styles.snapshotsImages}>
                {
                  game.snapshots.map((snap, index) => (
                    <Image style={{ marginRight: 10 }} source={snap} key={index} />
                  ))
                }
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

GameDetail.navigationOptions = navData => {

  return {
    headerTitle: '',
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
  container: {
    flex: 1,
    backgroundColor: Colors.colorBlue
  },
  slider: {
    height: '40%',
    position: 'relative'
  },
  sliderShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  image: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  imageself: {
    width: '100%'
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    width: '70%',
    zIndex: 3,
  },
  content: {
    paddingHorizontal: '5%'
  },
  studio: {
    color: Colors.colorRed,
    marginBottom: '2%'
  },


  snapshots: {
    paddingHorizontal: '5%'
  },
  snapshotsHeader: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  snapshotsImages: {
    flexDirection: 'row'
  }


});

export default GameDetail;