/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import { useSelector } from 'react-redux';

const Home = props => {

  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text center size={25}>Welcome to Instagram</Text>
        <Text center size={15}>Follow people to start seeing the photos and videos they share</Text>      
      </View>
      <ScrollView horizontal={true} style={styles.cards}>
        {
          users.map((user, index) => (
            <TouchableOpacity 
              activeOpacity={0.7}
              style={styles.card}
              key={index}
              onPress={() => {
                props.navigation.navigate('Profile', { user });
              }}>
              <Image style={styles.profilePhoto} source={user.profilePhoto} />
              <View style={styles.nameContainer}>
                <Text name={user.username} />
                <Text light name={user.fullName} />
              </View>
              <View style={styles.album}>
                {
                  user.private
                  ? user.album.map((image, index) => (
                      <Image key={index} style={styles.albumPhoto} source={image} />
                    ))
                  : <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Icon name="lock" size={25} />
                      <Text>This account is Private</Text>
                    </View>
                }
              </View>
              <View style={{padding: '10%'}}>
                <Button color name="Follow" style={{width: 100, height: 40}} />
              </View>
              <Icon name="close" style={styles.icon} />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

Home.navigationOptions = navData => {

  return {
    headerTransparent: false,
    headerTitle: "Instagram",
    headerLeft: () => <Icon name="camera" size={30} style={{paddingHorizontal: 20}} />,
    headerRight: () => (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navData.navigation.navigate('Messages')}>
        <Icon
          name="send-o"
          size={30} style={{paddingHorizontal: 20}} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: '10%', 
    height: '35%',
    justifyContent: 'center',
  },
  cards: {
    height: '65%',
    width: '100%',
  },
  card: {
    alignItems: 'center',
    position: 'relative',
    width: Dimensions.get('window').width / 100 * 75,
    paddingHorizontal: '2.5%',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameContainer: {
    paddingVertical: '5%',
  },
  album: {
    flexDirection: 'row',
    paddingBottom: '20%',
    flex: 1,
  },
  albumPhoto: {
    width: '33%',
    height: Dimensions.get('window').width / 5,
    marginRight: 1,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
});

export default Home;