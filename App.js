import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./components/WelcomeScreen";
import GetStarted from "./components/GetStarted";
import LoginScreen from "./components/LoginScreen";
import MainPage from "./components/MainPage";
import SignUpScreen from "./components/SignUpScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
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
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
