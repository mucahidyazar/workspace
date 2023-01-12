/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from '../../components/Modal';

const Introduction = props => {

  const [languageModal, setLanguageModal] = useState(false);

  const setLanguageModalHandler = () => {
    setLanguageModal(false);
  }

  const languages = [
    {
      code: 'en',
      language: 'english',
    },
    {
      code: 'tr',
      language: 'turkish',
    },
    {
      code: 'fr',
      language: 'french',
    }
  ]

  const [language, setLanguage] = useState('en');

  return (
    <View style={styles.introduction}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerContainer} activeOpacity={0.8} onPress={() => setLanguageModal(!languageModal)}>
          <Text style={styles.header}>English (United States) <Icon name="down" /></Text>
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Instagram</Text>
          {props.children}
        </View>
        <TouchableOpacity style={styles.headerContainer} activeOpacity={0.8} onPress={() => console.log('1')}>
          <Text style={styles.header}>Instagram from Facebook</Text>
        </TouchableOpacity>
      </View >
      {
        languageModal
          ? <Modal onClick={setLanguageModalHandler}>
            <View style={styles.languageContainer}>
              <View style={styles.languageContent}>
                <View style={styles.languageTitle}><Text style={styles.languageTitleText}>Select your language</Text></View>
                <View style={styles.searchBox}>
                  <Icon style={styles.searchIcon} name="search1" size={18} />
                  <TextInput style={styles.searchInput} placeholder="Search" />
                </View>
                <ScrollView style={styles.langueageContainer}>
                  {
                    languages.map((lng, index) => (
                      lng.code === language
                        ? <TouchableOpacity onPress={() => setLanguage(lng.code)} key={index} activeOpacity={0.6}>
                          <View style={{ paddingVertical: 10, }}>
                            <Text style={{ fontSize: 20, textTransform: 'capitalize' }}>
                              {lng.language} <Icon name="check" color="royalblue" size={20} /></Text></View></TouchableOpacity>
                        : <TouchableOpacity onPress={() => setLanguage(lng.code)} key={index} activeOpacity={0.6}>
                          <View style={{ paddingVertical: 10, }}>
                            <Text style={{ fontSize: 20, textTransform: 'capitalize' }}>
                              {lng.language}</Text></View></TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
            </View>
          </Modal>
          : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  introduction: {
    flex: 1,
    position: 'relative',
  },
  container: {
    paddingHorizontal: '5%',
  },
  headerContainer: {
    width: '100%',
    height: '7.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'rgba(0,0,0,0.5)',
  },
  body: {
    height: '85%',
    justifyContent: 'center',
  },
  bodyTitle: {
    fontSize: 40,
    textAlign: 'center',
    height: '15%',
  },
  button: {
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
  },
  buttonCreate: {
    backgroundColor: 'royalblue',
    marginBottom: '5%',
  },
  buttonLogin: {
    color: 'royalblue',
    fontWeight: 'bold',
  },

  //Language Modal
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    padding: 10,
    flexGrow: 1,
  },
});

export default Introduction;