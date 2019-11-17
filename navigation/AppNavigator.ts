import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import LocaleNavigator from "./LocaleNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Locale: LocaleNavigator,
    Main: MainTabNavigator
  })
);
