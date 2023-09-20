import { Text, StyleSheet } from "react-native";

const Title = (props) => {
  const { titleText } = props;

  return <Text style={style.page_title}>{titleText}</Text>;
};

const style = StyleSheet.create({
  page_title: {
    fontFamily: "ir-bold",
    fontSize: 25,
    letterSpacing: -0.21,
  },
});

export default Title;
