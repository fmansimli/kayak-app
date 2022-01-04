import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";

type BackProps = {
  style?: object;
};

const BackButton: FC<BackProps> = (props) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[styles.comp, props.style]}
      onPress={() => nav.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color={Colors.fontBoldColor} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  comp: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    top: 40,
    zIndex: 1,
  },
});
