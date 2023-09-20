import { Text, StyleSheet } from "react-native";

const Subtitle = (props) => {
  const { subtitleText } = props;

  return <Text style={style.page_subtitle}>{subtitleText}</Text>;
};

const style = StyleSheet.create({
  page_subtitle: {
    fontFamily: "ir-regular",
    color: "#8F959E",
    fontSize: 15,
  },
});
export default Subtitle;
