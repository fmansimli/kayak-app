import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts } from "../constants";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const HomeScreen: FC = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

export const homeOptions: NativeStackNavigationOptions = {
  animation: "slide_from_right",
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.contColor,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.fontColor,
    fontFamily: Fonts.fontBold,
    textAlign: "center",
    padding: 50,
    fontSize: 16,
  },
});
