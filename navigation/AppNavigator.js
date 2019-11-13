import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LocaleNavigator from "./LocaleNavigator";
import AuthNavigator from "./AuthNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    // Locale: LocaleNavigator,
    Main: MainTabNavigator
  })
);
