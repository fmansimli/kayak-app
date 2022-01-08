import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FacebookLogin from "../../components/social/FacebookLogin";
import GoogleLogin from "../../components/social/GoogleLogin";
import Card from "../../components/ui/Card";
import MyButton from "../../components/ui/MyButton";
import MyInput from "../../components/ui/MyInput";
import { Colors } from "../../constants";

const SignInScreen = () => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <MyInput label="Email" />
        <MyInput label="Password" />
        <MyButton>Sign In</MyButton>
        <View style={styles.social}>
          <GoogleLogin />
          <FacebookLogin />
        </View>
      </Card>
    </View>
  );
};

export const signInOptions: NativeStackNavigationOptions = {};

export default SignInScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 5,
    padding: 10,
  },
  social: {
    marginVertical: 20,
  },
});
