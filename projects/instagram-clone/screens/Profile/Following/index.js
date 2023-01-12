/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const Following = props => {

  const users = useSelector(state => state.auth.users);
  const wantingTab = props.navigation.getParam('activeTab');
  const user = props.navigation.getParam('user');
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    setActiveTab(wantingTab);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={activeTab === 'followers' ? {...styles.headerItem, ...styles.headerItemActive} : styles.headerItem}
          onPress={() => setActiveTab('followers')}>
          <Text center>{user.followers.length} Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={activeTab === 'following' ? {...styles.headerItem, ...styles.headerItemActive} : styles.headerItem}
          onPress={() => setActiveTab('following')}>
          <Text center>{user.following.length}  Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {
          user.followers && user.followers.length > 0
          ||
          user.following && user.following.length > 0
          ?
          <FlatList
            data={activeTab === 'followers' ? user.followers : user.following}
            renderItem={itemData => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.user}
                onPress={() => props.navigation.navigate('Profile', {user: users[itemData.item.id - 1]})}>
                <View style={styles.userImageContainer}>
                  <Image style={styles.userImage} source={users[itemData.item.id - 1].profilePhoto} />
                </View>
                <Text>{users[itemData.item.id - 1].username}</Text>
              </TouchableOpacity>
            )} />
          :
          <View style={styles.contentNothing}>
            <View style={styles.followersIconContent}>
              <Icon
                name={Platform.OS === 'android' ? 'md-person-add' : 'ios-person-add'}
                style={styles.followersIcon}
                size={50} />
            </View>
            <Text size={25}>{activeTab === 'followers' ? 'Followers' : 'People Follow You'}</Text>
            <Text>
              {
                activeTab === 'followers'
                ? "You'll see all the people who follow you here."
                : "Once you follow people, you'll see them here."
              }
            </Text>
          </View>
        }
      </View>
    </View>
  );
};

Following.navigationOptions = navData => {
  
  return {
    headerTitle: 'mucahidyazar',
    headerTransparent: false,
  }
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItem: {
    width: '50%',
    paddingVertical: '3%',
  },
  headerItemActive: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  contentNothing: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 200,
  },
  followersIconContent: {
    width: '20%',
    height: Dimensions.get('window').width / 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: Dimensions.get('window').width / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  //Template User
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  userImageContainer: {
    width: '13%',
    height: Dimensions.get('window').width / 100 * 13,
    borderRadius: Dimensions.get('window').width / 2,
    overflow: 'hidden',
    marginRight: '3%',
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
});

export default Following;