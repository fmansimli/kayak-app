import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { Colors, Fonts } from "../../constants";

interface MyBtnProps extends TouchableOpacityProps {}

const MyButton: FC<MyBtnProps> = (props) => {
  return (
    <TouchableOpacity style={[styles.comp, props.style]} {...props}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  comp: {
    padding: 14,
    backgroundColor: Colors.greenColor,
    borderRadius: 7,
    marginVertical: 7,
  },
  text: {
    fontFamily: Fonts.fontMedium,
    color: Colors.whiteColor,
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
