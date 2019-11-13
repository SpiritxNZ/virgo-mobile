import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LocaleNavigator from "./LocaleNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Locale: LocaleNavigator,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator
  })
);
