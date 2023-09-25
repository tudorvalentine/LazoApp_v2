import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface InputProp {
  placeholder?: string;
  icon?: any;
  multiline?: boolean;
  numberOfLines?: number;
}
const CustomInput = ({
  placeholder,
  icon,
  multiline = false,
  numberOfLines = 1,
}: InputProp) => {
  return icon != undefined ? (
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      mode="outlined"
      left={<TextInput.Icon icon={() => icon} />}
      placeholder={placeholder}
      placeholderTextColor="#8F959E"
      textColor="#fff"
      outlineStyle={{ borderRadius: 10, borderColor: "#fff" }}
      style={{ backgroundColor: "#F5F6FA" }}
    />
  ) : (
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      mode="outlined"
      placeholder={placeholder}
      placeholderTextColor="#8F959E"
      textColor="#fff"
      outlineStyle={{ borderRadius: 10, borderColor: "#fff" }}
      style={{ backgroundColor: "#F5F6FA" }}
    />
  );
};
const styles = StyleSheet.create({});
export default CustomInput;
