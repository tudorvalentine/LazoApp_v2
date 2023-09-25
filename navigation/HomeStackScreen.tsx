import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/HomeScreen/Home";
import ProductDetailsScreen from "../Screens/ProductDetailsScreen/ProductDetailsScreen";
import ReviewsScreen from "../Screens/ReviewsScreen/ReviewsScreen";
import AddReviewScreen from "../Screens/AddReviewScreen/AddReview";
const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <HomeStack.Screen name="ReviewsScreen" component={ReviewsScreen} />
      <HomeStack.Screen name="AddReview" component={AddReviewScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
