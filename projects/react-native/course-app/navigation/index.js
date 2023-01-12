import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//SCREENS
import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Course from '../screens/Course';

const CoursesAppNavigation = createStackNavigator({
  Home: Home,
  Courses: Courses,
  Course: Course,
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(CoursesAppNavigation);