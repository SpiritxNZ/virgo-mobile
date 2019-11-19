import LocaleScreen from '../screens/locale/LocaleScreen';
import {createStackNavigator} from 'react-navigation-stack';

const LocaleNavigator = createStackNavigator({
  LocaleScreen: {
    screen: LocaleScreen,
    navigationOptions: {header: null},
  },
});

export default LocaleNavigator;
