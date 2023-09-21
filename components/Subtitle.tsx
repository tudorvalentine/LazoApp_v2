import { Text, StyleSheet } from "react-native";

const Subtitle = (props) => {
  const { subtitleText, style } = props;

  return <Text style={[styles.page_subtitle, style]}>{subtitleText}</Text>;
};

const styles = StyleSheet.create({
  page_subtitle: {
    fontFamily: "ir-regular",
    color: "#8F959E",
    fontSize: 15,
  },
});
export default Subtitle;
