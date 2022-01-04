import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import UpdateScreen, { updateOptions } from "../../screens/UpdateScreen";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FirstStack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <FirstStack.Navigator screenOptions={settingsScreenOptions}>
      <FirstStack.Screen
        name="Update"
        component={UpdateScreen}
        options={updateOptions}
      />
    </FirstStack.Navigator>
  );
};

const settingsScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.headerColor,
  },
};

export const settingsOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => (
    <Ionicons name="ios-settings-outline" size={24} color="black" />
  ),
};

export default SettingsNavigator;
