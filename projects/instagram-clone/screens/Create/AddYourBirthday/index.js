/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import IconF from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

const AddYourBirthday = props => {

  const [newAccountInfos, setNewAccountInfos] = useState(props.navigation.getParam('newAccountInfos'));

  useEffect(() => {
    setNewAccountInfos(prevState => ({
      ...prevState,
      birthday: "1991-01-01"
    }))
  }, [])

  return (
    //STEP 2 - ADD YOUR BIRTHDAY SCREEN
    <View style={styles.addYourBirthday}>
      <View style={styles.addYourBirthdayHeader}>
        <IconF name="cloud-meatball" size={30} />
        <IconF name="birthday-cake" size={100} style={{transform: [{rotateZ: '-15deg'}]}} />
        <IconF name="cloud-meatball" size={30} />
      </View>
      <Text center size={30}>Add Your Birthday</Text>
      <Text center>This won't be part of provide my birthday?</Text>
      <Text color="royalblue" center>Why do I need to provide my birthday?</Text>
      <View style={styles.dateContainer}>
      <Text>{moment(newAccountInfos.birthday).format('MMMM Do YYYY')}</Text>
      <Text>{moment().diff(newAccountInfos.birthday, 'years', false)} Years Old</Text>
      </View>
      <Text type='light' center>Use your own birthday, aeven if this account is for a business, a pet or something else.</Text>
      <Button color name="Next" onPress={() => props.navigation.navigate('Welcome', {newAccountInfos})} />
        <View style={{position: 'relative', width: '100%', alignItems: 'center'}}>
          <DatePicker
            style={{width: Dimensions.get('window').width / 3 * 2}}
            date={newAccountInfos.birthday}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                borderWidth: 1,
                borderColor: 'black',
              },
              dateInput: {
                borderWidth: 1,
                borderColor: 'black',
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(myDate) => setNewAccountInfos(prevState => ({
              ...prevState,
              birthday: myDate
            }))}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  //STEP 2 - ADD YOUR BIRTHDAY
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  addYourBirthday: {
    paddingHorizontal: '5%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  addYourBirthdayHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '10%',
    paddingHorizontal: '3%',
  },
});

export default AddYourBirthday;