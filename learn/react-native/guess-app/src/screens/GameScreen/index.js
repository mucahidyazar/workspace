import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../../components/Number';
import BodyText from '../../components/BodyText';
import Card from '../../components/Card';
import MainButton from '../../components/MainButton';
import DefaultStyles from '../../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (guess, index, pastGuesses) => (
  <View key={index} style={styles.listItem}>
    <BodyText>#{pastGuesses.length - index}</BodyText>
    <BodyText>{guess}</BodyText>
  </View>
)

const GameScreen = ({ userChoice, onGameOver }) => {

  const initialGuess = generateRandomBetween(1, 1000, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  const currentLow = useRef(1);
  const currentHigh = useRef(1000);
  const nextGuessHandler = direction => {
    if ((direction === "lower" && currentGuess < userChoice) || (direction === "greater" && currentGuess > userChoice)) {
      Alert.alert(
        'Don\'t lie!',
        'You know that this is wrong...',
        [{ text: 'Sorry!', style: 'cancel' }]
      )
      return;
    } else if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'greater') {
      currentLow.current = currentGuess;
    } else {
      return;
    }
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setPassGuesses(prevState => [nextNumber, ...prevState])
  }

  const [pastGuesses, setPassGuesses] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]); //Herhangi birisi degisse yeterli


  const [avaiableDeviceHeight, setAvaiableDeviceHeight] = useState(Dimensions.get('window').height);
  useEffect(() => {
    const updateLayout = () => {
      setAvaiableDeviceHeight(Dimensions.get('window').height);
    }
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  let gameControls;
  if (avaiableDeviceHeight < 500) {
    gameControls = (
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Opponent's Text</Text>

        <View style={styles.controls}>
          <MainButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <NumberContainer children={currentGuess} />
          <MainButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>

        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) => (renderListItem(guess, index, pastGuesses)))}
          </ScrollView>
        </View>
      </View>
    )
  } else {
    gameControls = (
      <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Opponent's Text</Text>
        <NumberContainer children={currentGuess} />
        <Card style={{ ...styles.buttonContainer, marginTop: (avaiableDeviceHeight > 600 ? 20 : 5) }}>
          <MainButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <MainButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </Card>
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess, index) => (renderListItem(guess, index, pastGuesses)))}
          </ScrollView>
        </View>
      </View>
    )
  }

  return gameControls;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
    maxWidth: '90%'
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%'
  },
  listContainer: {
    flex: 1,
    width: '80%'
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
})

export default GameScreen;