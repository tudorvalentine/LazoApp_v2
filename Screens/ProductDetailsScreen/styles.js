import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    // sbackgroundColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: "105%",
    resizeMode: "contain",
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingStart: 20,
    paddingEnd: 20,
  },
  descriptionHeader: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionLabels: {
    fontSize: 13,
    color: "#8F959E",
    fontFamily: "ir-regular",
  },

  overviewContainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overviewCard: {
    width: 77,
    height: 77,
    borderRadius: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 15,
    fontFamily: "ir-bold",
  },
});

export default styles;
