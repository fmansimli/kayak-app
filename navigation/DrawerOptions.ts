import {DrawerNavigationOptions} from '@react-navigation/drawer';
import { Colors, Fonts } from '../constants';


export const drawerScreenOptions: DrawerNavigationOptions = {
  drawerContentStyle: {
    backgroundColor: Colors.drawerBckColor,
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  headerStyle: {
    backgroundColor: Colors.greenColor,
  },
  headerTitleStyle: {
    fontFamily: Fonts.fontBold,
    fontSize: 17,
  },
  drawerItemStyle: {
    borderWidth: 1,
    borderColor: Colors.brdColor,
    borderRadius: 8,
  },
  drawerLabelStyle: {
    fontFamily: Fonts.fontBold,
    fontSize: 14,
  },
};
