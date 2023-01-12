import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native';
import Item from './Item';

const Courses = props => {

  const item = props.navigation.getParam('item');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.headerLeft}
          onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.categoryName}>{item.categoryName}</Text>
        <TouchableOpacity
          style={styles.headerRight}
          activeOpacity={0.7}>
          <Image
            source={require('../../assets/images/options.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.courses}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={item => item.name}
        renderItem={itemData => (
          <Item item={itemData.item} navigation={props.navigation} />
        )}
      />
    </SafeAreaView>
  )
}

Courses.navigationOptions = navData => {
  return {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10
  },
  categoryName: {
    paddingVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Courses;