import { DrawerNavigationOptions } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Colors, Fonts } from "../../constants";
import { useAuth } from "../../context/Auth";
import { Fontisto } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log(user);
  }, []);

  const logoutHandler = () => {
    logout()
      .then(() => {})
      .catch((error: any) => {});
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: user?.photoURL }} />
      </View>
      <Text style={styles.email}>{user?.email}</Text>
      <Text style={styles.fullname}>{user?.displayName}</Text>
      <View style={styles.logout}>
        <Button title="logout" onPress={logoutHandler} />
      </View>
    </View>
  );
};

export const profileOptions: DrawerNavigationOptions = {
  drawerIcon: () => (
    <Fontisto name="user-secret" size={24} color={Colors.fontColor} />
  ),
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  email: {
    fontFamily: Fonts.fontMedium,
    color: Colors.fontColor,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  fullname: {
    fontFamily: Fonts.fontMedium,
    color: Colors.fontColor,
    padding: 5,
    margin: 5,
    borderWidth: 1,
  },
  imgCont: {
    width: 140,
    height: 140,
    marginBottom: 30,
    borderRadius: 70,
    overflow: "hidden",
  },
  img: { width: "100%", height: "100%" },
  logout: {
    marginVertical: 20,
  },
});
