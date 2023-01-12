/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { useSelector } from 'react-redux';

const Activity = props => {

  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <Text size={22} dark style={{paddingVertical: '3%'}}>Activity</Text>
      <ScrollView style={styles.suggestions}>
        <Text size={18} style={{paddingVertical: '3%'}}>Suggestions for you</Text>
        <View style={styles.suggestionAccounts}>
          {
            users.map((user, index) => (
              <View style={styles.suggestionAccount} key={index}>
                <Image source={user.profilePhoto} style={{
                  width: Dimensions.get('window').width / 100 * 15,
                  height: Dimensions.get('window').width / 100 * 15,
                  borderRadius: Dimensions.get('window').width / 100 * 7.5,
                }} />
                <View style={{width: '50%'}}>
                  <Text dark>{user.username}</Text>
                  <Text>{user.fullName}</Text>
                </View>
                <Button color name="Follow" style={{width: Dimensions.get('window').width / 100 * 20}} />
                <Icon name="close" size={16} />
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '3%',
  },
  suggestionAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: '2%',
  },

});

export default Activity;