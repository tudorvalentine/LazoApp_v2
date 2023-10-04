import { Button, Text } from "react-native-paper";

export default function BottomButton({ onPress, buttonText }) {
  return (
    <Button
      mode="contained"
      style={{ borderRadius: 10, marginTop: 20 }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "ir-bold",
          fontSize: 15,
          letterSpacing: 1,
          padding: 10,
        }}
      >
        {buttonText}
      </Text>
    </Button>
  );
}
