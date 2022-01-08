import React, { Fragment } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAuth } from "../context/Auth";
import { drawerScreenOptions } from "./DrawerOptions";
import TabNavigator, { tabOptions } from "./tab/TabNavigator";
import AuthNavigator, { authOptions } from "./stack/AuthNavigator";
import ProfileScreen, {
  profileOptions,
} from "../screens/account/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { user } = useAuth();

  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      {user ? (
        <Fragment>
          <Drawer.Screen
            name="Main"
            component={TabNavigator}
            options={tabOptions}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={profileOptions}
          />
        </Fragment>
      ) : (
        <Drawer.Screen
          name="Auth"
          component={AuthNavigator}
          options={authOptions}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
