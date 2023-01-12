/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import phoneCodes from '../../data/CountryCodes.json';
import users from '../../data/users';

const CreateNewAccount = props => {

  const [newAccountInfos, setNewAccountInfos] = useState();

  const [hasUserModal, setHasUserModal] = useState(false);
  const setHasUserModalHandler = () => {
    setHasUserModal(false);
  }

  const doesHaveTheUser = () => {
    if(newAccountInfos && newAccountInfos.email) {
      return users.some((user) => {
        return user.email === newAccountInfos.email
      });
    } else if (newAccountInfos && newAccountInfos.phone) {
      return users.some((user) => {
        return user.phone === newAccountInfos.phone
      });
    } else {
      return false;
    }
  };
  //If the database has the email or phone this Modal will shown
  const hasUser = (
    <Modal onClick={setHasUserModalHandler}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text center dark>This email is on another account</Text>
          </View>
          <View style={styles.modalDescription}>
            <Text center>You can log into the account assosiated with that email or you can use that email to make a new account</Text>
          </View>
          <Text center dark style={{ color: 'royalblue', paddingVertical: '10%' }} onPress={() => props.navigation.navigate('Login')}>Log in to Existing Account</Text>
        </View>
      </View>
    </Modal>
  )




  const [modal, setModal] = useState(false);
  const senModalHandler = () => {
    setModal(false);
  }
  const [code, setCode] = useState({
    name: "Afghanistan",
    dialCode: "+93",
    code: "AF",
  });

  let activeContent;
  const [activeTab, setActiveTab] = useState('phone');

  if (activeTab === 'phone') {
    activeContent = (
      <View style={styles.phoneContentTop}>
        <View style={styles.phoneContent}>
          <View style={styles.countryBody}>
            <Text light onPress={() => setModal(!modal)}>{code.code} {code.dialCode}</Text>
          </View>
          <View style={styles.phoneBody}>
            <Input
              onChangeText={text => setNewAccountInfos({
                dialCode: code.dialCode,
                phone: text,
                countryCode: code.code,
                countryName: code.name,
              })}
              value={newAccountInfos && newAccountInfos.phone ? newAccountInfos.phone: ''}
              placeholder="Phone"
              keyboardType={'numeric'}
              maxLength={10} />
            <Text style={styles.inputCleaner}>X</Text>
          </View>
        </View>
        <View style={styles.phoneNote}><Text light center>You may receive SMS updates from instagram and can opt out at any time</Text></View>
      </View>
    )
  } else if (activeTab === 'email') {
    activeContent = (
      <Input
        onChangeText={text => setNewAccountInfos({
          email: text,
        })}
        placeholder="Email"
        value={newAccountInfos && newAccountInfos.email ? newAccountInfos.email : ''} />
    )
  }

  

  const countryPhoneCodeModal = (
    <Modal onClick={senModalHandler}>
      <View style={styles.languageContainer}>
        <View style={styles.languageContent}>
          <View style={styles.languageTitle}><Text style={styles.languageTitleText}>Select your dial-code</Text></View>
          <Input icon="search" placeholder="Search" />
          <ScrollView style={styles.langueageContainer}>
            {
              phoneCodes.map((phoneCode, index) => (
                phoneCode.code === code.code
                  ? <TouchableOpacity onPress={() => setCode({
                    name: phoneCode.name,
                    dialCode: phoneCode.dial_code,
                    code: phoneCode.code
                  })} key={index} activeOpacity={0.6}>
                    <View style={{ paddingVertical: 10, }}>
                      <Text style={{ fontSize: 20, textTransform: 'capitalize', fontWeight: 'bold' }}>
                        {phoneCode.name} {phoneCode.dial_code}
                        <Icon name="check" color="royalblue" size={25} />
                      </Text>
                    </View></TouchableOpacity>
                  : <TouchableOpacity onPress={() => setCode({
                    name: phoneCode.name,
                    dialCode: phoneCode.dial_code,
                    code: phoneCode.code
                  })} key={index} activeOpacity={0.6}>
                    <View style={{ paddingVertical: 10, }}>
                      <Text style={{ fontSize: 20, textTransform: 'capitalize' }}>
                        {phoneCode.name} ({phoneCode.dial_code})</Text></View></TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    </Modal>
  )


  return (
    <View style={styles.createNewAccount}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={75} style={styles.userIcon} />
        </View>
        <View style={styles.createBody}>
          <View style={styles.createWay}>
            <Text
              style={{ ...styles.createWith, borderBottomWidth: activeTab === 'phone' ? 1 : 0, }}
              onPress={() => setActiveTab('phone')}>Phone</Text>
            <Text
              style={{ ...styles.createWith, borderBottomWidth: activeTab === 'email' ? 1 : 0, }}
              onPress={() => setActiveTab('email')}>Email</Text>
          </View>
          {activeContent}
          <Button name="Next" color onPress={doesHaveTheUser() === false ? () => props.navigation.navigate('NameAndPassword', { newAccountInfos }) : () => setHasUserModal(true)} />
        </View>
        <View style={styles.footer}>
          <Text light>Already have an account? <Text bold onPress={() => props.navigation.navigate('Login')}>Log in.</Text></Text>
        </View>
      </View>
      {modal ? countryPhoneCodeModal : null}
      {hasUserModal ? hasUser : null}
    </View>
  );
};

const styles = StyleSheet.create({
  createNewAccount: {
    position: 'relative',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
  },
  userIcon: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  //PHONE
  createBody: {
    height: '60%',
  },
  createWay: {
    flexDirection: 'row',
  },
  createWith: {
    width: '50%',
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },

  phoneContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  countryBody: {
    width: '25%',
  },
  phoneBody: {
    flexDirection: 'row',
    width: '75%',
    paddingVertical: 10,
  },
  inputCleaner: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
    width: '5%',
  },
  phoneNote: {
    paddingVertical: 20,
  },

  //EMAIL
  button: {
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
    backgroundColor: 'royalblue',
  },
  lightText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
  footer: {
    height: '5%',
  },



  //MODAL
  languageContainer: {
    alignItems: 'center',
  },
  languageContent: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  languageTitle: {
    paddingVertical: '5%',
  },
  languageTitleText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },


  //MODAL
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  modalTitle: {
    paddingVertical: 10,
  },
  modalDescription: {
    paddingVertical: 10,
  },
});

export default CreateNewAccount;