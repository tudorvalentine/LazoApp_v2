import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/img/batnik.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "70%",
  },
});

export default ProductDetailsScreen;
