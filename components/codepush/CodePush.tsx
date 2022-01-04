import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Fonts } from "../../constants";

const CodePushTest = () => {
  return (
    <View style={styles.comp}>
      <Text style={styles.text}>Just CodePush By Mr.Robot</Text>
    </View>
  );
};

export default CodePushTest;

const styles = StyleSheet.create({
  comp: {},
  text: {
    fontFamily: Fonts.fontBold,
  },
});
