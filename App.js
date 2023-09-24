import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "ir-black": require("./assets/fonts/Inter-Black.ttf"),
    "ir-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "ir-extra-bold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "ir-extra-light": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "ir-light": require("./assets/fonts/Inter-Light.ttf"),
    "ir-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "ir-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "ir-semi-bold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "ir-thin": require("./assets/fonts/Inter-Thin.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
