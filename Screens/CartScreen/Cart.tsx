import { View, Text } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import CartItem from "../../components/CartItem/CartItem";
const Cart = () => {
  useScreenHeader({
    hasLeftArrow: true,
    title: "Cart",
    headerStyle: { height: 125 },
  });
  return (
    <View style={styles.container}>
      <CartItem style={{ marginBottom: 20 }} />
      <CartItem style={{ marginBottom: 20 }} />
    </View>
  );
};

export default Cart;
