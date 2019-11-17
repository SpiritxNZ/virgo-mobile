import LocaleScreen from "../screens/Locale/LocaleScreen";
import { createStackNavigator } from "react-navigation";

const LocaleNavigator = createStackNavigator({
  LocaleScreen: {
    screen: LocaleScreen,
    navigationOptions: { header: null }
  }
});

export default LocaleNavigator;
