import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import Container from '../../components/Container';
import TextL from '../../components/Textes/TextL'
import TextS from '../../components/Textes/TextS'
import Colors from '../../constants/Colors';

const Search = props => (
  <Container style={{ justifyContent: 'center' }}>
    <View style={styles.tutorialContainer}>
      <Image source={require('../../assets/images/profileImage.png')} />
      <View>
        <TextL style={{ textAlign: 'center' }}>Nick R. Bocker</TextL>
        <TextS style={{ textAlign: 'center' }}>Your account is ready! Tap on Get Started to proceed.</TextS>
      </View>
      <View style={{ width: '40%' }}>
        <Button
          title="Get Started"
          color={Colors.colorGreen}
          onPress={
            () => props.navigation.navigate('Home')
          } />
      </View>
    </View>
  </Container>
);

const styles = StyleSheet.create({
  tutorialContainer: {
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default Search;