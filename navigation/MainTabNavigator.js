import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import DemoScreen from "../screens/DemoScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Service"
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Demo: DemoScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links"
};

LinksStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack
});

tabNavigator.path = "";

export default tabNavigator;
