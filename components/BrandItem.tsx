import { View, StyleSheet, Text, Image } from "react-native";
import { Surface } from "react-native-paper";
const BrandItem = (props) => {
  const { icon, brand } = props;
  return (
    <Surface style={styles.brand_container}>
      <View style={styles.brand_icon_wrap}>{icon}</View>
      <Text style={styles.brand_name}>{brand}</Text>
    </Surface>
  );
};
const styles = StyleSheet.create({
  brand_container: {
    padding: 10,
    paddingRight: 20,
    backgroundColor: "#F5F6FA",
    borderRadius: 10,
    width: 130,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand_icon_wrap: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  brand_name: {
    fontSize: 16,
    fontFamily: "ir-semi-bold",
  },
});
export default BrandItem;
