import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "../../constants";

type TextProps = {
  style?: object;
};

export const TText: FC<TextProps> = (props) => {
  return <Text style={[styles.ttext, props.style]}>{props.children}</Text>;
};

export const MText: FC<TextProps> = (props) => {
  return <Text style={[styles.mtext, props.style]}>{props.children}</Text>;
};

export const BText: FC<TextProps> = (props) => {
  return <Text style={[styles.btext, props.style]}>{props.children}</Text>;
};

export const LText: FC<TextProps> = (props) => {
  return <Text style={[styles.ltext, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  ttext: {
    fontSize: 16,
    fontFamily: Fonts.fontBold,
    color: Colors.fontBoldColor,
    marginBottom: 12,
  },
  btext: {
    fontSize: 14,
    fontFamily: Fonts.fontMedium,
    color: Colors.fontColor,
    marginVertical: 6,
  },
  mtext: {
    fontSize: 13,
    fontFamily: Fonts.fontBold,
    color: Colors.fontBoldColor,
    marginVertical: 6,
  },
  ltext: {
    fontSize: 20,
    fontFamily: Fonts.fontBold,
    color: Colors.fontBoldColor,
    marginVertical: 6,
  },
});
