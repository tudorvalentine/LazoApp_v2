import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackScreen from "./HomeStackScreen";
import PaymentStackScreen from "./PaymentStackScreen";

import { HomeSvg, HeartSvg, BagSvg, CardSvg } from "../assets/svg";
import Wishlist from "../Screens/WishlistScreen/WishlistScreen";
import OrderButton from "../components/Header/OrderButton";
import BackButton from "../components/Header/BackButton";
import CartStackScreen from "./CartStackScreen";
import AuthenticationStackScreen from "./AuthenticationStackScreen";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../redux/slices/auth.slice";

const RootNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      {useSelector(selectCurrentAccessToken) != null ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color }) => <HomeSvg stroke={color} />,
              tabBarShowLabel: false,
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
            name="Cart"
            component={CartStackScreen}
            options={{
              tabBarLabel: "",
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <BagSvg stroke={color} />,
            }}
          />
          <Tab.Screen
            name="Payment"
            component={PaymentStackScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <CardSvg stroke={color} />,
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthenticationStackScreen />
      )}
    </>
  );
};

export default RootNavigator;
