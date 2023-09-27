import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

interface Size {
  size: string;
}

const SizeSuface = ({ size }: Size) => (
  <Surface style={styles.container} elevation={0}>
    <Text style={styles.textSize}>{size}</Text>
  </Surface>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F5F6FA",
    width: 70,
    height: 70,
  },
  textSize: {
    fontFamily: "ir-bold",
    fontSize: 17,
  },
});

export default SizeSuface;
