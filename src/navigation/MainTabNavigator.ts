import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/login/LoginScreen';
import {createStackNavigator} from 'react-navigation-stack';

const MainTabNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {header: null},
  },
  Links: {
    screen: LinksScreen,
    navigationOptions: {header: null},
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {header: null},
  },
});

export default MainTabNavigator;
