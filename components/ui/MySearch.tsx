import { Feather } from "@expo/vector-icons";
import React, { FC, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Fonts } from "../../constants";

interface MySearchProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

const MySearch: FC<MySearchProps> = (props) => {
  return (
    <View style={[styles.comp, props.style]}>
      <Feather name="search" size={24} color={Colors.fontColor} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default MySearch;

const styles = StyleSheet.create({
  comp: {
    width: "100%",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.brdColor,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  input: {
    minHeight: 20,
    fontSize: 18,
    fontFamily: Fonts.fontLight,
    color: Colors.fontColor,
    marginLeft: 20,
    flex: 1,
    lineHeight: 20,
    letterSpacing: 1,
  },
});
