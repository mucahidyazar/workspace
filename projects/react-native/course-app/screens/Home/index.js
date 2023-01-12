import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Categories from '../../components/Categories';

const Home = props => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('../../assets/images/menu.png')} />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.headerRight}>
            <Image
              source={require('../../assets/images/Ellipse5.png')}
              style={styles.headerRightImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Hey Alex,</Text>
          <Text style={styles.headerSubTitle}>Find a course you want to learn</Text>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search for anything</Text>
        </View>
        <Categories navigation={props.navigation} />
      </SafeAreaView>
    </ScrollView>
  )
}

Home.navigationOptions = navData => {

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
    marginTop: 50
  },
  headerRight: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20
  },
  headerRightImage: {
    width: 40,
    height: 40
  },
  headerContent: {
    paddingVertical: 30
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerSubTitle: {
    fontSize: 17,
    marginTop: 10,
    color: 'grey'
  },
  searchContainer: {
    backgroundColor: 'rgba(0,0,0, 0.03)',
    padding: 10,
    borderRadius: 20
  },
  searchText: {
    fontSize: 13,
    color: 'grey'
  }
});

export default Home;