import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingEnd: 20,
    paddingStart: 20,
  },
  addReviewSect: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  averageRev: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnAddRev: {
    borderRadius: 10,
  },
});

export default styles;
