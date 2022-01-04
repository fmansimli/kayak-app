import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Colors, Fonts } from '../constants';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

const AboutScreen: FC = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>  About Screen!</Text>
    </View>
  );
};

export const aboutOptions: DrawerNavigationOptions = {
  drawerIcon: () => <AntDesign name="infocirlce" size={24} color="#79807f" />,
};

export default AboutScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.fontColor,
    fontFamily: Fonts.fontBold,
    textAlign: 'center',
    padding: 50,
    fontSize: 16,
  },
});
