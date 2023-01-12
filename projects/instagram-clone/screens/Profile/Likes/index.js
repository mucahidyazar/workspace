/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Likes = props => {

  const likes = props.navigation.getParam('likes');
  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <View style={styles.drawer}>
        <Icon
          name="ios-arrow-round-back"
          size={40}
          style={{fontWeight: 'bold', marginRight: '3%'}}
          onPress={() => props.navigation.goBack()} />
        <Text dark size={18}>Likes</Text>
      </View>
      <View style={styles.header}>
        <Icon
          style={{width: '5%'}}
          name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
          size={20} />
        <TextInput style={{width: '95%', fontSize: 16}} placeholder="Search" />
      </View>
      <View style={styles.likedBy}>
        <FlatList
          data={likes}
          keyExtractor={item => item.date}
          renderItem={(itemData) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.user}
              onPress={() => props.navigation.navigate('Profile', {user: users[itemData.item.userId - 1]})}>
              <View style={styles.userImageContainer}>
                <Image style={styles.userImage} source={users[itemData.item.userId - 1].profilePhoto} />
              </View>
              <Text>{users[itemData.item.userId - 1].username}</Text>
            </TouchableOpacity>
          )} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '3%',
  },
  container: {
    height: '100%',
    paddingHorizontal: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 5,
  },
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

export default Likes;