import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";
import { useAuth } from "../../context/Auth";
import { Ionicons } from "@expo/vector-icons";

const GoogleLogin = () => {
  const { signInWithGoogle } = useAuth();

  const onPressHandler = () => {
    signInWithGoogle()
      .then(() => {})
      .catch((error: any) => {});
  };

  return (
    <TouchableOpacity
      style={styles.comp}
      activeOpacity={0.4}
      onPress={onPressHandler}
    >
      <Ionicons name="logo-google" size={24} color={Colors.whiteColor} />
      <Text style={styles.text}>Login With Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  comp: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#4082ED",
    borderRadius: 8,
    flexDirection: "row",
  },
  text: {
    color: Colors.whiteColor,
    fontFamily: Fonts.fontMedium,
    marginLeft: 20,
  },
});
