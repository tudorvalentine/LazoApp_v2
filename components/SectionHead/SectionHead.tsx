import { View, Text, StyleSheet, Pressable } from "react-native";
import SectionTitle from "./SectionTitle";
import Subtitle from "../Subtitle";

const SectionHead = (props) => {
  const { title, titleOfAction, onPressAction } = props;
  return (
    <View style={styles.container}>
      <SectionTitle text={title} />
      {titleOfAction != undefined ? (
        <Pressable onPress={onPressAction}>
          <Subtitle subtitleText={titleOfAction} style={styles.subtitle} />
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});
export default SectionHead;
