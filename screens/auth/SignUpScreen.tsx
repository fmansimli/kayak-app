import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyScreenProps } from "../../types/types";

const SignUpScreen: FC<MyScreenProps> = (props) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  );
};
export const signUpOptions: NativeStackNavigationOptions = {};

export default SignUpScreen;

const styles = StyleSheet.create({});
