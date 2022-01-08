import React from "react";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../../constants";
import SignInScreen, { signInOptions } from "../../screens/auth/SignInScreen";
import SignUpScreen, { signUpOptions } from "../../screens/auth/SignUpScreen";

const FirstStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <FirstStack.Navigator screenOptions={authScreenOptions}>
      <FirstStack.Screen
        name="Login"
        component={SignInScreen}
        options={signInOptions}
      />
      <FirstStack.Screen
        name="Register"
        component={SignUpScreen}
        options={signUpOptions}
      />
    </FirstStack.Navigator>
  );
};

const authScreenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.greenColor,
  },
  headerShown: false,
};

export const authOptions: DrawerNavigationOptions = {
  drawerIcon: () => (
    <AntDesign name="login" size={24} color={Colors.fontColor} />
  ),
  title: "Login",
};

export default AuthNavigator;
