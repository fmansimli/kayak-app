import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import CodePush from "../components/codepush/CodePush";
import { MyScreenProps } from "../types/types";

const UpdateScreen: FC<MyScreenProps> = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is update Screen!</Text>
      <CodePush />
    </View>
  );
};

export const updateOptions: NativeStackNavigationOptions = {};

export default UpdateScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.fontColor,
    fontFamily: Fonts.fontBold,
    textAlign: "center",
    padding: 50,
    fontSize: 16,
  },
});
