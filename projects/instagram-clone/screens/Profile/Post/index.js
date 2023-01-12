/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = props => {

  const post = props.navigation.getParam('post');
  const user = props.navigation.getParam('user');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerProfileImage} source={user.profilePhoto} />
        <Text style={styles.headerText}>{user.username}</Text>
        <Icon style={styles.headerIcon} name={Platform.OS === 'android' ? 'md-more' : 'ios-more'} />
      </View>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={post.postImageUrl} />
        </View>
        <View style={styles.options}>
          <View style={styles.optionsLeft}>
            <Icon style={styles.optionIcon} name={Platform.OS === 'android' ? 'md-heart' : 'ios-heart'} />
            <Icon style={styles.optionIcon} name={Platform.OS === 'android' ? 'md-text' : 'ios-text'} />
            <Icon style={styles.optionIcon} name={Platform.OS === 'android' ? 'md-send' : 'ios-more'} />
          </View>
          <Icon style={styles.optionIcon} name={Platform.OS === 'android' ? 'md-save' : 'ios-save'} />
        </View>
        <Text
          dark
          onPress={() => props.navigation.navigate('Likes', {likes: post.likes})}
          style={styles.postLiked}>{post.likes.length} like</Text>
        <Text size={10} light style={styles.postDate}>{moment(post.postDate).startOf('hour').fromNow()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    height: '10%',
  },
  headerProfileImage: {
    width: Dimensions.get('window').width / 14,
    height: Dimensions.get('window').width / 14,
    borderRadius: Dimensions.get('window').width / 28,
  },
  headerText: {
    width: '85%',
  },
  headerIcon: {
    fontSize: 20,
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  optionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '2%',
    width: '30%',
    justifyContent: 'space-between',
  },
  optionIcon: {
    fontSize: 30,
  },
  postLiked: {
    paddingHorizontal: '4%',
  },
  postDate: {
    paddingHorizontal: '4.5%',
  },
});

Post.navigationOptions = navData => {

  return {
    headerTitle: 'Post Detail',
    headerTransparent: false,
    headerLeft: () => (
        <Icon
          name="ios-arrow-round-back"
          size={40}
          style={{fontWeight: 'bold', marginLeft: 20}}
          onPress={() => navData.navigation.goBack()} />
    ),
  };
};

export default Post;