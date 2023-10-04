import { StyleSheet, View, Text } from "react-native";
import { Surface } from "react-native-paper";
import { MasterCardIconSvg, VisaIconSvg } from "../assets/svg";

interface CardData {
  owner?: string;
  cardNumber?: string;
  style?: any;
}
const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const getTextColor = (hexColor) => {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate the relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Use white text for dark background colors, and black text for light background colors
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};
const cardBgColor = generateColor();
const textColor = getTextColor(cardBgColor);
const PaymentCard = ({ style, owner, cardNumber }: CardData) => {
  return (
    <Surface style={[styles.cardItemContainer, style]}>
      <View style={styles.itemCardHead}>
        <Text style={[styles.textColor, styles.ownerName]}>{owner}</Text>
        <VisaIconSvg color={textColor} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={[styles.textColor, styles.cardNumber]}>
          {cardNumber.replace(/\b (\d{4}) (\d{4}) \b/, " **** **** ")}
        </Text>
      </View>
    </Surface>
  );
};
const styles = StyleSheet.create({
  cardItemContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: cardBgColor,
    height: "75%",
    justifyContent: "space-between",
  },
  itemCardHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textColor: {
    // color: "#FEFEFE" ,
    color: textColor,
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
