import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants";

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export const searchTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => (
    <Feather name="search" size={24} color={Colors.fontColor} />
  ),
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.contColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
