import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";
import { useAuth } from "../../context/Auth";
import { FontAwesome5 } from "@expo/vector-icons";

const FacebookLogin = () => {
  const {signInWithFacebook} = useAuth();

  const onPressHandler = () => {
    signInWithFacebook()
      .then(() => {})
      .catch((error: any) => {});
  };

  return (
    <TouchableOpacity
      style={styles.comp}
      activeOpacity={0.4}
      onPress={onPressHandler}
    >
      <FontAwesome5 name="facebook" size={24} color="#4082ED" />
      <Text style={styles.text}>Login With Facebook</Text>
    </TouchableOpacity>
  );
};

export default FacebookLogin;

const styles = StyleSheet.create({
  comp: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: Colors.delColor,
    borderRadius: 8,
    flexDirection: "row",
    marginVertical: 8,
  },
  text: {
    color: Colors.whiteColor,
    fontFamily: Fonts.fontMedium,
    marginLeft: 20,
  },
});
