import { View, StyleSheet } from "react-native";
import DownArrow from "../../assets/svg/DownArrow";
import UpArrow from "../../assets/svg/UpArrow";

interface TypeArrow {
  arrow: boolean; // if true , arrow is down, otherwise it wil be up arrow
}

const CounterArrow = ({ arrow }: TypeArrow) => {
  return (
    <View style={styles.container}>{arrow ? <DownArrow /> : <UpArrow />}</View>
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

export default CounterArrow;
