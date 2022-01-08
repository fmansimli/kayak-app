import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Colors, Fonts } from "../../constants";

interface MyInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const MyInput: FC<MyInputProps> = (props) => {
  return (
    <View style={[styles.comp, props.style]}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput style={styles.input} {...props} />
      {props.touched && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  comp: {
    width: "100%",
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.brdColor,
    borderRadius: 7,
  },
  label: {
    fontFamily: Fonts.fontMedium,
    fontSize: 10,
    color: Colors.fontColor,
  },
  input: {
    minHeight: 20,
    fontSize: 11,
    fontFamily: Fonts.fontBold,
    color: Colors.fontBoldColor,
  },
  error: {
    marginTop: 7,
    color: Colors.errColor,
    paddingHorizontal: 2,
    fontSize: 11,
    fontFamily: Fonts.fontMedium,
  },
});
