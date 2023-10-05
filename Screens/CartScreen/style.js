import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  deliverySurface: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  containerDeliveryPayment: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textAdress: {
    fontSize: 15,
    fontFamily: "ir-regular",
    paddingBottom: 10,
  },
  textCity: {
    fontSize: 13,
    color: "#8F959E",
    fontFamily: "ir-regular",
  },
  totalsContainer: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBottomSheet: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
