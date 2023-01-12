/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import { useSelector } from 'react-redux';

const Messages = props => {
  
  const userId = 2;
  const messages = props.navigation.getParam('requestMessages');
  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text light center>Requests aren't marked as seen until you accept them</Text>
        <Text center dark style={{color: 'royalblue'}}>Choose who can message you</Text>
      </View>
      <View style={styles.messages}>
        {
          messages.map((message, index) => (
            message.to === userId ? (
              <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.message} 
                key={index} 
                onPress={() => props.navigation.navigate('MessageDetail', {message})}>
                <Image 
                  source={users[userId - 1].profilePhoto}
                  style={{
                    width: Dimensions.get('window').width / 10 * 1.5,
                    height: Dimensions.get('window').width / 10 * 1.5,
                    borderRadius: Dimensions.get('window').width / 10 * 0.75,
                  }} />
                <View style={styles.messageBody}>
                  <Text name={users[message.from - 1].username} />
                  <Text light name={message.messages[message.messages.length - 1].message} />
                </View>
              </TouchableOpacity>
            ) : null
          ))
        }
      </View>
      <Button name="Delete All" style={styles.button} height='10%' />
    </View>
  )
}

Messages.navigationOptions = navData => {

  return {
    headerTitle: 'Message Requests',
    headerTransparent: false,
    headerLeft: () => (
      <Icon 
        name="ios-arrow-round-back"
        size={40}
        style={{fontWeight: 'bold', marginLeft: 20}}
        onPress={() => navData.navigation.goBack()} />
    ),
    headerRight: () => (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Icon name={Platform.OS === 'android' ? 'md-camera' : 'ios:camera'} size={30} style={{marginRight: 20}}  />
        <Icon name={Platform.OS === 'android' ? 'md-add' : 'ios:add'} size={30} style={{marginRight: 20}}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
  header:{
    height: '15%',
    justifyContent: 'space-around'
  },
  messages: {
    height: '75%',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  messageBody: {
    paddingHorizontal: '5%',
  },
  button: {
    textTransform: 'uppercase',
    color: 'red',
    fontSize:20,
    fontWeight: 'normal',
  },
});

export default Messages;