import { AntDesign } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors, Fonts } from "../../constants";
import { MyScreenProps } from "../../types/types";

const CartScreen: FC<MyScreenProps> = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>Cart Screen</Text>
    </SafeAreaView>
  );
};

export const cartTabOptions: BottomTabNavigationOptions = {
  tabBarIcon: () => <AntDesign name="shoppingcart" size={24} color="black" />,
};

export default CartScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.contColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
