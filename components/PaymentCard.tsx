import { StyleSheet, View, Text } from "react-native";
import { Surface } from "react-native-paper";
import { MasterCardIconSvg, VisaIconSvg } from "../assets/svg";
const PaymentCard = () => {
  return (
    <Surface style={styles.cardItemContainer}>
      <View style={styles.itemCardHead}>
        <Text style={[styles.textColor, styles.ownerName]}>Popescu Tudor</Text>
        <VisaIconSvg />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={[styles.textColor, styles.cardNumber]}>
          5254 **** **** 7690
        </Text>
      </View>
    </Surface>
  );
};
const styles = StyleSheet.create({
  cardItemContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFCB3C",
    height: 210,
    justifyContent: "space-between",
  },
  itemCardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textColor: {
    color: "#FEFEFE",
  },
  ownerName: { fontFamily: "ir-bold" },
  cardNumber: {
    fontSize: 17,
    fontFamily: "ir-semi-bold",
    letterSpacing: 5.775,
    textAlign: "center",
  },
});

export default PaymentCard;
