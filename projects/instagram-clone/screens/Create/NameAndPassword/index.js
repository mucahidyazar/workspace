/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import { useDispatch } from 'react-redux';
import {
  addUser,
} from '../../../store/actions/authActions';

const NameAndPassword = props => {

  const [newAccountInfos, setNewAccountInfos] = useState(props.navigation.getParam('newAccountInfos'));

  const isTheFormFull = () => {
    if(newAccountInfos.password && newAccountInfos.fullName) {
      return true;
    } else {
      return false;
    }
  }

  const dispatch = useDispatch();

  return (
    //STEP 1 - NAME and PASSWORD SCREEN
    <View style={styles.container}>
      <View style={styles.formNameAndPassword}>
        <Text style={styles.formNameAndPasswordTitle}>Name and Password</Text>
        <Input 
          placeholder="Full name" 
          onChangeText={text => setNewAccountInfos(prevState => ({ ...prevState, fullName: text }))}
          value={newAccountInfos.fullName} />
        <Input 
          secureTextEntry={true}
          placeholder="Password" 
          onChangeText={text => setNewAccountInfos(prevState => ({ ...prevState, password: text }))}
          value={newAccountInfos.password} />
        <View style={styles.savePasswordContainer}>
          <Icon name="checksquare" color="royalblue" style={{ padding: 10 }} size={20} />
          <Text name="Save Password" />
        </View>
        <Button color style={{ marginVertical: '2%' }} name='Continue and Sync Contacts' onPress={() => {
          if(isTheFormFull() === true) {
            dispatch(addUser(newAccountInfos));
            props.navigation.navigate('AddYourBirthday', {newAccountInfos});
          }
        }} />
        <Button style={{ marginVertical: '2%' }} name='Continue without Syncing Contacts' onPress={() => isTheFormFull() === true ? props.navigation.navigate('AddYourBirthday', {newAccountInfos}) : console.log('Falseeeeee')} />
      </View>
      <View style={styles.nameAndPasswordFooter}>
        <Text light name="Your contaacts will be periodically synced and stored on instagram servers to help you and other find friends and to help us provide a better service. To remove contacts, go to settings and disconnect.">
          <Text dark name="Learn More." />
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // STEP 1 - NAME AND PASSWORD
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  formNameAndPassword: {
    width: '100%',
    height: '60%',
  },
  formNameAndPasswordTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  savePasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  nameAndPasswordFooter: {
    paddingVertical: '10%',
  },
});

export default NameAndPassword;