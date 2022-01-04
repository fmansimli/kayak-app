import "react-native-gesture-handler";
import React from "react";
import CodePush from "react-native-code-push";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppNavigator from "./navigation/AppNavigator";
import RootProvider from "./context/Root";
import { useFonts } from "expo-font";

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [loaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const backgroundStyle: any = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={Colors.greenColor} />
      <RootProvider>
        <AppNavigator />
      </RootProvider>
    </SafeAreaView>
  );
};

export default CodePush(codePushOptions)(App);
