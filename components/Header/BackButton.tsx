import { Pressable, StyleSheet, View, Easing, Text } from "react-native";
import { BackSvg } from "../../assets/svg";
import { useState } from "react";
import { TouchableRipple } from "react-native-paper";
const BackButton = (props) => {
  return (
    <TouchableRipple
      borderless={true}
      style={style.btn_bag}
      rippleColor="rgba(151, 117, 250, .50)"
      onPress={() => {
        console.log("asd");
      }}
    >
      <BackSvg />
    </TouchableRipple>
  );
};

const style = StyleSheet.create({
  btn_bag: {
    backgroundColor: "#F5F6FA",
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 45,
    marginLeft: 20,
  },
});
export default BackButton;
