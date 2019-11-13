import LoginScreen from "../screens/Login/LoginScreen";
import { createStackNavigator } from "react-navigation";

const AuthStack = createStackNavigator({
  LoginScreen: LoginScreen
});

export default AuthStack;
