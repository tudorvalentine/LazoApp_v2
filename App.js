import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import WelcomeScreen from "./components/WelcomeScreen";
// import GetStarted from "./components/GetStarted";
// import LoginScreen from "./components/LoginScreen";
// import MainPage from "./components/MainPage";
// import SignUpScreen from "./components/SignUpScreen";
// import ForgotPwdScreen from "./components/ForgotPwdScreen";
// import VerifyCodeScreen from "./components/VerifyCodeScreen/VerifyCodeScreen";
import NewPwdScreen from "./Screens/NewPassScreen/NewPwdScreen";

import Home from "./Screens/HomeScreen/Home";
import Wishlist from "./Screens/WishlistScreen/WishlistScreen";
import Orders from "./Screens/OrdersScreen/Orders";
import Cards from "./Screens/CardsScreen/Cards";

import OrderButton from "./components/Header/OrderButton";
import MenuButton from "./components/Header/MenuButton";
import { BagSvg, HeartSvg, HomeSvg, CardSvg, SearchSvg } from "./assets/svg";
import BackButton from "./components/Header/BackButton";
import ProductDetailsScreen from "./Screens/ProductDetailsScreen/ProductDetailsScreen";
import ReviewsScreen from "./Screens/ReviewsScreen/ReviewsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
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
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator> */}
        {/* <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => <HomeSvg stroke={color} />,
              tabBarShowLabel: false,
              headerTitle: "",
              headerTitleAlign: "center",
              headerRight: () => <OrderButton />,
              headerLeft: () => (
                <MenuButton
                  onPress={() => {
                    console.log(typeof (<SearchSvg />));
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              title: "Wishlist",
              tabBarShowLabel: false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: 17,
                fontFamily: "ir-bold",
                color: "#1D1E20",
              },
              tabBarIcon: ({ color }) => <HeartSvg stroke={color} />,
              headerRight: () => <OrderButton />,
              headerLeft: () => <BackButton />,
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              tabBarLabel: "",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <BagSvg stroke={color} />,
            }}
          />
          <Tab.Screen
            name="Cards"
            component={Cards}
            options={{
              tabBarLabel: "",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <CardSvg stroke={color} />,
            }}
          />
        </Tab.Navigator> */}
        <ReviewsScreen />
      </PaperProvider>
    </NavigationContainer>
    // <PaperProvider>
    //   <NewPwdScreen />
    // </PaperProvider>
  );
}
