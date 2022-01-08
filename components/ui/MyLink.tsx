import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Fonts } from "../../constants";

type MyLinkProps = {
  link: string;
  style?: object;
};

const MyLink: FC<MyLinkProps> = (props) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => nav.navigate(props.link)}
    >
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MyLink;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: Fonts.fontBold,
    color: Colors.fontBoldColor,
    marginVertical: 8,
  },
});
