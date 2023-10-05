import { View, Text } from "react-native";
import styles from "./style";
import { g_style } from "../../styles/styles";
import CustomInput from "../../components/CustomInput";
import BottomButton from "../../components/BottomButton";
import useScreenHeader from "../../hooks/useScreenHeader";
const AddNewAddressScreen = () => {
  useScreenHeader({
    title: "Address",
    hasLeftArrow: true,
  });
  return (
    <View style={styles.container}>
      <Text style={g_style.label}>Name </Text>
      <CustomInput placeholder="Mrj Raju" />
      <View style={styles.countryCityContainer}>
        <View style={{ flex: 1, paddingRight: 15 }}>
          <Text style={g_style.label}>Country </Text>
          <CustomInput placeholder="Bangladesh" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={g_style.label}>City </Text>
          <CustomInput placeholder="Sylhet" />
        </View>
      </View>
      <Text style={g_style.label}>Phone Number</Text>
      <CustomInput placeholder="Sylhet" />
      <Text style={g_style.label}>Address</Text>
      <CustomInput placeholder="Chhatak, Sunamgonj 12/8AB" />
      <View style={styles.containerBottomBtn}>
        <BottomButton buttonText="Save Address" onPress={() => {}} />
      </View>
    </View>
  );
};

export default AddNewAddressScreen;
