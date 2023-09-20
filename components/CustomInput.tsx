import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const CustomInput = (props) => {
  const { placeholder, icon } = props;
  return icon != undefined ? (
    <TextInput
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
