import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Container from '../../components/Container';
import TextXLL from '../../components/Textes/TextXLL'
import TextS from '../../components/Textes/TextS'
import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';

const Profile = props => (
  <Container style={{
    paddingHorizontal: 20
  }}>
    <View style={styles.profileHeader}>
      <View style={{ width: 80, height: 80 }}>
        <Image source={require('../../assets/images/profileImage.png')} style={{ width: '100%', height: '100%' }} />
        <View style={styles.activeDeactive}></View>
      </View>
      <TextXLL style={{ color: Colors.colorGreen }}>Nick R. Bocker</TextXLL>
      <TextS>nickbocker40@gmail.com</TextS>

    </View>
    <View style={styles.profileForm}>

      <View style={styles.formGroup}>
        <TextS style={styles.label}>Email adress</TextS>
        <TextInput
          placeholder="Your email"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={() => { }} />
      </View>

      <View style={styles.formGroup}>
        <TextS style={styles.label}>Email adress</TextS>
        <TextInput
          placeholder="Your email"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={() => { }} />
      </View>

      <View style={styles.formGroup}>
        <TextS style={styles.label}>Email adress</TextS>
        <TextInput
          placeholder="Your email"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={() => { }} />
      </View>

      <View style={styles.formGroup}>
        <TextS style={styles.label}>Email adress</TextS>
        <TextInput
          placeholder="Your email"
          placeholderTextColor={Colors.colorLight}
          style={styles.input}
          onChangeText={() => { }} />
      </View>

      <TouchableOpacity>
        <Button
          style={styles.button}
          color={Colors.colorGreen}
          title='Save'
          onPress={() => { }} />
      </TouchableOpacity>
    </View>
  </Container>
);

Profile.navigationOptions = navData => {

  return {
    headerTransparent: false,
    cardShadowEnabled: true,
    headerTitle: 'Profile',
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
  profileHeader: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '30%',
    position: 'relative'
  },
  activeDeactive: {
    position: 'absolute',
    bottom: '10%',
    right: 0,
    backgroundColor: Colors.colorGreen,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.colorLight
  },
  profileForm: {
    width: '100%',
    height: '65%',
    justifyContent: 'space-evenly'
  },
  label: {
    color: Colors.colorGreen
  },
  input: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.colorGreen
  },
});

export default Profile;