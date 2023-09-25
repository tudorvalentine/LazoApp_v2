import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
    height: "70%",
  },
});

export default styles;
