import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

type CardProps = {
  style?: object;
};

const Card: FC<CardProps> = (props) => {
  return <View style={[styles.comp, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  comp: {
    width: "100%",
    shadowColor: Colors.shColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
});
