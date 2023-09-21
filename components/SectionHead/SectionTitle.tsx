import { Text, StyleSheet } from "react-native";

const SectionTitle = (props) => {
  const { text } = props;
  return <Text style={styles.title_sect}>{text}</Text>;
};

const styles = StyleSheet.create({
  title_sect: {
    fontSize: 17,
    fontFamily: "ir-semi-bold",
    paddingTop: 20,
    paddingBottom: 10,
  },
});
export default SectionTitle;
