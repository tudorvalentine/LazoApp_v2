import { View, Text } from "react-native";
import useScreenHeader from "../../hooks/useScreenHeader";
import { Surface } from "react-native-paper";
import styles from "./styles";

const Payment = () => {
  useScreenHeader({
    hasLeftArrow: true,
    title: "Payment",
    headerStyle: { height: 120 },
  });
  return (
    <View style={styles.container}>
      <Surface style={styles.cardItemContainer}>
        <View style={styles.itemCardHead}>
          <Text>Owner</Text>
          <Text>Type</Text>
        </View>
      </Surface>
    </View>
  );
};

export default Payment;
