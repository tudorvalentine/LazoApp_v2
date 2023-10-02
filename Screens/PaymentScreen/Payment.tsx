import { View, Text } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import { Surface } from "react-native-paper";
import styles from "./styles";
import PaymentCard from "../../components/PaymentCard";

const Payment = () => {
  useScreenHeader({
    hasLeftArrow: true,
    title: "Payment",
    headerStyle: { height: 120 },
  });
  return (
    <View style={styles.container}>
      <PaymentCard />
    </View>
  );
};

export default Payment;
