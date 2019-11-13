import AuthScreen from "../screens/AuthScreen";
import { createStackNavigator } from "react-navigation";

const AuthStack = createStackNavigator({
  Auth: AuthScreen
});

export default AuthStack;
