import { View, Text } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import { useNavigation } from "@react-navigation/native";
const Cart = () => {
  useScreenHeader({
    hasLeftArrow: true,
  });
  return (
    <View>
      <Text>asdasdsads</Text>
    </View>
  );
};

export default Cart;
