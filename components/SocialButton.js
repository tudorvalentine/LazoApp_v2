import { Button, Text } from "react-native-paper";

export default function SocialButton({ color, icon, text }) {
  return (
    <Button
      style={{ width: "70%", borderRadius: 10, padding: 10, marginBottom: 25 }}
      mode="contained"
      icon={icon}
      buttonColor={color}
    >
      <Text style={{ color: "white", fontFamily: "ir-bold", fontSize: 17 }}>
        {text}
      </Text>
    </Button>
  );
}
