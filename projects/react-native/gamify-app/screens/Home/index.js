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
import Colors from '../../constants/Colors';
import HorizontalItem from './HorizontalItem';
import VerticalItem from './VerticalItem';
import { useSelector } from 'react-redux';

const Home = props => {


  const topGames = useSelector(state => state.main.topGames);
  const games = useSelector(state => state.main.games);
  const todaysGame = games[Math.floor(Math.random() * (games.length - 1) + 1)];

  let slider = [
    {
      name: 'Ghost Recon Breakpoint',
      image: require('../../assets/images/slider-image-1.png'),
      active: true
    },
    {
      name: 'Assassin’s Creed Odyssey',
      image: require('../../assets/images/slider-image-2.png'),
      active: false
    },
    {
      name: 'Total War: Three Kingdoms',
      image: require('../../assets/images/slider-image-3.png'),
      active: false
    }
  ];

  const [sliderData, setSliderData] = useState(slider);
  const activeSliderIndex = sliderData.findIndex(slide => slide.active === true);

  const navigationArrowLeftHandler = () => {
    if (activeSliderIndex === 0) {
      slider = slider.map((slide, index) => index === slider.length - 1 ? { ...slide, active: true } : { ...slide, active: false })
      setSliderData(slider);
    } else {
      slider = slider.map((slide, index) => index === activeSliderIndex - 1 ? { ...slide, active: true } : { ...slide, active: false })
      setSliderData(slider);
    }
  }

  const navigationArrowRightHandler = () => {
    if (activeSliderIndex === slider.length - 1) {
      slider = slider.map((slide, index) => index === 0 ? { ...slide, active: true } : { ...slide, active: false })
      setSliderData(slider);
    } else {
      slider = slider.map((slide, index) => index === activeSliderIndex + 1 ? { ...slide, active: true } : { ...slide, active: false })
      setSliderData(slider);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        {
          sliderData.map((game, index) => (
            game.active && <View style={styles.image} key={index}>
              <LinearGradient
                colors={['transparent', 'rgba(35, 45, 59, 1)']}
                style={styles.sliderShadow}
              />
              <Image style={styles.imageself} source={game.image} />
              <TextXLLLL style={styles.imageText}>{game.name}</TextXLLLL>
            </View>
          ))
        }
        <View style={styles.sliderNavigation}>
          {
            sliderData.map((slide, index) => (
              <View key={index} style={{
                ...styles.sliderNavigationButton,
                backgroundColor: slide.active ? Colors.colorGreen : Colors.colorLight
              }}></View>
            ))
          }
        </View>
        <View style={styles.navigationArrows}>
          <TouchableOpacity style={styles.navigationArrowLeft} onPress={navigationArrowLeftHandler}></TouchableOpacity>
          <TouchableOpacity style={styles.navigationArrowRight} onPress={navigationArrowRightHandler}></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.contentItem}>

          <TextM style={styles.categoryHeader}>Top Games</TextM>
          <View style={styles.contentGroup}>
            {
              topGames.map((game, index) => (
                <VerticalItem
                  key={index}
                  name={game.name}
                  image={game.image}
                  navigation={props.navigation} />
              ))
            }
          </View>

          <TextM style={styles.categoryHeader}>Today's Game</TextM>
          <HorizontalItem image={todaysGame.bannerImage} name={todaysGame.name} />

          <TextM style={styles.categoryHeader}>All Games</TextM>
          <View style={{ ...styles.contentGroup, flexWrap: 'wrap' }}>
            {
              games.map((game, index) => (
                <VerticalItem key={index} name={game.name} image={game.image} />
              ))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

Home.navigationOptions = navData => {

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
    bottom: '10%',
    left: '10%',
    width: '70%',
    zIndex: 3,
  },
  sliderNavigation: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '5%',
    left: '10%'
  },
  sliderNavigationButton: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.colorLight,
    marginRight: 5
  },
  navigationArrows: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  navigationArrowLeft: {
    width: '50%',
    height: '100%'
  },
  navigationArrowRight: {
    width: '50%',
    height: '100%'
  },


  content: {
    height: '60%',
    paddingHorizontal: 20
  },
  categoryHeader: {
    color: Colors.colorGreen,
    borderBottomColor: Colors.colorGreen,
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 10
  },
  contentItem: {
    width: '100%'
  },
  contentGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});

export default Home;