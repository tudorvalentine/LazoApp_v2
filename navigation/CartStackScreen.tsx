import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNewCardScreen from "../Screens/AddNewCardScreen/AddNewCard";
import AddNewAddressScreen from "../Screens/AddNewAddressScreen/AddNewAddressScreen";
import Cart from "../Screens/CartScreen/Cart";
const CartStackScreen = () => {
  const CartStack = createNativeStackNavigator();

  return (
    <CartStack.Navigator>
      <CartStack.Screen name="CartScreen" component={Cart} />
      <CartStack.Screen name="AddNewCardScreen" component={AddNewCardScreen} />
      <CartStack.Screen name="AddNewAddress" component={AddNewAddressScreen} />
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
