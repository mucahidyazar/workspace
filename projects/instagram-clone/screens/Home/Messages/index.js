/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import { useSelector } from 'react-redux';

const Messages = props => {

  const userId = 2;
  const users = useSelector(state => state.auth.users);
  const allMessages = useSelector(state => state.auth.messages);
  const userMessages = allMessages.filter((message) => message.to === userId);
  const normalMessages = userMessages.filter(message => message.isRequest === false);
  const requestMessages = userMessages.filter(message => message.isRequest === true);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.header}>
          <Icon name={Platform.OS === 'android' ? 'md-search' : 'ios-search'} size={25} color="rgba(0,0,0,0.5)" />
          <Text style={{marginLeft: 10, color: 'rgba(0,0,0,0.5)', fontSize: 20}}>Search</Text>
      </TouchableOpacity>
      <View style={{paddingVertical: '5%', height: '10%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text name="Messages" dark size={18} />
        <Text 
          dark 
          size={18} 
          style={{color: 'royalblue'}}
          onPress={() => props.navigation.navigate('MessageRequests', {requestMessages})} >{requestMessages.length} Requests</Text>
      </View>

      {
        userMessages ?
        <View style={styles.messages}>
          {
            normalMessages.map((message, index) => (
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
        :
        <View style={styles.messagesBody}>
          <View style={styles.iconContainer}>
            <Icon name={Platform.OS === 'android' ? 'md-send' : 'ios-send'} size={75} style={styles.iconself} />
          </View>
          <Text center name="Intagram Direct" size={30} />
          <Text light center name="Send private photos, videos and messages to a friend or group" size={15} />
          <Button name="Send Message" />
        </View>
      }

      <TouchableOpacity activeOpacity={0.7} style={styles.footer}>
        <Icon name={Platform.OS === 'android' ? 'md-camera' : 'ios-camera'} size={30} style={{color: 'royalblue'}} />
        <Text name="Camera" style={{paddingHorizontal: 10, color: 'royalblue', fontWeight: 'bold'}} />
      </TouchableOpacity>
    </View>
  )
}

Messages.navigationOptions = navData => {

  return {
    headerTitle: 'Direct',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '5%',
  },

  

  //NORMAL MESSAGES
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



  //REQUEST MESSAGES
  messagesBody: {
    alignItems: 'center',
    height: '75%',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    borderWidth: 2,
    borderColor: 'black',
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconself: {
    transform: [{ rotateZ: "-30deg" }]
  },
  footer: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Messages;