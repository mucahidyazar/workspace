import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const Course = props => {

  const course = props.navigation.getParam('course');

  return (
    <View style={{
      flex: 1,
      position: 'relative',
      backgroundColor: '#F5F4EF'
    }}>
      <View style={styles.backgroundContainer}>
        <View style={styles.background}>
          <Image style={styles.backgroundImage} source={require('../../assets/images/course.png')} />
        </View>
      </View>

      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerLeft}
            onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../../assets/images/back.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerRight}
            activeOpacity={0.7}>
            <Image
              source={require('../../assets/images/options.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.course}>
          <Text style={styles.courseType}>Bestseller</Text>
          <Text style={styles.courseName}>Design Thinking</Text>
          <View style={styles.courseCounter}>
            <View style={styles.courseUsers}>
              <Text style={styles.courseUsersCount}>18000</Text>
            </View>
            <View style={styles.coursePoint}>
              <Text style={styles.coursePointCount}>5000</Text>
            </View>
          </View>
          <View style={styles.coursePrices}>
            <Text style={styles.courseTotal}>$50</Text>
            <Text style={styles.coursePrice}>$70</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Course Content</Text>
          <View style={styles.contentCourses}>
            <FlatList
              data={course.content}
              keyExtractor={(course) => course.lessonName}
              renderItem={(itemData) => (
                <View style={styles.contentCourse}>
                  <Text style={styles.courseLength}>0{itemData.index + 1}</Text>
                  <View style={styles.courseContent}>
                    <Text style={styles.courseTime}>{itemData.item.time}</Text>
                    <Text style={styles.courseTitle}>{itemData.item.lessonName}</Text>
                  </View>
                  <View style={styles.courseButton}>
                    <Text style={styles.courseButtonIcon}>></Text>
                  </View>
                </View>
              )} />



          </View>
        </View>

        <View style={styles.courseBuy}>
          <TouchableOpacity activeOpacity={0.7} style={styles.courseBuyShop}><Text style={styles.courseBuyShopText}>#</Text></TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.courseBuyButton}><Text style={styles.courseBuyButtonText}>Buy Now</Text></TouchableOpacity>
        </View>

      </SafeAreaView>
    </View>

  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: 20
  },


  course: {
    paddingHorizontal: 20
  },
  courseType: {
    backgroundColor: '#FFD073',
    width: '25%',
    padding: 4,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    textTransform: 'uppercase',
    fontSize: 10
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  courseCounter: {
    flexDirection: 'row'
  },
  courseUsers: {
    marginRight: 20
  },
  courseUsersCount: {
    fontSize: 10,
    color: 'grey'
  },
  coursePointCount: {
    fontSize: 10,
    color: 'grey'
  },

  coursePrices: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30
  },
  courseTotal: {
    marginRight: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  coursePrice: {
    color: 'grey',
    textDecorationLine: 'line-through',
    fontSize: 10
  },

  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  contentTitle: {
    paddingVertical: 20,
    fontWeight: 'bold'
  },
  contentCourses: {
    overflow: 'hidden',
    height: 220
  },
  contentCourse: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  courseLength: {
    fontSize: 22,
    color: 'rgba(0,0,0, 0.2)'
  },
  courseContent: {

  },
  courseTime: {
    fontSize: 10,
    color: 'rgba(0,0,0, 0.5)'
  },
  courseTitle: {
    minWidth: '70%',
    fontSize: 13
  },
  courseButton: {
    backgroundColor: '#49CC96',
    width: 34,
    height: 34,
    borderRadius: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  courseButtonIcon: {
    color: '#ffffff'
  },

  courseBuy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  courseBuyShop: {
    backgroundColor: 'rgba(255, 102, 112, 0.3)',
    minWidth: '14%',
    borderRadius: 20,
    padding: 10
  },
  courseBuyShopText: {
    color: '#FF6670',
    textAlign: 'center'
  },
  courseBuyButton: {
    padding: 10,
    backgroundColor: '#6E8AFA',
    minWidth: '70%',
    borderRadius: 20
  },
  courseBuyButtonText: {
    color: '#ffffff',
    textAlign: 'center'
  },



  backgroundContainer: {
    width: 280,
    height: '100%',
    position: 'absolute',
    top: 70,
    right: 0
  },
  background: {
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '70%'
  }
});

export default Course;