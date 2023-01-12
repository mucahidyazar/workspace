/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import { useSelector } from 'react-redux';

const Search = props => {

  const users = useSelector(state => state.auth.users);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={{width: '8%'}} name="search" size={20} />
        <Text 
          style={{width: '84%', fontSize: 20}}
          light
          onPress={() => props.navigation.navigate('AdvanceSearch')}
          name="Search" />
        <Icon style={{width: '8%'}} name="user-plus" size={20} />
      </View>
      <View style={styles.posts}>
        {
          users.map((user, index) => (
            <FlatList
              data={user.posts}
              numColumns={3}
              keyExtractor={item => item.id}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={(itemData) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{marginBottom: 1}}
                  onPress={() => props.navigation.navigate('Post', { post: itemData.item, user })}>
                  <Image
                    source={itemData.item.postImageUrl}
                    style={{
                      width: Dimensions.get('window').width / 3 - 1,
                      height: Dimensions.get('window').width / 3 - 1,
                    }} />
                </TouchableOpacity>
              )} />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default Search;