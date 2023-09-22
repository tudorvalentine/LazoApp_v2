import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import Home from "../Screens/HomeScreen/Home";
import Wishlist from "../Screens/WishlistScreen/WishlistScreen";
import Orders from "../Screens/OrdersScreen/Orders";
import Cards from "../Screens/CardsScreen/Cards";

// SVG
import { SearchSvg, HeartSvg, BagSvg, CardSvg, HomeSvg } from "../assets/svg";
import OrderButton from "../components/Header/OrderButton";
import MenuButton from "../components/Header/MenuButton";
import BackButton from "../components/Header/BackButton";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
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
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
