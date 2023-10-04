import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Payment from "../Screens/PaymentScreen/Payment";
import AddNewCardScreen from "../Screens/AddNewCardScreen/AddNewCard";

const PaymentStackScreen = () => {
  const PaymentStack = createNativeStackNavigator();

  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen name="PaymentScreen" component={Payment} />
      <PaymentStack.Screen
        name="AddNewCardScreen"
        component={AddNewCardScreen}
      />
    </PaymentStack.Navigator>
  );
};

export default PaymentStackScreen;
