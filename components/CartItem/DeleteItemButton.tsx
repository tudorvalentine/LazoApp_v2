import { View, StyleSheet } from "react-native";
import DeleteItem from "../../assets/svg/DeleteItem";

const DeleteItemButton = () => {
  return (
    <View style={styles.container}>
      <DeleteItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#DEDEDE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
});

export default DeleteItemButton;
