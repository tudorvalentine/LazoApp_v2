import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import ReviewsScreen from "../Screens/ReviewsScreen/ReviewsScreen";

const ScreenStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNav" component={BottomTabNavigator} />
      <Stack.Screen name="Rev" component={ReviewsScreen} />
    </Stack.Navigator>
  );
};

export default ScreenStackNavigator;
