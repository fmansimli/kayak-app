import React, { Fragment } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useAuth } from "../context/Auth";
import { drawerScreenOptions } from "./DrawerOptions";
import TabNavigator, { tabOptions } from "./tab/TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { auth } = useAuth();

  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen name="Home" component={TabNavigator} options={tabOptions} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
