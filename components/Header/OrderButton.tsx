import { Pressable, StyleSheet, Animated } from "react-native";
import { BagSvg } from "../../assets/svg";
import { useState } from "react";
const OrderButton = (props) => {
  const { onPress, stroke } = props;
  const [scaleValue] = useState(new Animated.Value(1));
  const handlePress = () => {
    // Add animation logic here
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.3, // Scale up to 1.2 times
        duration: 150, // Duration of the animation
        useNativeDriver: true, // Use the native driver for better performance
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // Scale back to 1
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onPress();
    });
  };
  return (
    <Animated.View
      style={[style.btn_bag, { transform: [{ scale: scaleValue }] }]}
    >
      <Pressable onPress={handlePress}>
        <BagSvg stroke="#1D1E20" />
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
    margin: 20,
  },
});
export default OrderButton;
