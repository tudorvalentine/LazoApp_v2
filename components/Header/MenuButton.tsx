import { Pressable, StyleSheet, Animated, Easing } from "react-native";
import { MenuSvg, SearchSvg } from "../../assets/svg";
import { useState } from "react";
const MenuButton = (props) => {
  const { onPress } = props;

  const [isRotated, setIsRotated] = useState(false);
  const [rotationValue, setRotationValue] = useState(new Animated.Value(0));

  const toggleRotation = () => {
    const toValue = isRotated ? 0 : 1; // Toggle between 0 and 90 degrees
    Animated.timing(rotationValue, {
      toValue,
      duration: 200, // Duration of the animation in milliseconds
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      onPress(onPress());
    });

    setIsRotated(!isRotated); // Toggle the rotation state
  };

  const rotate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <Animated.View style={[style.btn_bag, { transform: [{ rotate }] }]}>
      <Pressable onPress={toggleRotation}>
        <MenuSvg />
      </Pressable>
    </Animated.View>
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
    marginLeft: 20,
  },
});
export default MenuButton;
