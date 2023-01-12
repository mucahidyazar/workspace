/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Text from '../../../../components/Text';
import { useSelector } from 'react-redux';

const MessageRequestDetail = props => {

  const users = useSelector(state => state.auth.users);
  const message = props.navigation.getParam('message');

  const user = users[message.from - 1];

  return (
    <View style={styles.container}>
        <View style={styles.messageBox}>
          <FlatList
            keyExtractor={item => item.id}
            inverted
            data={message.messages}
            renderItem={itemData => (
              <View style={styles.message}>
                <Text light center style={{marginVertical: '5%'}}>Today {itemData.item.date}PM</Text>
                <View style={styles.messageContent}>
                  { itemData.item.userId === 1 ? null : <Image source={users[itemData.item.userId - 1].profilePhoto} style={styles.profilePhoto} />}
                  <View style={itemData.item.userId === 1 ? styles.messageYourself : styles.messageTheirselves}>
                    <Text style={styles.messageText} name={itemData.item.message} />
                  </View>
                </View>
              </View>
            )} />
            
            {
              message.isRequest
              ?
              <View style={{height: '30%', justifyContent: 'space-evenly'}}>
                <Text center size={18}><Text dark name={user.username} /> wants to send you a message.</Text>
                <Text center>{user.followers.length} followers {user.posts.length} posts</Text>
                <Text center light>Do you want to let {user.username} send you messages from now on? They'll only know you've seen their request if you choose Accept</Text>
                <View style={styles.requestButtons}>
                  <Button name="Block" style={{fontSize: 20, color: 'red'}} />
                  <Button name="Delete" style={{fontSize: 20, color: 'red'}} />
                  <Button name="Accept" style={{fontSize: 20}} />
                </View>
              </View>
              :
              <View style={styles.footer}>
                <View style={styles.cameraIconContainer}>
                  <Icon style={styles.cameraIcon} name={Platform.OS === 'android' ? 'ios-camera' : 'md-camera'} />
                </View>
                <View style={styles.inputContainer}>
                  <Input placeholder="Message" />
                </View>
                <View style={styles.footerIconGroup}>
                  <Icon style={styles.footerIcon} name={Platform.OS === 'android' ? 'ios-mic' : 'md-mic'} size={30} />
                  <Icon style={styles.footerIcon} name={Platform.OS === 'android' ? 'ios-film' : 'md-film'} size={30} />
                </View>
              </View>
            }

        </View>
    </View>
  )
}

MessageRequestDetail.navigationOptions = navData => {

  const message = navData.navigation.getParam('message');

  return {
    headerTitle: () => (
      <View style={styles.headerTitleContainer}>
        <Image source={message.profilePhoto} style={styles.headerTitleImage} />
        <View style={styles.headerTitleBody}>
          <Text dark name={message.username} />
          <Text light name={message.fullName} />
        </View>
      </View>
    ),
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
    ),
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    flex: 1,
  },
  messageBox: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  message: {
    marginVertical: '3%',
  },
  messageContent: {
    flexDirection: 'row',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: '5%',
  },
  messageText: {
    fontSize: 18,
  },
  messageYourself: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },

  requestButtons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  //HEADER
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  headerTitleBody: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 15
  },



  //FOOTER
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIconContainer: {
    width: '10%',
    height: Dimensions.get('window').width / 100 * 10,
    borderRadius: Dimensions.get('window').width / 100 * 5,
    backgroundColor: 'royalblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    color: 'white',
    fontSize: 25,
  },
  inputContainer: {
    width: '60%',
  },
  footerIconGroup: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    width: '50%',
    textAlign: 'center',
  },
});

export default MessageRequestDetail;