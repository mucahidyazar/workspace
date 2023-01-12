import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import BodyText from '../../components/BodyText';
import MainButton from '../../components/MainButton';
import Colors from '../../constants/colors';


const GameOverScreen = ({ userNumber, roundsNumber, onRestart }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <BodyText>The Game is Over!</BodyText>
        <View style={styles.imageContainer}>
          <Image
            //source={require('../../../assets/images/original.png')}
            source={{ uri: 'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg' }}
            style={styles.image}
            resizeMode="cover"
            fadeDuration={1000} />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>Your phone needed
          <Text style={styles.highlight}> {roundsNumber} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * .7,
    height: Dimensions.get('window').width * .7,
    borderRadius: Dimensions.get('window').width * .35,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    margin: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans'
  }
});

export default GameOverScreen;