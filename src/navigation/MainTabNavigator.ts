import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/login/LoginScreen';
import {createStackNavigator} from 'react-navigation-stack';
import CreateAccountScreen from '../screens/login/CreateAccountScreen';

const MainTabNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    CreateAccount: {
      screen: CreateAccountScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default MainTabNavigator;
