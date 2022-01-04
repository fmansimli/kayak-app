import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import FirstNavigator, { firstOptions } from "../stack/FirstNavigator";
import SettingsNavigator, { settingsOptions } from "../stack/SettingsNavigator";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { Colors, Fonts } from "../../constants";
import ProductSearchScreen, {
  searchTabOptions,
} from "../../screens/search/SearchScreen";
import CartScreen, { cartTabOptions } from "../../screens/cart/CartScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="First"
        component={FirstNavigator}
        options={firstOptions}
      />
      <Tab.Screen
        name="Search"
        component={ProductSearchScreen}
        options={searchTabOptions}
      />
      <Tab.Screen name="Cart" component={CartScreen} options={cartTabOptions} />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={settingsOptions}
      />
    </Tab.Navigator>
  );
};

const tabScreenOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.headerColor,
  },
  tabBarStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 62,
  },
  tabBarItemStyle: {
    padding: 5,
  },
  headerTitleStyle: {
    fontFamily: Fonts.fontMedium,
  },
  tabBarLabelStyle: {
    fontFamily: Fonts.fontBold,
  },
  headerShown: false,
};

export const tabOptions: DrawerNavigationOptions = {
  drawerIcon: () => <AntDesign name="login" size={24} color="#79807f" />,
  headerShown: false,
  title: "Home",
};

export default TabNavigator;
