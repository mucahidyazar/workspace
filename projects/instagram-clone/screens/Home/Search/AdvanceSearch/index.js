/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const AdvanceSearch = props => {

  const [activeBar, setActiveBar] = useState('top');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={Platform.OS === 'android' ? 'md-arrow-round-back' : 'ios-arrow-round-back'}
          size={30}
          style={styles.headerIcon}
          onPress={() => props.navigation.goBack()} />
        <TextInput
          placeholder="Search"
          style={styles.headerInput} />
        <Icon
          name={Platform.OS === 'android' ? 'md-close' : 'ios-close'}
          size={20}
          style={styles.InputClearIcon} />
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={activeBar === 'top' ? {...styles.tabItem, ...styles.tabItemActive} : styles.tabItem}
          onPress={() => setActiveBar('top')}>
          <Text style={styles.tabItemText}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
          style={activeBar === 'accounts' ? {...styles.tabItem, ...styles.tabItemActive} : styles.tabItem}
          onPress={() => setActiveBar('accounts')}>
          <Text style={styles.tabItemText}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
          style={activeBar === 'tags' ? {...styles.tabItem, ...styles.tabItemActive} : styles.tabItem}
          onPress={() => setActiveBar('tags')}>
          <Text style={styles.tabItemText}>Tags</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.7}
          style={activeBar === 'places' ? {...styles.tabItem, ...styles.tabItemActive} : styles.tabItem}
          onPress={() => setActiveBar('places')}>
          <Text style={styles.tabItemText}>Places</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contents}>

      </View>
    </View>
  );
};

AdvanceSearch.navigationOptions = () => {

  return {
    headerLeft: () => null,
  };
};

const styles = StyleSheet.create({
  container: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    position: 'relative',
  },
  headerIcon: {
    width: '10%',
  },
  headerInput: {
    width: '90%',
  },
  InputClearIcon: {
    position:'absolute',
    top: '25%',
    right: '5%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    paddingVertical: '3%',
  },
  tabItemActive: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  tabItemText: {
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default AdvanceSearch;