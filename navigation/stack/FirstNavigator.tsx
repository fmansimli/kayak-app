import React from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen, { homeOptions } from "../../screens/HomeScreen";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants";

const FirstStack = createNativeStackNavigator();

const FirstNavigator = () => {
  return (
    <FirstStack.Navigator screenOptions={firstScreenOptions}>
      <FirstStack.Screen
        name="Home"
        component={HomeScreen}
        options={homeOptions}
      />
    </FirstStack.Navigator>
  );
};

const firstScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.greenColor,
  },
};

export const firstOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => <AntDesign name="home" size={24} color={Colors.fontColor} />,
};

export default FirstNavigator;
