/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Platform, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import { useSelector } from 'react-redux';

const Profile = props => {

  const activeUserId = 1;
  const users = useSelector(state => state.auth.users);
  const user = props.navigation.getParam('user') ? props.navigation.getParam('user') : users[activeUserId - 1];

  useEffect(() => {
    props.navigation.setParams({
      user,
    });
  }, []);

  const [ activeProfileBar, setActiveProfileBar ] = useState('yourposts');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <Text dark>{user.username}</Text>
          <Icon
            name='ios-arrow-down'
            style={styles.headerProfileIcon}
            size={25} />
        </View>
        <Icon
          name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          size={25}
          onPress={() => {
            props.navigation.toggleDrawer({
              side: 'right',
              animated: true,
              to: 'closed',
            });
          }} />
      </View>

      <View style={styles.body}>
        <View style={styles.infoContainer}>
        <View style={styles.info}>
          <View style={styles.infoProfile}>
            <View style={styles.infoProfileIconContainer}>
              <Image style={styles.infoProfilePhoto} source={user && user.profilePhoto ? user.profilePhoto : require('../../assets/images/server/defaultProfile.png')} />
            </View>
            <Text dark style={styles.infoProfileText}>{user.username}</Text>
          </View>
          <View style={styles.infoCounts}>
            <TouchableOpacity activeOpacity={0.7} style={styles.infoPostsContainer}>
              <Text center dark>{user.posts.length}</Text>
              <Text center>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.infoFollowersContainer}
              onPress={() => props.navigation.navigate('Following', {activeTab: 'followers', user})}>
              <Text center dark>{user.followers.length}</Text>
              <Text center>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.infoFollowingContainer}
              onPress={() => props.navigation.navigate('Following', {activeTab: 'following', user})}>
              <Text center dark>{user.following.length}</Text>
              <Text center>Following</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.editProfileContainer}>
          <Text dark>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.posts}>
            <Icon
              style={ activeProfileBar === 'yourposts' ? {...styles.menuItem, ...styles.menuItemActive} : styles.menuItem }
              name={Platform.OS === 'android' ? 'md-grid' : 'ios-grid'}
              size={30}
              onPress={() => setActiveProfileBar('yourposts')} />
            <Icon
              style={ activeProfileBar === 'yourtagposts' ? {...styles.menuItem, ...styles.menuItemActive} : styles.menuItem }
              name={Platform.OS === 'android' ? 'md-bookmarks' : 'ios-bookmarks'}
              size={30}
              onPress={() => setActiveProfileBar('yourtagposts')} />
        </View>
        </View>
        {
          activeProfileBar === 'yourposts'
          ?
          (
            user.posts.length > 0
            ?
            <FlatList
              data={user.posts}
              keyExtractor={item => item.id}
              numColumns={3}
              columnWrapperStyle={{justifyContent:'space-between'}}
              renderItem={(itemData) => (
                <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate('Post', {post: itemData.item, user})}>
                  <Image style={styles.yourPostsPost} source={itemData.item.postImageUrl} />
                </TouchableOpacity>
              )} />
            :
            <View style={styles.yourEmptyPostsContainer}>
              <Text center size={30}>Profile</Text>
              <Text center light>When you share photos and videos, they'll appear on your profile.</Text>
              <Text center color="royalblue">Share your first photo or video</Text>
            </View>
          )
          :
          (
            user.tagPosts.length > 0
            ?
            <FlatList
              data={user.tagPosts}
              keyExtractor={item => item}
              numColumns={3}
              columnWrapperStyle={{justifyContent:'space-between'}}
              renderItem={(itemData) => (
                <TouchableOpacity activeOpacity={0.6}>
                  <Image style={styles.yourPostsPost} source={itemData.item} />
                </TouchableOpacity>
              )} />
            :
            <View style={styles.yourEmptyPostsContainer}>
              <Text center size={30}>Photos and Videos of You</Text>
              <Text center light>When people tag you in photos and videos, they'll appear here.</Text>
            </View>
          )
        }
      </View>
    </View>
  )
}

Profile.navigationOptions = navData => {

  const user = navData.navigation.getParam('user');

  return {
    drawerLabel: () => (
      <View style={styles.drawer} onPress={() => navData.navigation.navigate('Profile')}>
        <Text dark style={styles.drawerUsername}>mucahidyazar</Text>
      </View>
    ),
  }
}

const styles = StyleSheet.create({
  //HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    height: '8%',
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerProfileIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },


  body: {
    height: '92%',
  },
  infoContainer: {
    height: '40%',
    justifyContent: 'space-between',
  },
  //INFO
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  infoProfile: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoProfileIconContainer: {
    width: Dimensions.get('window').width / 100 * 20,
    height: Dimensions.get('window').width / 100 * 20,
    borderRadius: Dimensions.get('window').width / 100 * 10,
    overflow: 'hidden',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoProfilePhoto: {
    width: '100%',
    height: '100%',
  },
  infoProfileText: {
    paddingVertical: '5%',
  },
  infoCounts: {
    width: '70%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },


  //EDIT PROFILE BUTTON
  editProfileContainer: {
    alignItems: 'center',
    paddingVertical: '4%',
  },



  //POSTS HEADER
  posts: {
    flexDirection: 'row',
  },
  menuItem: {
    width: '50%',
    alignItems: 'center',
    padding: '3%',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.3)',
  },
  menuItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    color: 'rgba(0,0,0,1)',
  },
  yourPostsIcon: {

  },
  yourEmptyPostsContainer: {
    height: '25%',
    justifyContent: 'space-evenly',

  },
  yourPostsContainer: {
  },
  yourPostsPost: {
    width: Dimensions.get('window').width / 3.02,
    height: Dimensions.get('window').width / 3.02,
    marginBottom: Dimensions.get('window').width / 100 * 0.4,
  },

  drawer: {
    paddingHorizontal: '5%',
  },
  drawerUsername: {
    paddingVertical: '5%',
  },
});

export default Profile;